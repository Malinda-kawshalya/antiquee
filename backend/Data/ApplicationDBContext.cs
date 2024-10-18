using backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.Data {

    public class ApplicationDBContext : DbContext{

        public ApplicationDBContext(DbContextOptions options ): base(options){

        }

        //! Employee Collection
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Bid> Bids { get; set; }
    }
}