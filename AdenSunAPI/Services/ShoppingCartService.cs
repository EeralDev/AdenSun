using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Services
{
    public class ShoppingCartService
    {
        private readonly AdenSunEntities _adenSunDBContext;
        public ShoppingCartService(AdenSunEntities dbContext)
        {
            _adenSunDBContext = dbContext;
        }

        public string CreateShoppingCart(int userId)
        {
            using(_adenSunDBContext)
            {
                ShoppingCart_T newShoppingCart = new ShoppingCart_T { CreationDate = System.DateTime.Now };
                User_T currentUser = _adenSunDBContext.User_T.Find(userId);
                if (currentUser != null)
                {
                    if (currentUser.ShoppingCart_T.Count < 3)
                    {
                        currentUser.ShoppingCart_T.Add(newShoppingCart);
                        int result = _adenSunDBContext.SaveChanges();
                        if (result == 0)
                        {
                            return "Error : Votre panier n'a pas put être ajouter.";
                        }
                        else
                        {
                            return newShoppingCart.ShoppingCartID.ToString();
                        }
                    }
                    else
                    {
                        return "Error : Vous ne pouvez pas avoir plus de trois panier en même temps.";
                    }
                }
                else 
                {
                    return "Error : Aucun n'utilisateur n'a été trouver en base de donnée.";
                }
            }
        }

        public string CreateShoppingCartItem(int userID, int shoppingCartId, int itemID, int quantity)
        {
            using(_adenSunDBContext) 
            {
                ShoppingCart_T currentShoppingCart = _adenSunDBContext.ShoppingCart_T.Find(shoppingCartId);
                Item_T currentItem = _adenSunDBContext.Item_T.Find(itemID);
                if (currentShoppingCart != null && currentItem != null)
                {
                    if (currentShoppingCart.UserID == userID)
                    {
                        if (currentShoppingCart.ShoppingCartItem_T.Where(shoppingCartItem => shoppingCartItem.ItemID == itemID).Count() == 0)
                        {
                            ShoppingCartItem_T newShoppingCartItem = new ShoppingCartItem_T
                            {
                                ShoppingCartID = shoppingCartId,
                                ItemID = itemID,
                                Quantity = quantity,
                            };
                            currentShoppingCart.ShoppingCartItem_T.Add(newShoppingCartItem);
                            int result = _adenSunDBContext.SaveChanges();
                            return $"{newShoppingCartItem.ShoppingCartItemID}";
                        }
                        else
                        {
                            return "Error : Il est impossible d'ajouter deux fois un même article au panier.";
                        }                        
                    }
                    else 
                    {
                        return "Error : Vous ne pouvez pas accéder à ce panier.";
                    }
                }
                else 
                {
                    return "Error : Ce panier ou ce produit n'existe pas.";
                }
            }
        }

        public string UpdateShoppingCartItem(int userID, int shoppingCartItemID, int quantity)
        {
            using (_adenSunDBContext)
            { 
                ShoppingCartItem_T currentShoppingCartItem = _adenSunDBContext.ShoppingCartItem_T.Find(shoppingCartItemID);
                if (currentShoppingCartItem != null)
                {
                    if (currentShoppingCartItem.ShoppingCart_T.UserID == userID)
                    {
                        currentShoppingCartItem.Quantity = quantity;
                        int result = _adenSunDBContext.SaveChanges();
                        return (result == 0) ? "Error : Aucune mise à jours n'est nécessaire" : $"OK : L'article a été mis a jour. {result} row were updated.";
                    }
                    else 
                    {
                        return $"Error : Vous ne pouvez pas avoir accès a cette article.";
                    }
                }
                else
                {
                    return "Error : Ce produit de panier n'existe pas.";
                }
            }
                return $"L'ID de l'objet a mettre à jour est {shoppingCartItemID} et la nouvelle quantity est {quantity}";
        }

        public string DeleteShoppingCartItem(int userID, int shoppingCartItemID)
        {
            using (_adenSunDBContext) 
            {
                ShoppingCartItem_T currentShoppingCartItem = _adenSunDBContext.ShoppingCartItem_T.Find(shoppingCartItemID);
                if (currentShoppingCartItem != null)
                {
                    if (currentShoppingCartItem.ShoppingCart_T.UserID == userID)
                    {
                        _adenSunDBContext.ShoppingCartItem_T.Remove(currentShoppingCartItem);
                        int result = _adenSunDBContext.SaveChanges();
                        return $"OK: La ressource recherché a été supprimé.{result} row were deleted.";
                    }
                    else 
                    {
                        return "Error : Vous n'avez pas l'autorisation de modifier cette ressource.";
                    }
                }
                else
                {
                    return "Error : la ressource recherché n'existe pas.";
                }
            }
        }

        public string DeleteAllItemFromShoppingCart(int userID, int shoppingCartId)
        {
            using (_adenSunDBContext) 
            {
                ShoppingCart_T currentShoppingCart = _adenSunDBContext.ShoppingCart_T.Find(shoppingCartId);
                if (currentShoppingCart != null) 
                {
                    if (currentShoppingCart.UserID == userID)
                    {
                        foreach (ShoppingCartItem_T shoppingCartItem in currentShoppingCart.ShoppingCartItem_T.ToList())
                        { 
                            _adenSunDBContext.ShoppingCartItem_T.Remove(shoppingCartItem);
                        }
                        int result = _adenSunDBContext.SaveChanges();
                        return (result == 0)? "Error : Aucun article n'a été supprimé du panier" : $"OK : Le panier a été vidée. {result} row were deleted.";
                    }
                    else
                    {
                        return "Error : Vous n'avez pas le droit de modifier cette ressource.";
                    }
                }
                else 
                {
                    return "Error : La ressource recherché n'existe pas.";
                }
            }
        }
    }
}