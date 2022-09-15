using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreAPI
{
    public class Rating
    {
        [JsonProperty("rate")]
        public double Rate { get; set; }

        [JsonProperty("count")]
        public int Count { get; set; }
    }

    public class ProductsData
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("price")]
        public double Price { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("category")]
        public string Category { get; set; }

        [JsonProperty("image")]
        public string Image { get; set; }

        [JsonProperty("rating")]
        public Rating Rating { get; set; }
    }
}
