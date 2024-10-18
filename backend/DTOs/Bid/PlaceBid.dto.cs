namespace backend.DTOs.Bid{

    public class CreateBidDTO {


        public required decimal UserId {get; set;}
        public required decimal AuctionId {get; set;}
        public required decimal Amount {get; set;}
    }

}