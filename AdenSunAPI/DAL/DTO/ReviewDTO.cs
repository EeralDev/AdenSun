using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class ReviewDTO
    {
        public int UserReviewID { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public int OrderItemID { get; set; }
        public int UserID { get; set; }
        public string UserMail { get; set; }
    }
}