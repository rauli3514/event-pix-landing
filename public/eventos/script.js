// EventPix · página de eventos

const WHATSAPP = '543624547382';

// Menú en el celular
const nav = document.querySelector('.nav');
document.getElementById('nav-toggle')?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#nav-links a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));

// "¿Está libre tu fecha?" → WhatsApp con la fecha escrita
const dateInput = document.getElementById('fecha');
if (dateInput) {
    const t = new Date();
    dateInput.min = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
}
document.getElementById('check-date')?.addEventListener('click', () => {
    const value = dateInput?.value;
    let text = '¡Hola! Quiero saber si tienen disponible EventPix para mi evento.';
    if (value) {
        const [y, m, d] = value.split('-').map(Number);
        const label = new Date(y, m - 1, d).toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        text = `¡Hola! ¿Tienen disponible EventPix para el ${label}?`;
    } else {
        dateInput?.focus();
    }
    if (typeof gtag === 'function') gtag('event', 'consulta_fecha', { fecha: value || 'sin_fecha' });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

// Medir qué botones se usan (Google Analytics)
document.querySelectorAll('[data-track]').forEach((el) => {
    el.addEventListener('click', () => {
        if (typeof gtag === 'function') gtag('event', el.dataset.track);
    });
});

// Las secciones aparecen suave al bajar
const revealables = document.querySelectorAll('.section .moment, .section .step, .included li, .reviews blockquote, .services div');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealables.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}
