// var options = {
//   offset: 80
// }
// var header = new Headhesive('.header_nav', options);


/* менюха в шапке */
$(document).ready(function() {
    $('.header .navbar-toggle').on('click', function() {
        $(".header .navbar-collapse").slideToggle(function() {
            $('.header #responsive-menu').toggleClass('clicked');
        });
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".header #responsive-menu, .header .navbar-toggle").length) return;
        $('.header #responsive-menu').removeClass('clicked').slideUp();
        event.stopPropagation();
    });
});


$(document).ready(function() {



    // function show_hide_to_listen(value) {
    // $('.people-left .people img, .people-right .people img').css({'visibility':value});
    // $('.head-section-1, .head-section-2, .head-section-3, .head-section-4, .head-section-5').css({'visibility':value});
    // $('.main-peoples').css({'visibility':value});
    // $('.people-left, .people-center, .people-right').css({'visibility':value});
    // $('.people-left .people img, .people-right .people img').css({'visibility':value});
    // $('.people-left .bonus, .people-center .bonus, .people-right .bonus').css({'visibility':value});
    // $('.people-left .bonus span, .people-center .bonus span, .people-right .bonus span').css({'visibility':value});
    // $('.sub-peoples').css({'visibility':value});
    // $('#fixed-img').css({'visibility':value});
    // $('.cars').css({'visibility':value});
    // $('.bonus-slide .ruka img').css({'visibility':value});
    // $('.arrows .arrow-left, .arrows .arrow-right').css({'visibility':value});
    // }















    // window.sr = ScrollReveal();
    // new WOW().init();

    // var fixed_img = document.getElementById('fixed-img');
    // var fixed_img = document.querySelector('#fixed-img');
    // sr.reveal('.box', { duration: 5000 }, 150);



    // $(document).click(function () {
    //     $.fn.fullpage.destroy('all');
    // });

    $(document).click(function() {
        $('#fullpage').fullpage.reBuild();

        //     fullPageIntroInit();
    });




    var height_row = function() {
        var peremennaya_height_row = 0;
        for (var i = 0; i < arguments.length; i++) {
            peremennaya_height_row = peremennaya_height_row + arguments[i];
            // console.log( arguments[i] );
        }
        return peremennaya_height_row;
    }

    $('#fullpage').fullpage({
        // sectionsColor: ['#1bbc9b', '#0b5371', '#0b5371', '#fff2d4'],
        // anchors: ['firstPage', 'secondPage', '3rdPage', 'lastPage'],

        //Navigation
        // menu: '#menu',
        // lockAnchors: false,
        // anchors:['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        showActiveTooltip: false,
        slidesNavigation: false,
        // slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 0,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        // normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,

        //Design
        controlArrows: true,
        verticalCentered: true,
        // sectionsColor : ['#ccc', '#fff'],
        paddingTop: '85px',
        // paddingBottom: '10px',
        fixedElements: '.header',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        afterLoad: function(anchorLink, index) {


            var current = index - 1;
            var next = index;
            var prev = index - 2;
            $('#fp-nav li').css({ 'pointer-events': 'none' });
            if (index == 1) {
                $('#fp-nav li').eq(current).css({ 'pointer-events': 'auto' });
                $('#fp-nav li').eq(next).css({ 'pointer-events': 'auto' });
            }
            if (index > 1) {
                $('#fp-nav li').eq(prev).css({ 'pointer-events': 'auto' });
                $('#fp-nav li').eq(current).css({ 'pointer-events': 'auto' });
                $('#fp-nav li').eq(next).css({ 'pointer-events': 'auto' });
            }


            $('.section-wrap').css({ /*'padding-top': $('#section2').css('padding-top'),*/ 'height': $('#section2').outerHeight() });

            if (index == '01') {

                $(".people-center .bonus, .people-left .people img, .people-right .people img, .arrows .arrow-left, .arrows .arrow-right").css({ 'visibility': 'hidden', "transform": 'scale(0)' }).removeClass('is-visible-push');

                var height_row_in_section = height_row($('.head-section-2').outerHeight(), $('.main-peoples').outerHeight(), 100);
                $('.section-wrap .row').css({ 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });
                // console.log( height_row_in_section )

                // $('.section-wrap .row').css({ 'position':'relative', 'top':'0', 'transform':'translateY(0)', 'height':'100%' });
                $('.header .header_nav__logo').addClass('big-logo');
                // $('#fixed-img').removeClass('is-visible-push-2');
                $('#fixed-img').removeClass('is-visible-wobble-vertical');

                $(".head-section-1").delay(0).queue(function() {
                    $(this).css({ "transition-duration": '0.2s', "top": '60px', 'opacity': '1' });
                    $(this).dequeue();
                });

                // $(".people-center .people img").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'opacity':'1', 'left':'50%', 'top':'50%', 'transform': 'translate3d(-50%,-50%,0) scale(1)'});
                //   $(this).dequeue();
                // })
                // .delay(500).queue(function () {
                //   $(this).addClass('is-visible-push-2');
                //   $(this).dequeue();
                // });


                // $(".people-center .people img").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'top':$('.main-peoples').offset().top, 'transform': 'scale(1)'});
                //   $(this).dequeue();
                // });

                $("#fixed-img").delay(500).queue(function() {
                        $(this).css({ "transition": 'transform 0.2s', 'opacity': '1', 'transform': 'translate3d(-50%,-50%,0) scale(1)', "top": '50%' });
                        $(this).dequeue();
                        // $('.people-center .people img').css({'opacity':'0'});
                    })
                    .delay(500).queue(function() {
                        $(this).addClass('is-visible-push-2');
                        $(this).dequeue();
                    });
            } // КОНЕЦ СЕКЦИИ 0

            if (index == '02') {

                var height_row_in_section = height_row($('.head-section-2').outerHeight(), $('.main-peoples').outerHeight(), 68);
                $('.section-wrap .row').css({ 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });

                $(".head-section-2").delay(0).queue(function() {
                    $(this).css({ 'transition-duration': '0.2s', "top": '0', 'opacity': '1' });
                    $(this).dequeue();
                });

                /*if ( $(window).width() <= '767' ) {
                  $(".people-center").delay(0).queue(function () {
                    $(this).css({'padding-top': '22px', 'transition-duration': '0.2s'});
                    $(this).dequeue();
                  });
                }*/

                $(".arrows .arrow-left, .arrows .arrow-right").delay(0).queue(function() {
                        $(this).css({ 'visibility': 'visible', 'transition-duration': '0.2s', "transform": 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });

                $(".people-left .people img, .people-right .people img").delay(700).queue(function() {
                        $(this).css({ 'visibility': 'visible', 'transition-duration': '0.2s', "transform": 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });

                $(".people-center .people img").delay(0).queue(function() {
                        $(this).css({ 'visibility': 'visible', 'transition-duration': '0.2s' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });

                $(".people-center .bonus").delay(1200).queue(function() {
                        $(this).css({ 'visibility': 'visible', 'transition-duration': '0.2s', 'top': '0', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(500).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });

                $(".people-center .bonus span").delay(1700).queue(function() {
                        $(this).css({ 'visibility': 'visible', "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(200).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });

                $(".main-peoples").css({ 'opacity': '1' });

                // $(".people-center .people img").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'top':$('.main-peoples').offset().top, 'transform': 'translate3d(-50%,-50%,0) scale(1)'});
                //   $(this).dequeue();
                // });

                // $(".people-center .people img").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'top':$(".people-center .people img").offset().top + $(".main-peoples").height() - $(".people-center .people img").height(), 'transform': 'scale(1)'});
                //   $(this).dequeue();
                // });

                /*$(".main-peoples").delay(0).queue(function () {
                  $(this).css({'transition-duration': '0.2s', "bottom": '100px' });
                  $(this).dequeue();
                });*/
            } // КОНЕЦ СЕКЦИИ 2












            if (index == '03') {

                var height_row_in_section = height_row($('.head-section-3').outerHeight(), $('.sub-peoples').outerHeight(), $('.main-peoples').outerHeight());
                $('.section-wrap .row').css({ "transition-duration": '0.2s', 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });

                $(".head-section-3").delay(0).queue(function() {
                    $(this).css({ "transition-duration": '0.2s', "top": '10px', 'opacity': '1' });
                    $(this).dequeue();
                });

                $(".people-center .bonus span").text('+ 200');

                if ($(window).width() <= '767') {
                    $(".people-left, .people-right").delay(0).queue(function() {
                        $(this).css({ 'top': '18px', 'transition-duration': '0.2s' });
                        // $(this).css({'top': '34px', 'transition-duration': '0.2s'});
                        // $(this).css({'top': '76px', 'transition-duration': '0.2s'});
                        $(this).dequeue();
                    });
                    $(".people-center").delay(0).queue(function() {
                        $(this).css({ 'padding-top': '27px', 'transition-duration': '0.2s' });
                        $(this).dequeue();
                    });
                    $(".arrow").delay(0).queue(function() {
                        $(this).css({ 'top': '-36px', 'transition-duration': '0.2s' });
                        $(this).dequeue();
                    });
                }

                $(".people-left .bonus, .people-right .bonus").delay(0).queue(function() {
                        $(this).css({ 'visibility': 'visible', 'transition-duration': '0.2s', 'top': '0', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(700).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });
                $(".people-left .bonus span, .people-right .bonus span").delay(700).queue(function() {
                        $(this).css({ 'visibility': 'visible', "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(200).queue(function() {
                        $(this).addClass('is-visible-push');
                        $(this).dequeue();
                    });

                $(".main-peoples").delay(0).queue(function() {
                    $(this).css({ 'transition-duration': '0.2s' });
                    $(this).dequeue();
                });

                // $(".people-center .people img").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'top':$(".people-center .people img").offset().top + $(".main-peoples").height() - $(".people-center .people img").height(), 'transform': 'translate3d(-50%,-50%,0) scale(1)'});
                //   $(this).dequeue();
                // });

                $(".sub-peoples img").css({ 'visibility': 'visible' });
                $(".sub-peoples").delay(300).queue(function() {
                        $(this).find('.level-1 img').css({ "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(".sub-peoples").find('.level-1 img').addClass('is-visible-push');
                        $(this).dequeue();
                    })
                    .delay(100).queue(function() {
                        $(".sub-peoples").find('.level-2 img').css({ "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(".sub-peoples").find('.level-2 img').addClass('is-visible-push');
                        $(this).dequeue();
                    })
                    .delay(100).queue(function() {
                        $(".sub-peoples").find('.level-3 img').css({ "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(".sub-peoples").find('.level-3 img').addClass('is-visible-push');
                        $(this).dequeue();
                    });

            }

            if (index == '04') {

                var height_row_in_section = height_row($('.head-section-3').outerHeight(), $('.cars').outerHeight(), $('.main-peoples').outerHeight());
                $('.section-wrap .row').css({ "transition-duration": '0.2s', 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });

                // $('.header_nav').text( index ).css({'font-size':'36px', 'color':'#ffffff'});
                $(".people-left .bonus span").text('+ 100');
                $(".people-center .bonus span").text('+ 300');
                $(".people-right .bonus span").text('+ 200');

                $(".head-section-4").delay(0).queue(function() {
                    $(this).css({ "transition-duration": '0.2s', "top": '10px', 'opacity': '1' });
                    $(this).dequeue();
                });

                // $(".people-center .people img").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'top':$(".people-center .people img").offset().top, 'transform': 'translate3d(-50%,-50%,0) scale(1)'});
                //   $(this).dequeue();
                // });

                $(".cars img").css({ "visibility": 'visible' });
                $(".cars").delay(0).queue(function() {
                        $(this).find('.car-01, .car-09, .car-03, .car-11').css({ "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(200).queue(function() {
                        $(".cars").find('.car-01, .car-09, .car-03, .car-11').addClass('is-visible-push');
                        $(this).dequeue();
                    })
                    .delay(100).queue(function() {
                        $(".cars").find('.car-08, .car-02, .car-10, .car-04').css({ "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(200).queue(function() {
                        $(".cars").find('.car-08, .car-02, .car-10, .car-04').addClass('is-visible-push');
                        $(this).dequeue();
                    })
                    .delay(100).queue(function() {
                        $(".cars").find('.car-05, .car-06, .car-07').css({ "transition-duration": '0.2s', 'transform': 'scale(1)' });
                        $(this).dequeue();
                    })
                    .delay(200).queue(function() {
                        $(".cars").find('.car-05, .car-06, .car-07').addClass('is-visible-push');
                        $(this).dequeue();
                    });

            }

            if (index == '05') {
                // $('.header_nav').text( index ).css({'font-size':'36px', 'color':'#ffffff'});
                $('.bonus-slide .container').css({ 'padding-bottom': $('.footer').outerHeight(), 'height': $('#section5 .fp-tableCell').outerHeight() });

                // var height_row_in_section = height_row( $('.head-section-3').outerHeight(), $('.sub-peoples').outerHeight(), $('.main-peoples').outerHeight() );
                $('.section-wrap .row').css({ "transition-duration": '0.2s', 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': '100%' });

                $(".bonus-slide .ruka img").delay(0).queue(function() {
                        $(this).css({ "transition-duration": '0.2s', 'opacity': '1' });
                        $(this).dequeue();
                    })
                    .delay(100).queue(function() {
                        $(this).addClass('is-visible-rotate-origin-bottom-right');
                        $(this).css({ "transform": 'rotate(0deg)' });
                        $(this).dequeue();
                    });
                if ($(window).width() <= '767') {
                    $(".head-section-5").delay(0).queue(function() {
                        $(this).css({ "transition-duration": '0.2s', "top": '30px', 'opacity': '1' });
                        $(this).dequeue();
                    });
                } else {
                    $(".head-section-5").delay(0).queue(function() {
                        $(this).css({ "transition-duration": '0.2s', "top": '50%', 'opacity': '1' });
                        $(this).dequeue();
                    });
                }
            }

            $('#fullpage').fullpage.reBuild();

        },


































































        'onLeave': function(index, nextIndex, direction) {
            if (index == 1) {
                $('.header .header_nav__logo').removeClass('big-logo');
                $(".head-section-1").delay(0).queue(function() {
                        $(this).css({ 'transition-duration': '0.2s', 'top': $('#section1').height(), 'opacity': '0' });
                        $(this).dequeue();
                    })
                    .delay(1000).queue(function() {
                        $(this).css({ "top": '-1000px' });
                        $(this).dequeue();
                    });

                $("#fixed-img").delay(0).queue(function() {
                        var q1 = $('.people-center .people img').offset().top - $('#fixed-img').offset().top - $('.people-center .people img').height() / 2;
                        var q2 = 'translate3d(-50%,' + q1 + 'px,0) scale(1)';
                        $(this).css({ 'transition-duration': '0.2s', 'top': '50%', "transform": q2 });

                        // console.log( $('.people-center .people img').offset().top );
                        // console.log( $('#fixed-img').offset().top );
                        // console.log( $('.people-center .people img').height() / 2 );

                        // $(this).css({'transition-duration': '0.2s', "top": $(this).offset().top + $('.main-peoples').height() - $('.people-center .people img').height() });
                        // $(this).css({'transition-duration': '0.2s', "top": $('.people-center .people img').offset().top });
                        $(this).dequeue();
                    })
                    .delay(500).queue(function() {
                        $(this).addClass('is-visible-wobble-vertical');
                        $(this).dequeue();
                    })
                    .delay(700).queue(function() {
                        $(this).css({ 'opacity': '0' });
                        $('.people-center .people img').css({ 'opacity': '1' });
                        $(this).dequeue();
                    });
            }





            if (index == 02) {
                $(".head-section-2").delay(0).queue(function() {
                        $(this).css({ 'transition-duration': '0.2s', 'top': $('#section2').height(), 'opacity': '0' });
                        $(this).dequeue();
                    })
                    .delay(1000).queue(function() {
                        $(this).css({ "top": '-1000px' });
                        $(this).dequeue();
                    });
            }

            if (index == 02 && direction == 'up') {
                /*$("#fixed-img").delay(0).queue(function () {
                  $(this).css({"transition-duration": '0.2s', "transform": 'translate3d(-50%,-50%,0) scale(0)', "top": '50%'});
                  $(this).dequeue();
                });*/
                $(".main-peoples").css({ 'visibility': 'hidden', 'opacity': '0' });

                $(".people-left .people img, .people-right .people img").css({ 'visibility': 'hidden', "transform": 'scale(0)' }).removeClass('is-visible-push');
                /*$(".people-left .people img, .people-right .people img").delay(0).queue(function () {
                  $(this).css({'visibility': 'hidden', "transform": 'scale(0)'});
                  $(this).removeClass('is-visible-push');
                  $(this).dequeue();
                });*/

                $(".people-center .bonus, .people-left .bonus, .people-right .bonus").css({ 'visibility': 'hidden', 'top': '0', 'transform': 'scale(0)' }).removeClass('is-visible-push');
                /*$(".people-center .bonus").delay(0).queue(function () {
                  $(this).css({'visibility': 'hidden', 'top': '0', 'transform': 'scale(0)'});
                  $(this).removeClass('is-visible-push');
                  $(this).dequeue();
                });*/
                $(".people-center .people img").css({ 'visibility': 'hidden', 'opacity': '0' });
                /*$(".people-center .people img").delay(0).queue(function () {
                  $(this).css({'visibility': 'hidden', 'opacity': '0' });
                  $(this).dequeue();
                });*/

                $("#fixed_img").css({ "transition": 'transform 0.2s', 'opacity': '1', 'transform': 'translate3d(-50%,-50%,0) scale(1)', "top": '50%' });
                /*$("#fixed_img").delay(0).queue(function () {
                  $(this).css({"transition": 'transform 0.2s', 'opacity': '1', 'transform': 'translate3d(-50%,-50%,0) scale(1)', "top": '50%'});
                  $(this).dequeue();
                });*/

                $(".arrows .arrow-left, .arrows .arrow-right").css({ 'visibility': 'hidden', "transform": 'scale(0)' }).removeClass('is-visible-push');
                /*$(".arrows .arrow-left, .arrows .arrow-right").delay(0).queue(function () {
                  $(this).css({'visibility': 'hidden', "transform": 'scale(0)'});
                  $(this).removeClass('is-visible-push');
                  $(this).dequeue();
                });*/

                // $('.people-center .people img').css({'opacity':'0'});
                // $("#fixed-img").css({'opacity':'1'});
                // $(".main-peoples").delay(0).queue(function () {
                // $(this).css({'transition-duration': '0.2s', "bottom": '100px' });
                // $(this).hide();
                // $(this).css({'transition-duration': '0.2s', "opacity": '0' });
                // $(this).dequeue();
                // });
            }

            if (index == 02 && direction == 'down') {
                // $(".main-peoples").delay(0).queue(function () {
                //   $(this).css({'transition-duration': '0.2s', "bottom": '0' });
                //   $(this).dequeue();
                // });
            }


            if (index == 03) {
                $(".head-section-3").delay(0).queue(function() {
                        $(this).css({ "transition-duration": '0.2s', "top": $('#section3').height(), 'opacity': '0' });
                        $(this).dequeue();
                    })
                    .delay(1000).queue(function() {
                        $(this).css({ "top": '-1000px' });
                        $(this).dequeue();
                    });

                $(".sub-peoples img").css({ "visibility": 'hidden' });
                $(".sub-peoples").find('img').css({ "transition-duration": '0.2s', 'transform': 'scale(0)' }).removeClass('is-visible-push');
                /*$(".sub-peoples").delay(0).queue(function () {
                  $(this).find('img').css({"transition-duration": '0.2s', 'transform': 'scale(0)'});
                  $(this).find('img').removeClass('is-visible-push');
                  $(this).dequeue();
                });*/

            }

            if (index == 03 && direction == 'up') {
                $(".main-peoples").delay(0).queue(function() {
                    $(this).css({ 'transition-duration': '0.2s', "bottom": '0' });
                    $(this).dequeue();
                });

                $(".people-left .bonus, .people-right .bonus").css({ 'visibility': 'hidden', 'top': '0', 'transform': 'scale(0)' }).removeClass('is-visible-push');
                /*$(".people-left .bonus, .people-right .bonus").delay(0).queue(function () {
                  $(this).css({'top': '0', 'transform': 'scale(0)'});
                  $(this).removeClass('is-visible-push');
                  $(this).dequeue();
                });*/

                if ($(window).width() <= '767') {
                    $(".people-left, .people-right").delay(0).queue(function() {
                        $(this).css({ 'top': '12px', 'transition-duration': '0.2s' });
                        $(this).dequeue();
                    });
                    $(".people-center").delay(0).queue(function() {
                        $(this).css({ 'padding-top': '70px', 'transition-duration': '0.2s' });
                        $(this).dequeue();
                    });
                    $(".arrow").delay(0).queue(function() {
                        $(this).css({ 'top': '-102px', 'transition-duration': '0.2s' });
                        $(this).dequeue();
                    });
                }

            }

            if (index == 04) {
                $(".head-section-4").delay(0).queue(function() {
                        $(this).css({ "transition-duration": '0.2s', "top": $('#section4').height(), 'opacity': '0' });
                        $(this).dequeue();
                    })
                    .delay(300).queue(function() {
                        $(this).css({ "top": '-1000px' });
                        $(this).dequeue();
                    });



                $(".cars img").css({ "visibility": 'hidden', "transition-duration": '0.2s', 'transform': 'scale(0)' });
                $(".cars img").removeClass('is-visible-push');
                /*$(".cars img").delay(0).queue(function () {
                  $(this).css({"transition-duration": '0.2s', 'transform': 'scale(0)'});
                  $(this).removeClass('is-visible-push');
                  $(this).dequeue();
                });*/
            }

            if (index == 04 && direction == 'up') {}

            if (index == 04 && direction == 'down') {
                // if ( $(window).width() <= '767' ) {
                $(".main-peoples").delay(0).queue(function() {
                    $(this).css({ "transition-duration": '0.2s', 'opacity': '0' });
                    $(this).dequeue();
                });
                // } else {
                //   $(".main-peoples").delay(0).queue(function () {
                //     $(this).css({"transition-duration": '0.2s', 'transform': 'scale(0)'});
                //     $(this).dequeue();
                //   });
                // }
                $(".footer").delay(0).queue(function() {
                    $(this).addClass('is-visible');
                    $(this).dequeue();
                });
            }

            if (index == 05) {
                $(".head-section-5").delay(0).queue(function() {
                        $(this).css({ "transition-duration": '0.2s', "top": $('#section5').height(), 'opacity': '0' });
                        $(this).dequeue();
                    })
                    .delay(1000).queue(function() {
                        $(this).css({ "top": '-1000px' });
                        $(this).dequeue();
                    });
                $(".bonus-slide .ruka img").delay(0).queue(function() {
                    $(this).css({ "transition-duration": '0.2s', 'transform': 'rotate(-90deg)', 'opacity': '0' });
                    $(this).dequeue();
                });
                $('.bonus-slide .ruka img').removeClass('is-visible-rotate-origin-bottom-right');

                $(".footer").delay(200).queue(function() {
                    $(this).removeClass('is-visible');
                    // $(this).css({"transition-duration": '0.2s', 'opacity':'0'});
                    $(this).dequeue();
                });
                // if ( $(window).width() <= '767' ) {
                $(".main-peoples").delay(0).queue(function() {
                    $(this).css({ "transition-duration": '0.2s', 'opacity': '1' });
                    $(this).dequeue();
                });
                // } else {
                // $(".main-peoples").delay(0).queue(function () {
                //   $(this).css({"transition-duration": '0.2s', 'transform': 'scale(1)'});
                //   $(this).dequeue();
                // });
                // }

            }

        },


        // afterRender: function(){
        //   // if ( slideIndex == '02' ) {
        //     console.log('эсука');
        //   //   console.log('02');
        //   //   $(".people-center .bonus").css({'visibility': 'hidden', 'top': '0', 'transform': 'scale(0)'}).removeClass('is-visible-push');
        //   // }
        //   // if ( slideIndex == '01' ) {
        //   //   console.log('01');
        //   //   $(".people-center .bonus").css({'visibility': 'hidden', 'top': '0', 'transform': 'scale(0)'}).removeClass('is-visible-push');
        //   // }
        // },





        afterResize: function(index) {
            // console.log('afterResize ' + index);
            // show_section_2();
            // show_section_3();
            // show_section_4();
            // $('.section-wrap').css({ 'padding-top': $('#section2').css('padding-top'), 'height': $('#section2').outerHeight() });
            // $('#fullpage').fullpage.reBuild();
        },

        afterReBuild: function(index) {
            // console.log('afterReBuild ' + index);
            if ($('body').hasClass('fp-viewing-0')) {
                // console.log('ура');
                $(".main-peoples").css({ 'visibility': 'hidden' }).removeClass('is-visible-push');
            }
        }

        //events
        // afterReBuild: function(){},
        // onLeave: function(index, nextIndex, direction){},
        // afterLoad: function(anchorLink, index){},
        // afterRender: function(){},
        // afterResize: function(){},
        // afterResponsive: function(isResponsive){},
        // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });





    // $(window).on('load', function(){
    //   $('#fullpage').fullpage.reBuild();
    //   // console.log('load');
    // });
    // $(window).resize(function(){
    //   $('#fullpage').fullpage.reBuild();
    //   // console.log('resize');
    // });


















    function show_section_1() {

    }

    // =============================

    function show_section_2() {
        var height_row_in_section = height_row($('.head-section-2').outerHeight(), $('.main-peoples').outerHeight(), 100);
        $('.section-wrap .row').css({ 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });
    }

    // =============================


    function show_section_3() {
        var height_row_in_section = height_row($('.head-section-3').outerHeight(), $('.sub-peoples').outerHeight(), $('.main-peoples').outerHeight());
        $('.section-wrap .row').css({ "transition-duration": '0.2s', 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });
    }

    // =============================

    function show_section_4() {
        var height_row_in_section = height_row($('.head-section-3').outerHeight(), $('.sub-peoples').outerHeight(), $('.main-peoples').outerHeight());
        $('.section-wrap .row').css({ "transition-duration": '0.2s', 'position': 'relative', 'top': '50%', 'transform': 'translateY(-50%)', 'height': height_row_in_section });
    }

    // =============================

    function show_section_5() {

    }

    // =============================























});
