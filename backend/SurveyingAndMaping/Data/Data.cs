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
                TractName="Vienna, Austria",
                Description="Vienna, is one the most beautiful cities in Austria and in Europe as well. Other than the Operas for which it is well known, Vienna also has many beautiful parks...",
                DateStarted = new DateTime(2017,01,20),
                DateCompleted = null
            },
            new TractMap()
            {
                Id=2,
                TractName="Carpinteria, CA, USA",
                Description="Carpinteria is a city located on the central coast of California, just south of Santa Barbara. It has many beautiful beaches as well as a popular Avocado Festival which takes place every year in October...",
                DateStarted = new DateTime(2019,02,22),
                DateCompleted = new DateTime(2019,01,30)
            },
            new TractMap()
            {
                Id=3,
                TractName="San Francisco, CA, USA",
                Description="San Francisco is a metropolitan area located on the west coast of the United States. Some popular tourist features include the Golden Gate Bridge, Chinatown, and Fisherman's Wharf. There are a variety of popular food options...",
                DateStarted = new DateTime(2019,01,27),
                DateCompleted = new DateTime(2019,01,30)
            },
            new TractMap()
            {
                Id=4,
                TractName="Tucson, AZ, USA",
                Description="Tucson is a southwestern city in Arizona that is home to the University of Arizona. It was recently named a world gastronomy city, and is well known for its desert landscape and various bike races...",
                DateStarted = new DateTime(2019,01,20),
                DateCompleted = null
            },
            new TractMap()
            {
                Id=5,
                TractName="Albuquerque, NM, USA",
                Description="Albuquerque is a city located in New Mexico that is famous for its balloon festivals, picturesque views and references to TV shows.",
                DateStarted = new DateTime(2015,01,20),
                DateCompleted = new DateTime(2015,01,30)
            },
            new TractMap()
            {
                Id=7,
                TractName="Munich, Germany",
                Description="Munich is an important city in Germany, located in the heart of Bavaria. It's famous for its traditional Oktoberfest annual festival, and many nice lakes and parks...",
                DateStarted = new DateTime(2019,01,20),
                DateCompleted = null
            }
        };

    }
}