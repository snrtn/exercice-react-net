namespace API.Entities
{
    public class product
    {
        public int Id {get; set;}
        public string Nmae {get; set;}
        public string Description {get; set;}
        public long Price {get; set;}
        public string PictureUrl { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }
    }
}