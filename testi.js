document.addEventListener('DOMContentLoaded', function() {
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        
        breakpoints: {
            640: {
                slidesPerView: 1.2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        
        speed: 800,
        effect: 'slide',
        
        touchEventsTarget: 'wrapper',
        grabCursor: true,
        
        a11y: {
            prevSlideMessage: 'Previous testimonial',
            nextSlideMessage: 'Next testimonial',
            paginationBulletMessage: 'Go to testimonial {{index}}'
        },
    });
    
    const swiperContainer = document.querySelector('.testimonial-swiper');
    
    swiperContainer.addEventListener('mouseenter', () => {
        testimonialSwiper.autoplay.stop();
    });
    
    swiperContainer.addEventListener('mouseleave', () => {
        testimonialSwiper.autoplay.start();
    });
});