using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AdenSunAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuration et services de l'API Web

            // Itinéraires de l'API Web
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            //Permets d'éviter l'ajout de référence d'objet lors de la serialization des objets
            config.Formatters.JsonFormatter.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.None;
            //Permets d'ajouter l'indentation aux RAW Data
            config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
            //Retire la serializer XML
            config.Formatters.Remove(config.Formatters.XmlFormatter);
        }
    }
}
