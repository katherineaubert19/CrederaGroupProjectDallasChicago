using GroupProjectApi.Modules.Common.Entities;
using GroupProjectApi.Modules.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//will map our json to dto 
//copy cart mapper to become product maper, loop thru json and map item to our dto 
//store in a list (iinnumerable)
//don't need a mapper, we can do it in service, at the very start 

namespace GroupProjectApi.Modules.Carts
{
    public static class CartsMapperExtensions
    {
        public static CartDto ToCartDto(this Cart cart)
        {
            return new CartDto
            {
                CartId = cart?.CartId ?? 0,
                Products = cart.CartProducts?.Select(cartProduct => new ProductDto
                {
                    ProductId = cartProduct.Product?.ProductId ?? 0,
                    Name = cartProduct.Product?.Name,
                    Description = cartProduct.Product?.Description,
                    Price = cartProduct.Product?.Price ?? 0m,
                    Quantity = cartProduct.Quantity
                })
            };
        }
    }
}
