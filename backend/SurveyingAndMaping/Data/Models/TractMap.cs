using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Map.Model.Data
{
    public class TractMap
    {
        public int Id { get; set; }
        public string TractName { get; set; }
        public string Description { get; set; }
        public DateTime DateStarted { get; set; }
        public DateTime? DateCompleted { get; set; }
    }
}
