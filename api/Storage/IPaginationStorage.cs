public interface IPaginationStorage : IStorage
{
    Contact GetContactById(int id);
    (List<Contact>, int) GetContacts(int pageNumber, int pagesize);
}
