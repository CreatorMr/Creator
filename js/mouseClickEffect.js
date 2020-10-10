var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = ['❤️', '❤️😍❤️', '❤️⛽️❤️', '❤️😍❤️', '❤️😄❤️', '❤️💔❤️', '❤️😊❤️', '❤️😄❤️', '❤️☕️❤️', '❤️🌞❤️', '❤️🌛❤️', '❤️🐶❤️', '❤️🐱❤️', '❤️🌹❤️', '❤️🎩❤️']
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 1000,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size": "40px",
            "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            1500,
            function () {
                $i.remove();
            });
    });

});