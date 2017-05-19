/**
 * Created by Jonathan Zhang on 2017/5/19.
 */
$(document).ready(function () {
    var sub = $('#sub'),
        timer,
        mouseInSub = false,
        activeRow,
        activeMenu;
    
    sub.on('mouseenter',function(e){
       mouseInSub = true;
       
    }).on('mouseleave',function (e) {
       mouseInSub = false;
    });

    $('#test')
        /**/
        .on('mouseenter',function (e) {
            sub.removeClass('none')
        })
        /**/
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
        })
        /**/
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

            timer = setTimeout(function(){
                if(mouseInSub = false){
                    return;
                }
                activeRow.removeClass('active');
                activeMenu.addClass('none');

                activeRow = $(e.target);
                activeRow.addClass('none');
                activeMenu = $('#' + activeRow.data('id'));
                activeMenu.removeClass('none');
                timer = null;
            },300)

        })
})