using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class OrderDTO
    {
        public int OrderID { get; set; }
        public System.DateTime CreationDate { get; set; }
        public bool IsValid { get; set; }
        public Nullable<System.DateTime> ValidationDate { get; set; }
        public Nullable<double> Total { get; set; }
        public Nullable<int> DeliveryID { get; set; }
        public int UserID { get; set; }
        public DeliveryDTO Delivery { get; set; }
        public List<OrderItemDTO> OrderItems { get; set; }

    }
}