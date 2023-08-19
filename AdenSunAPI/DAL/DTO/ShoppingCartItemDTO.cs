using AdenSunAPI.DAL.Entities;

namespace AdenSunAPI.DAL.DTO
{
    public class ShoppingCartItemDTO
    {
        public int ShoppingCartItemID { get; set; }
        public int ShoppingCartID { get; set; }
        public int Quantity { get; set; }
        public ItemDTO Item { get; set; }
    }
}