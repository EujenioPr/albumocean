$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('#title').css({
        'transform' : 'translate(0px, '+ wScroll / 1.7 +'%)'
    });

    var scroller = 999;
    var scroller2 = 99;
    if (wScroll) {
        scroller -= wScroll * 4;
        scroller2 += wScroll * 3;
    }
    // console.log(scroller2);

    if (wScroll > 0) {
        $('#title').css({
            'opacity' : '0.' + scroller
        });
        $('#header-pic').css({
            'opacity' : '0.' + scroller2
        });
    }   else {
        $('#title').css({
            'opacity' : '1'
        });
        $('#header-pic').css({
            'opacity' : '0'
        });
    }

    if (wScroll >= 210) {
        $('#stretchbar').css({
            'position' : 'fixed',
            'top' : '40px',
            'left' : '0'
        });
        $('#navbar').css({
            'background-color' : '#121212'
        });
    } else {
        $('#stretchbar').css({
            'position' : 'absolute',
            'top' : '250px',
            'left' : '0'
        });
        $('#navbar').css({
            'background-color' : 'rgba(18, 18, 18, 0.2)'
        });
    }
});

