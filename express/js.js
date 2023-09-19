$(document).ready(function () {
    console.log("Successful");
    $("#img1").click(function () {
        $("#img3").animate(
            {
                left: '250px',
                height: '+=150px',
                width: '+=150px'
            }
        );
        console.log("pic1");
    });

    $("#img2").click(function () {
        var div = $("#img2");
        div.animate({ height: '300px', opacity: '0.4' }, "fast");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "fast");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
        console.log("pic2");
    });

    $("#img3").click(function () {
        $("#img1").animate(
            {
                height: 'toggle'
            }
        );
        console.log("pic3");
    });
});