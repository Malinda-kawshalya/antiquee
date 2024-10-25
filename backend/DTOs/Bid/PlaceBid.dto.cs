namespace backend.DTOs.Bid{

    public class CreateBidDTO {


        public required DateTime BidTime {get; set;}
        public required decimal BidAmount {get; set;}
    }

}