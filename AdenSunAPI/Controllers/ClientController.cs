using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Security.Claims;
using AdenSunAPI.Services;
using AdenSunAPI.DAL.Entities;
using AdenSunAPI.DAL.DTO;

namespace AdenSunAPI.Controllers
{
    public class ClientController : ApiController
    {
        private readonly ShoppingCartService _shoppingCartService;
        private readonly OrderService _orderService;
        private readonly ReviewService _reviewService;
        private readonly AuthenticationService _authenticationService;

        public ClientController()
        {
            AdenSunEntities currentContext = new AdenSunEntities();
            _shoppingCartService = new ShoppingCartService(currentContext);
            _orderService = new OrderService(currentContext);
            _reviewService = new ReviewService(currentContext);
            _authenticationService = new AuthenticationService(currentContext);
        }

        [HttpGet]
        [Route("api/Client")]
        [Authorize]
        public UserDTO GetUser()
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _authenticationService.GetUser(userID);
            }
            else
            {
                return null;
            }
        }

        [Authorize]
        [HttpGet]
        [Route("api/Client/ShoppingCart")]
        public string AddShoppingCart()
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _shoppingCartService.CreateShoppingCart(userID);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        [Authorize]
        [HttpPost]
        [Route("api/Client/ShoppingCartItem/{ShoppingCartID}")]
        public string AddShoppingCartItem(int shoppingCartID, [FromUri]int itemID, [FromUri]int quantity)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _shoppingCartService.CreateShoppingCartItem(GetUserID(identity),shoppingCartID, itemID, quantity);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
            
        }

        [Authorize]
        [HttpPut]
        [Route("api/Client/ShoppingCartItem/{ShoppingCartItemID}")]
        public string UpdateShoppingCartItem(int ShoppingCartItemID, [FromUri] int quantity)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _shoppingCartService.UpdateShoppingCartItem(userID, ShoppingCartItemID, quantity);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        [Authorize]
        [HttpDelete]
        [Route("api/Client/ShoppingCartItem/{ShoppingCartItemID}")]
        public string DeleteShoppingCartItem(int ShoppingCartItemID)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _shoppingCartService.DeleteShoppingCartItem(userID, ShoppingCartItemID);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        [Authorize]
        [HttpDelete]
        [Route("api/Client/ShoppingCart/Clear/{ShoppingCartID}")]
        public string EmptyShoppingCart(int ShoppingCartID)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _shoppingCartService.DeleteAllItemFromShoppingCart(userID, ShoppingCartID);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        //Region Order

        [Authorize]
        [HttpPost]
        [Route("api/Client/Order/{ShoppingCartID}")]
        public string Order(int ShoppingCartID)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                string orderMessage = _orderService.Order(userID, ShoppingCartID, out int orderID);
                string validateMessage = _orderService.ValidateOrder(orderID, new DeliveryDTO 
                { 
                    StartDate = DateTime.Now,
                    Sender = "FakePS",
                    Price = 0,
                    //TODO : mettre à jours la base de donné pour que tracking number soit un string 
                    TrackingNumber = 1234567
                });
                return orderMessage + "\n" + validateMessage;
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        [Authorize]
        [HttpGet]
        [Route("api/Client/Order")]
        public List<OrderDTO> GetOrder() 
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _orderService.GetOrder(userID);
            }
            else
            {
                return null;
            }
        }

        [Authorize]
        [HttpGet]
        [Route("api/Client/Order/{orderID}")]
        public OrderDTO GetOrder(int orderID)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _orderService.GetOrder(userID, orderID);
            }
            else
            {
                return null;
            }
        }


        //Region Review
        [Authorize]
        [HttpPost]
        [Route("api/Client/Review")]
        public string AddReview([FromBody] ReviewDTO userReview)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _reviewService.CreateReview(userID, userReview);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        [Authorize]
        [HttpPut]
        [Route("api/Client/Review")]
        public string UpdateReview([FromBody] ReviewDTO userReview) 
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _reviewService.UpdateReview(userID, userReview);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        [Authorize]
        [HttpDelete]
        [Route("api/Client/Review/{ReviewID}")]
        public string DeleteReview(int ReviewID)
        {
            ClaimsIdentity identity = User.Identity as ClaimsIdentity;
            int userID = GetUserID(identity);
            if (userID != -1)
            {
                return _reviewService.DeleteReview(userID, ReviewID);
            }
            else
            {
                return "Error : Aucun identifiant client n'a été transmis.";
            }
        }

        //méthode privée propre à l'API
        //TODO : méthode pour récupérer l'UserID à rétravailler
        private int GetUserID(ClaimsIdentity identity)
        {
            if (identity != null)
            {
                IEnumerable<Claim> claims = identity.Claims;
                string name = claims.Where(p => p.Type == "mail").FirstOrDefault()?.Value;
                int id = Int32.Parse(claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value);
                return id;
            }
            return -1;
        }
    }
}
