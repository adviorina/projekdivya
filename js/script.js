/*Menu Button*/
const menus = document.querySelector("nav ul");
const head = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", ()=> {
    menus.classList.add("display");
});

closeBtn.addEventListener("click", ()=> {
    menus.classList.remove("display");
});

/*Counter Up*/
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;
window.addEventListener("scroll", () => {
    if(scrollY > container.offsetTop - container.offsetHeight - 200 && activated === false){
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            function updateCount(){
                const target = parseInt(counter.dataset.count);
                if(count<target){
                    count++
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                }
                else{
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        }); 
    }
    else if(
        scrollY < container.offsetTop - container.offsetHeight - 500 || scrollY === 0 && activated === true)
        {
            counters.forEach(counter =>{
                counter.innerText = 0;
            });
            activated = false;
        }
});

/*Scroll Sticky Navbar*/ 
window.addEventListener("scroll", () => {
    const header = document.querySelector('header');
    if (document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/*Past Competition Slider*/
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

/*Dark Mode Toggle Icon Open*/
  const darkModeToggle = document.getElementById('darkModeToggle');
        
  // Function to apply the theme
  function applyTheme(theme) {
      if (theme === 'dark') {
          document.body.setAttribute('data-bs-theme', 'dark');
          document.body.classList.replace('bg-light', 'bg-dark');
          document.body.classList.replace('text-dark', 'text-light');
          darkModeToggle.src = '../assets/sun.png';
          darkModeToggle.src = 'assets/moon.png';
      } else {
          document.body.removeAttribute('data-bs-theme');
          document.body.classList.replace('bg-dark', 'bg-light');
          document.body.classList.replace('text-light', 'text-dark');
          darkModeToggle.src = '../assets/moon.png';
          darkModeToggle.src = 'assets/moon.png';
      }
  }

  // Check for saved user preference on page load
  document.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      applyTheme(savedTheme);
  });

  // Toggle theme and save preference
  darkModeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
  });
/*Dark Mode Toggle Icon Close*/


/*Google Translate Script Start*/
$(document).ready(function(){
    $('#google_translate_element').bind('DOMNodeInserted', function(event) {
      $('.goog-te-menu-value span:first').html('LANGUAGE');
      $('.goog-te-menu-frame.skiptranslate').load(function(){
        setTimeout(function(){
          $('.goog-te-menu-frame.skiptranslate').contents().find('.goog-te-menu2-item-selected .text').html('LANGUAGE');    
        }, 100);
      });
    });
  });
/*Google Translate Script Close*/
