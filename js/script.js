$(".dropdown-link a").click(function(){
    $(".dropdown-menu").toggleClass("active");
    $(this).parent().siblings().children().removeClass("active");
})
