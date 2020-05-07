

(function () {

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 436
        }
    });

    var tween1 = TweenMax.fromTo('#human01', 0.6, {
        scale: 1,
    },{
        scale: 1.8,
        repeat: 1,
        yoyo: true
    });

    var tween2 = TweenMax.fromTo('#human02', 0.6, {
        scale: 1,
    },{
        scale: 1.8,
        repeat: 1,
        yoyo: true
    });

    var tween3 = TweenMax.fromTo('#human03', 0.6, {
        scale: 1,
    },{
        scale: 1.8,
        repeat: 1,
        yoyo: true
    });

    var tween4 = TweenMax.to('#section-hidden01', 0.42, {
        opacity: 0,
    });

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1"

    }).setClassToggle('.big1', 'active')
        .setTween(tween1)
        .addTo(controller)
        .addIndicators({
            name: "1"
        });


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2"
    }).setClassToggle('.big2', 'active')
        .setTween(tween2)
        .addTo(controller)
        .addIndicators({
            name: "2"
        });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3"
    }).setClassToggle('.big3', 'active')
        .setTween(tween3)
        .addTo(controller)
        .addIndicators({
            name: "3"
        });

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4"
    })
        .setTween(tween4)
        .addTo(controller)
        .addIndicators({
            name: "4"
        });
}())
var human01 = document.getElementById("human01"),
    human02 = document.getElementById("human02"),
    human03 = document.getElementById("human03");

function toggleImg() {
    if(human01.classList.contains("active")){
         human01.src = "img/human01_c.png";
    }

    if(human02.classList.contains("active")){
        human02.src = "img/human02_c.png";
        human01.src = "img/human01.png";
    } else {
        human02.src = "img/human02.png";
    }

    if(human03.classList.contains("active")){
        human03.src = "img/human03_c.png";
        human02.src = "img/human02.png";
    } else {
        human03.src = "img/human03.png";
    }
}

window.addEventListener("scroll", toggleImg);