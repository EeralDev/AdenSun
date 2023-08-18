using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class DiscountDTO
    {
        public int Discount_ID { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public int Amount { get; set; }
        public System.DateTime CreationDate { get; set; }
        public Nullable<System.DateTime> ExpirationDate { get; set; }
        public bool IsActive { get; set; }
        public bool IsGlobal { get; set; }
        public Nullable<int> CategoryID { get; set; }
    }
}