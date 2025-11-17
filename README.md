# Perfummia
# Perfummia | Narrativa Transmedia 🌸

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-brightgreen)
![Versión](https://img.shields.io/badge/Versión-1.0.0-blue)
![Licencia](https://img.shields.io/badge/Licencia-MIT-orange)

> **Una experiencia web interactiva para explorar el universo de Perfummia.**
> Este proyecto es parte de una Narrativa Transmedia desarrollada para la Facultad de Artes.

![Screenshot del Hero Section](https://via.placeholder.com/1200x600?text=Captura+de+Pantalla+de+Perfummia)
*(Reemplaza este link con una captura real de tu web)*

---

## 📋 Tabla de Contenidos

1. [Descripción](#-descripción)
2. [Características](#-características)
3. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Instalación y Uso](#-instalación-y-uso)
6. [Créditos](#-créditos)

---

## 📖 Descripción

**Perfummia** es una Landing Page moderna diseñada para introducir a los usuarios en un reino ficticio donde los aromas definen el destino. El sitio web sirve como punto de entrada al universo narrativo, presentando a los personajes, la trama principal y ofreciendo una experiencia interactiva mediante un test de personalidad.

El objetivo es sumergir al usuario en la historia de **Dalia** y su búsqueda por recuperar su tapa en un mundo regido por reglas estrictas.

---

## ✨ Características

* **Hero Section Animada:** Fondo dinámico con personajes flotantes usando animaciones CSS keyframes.
* **Diseño Bento Grid:** Sección de historia maquetada con CSS Grid asimétrico estilo moderno.
* **Galería de Personajes:** Grilla responsive que presenta a los protagonistas con efectos hover.
* **Test de Personalidad Interactivo:**
    * Minijuego de 5 preguntas para determinar el "rol" del usuario.
    * Cálculo de puntaje en tiempo real.
* **Generación de PDF:** Integración con librerías para exportar el resultado del test como un certificado descargable.
* **Diseño Responsivo:** Adaptado completamente a dispositivos móviles, tablets y escritorio.

---

## 🛠 Tecnologías Utilizadas

El proyecto fue construido utilizando tecnologías web estándar sin frameworks pesados, garantizando rendimiento y simplicidad.

* **HTML5:** Semántico y estructurado.
* **CSS3:**
    * Variables CSS (`:root`) para manejo de temas.
    * Flexbox y CSS Grid para layouts complejos.
    * Animaciones y transiciones suaves.
    * Tipografía **Montserrat** (Google Fonts).
* **JavaScript (Vanilla ES6+):**
    * Lógica del cuestionario.
    * Manipulación del DOM.
* **Librerías Externas:**
    * [`jsPDF`](https://github.com/parallax/jsPDF): Para la generación de documentos PDF.
    * [`html2canvas`](https://html2canvas.hertzen.com/): Para capturar el DOM y renderizarlo en el PDF.

---

## 📂 Estructura del Proyecto

```bash
Perfummia-Transmedia/
│
├── index.html      # Estructura principal y maquetado
├── style.css       # Estilos, animaciones y diseño responsivo
├── script.js       # Lógica del test y generación de PDF
└── README.md       # Documentación del proyecto
