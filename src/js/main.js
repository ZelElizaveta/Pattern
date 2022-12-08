
const links = document.getElementsByClassName('link');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}  
            

// переключение активного класса у ссылок navBar

const overlay = document.querySelector('.modal-overlay'),
      modal = document.querySelector('.modal'),
      btns = document.getElementsByClassName('button'),
      body = document.querySelector('body'),
      close = document.querySelector('.modal__close'),
      footerModalBtn = document.querySelector('.button__form'),
      footerBtn = document.querySelector('.footer__button');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        overlay.classList.add('modal-overlay__active');
        modal.classList.add('modal__active');
        body.style.overflowY = 'hidden';
        closeMenu();
    })
}


footerBtn.addEventListener('click', () => {
    modal.classList.add('modal__active__footer');
    footerModalBtn.classList.add('success-send');
});



close.addEventListener('click', () => {
    modal.classList.remove('modal__active');
    modal.classList.remove('modal__active__footer');
    overlay.classList.remove('modal-overlay__active');
    footerModalBtn.classList.remove('success-send');
    body.style.overflowY = 'auto';
})


// модальные окна

const burger = document.querySelector('.burger'),
    wrapper = document.querySelector('.header__wrapper'),
    menu = document.getElementById('nav'),
    number = document.querySelector('.header__phone'),
    headerBtn = document.querySelector('.header__button'),
    headerClose = document.querySelector('.header__close'),
    logo = document.querySelector('.header__logo');

burger.addEventListener('click', () => {
    overlay.classList.add('modal-overlay__active');
    wrapper.classList.add('header__wrapper-media');
    wrapper.classList.add('header__wrapper-animation')
    menu.classList.add('header__menu-media');
    number.classList.add('header__phone-media');
    headerBtn.classList.add('header__button-media');
    headerBtn.classList.add('header__button-menu');
    headerClose.style.display = 'block';
    headerClose.classList.add('header__close-media');
    burger.style.opacity = 0;
    logo.classList.add('header__logo-media');
    body.style.overflowY = 'hidden';
    }
)

// burger

const closeMenu = () => {
    wrapper.classList.remove('header__wrapper-media');
    wrapper.classList.remove('header__wrapper-animation')
    menu.classList.remove('header__menu-media');
    number.classList.remove('header__phone-media');
    headerBtn.classList.remove('header__button-media');
    headerClose.style.display = 'none';
    burger.style.opacity = 1;
    headerClose.classList.remove('header__close-media');
    logo.classList.remove('header__logo-media');
    headerBtn.classList.remove('header__button-menu');
}

// функция удаляет активные классы media-menu

headerClose.addEventListener('click', () => {
    overlay.classList.remove('modal-overlay__active');
    body.style.overflowY = 'auto';
    closeMenu();
})
    
// media-menu

for (i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        overlay.classList.remove('modal-overlay__active');
        body.style.overflowY = 'auto';
        closeMenu();
    });
}

// slick-slider header (media: 360px)
$(document).ready(function(){
    $('.header__slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 3000,
    });
    $('.hits__slider').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    
    $('.hits__slider-media').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000,
        prevArrow: $('.arrow-left-media'),
        nextArrow: $('.arrow-right-media')
    });

    $('.hits__slider-media-mobile').slick({
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000,
        prevArrow: $('.arrow-left-media-mobile'),
        nextArrow: $('.arrow-right-media-mobile')
    });

    // маска 
    
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $("#tel").click(function(){
        $(this).setCursorPosition(3);
    }).inputmask({
        mask: "+7 (X99) 999-99-99",
        definitions: {
            'X': {
                validator: "9",
                placeholder: "9"
            }
        }
    });

    $("#number").click(function(){
        $(this).setCursorPosition(3);
    }).inputmask({
        mask: "+7 (X99) 999-99-99",
        definitions: {
            'X': {
                validator: "9",
                placeholder: "9"
            }
        }
    });

});



// slick-slider hits (desctop)

const cards = [
    {
        img: '/dist/img/Hits/HitsCard/nike_air_white.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike-air-force-1-low.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/columbia.webp',
        title: 'COLUMBIA FIRECAMP REMESH ЦВЕТ ...',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/puma_cali.webp',
        title: 'PUMA CALI BOLD ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 850 руб',
        opt: 'Опт от 3 400 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike-air-force-black.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розничная цена - 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike_m2k_tekno.webp',
        title: 'NIKE M2K TEKNO ЦВЕТ СЕРЫЙ',
        retail: 'Розница от 4 310 руб',
        opt: 'Опт от 3 100 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike_air_jordan.webp',
        title: 'NIKE AIR JORDAN 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 070 руб',
        opt: 'Опт от 3 600 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/new_balance_574.webp',
        title: 'NEW BALANCE 574 ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
]


const firstSlider = document.querySelector('.first-slider');
const wrapperSlide = document.createElement('div');
        wrapperSlide.classList.add('wrapper_slide');
        firstSlider.appendChild(wrapperSlide);

const getCards = (item, arr) => {
    const cardItem = document.createElement('div');
    const cardImg = document.createElement('div');
        cardImg.classList.add('card-img');
        cardImg.innerHTML = `<img src=${item.img}>`
        cardItem.appendChild(cardImg);

    const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = item.title;
        cardItem.appendChild(cardTitle);
    
    const cardRetail = document.createElement('p');
        cardRetail.innerHTML = item.retail;
        cardItem.appendChild(cardRetail);

    const cardOpt = document.createElement('span');
        cardOpt.innerHTML = item.opt;
        cardItem.appendChild(cardOpt);

        cardItem.classList.add('slider-card');
        arr.push(cardItem);
}

const card = [];


cards.forEach(item => {
    getCards(item, card);
});

card.map(item => wrapperSlide.appendChild(item));



const cardSecondSlider = [
    {
        img: '/dist/img/Hits/HitsCard/ADIDAS_CLIMAPROOF.webp',
        title: 'ADIDAS CLIMAPROOF ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NEW_BALANCE_993.webp',
        title: 'NEW BALANCE 993 ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_AIR_MAX_96.webp',
        title: 'NIKE AIR MAX 96 II ЦВЕТ РАЗНОЦВЕТНЫЙ',
        retail: 'Розница от 6 040 руб',
        opt: 'Опт от 4 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_AIR_FORCE_1_LOW.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/ADIDAS_RETROPY_P9_MARATHON.webp',
        title: 'ADIDAS RETROPY P9 MARATHON ЦВЕТ ...',
        retail: 'Розница от 6 040 руб',
        opt: 'Опт от 4 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/VANS_OLD_SKOOL.webp',
        title: 'VANS OLD SKOOL ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 2 370 руб',
        opt: 'Опт от 1 600 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NEW_BALANCE_XC-72.webp',
        title: 'NEW BALANCE XC-72 ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_M2K_TEKNO_ЦВЕТ_СЕРЫЙ.webp',
        title: 'NIKE M2K TEKNO ЦВЕТ СЕРЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
]

const secondSlide = document.querySelector('.second-slider');
const wrapperSecondSlide = document.createElement('div');
    wrapperSecondSlide.classList.add('wrapper_slide');
    secondSlide.appendChild(wrapperSecondSlide);

const second = [];

cardSecondSlider.forEach(item => {
    getCards(item, second);
});

second.map(item => wrapperSecondSlide.appendChild(item));

// slick-slider hits (768px)

const firstMobileSlide = [
    {
        img: '/dist/img/Hits/HitsCard/nike_air_white.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike-air-force-1-low.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/columbia.webp',
        title: 'COLUMBIA FIRECAMP REMESH ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike-air-force-black.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розничная цена - 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike_m2k_tekno.webp',
        title: 'NIKE M2K TEKNO ЦВЕТ СЕРЫЙ',
        retail: 'Розница от 4 310 руб',
        opt: 'Опт от 3 100 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike_air_jordan.webp',
        title: 'NIKE AIR JORDAN 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 070 руб',
        opt: 'Опт от 3 600 руб'
    }
]


const wrapperMediaSlider = document.querySelectorAll('.wrapper-item-media');

const firstMobile = [];

firstMobileSlide.forEach(item => {
    getCards(item, firstMobile)
});

firstMobile.map(item => wrapperMediaSlider[0].appendChild(item));

const secondMobileSlide = [
    {
        img: '/dist/img/Hits/HitsCard/puma_cali.webp',
        title: 'PUMA CALI BOLD ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 850 руб',
        opt: 'Опт от 3 400 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/ADIDAS_CLIMAPROOF.webp',
        title: 'ADIDAS CLIMAPROOF ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NEW_BALANCE_993.webp',
        title: 'NEW BALANCE 993 ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/new_balance_574.webp',
        title: 'NEW BALANCE 574 ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/ADIDAS_RETROPY_P9_MARATHON.webp',
        title: 'ADIDAS RETROPY P9 MARATHON ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 6 040 руб',
        opt: 'Опт от 4 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/VANS_OLD_SKOOL.webp',
        title: 'VANS OLD SKOOL ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 2 370 руб',
        opt: 'Опт от 1 600 руб'
    },

]

const secondMobile = [];

secondMobileSlide.forEach(item => {
    getCards(item, secondMobile)
});

secondMobile.map(item => wrapperMediaSlider[2].appendChild(item));

const thirdMobileSlide = [
    {
        img: '/dist/img/Hits/HitsCard/NIKE_AIR_MAX_96.webp',
        title: 'NIKE AIR MAX 96 II ЦВЕТ РАЗНОЦВЕТНЫЙ',
        retail: 'Розница от 6 040 руб',
        opt: 'Опт от 4 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_AIR_FORCE_1_LOW.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '',
        title: '',
        retail: '',
        opt: ''
    },
    {
        img: '/dist/img/Hits/HitsCard/NEW_BALANCE_XC-72.webp',
        title: 'NEW BALANCE XC-72 ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_M2K_TEKNO_ЦВЕТ_СЕРЫЙ.webp',
        title: 'NIKE M2K TEKNO ЦВЕТ СЕРЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
];

const thirdMobile = [];

thirdMobileSlide.forEach(item => {
    getCards(item, thirdMobile)
});

thirdMobile.map(item => wrapperMediaSlider[1].appendChild(item));

// slick-slider hits (480px)

const firstSlideMobile = [
    {
        img: '/dist/img/Hits/HitsCard/nike_air_white.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike-air-force-1-low.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike-air-force-black.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розничная цена - 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike_m2k_tekno.webp',
        title: 'NIKE M2K TEKNO ЦВЕТ СЕРЫЙ',
        retail: 'Розница от 4 310 руб',
        opt: 'Опт от 3 100 руб'
    },
];

const wrapperMobileSlider = document.querySelectorAll('.wrapper-media-mobile');

const firstMediaMobile = [];

firstSlideMobile.forEach(item => {
    getCards(item, firstMediaMobile)
}); 

firstMediaMobile.map(item => wrapperMobileSlider[0].appendChild(item));

const secondMediaMobile = [
    {
        img: '/dist/img/Hits/HitsCard/columbia.webp',
        title: 'COLUMBIA FIRECAMP REMESH ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/puma_cali.webp',
        title: 'PUMA CALI BOLD ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 850 руб',
        opt: 'Опт от 3 400 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/nike_air_white.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/new_balance_574.webp',
        title: 'NEW BALANCE 574 ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
];

const secondSlideMobile = [];

secondMediaMobile.forEach(item => {
    getCards(item, secondSlideMobile)
}); 

secondSlideMobile.map(item => wrapperMobileSlider[3].appendChild(item));

const thirdMediaMobile = [
    {
        img: '/dist/img/Hits/HitsCard/ADIDAS_CLIMAPROOF.webp',
        title: 'ADIDAS CLIMAPROOF ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NEW_BALANCE_993.webp',
        title: 'NEW BALANCE 993 ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/ADIDAS_RETROPY_P9_MARATHON.webp',
        title: 'ADIDAS RETROPY P9 MARATHON ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 6 040 руб',
        opt: 'Опт от 4 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/VANS_OLD_SKOOL.webp',
        title: 'VANS OLD SKOOL ЦВЕТ ЧЕРНЫЙ',
        retail: 'Розница от 2 370 руб',
        opt: 'Опт от 1 600 руб'
    },
];

const thirdSlideMobile = [];

thirdMediaMobile.forEach(item => {
    getCards(item, thirdSlideMobile)
}); 

thirdSlideMobile.map(item => wrapperMobileSlider[2].appendChild(item));

const fourMediaMobile = [
    {
        img: '/dist/img/Hits/HitsCard/NIKE_AIR_MAX_96.webp',
        title: 'NIKE AIR MAX 96 II ЦВЕТ РАЗНОЦВЕТНЫЙ',
        retail: 'Розница от 6 040 руб',
        opt: 'Опт от 4 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_AIR_FORCE_1_LOW.webp',
        title: 'NIKE AIR FORCE 1 LOW ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NEW_BALANCE_XC-72.webp',
        title: 'NEW BALANCE XC-72 ЦВЕТ БЕЛЫЙ',
        retail: 'Розница от 5 390 руб',
        opt: 'Опт от 3 900 руб'
    },
    {
        img: '/dist/img/Hits/HitsCard/NIKE_M2K_TEKNO_ЦВЕТ_СЕРЫЙ.webp',
        title: 'NIKE M2K TEKNO ЦВЕТ СЕРЫЙ',
        retail: 'Розница от 4 960 руб',
        opt: 'Опт от 3 500 руб'
    },
];

const fourSlideMobile = [];

fourMediaMobile.forEach(item => {
    getCards(item, fourSlideMobile)
});

fourSlideMobile.map(item => wrapperMobileSlider[1].appendChild(item));

// Copyright год

const year = document.getElementById('copyright'),
    newYear = new Date().getFullYear();
    year.innerHTML = newYear;

// валидация формы

const regName = /^([А-Яа-я][а-яё]{1,10})$/;
const regEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;

const Name = document.getElementById('name-modal'),
    labelName = document.getElementById('span-name'),
    nameFooter = document.getElementById('name-footer'),
    labelFooterName = document.getElementById('name-footer-label'),

    tel = document.getElementById('tel'),
    telFooter = document.getElementById('number'),
    labelTel = document.getElementById('label-tel'),
    labelTelFooter = document.getElementById('tel-footer-label'),

    email = document.getElementById('email-footer'),
    labelEmail = document.getElementById('label-email'),

    city = document.getElementById('city'),
    labelCity = document.getElementById('label-city');


const input = document.querySelectorAll('.input');



const validate = (regex, inp) => {
    return regex.test(inp);
}

const notValid = (input, el, message) => {
    input.classList.add('error');
    el.classList.add('error-message');
    el.innerHTML = message;
}
const valid = (input, el) => {
    input.classList.remove('error');
    el.classList.remove('error-message');
    el.innerHTML = '';
}

// modal 


const validateModal = () => {
    let errorModal = 0;
    if (!validate(regName, Name.value)) {
        notValid(Name, labelName, 'Пожалуйства введите корректные данные');
        errorModal++;
    } else {
        valid(Name, labelName)
    }
    
    if (tel.value === '') {
        notValid(tel, labelTel, 'Пожалуйства введите свой номер телефона');
        errorModal++;
    } else {
        valid(tel, labelTel);
    }
    return errorModal;
}


// Форма footer

const validateFooterForm = () => {
    let errorFooter = 0;
    
    if (!validate(regName, nameFooter.value)) {
        notValid(nameFooter, labelFooterName, 'Пожалуйства введите корректные данные');
        errorFooter++;
    } else {
        valid(nameFooter, labelFooterName)
    }
    
    if (telFooter.value === '') {
        notValid(telFooter, labelTelFooter, 'Пожалуйства введите свой номер телефона');
        errorFooter++;
    } else {
        valid(telFooter, labelTelFooter)
    }

    if (!validate(regEmail, email.value)) {
        notValid(email, labelEmail, 'Пожалуйста введите корректный email');
        errorFooter++;
    } else {
        valid(email, labelEmail)
    }   

    if (!validate(regName, city.value)) {
        notValid(city, labelCity, 'Пожалуйства введите корректные данные');
        errorFooter++;
    } else {
        valid(city, labelCity)
    }
    
    return errorFooter;
}

input[1].addEventListener('click', () => {
    validateFooterForm();
})

// отправка формы

const form = document.querySelectorAll('form'),
    success = document.querySelector('.success'),
    successClose = document.querySelector('.success__close'),
    successBtn = document.querySelector('.button__success'),
    failed = document.querySelector('.failed'),
    failedClose = document.querySelector('.failed__close'),
    failedBtn = document.querySelector('.button__failed');

const closeSuccess = () => {
    overlay.classList.remove('modal-overlay__active');
    success.classList.remove('success__active');
    modal.classList.remove('modal__active');
    success.classList.remove('success__active__mobile');
    success.classList.remove('success__active__mobile__footer');
    footerModalBtn.classList.remove('success-send');
    body.style.overflowY = 'auto';
}

const closeFailed = () => {
    overlay.classList.remove('modal-overlay__active');
    failed.classList.remove('failed__active');
    modal.classList.remove('modal__active');
    failed.classList.remove('failed__active__mobile');
    body.style.overflowY = 'auto';
}

successBtn.addEventListener('click', () => closeSuccess());
successClose.addEventListener('click', () => closeSuccess());

failedBtn.addEventListener('click', () => closeFailed());
failedClose.addEventListener('click', () => closeFailed());

const sendForm = (e) => {
    e.preventDefault();
    let errorModal = validateModal();
    if (errorModal === 0) {
        Name.value = '';
        tel.value = '';
        modal.classList.remove('modal__active');
        success.classList.add('success__active');
    } else {
        // modal.classList.remove('modal__active');
        // failed.classList.add('failed__active'); 
    }

}

const sendFooterForm = (e) => {
    e.preventDefault();
    let errorFooter = validateFooterForm();

    if (errorFooter === 0) {
        nameFooter.value = '';
        telFooter.value = '';
        email.value ='';
        city.value = '';
        body.style.overflowY = 'hidden';
        overlay.classList.add('modal-overlay__active');
        success.classList.add('success__active__mobile');
    } else {
        // body.style.overflowY = 'hidden';
        // overlay.classList.add('modal-overlay__active');
        // failed.classList.add('failed__active__mobile');
    }
}

form[0].addEventListener('submit', sendForm);
form[1].addEventListener('submit', sendFooterForm);

const inputFooter = document.getElementById('modal-btn');

const sendSuccessFooterBtn = () => {
    let errorModal = validateModal();
    if (errorModal === 0 && inputFooter.classList.contains('success-send')) {
        Name.value = '';
        tel.value = '';
        modal.classList.remove('modal__active__footer');
        success.classList.add('success__active__mobile__footer');
    }
}

inputFooter.addEventListener('click', () => sendSuccessFooterBtn());

// анимация 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anime({
                targets: '.header__info__title, .header__info__title-media',
                keyframes: [
                    {translateY: -40, opacity: 0},
                    {translateY: 40, opacity: 0},
                    {translateY: 0, easing: 'easeInOutQuad', delay: 700, duration: 1000, opacity: 1}
                ],
            });

            anime({
                targets: '.header__info__description',
                keyframes: [
                    {translateY: -40, opacity: 0},
                    {translateY: 40, opacity: 0},
                    {translateY: 0, easing: 'easeInOutQuad', delay: 1000, duration: 1000, opacity: 1}
                ],
            });
            observer.unobserve(entry.target);
        }
    });
  });
observer.observe(document.querySelector('.header'));
 
const observerSheme = new IntersectionObserver(entries => {
    entries.forEach(enrty => {
        if(enrty.isIntersecting) {
            anime({
                targets: '.scheme__title',
                keyframes: [
                    {translateY: -40, opacity: 0},
                    {translateY: 40, opacity: 0},
                    {translateY: 0, easing: 'easeInOutQuad', delay: 700, duration: 1000, opacity: 1}
                ],
            });

            let price = document.querySelectorAll('.span-price');
            anime({
                targets: [price],
                keyframes: [
                    {translateY: -40, opacity: 0},
                    {translateY: 40, opacity: 0},
                    {translateY: 0, easing: 'easeInOutQuad',delay: 1200, duration:500, opacity: 1}
                ],
                delay: anime.stagger(100),
            });

            anime({
                targets: '#circle',
                keyframes: [
                    {delay: 2000},
                    {r: 33},
                    {opacity: 1},
                    {r: 160, easing: 'linear', duration: 1500},
                ],
            });

            anime({
                targets: '#circle-media',
                keyframes: [
                    {delay: 2000},
                    {r: 23},
                    {opacity: 1},
                    {r: 116.5, easing: 'linear', duration: 1500},
                ],
            });

            anime({
                targets: '#circle-media-mobile',
                keyframes: [
                    {delay: 2000},
                    {r: 17},
                    {opacity: 1},
                    {r: 97, easing: 'linear', duration: 1500},
                ],
            });
            observerSheme.unobserve(enrty.target);
        }
    });
});
observerSheme.observe(document.querySelector('.scheme'));

const observerReasons = new IntersectionObserver(entries => {
    entries.forEach(enrty => {
        if(enrty.isIntersecting) {
            anime({
                targets: '.scheme__reasons__wrapper__item',
                keyframes: [
                    {translateY: -40, opacity: 0},
                    {translateY: 40, opacity: 0},
                    {translateY: 0, easing: 'easeInOutQuad', delay: 1000, duration: 1000, opacity: 1}
                ],
            });
            observerReasons.unobserve(enrty.target);
        }
    });
});
observerReasons.observe(document.querySelector('#advantages'));





