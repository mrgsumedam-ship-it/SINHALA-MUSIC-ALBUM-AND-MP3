document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple interaction for Track List (Play button simulation)
    const trackRows = document.querySelectorAll('.track-row');
    trackRows.forEach(row => {
        row.addEventListener('click', () => {
            // Remove active class from all
            trackRows.forEach(r => {
                r.classList.remove('bg-white/10');
                r.querySelector('div:nth-child(2)').classList.remove('text-brand-gold');
            });
            
            // Add active class to clicked
            row.classList.add('bg-white/10');
            row.querySelector('div:nth-child(2)').classList.add('text-brand-gold');
        });
    });
});
