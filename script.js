document.addEventListener('DOMContentLoaded', () => {
    console.log('EventPix Landing Loaded');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.step-card, .feature-item, .service-card, .testimonial-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // --- Demo Section Logic ---
    // La sección de demostración ahora utiliza un iframe que apunta directamente a la aplicación principal.
    // Se ha eliminado la lógica JS personalizada para evitar conflictos.
    const demoResetBtn = document.getElementById('demo-reset-btn');
    if (demoResetBtn) {
        demoResetBtn.addEventListener('click', () => {
            const iframe = document.querySelector('.demo-screen-content iframe');
            if (iframe) {
                // Reload iframe
                iframe.src = iframe.src;

                const icon = demoResetBtn.querySelector('i');
                if (icon) {
                    icon.style.transition = 'transform 0.5s';
                    icon.style.transform = 'rotate(180deg)';
                    setTimeout(() => icon.style.transform = 'rotate(0deg)', 500);
                }
            }
        });
    }

});
