using backend.Data;
using backend.DTOs.Employee;
using backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly ApplicationDBContext dbContext;

        public EmployeeController(ApplicationDBContext dbContext)
        {
            this.dbContext = dbContext;
        }


        [HttpGet("all")]
        public IActionResult GetAllEmployees()
        {
            var allEmployees = dbContext.Employees.ToList();
            return Ok(allEmployees);
        }

        [HttpPost("create")]
        public IActionResult CreateEmployee(CreateEmployeeDTO dto){
            var newEmployee = new Employee(){
                Name = dto.Name,
                Email = dto.Email,
                Phone = dto.Phone,
                Salary = dto.Salary,

            };

             dbContext.Add(newEmployee);
             dbContext.SaveChanges();

             return Ok(newEmployee);
        }


       


    }
}