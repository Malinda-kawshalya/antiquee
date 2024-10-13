namespace backend.Models.Entities{

    public class Product{

        public Guid Id {get; set;}

        public required string Name {get; set;}
       
        public required decimal Price {get; set;}
    }
}