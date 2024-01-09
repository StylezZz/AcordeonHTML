const grupos = document.querySelectorAll('.group');
const containerHTML = document.querySelector('.content');

grupos.forEach((grupo) => {
    grupo.addEventListener('click', () => {
        // Obtener el ícono actual y el ícono alternativo
        const openIcon = document.getElementById('open-icon');
        const closeIcon = document.getElementById('close-icon');

        if (grupo.classList.contains('last')) {
            containerHTML.classList.toggle('expand');
        }

        grupo.classList.toggle('active');
        containerHTML.classList.toggle('little_expand');

        grupos.forEach((sameGroup) => {
            if (sameGroup !== grupo && sameGroup.classList.contains('active')) {
                sameGroup.classList.remove('active');
            }
        });

        // Cambiar dinámicamente el ícono
        if (grupo.classList.contains('active')) {
            openIcon.setAttribute('href', './assets/images/icon-plus.svg');
            closeIcon.setAttribute('href', './assets/images/icon-minus.svg');
        } else {
            openIcon.setAttribute('href', './assets/images/icon-minus.svg');
            closeIcon.setAttribute('href', './assets/images/icon-plus.svg');
        }
    });
});
