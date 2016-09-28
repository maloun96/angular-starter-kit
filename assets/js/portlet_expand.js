jQuery('body').on('click', '.portlet-title',function (e) {
    if(e.target.nodeName == 'DIV'){
        $(this).find('.tools a:first-child').click();
    }
});
