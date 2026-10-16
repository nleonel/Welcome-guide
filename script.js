/* ==========================================
   CREVACUORE APARTMENT
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeLanguageSelector();
    initializeWifiCopy();
    initializeSmoothScroll();
    initializeGallery();
    initializeWhatsAppButton();

});

/* ==========================================
   LANGUAGE MANAGEMENT
========================================== */

const translations = {

    it: {
        welcome: "Benvenuti a Torino",
        dashboard: "Guida Ospiti"
    },

    en: {
        welcome: "Welcome to Turin",
        dashboard: "Guest Guide"
    },

    fr: {
        welcome: "Bienvenue à Turin",
        dashboard: "Guide Invités"
    },

    de: {
        welcome: "Willkommen in Turin",
        dashboard: "Gästeführer"
    },

    es: {
        welcome: "Bienvenido a Turín",
        dashboard: "Guía para Huéspedes"
    },

    zh: {
        welcome: "欢迎来到都灵",
        dashboard: "宾客指南"
    }

};

function initializeLanguageSelector() {

    const buttons =
        document.querySelectorAll(".lang-btn");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const lang =
                button.dataset.lang;

            localStorage.setItem(
                "selectedLanguage",
                lang
            );

            setLanguage(lang);

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

        });

    });

    const savedLanguage =
        localStorage.getItem("selectedLanguage");

    if (savedLanguage) {

        const btn =
            document.querySelector(
                `[data-lang="${savedLanguage}"]`
            );

        if (btn) {

            btn.classList.add("active");

            setLanguage(savedLanguage);
        }
    }

}

function setLanguage(lang) {

    if (!translations[lang]) return;

    const dictionary =
        translations[lang];

    const welcomeMessage =
        document.getElementById(
            "welcome-message"
        );

    if (welcomeMessage) {

        welcomeMessage.textContent =
            dictionary.welcome;

    }

    document.documentElement.lang = lang;

}

/* ==========================================
   WIFI COPY PASSWORD
========================================== */

function initializeWifiCopy() {

    const copyButton =
        document.getElementById(
            "copy-password"
        );

    if (!copyButton) return;

    copyButton.addEventListener(
        "click",
        copyWifiPassword
    );

}

function copyWifiPassword() {

    const passwordElement =
        document.getElementById(
            "wifi-password"
        );

    if (!passwordElement) return;

    const password =
        passwordElement.innerText.trim();

    navigator.clipboard
        .writeText(password)
        .then(() => {

            alert(
                "WiFi password copied to clipboard."
            );

        })
        .catch(error => {

            console.error(error);

        });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initializeSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}

/* ==========================================
   GALLERY
========================================== */

function initializeGallery() {

    const images =
        document.querySelectorAll(
            ".gallery-grid img"
        );

    if (!images.length) return;

    images.forEach(image => {

        image.addEventListener(
            "click",
            () => {

                openImageModal(
                    image.src
                );

            }
        );

    });

}

function openImageModal(imageSrc) {

    const overlay =
        document.createElement("div");

    overlay.className =
        "gallery-overlay";

    overlay.innerHTML = `
        <div class="gallery-modal">

            <span class="close-gallery">
                &times;
            </span>

            ${imageSrc}

        </div>
    `;

    document.body.appendChild(
        overlay
    );

    overlay.addEventListener(
        "click",
        () => {

            overlay.remove();

        }
    );

}

/* ==========================================
   WHATSAPP FLOAT
========================================== */

function initializeWhatsAppButton() {

    const whatsappButton =
        document.querySelector(
            ".whatsapp-float"
        );

    if (!whatsappButton) return;

    whatsappButton.addEventListener(
        "mouseenter",
        () => {

            whatsappButton.style.transform =
                "scale(1.1)";

        }
    );

    whatsappButton.addEventListener(
        "mouseleave",
        () => {

            whatsappButton.style.transform =
                "scale(1)";

        }
    );

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

window.addEventListener(
    "load",
    () => {

        document
            .querySelectorAll(
                ".content-section, .card"
            )
            .forEach(element => {

                observer.observe(
                    element
                );

            });

    }
);

/* ==========================================
   CURRENT YEAR FOOTER
========================================== */

window.addEventListener(
    "load",
    () => {

        const copyright =
            document.getElementById(
                "copyright-year"
            );

        if (copyright) {

            copyright.textContent =
                new Date()
                    .getFullYear();

        }

    }
);

/* ==========================================
   DEBUG
========================================== */

console.log(
    "Crevacuore Apartment loaded successfully."
);