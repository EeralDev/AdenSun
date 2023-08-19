using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class ShoppingCartDTO
    {
        public int ShoppingCartID { get; set; }
        public int UserID { get; set; }
        public Nullable<double> Total { get; set; }
        public System.DateTime CreationDate { get; set; }
        public Nullable<System.DateTime> LastUpdate { get; set; }
        public List<ShoppingCartItemDTO> ShoppingCartItems { get; set; }
    }
}