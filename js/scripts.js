$(function() {
            $('.jcarousel').jcarousel({
                wrap: 'circular'
            });
        });


		$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '"></a>';
        }
    });
});
$('.pagination-item')
    .on('active.jcarouselcontrol', function() {
        $(this).addClass('active');
    })
    .on('inactive.jcarouselcontrol', function() {
        $(this).removeClass('active');
    });

		$(function() {
    $('.jcarousel')
        .jcarousel({
            // Core configuration goes here
        })
        .jcarouselAutoscroll({
            interval: 10000,
            target: '+=1',
            autostart: true
        })
    ;
});
$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });




        $('.first-menu__left').on('click', function () {
            $('#menu').addClass("menu_locked__men");
            $('.first-menu').fadeOut('slow');
        });
        $('.first-menu__right').on('click', function () {
            $('#menu').addClass("menu_locked__women");
            $('.first-menu').fadeOut('slow');
        });


    var menuUnlock = function() {
            $('#menu').removeClass("menu_locked");
            $('#menu').removeClass("menu_locked__women");
            $('#menu').removeClass("menu_locked__men");
        };
    $('.gender-menu__mass').on('click', function () {
            menuUnlock();
            $('#menu').removeClass("menu_dry");
            $('#menu').addClass("menu_mass");
        });
    $('.gender-menu__dry').on('click', function () {
            menuUnlock();
            $('#menu').removeClass("menu_mass");
            $('#menu').addClass("menu_dry");
        });
    $('.gender-menu__male > div span').on('click', function () {
            menuUnlock();
            $('#menu').removeClass("menu_women");
            $('#menu').addClass("menu_men");
        });
    $('.gender-menu__female > div span').on('click', function () {
            menuUnlock();
            $('#menu').removeClass("menu_men");
            $('#menu').addClass("menu_women");
        });
    $('.gender-menu__male .gender-menu__gender').on('click', function () {
            menuUnlock();
            $('#menu').removeClass("menu_women");
            $('#menu').removeClass("menu_dry");
            $('#menu').addClass("menu_men");
            $('#menu').addClass("menu_mass");
        });
    $('.gender-menu__female .gender-menu__gender').on('click', function () {
            menuUnlock();
            $('#menu').removeClass("menu_men");
            $('#menu').removeClass("menu_dry");
            $('#menu').addClass("menu_women");
            $('#menu').addClass("menu_mass");
        });



        $(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1100);
    return false;
  });
});



    $( "document" ).ready(function () {
        var checkFormExt = function() {
                if ($("#send_data").is(':checked')) {
                    $(".contacts__hidden").css("display", "block");
                    $("#send_data-label").css("font-weight", "bold");
                }
                else {
                    $(".contacts__hidden").css("display", "none");
                    $("#send_data-label").css("font-weight", "normal");
                };
            };
        $( "#send_data" ).on( "change", checkFormExt);
    });




        $(document).ready(function(){
            $(".modalbox").fancybox({
              closeBtn : true,
              'scrolling'   : 'no', //отключени для функции скролла галлереи
              padding: 0,
              helpers: {
                overlay: {
                  locked: false // отключаем блокировку overlay
                }
              }});
        });

        // раздаем крайним верхним и крайним нижним элементам галлереи соотвесттвущие классы (по открытию галлереи и при скролле)
        var galleryPosition = function() {
            $('.gal-photo').each(function() {
                if ((this.getBoundingClientRect().bottom)>((window.innerHeight)-120)) {
                    $(this).addClass("gal-photo_bottom");
                }
                else {
                    $(this).removeClass("gal-photo_bottom");
                };
                if ((this.getBoundingClientRect().top)<120) {
                    $(this).addClass("gal-photo_top");
                }
                else {
                    $(this).removeClass("gal-photo_top");
                };
            });
        };
        $('#gallery').scroll( function () {
            galleryPosition();
        });

        $('.modalbox').on('click', function () {
            galleryPosition();
            setTimeout(galleryPosition, 1500);
        });

        //при зуме сдвигаем соответсвующие к центру и от центра экрана.
        $('.gal-photo').hover( function (e) {
                if ($(this).hasClass("gal-photo_bottom")) {
                    var galleryTranslate = ((this.getBoundingClientRect().bottom)-(e.clientY) - 10);
                    $(this).css("transform", "matrix(2, 0, 0, 2, 0, -"+galleryTranslate+")");
                }
                else {
                    if ($(this).hasClass("gal-photo_top")) {
                        var galleryTranslate = ((e.clientY)-(this.getBoundingClientRect().top) - 10);
                        $(this).css("transform", "matrix(2, 0, 0, 2, 0, "+galleryTranslate+")");
                    }
                }
            }, function (e) {
                $(this).removeAttr('style');
        });