using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Services
{
    public class UserService
    {
        private readonly AdenSunEntities _adenSunDBContext;
        public UserService(AdenSunEntities dbContext)
        {
            _adenSunDBContext = dbContext;
        }

        public string UpdateUser(UserDTO user)
        {
            using (_adenSunDBContext)
            {
                int result = 0;
                User_T dbUser = _adenSunDBContext.User_T.Find(user.UserID);
                if (dbUser != null)
                {
                    dbUser.IsProfessional = user.IsProfessional;
                    dbUser.PhoneNumber = user.PhoneNumber;
                    Adress_T dbAdress = _adenSunDBContext.Adress_T.FirstOrDefault(item =>
                        item.AdressLine == user.Adress.AdressLine &&
                        item.StreetName == user.Adress.StreetName &&
                        item.StreetNumber == user.Adress.StreetNumber &&
                        item.City == user.Adress.City &&
                        item.ZipCode == user.Adress.ZipCode
                    );
                    if (dbAdress == default(Adress_T))
                    {
                        dbUser.Adress_T = new Adress_T
                        {
                            AdressLine = user.Adress.AdressLine,
                            StreetName = user.Adress.StreetName,
                            StreetNumber = user.Adress.StreetNumber,
                            City = user.Adress.City,
                            ZipCode = user.Adress.ZipCode,
                            DepartmentID = 1,
                            RegionID = 1,
                        };
                        result = _adenSunDBContext.SaveChanges();
                        return result.ToString();
                    }
                    else
                    {
                        dbUser.Adress_T = dbAdress;
                    }
                    result = _adenSunDBContext.SaveChanges();
                    return result.ToString(); ;
                }
                else 
                {
                    return "Error Happened";
                }
                
            }
        }
    }
}