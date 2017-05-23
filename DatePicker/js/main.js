/**
 * Created by Jonathan Zhang on 2017/5/23.
 */
(function () {
    var datepicker = window.datepicker;

    datepicker.buildUi =function (year,month) {

        var monthDate = datepicker.getMonthData(year,month);

        var html ='<div class="ui-datepicker-header">'+
            '<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>'+
            '<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>'+
            '<span class="ui-datepicker-curr-month">' + monthDate.year + '-' +  monthDate.month  +'</span>'+
            '</div>'+
            '<div class="ui-datepicker-body">'+
            '<table>'+
            '<thead>'+
            '<tr>'+
            '<th>一</th>'+
            '<th>二</th>'+
            '<th>三</th>'+
            '<th>四</th>'+
            '<th>五</th>'+
            '<th>六</th>'+
            '<th>日</th>'+
            '</tr>'+
            '</thead>'+
            '<tbody>';
        for (var i=0;i<monthDate.days.length;i++)
        {
            var date =monthDate.days[i];
            if (i%7 === 0){
                html += '<tr>';
            }
            html += '<td>' + date.showDate + '</td>';
            if(i%7 === 6)
            {
                html += '</tr>';
            }
        }
            html+= '</tbody>'+
            '</table>'+
            '</div>';
        return html;
    };
    datepicker.init = function($dom) {
      var html =datepicker.buildUi();
      $dom.innerHTML = html ;
    };
})();