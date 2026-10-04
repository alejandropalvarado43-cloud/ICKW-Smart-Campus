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

/* ===== INTERACTIVIDAD V2: carrusel, buscador y pestañas ===== */
document.addEventListener("DOMContentLoaded", function () {

    /* Carrusel */
    var carrusel = document.getElementById("carruselCapa2");
    if (carrusel) {
        var slides = carrusel.querySelectorAll(".slide");
        var puntosBox = document.getElementById("carPuntos");
        var actual = 0;
        var temporizador = null;

        slides.forEach(function (_, i) {
            var p = document.createElement("button");
            p.type = "button";
            p.setAttribute("aria-label", "Ir a la imagen " + (i + 1));
            p.addEventListener("click", function () { mostrar(i); reiniciar(); });
            puntosBox.appendChild(p);
        });
        var puntos = puntosBox.querySelectorAll("button");

        function mostrar(n) {
            actual = (n + slides.length) % slides.length;
            slides.forEach(function (s, i) { s.classList.toggle("activo", i === actual); });
            puntos.forEach(function (p, i) { p.classList.toggle("activo", i === actual); });
        }
        function reiniciar() {
            clearInterval(temporizador);
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                temporizador = setInterval(function () { mostrar(actual + 1); }, 5000);
            }
        }
        carrusel.querySelector(".car-prev").addEventListener("click", function () { mostrar(actual - 1); reiniciar(); });
        carrusel.querySelector(".car-next").addEventListener("click", function () { mostrar(actual + 1); reiniciar(); });
        carrusel.addEventListener("mouseenter", function () { clearInterval(temporizador); });
        carrusel.addEventListener("mouseleave", reiniciar);
        mostrar(0);
        reiniciar();
    }

    /* Buscador */
    var campo = document.getElementById("buscador");
    var formulario = document.getElementById("formBuscador");
    var tarjetas = document.querySelectorAll("#gridTarjetas .tarjeta");
    var aviso = document.getElementById("sinResultados");

    function normalizar(t) {
        return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function filtrar() {
        var q = normalizar(campo.value.trim());
        var visibles = 0;
        tarjetas.forEach(function (t) {
            var texto = normalizar(t.textContent + " " + (t.dataset.keys || ""));
            var coincide = q === "" || texto.indexOf(q) !== -1;
            t.classList.toggle("oculta", !coincide);
            if (coincide) visibles++;
        });
        aviso.hidden = visibles !== 0;
    }
    if (campo) {
        campo.addEventListener("input", filtrar);
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();
            filtrar();
            document.getElementById("tarjetas").scrollIntoView({ behavior: "smooth" });
        });
    }

    /* Pestañas ARP / Broadcast / Unicast */
    var botones = document.querySelectorAll(".tab-btn");
    var paneles = document.querySelectorAll(".tab-panel");

    function abrirTab(id) {
        botones.forEach(function (b) {
            var activo = b.dataset.tab === id;
            b.classList.toggle("activo", activo);
            b.setAttribute("aria-selected", activo ? "true" : "false");
        });
        paneles.forEach(function (p) { p.classList.toggle("activo", p.id === id); });
    }
    botones.forEach(function (b) {
        b.addEventListener("click", function () { abrirTab(b.dataset.tab); });
    });
    document.querySelectorAll("[data-tab-link]").forEach(function (enlace) {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            abrirTab(enlace.dataset.tabLink);
            document.getElementById("pestanas").scrollIntoView({ behavior: "smooth" });
        });
    });
});