using backend.Data;
using backend.DTOs.Auction;
using backend.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;


namespace backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController : ControllerBase
    {

        private readonly ApplicationDBContext dbContext;

        public AuctionController(ApplicationDBContext dbContext)
        {
            this.dbContext = dbContext;
        }



        [HttpPost("create")]
        public IActionResult CreateAuction(CreateAuctionDTO dto){
            var newAuction = new Auction(){
               Title = dto.Title,
               Description = dto.Description,
               StartingPrice = dto.StartingPrice,
               StartTime = dto.StartTime,
               EndTime = dto.EndTime,
               Category = dto.Category,
               SellerId = dto.SellerId

            };

             dbContext.Auctions.Add(newAuction);
             dbContext.SaveChanges();

             return Ok(newAuction);
        }

         [HttpPut("update/{id}")]
    public IActionResult UpdateAuction(Guid id, UpdateAuctionDTO dto)
    {
        var auction = dbContext.Auctions.FirstOrDefault(a => a.Id == id);
        if (auction == null)
        {
            return NotFound(new { message = "Auction not found" });
        }

        // Update the auction fields
        auction.Title = dto.Title;
        auction.Description = dto.Description;
        auction.StartingPrice = dto.StartingPrice;
        auction.StartTime = dto.StartTime;
        auction.EndTime = dto.EndTime;
        auction.Category = dto.Category;

        dbContext.SaveChanges();

        return Ok(auction);
    }


      


        [HttpGet("all")]
        public IActionResult GetAllProduct()
        {
            var allProducts = dbContext.Auctions.ToList();
            return Ok(allProducts);
        }

    }
}