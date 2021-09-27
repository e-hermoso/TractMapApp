using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Map.Model.Data;

namespace TractMaps.Data
{
    public static class StaticData
    {
        public static List<TractMap> Tracts => allTracts;
        static List<TractMap> allTracts = new List<TractMap>()
        {
            new TractMap()
            {
                Id=1,
                TractName="Tract Map 1111",
                Description="Tract Map description here",
                DateStarted = new DateTime(2017,01,20),
                DateCompleted = null
            },
            new TractMap()
            {
                Id=2,
                TractName="Tract Map 2222",
                Description=" Tract Map description here",
                DateStarted = new DateTime(2019,02,22),
                DateCompleted = new DateTime(2019,01,30)
            },
            new TractMap()
            {
                Id=3,
                TractName="Tract Map 3333",
                Description="Tract Map description here",
                DateStarted = new DateTime(2019,01,27),
                DateCompleted = new DateTime(2019,01,30)
            },
            new TractMap()
            {
                Id=4,
                TractName="Tract Map 4444",
                Description="Tract Map description here",
                DateStarted = new DateTime(2019,01,20),
                DateCompleted = null
            },
            new TractMap()
            {
                Id=5,
                TractName="Tract Map 5555",
                Description="Tract Map description here",
                DateStarted = new DateTime(2015,01,20),
                DateCompleted = new DateTime(2015,01,30)
            },
            new TractMap()
            {
                Id=7,
                TractName="Tract Map 6666",
                Description="Tract Map description here",
                DateStarted = new DateTime(2019,01,20),
                DateCompleted = null
            }
        };

    }
}
