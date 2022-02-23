using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions option) : base(option) 
        {
        }

        public DbSet<product> Products { get; set; }
    }
}