using Search.DAL;
using System.Collections.Generic;

namespace Search.Business.SearchBusiness
{
    public interface ISearchService
    {
        List<SearchTitle> getSerachData(string searchString);
    }
}
