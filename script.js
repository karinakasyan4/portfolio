//navbar
const navLink = document.querySelectorAll('.nav-link');
const hamburgerBtn = document.querySelector('.hamburger-button');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('change');
    
    navLink.forEach((link) => {
        link.classList.toggle('responsive');
    })
})


//main button
const btnProject =  document.querySelector('.project-btn');

btnProject.addEventListener('click', () => {
    document.location.assign('#project');
})

gsap.from('nav', {y: -100, duration: 1.5, opacity: 0})
gsap.from('.link', {delay: .3, opacity: 0, duration: 1, y: -70, stagger: .5})

gsap.to('.par', {
    text: 'Привет! <br> Меня зовут Карина',
    duration: 2,
    ease: 'power1.in',
    delay: 2,
})

gsap.to('.par-main', {
    text: ',<br> я front-end разработчик',
    duration: 2,
    ease: 'power1.in',
    delay: 4,
})

gsap.from('.smile', {x: 50, opacity: 0, duration: 2, delay: 4, ease: 'power2.inOut'})
gsap.from('.project-btn', {opacity: 0, duration: 1, delay: 6.5})


// кометы
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 48,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
                "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

//scroll animation
AOS.init({
    duration: 1500,
})

const buttonEng = document.querySelector('#btn-eng');
const buttonRu = document.querySelector('#btn-ru');


buttonEng.addEventListener('click', () => {
document.querySelector('#nav-project').textContent = 'Project';
document.querySelector('#nav-about').textContent = 'About';
document.querySelector('#nav-contact').textContent = 'Contact';
gsap.to('.par', {
    text: 'Hello! <br> My name is Karina',
    duration: 3,
    ease: 'power1.in',
    delay: 2,
})

gsap.to('.par-main', {
    text: ',<br> i am a front-end developer',
    duration: 3,
    ease: 'power1.in',
    delay: 4,
})

document.querySelector('.project-btn').textContent = "let's see project";
document.querySelector('.header-project').textContent = "Project";
document.querySelector('.header-about').textContent = "About me";
document.querySelector('.header-contact').textContent = "Contact";

document.querySelector('#photo').textContent = "Photographer's website";
document.querySelector('.one').textContent = "Go";
document.querySelector('#weather').textContent = "Application weather";
document.querySelector('.two').textContent = "Go";
document.querySelector('#game').textContent = "Application game";
document.querySelector('.three').textContent = "Go";
document.querySelector('#countdown').textContent = "Countdown time";
document.querySelector('.four').textContent = "Go";
document.querySelector('#shopList').textContent = "Shop list";
document.querySelector('.five').textContent = "Go";
document.querySelector('#calculate').textContent = "Calculate";
document.querySelector('.six').textContent = "Go";

document.querySelector('.par-about').textContent = `I am a front-end developer, i studied at CanSheCode Inc. Write clean and effective code. I'm currently studying React. My skills:`;
document.querySelector('#knowMore').textContent ="know more";
document.querySelector('.contact-text').textContent = "You can contact me in any way convenient for you,";
document.querySelector('.path2').textContent = "or leave your details and I will contact you within 24 hours.";

document.querySelector('#titleEmail').textContent = "Your e-mail:";
document.querySelector('#titleName').textContent = "Your name:";
document.querySelector(".submitContact").textContent = "Submit"

})
buttonRu.addEventListener('click', () => {
    document.querySelector('#nav-project').textContent = 'Проекты';
    document.querySelector('#nav-about').textContent = 'Обо мне';
    document.querySelector('#nav-contact').textContent = 'Связаться';
    gsap.to('.par', {
        text: 'Привет! <br> Меня зовут Карина',
        duration: 3,
        ease: 'power1.in',
        delay: 2,
    })
    
    gsap.to('.par-main', {
        text: ',<br> я front-end разработчик',
        duration: 3,
        ease: 'power1.in',
        delay: 4,
    })
    
    document.querySelector('.project-btn').textContent = "смотреть проекты";
    document.querySelector('.header-project').textContent = "Проекты";
    document.querySelector('.header-about').textContent = "Обо мне";
    document.querySelector('.header-contact').textContent = "Связаться";
    
    document.querySelector('#photo').textContent = "Сайт фотографа";
    document.querySelector('.one').textContent = "перейти";
    document.querySelector('#weather').textContent = "Приложение погода";
    document.querySelector('.two').textContent = "перейти";
    document.querySelector('#game').textContent = "Приложение игра";
    document.querySelector('.three').textContent = "перейти";
    document.querySelector('#countdown').textContent = "Отсчет времени";
    document.querySelector('.four').textContent = "перейти";
    document.querySelector('#shopList').textContent = "Список покупок";
    document.querySelector('.five').textContent = "перейти";
    document.querySelector('#calculate').textContent = "Калькулятор";
    document.querySelector('.six').textContent = "перейти";
    
    document.querySelector('.par-about').textContent = `Я front-end разработчик, училась в CanSheCode Inc. Пишу чистый и эффективный код. Сейчас изучаю React. Мои навыки:`;
    document.querySelector('#knowMore').textContent ="узнать больше";
    document.querySelector('.contact-text').textContent = "Вы можете связаться со мной любым, удобным для вас способом,";
    document.querySelector('.path2').textContent = "или оставьте свои данные и я свяжусь с вами в течении 24 часов.";
    
    document.querySelector('#titleEmail').textContent = "Ваш e-mail:";
    document.querySelector('#titleName').textContent = "Ваше имя:";
    document.querySelector(".submitContact").textContent = "Отправить"
    
    })

