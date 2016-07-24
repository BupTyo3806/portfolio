/**
 * Created by aleks on 22.07.2016.
 */
var deviceWidth = $(document).width();

if (deviceWidth <= 642) {
    var headerHeight = $("header .container").height();
    console.log(headerHeight);
    var topButton = $("#topButton");
    $(document).scroll(function () {
        if ($(document).scrollTop() > headerHeight) {
            topButton.css({
                "position": "fixed",
                "top": "0",
                "background-color": "#5584b1",
                "width": "100%",
                "margin": "0"
            });
        } else {
            topButton.css({"position": "static"});
        }
    });
}


$("header nav a").click(function () {
    var str = $(this).attr('href');
    $(document).scrollTo(str, 500, {offset: -100});
    return false;
});
