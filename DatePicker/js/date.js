/**
 * Created by Jonathan Zhang on 2017/5/19.
 */
(function () {
    var datepicker = {};
    
    datepicker.getMonthData =function (year,month) {
        var ret = [];

        if(!year || !month){
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth()+1;
        }

        /*这个月的第一天*/
        var firstDay = new Date(year,month-1,1);
        /*这个第一天是周几*/
        var firstDayWeekDay = firstDay.getDay();
        /*周日赋值为7*/
        if(firstDayWeekDay === 0) firstDayWeekDay = 7;

        year =firstDay.getFullYear();
        month =firstDay.getMonth() + 1;

        /*上个月的最后一天*/
        var lastDayOfLastMonth = new Date(year,month -1,0);
        /*存储上个月的最后一天*/
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        /*第一行要显示多少个上个月的日期*/
        var preMonthDayCount = firstDayWeekDay - 1;

        /*当月的最后一天*/
        var lastDay = new Date(year,month,0);
        var lastDate = lastDay.getDate();

        /*获取六周日期*/
        for (var i=0;i<7*5;i++){
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if(date<=0){
                //上一月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            }else if(date > lastDate){
                //下一月
                thisMonth = month + 1;
                showDate = showDate -lastDate;
            }

            if(thisMonth === 0) thisMonth = 12;
            if(thisMonth === 13) thisMonth = 1;

            ret.push({
                month:thisMonth,
                date:date,
                showDate:showDate
            })
        }

        return {
            year: year,
            month: month,
            days: ret
        };

    };
    window.datepicker = datepicker;
    }
)();