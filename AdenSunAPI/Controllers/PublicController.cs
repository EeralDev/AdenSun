using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using AdenSunAPI.Models;
using AdenSunAPI.Services;
using Microsoft.Ajax.Utilities;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Web.Http;

namespace AdenSunAPI.Controllers
{
    public class PublicController : ApiController
    {
        private readonly ItemService _itemService;
        private readonly CategoryService _categoryService;
        private readonly DiscountService _discountService;
        private readonly AuthenticationService _authenticationService;

        public PublicController()
        {
            AdenSunEntities currentContext = new AdenSunEntities();
            _itemService = new ItemService(currentContext);
            _categoryService = new CategoryService(currentContext);
            _discountService = new DiscountService(currentContext);
            _authenticationService = new AuthenticationService(currentContext);
        }

        //Méthode Item
        [HttpGet]
        [Route("api/Public/Item")]
        public IEnumerable<ItemDTO> GetItem() 
        {
            return _itemService.getItem();
        }

        [HttpGet]
        [Route("api/Public/Item/{itemID}")]
        public ItemDTO GetItem(int itemID) 
        {
            return _itemService.GetItemByID(itemID);
        }

        //Méthode Category
        [HttpGet]
        [Route("api/Public/Item/Category/{categoryID}")]
        public List<ItemDTO> GetItemByCategory(int categoryID)
        {
            return _itemService.GetItemByCategorie(categoryID);
        }

        [HttpGet]
        [Route("api/Public/Category")]
        public List<CategoryTree> GetCategories() 
        {

            return _categoryService.GetCategories(null);
        }

        [HttpGet]
        [Route("api/Public/Category/{maxHeight}")]
        public List<CategoryTree> GetCategories(int? maxHeight)
        {
            return _categoryService.GetCategories(maxHeight);
        }

        [HttpGet]
        [Route("api/Public/Category/{categoryID}/{maxHeight}")]
        public List<CategoryTree> GetCategories(int categoryID, int? maxHeight)
        {
            return _categoryService.GetCategoriesByName(categoryID, maxHeight);
        }

        //Méthode Discount
        [HttpGet]
        [Route("api/Public/Discount")]
        public List<DiscountDTO> GetDiscount() 
        {
            return _discountService.GetActiveDiscounts();
        }

        [HttpGet]
        [Route("api/Public/Discount/{isGlobal}")]
        public List<DiscountDTO> GetDiscount(bool isGlobal)
        {
            return _discountService.GetDiscountsByType(isGlobal);
        }

        //Méthode Authentication
        [HttpPost]
        [Route("api/Public/Login")]
        public LoginBriefCase Login([FromBody] Credential credential) 
        {
            return _authenticationService.Login(credential.Mail, credential.Password);            
        }

        [HttpPost]
        [Route("api/Public/Register")]
        public int Register([FromBody] RegisterBriefCase newUser )
        { 
            return _authenticationService.Register(newUser.NewUser, newUser.Password);
        }
    }
}
