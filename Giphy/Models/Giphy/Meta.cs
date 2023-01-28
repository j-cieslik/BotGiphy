using Newtonsoft.Json;

namespace Giphy.Models.Giphy
{
    public class Meta
    {
        [JsonProperty("status")]
        public long Status { get; set; }

        [JsonProperty("msg")]
        public string Msg { get; set; }

        [JsonProperty("response_id")]
        public string ResponseId { get; set; }
    }
}