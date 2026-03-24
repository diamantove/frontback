public class InMemoryStorage : IStorage
{
    private List<Contact> Contacts { get; set; } = new List<Contact>();
    private int lastId { get; set; } = 0;

    public InMemoryStorage()
    {
        for (int i = 1; i <= 5; i++)
        {
            this.Add(new ContactDto()
            {
                Name = $"Полное имя {i}",
                Email = $"{Guid.NewGuid().ToString().Substring(0, 5)}_{i}@ksergey.ru"
            });
        }
    }

    public List<Contact> GetContacts()
    {
        return Contacts;
    }

    public Contact Add(ContactDto contact)
    {
        Contact newContact = new Contact
        {
            Id = ++lastId,
            Name = contact.Name,
            Email = contact.Email
        };

        Contacts.Add(newContact);

        return newContact;
    }

    public bool Remove(int id)
    {
        Contact contact;
        for (int i = 0; i < Contacts.Count; i++)
        {
            if (this.Contacts[i].Id == id)
            {
                contact = Contacts[i];
                Contacts.Remove(contact);
                return true;
            }
        }
        return false;
    }

    public bool UpdateContact(ContactDto contactDto, int id)
    {
        Contact contact;
        for (int i = 0; i < Contacts.Count; i++)
        {
            if (Contacts[i].Id == id)
            {
                contact = Contacts[i];
                if (!String.IsNullOrEmpty(contactDto.Email))
                {
                    contact.Email = contactDto.Email;
                }
                if (!String.IsNullOrEmpty(contactDto.Name))
                {
                    contact.Name = contactDto.Name;
                }
                return true;
            }
        }
        return false;
    }


}