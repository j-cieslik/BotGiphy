using Newtonsoft.Json;
using System;

namespace Giphy.Models.Giphy
{
    public class Onclick
    {
        [JsonProperty("url")]
        public Uri Url { get; set; }
    }
}