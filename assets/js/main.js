$(function(){
    $('#menu h3').on("click",function(){
        $('#menu ul ul').slideUp();
        //$('#menu ul ul ul').slideUp();

        if(!$(this).next().is(":visible"))
            $(this).next().slideDown();
        
    });
    
    $('#menu h2').on("click",function(){
        $('#menu ul ul ul').slideUp();
        $('h2').css("border-left","5px solid lightgreen");
        $(this).css("border-left","10px solid lightgreen");
        if(!$(this).next().is(":visible"))
            $(this).next().slideDown();
        
    });
})