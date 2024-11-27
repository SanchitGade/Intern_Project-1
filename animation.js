gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function() {
    var t1 = gsap.timeline();

    

    t1.from(".bg-fade1", {
        y: -50,
        opacity: 0,
        duration: 1
    })

    .from(".stag", {
        opacity: 0,
        x: -100,
        duration: 1
    }, "-=0.5")  

    .from("header", {
        opacity: 0,
        y: -50,
        duration: 1
    }, "-=0.5");

    t1.from("#spline-container", {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "power2.out"
    })
 
    /******************* NUMBER-SECTION-ANIMATION  ******************* */

    gsap.from(".info", {
        scrollTrigger: {
            trigger: "#Numbers",
            start: "top center",
            end: "top 30%",
            scrub: 2,
        },
        y: 150,
        opacity: 0,
        duration: 1
    });

    gsap.from(".info > div", {
        scrollTrigger: {
            trigger: "#Numbers",
            start: "top center",
            end: "top 30%",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
        
    /******************* PARTNER-ANIMATION  ******************* */

    gsap.from(".partner h2", {
        y: -300,
        opacity: 0,
        ScrollTrigger: {
            trigger: ".partner",
            end: "top 60%",
            scroller : "body",
            scrub: 2,
        }
    })

    gsap.from(".info-1", {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: ".info-1",
            end: "top 80%",
            scroller: "body",
            scrub: 2
        }
    })
    gsap.from(".info-2", {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: ".info-1",
            end: "top 80%",
            scroller: "body",
            scrub: 2
        }
    })
    gsap.from(".info-3", {
        scale: 0,
        opacity: 0,
        scrollTrigger: {
            trigger: ".info-1",
            end: "top 80%",
            scroller: "body",
            scrub: 2
        }
    })

    /******************* SERVICES-ANIMATION ******************* */

    gsap.from(".title", {
        x: -300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".title",
            end: 'top 50%',
            scroller: "body",
            scrub: 2,
        }
    })

    gsap.from(".title-des", {
        x: 300,
        opacity: 0,
        scrollTrigger: {
            trigger: ".title",
            end: 'top 50%',
            scroller: "body",
            scrub: 2,
        }
    })

    gsap.from(".offer-container .offer-cards-1", {
        y: 200,
        opacity: 0,
        scrollTrigger:{
            trigger: ".offer-container",
            end: "top 20%",
            scroller: "body",
            scrub: 2
        }
    })

    gsap.from(".offer-container .offer-cards-2", {
        y: -200,
        opacity: 0,
        scrollTrigger:{
            trigger: ".offer-container",
            end: "top 20%",
            scroller: "body",
            scrub: 2
        }
    })
 
    /******************* OUR-TEAM-ANIMATION ******************* */
    gsap.from(".team-container h2", {
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".team-container",
            start: "top 90%",
            end: "top 50%",
            scroller: "body",
            scrub: 3
        }
    })

    gsap.from(".team-container .team-cards", {
        y: 200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".team-container",
            start: "top 20%",
            end: "top 70%",
            scroller: "body",
            scrub: 3
        }
    })

    /******************* TESTIMONIAL-ANIMATION ******************* */

    gsap.from(".testimonial-header .section-title", {
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: ".testimonial-header",
            start: "top 90%",
            end: "top 50%",
            scroller: "body",
            scrub: 3
        }
    })

    /******************* FOOTER-ANIMATION  ******************* */
    gsap.from("#top-footer > div", {
        scrollTrigger: {
            trigger: "#top-footer",
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
});