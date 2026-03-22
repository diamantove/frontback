public interface IStorage
{
    public List<Contact> GetContacts();
    public bool Add(Contact contact);
    public bool Remove(int id);
    public bool UpdateContact(ContactDto contactDto, int id);

}
