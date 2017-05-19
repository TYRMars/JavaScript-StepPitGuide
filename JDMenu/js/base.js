/**
 * Created by Jonathan Zhang on 2017/5/19.
 */
$(document).ready(function () {
    var sub = $('#sub'),
        test = $('#test'),
        timer,
        mouseInSub = false,
        activeRow,
        activeMenu,
        mouseTrack = [],
        moveHanlder
    ;



    /*鼠标跟踪*/
    moveHanlder =function (e) {
        mouseTrack.push({
            x:e.pageX,
            y:e.pageY
        })
    }

    if(mouseTrack.length >3 ){
        mouseTrack.shift();
    }

    /*鼠标状态*/
    sub.on('mouseenter',function(e){
       mouseInSub = true;
       
    }).on('mouseleave',function (e) {
       mouseInSub = false;
    });

    /*事件开始*/
    test
        /*当鼠标放到一级菜单上*/
        .on('mouseenter',function (e) {
            sub.removeClass('none');
            $(document).bind('mousemove',moveHanlder)
        })
        /*当鼠标离开一级菜单上*/
        .on('mouseleave',function (e) {
            console.log('fire mouse leave');
            sub.addClass('none');

            if(activeRow){
                activeRow.removeClass('active');
                activeRow = null;
            }

            if(activeMenu){
                activeMenu.addClass('none');
                activeMenu = null;
            }

            $(document).unbind('mousemove',moveHanlder)
        })
        /*事件代理，动态增加列表项*/
        .on('mouseenter','li',function (e) {
            if(!activeRow){
                activeRow = $(e.target).addClass('active');
                activeMenu = $('#' + activeRow.data('id'));
                activeMenu.removeClass('none');
                return
            }

            if(timer){
                clearTimeout(timer);
            }

            /*坐标计算*/
            var currMousePos = mouseTrack[mouseTrack.length - 1]
            var leftCorner = mouseTrack[mouseTrack.length - 2]
            var delay = needDelay(sub, leftCorner, currMousePos)

            /*如果在三角形内*/
            if(delay){
                timer = setTimeout(function(){
                    if(mouseInSub){
                        return;
                    }

                    activeRow.removeClass('active');
                    activeMenu.addClass('none');

                    activeRow = $(e.target);
                    activeRow.addClass('active');
                    activeMenu = $('#' + activeRow.data('id'));
                    activeMenu.removeClass('none');
                    timer = null;
                },300)
            }else{
                var prevActiveRow = activeRow;
                var prevActiveMenu = activeMenu;

                activeRow = $(e.target)
                activeMenu = $('#' + activeRow.data('id'))

                prevActiveRow.removeClass('active')
                prevActiveMenu.addClass('none')

                activeRow.addClass('active')
                activeMenu.removeClass('none')
            }
        })
});