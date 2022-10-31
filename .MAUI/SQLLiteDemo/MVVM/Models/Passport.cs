using SQLiteNetExtensions.Attributes;
using SQLLiteDemo.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SQLLiteDemo.MVVM.Models
{
    public  class Passport : TableData
    {
        public DateTime ExpirationDate { get; set; }

    }
}
