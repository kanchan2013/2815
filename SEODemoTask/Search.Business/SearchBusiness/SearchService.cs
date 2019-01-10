using Search.DAL;
using System.Collections.Generic;
using System.Linq;


namespace Search.Business.SearchBusiness
{
    public class SearchService : ISearchService
    {
        private SearchDBEntities1 db = new SearchDBEntities1();

        public List<SearchTitle> getSerachData(string searchString)
        {
            return db.SearchTitles.Where(x => x.Title.StartsWith(searchString)).ToList();
        }
    }
}
