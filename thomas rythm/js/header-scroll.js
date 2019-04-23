// const header = document.querySelector('.header');
// const headerHeight = header.offsetHeight;
// const windowHeight = document.documentElement.clientHeight; // высота окна браузера


// function onScroll(e) {
//     let pos = window.pageYOffset;

//     if (pos > headerHeight + 100) {
//         // Set position fixed for header
//         header.style.position = 'fixed';
//         header.style.top = '-75px';
//         header.style.backgroundColor = '#000';
//     }
//     if (pos > windowHeight) {
//         header.style.top = '0';
//         header.style.transition = 'top .3s ease-out';
//     }
//     if (pos < headerHeight + 100) {
//         header.style.position = 'absolute';
//         header.style.top = '0';
//         header.style.backgroundColor = 'transparent';
//         header.style.transition = 'none';
//     }
// }

// window.addEventListener('scroll', onScroll);
// window.addEventListener('load', onScroll);

const header = $('.header');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();

const about = $('.about-studio');
const services = $('.services');
const portfolio = $('.portfolio');
const contact = $('.contact-us');

function onScroll(e) {
    let pos = $(window).scrollTop();
    scrollBtn.removeClass('active');

    if (pos > headerHeight + 100) {
        header.css({
            'position': 'fixed',
            'top': '-75px',
            'background-color': '#000'
        })
    }
    if (pos >= windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        })
    }
    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        })
    }

    if ((pos >= header.offset().top - 10) && (pos < about.offset().top - 10 )) {
        $('a[data-scroll=".inner"]').addClass('active');
    }
    if ((pos >= about.offset().top - 10) && (pos < services.offset().top - 10 )) {
        $('a[data-scroll=".about-studio"]').addClass('active');
    }
    if ((pos >= services.offset().top - 10) && (pos < portfolio.offset().top - 20)) {
        $('a[data-scroll=".services"]').addClass('active');
    }
    if ((pos >= portfolio.offset().top - 20) && (pos < contact.offset().top - 10)) {
        $('a[data-scroll=".portfolio"]').addClass('active');
    }
    if (pos >= contact.offset().top - 10) {
        $('a[data-scroll=".contact-us"]').addClass('active');
    }
}

$(window).on('scroll', onScroll);

// scroll to element  ---------------------------------------
const scrollBtn = $('[data-scroll]');

function onClick(e) {
    e.preventDefault();
    const target = $(this).attr('data-scroll');
    const dist = $(target).offset().top;
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing');
}

scrollBtn.on('click', onClick);

// scroll to up  ---------------------------------------------
const arrowUp = $('.arrow-up a')

function onClickArrowUp(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 1000, 'swing');
}

arrowUp.on('click', onClickArrowUp);

// scroll to down  --------------------------------------------
const arrowDown = $('.goto');

function onClickArrowDown(e) {
    // e.preventDefault();
    heightPage = $('body').height();
    console.log(heightPage);
    $('html, body').animate({ scrollTop: heightPage }, 1000, 'swing');
}

arrowDown.on('click', onClickArrowDown);