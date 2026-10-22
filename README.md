# ICKW-Smart-Campus 
¿QUÉ ES ESTE PROYECTO?

ICKW Smart Campus es un portal web educativo que explica las siete
capas del modelo OSI con información organizada, recursos visuales
y una navegación sencilla. Cada equipo desarrolló una capa y todas
se integraron en un solo portal con identidad visual común.
 
 
2. CÓMO ABRIR EL PORTAL

1. Descomprime el archivo ICKW_Smart_Campus_Portal_Final_2026.zip.
   IMPORTANTE: no abras el portal desde dentro del .zip, porque las
   imágenes y los estilos no se cargarían.
2. Abre la carpeta descomprimida.
3. Haz doble clic en el archivo index.html. Se abrirá en tu
   navegador (Chrome, Edge o Firefox).
4. Desde la página principal, elige una capa para entrar a su
   contenido.
 
Opcional: en Visual Studio Code, abre la carpeta,ve la a seccion de
extenciones de VS Code, instalalo y habilitalo y haz clic derecho 
en index.html y elige "Open with Live Server".
 
Requisitos: solo un navegador web. No necesita instalar nada ni
conexión a internet, excepto para los enlaces externos (Cisco
Networking Academy, RFC, etc.).
 
 
3. ESTRUCTURA DE ARCHIVOS

 
ICKW-SMART-CAMPUS/
|
|-- index.html            Página principal
|-- capa2-enlace.html     Capa 2 - Enlace de datos (Equipo 2)
|-- recursos.html         Glosario, comandos, preguntas frecuentes
|-- novedades-v2.html     Registro de mejoras
|-- README.md             Archivo explicativo
|
|-- css/
|   |-- estilos.css       Estilos generales del portal
|   |-- estilos-v2.css    Estilos de la segunda versión
|
|-- JS/
|   |-- script.js         Menú desplegable, carrusel, buscador, pestañas
|
|-- img/                  Logo, capturas y diagramas
|
|-- documentos/
    |-- fuentes-consultadas.html
    |-- fuentes-consultadas.pdf
 
 
4. EQUIPOS PARTICIPANTES

Equipo 1 - Capa 1 - Física
Equipo 2 - Capa 2 - Enlace de datos
Equipo 3 - Capa 3 - Red
Equipo 4 - Capa 4 - Transporte
Equipo 5 - Capa 5 - Sesión
Equipo 6 - Capa 6 - Presentación
Equipo 7 - Capa 7 - Aplicación
 
 
5. TECNOLOGÍAS UTILIZADAS

- HTML5: estructura de las páginas.
- CSS3: diseño, colores, tarjetas y adaptación a celular.
- JavaScript: menú desplegable, carrusel, buscador y pestañas.
- Git y GitHub: trabajo en equipo, ramas y Pull Requests.
- Visual Studio Code: editor de código.
- Cisco Packet Tracer: simulación de las prácticas de Redes LAN.
    Etenciones de VS Code
    - Live Server
    - Auto Rename Tag
    - Prettier Code Formate
 
 
6. PRUEBAS REALIZADAS


[X] Se abre index.html en el navegador.
[X] Se puede entrar a las siete capas desde la página principal.
[X] Se puede volver al inicio desde cada página.
[X] Funcionan los enlaces a la capa anterior y a la siguiente.
[X] Se ven todas las imágenes.
[X] El CSS se aplica correctamente en todas las páginas.
[X] Se revisó la ortografía.
[X] No hay enlaces rotos ni secciones duplicadas.
[X] Se probó en celular o en vista móvil .
 
 
7. REGISTRO DE MEJORAS (Equipo 2 - Capa 2)

Mejoras respecto a la segunda versión:
 
- Contenidos completados:
  * Nueva página de Recursos con glosario de la Capa 2 (trama, MAC,
    NIC, switch, tabla MAC, ARP, broadcast, unicast, CRC, LLC/MAC),
    comandos del laboratorio (ipconfig /all, ping, arp -a, arp -d,
    show mac address-table), herramientas, preguntas frecuentes y
    tabla de recursos técnicos del portal.
  * Se agregó el README.md con instrucciones para abrir el portal.
  * Se agrego la franja de novedades arriba para facilitar la navegacion
  * Se completó el registro de fuentes consultadas (página web y PDF).
- Errores corregidos: 
      * Se corrigieron los enlaces "Recursos" del menú, que apuntaban a
        una página que no existía.
- Elementos visuales mejorados: [completar. Ejemplo: secciones en
  bandas de borde a borde, tarjetas, bandas oscuras]
      * Franja de novedades fija en la parte superior al bajar.
      * Diseño adaptable a celular.
- Páginas nuevas: recursos.html
 
 
8. APORTE DE LOS INTEGRANTES (Equipo 2)

[Jesus Alejandro Peña Alvarado]:
  - Redacción y revisión del contenido técnico (direcciones MAC,
    tramas, ARP, switch y tabla MAC).
  - Programación HTML de la página de la Capa 2 y de la página
    de Recursos.
  - Elaboración de recursos visuales (capturas de Packet Tracer
    y diagrama de la Capa 2).

[Xochilth Nahomy Torres Valladares]:
  - Diseño y estilos CSS (bandas, tarjetas, encabezado, pie de
    página y adaptación a celular).
  - Navegación y enlaces entre páginas.
  - Pruebas de funcionamiento, README y registro de mejoras.
 
 
9. FUENTES CONSULTADAS

- Cisco Networking Academy: https://www.netacad.com/
- RFC 826 (ARP): https://www.rfc-editor.org/rfc/rfc826
- Material proporcionado por la docente.
- Práctica del Laboratorio 2 en Cisco Packet Tracer.
El detalle está en documentos/fuentes-consultadas.html.