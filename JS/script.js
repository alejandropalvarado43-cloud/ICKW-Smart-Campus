document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menuOSI');
    const toggle = document.getElementById('toggleOSI');

    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) {
            menu.classList.remove('open');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            menu.classList.remove('open');
        }
    });
});