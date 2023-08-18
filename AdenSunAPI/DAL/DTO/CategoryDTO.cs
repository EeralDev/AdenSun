using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class CategoryDTO
    {
        public int CategoryID { get; set; }
        public string Name { get; set; }
        public Nullable<int> ParentID { get; set; }
    }
}