using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using AdenSunAPI.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace AdenSunAPI.Services
{
    public class AuthenticationService
    {
        private readonly AdenSunEntities _adenSunDBContext;
        public AuthenticationService(AdenSunEntities dbContext)
        {
            _adenSunDBContext = dbContext;
        }

        //TODO : Méthode quasi copier sur la méthode login a modifier de toute urgence
        public UserDTO GetUser(int userID)
        {
            User_T tmpUser = _adenSunDBContext.User_T
                .Include("Adress_T") // Cette ligne a l'air de ne servir a rien il faudrait la retester peut-être avec la méthode .AsEnumerable()
                .Include("ShoppingCart_T")
                .Where(user => user.UserID == userID)
                .FirstOrDefault();
            if (tmpUser != default(User_T))
            {
                UserDTO currentUser = new UserDTO
                {
                    UserID = tmpUser.UserID,
                    Mail = tmpUser.Mail,
                    PhoneNumber = tmpUser.PhoneNumber,
                    IsProfessional = tmpUser.IsProfessional,
                    CreatedDate = tmpUser.CreatedDate,
                    Adress = new AdressDTO
                    {
                        AdressID = tmpUser.AdressID,
                        AdressLine = tmpUser.Adress_T.AdressLine,
                        City = tmpUser.Adress_T.City,
                        ZipCode = tmpUser.Adress_T.ZipCode,
                        StreetName = tmpUser.Adress_T.StreetName,
                        StreetNumber = tmpUser.Adress_T.StreetNumber,
                        DepartmentID = tmpUser.Adress_T.DepartmentID,
                        DepartmentName = tmpUser.Adress_T.Department_T.DepartmentName,
                        RegionID = tmpUser.Adress_T.RegionID,
                        RegionName = tmpUser.Adress_T.Region_T.RegionName
                    },
                    ShoppingCart = tmpUser.ShoppingCart_T
                    .Select(
                        ShoppingCart => new ShoppingCartDTO
                        {
                            UserID = tmpUser.UserID,
                            ShoppingCartID = ShoppingCart.ShoppingCartID,
                            CreationDate = ShoppingCart.CreationDate,
                            LastUpdate = ShoppingCart.LastUpdate,
                            Total = ShoppingCart.Total,
                            ShoppingCartItems = ShoppingCart.ShoppingCartItem_T
                            .Select(
                                ShoppingCartItem => new ShoppingCartItemDTO
                                {
                                    ShoppingCartID = ShoppingCartItem.ShoppingCartID,
                                    ShoppingCartItemID = ShoppingCartItem.ShoppingCartItemID,
                                    Quantity = ShoppingCartItem.Quantity,
                                    Item = new ItemDTO
                                    {
                                        Item_ID = ShoppingCartItem.Item_T.Item_ID,
                                        Name = ShoppingCartItem.Item_T.Name,
                                        Price = ShoppingCartItem.Item_T.Price,
                                        Brand = ShoppingCartItem.Item_T.Brand,
                                        Description = ShoppingCartItem.Item_T.Description,
                                        Quantity = ShoppingCartItem.Item_T.Quantity,
                                        Image = ShoppingCartItem.Item_T.Image,
                                        Image2 = ShoppingCartItem.Item_T.Image2,
                                        Image3 = ShoppingCartItem.Item_T.Image3,
                                        CatchPhrase = ShoppingCartItem.Item_T.CatchPhrase,
                                        SKU = ShoppingCartItem.Item_T.SKU,
                                        Categories = ShoppingCartItem.Item_T.ItemCategory_T.Select(itemCat => new List<CategoryDTO> { new CategoryDTO { CategoryID = itemCat.CategoryID, Name = itemCat.Name, ParentID = itemCat.ParentID } }).ToList(),
                                        Discounts = ShoppingCartItem.Item_T.Discount_T.Where(discount => discount.IsGlobal == true && discount.IsActive == true).Select(itemDisc => new DiscountDTO { Discount_ID = itemDisc.Discount_ID, Code = itemDisc.Code, Description = itemDisc.Description, Amount = itemDisc.Amount, CreationDate = itemDisc.CreationDate, ExpirationDate = itemDisc.ExpirationDate, IsActive = itemDisc.IsActive, IsGlobal = itemDisc.IsGlobal, CategoryID = itemDisc.CategoryID }).ToList(),
                                        Reviews = ShoppingCartItem.Item_T.OrderItem_T.Select(itemOrd => itemOrd.UserReview_T.Select(
                                            Review => new ReviewDTO
                                            {
                                                UserReviewID = Review.UserReviewID,
                                                Rating = Review.Rating,
                                                Description = Review.Description,
                                                OrderItemID = Review.OrderItemID,
                                                UserID = Review.User_T.UserID,
                                                UserMail = Review.User_T.Mail
                                            })).SelectMany(Review => Review).ToList()
                                    }
                                }).ToList()
                        }).ToList()
                };
                foreach (ShoppingCartDTO ShoppingCart in currentUser.ShoppingCart)
                {
                    foreach (ShoppingCartItemDTO shoppingCartItems in ShoppingCart.ShoppingCartItems)
                    {
                        new ItemService(new AdenSunEntities()).AddParentsCategories(shoppingCartItems.Item);
                    }
                }
                foreach (ShoppingCartDTO ShoppingCart in currentUser.ShoppingCart)
                {
                    foreach (ShoppingCartItemDTO shoppingCartItems in ShoppingCart.ShoppingCartItems)
                    {
                        new ItemService(new AdenSunEntities()).AddDiscountsCategories(shoppingCartItems.Item);
                    }
                }

                return currentUser;
            }
            else
            {
                return null;
            }
        }

        // TODO : Méthode de connexion coder très mal il faut une fois arriver à la V2 envisager d'utiliser un mapper ou un outils permettant de génrer plus facilement mes DTO.
        public LoginBriefCase Login(string userMail, string password) 
        {
            string hashPassword = HashPassword(password);
            User_T tmpUser = _adenSunDBContext.User_T
                .Include("Adress_T") // Cette ligne a l'air de ne servir a rien il faudrait la retester peut-être avec la méthode .AsEnumerable()
                .Include("ShoppingCart_T")
                .Where(user => user.Mail == userMail && user.Password == hashPassword)
                .FirstOrDefault();
            if (tmpUser != default(User_T)) 
            {
                UserDTO currentUser  = new UserDTO
                {
                    UserID = tmpUser.UserID,
                    Mail = tmpUser.Mail,
                    PhoneNumber = tmpUser.PhoneNumber,
                    IsProfessional = tmpUser.IsProfessional,
                    CreatedDate = tmpUser.CreatedDate,
                    Adress = new AdressDTO
                    {
                        AdressID = tmpUser.AdressID,
                        AdressLine = tmpUser.Adress_T.AdressLine,
                        City = tmpUser.Adress_T.City,
                        ZipCode = tmpUser.Adress_T.ZipCode,
                        StreetName = tmpUser.Adress_T.StreetName,
                        StreetNumber = tmpUser.Adress_T.StreetNumber,
                        DepartmentID = tmpUser.Adress_T.DepartmentID,
                        DepartmentName = tmpUser.Adress_T.Department_T.DepartmentName,
                        RegionID = tmpUser.Adress_T.RegionID,
                        RegionName = tmpUser.Adress_T.Region_T.RegionName
                    },
                    ShoppingCart = tmpUser.ShoppingCart_T
                    .Select(
                        ShoppingCart => new ShoppingCartDTO 
                        {
                            UserID=tmpUser.UserID,
                            ShoppingCartID = ShoppingCart.ShoppingCartID,
                            CreationDate = ShoppingCart.CreationDate,
                            LastUpdate = ShoppingCart.LastUpdate,
                            Total = ShoppingCart.Total,
                            ShoppingCartItems = ShoppingCart.ShoppingCartItem_T
                            .Select(
                                ShoppingCartItem => new ShoppingCartItemDTO 
                                {
                                    ShoppingCartID = ShoppingCartItem.ShoppingCartID,
                                    ShoppingCartItemID = ShoppingCartItem.ShoppingCartItemID,
                                    Quantity = ShoppingCartItem.Quantity,
                                    Item = new ItemDTO 
                                    { 
                                        Item_ID = ShoppingCartItem.Item_T.Item_ID,
                                        Name = ShoppingCartItem.Item_T.Name,
                                        Price = ShoppingCartItem.Item_T.Price,
                                        Brand = ShoppingCartItem.Item_T.Brand,
                                        Description = ShoppingCartItem.Item_T.Description,
                                        Quantity = ShoppingCartItem.Item_T.Quantity,
                                        Image = ShoppingCartItem.Item_T.Image,
                                        Image2 = ShoppingCartItem.Item_T.Image2,
                                        Image3 = ShoppingCartItem.Item_T.Image3,
                                        CatchPhrase = ShoppingCartItem.Item_T.CatchPhrase,
                                        SKU = ShoppingCartItem.Item_T.SKU,
                                        Categories = ShoppingCartItem.Item_T.ItemCategory_T.Select(itemCat => new List<CategoryDTO> { new CategoryDTO { CategoryID = itemCat.CategoryID, Name = itemCat.Name, ParentID = itemCat.ParentID } }).ToList(),
                                        Discounts = ShoppingCartItem.Item_T.Discount_T.Where(discount => discount.IsGlobal == true && discount.IsActive == true).Select(itemDisc => new DiscountDTO { Discount_ID = itemDisc.Discount_ID, Code = itemDisc.Code, Description = itemDisc.Description, Amount = itemDisc.Amount, CreationDate = itemDisc.CreationDate, ExpirationDate = itemDisc.ExpirationDate, IsActive = itemDisc.IsActive, IsGlobal = itemDisc.IsGlobal, CategoryID = itemDisc.CategoryID }).ToList(),
                                        Reviews = ShoppingCartItem.Item_T.OrderItem_T.Select(itemOrd => itemOrd.UserReview_T.Select(
                                            Review => new ReviewDTO
                                            {
                                                UserReviewID = Review.UserReviewID,
                                                Rating = Review.Rating,
                                                Description = Review.Description,
                                                OrderItemID = Review.OrderItemID,
                                                UserID = Review.User_T.UserID,
                                                UserMail = Review.User_T.Mail
                                            })).SelectMany(Review => Review).ToList()
                                    }
                                }).ToList()                          
                        }).ToList()
                };
                foreach (ShoppingCartDTO ShoppingCart in currentUser.ShoppingCart)
                {
                    foreach (ShoppingCartItemDTO shoppingCartItems in ShoppingCart.ShoppingCartItems)
                    {
                        new ItemService(new AdenSunEntities()).AddParentsCategories(shoppingCartItems.Item);
                    }
                }
                foreach (ShoppingCartDTO ShoppingCart in currentUser.ShoppingCart)
                {
                    foreach (ShoppingCartItemDTO shoppingCartItems in ShoppingCart.ShoppingCartItems)
                    {
                        new ItemService(new AdenSunEntities()).AddDiscountsCategories(shoppingCartItems.Item);
                    }
                }

                return new LoginBriefCase(currentUser, GetToken(currentUser));
            }
            else 
            {
                return null;
            }            
        }

        // TODO : vérification des erreurs a faire 
        public int Register(UserDTO newUser, string password)
        {
            using (_adenSunDBContext)
            {
                Adress_T adressDB = _adenSunDBContext.Adress_T
                    .Where(adress => adress.StreetName == newUser.Adress.StreetName 
                    && adress.StreetNumber == newUser.Adress.StreetNumber
                    && adress.AdressLine == newUser.Adress.AdressLine
                    && adress.City == newUser.Adress.City
                    && adress.ZipCode == newUser.Adress.ZipCode
                    && adress.RegionID == newUser.Adress.RegionID
                    && adress.DepartmentID == newUser.Adress.DepartmentID).FirstOrDefault();
                ShoppingCart_T newShoppingCart = new ShoppingCart_T { CreationDate = System.DateTime.Now};
                User_T newDBUser = new User_T 
                { 
                    Mail = newUser.Mail,
                    Password = HashPassword(password),
                    IsProfessional = newUser.IsProfessional,
                    PhoneNumber = newUser.PhoneNumber,
                    CreatedDate = System.DateTime.Now,
                    Adress_T = (adressDB != default (Adress_T))?adressDB : new Adress_T 
                    {
                        StreetNumber = newUser.Adress.StreetNumber,
                        StreetName = newUser.Adress.StreetName,
                        AdressLine = newUser.Adress.AdressLine,
                        ZipCode = newUser.Adress.ZipCode,
                        City = newUser.Adress.City,
                        RegionID = newUser.Adress.RegionID,
                        DepartmentID = newUser.Adress.DepartmentID,
                    },
                };
                newDBUser.ShoppingCart_T.Add(newShoppingCart);
                _adenSunDBContext.User_T.Add(newDBUser);
                int result = _adenSunDBContext.SaveChanges();
                return result;
            }
        }

        // Méthode de génération de Token JWT
        private string GetToken(UserDTO myUser)
        {
            if (myUser != null)
            {

                string key = "my_secret_key_1234567891011121314"; //Secret key which will be used later during validation    
                string senderAndAudiance = "http://AdenSun.com";  //normally this will be your site URL    

                SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                SigningCredentials credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

                //Create a List of Claims, Keep claims name short    
                List<Claim> permClaims = new List<Claim>();
                permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                permClaims.Add(new Claim("userId", myUser.UserID.ToString()));
                permClaims.Add(new Claim("mail", myUser.Mail));

                //Create Security Token object by giving required parameters    
                JwtSecurityToken token = new JwtSecurityToken(senderAndAudiance, //Issure    
                                 senderAndAudiance,  //Audience    
                                 permClaims,
                                 expires: DateTime.Now.AddDays(1),
                                 signingCredentials: credentials);
                string jwt_token = new JwtSecurityTokenHandler().WriteToken(token);
                return $"Bearer {jwt_token}";
            }
            else
            {
                return null;
            }
        }

        // TODO : Méthode de hashage des mots de passe 
        private string HashPassword(string password)
        {
            byte[] data = System.Text.Encoding.UTF8.GetBytes(password);
            data = new System.Security.Cryptography.SHA256Managed().ComputeHash(data);
            return System.Text.Encoding.UTF8.GetString(data);
        }
    }
}