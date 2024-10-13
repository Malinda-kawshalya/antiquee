using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data {

    public class ApplicationDBContext : DbContext{

        public ApplicationDBContext(DbContextOptions options ): base(options){

        }

        //! Employee Collection
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Product> Products { get; set; }
    }
}