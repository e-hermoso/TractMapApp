using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Map.Model.Data;

namespace Map.Services.Data
{
    public interface ITractMapService
    {
        List<TractMap> GetAllTractMaps();
        TractMap GetTractMapById(int tractMapId);
        void UpdateTractMap(int tractMapId, TractMap tractMap);
        void DeleteTractMap(int tractMapId);
        void AddTractMap(TractMap tractMap);
    }
}
