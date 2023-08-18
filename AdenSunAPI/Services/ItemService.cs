﻿using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Services
{
    public class ItemService
    {
        private readonly AdenSunEntities _adenSunDBContext;
        public ItemService(AdenSunEntities dbContext)
        {
            _adenSunDBContext = dbContext;
        }

        //Méthode appelée par le controller
        //Méthode renvoyant tout les articles
        public List<ItemDTO> getItem()
        {
            using (_adenSunDBContext)
            {
                //Création de l'objet de base
                List<ItemDTO>  items = _adenSunDBContext.Item_T
                    .Select(item =>
                        new ItemDTO
                        {
                            Item_ID = item.Item_ID,
                            Name = item.Name,
                            Price = item.Price,
                            Brand = item.Brand,
                            Description = item.Description,
                            Quantity = item.Quantity,
                            Image = item.Image,
                            Image2 = item.Image2,
                            Image3 = item.Image3,
                            CatchPhrase = item.CatchPhrase,
                            SKU = item.SKU,
                            Categories = item.ItemCategory_T.Select(itemCat => new List<CategoryDTO> { new CategoryDTO { CategoryID = itemCat.CategoryID, Name = itemCat.Name, ParentID = itemCat.ParentID } }).ToList(),
                            Discounts = item.Discount_T.Where(discount => discount.IsGlobal == true && discount.IsActive == true).Select(itemDisc => new DiscountDTO { Discount_ID = itemDisc.Discount_ID, Code = itemDisc.Code, Description = itemDisc.Description, Amount = itemDisc.Amount, CreationDate = itemDisc.CreationDate, ExpirationDate = itemDisc.ExpirationDate, IsActive = itemDisc.IsActive, IsGlobal = itemDisc.IsGlobal, CategoryID = itemDisc.CategoryID }).ToList(),
                            Reviews = item.OrderItem_T.Select(itemOrd => itemOrd.UserReview_T.Select(
                                Review => new ReviewDTO
                                {
                                    UserReviewID = Review.UserReviewID,
                                    Rating = Review.Rating,
                                    Description = Review.Description,
                                    OrderItemID = Review.OrderItemID,
                                    UserID = Review.User_T.UserID,
                                    UserMail = Review.User_T.Mail
                                })).SelectMany(Review => Review).ToList()
                        }).ToList();
                //Ajout des catégorie parents.
                foreach (ItemDTO item in items)
                {
                    AddParentsCategories(item);
                }
                //Ajout des réduction lié au catégorie
                foreach (ItemDTO item in items)
                {
                    AddDiscountsCategories(item);
                }
                return items;
            }
        }
        //Méthode renvoyant un articles en fonction de l'ID 
        public ItemDTO GetItemByID(int id)
        {
            ItemDTO myItem = _adenSunDBContext.Item_T
                .Where (item => item.Item_ID == id)
                .Select(item =>
                    new ItemDTO
                    {
                        Item_ID = item.Item_ID,
                        Name = item.Name,
                        Price = item.Price,
                        Brand = item.Brand,
                        Description = item.Description,
                        Quantity = item.Quantity,
                        Image = item.Image,
                        Image2 = item.Image2,
                        Image3 = item.Image3,
                        CatchPhrase = item.CatchPhrase,
                        SKU = item.SKU,
                        Categories = item.ItemCategory_T.Select(itemCat => new List<CategoryDTO> { new CategoryDTO { CategoryID = itemCat.CategoryID, Name = itemCat.Name, ParentID = itemCat.ParentID } }).ToList(),
                        Discounts = item.Discount_T.Where(discount => discount.IsGlobal == true && discount.IsActive == true).Select(itemDisc => new DiscountDTO { Discount_ID = itemDisc.Discount_ID, Code = itemDisc.Code, Description = itemDisc.Description, Amount = itemDisc.Amount, CreationDate = itemDisc.CreationDate, ExpirationDate = itemDisc.ExpirationDate, IsActive = itemDisc.IsActive, IsGlobal = itemDisc.IsGlobal, CategoryID = itemDisc.CategoryID }).ToList(),
                        Reviews = item.OrderItem_T.Select(itemOrd => itemOrd.UserReview_T.Select(
                            Review => new ReviewDTO
                            {
                                UserReviewID = Review.UserReviewID,
                                Rating = Review.Rating,
                                Description = Review.Description,
                                OrderItemID = Review.OrderItemID,
                                UserID = Review.User_T.UserID,
                                UserMail = Review.User_T.Mail
                            })
                        ).SelectMany(Review => Review)
                        .ToList()})
            .FirstOrDefault();
            AddParentsCategories(myItem);
            AddDiscountsCategories(myItem);
            return (myItem != default(ItemDTO)) ? myItem : null;
        }

        //Méthode de traitement propre à la classe 
        private void AddParentsCategories(ItemDTO item)
        {
            foreach (List<CategoryDTO> categories in item.Categories)
            {
                ItemCategory_T parentItemCategory;
                do
                {
                    parentItemCategory = _adenSunDBContext.ItemCategory_T.Find(categories[0].ParentID);
                    if (parentItemCategory != null)
                    {
                        categories.Insert(0, new CategoryDTO { CategoryID = parentItemCategory.CategoryID, Name = parentItemCategory.Name, ParentID = parentItemCategory.ParentID });
                    }
                }
                while (parentItemCategory != null);
            }
        }

        private void AddDiscountsCategories(ItemDTO item)
        {
            foreach (List<CategoryDTO> categories in item.Categories)
            {
                foreach (CategoryDTO category in categories)
                {
                    item.Discounts.AddRange(_adenSunDBContext.Discount_T
                        .Where(discountItem => discountItem.CategoryID == category.CategoryID && discountItem.IsGlobal == true && discountItem.IsGlobal == true)
                        .Select(discount => new DiscountDTO { Discount_ID = discount.Discount_ID, Code = discount.Code, Description = discount.Description, Amount = discount.Amount, CreationDate = discount.CreationDate, ExpirationDate = discount.ExpirationDate, IsActive = discount.IsActive, IsGlobal = discount.IsGlobal, CategoryID = discount.CategoryID }).ToList());
                }
            }
        }
    }
}