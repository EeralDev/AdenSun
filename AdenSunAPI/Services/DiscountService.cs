﻿using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Services
{
    public class DiscountService
    {
        private readonly AdenSunEntities _adenSunDBContext;
        public DiscountService(AdenSunEntities dbContext) 
        {
            _adenSunDBContext = dbContext;
        }
        public List<DiscountDTO> GetActiveDiscounts() 
        {
            using (_adenSunDBContext)
            {
                List<DiscountDTO> Discounts = _adenSunDBContext.Discount_T
                    .Where(Discount => Discount.IsActive == true)
                    .Select(ActiveDiscount =>
                        new DiscountDTO
                        {
                            Discount_ID = ActiveDiscount.Discount_ID,
                            Code = ActiveDiscount.Code,
                            Description = ActiveDiscount.Description,
                            Amount = ActiveDiscount.Amount,
                            CreationDate = ActiveDiscount.CreationDate,
                            ExpirationDate = ActiveDiscount.ExpirationDate,
                            CategoryID = ActiveDiscount.CategoryID,
                            IsActive = ActiveDiscount.IsActive,
                            IsGlobal = ActiveDiscount.IsGlobal
                        })
                    .ToList();
                return Discounts;
            };
        }
        public List<DiscountDTO> GetDiscountsByType(bool isGlobal) 
        {
            using (_adenSunDBContext)
            {
                List<DiscountDTO> Discounts = _adenSunDBContext.Discount_T
                        .Where(Discount => Discount.IsActive == true && Discount.IsGlobal == isGlobal)
                        .Select(Discount => new DiscountDTO
                        {
                            Discount_ID = Discount.Discount_ID,
                            Code = Discount.Code,
                            Description = Discount.Description,
                            Amount = Discount.Amount,
                            CreationDate = Discount.CreationDate,
                            ExpirationDate = Discount.ExpirationDate,
                            CategoryID = Discount.CategoryID,
                            IsActive = Discount.IsActive,
                            IsGlobal= Discount.IsGlobal
                        }).ToList();
                return Discounts;
            }
        }
    }
}