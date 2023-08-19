using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class AdressDTO
    {
        public int AdressID { get; set; }
        public Nullable<int> StreetNumber { get; set; }
        public string StreetName { get; set; }
        public string AdressLine { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
        public int RegionID { get; set; }
        public string RegionName { get; set; }
        public int DepartmentID { get; set; }
        public string DepartmentName { get; set; }

    }
}