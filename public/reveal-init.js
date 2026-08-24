document.documentElement.classList.add('js');

const elements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12
        }
    );

    elements.forEach(element => observer.observe(element));
} else {
    elements.forEach(element => element.classList.add('visible'));
}
