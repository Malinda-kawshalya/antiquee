namespace backend.Models.Entities
{
    public class Bid
    {
        public Guid Id { get; set; }
        public decimal BidAmount { get; set; }
        public DateTime BidTime { get; set; }

        // Foreign key reference to Auction
        public Guid AuctionId { get; set; }
        public  Auction Auction { get; set; }  // Navigation property for the related auction
    }
}
