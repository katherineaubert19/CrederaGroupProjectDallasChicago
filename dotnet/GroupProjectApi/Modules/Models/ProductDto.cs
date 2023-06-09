using System;

namespace GroupProjectApi.Modules.Models
{
    public class ProductDto

    {   
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Description { get; set; }
    }

    public class ProductDetail
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string SpiceLevel { get; set;}
        public string Image {get; set;}
    }

}


