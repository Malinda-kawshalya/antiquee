namespace backend.DTOs.Auction{

   public class CreateAuctionDTO
{
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required decimal StartingPrice { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public required string Category { get; set; }
    public int SellerId { get; set; }  // Should be tied to the authenticated user in practice
}

}