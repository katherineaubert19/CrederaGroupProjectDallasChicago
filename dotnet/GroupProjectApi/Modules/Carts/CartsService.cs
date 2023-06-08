using GroupProjectApi.Modules.Common.Attributes;
using GroupProjectApi.Modules.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroupProjectApi.Modules.Carts
{
    [TransientService]
    public class CartsService
    {
        private readonly CartsRepository _cartRepo;

        public CartsService(CartsRepository cartRepo)
        {
            _cartRepo = cartRepo;
        }
        public CartDto GetCart(int cartId)
        {
            return _cartRepo.GetCartById(cartId)?.ToCartDto();
        }
    }
}
