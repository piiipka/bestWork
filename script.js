document.querySelector('.header__burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
    document.querySelector('.body').classList.toggle('dont');
});

$(window).scroll(function(){
    let scrolled = $(window).scrollTop();

    if(scrolled > 100) {
        $('.back_to_top').addClass('active');
    } else{
        $('.back_to_top').removeClass('active');
    }
});

$('.back_to_top').click(function() {
    $('body, html').animate({scrollTop: 0}, 500)
});

$('.logIn').click(function() {
    $('.main__logIn').addClass('active');
    $('.body').addClass('dont');
    $('.header, .main').addClass('none');
});

$('.x').click(function() {
    $('.main__logIn').removeClass('active');
    $('.header, .main').removeClass('none');
    const screenWidth = window.screen.width;
    if(screenWidth > 768) {
        $('.body').removeClass('dont');
    }
});

