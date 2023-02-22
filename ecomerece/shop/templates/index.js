        // Js for navbar 
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');

        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('show');
            menuBtn.classList.toggle('open');
        });


        // js for slider
        const sliderWrapper = document.querySelector(".slider-wrapper");
        const slides = document.querySelectorAll(".slide");
        const slideWidth = slides[0].clientWidth;
        let slideIndex = 0;
        
        function slide() {
          if (slideIndex >= slides.length) {
            slideIndex = 0;
          } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
          }
        
          sliderWrapper.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        }
        
        document.querySelector(".slider-prev").addEventListener("click", () => {
          slideIndex--;
          slide();
        });
        
        document.querySelector(".slider-next").addEventListener("click", () => {
          slideIndex++;
          slide();
        });
        
        slide();
        