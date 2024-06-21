document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav a');
    function setActiveLink(event) {
        links.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });

    function setInitialActiveLink() {
        const currentHref = window.location.href;

        links.forEach(link => {
            if (link.href === currentHref) {
                link.classList.add('active');
            }
        });
    }

    setInitialActiveLink();
});
