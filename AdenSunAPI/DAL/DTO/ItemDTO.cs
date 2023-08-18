using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.DAL.DTO
{
    public class ItemDTO
    {
        //Basic property
        public int Item_ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Brand { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public string Image { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        public string CatchPhrase { get; set; }
        public string SKU { get; set; }

        //Link Properties
        public List<List<CategoryDTO>> Categories { get; set; }
        public List<ReviewDTO> Reviews { get; set; }
        public List<DiscountDTO> Discounts { get; set; }
    }
}