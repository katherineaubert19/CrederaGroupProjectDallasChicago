using GroupProjectApi.Modules.Common.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;
using GroupProjectApi.Modules.Models;

namespace GroupProjectApi.Modules.Products
{

    [TransientService]
    public class ProductsService
    {
        //Parsing JSON file 
        private readonly string _Hotsauce = "Modules/Models/Hotsauce.json";
       

        //Return a list of products from the hot sauce file
        public List<ProductDto> UseUserDefindObjectWithNewtonsoftJson()
        {
            using StreamReader reader = new StreamReader(_Hotsauce);
            string json = reader.ReadToEnd();

            List<ProductDto> products = JsonConvert.DeserializeObject<JsonWrapper>(json)?.Hotsauces;
            return products ?? new List<ProductDto>();
        }

        public List<ProductDetail> ParseJSONfordetails()
        {
            using StreamReader reader = new StreamReader(_Hotsauce);
            string json = reader.ReadToEnd();

            List<ProductDetail> products = JsonConvert.DeserializeObject<JsonWrapperDetails>(json)?.Hotsauces;
            return products ?? new List<ProductDetail>();
        }
        

        public class JsonWrapper
        {
            public List<ProductDto> Hotsauces {get; set;}
        }

        public class JsonWrapperDetails
        {
            public List<ProductDetail> Hotsauces {get; set;}
        }
        
        //Return a product from the hot sauce file
        public ProductDetail FindId(int productId) 
        {
            List<ProductDetail> list = ParseJSONfordetails();

            return list.FirstOrDefault(i => i.ProductId == productId);
        }

    }


}
        
        // var listofprod = UseUserDefindObjectWithNewtonsoftJson(ReadAndParseJSONWithNewtonSoftJson( _Hotsauce));
//listofprod is helpful for search, use it in a search function 

        // private readonly ProductsRepository _productRepo;


        // public ProductsService(ProductsRepository productRepo)
        // {
        //     _productRepo = productRepo;
        // }
        // public ProductDto GetProduct(int productId)
        // {
        //     return _productRepo.GetProductById(productId)?.ToProductDto();
        // }
        // public ProductDto GetAllProducts(int productId)
        // {
        //     return _productRepo.GetProductById(productId)?.ToProductDto();
        // }