
using System.Text;
using Microsoft.Data.Sqlite;

public class SqliteStorage : IStorage
{
    private string connectionString;

    public SqliteStorage(string connectionString)
    {
        this.connectionString = connectionString;
    }

    public Contact Add(ContactDto contact)
    {
        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        command.CommandText = "INSERT INTO contacts(name, email) VALUES (@name, @email) RETURNING ID";
        command.Parameters.AddWithValue("@name", contact.Name);
        command.Parameters.AddWithValue("@email", contact.Email);

        return new Contact
        {
            Id = Convert.ToInt32(command.ExecuteScalar()),
            Name = contact.Name,
            Email = contact.Email
        };
    }

    public List<Contact> GetContacts()
    {
        var contacts = new List<Contact>();

        using var connection = new SqliteConnection("Data source=contacts.db");
        connection.Open();

        var command = connection.CreateCommand();
        command.CommandText = "SELECT * FROM contacts";

        var reader = command.ExecuteReader();

        while (reader.Read())
        {
            contacts.Add(new Contact
            {
                Id = reader.GetInt32(0),
                Name = reader.GetString(1),
                Email = reader.GetString(2)
            });
        }

        return contacts;
    }

    public bool Remove(int id)
    {
        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        command.CommandText = "DELETE FROM contacts WHERE ID = @id";
        command.Parameters.AddWithValue("@id", id);

        return command.ExecuteNonQuery() > 0;
    }

    public bool UpdateContact(ContactDto contactDto, int id)
    {
        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        string sql = "UPDATE contacts SET name = @name, email = @email WHERE ID = @id";
        command.CommandText = sql;

        command.Parameters.AddWithValue("@name", contactDto.Name);
        command.Parameters.AddWithValue("@email", contactDto.Email);
        command.Parameters.AddWithValue("@id", id);

        return command.ExecuteNonQuery() > 0;
    }
}