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





$('.gender-menu__mass').on('click', function () {
            $('#menu').removeClass("menu_dry");
            $('#menu').addClass("menu_mass");
        });
    $('.gender-menu__dry').on('click', function () {
            $('#menu').removeClass("menu_mass");
            $('#menu').addClass("menu_dry");
        });
    $('.gender-menu__male > div span').on('click', function () {
            $('#menu').removeClass("menu_women");
            $('#menu').addClass("menu_men");
        });
    $('.gender-menu__female > div span').on('click', function () {
            $('#menu').removeClass("menu_men");
            $('#menu').addClass("menu_women");
        });
    $('.gender-menu__male .gender-menu__gender').on('click', function () {
            $('#menu').removeClass("menu_women");
            $('#menu').addClass("menu_men");
        });
    $('.gender-menu__female .gender-menu__gender').on('click', function () {
            $('#menu').removeClass("menu_men");
            $('#menu').addClass("menu_women");
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
              padding: 0, //убираем отступ
              helpers: {
                overlay: {
                  locked: false // отключаем блокировку overlay
                }
              }});
        });