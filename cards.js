document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const openCard = document.querySelector('.open-card');
    const infoCard = document.querySelector('.info-card');
    const overlay = document.querySelector('.overlay');

    const cardContent = {
        '3D': {
            title: "3D Vector Illustration",
            content: "3D vector illustrations offer a powerful and innovative way to elevate your business's visual communication. By harnessing the latest in design technology, these illustrations provide a clean, modern, and impactful way to represent complex ideas, making them easier to understand and more engaging for your audience.",
            image: "Assests/layerss(1).png"
        },
        'Web': {
            title: "Web Development",
            content: "Web development is at the core of building a strong digital presence, and our team specializes in creating responsive, high-performance websites that are designed to deliver an exceptional user experience. Utilizing the latest web technologies, we craft websites that are not only visually stunning but also optimized for speed.",
            image: "Assests/wedevv.png"
        },
        'Graphic': {
            title: "Graphic Design",
            content: "Our graphic design services blend creativity with strategy, ensuring that every visual element we create is aligned with your brand's vision and goals. From compelling logos to visually stunning web designs, we craft graphics that not only catch the eye but also communicate your message effectively.",
            image: "Assests/desgin.png"
        },
        'Hosting': {
            title: "Hosting Services",
            content: "We provide reliable, secure, and scalable hosting solutions to support your business's digital infrastructure. Our services are designed to deliver optimal performance, fast load times, and top-tier security, ensuring your website or application runs seamlessly.",
            image: "Assests/hosting.png"
        },
        'Digital': {
            title: "Digital Marketing",
            content: "Enhance your online presence with strategic digital marketing solutions designed to drive engagement and foster growth. Our tailored approach combines SEO, content marketing, social media, and email campaigns to create a comprehensive strategy that resonates with your target audience.",
            image: "Assests/digital.png"
        },
        'Cloud': {
            title: "Cloud Solution",
            content: "Transform your business operations with our cutting-edge cloud solutions that enhance flexibility, scalability, and efficiency. We provide customized cloud services tailored to meet your specific needs, enabling seamless collaboration and access to your data from anywhere.",
            image: "Assests/cloudd.png"
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cardType = card.getAttribute('data-card');
            openCardPopup(cardType);
        });
    });

    overlay.addEventListener('click', closeCardPopup);

    function openCardPopup(cardType) {
        const content = cardContent[cardType];
        infoCard.innerHTML = `
            <div class="img-container">
                <img src="${content.image}" alt="${content.title}">
            </div>
            <h1>${content.title}</h1>
            <p>${content.content}</p>
        `;
        openCard.classList.add('popup_open');
        overlay.classList.add('popup_open');
        document.body.style.overflow = 'hidden';
    }

    function closeCardPopup() {
        openCard.classList.remove('popup_open');
        overlay.classList.remove('popup_open');
        document.body.style.overflow = '';
    }
});