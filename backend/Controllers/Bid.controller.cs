using backend.Data;
using backend.DTOs.Bid;
using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class BidController : ControllerBase
{
    private readonly ApplicationDBContext _context;

    public BidController(ApplicationDBContext context)
    {
        _context = context;
    }

    // Place a new bid
    [HttpPost]
        public async Task<ActionResult<Bid>> PostBid([FromBody] CreateBidDTO bidDTO)
        {
            // Validate the incoming bid data
            if (bidDTO.BidAmount <= 0)
            {
                return BadRequest("Bid amount must be greater than zero.");
            }

            // Map CreateBidDTO to the Bid entity
            var bid = new Bid
            {
                Id = Guid.NewGuid(), // Generate a new Guid for the bid
                BidAmount = bidDTO.BidAmount,
                BidTime = bidDTO.BidTime // Set the bid time from DTO
            };

            // Add the bid to the database
            _context.Bids.Add(bid);
            await _context.SaveChangesAsync();

            // Return the created bid with a 201 Created response
            return CreatedAtAction(nameof(PostBid), new { id = bid.Id }, bid);
        }

    // Get all bids for an auction
    [HttpGet("{auctionId}")]
    public async Task<IActionResult> GetBidsForAuction(Guid auctionId)
    {
        var bids = await _context.Bids
            .Where(b => b.Id == auctionId)
            .ToListAsync();

        return Ok(bids);
    }


}



}

