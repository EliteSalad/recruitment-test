using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Newtonsoft.Json.Linq;
using System;
using System.Security.Cryptography.X509Certificates;

namespace InterviewTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ListController : ControllerBase
    {
        [HttpGet]
       public IActionResult Get()
        {
            return Ok("Hello World!!");
        }

        [HttpPost]
        public IActionResult Post(JObject payload)
        {
            return Ok(payload);
        }

        /*
         * List API methods goe here
         * */
    }
}
