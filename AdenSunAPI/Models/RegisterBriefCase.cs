using AdenSunAPI.DAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Models
{
    public class RegisterBriefCase
    {
        public UserDTO NewUser { get; set; }
        public string Password { get; set; }
    }
}