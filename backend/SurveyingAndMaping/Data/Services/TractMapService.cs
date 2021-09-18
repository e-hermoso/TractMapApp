using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Map.Model.Data;
using TractMaps.Data;

namespace Map.Services.Data
{
    public class TractMapService : ITractMapService
    {
        public void AddTractMap(TractMap tractMap)
        {
            //throw new NotImplementedException();

            StaticData.Tracts.Add(tractMap);
        }

        public void DeleteTractMap(int tractMapId)
        {
            //throw new NotImplementedException();
            var tractMap = StaticData.Tracts.FirstOrDefault(x => x.Id == tractMapId);

            if(tractMap != null)
            {
                StaticData.Tracts.Remove(tractMap);
            }
        }

        public List<TractMap> GetAllTractMaps()
        {
            //throw new NotImplementedException();
            return StaticData.Tracts.ToList();
        }

        public TractMap GetTractMapById(int tractMapId) => StaticData.Tracts.FirstOrDefault(x => x.Id == tractMapId);

        public void UpdateTractMap(int tractMapId, TractMap tractMap)
        {
            //throw new NotImplementedException();

            var oldTractMap = StaticData.Tracts.FirstOrDefault(x => x.Id == tractMapId);

            if(oldTractMap != null)
            {
                oldTractMap.TractName = tractMap.TractName;
                oldTractMap.Description = tractMap.Description;
                oldTractMap.DateStarted = tractMap.DateStarted;
                oldTractMap.DateCompleted = tractMap.DateCompleted;
            }
        }
    }
}
