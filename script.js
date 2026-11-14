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
    checkinTime_start: "16:00",
    checkinTime_end: "22:00",
    checkoutTime: "10:00",
    reviewUrl: "https://g.page/r/CS7gSEFVlZXQEAE/review",
    galleryCount: 5,
    defaultLang: "it",
    storageKey: "guestLanguage",
    lat: 45.081118,   // latitudine (sostituisci con quella esatta)
    lon: 7.633269   // longitudine
};

/* ---------- RISTORANTI ---------- */

const MIN_RATING = 4.4;

/* hours: d = giorni (mon, tue, wed, thu, fri, sat, sun; "mon-sat" = intervallo)
   closed: giorni di chiusura separati da virgola */
const RESTAURANTS = [
    {
        name: "ASD Bocciofila Tesoriera - Come a casa",
        category: "restaurant",
        rating: 4.6, reviews: 195, price: "10–20 €",
        phone: "+390115692226", walkMin: 1, carMin: 2,
        address: "Via Crevacuore, 60, 10146 Torino TO",
        photo: "images/restaurants/bocciofila-tesoriera.jpg",
        hours: [{ d: "tue-sun", t: "10:00–23:00" }], closed: "mon",
        desc: {
            it: "Cucina \"come a casa\" in una bocciofila di quartiere, proprio accanto all'appartamento.",
            en: "Home-style cooking in a neighbourhood bocce club, right next to the apartment.",
            fr: "Cuisine « comme à la maison » dans un club de boules de quartier, juste à côté de l'appartement.",
            de: "Hausmannskost in einem Boccia-Club im Viertel, direkt neben der Wohnung.",
            es: "Cocina casera en un club de petanca del barrio, justo al lado del apartamento.",
            zh: "社区滚球俱乐部里的家常菜，就在公寓旁边。"
        }
    },
    {
        name: "Posto a tavola - Catering / Buffet / Chef a domicilio",
        category: "restaurant",
        rating: 4.9, reviews: 67, price: "30–40 €",
        phone: "+393701565610", walkMin: 1, carMin: 1,
        address: "Via Crevacuore, 50, 10146 Torino TO",
        photo: "images/restaurants/posto-a-tavola.jpg",
        hours: [{ d: "mon-sat", t: "09:30–00:00" }, { d: "sun", t: "11:30–00:00" }],
        desc: {
            it: "Catering, buffet e chef a domicilio: ideale per una cena speciale in appartamento.",
            en: "Catering, buffets and private chef at home: perfect for a special dinner in the apartment.",
            fr: "Traiteur, buffets et chef à domicile : idéal pour un dîner spécial dans l'appartement.",
            de: "Catering, Buffets und Koch für zu Hause: ideal für ein besonderes Abendessen in der Wohnung.",
            es: "Catering, bufé y chef a domicilio: ideal para una cena especial en el apartamento.",
            zh: "提供餐饮外包、自助餐和上门厨师服务，适合在公寓里享用一顿特别的晚餐。"
        }
    },
    {
        name: "Pizzeria Da Rosso",
        category: "pizza",
        rating: 4.9, reviews: 57, price: "10–20 €",
        phone: "+390110362125", walkMin: 4, carMin: 2,
        address: "Via Salbertrand, 60, 10146 Torino TO",
        photo: "images/restaurants/da-rosso.jpg",
        hours: [{ d: "tue-sun", t: "18:30–22:30" }], closed: "mon",
        desc: {
            it: "Pizzeria di quartiere, la più vicina all'appartamento. Aperta a cena.",
            en: "Neighbourhood pizzeria, the closest to the apartment. Open for dinner.",
            fr: "Pizzeria de quartier, la plus proche de l'appartement. Ouverte le soir.",
            de: "Pizzeria im Viertel, die nächste zur Wohnung. Abends geöffnet.",
            es: "Pizzería de barrio, la más cercana al apartamento. Abierta para cenar.",
            zh: "离公寓最近的社区披萨店，晚餐时段营业。"
        }
    },
    {
        name: "Pizzeria La Bufala",
        category: "pizza",
        rating: 4.9, reviews: 118, price: "10–20 €",
        phone: "+393408325583", walkMin: 5, carMin: 4,
        address: "Via Carlo Capelli, 36, 10146 Torino TO",
        photo: "images/restaurants/la-bufala.jpg",
        hours: [{ d: "tue-sun", t: "18:30–22:30" }], closed: "mon",
        desc: {
            it: "Pizzeria molto apprezzata dagli ospiti della zona, ideale per la cena.",
            en: "Highly rated local pizzeria, ideal for dinner.",
            fr: "Pizzeria très appréciée du quartier, idéale pour le dîner.",
            de: "Sehr beliebte Pizzeria im Viertel, ideal zum Abendessen.",
            es: "Pizzería muy valorada del barrio, ideal para cenar.",
            zh: "评价很高的社区披萨店，非常适合晚餐。"
        }
    },
    {
        name: "Ristorante Il Tempo Ritrovato",
        category: "restaurant",
        rating: 4.4, reviews: 75, price: "30–40 €",
        phone: "+39011747380", walkMin: 5, carMin: 2,
        address: "Via Passo del Brennero, 2/E, 10146 Torino TO",
        photo: "images/restaurants/tempo-ritrovato.jpg",
        hours: [{ d: "mon-sun", t: "12:00–15:00 · 19:30–22:30" }],
        desc: {
            it: "Ristorante a pochi passi da casa, aperto a pranzo e cena tutti i giorni.",
            en: "Restaurant just steps from the apartment, open for lunch and dinner every day.",
            fr: "Restaurant à deux pas de l'appartement, ouvert midi et soir tous les jours.",
            de: "Restaurant nur wenige Schritte entfernt, täglich mittags und abends geöffnet.",
            es: "Restaurante a pocos pasos del apartamento, abierto a mediodía y por la noche todos los días.",
            zh: "距公寓仅几步之遥的餐厅，每天供应午餐和晚餐。"
        }
    },
    {
        name: "La Piola Dell'Angolo",
        category: "restaurant",
        rating: 4.4, reviews: 465, price: "10–20 €",
        phone: "+393381831459", walkMin: 8, carMin: 3,
        address: "Via Valgioie, 32, 10146 Torino TO",
        photo: "images/restaurants/piola-angolo.jpg",
        hours: [{ d: "mon-sat", t: "09:00–15:00" }], closed: "sun",
        desc: {
            it: "Tipica piola piemontese per colazione e pranzo. Chiusa la sera.",
            en: "Traditional Piedmontese \"piola\" for breakfast and lunch. Closed in the evening.",
            fr: "« Piola » typique du Piémont pour le petit-déjeuner et le déjeuner. Fermée le soir.",
            de: "Typische piemontesische „Piola“ für Frühstück und Mittagessen. Abends geschlossen.",
            es: "Típica \"piola\" piamontesa para desayunar y comer. Cerrada por la noche.",
            zh: "典型的皮埃蒙特小酒馆（Piola），供应早餐和午餐，晚上不营业。"
        }
    },
    {
        name: "Barbagnam",
        category: "restaurant",
        rating: 4.5, reviews: 238, price: "10–20 €",
        phone: "+390119093016", walkMin: 10, carMin: 3,
        address: "Via Valentino Carrera, 99, 10146 Torino TO",
        photo: "images/restaurants/barbagnam.jpg",
        hours: [{ d: "mon-sun", t: "12:00–14:30 · 18:30–22:30" }],
        desc: {
            it: "Locale informale e conveniente, aperto a pranzo e cena tutti i giorni.",
            en: "Casual, good-value spot, open for lunch and dinner every day.",
            fr: "Adresse décontractée et abordable, ouverte midi et soir tous les jours.",
            de: "Ungezwungenes, preiswertes Lokal, täglich mittags und abends geöffnet.",
            es: "Local informal y económico, abierto a mediodía y por la noche todos los días.",
            zh: "休闲实惠的小馆，每天供应午餐和晚餐。"
        }
    },
    {
        name: "Trattoria da Moreno",
        category: "restaurant",
        rating: 4.5, reviews: 493, price: "10–20 €",
        phone: "+390110209719", walkMin: 10, carMin: 3,
        address: "Largo Nicola Fabrizi, 89/A, 10145 Torino TO",
        photo: "images/restaurants/da-moreno.jpg",
        hours: [{ d: "mon-sat", t: "12:00–14:30 · 19:00–22:00" }], closed: "sun",
        desc: {
            it: "Trattoria tradizionale, aperta a pranzo e cena.",
            en: "Traditional trattoria, open for lunch and dinner.",
            fr: "Trattoria traditionnelle, ouverte midi et soir.",
            de: "Traditionelle Trattoria, mittags und abends geöffnet.",
            es: "Trattoria tradicional, abierta a mediodía y por la noche.",
            zh: "传统意式小餐馆，供应午餐和晚餐。"
        }
    },
    {
        name: "Interesting Cucina Cinese",
        category: "restaurant",
        rating: 4.9, reviews: 534, price: "10–20 €",
        phone: "+390115693608", walkMin: 14, carMin: 5,
        address: "C.so Francia, 227/A, 10146 Torino TO",
        photo: "images/restaurants/interesting.jpg",
        hours: [
            { d: "mon", t: "12:00–15:00 · 18:45–22:30" },
            { d: "wed-sun", t: "12:00–15:00 · 18:45–22:30" }
        ],
        closed: "tue",
        desc: {
            it: "Cucina cinese tra le più apprezzate della zona.",
            en: "One of the most highly rated Chinese restaurants in the area.",
            fr: "L'un des restaurants chinois les mieux notés du quartier.",
            de: "Eines der am besten bewerteten chinesischen Restaurants der Gegend.",
            es: "Uno de los restaurantes chinos mejor valorados de la zona.",
            zh: "附近评价最高的中餐馆之一。"
        }
    },
    {
        name: "Antiche Sere",
        category: "restaurant",
        rating: 4.6, reviews: 1888, price: "30–40 €",
        phone: "+390113854347", walkMin: 26, carMin: 8,
        address: "Via Cenischia, 9, 10139 Torino TO",
        photo: "images/restaurants/antiche-sere.jpg",
        hours: [{ d: "mon-sat", t: "19:30–22:30" }], closed: "sun",
        desc: {
            it: "Ristorante molto amato dai torinesi, aperto solo a cena: meglio prenotare.",
            en: "Much-loved by locals, open for dinner only: booking recommended.",
            fr: "Très apprécié des Turinois, ouvert uniquement le soir : réservation conseillée.",
            de: "Bei Einheimischen sehr beliebt, nur abends geöffnet: Reservierung empfohlen.",
            es: "Muy querido por los turineses, abierto solo para cenar: se recomienda reservar.",
            zh: "深受都灵本地人喜爱，仅供应晚餐，建议提前预订。"
        }
    },
    {
        name: "Il Ristovolante",
        category: "restaurant",
        rating: 4.5, reviews: 757, price: "30–40 €",
        phone: "+393296258118", walkMin: 35, carMin: 7,
        address: "Via Vigone, 49E, 10139 Torino TO",
        photo: "images/restaurants/ristovolante.jpg",
        hours: [{ d: "mon-sat", t: "18:30–23:30" }, { d: "sun", t: "12:00–15:00" }],
        desc: {
            it: "Ideale per una cena speciale. La domenica è aperto solo a pranzo.",
            en: "Ideal for a special dinner. On Sundays it is open for lunch only.",
            fr: "Idéal pour un dîner spécial. Le dimanche, ouvert uniquement le midi.",
            de: "Ideal für ein besonderes Abendessen. Sonntags nur mittags geöffnet.",
            es: "Ideal para una cena especial. Los domingos abre solo a mediodía.",
            zh: "适合享用一顿特别的晚餐。周日仅供应午餐。"
        }
    }
];

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
    { id: "review",       file: "review.html",        icon: "images/icons/review.png",       emoji: "⭐" },
    { id: "ascensore",    file: "ascensore.html",     icon: "images/icons/ascensore.png",    emoji: "🛗" }
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
            checkin: ["Self Check-in", "Come entrare nell'appartamento"],
            checkout: ["Check-out", "Prima di partire"],
            rules: ["Regole della casa", "Per un soggiorno sereno per tutti"],
            directions: ["Come arrivare", "Via Crevacuore 45, Torino"],
            parking: ["Parcheggi", "Dove lasciare l'auto"],
            attractions: ["Attrazioni", "Il meglio di Torino"],
            restaurants: ["Ristoranti", "Mangiare bene vicino a casa"],
            supermarkets: ["Supermercati", "La spesa vicino a casa"],
            emergency: ["Emergenze", "Numeri utili"],
            review: ["Recensione", "Vi è piaciuto il soggiorno?"],
            ascensore: ["Ascensore", "Usa Il tuo Ascensore con cura"]
        },
        wifiQr: "Inquadrate il QR code con la fotocamera per connettervi automaticamente.",
        checkin: {
            start_label: "Check-in dalle",
            end_label  : "alle",
            checkInfos : "Sempre comunicare l'orario esatto di arrivo in struttura.è vietato il suonare il campanello dei vicini.",
            steps: ["Raggiungete Via Crevacuore 45, Torino.",
                    "Arrivati all’indirizzo suonare il campanello al nome « Casa Leonel». Il portone si aprirà",
                    "L’appartamento si trova al 4º piano porta n°10",
                    "Davanti l'ingresso Individuate la cassetta delle chiavi (vedi foto).",
                    "Digitare il codice che vi abbiamo inviato.",
                    "Aprite lo sportello e prendete le chiavi. Poi Richiudete la cassetta",
                    "Aprite la porta d'ingresso dell'appartamento con le chiavi recuperati",
                "Il vostro mazzo di chiavi composto da : Chiave per la porta blindata - chiave per il portone giù - chiave per la Camera "],
            note: "Il codice della cassetta vi verrà inviato su WhatsApp prima dell'arrivo.",
            photo: "Cassetta chiavi"
        },
        checkout: {
            time: "Check-out entro le",
            items: ["Chiudete tutte le finestre e la porta del balcone.",
                    "Spegnete luci, aria condizionata e TV.",
                    "Lavate o riponete le stoviglie usate.",
                    "Gettate i rifiuti nei contenitori della raccolta differenziata.",
                    "Rimettete le chiavi nella cassetta e chiudere usando il vostro codice.",
                    "Mandateci un messaggio su WhatsApp quando partite."]
        },
        rules: ["🔇 Silenzio dalle 22:00 alle 8:00: I VICINI sono molto sensibili a piccoli rumori",
                "🔇 Silenzio dalle 22:00 alle 8:00: Ridurre il volume di TV e musica.",
                "🔇 Dalle 22:00, Evitare di spostare mobili e Letto senza adeguato controllo.",
                "🚽 è consentito gettare nel WC esclusivamente la carta igienica fornita 🧻",
                "🚭 Vietato fumare all'interno dell'appartamento.", "🎉 Non sono ammesse feste o eventi.",
                 "👥 Possono soggiornare solo gli ospiti registrati.",
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
                  button: "Lascia una recensione su Google" },
        ascensore: { text: "Il palazzo di Via Crevacuore 45, dove si trova il vostro appartamento è predisposto di un nuovo Ascensore con i lavori in corso",
            button : "Ascensore Non Disponibile!" }
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
            review: ["Review", "Did you enjoy your stay?"],
            ascensore: ["Elevator", "Use your elevator with care"]
        },
        wifiQr: "Scan the QR code with your camera to connect automatically.",
        checkin: {
            start_label: "Check-in from",
            end_label  : "to",
            checkInfos : "Always communicate your exact arrival time at the property. It is forbidden to ring the neighbors' doorbells.",
            steps: ["Go to Via Crevacuore 45, Turin.",
                    "Upon arrival, ring the doorbell labeled <Casa Leonel> The main door will open.",
                    "The apartment is located on the 4th floor, door no. 10.",
                    "Locate the key box near the entrance (see photo).",
                    "Enter the code that we have sent you.",
                    "Open the box and take the keys, then close the box again.",
                    "Use the keys you have retrieved to open the apartment's entrance door.",
                    "Your set of keys includes: a key for the security door, a key for the main building entrance, and a key for your room."],
            note: "The key safe code will be sent to you on WhatsApp before your arrival.",
            photo: "Key safe"
        },
        checkout: {
            time: "Check-out by",
            items: ["Close all windows and the balcony door.", "Switch off lights, air conditioning and TV.",
                    "Wash or put away used dishes.", "Dispose of rubbish in the recycling bins.",
                    "Put the keys back in the box and lock it using your code.",
                    "Send us a WhatsApp message when you leave."]
        },
        rules: ["🔇 Quiet hours from 10:00 PM to 8:00 AM: The NEIGHBORS are very sensitive to even minor noises.",
                "🔇 Quiet hours from 10:00 PM to 8:00 AM: Please keep the volume of TVs and music low.",
                "🔇 From 10:00 PM onwards, please avoid moving furniture or beds.",
                "🚽 Only the provided toilet paper may be flushed down the toilet. 🧻", 
                "🎉 No parties or events.", "🚭 Smoking is prohibited inside the apartment.",
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
                  button: "Leave a Google review" },
        ascensore: {  text: "The building at Via Crevacuore 45, where your apartment is located, is being fitted with a new elevator; work is currently underway.",
            button : "Elevator Unavailable!" }
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
            review: ["Avis", "Vous avez aimé votre séjour ?"],
            ascensore: ["Ascenseur","Utilisez votre ascenseur avec précaution"]
        },
        wifiQr: "Scannez le QR code avec l'appareil photo pour vous connecter automatiquement.",
        checkin: {
            start_label: "Arrivée à partir de",
            end_label  : "a",
            checkInfos : "Veuillez toujours communiquer votre heure d'arrivée exacte à l'établissement. Il est interdit de sonner chez les voisins.",
            steps: ["Rendez-vous au 45, Via Crevacuore, à Turin.",
                    "Une fois sur place, sonnez à l'interphone au nom de « Casa Leonel ». La porte d'entrée s'ouvrira.",
                    "L'appartement se situe au 4e étage, porte n° 10.",
                    "Devant l'entrée, repérez la boîte à clés (voir photo).",
                    "Saisissez le code que nous vous avons envoyé.",
                    "Ouvrez le compartiment et récupérez les clés. Refermez ensuite la boîte.",
                    "Ouvrez la porte de l'appartement à l'aide des clés récupérées.",
                    "Votre trousseau de clés comprend : une clé pour la porte blindée, une clé pour la porte d'entrée de l'immeuble et une clé pour la chambre."],
            note: "Le code de la boîte à clés vous sera envoyé sur WhatsApp avant votre arrivée.",
            photo: "Boîte à clés"
        },
        checkout: {
            time: "Départ avant",
            items: ["Fermez toutes les fenêtres et la porte du balcon.", "Éteignez les lumières, la climatisation et la TV.",
                    "Lavez ou rangez la vaisselle utilisée.", "Jetez les déchets dans les bacs de tri sélectif.",
                    "Remettez les clés dans la boîte et fermez-la en utilisant votre code.", 
                    "Envoyez-nous un message WhatsApp à votre départ."]
        },
        rules: ["🔇 Silence de 22h00 à 8h00 : les voisins sont très sensibles au moindre bruit.",
                "🔇 Silence de 22h00 à 8h00 : veuillez baisser le volume de la télévision et de la musique.",
               " 🔇 À partir de 22h00, évitez de déplacer les meubles ou le lit sans précaution.",
                "🚽 Seul le papier toilette fourni doit être jeté dans les toilettes 🧻", 
                "🎉 Fêtes et événements interdits.", "🚭 Il est interdit de fumer à l'intérieur de l'appartement.",
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
                  button: "Laisser un avis Google" },
        ascensore: { text: "L'immeuble situé au 45, Via Crevacuore, où se trouve votre appartement, est équipé d'un nouvel ascenseur. Des travaux sont en cours.",
            button : "Ascenseur indisponible !" }
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
            review: ["Bewertung", "Hat Ihnen der Aufenthalt gefallen?"],
            ascensore: ["Aufzug", "Benutzen Sie Ihren Aufzug sorgsam"]
        },
        wifiQr: "Scannen Sie den QR-Code mit der Kamera, um sich automatisch zu verbinden.",
        checkin: {
            start_label: "Check-in ab",
            end_label  : "bis",
            checkInfos : "Bitte teilen Sie stets die genaue Ankunftszeit in der Unterkunft mit. Es ist untersagt, bei den Nachbarn zu klingeln.",
            steps: ["Begeben Sie sich zur Via Crevacuore 45 in Turin.",
                    "Klingeln Sie an der Adresse bei „Casa Leonel“. Die Eingangstür öffnet sich dann.",
                    "Die Wohnung befindet sich im 4. Stock, Tür Nr. 10.",
                    "Suchen Sie vor dem Eingang die Schlüsselbox (siehe Foto).",
                    "Geben Sie den Code ein, den wir Ihnen zugesendet haben.",
                    "Öffnen Sie die Klappe und entnehmen Sie die Schlüssel. Schließen Sie anschließend die Box wieder.",
                    "Öffnen Sie die Wohnungstür mit den entnommenen Schlüsseln.",
                    "Ihr Schlüsselbund besteht aus: einem Schlüssel für die Sicherheitstür, einem Schlüssel für die Hauseingangstür (unten) und einem Schlüssel für das Zimmer."],
            note: "Den Code für den Schlüsselsafe erhalten Sie vor Ihrer Ankunft per WhatsApp.",
            photo: "Schlüsselsafe"
        },
        checkout: {
            time: "Check-out bis",
            items: ["Schließen Sie alle Fenster und die Balkontür.", "Schalten Sie Licht, Klimaanlage und TV aus.",
                    "Spülen oder verräumen Sie benutztes Geschirr.", "Entsorgen Sie den Müll getrennt in den Recyclingbehältern.",
                    "Legen Sie die Schlüssel zurück in den Kasten und schließen Sie ihn mit Ihrem Code.",
                    "Schicken Sie uns bei der Abreise eine WhatsApp-Nachricht."]
        },
        rules: ["🔇 Nachtruhe von 22:00 bis 8:00 Uhr: Die Nachbarn sind sehr empfindlich gegenüber Geräuschen.",
                "🔇 Nachtruhe von 22:00 bis 8:00 Uhr: Bitte reduzieren Sie die Lautstärke von Fernseher und Musik.",
                "🔇 Ab 22:00 Uhr: Bitte keine Möbel oder Betten verschieben (oder nur mit äußerster Vorsicht).",
                "🚽 Es darf ausschließlich das bereitgestellte Toilettenpapier in die Toilette geworfen werden 🧻", 
                "🎉 Keine Partys oder Veranstaltungen.",
                "🚭 Rauchen ist in der Wohnung untersagt.", "👥 Nur angemeldete Gäste dürfen übernachten.",
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
                  button: "Google-Bewertung schreiben" },
        ascensore: { text: "Das Gebäude in der Via Crevacuore 45, in dem sich Ihre Wohnung befindet, wird mit einem neuen Aufzug ausgestattet; die Arbeiten sind derzeit im Gange.",
            button : "Aufzug außer Betrieb!" }
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
            review: ["Reseña", "¿Le ha gustado su estancia?"],
            ascensore: ["Ascensor", "Utilice el ascensor con cuidado"]
        },
        wifiQr: "Escanee el código QR con la cámara para conectarse automáticamente.",
        checkin: {
            start_label: "Check-in a partir de las",
            end_label  : "hasta",
            checkInfos : "Comunica siempre tu hora exacta de llegada. Está prohibido tocar el timbre de los vecinos.",
            steps: ["Dirígete a Via Crevacuore 45, Turín.",
                    "Al llegar, toca el timbre de <Casa Leonel>. La puerta se abrirá.",
                    "El apartamento está en la 4.ª planta, puerta n.º 10.",
                    "Localiza la caja de llaves frente a la entrada (ver foto).",
                    "Introduce el código que te enviamos.",
                    "Abre la puerta y coge las llaves. Cierra la caja.",
                    "Abre la puerta principal del apartamento con las llaves que has recuperado.",
                    "Tu juego de llaves incluye: llave de la puerta de seguridad, llave de la puerta de abajo y llave del dormitorio."],
            note: "Le enviaremos el código de la caja por WhatsApp antes de su llegada.",
            photo: "Caja de llaves"
        },
        checkout: {
            time: "Check-out antes de las",
            items: ["Cierre todas las ventanas y la puerta del balcón.", "Apague luces, aire acondicionado y TV.",
                    "Lave o guarde la vajilla usada.", "Tire la basura en los contenedores de reciclaje.",
                    "Vuelve a guardar las llaves en la caja y ciérrala con tu código.", "Envíenos un mensaje por WhatsApp al salir."]
        },
        rules: ["🔇 Silencio de 22:00 a 8:00: Los vecinos son muy sensibles a los ruidos leves.",
                "🔇 Silencio de 22:00 a 8:00: Baje el volumen de la televisión y la música.",
                "🔇 A partir de las 22:00, evite mover los muebles y la cama sin la supervisión adecuada.",
                "🚽 Solo se permite el papel higiénico proporcionado en el baño. 🧻", 
                "🎉 No se permiten fiestas ni eventos.", "🚭 Está prohibido fumar dentro del apartamento.",
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
                  button: "Dejar una reseña en Google" },
        ascensore: { text: "El edificio situado en Via Crevacuore 45, donde se encuentra su apartamento, está equipado con un nuevo ascensor cuyas obras están en curso.",
            button : "¡Ascensor no disponible!" }
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
            review: ["评价", "您喜欢这次住宿吗？"],
            ascensore: ["電梯", "請小心使用電梯"]
        },
        wifiQr: "用手机相机扫描二维码即可自动连接。",
        checkin: {
             start_label: "入住时间：自",
            end_label  : "至",
            checkInfos : "請務必告知確切的到達時間。禁止按鄰居的門鈴",
            steps: ["前往都靈克雷瓦庫奧雷大街45號（Via Crevacuore 45, Turin）。",
                    "到達地址後，請按“Casa Leonel”的門鈴。門會打開。",
                    "公寓位於4樓，門牌號碼為10。",
                    "找到入口前的鑰匙盒（見圖）。",
                   " 輸入我們發送給您的密碼。",
                    "打開門並取出鑰匙。然後關上鑰匙盒。",
                    "用您取回的鑰匙打開公寓的前門。",
                    "您的鑰匙包括：安全門鑰匙、樓下門鑰匙和臥室鑰匙。"],
            note: "我们会在您到达前通过 WhatsApp 发送密码盒密码。",
            photo: "钥匙密码盒"
        },
        checkout: {
            time: "退房时间：最晚",
            items: ["关闭所有窗户和阳台门。", "关闭灯光、空调和电视。", "清洗或收好用过的餐具。",
                    "将垃圾分类投放到回收桶中。", "把鑰匙放回盒子裡，用你的密碼鎖上。", "离开时请通过 WhatsApp 告知我们。"]
        },
        rules: ["🔇 晚上10點至早上8點請保持安靜：鄰居對細微噪音非常敏感。",
                "🔇 晚上10點至早上8點請保持安靜：請調低電視和音樂的音量。",
               " 🔇 晚上10點後，請勿在沒有成人監護的情況下移動家具和床鋪。",
               " 🚽 衛生間僅允許使用提供的衛生紙。 🧻",
                "🚭 公寓內禁止吸煙。", "🎉 禁止举办派对或活动。", "🔇 22:00 至 8:00 请保持安静。",
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
        review: { text: "您的评价对我们和未来的住客都非常重要，只需几秒钟！", button: "在 Google 上留下评价" },
        ascensore: { text: "您的公寓所在的 Via Crevacuore 45 號大樓配備了一部正在施工的新電梯。",
            button : "電梯不可用！" }
    }
};

/* ---------- Etichette scheda ristoranti ---------- */
const RC_TEXT = {
    it: { reviews: "recensioni", price: "Prezzo medio", hours: "Orari", go: "Indicazioni", call: "Chiama",
          walk: "a piedi", car: "in auto", closed: "Chiuso", daily: "Tutti i giorni",
          none: "Nessun ristorante disponibile." },
    en: { reviews: "reviews", price: "Average price", hours: "Opening hours", go: "Directions", call: "Call",
          walk: "walk", car: "by car", closed: "Closed", daily: "Every day",
          none: "No restaurants available." },
    fr: { reviews: "avis", price: "Prix moyen", hours: "Horaires", go: "Itinéraire", call: "Appeler",
          walk: "à pied", car: "en voiture", closed: "Fermé", daily: "Tous les jours",
          none: "Aucun restaurant disponible." },
    de: { reviews: "Bewertungen", price: "Durchschnittspreis", hours: "Öffnungszeiten", go: "Route", call: "Anrufen",
          walk: "zu Fuß", car: "mit dem Auto", closed: "Geschlossen", daily: "Täglich",
          none: "Keine Restaurants verfügbar." },
    es: { reviews: "reseñas", price: "Precio medio", hours: "Horario", go: "Cómo llegar", call: "Llamar",
          walk: "a pie", car: "en coche", closed: "Cerrado", daily: "Todos los días",
          none: "No hay restaurantes disponibles." },
    zh: { reviews: "条评价", price: "人均价格", hours: "营业时间", go: "导航", call: "拨打",
          walk: "步行", car: "驾车", closed: "休息", daily: "每天",
          none: "暂无餐厅信息。" }
};
Object.keys(RC_TEXT).forEach((code) => { if (T[code]) T[code].rc = RC_TEXT[code]; });

const PK_TEXT = {
    it: { price: "Tariffa", hours: "Orari", go: "Indicazioni", type: { street: "In strada", garage: "Custodito" } },
    en: { price: "Rate", hours: "Opening hours", go: "Directions", type: { street: "On street", garage: "Attended" } },
    fr: { price: "Tarif", hours: "Horaires", go: "Itinéraire", type: { street: "Dans la rue", garage: "Surveillé" } },
    de: { price: "Tarif", hours: "Öffnungszeiten", go: "Route", type: { street: "Straße", garage: "Bewacht" } },
    es: { price: "Tarifa", hours: "Horario", go: "Cómo llegar", type: { street: "En la calle", garage: "Vigilado" } },
    zh: { price: "收费", hours: "开放时间", go: "导航", type: { street: "路边", garage: "看管停车场" } }
};
Object.keys(PK_TEXT).forEach((code) => { if (T[code]) T[code].pk = PK_TEXT[code]; });

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

const checkInBadge = (start_label, end_label,start_time, end_time) =>
    h("div", { class: "time-badge" }, start_label  + " ", h("strong", null, start_time), " "+ end_label + " ",  h("strong", null, end_time));

const checkInfos = (text) =>
    h("div", { class: "time-badge" },text + " ");

const checkOutBadge = (label, time) =>
     h("div", { class: "time-badge" }, label  + " ", h("strong", null, time));

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

/* ---------- Card ristorante ---------- */

/* Testo nella lingua attuale (oggetto {it, en, ...} oppure stringa) */
function loc(value) {
    if (!value || typeof value === "string") return value || "";
    return value[lang] || value.en || value[CONFIG.defaultLang] || "";
}

function starBar(rating) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    return "★".repeat(full) + (half ? "⯪" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
}


/* ---------- Orari tradotti automaticamente ---------- */

const DAY_KEYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function dayName(key) {
    const i = DAY_KEYS.indexOf(key.trim());
    if (i < 0) return key;
    const locale = lang === "zh" ? "zh-CN" : lang;
    const name = new Date(2024, 0, 1 + i)                // 1 gennaio 2024 = lunedì
        .toLocaleDateString(locale, { weekday: "short" });
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function dayRange(d) {
    if (d === "mon-sun") return tr("rc.daily");
    return d.split("-").map(dayName).join("–");
}

function hoursLines(r) {
    const lines = (r.hours || []).map((x) =>
        h("div", null, h("span", { class: "rcard-days" }, dayRange(x.d) + ": "), x.t));
    if (r.closed) {
        lines.push(h("div", { class: "rcard-closed" },
            tr("rc.closed") + ": " + r.closed.split(",").map(dayName).join(", ")));
    }
    return lines;
}

/* ---------- Percorso: a piedi se vicino, altrimenti in auto ---------- */

const routeTo = (destination, mode) =>
    "https://www.google.com/maps/dir/?api=1" +
    "&origin=" + encodeURIComponent(CONFIG.address) +
    "&destination=" + encodeURIComponent(destination) +
    "&travelmode=" + mode;

/* ---------- Card ristorante ---------- */

function restaurantCard(r) {
    const media = h("div", { class: "rcard-media" });
    const img = h("img", { src: r.photo, alt: r.name, loading: "lazy" });
    img.addEventListener("error", () => {
        img.remove();
        media.classList.add("rcard-noimg");
        media.textContent = "🍽️";
    });
    media.append(img, h("span", { class: "rcard-badge" }, tr("food." + r.category + ".0")));

    const mode = r.walkMin && r.walkMin <= 15 ? "walking" : "driving";

    return h("article", { class: "card rcard" },
        media,
        h("div", { class: "rcard-body" },
            h("h3", null, r.name),
            h("div", { class: "rcard-rating" },
                h("strong", null, r.rating.toFixed(1).replace(".", lang === "en" || lang === "zh" ? "." : ",")),
                h("span", { class: "rcard-stars", "aria-hidden": "true" }, starBar(r.rating)),
                h("span", { class: "muted" }, "(" + r.reviews + " " + tr("rc.reviews") + ")")),
            h("div", { class: "rcard-travel" },
                h("span", null, "🚶 " + r.walkMin + " min " + tr("rc.walk")),
                h("span", null, "🚗 " + r.carMin + " min " + tr("rc.car"))),
            h("p", null, loc(r.desc)),
            h("dl", { class: "rcard-info" },
                h("dt", null, "💶 " + tr("rc.price")), h("dd", null, r.price),
                h("dt", null, "🕒 " + tr("rc.hours")), h("dd", null, hoursLines(r))),
            h("div", { class: "rcard-actions" },
                h("a", { class: "btn btn-outline", href: "tel:" + r.phone }, "📞 " + tr("rc.call")),
                extLink(routeTo(r.name + ", " + r.address, mode), "📍 " + tr("rc.go"))))
    );
}

/* ---------- Card parcheggio ---------- */

function parkingCard(p) {
    const name = loc(p.name);

    const media = h("div", { class: "rcard-media" });
    const img = h("img", { src: p.photo, alt: name, loading: "lazy" });
    img.addEventListener("error", () => {
        img.remove();
        media.classList.add("rcard-noimg");
        media.textContent = p.type === "street" ? "🅿️" : "🏢";
    });
    media.append(img, h("span", { class: "rcard-badge pk-" + p.type }, tr("pk.type." + p.type)));

    const hours = hoursLines(p);
    const info = [];
    if (p.price)       info.push(h("dt", null, "💶 " + tr("pk.price")), h("dd", null, loc(p.price)));
    if (hours.length)  info.push(h("dt", null, "🕒 " + tr("pk.hours")), h("dd", null, hours));

    /* Parcheggio in strada: apre la zona; custodito: percorso in auto */
    const mapsUrl = p.type === "street"
        ? mapsSearch(p.address)
        : routeTo(name + ", " + p.address, "driving");

        return h("article", { class: "card rcard pcard" },
        media,
        h("div", { class: "rcard-body" },
            h("h3", null, name),
            p.rating && h("div", { class: "rcard-rating" },
                h("strong", null, p.rating.toFixed(1)),
                h("span", { class: "rcard-stars", "aria-hidden": "true" }, starBar(p.rating)),
                p.reviews && h("span", { class: "muted" }, "(" + p.reviews + " " + tr("rc.reviews") + ")")),
            (p.walkMin || p.carMin) && h("div", { class: "rcard-travel" },
                p.walkMin && h("span", null, "🚶 " + p.walkMin + " min " + tr("rc.walk")),
                p.carMin && h("span", null, "🚗 " + p.carMin + " min " + tr("rc.car"))),
            h("p", null, loc(p.desc)),
            info.length && h("dl", { class: "rcard-info" }, info),
            h("div", { class: "rcard-actions" },
                p.phone && h("a", { class: "btn btn-outline", href: "tel:" + p.phone }, "📞 " + tr("rc.call")),
                extLink(mapsUrl, "📍 " + tr("pk.go"))))
    );
}

/* ---------- PARCHEGGI ---------- */
/* name, price e desc possono essere stringhe oppure oggetti tradotti { it, en, ... } */

const PARKINGS = [
    {
        type: "street",
        name: {
            it: "Parcheggio gratuito in strada",
            en: "Free street parking",
            fr: "Stationnement gratuit dans la rue",
            de: "Kostenloses Parken an der Straße",
            es: "Aparcamiento gratuito en la calle",
            zh: "免费路边停车"
        },
        rating: null, reviews: null,
        price: { it: "Gratuito", en: "Free", fr: "Gratuit", de: "Kostenlos", es: "Gratis", zh: "免费" },
        hours: [{ d: "mon-sun", t: "24h" }],
        address: "Via Crevacuore 45, 10146 Torino TO",
        photo: "images/parking/crevacuore.jpg",
        desc: {
            it: "Posti gratuiti nelle vicinanze all'appartamento. Controllate sempre i cartelli per i divieti stradali.",
            en: "Free parking spaces are available near the apartment. Always check the signs for any parking restrictions.",
            fr: "Places gratuites à proximité de l'appartement. Vérifiez toujours les panneaux indiquant les interdictions de stationnement.",
            de: "Kostenlose Parkplätze in der Nähe der Wohnung. Achten Sie stets auf die Beschilderung bezüglich Park- oder Halteverboten.",
            es: "Hay aparcamiento gratuito cerca del apartamento. Consulte siempre las señales de restricciones de tráfico.",
            zh: "公寓附近有免費停車位。請務必留意交通管制標誌。"
        }
    },

    {
        type: "street",
        name: {
            it: "Parcheggio Campanella",
            en: "Campanella Car Park",
            fr: "Parking Campanella",
            de: "Parkplatz Campanella",
            es: "Aparcamiento Campanella",
            zh: "坎帕內拉停車場"
        },
        rating: 5.0, reviews: null,
        price: { it: "Gratuito", en: "Free", fr: "Gratuit", de: "Kostenlos", es: "Gratis", zh: "免费" },
        hours: [{ d: "mon-sun", t: "24h" }],
        walkMin: 3, carMin: 1,
        address: "Parcheggio Campanella, 10146 Torino TO",
        photo: "images/parking/park.jpg",
        desc: {
            it: "Posti gratuiti nelle vicinanze all'appartamento. Controllate sempre i cartelli per i divieti stradali.",
            en: "Free parking spaces are available near the apartment. Always check the signs for any parking restrictions.",
            fr: "Places gratuites à proximité de l'appartement. Vérifiez toujours les panneaux indiquant les interdictions de stationnement.",
            de: "Kostenlose Parkplätze in der Nähe der Wohnung. Achten Sie stets auf die Beschilderung bezüglich Park- oder Halteverboten.",
            es: "Hay aparcamiento gratuito cerca del apartamento. Consulte siempre las señales de restricciones de tráfico.",
            zh: "公寓附近有免費停車位。請務必留意交通管制標誌。"
        }
    },

    {
        type: "street",
        name: {
            it: "Parcheggio Supermercato",
            en: "Supermarket Parking",
            fr: "Parking de supermarché",
            de: "Supermarkt-Parkplatz",
            es: "Aparcamiento de supermercado",
            zh: "超市停車場"
        },
        rating: 1.8, reviews: 4,
        price: { it: "Gratuito", en: "Free", fr: "Gratuit", de: "Kostenlos", es: "Gratis", zh: "免费" },
        hours: [{ d: "mon-sun", t: "24h" }],
        walkMin: 4, carMin: 3,
        address: "Parcheggio comercial, 10146 Torino TO",
        photo: "images/parking/park.jpg",
        desc: {
            it: "Posti gratuiti nelle vicinanze all'appartamento. Controllate sempre i cartelli per i divieti stradali.",
            en: "Free parking spaces are available near the apartment. Always check the signs for any parking restrictions.",
            fr: "Places gratuites à proximité de l'appartement. Vérifiez toujours les panneaux indiquant les interdictions de stationnement.",
            de: "Kostenlose Parkplätze in der Nähe der Wohnung. Achten Sie stets auf die Beschilderung bezüglich Park- oder Halteverboten.",
            es: "Hay aparcamiento gratuito cerca del apartamento. Consulte siempre las señales de restricciones de tráfico.",
            zh: "公寓附近有免費停車位。請務必留意交通管制標誌。"
        }
    },

    {
        type: "street",
        name: {
            it: "Parcheggio Supermercato",
            en: "Supermarket Parking",
            fr: "Parking de supermarché",
            de: "Supermarkt-Parkplatz",
            es: "Aparcamiento de supermercado",
            zh: "超市停車場"
        },
        rating: 1.8, reviews: 4,
        price: { it: "Gratuito", en: "Free", fr: "Gratuit", de: "Kostenlos", es: "Gratis", zh: "免费" },
        hours: [{ d: "mon-sun", t: "24h" }],
        walkMin: 3, carMin: 2,
        address: "Via Crevacuore, 26/B, 10146 Torino TO",
        photo: "images/parking/park.jpg",
        desc: {
            it: "Posti gratuiti nelle vicinanze all'appartamento. Controllate sempre i cartelli per i divieti stradali.",
            en: "Free parking spaces are available near the apartment. Always check the signs for any parking restrictions.",
            fr: "Places gratuites à proximité de l'appartement. Vérifiez toujours les panneaux indiquant les interdictions de stationnement.",
            de: "Kostenlose Parkplätze in der Nähe der Wohnung. Achten Sie stets auf die Beschilderung bezüglich Park- oder Halteverboten.",
            es: "Hay aparcamiento gratuito cerca del apartamento. Consulte siempre las señales de restricciones de tráfico.",
            zh: "公寓附近有免費停車位。請務必留意交通管制標誌。"
        }
    },

    {
        type: "street",
        name: {
            it: "Parcheggio Bellardi",
            en: "Bellardi Parking",
            fr: "Parking Bellardi",
            de: "Parkplatz Bellardi",
            es: "Aparcamiento Bellardi",
            zh: "貝拉爾迪停車場"
        },
        rating: 5, reviews: 1,
        price: { it: "Gratuito", en: "Free", fr: "Gratuit", de: "Kostenlos", es: "Gratis", zh: "免费" },
        hours: [{ d: "mon-sun", t: "24h" }],
        walkMin: 10, carMin: 3,
        address: "Via Ludovico Bellardi, 134, 10146 Torino TO",
        photo: "images/parking/park.jpg",
        desc: {
            it: "Posti gratuiti nelle vicinanze all'appartamento. Controllate sempre i cartelli per i divieti stradali.",
            en: "Free parking spaces are available near the apartment. Always check the signs for any parking restrictions.",
            fr: "Places gratuites à proximité de l'appartement. Vérifiez toujours les panneaux indiquant les interdictions de stationnement.",
            de: "Kostenlose Parkplätze in der Nähe der Wohnung. Achten Sie stets auf die Beschilderung bezüglich Park- oder Halteverboten.",
            es: "Hay aparcamiento gratuito cerca del apartamento. Consulte siempre las señales de restricciones de tráfico.",
            zh: "公寓附近有免費停車位。請務必留意交通管制標誌。"
        }
    },

    {
        type: "garage",
        name: {
            it: "Autorimessa Impero",
            en: "Garage Impero",
            fr: "Garage Impero",
            de: "Garage Impero",
            es: "Aparcamiento Impero",
            zh: "Impero 停車場"
        },
        rating: 4.5, reviews: 19,
        price: { it: "Pagamento", en: "Paid", fr: "Payant", de: "kostenpflichtig", es: "Por una tarifa", zh: "付費" },
        hours: [{ d: "mon-sun", t: "24h" }],
        phone: "+393393266899",
        walkMin: 15, carMin: 4,
        address: "Via Ludovico Bellardi, 17, 10146 Torino TO",
        photo: "images/parking/parking.jpg",
        desc: {
            it: "Grande garage coperto su due piani.",
            en: "Large, covered, two-story parking.",
            fr: "Grand garage couvert sur deux étages.",
            de: "Große überdachte Parkplatz auf zwei Etagen.",
            es: "Garaje grande, cubierto y de dos plantas.",
            zh: "大型兩層有頂車庫。"
        }
    },
    {
        type: "garage",
        name: {
            it: "Parcheggio Venchi Unica",
            en: "Venchi Unica Parking",
            fr: "Venchi Unica Parking",
            de: "Venchi Unica Parking",
            es: "Aparcamiento Venchi Unica",
            zh: "Venchi Unica 停車場"
        },
        rating: 3.8, reviews: 75,
        price: { it: "Pagamento", en: "Paid", fr: "Payant", de: "kostenpflichtig", es: "Por una tarifa", zh: "付費" },
        hours: [{ d: "mon-sun", t: "24h" }],
        walkMin: 25, carMin: 8,
        address: "C.so Francia, 323 A, 10142 Torino TO",
        photo: "images/parking/parking.jpg",
        desc: {
            it: "Parcheggio coperto. Ottimo per l'interscambio con la metropolitana.Acquistando un abbonamento alla rete urbana il parcheggio è gratuito.",
            en: "Covered parking. Excellent for transferring to the metro. Parking is free if you purchase a pass for the urban transport network.",
            fr: "Parking couvert. Idéal pour une correspondance avec le métro. Le stationnement est gratuit si vous achetez un abonnement au réseau urbain.",
            de: "Überdachter Parkplatz. Hervorragend geeignet für den Umstieg auf die U-Bahn. Beim Kauf eines Abonnements für das städtische Verkehrsnetz ist das Parken kostenlos.",
            es: "Aparcamiento cubierto. Ideal para hacer transbordo al metro. El aparcamiento es gratuito con el abono de autobús urbano.",
            zh: "室內停車場。方便換乘地鐵。 持市公車卡可免費停車。"
        }
    },

    {
        type: "street",
        name: {
            it: "Parcheggio Servais",
            en: "Servais Car Park",
            fr: "Parking Servais",
            de: "Parkplatz Servais",
            es: "Aparcamiento Servais",
            zh: "Servais 停車場"
        },
        rating: 4.5, reviews: 19,
        price: { it: "Gratuito", en: "Free", fr: "Gratuit", de: "Kostenlos", es: "Gratis", zh: "免费" },
        hours: [{ d: "mon-sun", t: "24h" }],
        walkMin: 12, carMin: 6,
        address: "Via Carlo Bianco, 11, 10146 Torino TO",
        photo: "images/parking/park.jpg",
        desc: {
            it: "Posti gratuiti nelle vicinanze all'appartamento. Controllate sempre i cartelli per i divieti stradali.",
            en: "Free parking spaces are available near the apartment. Always check the signs for any parking restrictions.",
            fr: "Places gratuites à proximité de l'appartement. Vérifiez toujours les panneaux indiquant les interdictions de stationnement.",
            de: "Kostenlose Parkplätze in der Nähe der Wohnung. Achten Sie stets auf die Beschilderung bezüglich Park- oder Halteverboten.",
            es: "Hay aparcamiento gratuito cerca del apartamento. Consulte siempre las señales de restricciones de tráfico.",
            zh: "公寓附近有免費停車位。請務必留意交通管制標誌。"
        }
    }

    /* ===== SCHEMA PARCHEGGIO CUSTODITO: copia, togli i commenti e compila =====
    ,{
        type: "garage",
        name: "NOME PARCHEGGIO",
        rating: 4.5, reviews: 120,
        price: { it: "2 €/ora · 15 €/giorno", en: "€2/hour · €15/day" },
        hours: [{ d: "mon-sat", t: "07:00–22:00" }], closed: "sun",
        phone: "+39011XXXXXXX",
        walkMin: 8, carMin: 3,
        address: "Via XXXXX 10, 10146 Torino TO",
        photo: "images/parking/nome-parcheggio.jpg",
        desc: {
            it: "Parcheggio coperto e custodito.",
            en: "Covered, attended car park."
        }
    }
    ======================================================================== */
];

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
            checkInBadge(tr("checkin.start_label"),tr("checkin.end_label"),CONFIG.checkinTime_start, CONFIG.checkinTime_end),
            checkInfos(tr("checkin.checkInfos")),
            h("div", { class: "split" },
                h("article", { class: "card" },
                    list(tr("checkin.steps"), "steps"),
                    h("p", { class: "note" }, "🔐 " + tr("checkin.note"))),
                figure)
        ];
    },

    checkout: () => [
        checkOutBadge(tr("checkout.time"), CONFIG.checkoutTime),
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

      parking: () => [
        h("div", { class: "grid rgrid pgrid" },
            PARKINGS
                .slice()
                .sort((a, b) => (a.walkMin ?? 0) - (b.walkMin ?? 0))
                .map(parkingCard))
    ],

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

    restaurants: () => {
        const list = RESTAURANTS
            .filter((r) => r.rating >= MIN_RATING)
            .sort((a, b) => a.walkMin - b.walkMin);       // i più vicini per primi

        return list.length
            ? [h("div", { class: "grid rgrid" }, list.map(restaurantCard))]
            : [h("p", { class: "muted" }, tr("rc.none"))];
    },


    supermarkets: () => [grid(
        ["Lidl", "Carrefour", "Mercato", "In's","Unes","Pam","Conad"].map((brand) => card({
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
        extLink(CONFIG.reviewUrl, "⭐ " + tr("review.button"), "btn btn-lg"))],
    
    ascensore: () => [h("article", { class: "card card-center" },
        h("p", null, tr("ascensore.text")),
        extLink(null, "🛗 " + tr("ascensore.button"), "btn btn-lg")
         )]

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