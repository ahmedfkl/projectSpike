$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.originalEvent.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});


/****************NAV******************/
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    })
    /*********************************************/


/*CONTINENT POP UP'S*/
/*********************AFRICA*********************************/
$(document).ready(function() {
    $("#africa").on("click", function() {
        $("#africa-pop").each(function() {
            $("#africa-pop").toggleClass("card-peak");
        })
    });
});
$(document).ready(function() {
    $("#africa-close").on("click", function() {
        $("#africa-pop").removeClass("card-peak")
    });
});

/***********************ASIA*******************************/
$(document).ready(function() {
    $("#asia").on("click", function() {
        $("#asia-pop").each(function() {
            $("#asia-pop").toggleClass("card-peak");
        })
    });
});
$(document).ready(function() {
    $("#asia-close").on("click", function() {
        $("#asia-pop").removeClass("card-peak")
    });
});

/**********************OCEANIA********************************/
$(document).ready(function() {
    $("#oceania").on("click", function() {
        $("#oceania-pop").each(function() {
            $("#oceania-pop").toggleClass("card-peak");
        })
    });
});
$(document).ready(function() {
    $("#oceania-close").on("click", function() {
        $("#oceania-pop").removeClass("card-peak")
    });
});

/*************************EUROPE*****************************/
$(document).ready(function() {
    $("#europe").on("click", function() {
        $("#europe-pop").each(function() {
            $("#europe-pop").toggleClass("card-peak");
        })
    });
});
$(document).ready(function() {
    $("#europe-close").on("click", function() {
        $("#europe-pop").removeClass("card-peak")
    });
});


/*************************SOUTH AMERICA*****************************/
$(document).ready(function() {
    $("#south-america").on("click", function() {
        $("#south-america-pop").each(function() {
            $("#south-america-pop").toggleClass("card-peak");
        })
    });
});
$(document).ready(function() {
    $("#south-america-close").on("click", function() {
        $("#south-america-pop").removeClass("card-peak")
    });
});


/**************************NORTH AMERICA****************************/
$(document).ready(function() {
    $("#north-america").on("click", function() {
        $("#north-america-pop").each(function() {
            $("#north-america-pop").toggleClass("card-peak");
        })
    });
});
$(document).ready(function() {
    $("#north-america-close").on("click", function() {
        $("#north-america-pop").removeClass("card-peak")
    });
});
/******************************************************/
/*CONTINENT POP UP'S END*/