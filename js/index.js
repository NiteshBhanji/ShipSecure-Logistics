$(document).ready(function () {
    $(".ServiceContainer1").hover(function () {
        $(".ServiceContainer2").css("width", "0%");
        $(".ServiceContainer3").css("width", "0%");
    });
});


$(document).ready(function () {
    $(".ServiceContainer2").hover(function () {
        $(".ServiceContainer1").css("width", "0%");
        $(".ServiceContainer3").css("width", "0%");
    });
});

$(document).ready(function () {
    $(".ServiceContainer3").hover(function () {
        $(".ServiceContainer1").css("width", "0%");
        $(".ServiceContainer2").css("width", "0%");
    });
});