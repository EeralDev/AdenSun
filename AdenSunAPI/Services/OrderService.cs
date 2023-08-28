using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Results;

namespace AdenSunAPI.Services
{
    public class OrderService
    {
        private readonly AdenSunEntities _adenSunEntities;

        public OrderService (AdenSunEntities dbContext)
        {
            _adenSunEntities = dbContext;
        }

        public List<OrderDTO> GetOrder(int userID)
        {
            using (_adenSunEntities)
            {
                List<OrderDTO> orders = _adenSunEntities.Order_T
                    .Where(order => order.UserID == userID)
                    .Select(userOrder => new OrderDTO
                    {
                        OrderID = userOrder.OrderID,
                        CreationDate = userOrder.CreationDate,
                        IsValid = userOrder.IsValid,
                        ValidationDate = userOrder.ValidationDate,
                        Total = userOrder.Total,
                        DeliveryID = userOrder.DeliveryID,
                        UserID = userOrder.UserID,
                        Delivery = (userOrder.Delivery_T != null)? new DeliveryDTO 
                        { 
                            DeliveryID = userOrder.Delivery_T.DeliveryID,
                            StartDate = userOrder.Delivery_T.StartDate,
                            Sender = userOrder.Delivery_T.Sender,
                            TrackingNumber = userOrder.Delivery_T.TrackingNumber,
                            IsReceived = userOrder.Delivery_T.IsReceived,
                            Price = userOrder.Delivery_T.Price,
                            OrderID = userOrder.OrderID
                        } : null,
                        OrderItems = userOrder.OrderItem_T
                            .Select(Item => new OrderItemDTO 
                            { 
                                OrderItemID = Item.OrderItemID,
                                Quantity = Item.Quantity,
                                OrderID = Item.OrderID,
                                Reviews = Item.UserReview_T.Select(UserReview => new ReviewDTO 
                                { 
                                    UserReviewID = UserReview.UserReviewID,
                                    Description = UserReview.Description,
                                    Rating = UserReview.Rating,
                                    OrderItemID = UserReview.OrderItemID,
                                    UserID = UserReview.UserID,
                                    UserMail = UserReview.User_T.Mail
                                }).ToList(),
                                Item = new ItemDTO 
                                {
                                   Item_ID = Item.ItemID,
                                   Name = Item.Item_T.Name,
                                   Price = Item.Item_T.Price,
                                   Brand = Item.Item_T.Brand,
                                   Description = Item.Item_T.Description,
                                   Quantity = Item.Item_T.Quantity,
                                   Image = Item.Item_T.Image,
                                   Image2 = Item.Item_T.Image2,
                                   Image3 = Item.Item_T.Image3,
                                   CatchPhrase = Item.Item_T.CatchPhrase,
                                   SKU = Item.Item_T.SKU,
                                   Categories = Item.Item_T.ItemCategory_T.Select(itemCat => new List<CategoryDTO> { new CategoryDTO { CategoryID = itemCat.CategoryID, Name = itemCat.Name, ParentID = itemCat.ParentID } }).ToList(),
                                   Discounts = Item.Item_T.Discount_T.Where(discount => discount.IsGlobal == true && discount.IsActive == true).Select(itemDisc => new DiscountDTO { Discount_ID = itemDisc.Discount_ID, Code = itemDisc.Code, Description = itemDisc.Description, Amount = itemDisc.Amount, CreationDate = itemDisc.CreationDate, ExpirationDate = itemDisc.ExpirationDate, IsActive = itemDisc.IsActive, IsGlobal = itemDisc.IsGlobal, CategoryID = itemDisc.CategoryID }).ToList(),
                                   Reviews = Item.Item_T.OrderItem_T.Select(itemOrd => itemOrd.UserReview_T.Select(
                                        Review => new ReviewDTO
                                        {
                                            UserReviewID = Review.UserReviewID,
                                            Description = Review.Description,
                                            Rating = Review.Rating,                                            
                                            OrderItemID = Review.OrderItemID,
                                            UserID = Review.User_T.UserID,
                                            UserMail = Review.User_T.Mail
                                        })).SelectMany(Review => Review).ToList()
                                }
                            }).ToList(),
                    })
                    .ToList();
                foreach (OrderDTO order in orders)
                {
                    foreach (OrderItemDTO orderItem in order.OrderItems)
                    {
                        new ItemService(new AdenSunEntities()).AddParentsCategories(orderItem.Item);
                    }
                }
                foreach (OrderDTO order in orders)
                {
                    foreach (OrderItemDTO orderItem in order.OrderItems)
                    {
                        new ItemService(new AdenSunEntities()).AddDiscountsCategories(orderItem.Item);
                    }
                }
                return orders;
            }
        }
        public OrderDTO GetOrder(int userID, int orderID)
        {
            using (_adenSunEntities)
            {
                OrderDTO order = _adenSunEntities.Order_T
                    .Where(orderByID => orderByID.UserID == userID && orderByID.OrderID == orderID)
                    .Select(userOrder => new OrderDTO
                    {
                        OrderID = userOrder.OrderID,
                        CreationDate = userOrder.CreationDate,
                        IsValid = userOrder.IsValid,
                        ValidationDate = userOrder.ValidationDate,
                        Total = userOrder.Total,
                        DeliveryID = userOrder.DeliveryID,
                        UserID = userOrder.UserID,
                        Delivery = (userOrder.Delivery_T != null) ? new DeliveryDTO
                        {
                            DeliveryID = userOrder.Delivery_T.DeliveryID,
                            StartDate = userOrder.Delivery_T.StartDate,
                            Sender = userOrder.Delivery_T.Sender,
                            TrackingNumber = userOrder.Delivery_T.TrackingNumber,
                            IsReceived = userOrder.Delivery_T.IsReceived,
                            Price = userOrder.Delivery_T.Price,
                            OrderID = userOrder.OrderID
                        } : null,
                        OrderItems = userOrder.OrderItem_T
                            .Select(Item => new OrderItemDTO
                            {
                                OrderItemID = Item.OrderItemID,
                                Quantity = Item.Quantity,
                                OrderID = Item.OrderID,
                                Reviews = Item.UserReview_T.Select(UserReview => new ReviewDTO
                                {
                                    UserReviewID = UserReview.UserReviewID,
                                    Description = UserReview.Description,
                                    Rating = UserReview.Rating,
                                    OrderItemID = UserReview.OrderItemID,
                                    UserID = UserReview.UserID,
                                    UserMail = UserReview.User_T.Mail
                                }).ToList(),
                                Item = new ItemDTO
                                {
                                    Item_ID = Item.ItemID,
                                    Name = Item.Item_T.Name,
                                    Price = Item.Item_T.Price,
                                    Brand = Item.Item_T.Brand,
                                    Description = Item.Item_T.Description,
                                    Quantity = Item.Item_T.Quantity,
                                    Image = Item.Item_T.Image,
                                    Image2 = Item.Item_T.Image2,
                                    Image3 = Item.Item_T.Image3,
                                    CatchPhrase = Item.Item_T.CatchPhrase,
                                    SKU = Item.Item_T.SKU,
                                    Categories = Item.Item_T.ItemCategory_T.Select(itemCat => new List<CategoryDTO> { new CategoryDTO { CategoryID = itemCat.CategoryID, Name = itemCat.Name, ParentID = itemCat.ParentID } }).ToList(),
                                    Discounts = Item.Item_T.Discount_T.Where(discount => discount.IsGlobal == true && discount.IsActive == true).Select(itemDisc => new DiscountDTO { Discount_ID = itemDisc.Discount_ID, Code = itemDisc.Code, Description = itemDisc.Description, Amount = itemDisc.Amount, CreationDate = itemDisc.CreationDate, ExpirationDate = itemDisc.ExpirationDate, IsActive = itemDisc.IsActive, IsGlobal = itemDisc.IsGlobal, CategoryID = itemDisc.CategoryID }).ToList(),
                                    Reviews = Item.Item_T.OrderItem_T.Select(itemOrd => itemOrd.UserReview_T.Select(
                                         Review => new ReviewDTO
                                         {
                                             UserReviewID = Review.UserReviewID,
                                             Description = Review.Description,
                                             Rating = Review.Rating,
                                             OrderItemID = Review.OrderItemID,
                                             UserID = Review.User_T.UserID,
                                             UserMail = Review.User_T.Mail
                                         })).SelectMany(Review => Review).ToList()
                                }
                            }).ToList(),
                    })
                    .FirstOrDefault();
                if (order != default(OrderDTO))
                {
                    foreach (OrderItemDTO orderItem in order.OrderItems)
                    {
                        new ItemService(new AdenSunEntities()).AddParentsCategories(orderItem.Item);
                    }

                    foreach (OrderItemDTO orderItem in order.OrderItems)
                    {
                        new ItemService(new AdenSunEntities()).AddDiscountsCategories(orderItem.Item);
                    }
                    return order;
                }
                else
                {
                    return null;
                }

            }
        }
        public string Order(int userID, int shoppingCartID, out int orderID)
        {
            orderID = -1;
            using (_adenSunEntities)
            { 
                ShoppingCart_T shoppingCart = _adenSunEntities.ShoppingCart_T.Find(shoppingCartID);
                if (shoppingCart != null)
                {
                    if (shoppingCart.UserID == userID)
                    {
                        if (shoppingCart.ShoppingCartItem_T.Count >= 0)
                        {
                            Order_T order = new Order_T
                            {
                                UserID = userID,
                                CreationDate = System.DateTime.Today,
                                IsValid = false,
                            };
                            foreach (ShoppingCartItem_T shoppingCartItem in shoppingCart.ShoppingCartItem_T)
                            {
                                if (shoppingCartItem.Quantity <= shoppingCartItem.Item_T.Quantity)
                                {
                                    //On retire l'article du stock
                                    shoppingCartItem.Item_T.Quantity = shoppingCartItem.Item_T.Quantity - shoppingCartItem.Quantity;
                                    //On crée la nouvelle ligne d'orderItem_T
                                    OrderItem_T newOrderItemLine = new OrderItem_T
                                    {
                                        ItemID = shoppingCartItem.ItemID,
                                        Quantity = shoppingCartItem.Quantity
                                    };
                                    //On attache la nouvelle ligne a la commande
                                    order.OrderItem_T.Add(newOrderItemLine);
                                }
                                else
                                {
                                    return $"Error : Un des articles que vous désirez acheter ({shoppingCartItem.Item_T.Name}) n'est plus en stock nous ne pouvons honorez votre commande.";
                                }
                            }
                            _adenSunEntities.Order_T.Add(order);
                            int result = _adenSunEntities.SaveChanges();
                            //TODO : Ici ajouter la méthode d'envoie de mail
                            orderID = order.OrderID;
                            return $"OK : La commande a été passée avec succès. {result} row were added. L'ID de la commande est {order.OrderID}";
                        }
                        else
                        {
                            return "Error : aucun article n'est présent dans votre panier.";
                        }
                    }
                    else
                    {
                        return "Error : Vous n'avez pas l'autorisation d'acheter ce panier.";
                    }
                }
                else 
                {
                    return "Error : le panier que vous voulez acheter n'existe pas.";
                }
            }
        }
        public string ValidateOrder(int orderID, DeliveryDTO delivery)
        {
            using (AdenSunEntities customContext = new AdenSunEntities())
            {
                Order_T order = customContext.Order_T.Find(orderID);
                if (order != null)
                {
                    order.IsValid = true;
                    order.ValidationDate = System.DateTime.Today;
                    order.Delivery_T = new Delivery_T
                    {
                        StartDate = delivery.StartDate,
                        TrackingNumber = delivery.TrackingNumber,
                        Sender = delivery.Sender,
                        Price = delivery.Price,
                        IsReceived = false,
                    };
                    int result = customContext.SaveChanges();
                    return $"OK : La commande a bien été validé. {result} row were added to database.";
                }
                else 
                {
                    return "Error : la commande n'existe pas.";
                }
            }
        }
    }
}