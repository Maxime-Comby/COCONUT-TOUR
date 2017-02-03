function slider() {
    $('.single-items').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
    });
}

function loadHome() {
    $(".coconut").animate({
        left: "+=110vw"
    }, 2000);
    setTimeout('$(".loading").fadeOut(1000);', 2000);
    setTimeout('$("nav").fadeIn(200);', 2200)
}

function loadAnnex() {
    $(".loading").fadeOut(1000);
    $("nav").fadeIn(0);
}

function showBurger() {
    $("#mobile-nav").fadeIn(0);
    $("#mobile-nav").animate({
        right: "+=80vw"
    }, 500);
}

function hideBurger() {
    $("#mobile-nav").animate({
        right: "-=80vw"
    }, 500);
    setTimeout('$("#mobile-nav").fadeOut(0);', 500);
}

function checkForm() {
    var score = 0;
    if ($('#question-1-answer-a').is(':checked')) {
        score++;
        $(".right-answer-1").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-1").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-2-answer-c').is(':checked')) {
        score++;
        $(".right-answer-2").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-2").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-3-answer-b').is(':checked')) {
        score++;
        $(".right-answer-3").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-3").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-4-answer-b').is(':checked')) {
        score++;
        $(".right-answer-4").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-4").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-4-answer-a').is(':checked')) {
        score++;
        $(".right-answer-4").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-4").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-5-answer-a').is(':checked')) {
        score++;
        $(".right-answer-5").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-5").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if (($('#question-5-answer-a').is(':checked')) && ($('#question-5-answer-b').is(':checked')) && ($('#question-5-answer-c').is(':checked')) && ($('#question-5-answer-d').is(':checked')) && ($('#question-5-answer-e').is(':checked'))) {
        score++;
        $(".right-answer-5").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-5").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-6-answer-a').is(':checked')) {
        score++;
        $(".right-answer-6").css({
            color: "#78be00",
            "font-weight": "800"
        });
    } else {
        $(".right-answer-6").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-7-answer-d').is(':checked')) {
        score++;
        $(".right-answer-7").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-7").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-8-answer-a').is(':checked')) {
        score++;
        $(".right-answer-8").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-8").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-9-answer-c').is(':checked')) {
        score++;
        $(".right-answer-9").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-9").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }
    if ($('#question-10-answer-b').is(':checked')) {
        score++;
        $(".right-answer-10").css({
            color: "#78be00",
            "font-weight": "900"
        });
    } else {
        $(".right-answer-10").css({
            color: "#ed237a",
            "font-weight": "900"
        });
    }

    document.getElementById("score").innerHTML = score + "/10";
    if (score >= 5) {
        document.getElementById("commentaire").innerHTML = "Belle culture coco ! Défie tes amis !";
    }
    if (score == 10) {
        document.getElementById("commentaire").innerHTML = "Un sans faute ! Partage ça à tes amis !";
    } else {
        document.getElementById("commentaire").innerHTML = "Tes amis peuvent-ils te battre ? ";
        } 
            
            
    $("#results").animate({
        height: "+=250px"
    }, 1000);
    $("#score").fadeIn(1000);
    $("#commentaire").fadeIn(1000);
    $("#insta-link").fadeIn(1000);
    return false; /* POUR PAS ENVOYER DE PHP */
} 