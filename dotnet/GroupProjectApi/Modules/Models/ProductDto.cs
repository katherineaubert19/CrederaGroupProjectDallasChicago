using System;

namespace GroupProjectApi.Modules.Models
{
    // public class Hotsauce
    // {
    //     public List<ProductDto> Productds {get; set;}
    // }
    public class ProductDto

    {   
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }

}


