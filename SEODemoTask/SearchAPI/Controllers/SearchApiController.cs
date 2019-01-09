using Search.Data;
using Search.Service.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SearchAPI.Controllers
{
    public class SearchApiController : ApiController
    {
        private ISearchService searchService = new SearchService();

        //[Route("Api/SearchApiController/getSearchData/{searchString}")]
        [HttpGet]
        public IEnumerable<SearchTitle> Get(string searchString)
        {
            return searchService.getSerachData(searchString);
        }

    }
}
