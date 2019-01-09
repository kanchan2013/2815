using Search.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Search.Service.Services
{
    public interface ISearchService
    {
        List<SearchTitle> getSerachData(string searchString);
    }
}
