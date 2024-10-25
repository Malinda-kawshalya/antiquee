namespace backend.Models.Entities
{
    public class Auction
    {
        public Guid Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public decimal StartingPrice { get; set; }
        public DateTime StartTime { get; set; }
        public decimal AuctionDuration { get; set; }
        public required string Image { get; set; }

        // Navigation property to relate Auction to its Bids
        public List<Bid> Bids { get; set; } = new List<Bid>(); // Initialize as an empty list
    }
}
