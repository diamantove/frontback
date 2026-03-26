
using Bogus;

public class SqlitePaginationEfStorage : SqliteEfStorage, IPaginationStorage
{
    public SqlitePaginationEfStorage(SqliteDbContext context) : base(context)
    {
    }

    public Contact GetContactById(int id)
    {
        return base.context.Contacts.Find(id);
    }

    public (List<Contact>, int) GetContacts(int pageNumber, int pagesize)
    {
        int total = base.context.Contacts.Count();

        var contacts = base.context.Contacts
        .Skip((pageNumber - 1) * pagesize)
        .Take(pagesize)
        .ToList();

        return (contacts, total);
    }
}