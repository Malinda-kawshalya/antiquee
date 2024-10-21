using backend.Data;
using backend.DTOs.Bid;
using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
[Route("api/[controller]")]
public class ReportController : ControllerBase
{
    private readonly ApplicationDBContext _context;

    public ReportController(ApplicationDBContext context)
    {
        _context = context;
    }

    [HttpGet("AuctionPerformance")]
public IActionResult GetAuctionPerformance()
{
    var totalAuctions = _context.Auctions.Count();
    var completedAuctions = _context.Auctions.Count(a => a.EndDate <= DateTime.UtcNow);
    var ongoingAuctions = _context.Auctions.Count(a => a.StartDate <= DateTime.UtcNow && a.EndDate > DateTime.UtcNow);
  /*  var avgBidsPerAuction = _context.Auctions
                            .Where(a => a.Bids.Any())
                            .Select(a => a.Bids.Count)
                            .Average();*/

    return Ok(new
    {
        TotalAuctions = totalAuctions,
        CompletedAuctions = completedAuctions,
        OngoingAuctions = ongoingAuctions,
        //AvgBidsPerAuction = avgBidsPerAuction
    });
}
[HttpGet("BidderActivity")]
public IActionResult GetBidderActivity()
{
    var bidderActivity = _context.Users
        .Select(user => new
        {
            BidderId = user.Id,
            Username = user.Username,
            TotalBidsPlaced = _context.Bids.Count(b => b.BidderId == user.UserId),
           /* TotalAmountSpent = _context.Bids
                                .Where(b => b.BidderId == user.UserId && b.IsWinningBid)
                                .Sum(b => b.Amount)*/
        })
        .OrderByDescending(b => b.TotalBidsPlaced)
        .ToList();

    return Ok(bidderActivity);

}
}
}
