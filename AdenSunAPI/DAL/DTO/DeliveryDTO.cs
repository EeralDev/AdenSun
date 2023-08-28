using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class DeliveryDTO
    {
        public int DeliveryID { get; set; }
        public System.DateTime StartDate { get; set; }
        public string Sender { get; set; }
        public int TrackingNumber { get; set; }
        public bool IsReceived { get; set; }
        public double Price { get; set; }
        public int OrderID { get; set; }
    }
}