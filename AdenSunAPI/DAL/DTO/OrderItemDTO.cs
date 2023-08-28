using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class OrderItemDTO
    {
        public int OrderItemID { get; set; }
        public int Quantity { get; set; }
        public int OrderID { get; set; }
        public ItemDTO Item { get; set; }
        public List<ReviewDTO> Reviews { get; set; }
    }
}