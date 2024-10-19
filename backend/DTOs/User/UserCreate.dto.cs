namespace backend.DTOs.User{

    public class CreateUserDTO {


        
        public required string Email {get; set;}
        public string? Phone {get; set;}
        public required string Username {get; set;}
        public required string Password {get; set;}
        
    }

}