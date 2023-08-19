using AdenSunAPI.DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Models
{
    public class LoginBriefCase
    {
        public UserDTO User { get; set; }
        public string JWTToken { get; set; }

        public LoginBriefCase(UserDTO user, string jWTToken)
        {
            User = user;
            JWTToken = jWTToken;
        }
    }
}