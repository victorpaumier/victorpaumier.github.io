const slideRightShort = {
    distance: '300%',
    origin: 'right',
    delay:250,
    opacity: null,
    mobile : false
    }

const slideLeftShort = {
    distance: '300%',
    origin: 'left',
    delay:250,
    opacity: null,
    mobile : false
    }

    ScrollReveal().reveal('.b1', slideRightShort, {mobile : false});
    ScrollReveal().reveal('.b2', slideLeftShort, {mobile : false});
    ScrollReveal().reveal('.b3', slideRightShort, {mobile : false});
    ScrollReveal().reveal('.b4', slideLeftShort, {mobile : false});
    ScrollReveal().reveal('.box-timeline img', { delay: 750 }, {mobile : false});
    