using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class UserDTO
    {
        public int UserID { get; set; }
        public string Mail { get; set; }
        public bool IsProfessional { get; set; }
        public string PhoneNumber { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public AdressDTO Adress { get; set; }
        public List<ShoppingCartDTO> ShoppingCart { get; set; }
    }
}