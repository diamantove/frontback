public class SqliteEfStorage : IStorage
{
    public readonly SqliteDbContext context;

    public SqliteEfStorage(SqliteDbContext context)
    {
        this.context = context;
    }

    public List<Contact> GetContacts()
    {
        return context.Contacts.ToList();
    }

    public Contact Add(ContactDto contact)
    {
        Contact newContact = new Contact
        {
            Name = contact.Name,
            Email = contact.Email
        };

        context.Contacts.Add(newContact);
        context.SaveChanges();

        return newContact;
    }

    public bool Remove(int id)
    {
        var contact = context.Contacts.Find(id);

        if (contact == null)
            return false;

        context.Contacts.Remove(contact);
        context.SaveChanges();

        return true;
    }

    public bool UpdateContact(ContactDto contactDto, int id)
    {
        var contact = context.Contacts.Find(id);

        if (contact == null)
            return false;

        contact.Name = contactDto.Name;
        contact.Email = contactDto.Email;
        context.SaveChanges();

        return true;
    }
}
