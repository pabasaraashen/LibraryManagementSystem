using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/Books")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly LibraryContext _context;

        public BookController(LibraryContext context)
        {
            _context = context;
        }

        // GET: api/Book
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return await _context.Books.ToListAsync();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null) return NotFound();
            return book;
        }

        // POST: api/Books
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _context.Books.Add(book);
            await _SaveChangesAsync();
            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, Book book)
        {
            if (id != book.Id) return BadRequest();

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                await _SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Books.Any(e => e.Id == id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null) return NotFound();

            _context.Books.Remove(book);
            await _SaveChangesAsync();

            return NoContent();
        }

        private async Task _SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}