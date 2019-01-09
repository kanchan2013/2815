using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Search.Data;

namespace Search.Service.Services
{
    public class SearchService : ISearchService
    {
        private SearchDBEntities db = new SearchDBEntities();
        public List<SearchTitle> getSerachData(string searchString)
        {
            return db.SearchTitles.Where(x=>x.Title.StartsWith(searchString)).ToList();
        }
    }
}