public interface IStorage
{
    public List<Contact> GetContacts();
    public Contact Add(ContactDto contact);
    public bool Remove(int id);
    public bool UpdateContact(ContactDto contactDto, int id);

}

