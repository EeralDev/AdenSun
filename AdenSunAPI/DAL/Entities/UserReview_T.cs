//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AdenSunAPI.DAL.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserReview_T
    {
        public int UserReviewID { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public int OrderItemID { get; set; }
        public int UserID { get; set; }
    
        public virtual OrderItem_T OrderItem_T { get; set; }
        public virtual User_T User_T { get; set; }
    }
}
