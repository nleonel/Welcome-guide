/* =====================================================
   Crevacuore Apartment – script.js condiviso
   Funziona su tutte le pagine tramite <body data-page="...">
===================================================== */
"use strict";

/* ---------- 1. CONFIGURAZIONE (modifica solo qui) ---------- */

const CONFIG = {
    name: "Luxury B&B Apartment In Parella",
    address: "Via Crevacuore 45, Torino",
    whatsapp: "393294572379",   // solo cifre, es. 393331234567
    wifiSsid: "LUX-HOSTEL-BNB",
    wifiPassword: "60671393",
    checkinTime: "16:00",
    checkoutTime: "10:00",
    reviewUrl: "https://g.page/r/CS7gSEFVlZXQEAE/review",
    galleryCount: 5,
    defaultLang: "it",
    storageKey: "guestLanguage",
    lat: 45.0703,   // latitudine (sostituisci con quella esatta)
    lon: 7.6869    // longitudine
};

const LANGS = [
    { code: "it", flag: "it", emoji: "🇮🇹", label: "Italiano" },
    { code: "en", flag: "gb", emoji: "🇬🇧", label: "English" },
    { code: "fr", flag: "fr", emoji: "🇫🇷", label: "Français" },
    { code: "de", flag: "de", emoji: "🇩🇪", label: "Deutsch" },
    { code: "es", flag: "es", emoji: "🇪🇸", label: "Español" },
    { code: "zh", flag: "cn", emoji: "🇨🇳", label: "中文" }
];

/* L'ordine definisce anche i pulsanti Precedente / Successivo */
/*
const PAGES = [
    { id: "home",         file: "index.html",         icon: "🏠" },
    { id: "wifi",         file: "wifi.html",          icon: "📶" },
    { id: "checkin",      file: "check-in.html",      icon: "🔑" },
    { id: "checkout",     file: "check-out.html",     icon: "🚪" },
    { id: "rules",        file: "regole.html",        icon: "📋" },
    { id: "directions",   file: "come-arrivare.html", icon: "📍" },
    { id: "parking",      file: "parcheggi.html",     icon: "🚗" },
    { id: "attractions",  file: "attrazioni.html",    icon: "🗺️" },
    { id: "restaurants",  file: "ristoranti.html",    icon: "🍕" },
    { id: "supermarkets", file: "supermercati.html",  icon: "🛒" },
    { id: "emergency",    file: "emergenze.html",     icon: "🚑" },
    { id: "review",       file: "review.html",        icon: "⭐" }
];
*/

const PAGES = [
    { id: "home",         file: "index.html",         icon: "images/icons/home.png",         emoji: "" },
    { id: "wifi",         file: "wifi.html",          icon: "images/icons/wifi.png",         emoji: "" },
    { id: "checkin",      file: "check-in.html",      icon: "images/icons/checkin.png",      emoji: "🔑" },
    { id: "checkout",     file: "check-out.html",     icon: "images/icons/checkout.png",     emoji: "🚪" },
    { id: "rules",        file: "regole.html",        icon: "images/icons/rules.png",        emoji: "📋" },
    { id: "directions",   file: "come-arrivare.html", icon: "images/icons/directions.png",   emoji: "📍" },
    { id: "parking",      file: "parcheggi.html",     icon: "images/icons/parking.png",      emoji: "🚗" },
    { id: "attractions",  file: "attrazioni.html",    icon: "images/icons/attractions.png",  emoji: "🗺️" },
    { id: "restaurants",  file: "ristoranti.html",    icon: "images/icons/restaurants.png",  emoji: "🍽️" },
    { id: "supermarkets", file: "supermercati.html",  icon: "images/icons/supermarkets.png", emoji: "🛒" },
    { id: "emergency",    file: "emergenze.html",     icon: "images/icons/emergency.png",    emoji: "🚑" },
    { id: "review",       file: "review.html",        icon: "images/icons/review.png",       emoji: "⭐" }
];

/* ---------- 2. TRADUZIONI (se manca una voce si usa l'italiano) ---------- */

const T = {
    it: {
        ui: { home: "Home", route: "Calcola percorso", maps: "Apri in Maps", wa: "Scrivici su WhatsApp",
              copy: "Copia password", copied: "Password copiata!", network: "Rete", password: "Password",
              gallery: "Galleria", call: "Chiama",
              intro: "Scegliete un argomento: troverete tutte le informazioni utili per il vostro soggiorno." },
        p: {
            home: ["Benvenuti", "La vostra casa a Torino"],
            wifi: ["Wi-Fi", "Connessione veloce in tutto l'appartamento"],
            checkin: ["Check-in", "Come entrare nell'appartamento"],
            checkout: ["Check-out", "Prima di partire"],
            rules: ["Regole della casa", "Per un soggiorno sereno per tutti"],
            directions: ["Come arrivare", "Via Crevacuore 45, Torino"],
            parking: ["Parcheggi", "Dove lasciare l'auto"],
            attractions: ["Attrazioni", "Il meglio di Torino"],
            restaurants: ["Ristoranti", "Mangiare bene vicino a casa"],
            supermarkets: ["Supermercati", "La spesa vicino a casa"],
            emergency: ["Emergenze", "Numeri utili"],
            review: ["Recensione", "Vi è piaciuto il soggiorno?"]
        },
        wifiQr: "Inquadrate il QR code con la fotocamera per connettervi automaticamente.",
        checkin: {
            time: "Check-in dalle",
            steps: ["Raggiungete Via Crevacuore 45, Torino.",
                    "Individuate la cassetta delle chiavi (vedi foto).",
                    "Inserite il codice che vi abbiamo inviato.",
                    "Aprite lo sportello e prendete le chiavi.",
                    "Richiudete la cassetta e mescolate le cifre del codice."],
            note: "Il codice della cassetta vi verrà inviato su WhatsApp prima dell'arrivo.",
            photo: "Cassetta chiavi"
        },
        checkout: {
            time: "Check-out entro le",
            items: ["Chiudete tutte le finestre e la porta del balcone.",
                    "Spegnete luci, aria condizionata e TV.",
                    "Lavate o riponete le stoviglie usate.",
                    "Gettate i rifiuti nei contenitori della raccolta differenziata.",
                    "Rimettete le chiavi nella cassetta e mescolate il codice.",
                    "Mandateci un messaggio su WhatsApp quando partite."]
        },
        rules: ["🚭 Vietato fumare all'interno.", "🎉 Non sono ammesse feste o eventi.",
                "🔇 Silenzio dalle 22:00 alle 8:00.", "👥 Possono soggiornare solo gli ospiti registrati.",
                "♻️ Rispettate la raccolta differenziata.", "💡 Spegnete luci e climatizzatore quando uscite."],
        dir: {
            airport: ["Aeroporto di Torino", "Collegamenti in bus e treno verso il centro. Calcolate il percorso aggiornato."],
            portanuova: ["Stazione Porta Nuova", "Stazione principale, servita dalla metropolitana M1."],
            portasusa: ["Stazione Porta Susa", "Stazione dell'alta velocità, servita dalla metropolitana M1."],
            metro: ["Metropolitana", "Trovate la stazione della metro più vicina all'appartamento."],
            address: "Apri l'indirizzo in Maps"
        },
        park: {
            street: ["Parcheggio gratuito in strada", "Nelle vie intorno all'appartamento. Controllate sempre i cartelli (pulizia strade)."],
            private: ["Parcheggi custoditi", "Informazioni in arrivo. Nel frattempo cercate i parcheggi più vicini su Maps."]
        },
        attr: {
            mole: ["Mole Antonelliana", "Simbolo di Torino e sede del Museo Nazionale del Cinema."],
            egizio: ["Museo Egizio", "Una delle più importanti collezioni egizie al mondo."],
            palazzo: ["Palazzo Reale", "Storica residenza dei Savoia in Piazza Castello."],
            valentino: ["Parco del Valentino", "Il grande parco sul Po, ideale per una passeggiata."],
            venaria: ["Reggia di Venaria", "Residenza reale patrimonio UNESCO con splendidi giardini."],
            stadium: ["Allianz Stadium", "Lo stadio della Juventus, con museo e tour."]
        },
        food: {
            breakfast: ["Colazione", "Bar e pasticcerie per caffè e brioche."],
            pizza: ["Pizza", "Pizzerie vicine all'appartamento."],
            restaurant: ["Ristorante", "Cucina piemontese e italiana."],
            aperitivo: ["Aperitivo", "Il rito torinese dell'aperitivo."]
        },
        shop: "Trovate il punto vendita più vicino all'appartamento.",
        em: { n112: "Numero unico di emergenza", n113: "Polizia", n115: "Vigili del fuoco", n118: "Emergenza sanitaria",
              hospital: ["Ospedale", "Pronto soccorso più vicino."], pharmacy: ["Farmacia", "Farmacia più vicina."] },
        review: { text: "La vostra opinione è preziosa per noi e per i futuri ospiti. Bastano pochi secondi!",
                  button: "Lascia una recensione su Google" }
    },

    en: {
        ui: { home: "Home", route: "Get directions", maps: "Open in Maps", wa: "Message us on WhatsApp",
              copy: "Copy password", copied: "Password copied!", network: "Network", password: "Password",
              gallery: "Gallery", call: "Call", intro: "Choose a topic to find everything you need for your stay." },
        p: {
            home: ["Welcome", "Your home in Turin"],
            wifi: ["Wi-Fi", "Fast internet throughout the apartment"],
            checkin: ["Check-in", "How to get into the apartment"],
            checkout: ["Check-out", "Before you leave"],
            rules: ["House rules", "For a pleasant stay for everyone"],
            directions: ["Getting here", "Via Crevacuore 45, Turin"],
            parking: ["Parking", "Where to leave your car"],
            attractions: ["Attractions", "The best of Turin"],
            restaurants: ["Restaurants", "Eat well close to home"],
            supermarkets: ["Supermarkets", "Groceries near home"],
            emergency: ["Emergencies", "Useful numbers"],
            review: ["Review", "Did you enjoy your stay?"]
        },
        wifiQr: "Scan the QR code with your camera to connect automatically.",
        checkin: {
            time: "Check-in from",
            steps: ["Go to Via Crevacuore 45, Turin.", "Find the key safe (see photo).",
                    "Enter the code we sent you.", "Open the key safe and take the keys.",
                    "Close the key safe and scramble the code."],
            note: "The key safe code will be sent to you on WhatsApp before your arrival.",
            photo: "Key safe"
        },
        checkout: {
            time: "Check-out by",
            items: ["Close all windows and the balcony door.", "Switch off lights, air conditioning and TV.",
                    "Wash or put away used dishes.", "Dispose of rubbish in the recycling bins.",
                    "Put the keys back in the key safe and scramble the code.",
                    "Send us a WhatsApp message when you leave."]
        },
        rules: ["🚭 No smoking inside.", "🎉 No parties or events.", "🔇 Quiet hours from 10:00 PM to 8:00 AM.",
                "👥 Only registered guests may stay.", "♻️ Please separate your waste for recycling.",
                "💡 Switch off lights and air conditioning when you go out."],
        dir: {
            airport: ["Turin Airport", "Bus and train connections to the city centre. Get up-to-date directions."],
            portanuova: ["Porta Nuova Station", "Turin's main station, served by Metro line M1."],
            portasusa: ["Porta Susa Station", "High-speed rail station, served by Metro line M1."],
            metro: ["Metro", "Find the metro station closest to the apartment."],
            address: "Open the address in Maps"
        },
        park: {
            street: ["Free street parking", "In the streets around the apartment. Always check the signs (street cleaning)."],
            private: ["Secure car parks", "Details coming soon. Meanwhile, find the nearest car parks on Maps."]
        },
        attr: {
            mole: ["Mole Antonelliana", "Symbol of Turin, home to the National Cinema Museum."],
            egizio: ["Egyptian Museum", "One of the most important Egyptian collections in the world."],
            palazzo: ["Royal Palace", "Historic residence of the House of Savoy in Piazza Castello."],
            valentino: ["Valentino Park", "The large park along the Po, perfect for a walk."],
            venaria: ["Venaria Royal Palace", "UNESCO World Heritage royal residence with beautiful gardens."],
            stadium: ["Allianz Stadium", "Juventus stadium, with museum and tours."]
        },
        food: {
            breakfast: ["Breakfast", "Cafés and pastry shops for coffee and croissants."],
            pizza: ["Pizza", "Pizzerias near the apartment."],
            restaurant: ["Restaurant", "Piedmontese and Italian cuisine."],
            aperitivo: ["Aperitivo", "Turin's famous aperitivo tradition."]
        },
        shop: "Find the nearest store to the apartment.",
        em: { n112: "Single emergency number", n113: "Police", n115: "Fire brigade", n118: "Medical emergency",
              hospital: ["Hospital", "Nearest emergency room."], pharmacy: ["Pharmacy", "Nearest pharmacy."] },
        review: { text: "Your feedback means a lot to us and to future guests. It only takes a few seconds!",
                  button: "Leave a Google review" }
    },

    fr: {
        ui: { home: "Accueil", route: "Itinéraire", maps: "Ouvrir dans Maps", wa: "Écrivez-nous sur WhatsApp",
              copy: "Copier le mot de passe", copied: "Mot de passe copié !", network: "Réseau", password: "Mot de passe",
              gallery: "Galerie", call: "Appeler", intro: "Choisissez un thème pour trouver toutes les informations utiles à votre séjour." },
        p: {
            home: ["Bienvenue", "Votre maison à Turin"],
            wifi: ["Wi-Fi", "Connexion rapide dans tout l'appartement"],
            checkin: ["Arrivée", "Comment entrer dans l'appartement"],
            checkout: ["Départ", "Avant de partir"],
            rules: ["Règles de la maison", "Pour un séjour agréable pour tous"],
            directions: ["Comment venir", "Via Crevacuore 45, Turin"],
            parking: ["Stationnement", "Où garer votre voiture"],
            attractions: ["Attractions", "Le meilleur de Turin"],
            restaurants: ["Restaurants", "Bien manger près de chez vous"],
            supermarkets: ["Supermarchés", "Courses près de chez vous"],
            emergency: ["Urgences", "Numéros utiles"],
            review: ["Avis", "Vous avez aimé votre séjour ?"]
        },
        wifiQr: "Scannez le QR code avec l'appareil photo pour vous connecter automatiquement.",
        checkin: {
            time: "Arrivée à partir de",
            steps: ["Rendez-vous Via Crevacuore 45, Turin.", "Trouvez la boîte à clés (voir photo).",
                    "Saisissez le code que nous vous avons envoyé.", "Ouvrez la boîte et prenez les clés.",
                    "Refermez la boîte et brouillez le code."],
            note: "Le code de la boîte à clés vous sera envoyé sur WhatsApp avant votre arrivée.",
            photo: "Boîte à clés"
        },
        checkout: {
            time: "Départ avant",
            items: ["Fermez toutes les fenêtres et la porte du balcon.", "Éteignez les lumières, la climatisation et la TV.",
                    "Lavez ou rangez la vaisselle utilisée.", "Jetez les déchets dans les bacs de tri sélectif.",
                    "Remettez les clés dans la boîte et brouillez le code.", "Envoyez-nous un message WhatsApp à votre départ."]
        },
        rules: ["🚭 Interdiction de fumer à l'intérieur.", "🎉 Fêtes et événements interdits.", "🔇 Silence de 22h00 à 8h00.",
                "👥 Seuls les voyageurs enregistrés peuvent séjourner.", "♻️ Merci de respecter le tri sélectif.",
                "💡 Éteignez lumières et climatisation en sortant."],
        dir: {
            airport: ["Aéroport de Turin", "Liaisons en bus et en train vers le centre. Calculez l'itinéraire à jour."],
            portanuova: ["Gare de Porta Nuova", "Gare principale, desservie par la ligne de métro M1."],
            portasusa: ["Gare de Porta Susa", "Gare grande vitesse, desservie par la ligne de métro M1."],
            metro: ["Métro", "Trouvez la station de métro la plus proche de l'appartement."],
            address: "Ouvrir l'adresse dans Maps"
        },
        park: {
            street: ["Stationnement gratuit dans la rue", "Dans les rues autour de l'appartement. Vérifiez toujours les panneaux (nettoyage des rues)."],
            private: ["Parkings surveillés", "Informations à venir. En attendant, trouvez les parkings les plus proches sur Maps."]
        },
        attr: {
            mole: ["Mole Antonelliana", "Symbole de Turin et siège du Musée national du cinéma."],
            egizio: ["Musée égyptien", "L'une des plus importantes collections égyptiennes au monde."],
            palazzo: ["Palais royal", "Résidence historique de la Maison de Savoie, Piazza Castello."],
            valentino: ["Parc du Valentino", "Le grand parc au bord du Pô, idéal pour une promenade."],
            venaria: ["Palais de la Venaria", "Résidence royale classée à l'UNESCO avec de superbes jardins."],
            stadium: ["Allianz Stadium", "Le stade de la Juventus, avec musée et visites."]
        },
        food: {
            breakfast: ["Petit-déjeuner", "Cafés et pâtisseries pour un café et un croissant."],
            pizza: ["Pizza", "Pizzerias près de l'appartement."],
            restaurant: ["Restaurant", "Cuisine piémontaise et italienne."],
            aperitivo: ["Apéritif", "La tradition turinoise de l'aperitivo."]
        },
        shop: "Trouvez le magasin le plus proche de l'appartement.",
        em: { n112: "Numéro d'urgence unique", n113: "Police", n115: "Pompiers", n118: "Urgence médicale",
              hospital: ["Hôpital", "Service des urgences le plus proche."], pharmacy: ["Pharmacie", "Pharmacie la plus proche."] },
        review: { text: "Votre avis compte beaucoup pour nous et pour les futurs voyageurs. Cela ne prend que quelques secondes !",
                  button: "Laisser un avis Google" }
    },

    de: {
        ui: { home: "Startseite", route: "Route berechnen", maps: "In Maps öffnen", wa: "Schreiben Sie uns auf WhatsApp",
              copy: "Passwort kopieren", copied: "Passwort kopiert!", network: "Netzwerk", password: "Passwort",
              gallery: "Galerie", call: "Anrufen", intro: "Wählen Sie ein Thema – hier finden Sie alle Informationen für Ihren Aufenthalt." },
        p: {
            home: ["Willkommen", "Ihr Zuhause in Turin"],
            wifi: ["WLAN", "Schnelles Internet in der ganzen Wohnung"],
            checkin: ["Check-in", "So kommen Sie in die Wohnung"],
            checkout: ["Check-out", "Vor der Abreise"],
            rules: ["Hausregeln", "Für einen angenehmen Aufenthalt für alle"],
            directions: ["Anreise", "Via Crevacuore 45, Turin"],
            parking: ["Parken", "Wo Sie Ihr Auto abstellen können"],
            attractions: ["Sehenswürdigkeiten", "Das Beste von Turin"],
            restaurants: ["Restaurants", "Gut essen in der Nähe"],
            supermarkets: ["Supermärkte", "Einkaufen in der Nähe"],
            emergency: ["Notfälle", "Wichtige Nummern"],
            review: ["Bewertung", "Hat Ihnen der Aufenthalt gefallen?"]
        },
        wifiQr: "Scannen Sie den QR-Code mit der Kamera, um sich automatisch zu verbinden.",
        checkin: {
            time: "Check-in ab",
            steps: ["Gehen Sie zur Via Crevacuore 45, Turin.", "Suchen Sie den Schlüsselsafe (siehe Foto).",
                    "Geben Sie den Code ein, den wir Ihnen geschickt haben.", "Öffnen Sie den Safe und nehmen Sie die Schlüssel.",
                    "Schließen Sie den Safe und verstellen Sie den Code."],
            note: "Den Code für den Schlüsselsafe erhalten Sie vor Ihrer Ankunft per WhatsApp.",
            photo: "Schlüsselsafe"
        },
        checkout: {
            time: "Check-out bis",
            items: ["Schließen Sie alle Fenster und die Balkontür.", "Schalten Sie Licht, Klimaanlage und TV aus.",
                    "Spülen oder verräumen Sie benutztes Geschirr.", "Entsorgen Sie den Müll getrennt in den Recyclingbehältern.",
                    "Legen Sie die Schlüssel zurück in den Safe und verstellen Sie den Code.",
                    "Schicken Sie uns bei der Abreise eine WhatsApp-Nachricht."]
        },
        rules: ["🚭 Rauchen in der Wohnung ist verboten.", "🎉 Keine Partys oder Veranstaltungen.",
                "🔇 Nachtruhe von 22:00 bis 8:00 Uhr.", "👥 Nur angemeldete Gäste dürfen übernachten.",
                "♻️ Bitte trennen Sie den Müll.", "💡 Schalten Sie Licht und Klimaanlage beim Verlassen aus."],
        dir: {
            airport: ["Flughafen Turin", "Bus- und Zugverbindungen ins Stadtzentrum. Berechnen Sie die aktuelle Verbindung."],
            portanuova: ["Bahnhof Porta Nuova", "Hauptbahnhof, angebunden an die U-Bahn-Linie M1."],
            portasusa: ["Bahnhof Porta Susa", "Hochgeschwindigkeitsbahnhof, angebunden an die U-Bahn-Linie M1."],
            metro: ["U-Bahn", "Finden Sie die nächstgelegene U-Bahn-Station."],
            address: "Adresse in Maps öffnen"
        },
        park: {
            street: ["Kostenloses Parken an der Straße", "In den Straßen rund um die Wohnung. Bitte beachten Sie die Schilder (Straßenreinigung)."],
            private: ["Bewachte Parkplätze", "Informationen folgen. Finden Sie inzwischen die nächsten Parkplätze in Maps."]
        },
        attr: {
            mole: ["Mole Antonelliana", "Wahrzeichen Turins und Sitz des Nationalen Filmmuseums."],
            egizio: ["Ägyptisches Museum", "Eine der bedeutendsten ägyptischen Sammlungen der Welt."],
            palazzo: ["Königspalast", "Historische Residenz des Hauses Savoyen an der Piazza Castello."],
            valentino: ["Valentino-Park", "Der große Park am Po, ideal für einen Spaziergang."],
            venaria: ["Reggia di Venaria", "Königliche Residenz und UNESCO-Welterbe mit herrlichen Gärten."],
            stadium: ["Allianz Stadium", "Das Stadion von Juventus, mit Museum und Führungen."]
        },
        food: {
            breakfast: ["Frühstück", "Cafés und Konditoreien für Kaffee und Croissants."],
            pizza: ["Pizza", "Pizzerien in der Nähe der Wohnung."],
            restaurant: ["Restaurant", "Piemontesische und italienische Küche."],
            aperitivo: ["Aperitivo", "Die Turiner Aperitivo-Tradition."]
        },
        shop: "Finden Sie die nächstgelegene Filiale.",
        em: { n112: "Europäischer Notruf", n113: "Polizei", n115: "Feuerwehr", n118: "Medizinischer Notfall",
              hospital: ["Krankenhaus", "Nächste Notaufnahme."], pharmacy: ["Apotheke", "Nächste Apotheke."] },
        review: { text: "Ihre Meinung ist uns und zukünftigen Gästen sehr wichtig. Es dauert nur wenige Sekunden!",
                  button: "Google-Bewertung schreiben" }
    },

    es: {
        ui: { home: "Inicio", route: "Ver ruta", maps: "Abrir en Maps", wa: "Escríbanos por WhatsApp",
              copy: "Copiar contraseña", copied: "¡Contraseña copiada!", network: "Red", password: "Contraseña",
              gallery: "Galería", call: "Llamar", intro: "Elija un tema para encontrar toda la información útil para su estancia." },
        p: {
            home: ["Bienvenidos", "Su casa en Turín"],
            wifi: ["Wi-Fi", "Internet rápido en todo el apartamento"],
            checkin: ["Check-in", "Cómo entrar en el apartamento"],
            checkout: ["Check-out", "Antes de irse"],
            rules: ["Normas de la casa", "Para una estancia agradable para todos"],
            directions: ["Cómo llegar", "Via Crevacuore 45, Turín"],
            parking: ["Aparcamiento", "Dónde dejar el coche"],
            attractions: ["Atracciones", "Lo mejor de Turín"],
            restaurants: ["Restaurantes", "Comer bien cerca de casa"],
            supermarkets: ["Supermercados", "Compras cerca de casa"],
            emergency: ["Emergencias", "Números útiles"],
            review: ["Reseña", "¿Le ha gustado su estancia?"]
        },
        wifiQr: "Escanee el código QR con la cámara para conectarse automáticamente.",
        checkin: {
            time: "Check-in a partir de las",
            steps: ["Diríjase a Via Crevacuore 45, Turín.", "Localice la caja de las llaves (ver foto).",
                    "Introduzca el código que le hemos enviado.", "Abra la caja y tome las llaves.",
                    "Cierre la caja y desordene el código."],
            note: "Le enviaremos el código de la caja por WhatsApp antes de su llegada.",
            photo: "Caja de llaves"
        },
        checkout: {
            time: "Check-out antes de las",
            items: ["Cierre todas las ventanas y la puerta del balcón.", "Apague luces, aire acondicionado y TV.",
                    "Lave o guarde la vajilla usada.", "Tire la basura en los contenedores de reciclaje.",
                    "Deje las llaves en la caja y desordene el código.", "Envíenos un mensaje por WhatsApp al salir."]
        },
        rules: ["🚭 Prohibido fumar en el interior.", "🎉 No se permiten fiestas ni eventos.", "🔇 Silencio de 22:00 a 8:00.",
                "👥 Solo pueden alojarse los huéspedes registrados.", "♻️ Respete la separación de residuos.",
                "💡 Apague luces y aire acondicionado al salir."],
        dir: {
            airport: ["Aeropuerto de Turín", "Conexiones en autobús y tren con el centro. Consulte la ruta actualizada."],
            portanuova: ["Estación Porta Nuova", "Estación principal, con parada de la línea de metro M1."],
            portasusa: ["Estación Porta Susa", "Estación de alta velocidad, con parada de la línea de metro M1."],
            metro: ["Metro", "Encuentre la estación de metro más cercana al apartamento."],
            address: "Abrir la dirección en Maps"
        },
        park: {
            street: ["Aparcamiento gratuito en la calle", "En las calles alrededor del apartamento. Revise siempre las señales (limpieza de calles)."],
            private: ["Aparcamientos vigilados", "Información próximamente. Mientras tanto, busque los más cercanos en Maps."]
        },
        attr: {
            mole: ["Mole Antonelliana", "Símbolo de Turín y sede del Museo Nacional del Cine."],
            egizio: ["Museo Egipcio", "Una de las colecciones egipcias más importantes del mundo."],
            palazzo: ["Palacio Real", "Histórica residencia de la Casa de Saboya en Piazza Castello."],
            valentino: ["Parque del Valentino", "El gran parque junto al Po, ideal para pasear."],
            venaria: ["Palacio de Venaria", "Residencia real Patrimonio de la UNESCO con espléndidos jardines."],
            stadium: ["Allianz Stadium", "El estadio de la Juventus, con museo y visitas guiadas."]
        },
        food: {
            breakfast: ["Desayuno", "Cafeterías y pastelerías para café y cruasanes."],
            pizza: ["Pizza", "Pizzerías cerca del apartamento."],
            restaurant: ["Restaurante", "Cocina piamontesa e italiana."],
            aperitivo: ["Aperitivo", "La tradición turinesa del aperitivo."]
        },
        shop: "Encuentre la tienda más cercana al apartamento.",
        em: { n112: "Número único de emergencias", n113: "Policía", n115: "Bomberos", n118: "Emergencia médica",
              hospital: ["Hospital", "Urgencias más cercanas."], pharmacy: ["Farmacia", "Farmacia más cercana."] },
        review: { text: "Su opinión es muy valiosa para nosotros y para los futuros huéspedes. ¡Solo le llevará unos segundos!",
                  button: "Dejar una reseña en Google" }
    },

    zh: {
        ui: { home: "首页", route: "查看路线", maps: "在地图中打开", wa: "通过 WhatsApp 联系我们",
              copy: "复制密码", copied: "密码已复制！", network: "网络名称", password: "密码",
              gallery: "相册", call: "拨打", intro: "请选择一个主题，查看住宿期间所需的全部信息。" },
        p: {
            home: ["欢迎", "您在都灵的家"],
            wifi: ["无线网络", "全屋高速网络"],
            checkin: ["入住", "如何进入公寓"],
            checkout: ["退房", "离开之前"],
            rules: ["房屋守则", "让每个人都住得愉快"],
            directions: ["交通指南", "都灵 Via Crevacuore 45"],
            parking: ["停车", "在哪里停车"],
            attractions: ["景点", "都灵精华"],
            restaurants: ["餐厅", "附近美食"],
            supermarkets: ["超市", "附近购物"],
            emergency: ["紧急情况", "常用电话"],
            review: ["评价", "您喜欢这次住宿吗？"]
        },
        wifiQr: "用手机相机扫描二维码即可自动连接。",
        checkin: {
            time: "入住时间：自",
            steps: ["前往都灵 Via Crevacuore 45。", "找到钥匙密码盒（见照片）。", "输入我们发送给您的密码。",
                    "打开密码盒并取出钥匙。", "关上密码盒并打乱密码。"],
            note: "我们会在您到达前通过 WhatsApp 发送密码盒密码。",
            photo: "钥匙密码盒"
        },
        checkout: {
            time: "退房时间：最晚",
            items: ["关闭所有窗户和阳台门。", "关闭灯光、空调和电视。", "清洗或收好用过的餐具。",
                    "将垃圾分类投放到回收桶中。", "将钥匙放回密码盒并打乱密码。", "离开时请通过 WhatsApp 告知我们。"]
        },
        rules: ["🚭 室内禁止吸烟。", "🎉 禁止举办派对或活动。", "🔇 22:00 至 8:00 请保持安静。",
                "👥 仅限登记的住客入住。", "♻️ 请进行垃圾分类。", "💡 外出时请关闭灯光和空调。"],
        dir: {
            airport: ["都灵机场", "有巴士和火车前往市中心。请查看最新路线。"],
            portanuova: ["新门火车站 (Porta Nuova)", "都灵主火车站，地铁 M1 线可达。"],
            portasusa: ["苏萨门火车站 (Porta Susa)", "高铁站，地铁 M1 线可达。"],
            metro: ["地铁", "查找离公寓最近的地铁站。"],
            address: "在地图中打开地址"
        },
        park: {
            street: ["免费路边停车", "公寓周边街道可免费停车。请注意查看标志（街道清扫时间）。"],
            private: ["看管停车场", "信息即将更新。您可以先在地图中查找最近的停车场。"]
        },
        attr: {
            mole: ["安东内利尖塔", "都灵的象征，国家电影博物馆所在地。"],
            egizio: ["埃及博物馆", "世界上最重要的埃及文物收藏之一。"],
            palazzo: ["皇宫", "位于城堡广场的萨伏依王室历史宫殿。"],
            valentino: ["瓦伦蒂诺公园", "波河畔的大型公园，适合散步。"],
            venaria: ["威纳利亚皇宫", "联合国教科文组织世界遗产，拥有美丽的花园。"],
            stadium: ["安联球场", "尤文图斯主场，设有博物馆和参观项目。"]
        },
        food: {
            breakfast: ["早餐", "提供咖啡和牛角包的咖啡馆与甜品店。"],
            pizza: ["披萨", "公寓附近的披萨店。"],
            restaurant: ["餐厅", "皮埃蒙特及意大利美食。"],
            aperitivo: ["开胃酒", "都灵著名的 Aperitivo 餐前酒文化。"]
        },
        shop: "查找离公寓最近的门店。",
        em: { n112: "欧洲统一紧急电话", n113: "警察", n115: "消防", n118: "医疗急救",
              hospital: ["医院", "最近的急诊室。"], pharmacy: ["药店", "最近的药店。"] },
        review: { text: "您的评价对我们和未来的住客都非常重要，只需几秒钟！", button: "在 Google 上留下评价" }
    }
};

/* ---------- Traduzioni widget meteo ---------- */
const WX_TEXT = {
    it: { title: "Meteo a Torino", today: "Oggi", feels: "Percepita", hum: "Umidità", wind: "Vento",
          loading: "Caricamento meteo…", error: "Meteo non disponibile al momento.",
          c: { clear: "Sereno", partly: "Poco nuvoloso", cloudy: "Nuvoloso", fog: "Nebbia",
               drizzle: "Pioviggine", rain: "Pioggia", snow: "Neve", storm: "Temporale" } },
    en: { title: "Weather in Turin", today: "Today", feels: "Feels like", hum: "Humidity", wind: "Wind",
          loading: "Loading weather…", error: "Weather not available right now.",
          c: { clear: "Clear", partly: "Partly cloudy", cloudy: "Cloudy", fog: "Fog",
               drizzle: "Drizzle", rain: "Rain", snow: "Snow", storm: "Thunderstorm" } },
    fr: { title: "Météo à Turin", today: "Aujourd'hui", feels: "Ressenti", hum: "Humidité", wind: "Vent",
          loading: "Chargement de la météo…", error: "Météo indisponible pour le moment.",
          c: { clear: "Ensoleillé", partly: "Peu nuageux", cloudy: "Nuageux", fog: "Brouillard",
               drizzle: "Bruine", rain: "Pluie", snow: "Neige", storm: "Orage" } },
    de: { title: "Wetter in Turin", today: "Heute", feels: "Gefühlt", hum: "Feuchtigkeit", wind: "Wind",
          loading: "Wetter wird geladen…", error: "Wetter derzeit nicht verfügbar.",
          c: { clear: "Klar", partly: "Leicht bewölkt", cloudy: "Bewölkt", fog: "Nebel",
               drizzle: "Nieselregen", rain: "Regen", snow: "Schnee", storm: "Gewitter" } },
    es: { title: "El tiempo en Turín", today: "Hoy", feels: "Sensación", hum: "Humedad", wind: "Viento",
          loading: "Cargando el tiempo…", error: "Tiempo no disponible en este momento.",
          c: { clear: "Despejado", partly: "Poco nuboso", cloudy: "Nublado", fog: "Niebla",
               drizzle: "Llovizna", rain: "Lluvia", snow: "Nieve", storm: "Tormenta" } },
    zh: { title: "都灵天气", today: "今天", feels: "体感", hum: "湿度", wind: "风速",
          loading: "正在加载天气…", error: "暂时无法获取天气。",
          c: { clear: "晴", partly: "少云", cloudy: "多云", fog: "雾",
               drizzle: "毛毛雨", rain: "雨", snow: "雪", storm: "雷暴" } }
};
Object.keys(WX_TEXT).forEach((code) => { if (T[code]) T[code].wx = WX_TEXT[code]; });
/* ---------- 3. LINGUA ---------- */

let lang = CONFIG.defaultLang;

function tr(path) {
    const get = (code) => path.split(".").reduce(
        (obj, key) => (obj == null ? undefined : obj[key]), T[code]);
    const value = get(lang);
    if (value !== undefined) return value;
    const fallback = get(CONFIG.defaultLang);
    return fallback !== undefined ? fallback : path;
}

function loadLang() {
    let saved = null;
    try { saved = localStorage.getItem(CONFIG.storageKey); } catch (e) { /* ignora */ }
    if (T[saved]) return saved;
    const browser = (navigator.language || "").slice(0, 2).toLowerCase();
    return T[browser] ? browser : CONFIG.defaultLang;
}

function setLanguage(code) {
    if (!T[code]) return;
    lang = code;
    try { localStorage.setItem(CONFIG.storageKey, code); } catch (e) { /* ignora */ }
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
}

/* ---------- 4. UTILITY DOM (nessun tag HTML nelle stringhe) ---------- */

function h(tag, props, ...children) {
    const el = document.createElement(tag);
    Object.entries(props || {}).forEach(([key, value]) => {
        if (value == null || value === false) return;
        if (key === "class") el.className = value;
        else if (key === "style") el.style.cssText = value;
        else if (key.startsWith("on")) el.addEventListener(key.slice(2), value);
        else el.setAttribute(key, value);
    });
    children.flat().forEach((child) => {
        if (child == null || child === false) return;
        el.append(child instanceof Node ? child : String(child));
    });
    return el;
}

const extLink = (href, label, cls = "btn") =>
    h("a", { class: cls, href, target: "_blank", rel: "noopener" }, label);

const mapsSearch = (q) =>
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

const nearHome = (q) => mapsSearch(q + " vicino a " + CONFIG.address);

const mapsRoute = (origin) =>
    "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent(origin) +
    "&destination=" + encodeURIComponent(CONFIG.address) + "&travelmode=transit";

const whatsappUrl = () => "https://wa.me/" + CONFIG.whatsapp;

/* Immagine che si rimuove da sola se il file manca */
function safeImg(src, alt, cls, removeTarget) {
    const img = h("img", { src, alt, class: cls, loading: "lazy" });
    img.addEventListener("error", () => (removeTarget ? removeTarget() : img).remove());
    return img;
}

/* Icona: immagine (png/jpg/svg/webp) oppure emoji.
   Se l'immagine non si carica, mostra l'emoji di riserva. */
const IMG_FILE = /\.(png|jpe?g|svg|webp|gif)$/i;

function iconEl(icon, cls, fallback) {
    if (!icon) return null;

    if (!IMG_FILE.test(icon)) {
        return h("span", { class: cls }, icon);
    }

    const box = h("span", { class: cls + " icon-img" });
    const img = h("img", { src: icon, alt: "", loading: "lazy" });

    img.addEventListener("error", () => {
        box.classList.remove("icon-img");
        box.textContent = fallback || "";
    });

    box.append(img);
    return box;
}

/*
function card({ icon, title, text, href, label, external = true }) {
    return h("article", { class: "card" },
        icon && h("div", { class: "card-icon" }, icon),
        h("h3", null, title),
        text && h("p", null, text),
        href && (external ? extLink(href, label) : h("a", { class: "btn", href }, label))
    );
}
*/

function card({ icon, fallback, title, text, href, label, external = true }) {
    return h("article", { class: "card" },
        iconEl(icon, "card-icon", fallback),
        h("h3", null, title),
        text && h("p", null, text),
        href && (external ? extLink(href, label) : h("a", { class: "btn", href }, label))
    );
}
const grid = (items) => h("div", { class: "grid" }, items);

const list = (items, cls = "checklist") =>
    h(cls === "steps" ? "ol" : "ul", { class: cls }, items.map((i) => h("li", null, i)));

const badge = (label, time) =>
    h("div", { class: "time-badge" }, label + " ", h("strong", null, time));

/* ---------- 5. CONTENUTO DELLE PAGINE ---------- */

/* ---------- Widget meteo (Open-Meteo) ---------- */

const WX = { data: null, promise: null, cacheKey: "wxCache", maxAge: 30 * 60 * 1000 };

const WX_ICON = { clear: "☀️", partly: "⛅", cloudy: "☁️", fog: "🌫️",
                  drizzle: "🌦️", rain: "🌧️", snow: "❄️", storm: "⛈️" };

function wxGroup(code) {
    if (code === 0) return "clear";
    if (code <= 2) return "partly";
    if (code === 3) return "cloudy";
    if (code <= 48) return "fog";
    if (code <= 57) return "drizzle";
    if (code <= 67) return "rain";
    if (code <= 77) return "snow";
    if (code <= 82) return "rain";
    if (code <= 86) return "snow";
    return "storm";
}

function loadWeather() {
    if (WX.promise) return WX.promise;

    /* Cache di 30 minuti: evita richieste a ogni cambio pagina */
    try {
        const cached = JSON.parse(sessionStorage.getItem(WX.cacheKey) || "null");
        if (cached && Date.now() - cached.time < WX.maxAge) {
            WX.promise = Promise.resolve(cached.data);
            return WX.promise;
        }
    } catch (e) { /* ignora */ }

    const url = "https://api.open-meteo.com/v1/forecast" +
        "?latitude=" + CONFIG.lat + "&longitude=" + CONFIG.lon +
        "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day" +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
        "&timezone=Europe%2FRome&forecast_days=4";

    WX.promise = fetch(url)
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then((data) => {
            try { sessionStorage.setItem(WX.cacheKey, JSON.stringify({ time: Date.now(), data })); } catch (e) {}
            return data;
        })
        .catch((err) => { WX.promise = null; throw err; });

    return WX.promise;
}

function dayLabel(dateStr, i) {
    if (i === 0) return tr("wx.today");
    const locale = lang === "zh" ? "zh-CN" : lang;
    return new Date(dateStr + "T12:00:00").toLocaleDateString(locale, { weekday: "short" });
}

function fillWeather(box, d) {
    const c = d.current;
    const g = wxGroup(c.weather_code);
    const icon = g === "clear" && !c.is_day ? "🌙" : WX_ICON[g];

    box.replaceChildren(
        h("h2", { class: "wx-title" }, tr("wx.title")),
        h("div", { class: "wx-now" },
            h("span", { class: "wx-icon" }, icon),
            h("div", null,
                h("div", { class: "wx-temp" }, Math.round(c.temperature_2m) + "°C"),
                h("div", { class: "wx-desc" }, tr("wx.c." + g)))),
        h("div", { class: "wx-meta" },
            h("span", null, "🌡️ " + tr("wx.feels") + " " + Math.round(c.apparent_temperature) + "°"),
            h("span", null, "💧 " + tr("wx.hum") + " " + c.relative_humidity_2m + "%"),
            h("span", null, "💨 " + tr("wx.wind") + " " + Math.round(c.wind_speed_10m) + " km/h")),
        h("div", { class: "wx-days" },
            d.daily.time.map((t, i) => h("div", { class: "wx-day" },
                h("span", { class: "wx-dname" }, dayLabel(t, i)),
                h("span", { class: "wx-dicon" }, WX_ICON[wxGroup(d.daily.weather_code[i])]),
                h("span", { class: "wx-range" },
                    Math.round(d.daily.temperature_2m_max[i]) + "° / " +
                    Math.round(d.daily.temperature_2m_min[i]) + "°"),
                h("span", { class: "wx-rain" }, "☔ " + (d.daily.precipitation_probability_max[i] ?? 0) + "%"))))
    );
}

function weatherWidget() {
    const box = h("section", { class: "weather", id: "weather", "aria-live": "polite" });

    if (WX.data) {
        fillWeather(box, WX.data);           // cambio lingua: dati già pronti
        return box;
    }

    box.append(h("p", { class: "muted" }, "⏳ " + tr("wx.loading")));

    loadWeather()
        .then((data) => {
            WX.data = data;
            const current = document.getElementById("weather");
            if (current) fillWeather(current, data);
        })
        .catch(() => {
            const current = document.getElementById("weather");
            if (current) current.replaceChildren(h("p", { class: "muted" }, "🌥️ " + tr("wx.error")));
        });

    return box;
}

/* ---------- Barra meteo sottile (tutte le pagine) ---------- */

function fillWeatherBar(bar, d) {
    const c = d.current;
    const g = wxGroup(c.weather_code);
    const icon = g === "clear" && !c.is_day ? "🌙" : WX_ICON[g];

    bar.replaceChildren(
        h("div", { class: "wxbar-inner" },
            h("span", { class: "wxbar-place" }, "📍 " + tr("wx.title")),
            h("span", { class: "wxbar-now" },
                h("span", { class: "wxbar-icon" }, icon),
                h("strong", null, Math.round(c.temperature_2m) + "°C"),
                h("span", null, tr("wx.c." + g))),
            h("span", { class: "wxbar-item", title: tr("wx.feels") },
                "🌡️ " + Math.round(c.apparent_temperature) + "°"),
            h("span", { class: "wxbar-item", title: tr("wx.hum") },
                "💧 " + c.relative_humidity_2m + "%"),
            h("span", { class: "wxbar-item", title: tr("wx.wind") },
                "💨 " + Math.round(c.wind_speed_10m) + " km/h"),
            h("span", { class: "wxbar-days" },
                d.daily.time.slice(1).map((t, i) => {
                    const n = i + 1;
                    return h("span", { class: "wxbar-day" },
                        dayLabel(t, n) + " " +
                        WX_ICON[wxGroup(d.daily.weather_code[n])] + " " +
                        Math.round(d.daily.temperature_2m_max[n]) + "° / " +
                        Math.round(d.daily.temperature_2m_min[n]) + "°");
                })))
    );
}

function weatherBar() {
    const bar = h("section", {
        class: "wxbar", id: "wxbar",
        "aria-label": tr("wx.title"), "aria-live": "polite"
    });

    if (WX.data) {                       // dati già in memoria: nessuna attesa
        fillWeatherBar(bar, WX.data);
        return bar;
    }

    bar.append(h("div", { class: "wxbar-inner" }, "⏳ " + tr("wx.loading")));

    loadWeather()
        .then((data) => {
            WX.data = data;
            const el = document.getElementById("wxbar");
            if (el) fillWeatherBar(el, data);
        })
        .catch(() => {
            const el = document.getElementById("wxbar");
            if (el) el.remove();         // nessun meteo: la barra sparisce
        });

    return bar;
}


/* ---------- 6. CONTENUTO DELLE PAGINE ---------- */

const RENDER = {

    home() {
        const gallery = h("div", { class: "gallery" });
        for (let n = 1; n <= CONFIG.galleryCount; n++) {
            const img = safeImg("images/gallery" + n + ".jpg", CONFIG.name + " " + n);
            img.addEventListener("click", () => openLightbox(img.src, img.alt));
            gallery.append(img);
        }
        return [
            h("p", { class: "intro" }, tr("ui.intro")),
             //weatherWidget(),
            h("nav", { class: "dashboard" },
                PAGES.slice(1).map((p) =>
                    h("a", { class: "tile", href: p.file },
                        //h("span", { class: "tile-icon" }, p.icon),
                        iconEl(p.icon, "tile-icon", p.emoji),
                        h("span", null, tr("p." + p.id + ".0"))))),
            h("h2", { class: "section-title" }, tr("ui.gallery")),
            gallery
        ];
    },

    wifi() {
        const box = h("article", { class: "card card-center" },
            h("div", { class: "info-row" }, h("span", null, tr("ui.network")), h("strong", null, CONFIG.wifiSsid)),
            h("div", { class: "info-row" }, h("span", null, tr("ui.password")), h("strong", null, CONFIG.wifiPassword)),
            h("button", { class: "btn", type: "button", onclick: copyPassword }, "📋 " + tr("ui.copy")));
        const qrText = h("p", { class: "muted" }, tr("wifiQr"));
        box.append(safeImg("images/wifi-qr.png", "QR Wi-Fi", "qr", () => { qrText.remove(); return box.querySelector(".qr"); }), qrText);
        return [box];
    },

    checkin() {
        const figure = h("figure", { class: "photo" });
        figure.append(
            safeImg("images/keybox.jpg", tr("checkin.photo"), null, () => figure),
            h("figcaption", null, tr("checkin.photo")));
        return [
            badge(tr("checkin.time"), CONFIG.checkinTime),
            h("div", { class: "split" },
                h("article", { class: "card" },
                    list(tr("checkin.steps"), "steps"),
                    h("p", { class: "note" }, "🔐 " + tr("checkin.note"))),
                figure)
        ];
    },

    checkout: () => [
        badge(tr("checkout.time"), CONFIG.checkoutTime),
        h("article", { class: "card" }, list(tr("checkout.items")))
    ],

    rules: () => [h("article", { class: "card" }, list(tr("rules"), "plain"))],

    directions: () => [
        grid([
            ...[["✈️", "airport", "Aeroporto di Torino"],
                ["🚆", "portanuova", "Stazione Torino Porta Nuova"],
                ["🚆", "portasusa", "Stazione Torino Porta Susa"]]
                .map(([icon, key, origin]) => card({
                    icon, title: tr("dir." + key + ".0"), text: tr("dir." + key + ".1"),
                    href: mapsRoute(origin), label: tr("ui.route") })),
            card({ icon: "🚇", title: tr("dir.metro.0"), text: tr("dir.metro.1"),
                   href: nearHome("stazione metropolitana"), label: tr("ui.maps") })
        ]),
        h("p", { class: "center" }, extLink(mapsSearch(CONFIG.address), "📍 " + tr("dir.address")))
    ],

    parking: () => [grid([
        card({ icon: "🅿️", title: tr("park.street.0"), text: tr("park.street.1"),
               href: mapsSearch(CONFIG.address), label: tr("ui.maps") }),
        card({ icon: "🏢", title: tr("park.private.0"), text: tr("park.private.1"),
               href: nearHome("parcheggio custodito"), label: tr("ui.maps") })
    ])],

    /*
    attractions: () => [grid([
        ["🏛️", "mole", "Mole Antonelliana, Torino"],
        ["🏺", "egizio", "Museo Egizio, Torino"],
        ["👑", "palazzo", "Palazzo Reale, Torino"],
        ["🌳", "valentino", "Parco del Valentino, Torino"],
        ["🏰", "venaria", "Reggia di Venaria Reale"],
        ["⚽", "stadium", "Allianz Stadium, Torino"]
    ].map(([icon, key, q]) => card({
        icon, title: tr("attr." + key + ".0"), text: tr("attr." + key + ".1"),
        href: mapsSearch(q), label: tr("ui.maps") })))],
    */
    attractions: () => [grid([
        ["images/icons/mole.png",      "🏛️", "mole",      "Mole Antonelliana, Torino"],
        ["images/icons/egizio.png",    "🏺", "egizio",    "Museo Egizio, Torino"],
        ["images/icons/palazzo.png",   "👑", "palazzo",   "Palazzo Reale, Torino"],
        ["images/icons/valentino.png", "🌳", "valentino", "Parco del Valentino, Torino"],
        ["images/icons/venaria.png",   "🏰", "venaria",   "Reggia di Venaria Reale"],
        ["images/icons/stadium.png",   "⚽", "stadium",   "Allianz Stadium, Torino"]
    ].map(([icon, fallback, key, q]) => card({
        icon, fallback,
        title: tr("attr." + key + ".0"),
        text: tr("attr." + key + ".1"),
        href: mapsSearch(q),
        label: tr("ui.maps")
    })))],

    restaurants: () => [grid([
        ["☕", "breakfast", "bar colazione pasticceria"],
        ["🍕", "pizza", "pizzeria"],
        ["🍝", "restaurant", "ristorante"],
        ["🍹", "aperitivo", "aperitivo"]
    ].map(([icon, key, q]) => card({
        icon, title: tr("food." + key + ".0"), text: tr("food." + key + ".1"),
        href: nearHome(q), label: tr("ui.maps") })))],

    supermarkets: () => [grid(
        ["Esselunga", "Carrefour", "Lidl", "Conad"].map((brand) => card({
            icon: "🛒", title: brand, text: tr("shop"),
            href: nearHome("supermercato " + brand), label: tr("ui.maps") })))],

    emergency: () => [grid([
        ...["112", "113", "115", "118"].map((n) => card({
            title: h("span", { class: "number" }, n), text: tr("em.n" + n),
            href: "tel:" + n, label: "📞 " + tr("ui.call"), external: false })),
        card({ icon: "🏥", title: tr("em.hospital.0"), text: tr("em.hospital.1"),
               href: nearHome("pronto soccorso"), label: tr("ui.maps") }),
        card({ icon: "💊", title: tr("em.pharmacy.0"), text: tr("em.pharmacy.1"),
               href: nearHome("farmacia"), label: tr("ui.maps") })
    ])],

    review: () => [h("article", { class: "card card-center" },
        h("div", { class: "stars" }, "★★★★★"),
        h("p", null, tr("review.text")),
        extLink(CONFIG.reviewUrl, "⭐ " + tr("review.button"), "btn btn-lg"))]
};

/* ---------- 6. LAYOUT COMUNE ---------- */

function languageBar() {
    return h("div", { class: "langs", role: "group", "aria-label": "Language" },
        LANGS.map((l) => {
            const button = h("button", {
                type: "button", class: "lang" + (l.code === lang ? " active" : ""),
                title: l.label, "aria-label": l.label, "aria-pressed": String(l.code === lang),
                onclick: () => setLanguage(l.code)
            });
            const img = h("img", { src: "images/flags/" + l.flag + ".svg", alt: "" });
            img.addEventListener("error", () => { button.textContent = l.emoji; });
            button.append(img);
            return button;
        }));
}

function render() {
    const pageId = document.body.dataset.page || "home";
    const index = Math.max(0, PAGES.findIndex((p) => p.id === pageId));
    const page = PAGES[index];
    const prev = PAGES[index - 1];
    const next = PAGES[index + 1];
    const isHome = page.id === "home";
    const title = tr("p." + page.id + ".0");

    document.documentElement.lang = lang;
    document.title = isHome ? CONFIG.name : title + " | " + CONFIG.name;

    const header = h("header", { class: "topbar" },
        h("a", { class: "brand", href: "index.html" },
            //h("span", { class: "brand-icon" }, "🏠"),
            iconEl("images/icons/logo.png", "brand-icon", "🏠"),
            h("span", { class: "brand-name" }, CONFIG.name)),
        languageBar());

    const hero = h("section", { class: "hero" + (isHome ? " hero-home" : "") },
        h("div", { class: "hero-inner" },
            //h("span", { class: "hero-icon" }, page.icon),
            iconEl(page.icon, "hero-icon", page.emoji),
            h("h1", null, title),
            h("p", null, isHome ? CONFIG.name + " · " + tr("p.home.1") : tr("p." + page.id + ".1"))));
    hero.style.setProperty("--hero", "url('images/hero-" + page.id + ".jpg')");

    const wxBar = weatherBar();

    /* CORREZIONE 1: esegue la funzione della pagina corrente */
    const content = RENDER[page.id] ? RENDER[page.id]() : [];
    const main = h("main", { class: "container" }, content);

    /* CORREZIONE 2: nessun pager nella Home (niente "false") */
    const pager = isHome ? null : h("nav", { class: "pager" },
        prev ? h("a", { href: prev.file }, "← " + tr("p." + prev.id + ".0")) : h("span"),
        h("a", { class: "pager-home", href: "index.html" }, "🏠 " + tr("ui.home")),
        next ? h("a", { class: "pager-next", href: next.file }, tr("p." + next.id + ".0") + " →") : h("span"));

    const footer = h("footer", { class: "footer" },
        h("strong", null, CONFIG.name),
        h("span", null, CONFIG.address),
        extLink(whatsappUrl(), "💬 " + tr("ui.wa"), ""));

    const waFloat = h("a", { class: "wa-float", href: whatsappUrl(), target: "_blank",
        rel: "noopener", "aria-label": "WhatsApp" }, "💬");

    const toast = h("div", { class: "toast", id: "toast", role: "status", "aria-live": "polite" });

    document.getElementById("app").replaceChildren(
        ...[header, hero, wxBar, main, pager, footer, waFloat, toast].filter(Boolean));
}
/* ---------- 7. FUNZIONI INTERATTIVE ---------- */

let toastTimer;

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2000);
}

async function copyPassword() {
    try {
        await navigator.clipboard.writeText(CONFIG.wifiPassword);
    } catch (e) {
        const area = h("textarea");
        area.value = CONFIG.wifiPassword;
        document.body.append(area);
        area.select();
        document.execCommand("copy");
        area.remove();
    }
    showToast(tr("ui.copied"));
}

function openLightbox(src, alt) {
    const box = h("div", { class: "lightbox", onclick: () => box.remove() }, h("img", { src, alt }));
    document.body.append(box);
}

/* Chiude la galleria con il tasto Esc */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll(".lightbox").forEach((b) => b.remove());
});

/* Sincronizza la lingua se è cambiata in un'altra scheda */
window.addEventListener("storage", (e) => {
    if (e.key === CONFIG.storageKey && T[e.newValue] && e.newValue !== lang) {
        lang = e.newValue;
        render();
    }
});

/* ---------- 8. AVVIO ---------- */

lang = loadLang();
render();