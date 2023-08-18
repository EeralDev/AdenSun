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
    
    public partial class Adress_T
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Adress_T()
        {
            this.User_T = new HashSet<User_T>();
        }
    
        public int AdressID { get; set; }
        public Nullable<int> StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string AdressLine { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
        public int RegionID { get; set; }
        public int DepartmentID { get; set; }
    
        public virtual Department_T Department_T { get; set; }
        public virtual Region_T Region_T { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<User_T> User_T { get; set; }
    }
}
