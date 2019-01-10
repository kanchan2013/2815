
using Search.Business.SearchBusiness;
using Search.DAL;
using System.Collections.Generic;
using System.Web.Http;

namespace SearchAPI.Controllers
{
    public class SearchApiController : ApiController
    {
        private ISearchService searchService = new SearchService();

        [HttpGet]
        public IEnumerable<SearchTitle> Get(string searchString)
        {
            return searchService.getSerachData(searchString);
        }

    }
}
