const app = {
    init: function(){

        const svg = document.querySelector('#svg');
        svg.addEventListener('click', app.stopAnimation);


        const menuBouton = document.querySelector('#reverse-hidden');
        const liHidden = document.querySelectorAll('.hidden-menu li');

        menuBouton.addEventListener('click', app.handleClickMenu);

        const lightButton = document.querySelector('#light-mode');

        lightButton.addEventListener('click', app.handleClickLightButton);


        const contactIcon = document.querySelector('#contact-form');
        contactIcon.addEventListener('click', app.handleClickFormAppear);

        const closeIcons = document.querySelectorAll('.closeButton');

        for (const icon of closeIcons) {
            icon.addEventListener('click', app.handleClickCloseButton);
        }


        for(const li of liHidden){
            li.addEventListener('click', app.handleClickLi);
            }
    

},

stopAnimation : function(evt){

    console.log('yo');

    const svg = evt.currentTarget;
    const leaf1 = document.querySelector('#leaf1');
    const leaf2 = document.querySelector('#leaf2');
    const me = document.querySelector('#me');
    const arrow = document.querySelector('#arrow');

    console.log(leaf1.style.animationPlayState);

 
    if(leaf1.style.animationPlayState == 'running'){
        leaf1.style.animationPlayState = 'paused';
        leaf2.style.animationPlayState = 'paused' 
        me.style.animationPlayState = 'paused' 
        arrow.style.animationPlayState = 'paused'
    }
    else if (leaf1.style.animationPlayState == 'paused'){
        leaf1.style.animationPlayState = 'running';
        leaf2.style.animationPlayState = 'running' 
        me.style.animationPlayState = 'running' 
        arrow.style.animationPlayState = 'running' 
    }

    // leaf1.style.animationPlayState = 'running' ? 'paused' : 'running';
    // leaf2.style.animationPlayState == 'running' || !leaf2.style.animationPlayState ? 'paused' : 'running';
    // me.style.animationPlayState == 'running' || !me.style.animationPlayState ? 'paused' : 'running';
    // arrow.style.animationPlayState == 'running' || !arrow.style.animationPlayState ? 'paused' : 'running';

},

handleClickFormAppear : function(){

    const contactForm = document.querySelector('.contact-form');

    contactForm.classList.remove('hidden-form');

    const body = document.querySelector('body');
    body.classList.add('body-overflow')
},

handleClickCloseButton : function(){

    const contactForm = document.querySelector('.contact-form');

    contactForm.classList.add('hidden-form');

    const body = document.querySelector('body');
    body.classList.remove('body-overflow')
},

handleClickLightButton : function(){

    const body = document.querySelector('body');
    const img = document.querySelector('img');

    if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
        img.setAttribute('src', "images/light/jour.png");
    } else if (body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.add('light');
        img.setAttribute('src', "images/light/nuit.png");
    }
},


    handleClickMenu : function(){
        const hiddenMenu = document.querySelector('.hidden-menu');
        const trait1 = document.getElementById('trait1');
        console.log(trait1);
        const trait2 = document.getElementById('trait2');
        console.log(trait2);

        const trait3 = document.getElementById('trait3');

        if(trait1.classList.contains('trait1')){
            trait1.classList.remove('trait1');
        } else {
            trait1.classList.add('trait1');
        }

        if(trait2.classList.contains('trait2')){
            trait2.classList.remove('trait2');
        } else {
            trait2.classList.add('trait2');
        }

        if(trait3.classList.contains('trait3')){
            trait3.classList.remove('trait3');
        } else {
            trait3.classList.add('trait3');
        }


        if (hiddenMenu.classList.contains('hidden-menu-hidden')){
            hiddenMenu.classList.remove('hidden-menu-hidden'); 
            
            
        } else {
            hiddenMenu.classList.add('hidden-menu-hidden');
        }
    },

    handleClickLi :function(){
        hiddenMenu.classList.add('hidden-menu-hidden');
}
}


document.addEventListener('DOMContentLoaded', app.init);




