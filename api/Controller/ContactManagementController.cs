using System.Numerics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class ContactManagementController : BaseController
{
    private readonly IPaginationStorage storage;

    public ContactManagementController(IPaginationStorage storage)
    {
        this.storage = storage;
    }

    [HttpPost("contacts")]
    public IActionResult Create([FromBody] ContactDto contact)
    {
        Contact res = storage.Add(contact);

        if (res != null)
            return Ok(res);

        return Conflict("Не удалось выполнить добавление контакта.");
    }

    [HttpGet("contacts")]
    public ActionResult<List<Contact>> GetContacts()
    {
        return Ok(storage.GetContacts());
    }

    [HttpDelete("contacts/{id}")]
    public IActionResult DeleteContact(int id)
    {
        bool res = storage.Remove(id);
        if (res) return NoContent();
        return BadRequest("Ошибка id");
    }

    [HttpPut("contacts/{id}")]
    public IActionResult UpdateContact([FromBody] ContactDto contactDto, int id)
    {
        bool res = storage.UpdateContact(contactDto, id);

        if (res)
            return Ok();

        return Conflict("Контакт с указанным ID не нашёлся");
    }

    [HttpGet("contacts/{id}")]
    public IActionResult GetContact(int id)
    {
        Contact res = storage.GetContactById(id);

        if (res != null)
            return Ok(res);

        return NotFound("Контакт с указанным ID не нашёлся.");
    }

    [HttpGet("contacts/page")]
    public IActionResult GetContacts(int pageNumber, int pagesize)
    {
        var (contacts, total) = storage.GetContacts(pageNumber, pagesize);

        var result = new
        {
            Contacts = contacts,
            TotalPages = total,
            CurrentPage = pageNumber,
            PageSize = pagesize
        };

        return Ok(result);
    }
}
