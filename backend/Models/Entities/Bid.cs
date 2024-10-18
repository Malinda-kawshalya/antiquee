namespace backend.Models.Entities{

    public class Bid {

        public Guid Id {get; set;}

        public required decimal Amount {get; set;}
        public required decimal UserId {get; set;}
        public required DateTime BidTime {get; set;}
        

        

      
    }

}