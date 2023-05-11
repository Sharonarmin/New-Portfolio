var cursor = document.querySelector('.cursor');
var overlay = document.querySelectorAll('.service-overlay');

function moveCircle(e) {
    TweenLite.to(cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
}

document.querySelector('.s-1').addEventListener("mouseover", function () {
    document.querySelector('.cursor').style.backgroundImage =
        "url('/assets/images/ui-ux-design.jpg')"
});
document.querySelector('.s-2').addEventListener("mouseover", function () {
    document.querySelector('.cursor').style.backgroundImage =
        "url('/assets/images/web-design.jpg')"
});

document.querySelector('.s-3').addEventListener("mouseover", function () {
    document.querySelector('.cursor').style.backgroundImage =
        "url('/assets/images/e-commerce.jpg')"
});
document.querySelector('.s-4').addEventListener("mouseover", function () {
    document.querySelector('.cursor').style.backgroundImage =
        "url('/assets/images/wordpress.jpg')"
});

var flag = false;
overlay.forEach(item => {
    item.addEventListener("mousemove", function () {
        flag = true;
        TweenLite.to(cursor, 0.3, {
            scale: 1,
            autoAlpha: 1
        });
        overlay.forEach(item => {
            item.addEventListener("mousemove", moveCircle);
        })
    })
});
overlay.forEach(item => {
    item.addEventListener("touchmove", function () {
        flag = true;
        TweenLite.to(cursor, 0.3, {
            scale: 1,
            autoAlpha: 1
        });
        overlay.forEach(item => {
            item.addEventListener("touchmove", moveCircle);
        })
    })
});

overlay.forEach(item => {
    item.addEventListener("mouseout", function () {
        flag = false;
        TweenLite.to(cursor, 0.3, {
            scale: 0.1,
            autoAlpha: 0
        });
    })
});
overlay.forEach(item => {
    item.addEventListener("touchend", function () {
        flag = false;
        TweenLite.to(cursor, 0.3, {
            scale: 0.1,
            autoAlpha: 0
        });
    })
});




