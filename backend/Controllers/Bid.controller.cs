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
    public async Task<IActionResult> PlaceBid([FromBody] CreateBidDTO dto)
    {
        var auction = await _context.Products.FindAsync(dto.AuctionId);

        if (auction == null)
            return NotFound("Auction not found");

            /*if (CreateBidDTO.Amount <= auction.Price)
            return BadRequest("Bid must be higher than the current price");*/

        var bid = new Bid
        {
            Id = Guid.NewGuid(),
            Amount = dto.Amount,
            BidTime = DateTime.UtcNow,
            UserId = dto.UserId
        };

        auction.Price = dto.Amount;

        _context.Bids.Add(bid);
        await _context.SaveChangesAsync();

        return Ok(bid);
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