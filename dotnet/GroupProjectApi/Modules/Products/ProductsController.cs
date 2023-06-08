using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroupProjectApi.Modules.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GroupProjectApi.Modules.Products
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly ProductsService _productService;
        // private var products = _productService.UseUserDefindObjectWithNewtonsoftJson();

        public ProductsController(ILogger<ProductsController> logger, ProductsService productService)
        {
            _logger = logger;
            _productService = productService;
        }

        [HttpGet("")]
        public ActionResult<IEnumerable<ProductDto>> GetProducts()
        {
            var products = _productService.UseUserDefindObjectWithNewtonsoftJson();
            return products;
            //_logger.LogInformation("Retrieving all products");
            //var products = _productService.GetAllProducts(); // Create GetAllProducts class
            //if (products == null || !products.Any())
            //{
            //    return this.NotFound();
            //}
            //return this.Ok(products);
        }

        [HttpGet("{productId}")]
        public ActionResult<ProductDto> GetProductById(int productId) {
            var prod = _productService.FindId(productId);
            return prod;
            //iterate through products
            //if product id mataches the product return that product Dto 
        //     var prod = _productService.GetProductById(productId);
        //     if (product == null)
        //    {
        //        return this.NotFound();
        //    }
        //    return this.Ok(product);

        }
        //{
        //    _logger.LogInformation($"Retrieving product (productId: {productId})");
        //    var product = _productService.GetProduct(productId);
        //    if (product == null)
        //    {
        //        return this.NotFound();
        //    }
        //    return this.Ok(product);
        //}

    }
        
}
