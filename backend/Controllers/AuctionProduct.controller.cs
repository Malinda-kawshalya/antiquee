using backend.Data;
using backend.DTOs.Poduct;
using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuctionProductController : ControllerBase
    {

        private readonly ApplicationDBContext dbContext;

        public AuctionProductController(ApplicationDBContext dbContext)
        {
            this.dbContext = dbContext;
        }



        [HttpPost("create")]
        public IActionResult CreateEmployee(CreateProductDTO dto){
            var newProduct = new Product(){
               Name = dto.Name,
               Price = dto.Price

            };

             dbContext.Add(newProduct);
             dbContext.SaveChanges();

             return Ok(newProduct);
        }

        [HttpGet("all")]
        public IActionResult GetAllProduct()
        {
            var allProducts = dbContext.Products.ToList();
            return Ok(allProducts);
        }

    }
}