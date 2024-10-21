namespace backend.Models.Entities{

    public class Auction{

        public Guid Id {get; set;}
    public required string Title { get; set; }
    public required string Description { get; set; }
    public decimal StartingPrice { get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public required string Category { get; set; }
    public int SellerId { get; set; } 
    }
}