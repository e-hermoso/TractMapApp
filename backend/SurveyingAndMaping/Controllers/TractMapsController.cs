using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Map.Services.Data;
using Map.Model.Data;

namespace SurveyingAndMaping.Controllers
{
    [Route("api/[controller]")]
    public class TractMapsController : Controller
    {
        private ITractMapService _service;

        public TractMapsController(ITractMapService service)
        {
            this._service = service;
        }
        [HttpGet("[action]")] // or [HttpGet("GetTractMaps")]
        public IActionResult GetTractMaps()
        {
            var allTractMaps = _service.GetAllTractMaps();
            return Ok(allTractMaps);
        }

        [HttpGet("SingleTractMap/{id}")]
        public IActionResult GetTractMapById(int id)
        {
            var tractMap = _service.GetTractMapById(id);
            return Ok(tractMap);
        }
        [HttpPost("AddTractMap")]
        public IActionResult AddTractMap([FromBody]TractMap tractMap)
        {
            if(tractMap != null)
            {
                _service.AddTractMap(tractMap);
            }

            return Ok();
        }

        [HttpPut("UpdateTractMap/{id}")]
        public IActionResult UpdateTractMap(int id,[FromBody]TractMap tractMap)
        {
            _service.UpdateTractMap(id, tractMap);
            return Ok(tractMap);
        }

        [HttpDelete("DeleteTractMap/{id}")]
        public IActionResult DeleteTractMap(int id)
        {
            _service.DeleteTractMap(id);
            return Ok();
        }
    }
}
