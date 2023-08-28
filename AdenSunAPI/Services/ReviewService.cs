using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Services
{
    public class ReviewService
    {
        private readonly AdenSunEntities _adenSunEntities;

        public ReviewService(AdenSunEntities dbContext)
        { 
            _adenSunEntities = dbContext;
        }

        public string CreateReview(int userID, ReviewDTO review)
        {
            using (_adenSunEntities)
            {
                OrderItem_T orderItem = _adenSunEntities.OrderItem_T.Find(review.OrderItemID);
                if (orderItem != null)
                {
                    if (orderItem.Order_T.UserID == userID)
                    {
                        orderItem.UserReview_T.Add(new UserReview_T 
                        { 
                            Description = review.Description,
                            Rating = review.Rating,
                            OrderItemID = review.OrderItemID,
                            UserID = userID
                        });
                        int result = _adenSunEntities.SaveChanges();
                        return $"OK : Votre review a bien été ajouter. {result} row were added to db";
                    }
                    else 
                    {
                        return "Error : Vous n'avez pas l'authorisation de faire cette modification.";
                    }
                }
                else 
                {
                    return "Error : La ressource que vous désirez modifier n'existe pas.";
                }
            }
        }

        public string UpdateReview(int userID, ReviewDTO review)
        {
            using (_adenSunEntities)
            {
                UserReview_T currentReview = _adenSunEntities.UserReview_T.Find(review.UserReviewID);
                if (currentReview != null)
                {
                    if (currentReview.UserID == userID)
                    { 
                        currentReview.Rating = review.Rating;
                        currentReview.Description = review.Description;
                        int result = _adenSunEntities.SaveChanges();
                        return $"OK : L'article a bien été mis a jours. {result} row were updated.";
                    }
                    else 
                    {
                        return "Error : vous n'avez pas le droit de modifier cette article.";
                    }
                }
                else
                {
                    return "Error : la review que vous voulez mettre à jour n'existe pas.";
                }
            }
        
        }

        public string DeleteReview(int userID, int reviewID)
        {
            using (_adenSunEntities)
            {
                UserReview_T currentUserReview = _adenSunEntities.UserReview_T.Find(reviewID);
                if (currentUserReview != null)
                {
                    if (currentUserReview.UserID == userID)
                    {
                        _adenSunEntities.UserReview_T.Remove(currentUserReview);
                        int result = _adenSunEntities.SaveChanges();
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
    }
}