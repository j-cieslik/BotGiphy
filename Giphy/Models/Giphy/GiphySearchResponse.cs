using Newtonsoft.Json;
using System.Collections.Generic;

namespace Giphy.Models.Giphy
{
    public class GiphySearchResponse
    {
        [JsonProperty("data")]
        public List<Datum> Data { get; set; }
        [JsonProperty("pagination")]
        public Pagination Pagination { get; set; }
        [JsonProperty("meta")]
        public Meta Meta { get; set; }
    }
}
