/* =====================================================
   Crevacuore Apartment – translations.js
===================================================== */

const TRANSLATIONS = {

    /* ===================== ITALIANO ===================== */
    it: {
        ui: {
            home: "Home", route: "Calcola percorso", maps: "Apri in Maps",
            whatsapp: "Scrivici su WhatsApp", copy: "Copia password",
            copied: "Password copiata!", network: "Rete", password: "Password",
            gallery: "Galleria", call: "Chiama"
        },
        home: {
            title: "Benvenuti",
            subtitle: "La vostra casa a Torino",
            intro: "Scegliete un argomento: troverete tutte le informazioni utili per il vostro soggiorno."
        },
        wifi: {
            title: "Wi-Fi",
            subtitle: "Connessione veloce in tutto l'appartamento",
            qr: "Inquadrate il QR code con la fotocamera per connettervi automaticamente."
        },
        checkin: {
            title: "Check-in",
            subtitle: "Come entrare nell'appartamento",
            time: "Check-in dalle",
            steps: [
                "Raggiungete Via Crevacuore 45, Torino.",
                "Individuate la cassetta di sicurezza delle chiavi (vedi foto).",
                "Inserite il codice che vi abbiamo inviato.",
                "Aprite lo sportello e prendete le chiavi.",
                "Richiudete la cassetta e mescolate le cifre del codice."
            ],
            note: "Il codice della cassetta vi verrà inviato su WhatsApp prima dell'arrivo.",
            photo: "Cassetta chiavi"
        },
        checkout: {
            title: "Check-out",
            subtitle: "Prima di partire",
            time: "Check-out entro le",
            items: [
                "Chiudete tutte le finestre e la porta del balcone.",
                "Spegnete luci, aria condizionata e TV.",
                "Lavate o riponete le stoviglie usate.",
                "Gettate i rifiuti nei contenitori della raccolta differenziata.",
                "Rimettete le chiavi nella cassetta e mescolate il codice.",
                "Mandateci un messaggio su WhatsApp quando partite."
            ]
        },
        rules: {
            title: "Regole della casa",
            subtitle: "Per un soggiorno sereno per tutti",
            items: [
                "🚭 Vietato fumare all'interno.",
                "🎉 Non sono ammesse feste o eventi.",
                "🔇 Silenzio dalle 22:00 alle 8:00.",
                "👥 Possono soggiornare solo gli ospiti registrati.",
                "♻️ Rispettate la raccolta differenziata.",
                "💡 Spegnete luci e climatizzatore quando uscite."
            ]
        },
        directions: {
            title: "Come arrivare",
            subtitle: "Via Crevacuore 45, Torino",
            address: "Apri l'indirizzo in Maps",
            airport: { t: "Aeroporto di Torino", d: "Collegamenti in bus e treno verso il centro. Calcolate il percorso aggiornato con i mezzi pubblici." },
            portanuova: { t: "Stazione Porta Nuova", d: "Stazione principale, servita dalla metropolitana M1." },
            portasusa: { t: "Stazione Porta Susa", d: "Stazione dell'alta velocità, servita dalla metropolitana M1." },
            metro: { t: "Metropolitana", d: "Trovate la stazione della metro più vicina all'appartamento." }
        },
        parking: {
            title: "Parcheggi",
            subtitle: "Dove lasciare l'auto",
            street: { t: "Parcheggio gratuito in strada", d: "Parcheggio gratuito nelle vie intorno all'appartamento. Controllate sempre i cartelli (pulizia strade)." },
            private: { t: "Parcheggi custoditi", d: "Informazioni in arrivo. Nel frattempo cercate i parcheggi più vicini su Maps." }
        },
        attractions: {
            title: "Attrazioni",
            subtitle: "Il meglio di Torino",
            mole: { t: "Mole Antonelliana", d: "Simbolo di Torino e sede del Museo Nazionale del Cinema." },
            egizio: { t: "Museo Egizio", d: "Una delle più importanti collezioni egizie al mondo." },
            palazzo: { t: "Palazzo Reale", d: "Storica residenza dei Savoia in Piazza Castello." },
            valentino: { t: "Parco del Valentino", d: "Il grande parco sul Po, ideale per una passeggiata." },
            venaria: { t: "Reggia di Venaria", d: "Residenza reale patrimonio UNESCO con splendidi giardini." },
            stadium: { t: "Allianz Stadium", d: "Lo stadio della Juventus, con museo e tour." }
        },
        restaurants: {
            title: "Ristoranti",
            subtitle: "Mangiare bene vicino a casa",
            breakfast: { t: "Colazione", d: "Bar e pasticcerie per caffè e brioche." },
            pizza: { t: "Pizza", d: "Pizzerie vicine all'appartamento." },
            restaurant: { t: "Ristorante", d: "Cucina piemontese e italiana." },
            aperitivo: { t: "Aperitivo", d: "Il rito torinese dell'aperitivo." }
        },
        supermarkets: {
            title: "Supermercati",
            subtitle: "La spesa vicino a casa",
            d: "Trovate il punto vendita più vicino all'appartamento."
        },
        emergency: {
            title: "Emergenze",
            subtitle: "Numeri utili",
            n112: "Numero unico di emergenza", n113: "Polizia",
            n115: "Vigili del fuoco", n118: "Emergenza sanitaria",
            hospital: { t: "Ospedale", d: "Pronto soccorso più vicino." },
            pharmacy: { t: "Farmacia", d: "Farmacia più vicina." }
        },
        review: {
            title: "Recensione",
            subtitle: "Vi è piaciuto il soggiorno?",
            text: "La vostra opinione è preziosa per noi e per i futuri ospiti. Bastano pochi secondi!",
            button: "Lascia una recensione su Google"
        }
    },

    /* ===================== ENGLISH ===================== */
    en: {
        ui: {
            home: "Home", route: "Get directions", maps: "Open in Maps",
            whatsapp: "Message us on WhatsApp", copy: "Copy password",
            copied: "Password copied!", network: "Network", password: "Password",
            gallery: "Gallery", call: "Call"
        },
        home: {
            title: "Welcome",
            subtitle: "Your home in Turin",
            intro: "Choose a topic to find everything you need for your stay."
        },
        wifi: {
            subtitle: "Fast internet throughout the apartment",
            qr: "Scan the QR code with your camera to connect automatically."
        },
        checkin: {
            subtitle: "How to get into the apartment",
            time: "Check-in from",
            steps: [
                "Go to Via Crevacuore 45, Turin.",
                "Find the key safe (see photo).",
                "Enter the code we sent you.",
                "Open the key safe and take the keys.",
                "Close the key safe and scramble the code."
            ],
            note: "The key safe code will be sent to you on WhatsApp before your arrival.",
            photo: "Key safe"
        },
        checkout: {
            subtitle: "Before you leave",
            time: "Check-out by",
            items: [
                "Close all windows and the balcony door.",
                "Switch off lights, air conditioning and TV.",
                "Wash or put away used dishes.",
                "Dispose of rubbish in the recycling bins.",
                "Put the keys back in the key safe and scramble the code.",
                "Send us a WhatsApp message when you leave."
            ]
        },
        rules: {
            title: "House rules",
            subtitle: "For a pleasant stay for everyone",
            items: [
                "🚭 No smoking inside.",
                "🎉 No parties or events.",
                "🔇 Quiet hours from 10:00 PM to 8:00 AM.",
                "👥 Only registered guests may stay.",
                "♻️ Please separate your waste for recycling.",
                "💡 Switch off lights and air conditioning when you go out."
            ]
        },
        directions: {
            title: "Getting here",
            address: "Open the address in Maps",
            airport: { t: "Turin Airport", d: "Bus and train connections to the city centre. Get up-to-date public transport directions." },
            portanuova: { t: "Porta Nuova Station", d: "Turin's main station, served by Metro line M1." },
            portasusa: { t: "Porta Susa Station", d: "High-speed rail station, served by Metro line M1." },
            metro: { t: "Metro", d: "Find the metro station closest to the apartment." }
        },
        parking: {
            title: "Parking",
            subtitle: "Where to leave your car",
            street: { t: "Free street parking", d: "Free parking in the streets around the apartment. Always check the signs (street cleaning)." },
            private: { t: "Secure car parks", d: "Details coming soon. Meanwhile, find the nearest car parks on Maps." }
        },
        attractions: {
            title: "Attractions",
            subtitle: "The best of Turin",
            mole: { d: "Symbol of Turin, home to the National Cinema Museum." },
            egizio: { t: "Egyptian Museum", d: "One of the most important Egyptian collections in the world." },
            palazzo: { t: "Royal Palace", d: "Historic residence of the House of Savoy in Piazza Castello." },
            valentino: { t: "Valentino Park", d: "The large park along the Po, perfect for a walk." },
            venaria: { t: "Venaria Royal Palace", d: "UNESCO World Heritage royal residence with beautiful gardens." },
            stadium: { d: "Juventus stadium, with museum and tours." }
        },
        restaurants: {
            title: "Restaurants",
            subtitle: "Eat well close to home",
            breakfast: { t: "Breakfast", d: "Cafés and pastry shops for coffee and croissants." },
            pizza: { t: "Pizza", d: "Pizzerias near the apartment." },
            restaurant: { t: "Restaurant", d: "Piedmontese and Italian cuisine." },
            aperitivo: { t: "Aperitivo", d: "Turin's famous aperitivo tradition." }
        },
        supermarkets: {
            title: "Supermarkets",
            subtitle: "Groceries near home",
            d: "Find the nearest store to the apartment."
        },
        emergency: {
            title: "Emergencies",
            subtitle: "Useful numbers",
            n112: "Single emergency number", n113: "Police",
            n115: "Fire brigade", n118: "Medical emergency",
            hospital: { t: "Hospital", d: "Nearest emergency room." },
            pharmacy: { t: "Pharmacy", d: "Nearest pharmacy." }
        },
        review: {
            title: "Review",
            subtitle: "Did you enjoy your stay?",
            text: "Your feedback means a lot to us and to future guests. It only takes a few seconds!",
            button: "Leave a Google review"
        }
    },

    /* ===================== FRANÇAIS ===================== */
    fr: {
        ui: {
            home: "Accueil", route: "Itinéraire", maps: "Ouvrir dans Maps",
            whatsapp: "Écrivez-nous sur WhatsApp", copy: "Copier le mot de passe",
            copied: "Mot de passe copié !", network: "Réseau", password: "Mot de passe",
            gallery: "Galerie", call: "Appeler"
        },
        home: {
            title: "Bienvenue",
            subtitle: "Votre maison à Turin",
            intro: "Choisissez un thème pour trouver toutes les informations utiles à votre séjour."
        },
        wifi: {
            subtitle: "Connexion rapide dans tout l'appartement",
            qr: "Scannez le QR code avec l'appareil photo pour vous connecter automatiquement."
        },
        checkin: {
            title: "Arrivée",
            subtitle: "Comment entrer dans l'appartement",
            time: "Arrivée à partir de",
            steps: [
                "Rendez-vous Via Crevacuore 45, Turin.",
                "Trouvez la boîte à clés (voir photo).",
                "Saisissez le code que nous vous avons envoyé.",
                "Ouvrez la boîte et prenez les clés.",
                "Refermez la boîte et brouillez le code."
            ],
            note: "Le code de la boîte à clés vous sera envoyé sur WhatsApp avant votre arrivée.",
            photo: "Boîte à clés"
        },
        checkout: {
            title: "Départ",
            subtitle: "Avant de partir",
            time: "Départ avant",
            items: [
                "Fermez toutes les fenêtres et la porte du balcon.",
                "Éteignez les lumières, la climatisation et la TV.",
                "Lavez ou rangez la vaisselle utilisée.",
                "Jetez les déchets dans les bacs de tri sélectif.",
                "Remettez les clés dans la boîte et brouillez le code.",
                "Envoyez-nous un message WhatsApp à votre départ."
            ]
        },
        rules: {
            title: "Règles de la maison",
            subtitle: "Pour un séjour agréable pour tous",
            items: [
                "🚭 Interdiction de fumer à l'intérieur.",
                "🎉 Fêtes et événements interdits.",
                "🔇 Silence de 22h00 à 8h00.",
                "👥 Seuls les voyageurs enregistrés peuvent séjourner.",
                "♻️ Merci de respecter le tri sélectif.",
                "💡 Éteignez lumières et climatisation en sortant."
            ]
        },
        directions: {
            title: "Comment venir",
            address: "Ouvrir l'adresse dans Maps",
            airport: { t: "Aéroport de Turin", d: "Liaisons en bus et en train vers le centre-ville. Calculez l'itinéraire à jour en transports en commun." },
            portanuova: { t: "Gare de Porta Nuova", d: "Gare principale, desservie par la ligne de métro M1." },
            portasusa: { t: "Gare de Porta Susa", d: "Gare grande vitesse, desservie par la ligne de métro M1." },
            metro: { t: "Métro", d: "Trouvez la station de métro la plus proche de l'appartement." }
        },
        parking: {
            title: "Stationnement",
            subtitle: "Où garer votre voiture",
            street: { t: "Stationnement gratuit dans la rue", d: "Stationnement gratuit dans les rues autour de l'appartement. Vérifiez toujours les panneaux (nettoyage des rues)." },
            private: { t: "Parkings surveillés", d: "Informations à venir. En attendant, trouvez les parkings les plus proches sur Maps." }
        },
        attractions: {
            title: "Attractions",
            subtitle: "Le meilleur de Turin",
            mole: { d: "Symbole de Turin et siège du Musée national du cinéma." },
            egizio: { t: "Musée égyptien", d: "L'une des plus importantes collections égyptiennes au monde." },
            palazzo: { t: "Palais royal", d: "Résidence historique de la Maison de Savoie, Piazza Castello." },
            valentino: { t: "Parc du Valentino", d: "Le grand parc au bord du Pô, idéal pour une promenade." },
            venaria: { t: "Palais de la Venaria", d: "Résidence royale classée à l'UNESCO avec de superbes jardins." },
            stadium: { d: "Le stade de la Juventus, avec musée et visites." }
        },
        restaurants: {
            title: "Restaurants",
            subtitle: "Bien manger près de chez vous",
            breakfast: { t: "Petit-déjeuner", d: "Cafés et pâtisseries pour un café et un croissant." },
            pizza: { t: "Pizza", d: "Pizzerias près de l'appartement." },
            restaurant: { t: "Restaurant", d: "Cuisine piémontaise et italienne." },
            aperitivo: { t: "Apéritif", d: "La tradition turinoise de l'aperitivo." }
        },
        supermarkets: {
            title: "Supermarchés",
            subtitle: "Courses près de chez vous",
            d: "Trouvez le magasin le plus proche de l'appartement."
        },
        emergency: {
            title: "Urgences",
            subtitle: "Numéros utiles",
            n112: "Numéro d'urgence unique", n113: "Police",
            n115: "Pompiers", n118: "Urgence médicale",
            hospital: { t: "Hôpital", d: "Service des urgences le plus proche." },
            pharmacy: { t: "Pharmacie", d: "Pharmacie la plus proche." }
        },
        review: {
            title: "Avis",
            subtitle: "Vous avez aimé votre séjour ?",
            text: "Votre avis compte beaucoup pour nous et pour les futurs voyageurs. Cela ne prend que quelques secondes !",
            button: "Laisser un avis Google"
        }
    },

    /* ===================== DEUTSCH ===================== */
    de: {
        ui: {
            home: "Startseite", route: "Route berechnen", maps: "In Maps öffnen",
            whatsapp: "Schreiben Sie uns auf WhatsApp", copy: "Passwort kopieren",
            copied: "Passwort kopiert!", network: "Netzwerk", password: "Passwort",
            gallery: "Galerie", call: "Anrufen"
        },
        home: {
            title: "Willkommen",
            subtitle: "Ihr Zuhause in Turin",
            intro: "Wählen Sie ein Thema – hier finden Sie alle Informationen für Ihren Aufenthalt."
        },
        wifi: {
            title: "WLAN",
            subtitle: "Schnelles Internet in der ganzen Wohnung",
            qr: "Scannen Sie den QR-Code mit der Kamera, um sich automatisch zu verbinden."
        },
        checkin: {
            subtitle: "So kommen Sie in die Wohnung",
            time: "Check-in ab",
            steps: [
                "Gehen Sie zur Via Crevacuore 45, Turin.",
                "Suchen Sie den Schlüsselsafe (siehe Foto).",
                "Geben Sie den Code ein, den wir Ihnen geschickt haben.",
                "Öffnen Sie den Safe und nehmen Sie die Schlüssel.",
                "Schließen Sie den Safe und verstellen Sie den Code."
            ],
            note: "Den Code für den Schlüsselsafe erhalten Sie vor Ihrer Ankunft per WhatsApp.",
            photo: "Schlüsselsafe"
        },
        checkout: {
            subtitle: "Vor der Abreise",
            time: "Check-out bis",
            items: [
                "Schließen Sie alle Fenster und die Balkontür.",
                "Schalten Sie Licht, Klimaanlage und TV aus.",
                "Spülen oder verräumen Sie benutztes Geschirr.",
                "Entsorgen Sie den Müll getrennt in den Recyclingbehältern.",
                "Legen Sie die Schlüssel zurück in den Safe und verstellen Sie den Code.",
                "Schicken Sie uns bei der Abreise eine WhatsApp-Nachricht."
            ]
        },
        rules: {
            title: "Hausregeln",
            subtitle: "Für einen angenehmen Aufenthalt für alle",
            items: [
                "🚭 Rauchen in der Wohnung ist verboten.",
                "🎉 Keine Partys oder Veranstaltungen.",
                "🔇 Nachtruhe von 22:00 bis 8:00 Uhr.",
                "👥 Nur angemeldete Gäste dürfen übernachten.",
                "♻️ Bitte trennen Sie den Müll.",
                "💡 Schalten Sie Licht und Klimaanlage beim Verlassen aus."
            ]
        },
        directions: {
            title: "Anreise",
            address: "Adresse in Maps öffnen",
            airport: { t: "Flughafen Turin", d: "Bus- und Zugverbindungen ins Stadtzentrum. Berechnen Sie die aktuelle Verbindung mit öffentlichen Verkehrsmitteln." },
            portanuova: { t: "Bahnhof Porta Nuova", d: "Hauptbahnhof, angebunden an die U-Bahn-Linie M1." },
            portasusa: { t: "Bahnhof Porta Susa", d: "Hochgeschwindigkeitsbahnhof, angebunden an die U-Bahn-Linie M1." },
            metro: { t: "U-Bahn", d: "Finden Sie die nächstgelegene U-Bahn-Station." }
        },
        parking: {
            title: "Parken",
            subtitle: "Wo Sie Ihr Auto abstellen können",
            street: { t: "Kostenloses Parken an der Straße", d: "Kostenlose Parkplätze in den Straßen rund um die Wohnung. Bitte beachten Sie die Schilder (Straßenreinigung)." },
            private: { t: "Bewachte Parkplätze", d: "Informationen folgen. Finden Sie inzwischen die nächsten Parkplätze in Maps." }
        },
        attractions: {
            title: "Sehenswürdigkeiten",
            subtitle: "Das Beste von Turin",
            mole: { d: "Wahrzeichen Turins und Sitz des Nationalen Filmmuseums." },
            egizio: { t: "Ägyptisches Museum", d: "Eine der bedeutendsten ägyptischen Sammlungen der Welt." },
            palazzo: { t: "Königspalast", d: "Historische Residenz des Hauses Savoyen an der Piazza Castello." },
            valentino: { t: "Valentino-Park", d: "Der große Park am Po, ideal für einen Spaziergang." },
            venaria: { t: "Reggia di Venaria", d: "Königliche Residenz und UNESCO-Welterbe mit herrlichen Gärten." },
            stadium: { d: "Das Stadion von Juventus, mit Museum und Führungen." }
        },
        restaurants: {
            title: "Restaurants",
            subtitle: "Gut essen in der Nähe",
            breakfast: { t: "Frühstück", d: "Cafés und Konditoreien für Kaffee und Croissants." },
            pizza: { t: "Pizza", d: "Pizzerien in der Nähe der Wohnung." },
            restaurant: { t: "Restaurant", d: "Piemontesische und italienische Küche." },
            aperitivo: { t: "Aperitivo", d: "Die Turiner Aperitivo-Tradition." }
        },
        supermarkets: {
            title: "Supermärkte",
            subtitle: "Einkaufen in der Nähe",
            d: "Finden Sie die nächstgelegene Filiale."
        },
        emergency: {
            title: "Notfälle",
            subtitle: "Wichtige Nummern",
            n112: "Europäischer Notruf", n113: "Polizei",
            n115: "Feuerwehr", n118: "Medizinischer Notfall",
            hospital: { t: "Krankenhaus", d: "Nächste Notaufnahme." },
            pharmacy: { t: "Apotheke", d: "Nächste Apotheke." }
        },
        review: {
            title: "Bewertung",
            subtitle: "Hat Ihnen der Aufenthalt gefallen?",
            text: "Ihre Meinung ist uns und zukünftigen Gästen sehr wichtig. Es dauert nur wenige Sekunden!",
            button: "Google-Bewertung schreiben"
        }
    },

    /* ===================== ESPAÑOL ===================== */
    es: {
        ui: {
            home: "Inicio", route: "Ver ruta", maps: "Abrir en Maps",
            whatsapp: "Escríbanos por WhatsApp", copy: "Copiar contraseña",
            copied: "¡Contraseña copiada!", network: "Red", password: "Contraseña",
            gallery: "Galería", call: "Llamar"
        },
        home: {
            title: "Bienvenidos",
            subtitle: "Su casa en Turín",
            intro: "Elija un tema para encontrar toda la información útil para su estancia."
        },
        wifi: {
            subtitle: "Internet rápido en todo el apartamento",
            qr: "Escanee el código QR con la cámara para conectarse automáticamente."
        },
        checkin: {
            subtitle: "Cómo entrar en el apartamento",
            time: "Check-in a partir de las",
            steps: [
                "Diríjase a Via Crevacuore 45, Turín.",
                "Localice la caja de seguridad de las llaves (ver foto).",
                "Introduzca el código que le hemos enviado.",
                "Abra la caja y tome las llaves.",
                "Cierre la caja y desordene el código."
            ],
            note: "Le enviaremos el código de la caja por WhatsApp antes de su llegada.",
            photo: "Caja de llaves"
        },
        checkout: {
            subtitle: "Antes de irse",
            time: "Check-out antes de las",
            items: [
                "Cierre todas las ventanas y la puerta del balcón.",
                "Apague luces, aire acondicionado y TV.",
                "Lave o guarde la vajilla usada.",
                "Tire la basura en los contenedores de reciclaje.",
                "Deje las llaves en la caja y desordene el código.",
                "Envíenos un mensaje por WhatsApp al salir."
            ]
        },
        rules: {
            title: "Normas de la casa",
            subtitle: "Para una estancia agradable para todos",
            items: [
                "🚭 Prohibido fumar en el interior.",
                "🎉 No se permiten fiestas ni eventos.",
                "🔇 Silencio de 22:00 a 8:00.",
                "👥 Solo pueden alojarse los huéspedes registrados.",
                "♻️ Respete la separación de residuos.",
                "💡 Apague luces y aire acondicionado al salir."
            ]
        },
        directions: {
            title: "Cómo llegar",
            address: "Abrir la dirección en Maps",
            airport: { t: "Aeropuerto de Turín", d: "Conexiones en autobús y tren con el centro. Consulte la ruta actualizada en transporte público." },
            portanuova: { t: "Estación Porta Nuova", d: "Estación principal, con parada de la línea de metro M1." },
            portasusa: { t: "Estación Porta Susa", d: "Estación de alta velocidad, con parada de la línea de metro M1." },
            metro: { t: "Metro", d: "Encuentre la estación de metro más cercana al apartamento." }
        },
        parking: {
            title: "Aparcamiento",
            subtitle: "Dónde dejar el coche",
            street: { t: "Aparcamiento gratuito en la calle", d: "Aparcamiento gratuito en las calles alrededor del apartamento. Revise siempre las señales (limpieza de calles)." },
            private: { t: "Aparcamientos vigilados", d: "Información próximamente. Mientras tanto, busque los aparcamientos más cercanos en Maps." }
        },
        attractions: {
            title: "Atracciones",
            subtitle: "Lo mejor de Turín",
            mole: { d: "Símbolo de Turín y sede del Museo Nacional del Cine." },
            egizio: { t: "Museo Egipcio", d: "Una de las colecciones egipcias más importantes del mundo." },
            palazzo: { t: "Palacio Real", d: "Histórica residencia de la Casa de Saboya en Piazza Castello." },
            valentino: { t: "Parque del Valentino", d: "El gran parque junto al Po, ideal para pasear." },
            venaria: { t: "Palacio de Venaria", d: "Residencia real Patrimonio de la UNESCO con espléndidos jardines." },
            stadium: { d: "El estadio de la Juventus, con museo y visitas guiadas." }
        },
        restaurants: {
            title: "Restaurantes",
            subtitle: "Comer bien cerca de casa",
            breakfast: { t: "Desayuno", d: "Cafeterías y pastelerías para café y cruasanes." },
            pizza: { t: "Pizza", d: "Pizzerías cerca del apartamento." },
            restaurant: { t: "Restaurante", d: "Cocina piamontesa e italiana." },
            aperitivo: { t: "Aperitivo", d: "La tradición turinesa del aperitivo." }
        },
        supermarkets: {
            title: "Supermercados",
            subtitle: "Compras cerca de casa",
            d: "Encuentre la tienda más cercana al apartamento."
        },
        emergency: {
            title: "Emergencias",
            subtitle: "Números útiles",
            n112: "Número único de emergencias", n113: "Policía",
            n115: "Bomberos", n118: "Emergencia médica",
            hospital: { t: "Hospital", d: "Urgencias más cercanas." },
            pharmacy: { t: "Farmacia", d: "Farmacia más cercana." }
        },
        review: {
            title: "Reseña",
            subtitle: "¿Le ha gustado su estancia?",
            text: "Su opinión es muy valiosa para nosotros y para los futuros huéspedes. ¡Solo le llevará unos segundos!",
            button: "Dejar una reseña en Google"
        }
    },

    /* ===================== 中文 ===================== */
    zh: {
        ui: {
            home: "首页", route: "查看路线", maps: "在地图中打开",
            whatsapp: "通过 WhatsApp 联系我们", copy: "复制密码",
            copied: "密码已复制！", network: "网络名称", password: "密码",
            gallery: "相册", call: "拨打"
        },
        home: {
            title: "欢迎",
            subtitle: "您在都灵的家",
            intro: "请选择一个主题，查看住宿期间所需的全部信息。"
        },
        wifi: {
            subtitle: "全屋高速网络",
            qr: "用手机相机扫描二维码即可自动连接。"
        },
        checkin: {
            title: "入住",
            subtitle: "如何进入公寓",
            time: "入住时间：自",
            steps: [
                "前往都灵 Via Crevacuore 45。",
                "找到钥匙密码盒（见照片）。",
                "输入我们发送给您的密码。",
                "打开密码盒并取出钥匙。",
                "关上密码盒并打乱密码。"
            ],
            note: "我们会在您到达前通过 WhatsApp 发送密码盒密码。",
            photo: "钥匙密码盒"
        },
        checkout: {
            title: "退房",
            subtitle: "离开之前",
            time: "退房时间：最晚",
            items: [
                "关闭所有窗户和阳台门。",
                "关闭灯光、空调和电视。",
                "清洗或收好用过的餐具。",
                "将垃圾分类投放到回收桶中。",
                "将钥匙放回密码盒并打乱密码。",
                "离开时请通过 WhatsApp 告知我们。"
            ]
        },
        rules: {
            title: "房屋守则",
            subtitle: "让每个人都住得愉快",
            items: [
                "🚭 室内禁止吸烟。",
                "🎉 禁止举办派对或活动。",
                "🔇 22:00 至 8:00 请保持安静。",
                "👥 仅限登记的住客入住。",
                "♻️ 请进行垃圾分类。",
                "💡 外出时请关闭灯光和空调。"
            ]
        },
        directions: {
            title: "交通指南",
            address: "在地图中打开地址",
            airport: { t: "都灵机场", d: "有巴士和火车前往市中心。请查看最新的公共交通路线。" },
            portanuova: { t: "新门火车站 (Porta Nuova)", d: "都灵主火车站，地铁 M1 线可达。" },
            portasusa: { t: "苏萨门火车站 (Porta Susa)", d: "高铁站，地铁 M1 线可达。" },
            metro: { t: "地铁", d: "查找离公寓最近的地铁站。" }
        },
        parking: {
            title: "停车",
            subtitle: "在哪里停车",
            street: { t: "免费路边停车", d: "公寓周边街道可免费停车。请注意查看标志（街道清扫时间）。" },
            private: { t: "看管停车场", d: "信息即将更新。您可以先在地图中查找最近的停车场。" }
        },
        attractions: {
            title: "景点",
            subtitle: "都灵精华",
            mole: { t: "安东内利尖塔", d: "都灵的象征，国家电影博物馆所在地。" },
            egizio: { t: "埃及博物馆", d: "世界上最重要的埃及文物收藏之一。" },
            palazzo: { t: "皇宫", d: "位于城堡广场的萨伏依王室历史宫殿。" },
            valentino: { t: "瓦伦蒂诺公园", d: "波河畔的大型公园，适合散步。" },
            venaria: { t: "威纳利亚皇宫", d: "联合国教科文组织世界遗产，拥有美丽的花园。" },
            stadium: { t: "安联球场", d: "尤文图斯主场，设有博物馆和参观项目。" }
        },
        restaurants: {
            title: "餐厅",
            subtitle: "附近美食",
            breakfast: { t: "早餐", d: "提供咖啡和牛角包的咖啡馆与甜品店。" },
            pizza: { t: "披萨", d: "公寓附近的披萨店。" },
            restaurant: { t: "餐厅", d: "皮埃蒙特及意大利美食。" },
            aperitivo: { t: "开胃酒", d: "都灵著名的 Aperitivo 餐前酒文化。" }
        },
        supermarkets: {
            title: "超市",
            subtitle: "附近购物",
            d: "查找离公寓最近的门店。"
        },
        emergency: {
            title: "紧急情况",
            subtitle: "常用电话",
            n112: "欧洲统一紧急电话", n113: "警察",
            n115: "消防", n118: "医疗急救",
            hospital: { t: "医院", d: "最近的急诊室。" },
            pharmacy: { t: "药店", d: "最近的药店。" }
        },
        review: {
            title: "评价",
            subtitle: "您喜欢这次住宿吗？",
            text: "您的评价对我们和未来的住客都非常重要，只需几秒钟！",
            button: "在 Google 上留下评价"
        }
    }
};