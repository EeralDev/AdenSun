using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Security.Claims;

namespace AdenSunAPI.Controllers
{
    public class ClientController : ApiController
    {
        [HttpGet]
        [Route("api/Client")]
        [Authorize]
        public string Get()
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                IEnumerable<Claim> claims = identity.Claims;
                string name = claims.Where(p => p.Type == "mail").FirstOrDefault()?.Value;
                int id = Int32.Parse(claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value);
                return $"Vous êtes connecté en tant que {name} et votre ID d'utilisateur est {id}";
            }
            return "";
        }
    }
}
