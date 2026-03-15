const translations = {
  // ═══ NAVIGATION (shared across all pages) ═══
  'nav.home': { de: 'Home', en: 'Home' },
  'nav.features': { de: 'Features', en: 'Features' },
  'nav.pricing': { de: 'Preise', en: 'Pricing' },
  'nav.beta': { de: 'Beta', en: 'Beta' },
  'nav.about': { de: 'Über uns', en: 'About' },
  'nav.cta': { de: 'Beta testen', en: 'Try Beta' },

  // ═══ FOOTER (shared across all pages) ═══
  'footer.tagline': { de: 'Die Navigations-App für Ballonpiloten.<br>Entwickelt in Österreich.', en: 'The navigation app for balloon pilots.<br>Developed in Austria.' },
  'footer.product': { de: 'Produkt', en: 'Product' },
  'footer.legal': { de: 'Rechtliches', en: 'Legal' },
  'footer.contact': { de: 'Kontakt', en: 'Contact' },
  'footer.betaDownload': { de: 'Beta & Download', en: 'Beta & Download' },
  'footer.privacy': { de: 'Datenschutz', en: 'Privacy Policy' },
  'footer.terms': { de: 'AGB', en: 'Terms' },
  'footer.imprint': { de: 'Impressum', en: 'Imprint' },
  'footer.aboutUs': { de: 'Über uns', en: 'About us' },
  'footer.madeIn': { de: 'Made in Austria 🇦🇹 · For Balloon Pilots Worldwide', en: 'Made in Austria 🇦🇹 · For Balloon Pilots Worldwide' },

  // ═══ INDEX PAGE ═══
  'index.badge': { de: 'Bald verfügbar für iPhone, iPad & Android', en: 'Coming soon for iPhone, iPad & Android' },
  'index.heroTitle1': { de: 'Deine Ballon-<br>Navigation.', en: 'Your Balloon<br>Navigation.' },
  'index.heroTitle2': { de: 'Einfach professionell.', en: 'Simply professional.' },
  'index.heroDesc': { de: 'NTA SkyNav ist die erste App speziell für Ballonpiloten. GPS, ICAO-Karten, Wettermodelle, Load Calculator und Live Team Tracking — alles an einem Ort, auch offline.', en: 'NTA SkyNav is the first app built specifically for balloon pilots. GPS, ICAO charts, weather models, load calculator and live team tracking — all in one place, even offline.' },
  'index.emailPlaceholder': { de: 'deine@email.at', en: 'your@email.com' },
  'index.launchInfo': { de: 'Beta-Zugang sichern', en: 'Get beta access' },
  'index.notifySuccess': { de: 'Founder-Platz gesichert! Du erhältst eine E-Mail sobald die Beta verfügbar ist.', en: 'Founder spot secured! You\'ll receive an email when the beta is available.' },
  'index.notifyHint': { de: 'Erhalte eine E-Mail, sobald NTA SkyNav im App Store & Play Store verfügbar ist. Für iPhone, iPad & Android. Kein Spam.', en: 'Receive an email when NTA SkyNav is available on App Store & Play Store. For iPhone, iPad & Android. No spam.' },
  'index.betaHint': { de: 'Du möchtest die Beta testen? <a href="beta.html" style="color: var(--amber); text-decoration: underline; font-weight: 600;">Hier für die Beta anmelden →</a>', en: 'Want to test the Beta? <a href="beta.html" style="color: var(--amber); text-decoration: underline; font-weight: 600;">Sign up for the Beta here →</a>' },
  'index.notifyAlready': { de: 'Du bist bereits angemeldet!', en: 'You are already signed up!' },

  'index.notifyError': { de: 'Etwas ist schief gelaufen. Versuche es nochmal.', en: 'Something went wrong. Please try again.' },
  'index.notifySending': { de: 'Wird gesendet...', en: 'Sending...' },
  'index.founderClosed': { de: 'Founder Programm geschlossen', en: 'Founder Program Closed' },
  'index.founderClosedDesc': { de: 'Alle 50 Founder-Plätze sind vergeben.', en: 'All 50 Founder spots have been taken.' },
  'index.waitlistTitle': { de: 'Auf die Warteliste', en: 'Join the Waitlist' },
  'index.waitlistDesc': { de: 'Werde benachrichtigt beim Launch — inkl. 7 Tage kostenlos testen.', en: 'Get notified at launch — includes a 7-day free trial.' },
  'index.waitlistPlaceholder': { de: 'deine@email.at', en: 'your@email.com' },
  'index.waitlistBtn': { de: 'Platz sichern', en: 'Join waitlist' },
  'index.waitlistSuccess': { de: 'Du bist auf der Warteliste! Wir melden uns beim Launch.', en: 'You\'re on the waitlist! We\'ll notify you at launch.' },

  // Feature Overview
  'index.featLabel': { de: 'Was NTA SkyNav kann', en: 'What NTA SkyNav does' },
  'index.featTitle': { de: 'Alles was du als Ballonpilot brauchst', en: 'Everything you need as a balloon pilot' },
  'index.featDesc': { de: 'Professionelle Werkzeuge, speziell für die Ballonfahrt entwickelt. Offline-fähig, präzise, zuverlässig.', en: 'Professional tools, built specifically for ballooning. Offline-capable, precise, reliable.' },

  'index.feat1Title': { de: 'ICAO Karten & Lufträume', en: 'ICAO Charts & Airspace' },
  'index.feat1Desc': { de: 'ICAO-Karten mit allen Lufträumen (A-G), Hindernissen, Hochspannungsleitungen und Flugplätzen. Dazu OSM und OpenTopoMap – alles offline verfügbar mit dem 4-Ecken Download-System.', en: 'ICAO charts with all airspaces (A-G), obstacles, power lines and airfields. Plus OSM and OpenTopoMap – all available offline with the 4-corner download system.' },
  'index.feat2Title': { de: '5 Wettermodelle', en: '5 Weather Models' },
  'index.feat2Desc': { de: 'ICON-D2 (2km Auflösung), ICON-EU, ICON Global, ECMWF IFS und GPS Live-Daten. Wind, Temperatur und Niederschlag bis +12h voraus – direkt auf der Karte mit Zeitauswahl.', en: 'ICON-D2 (2km resolution), ICON-EU, ICON Global, ECMWF IFS and GPS live data. Wind, temperature and precipitation up to +12h ahead – directly on the map with time selection.' },
  'index.feat3Title': { de: 'Load Calculator', en: 'Load Calculator' },
  'index.feat3Desc': { de: 'Professionelle Tragkraftberechnung mit QNH, Temperatur, Startplatzhöhe, Ballonprofil und individuellen Passagiergewichten. GO/NO-GO Entscheidung mit MTOW-Prüfung und Reserve-Anzeige.', en: 'Professional lift calculation with QNH, temperature, launch site elevation, balloon profile and individual passenger weights. GO/NO-GO decision with MTOW check and reserve display.' },
  'index.feat4Title': { de: 'Live Team Tracking', en: 'Live Team Tracking' },
  'index.feat4Desc': { de: 'Mehrere Ballone gleichzeitig auf einer Karte. Echtzeit-Positionen, Callsigns und Farben. Verfolger-Link für die Chase Crew – ohne App, direkt im Browser.', en: 'Multiple balloons on one map simultaneously. Real-time positions, callsigns and colors. Follower link for the chase crew – no app needed, directly in the browser.' },
  'index.feat5Title': { de: 'Gas Management', en: 'Gas Management' },
  'index.feat5Desc': { de: 'Gasflaschen einzeln verwalten mit Füllstand-Tracking. Verbrauch pro Fahrt automatisch erfasst, Restmenge jederzeit im Blick. Alles wird im Logbuch mitgespeichert.', en: 'Manage gas cylinders individually with fill level tracking. Consumption per flight automatically recorded, remaining quantity always visible. Everything is saved in the logbook.' },
  'index.feat6Title': { de: 'Logbuch & Excel Export', en: 'Logbook & Excel Export' },
  'index.feat6Desc': { de: 'Fahrten automatisch aufzeichnen mit Track, Beladung, Gasverbrauch, Start/Ende, Maximalhöhe und Dauer. Ganze Fahrten-Ordner als formatierte Excel-Datei exportieren.', en: 'Automatically record flights with track, load, gas consumption, start/end, max altitude and duration. Export entire flight folders as formatted Excel files.' },

  // More features
  'index.moreLabel': { de: 'Und noch mehr', en: 'And more' },
  'index.moreTitle': { de: 'Alles durchdacht', en: 'Thoroughly designed' },
  'index.mf1Title': { de: 'Ziel & Target Navigation', en: 'Goal & Target Navigation' },
  'index.mf1Desc': { de: 'Ziele setzen und Distanz, Richtung und voraussichtliche Ankunft in Echtzeit tracken. Perfekt für Wettbewerbs-Tasks.', en: 'Set targets and track distance, bearing and estimated arrival in real time. Perfect for competition tasks.' },
  'index.mf2Title': { de: 'Uhr / Stoppuhr', en: 'Clock / Stopwatch' },
  'index.mf2Desc': { de: 'Wettbewerbs-Timer für Tasks. Countdown und Stoppuhr direkt in der Navigation integriert.', en: 'Competition timer for tasks. Countdown and stopwatch integrated directly into navigation.' },
  'index.mf3Title': { de: 'Landeprognose', en: 'Landing Prediction' },
  'index.mf3Desc': { de: 'Berechnet den voraussichtlichen Landepunkt basierend auf Wind, Position und einstellbarer Sinkrate. Live auf der Karte angezeigt.', en: 'Calculates the estimated landing point based on wind, position and adjustable descent rate. Displayed live on the map.' },
  'index.mf4Title': { de: 'Radar', en: 'Radar' },
  'index.mf4Desc': { de: 'Niederschlagsradar als Overlay direkt auf der Karte. Sieh in Echtzeit, wo es regnet und wohin sich die Zellen bewegen.', en: 'Precipitation radar as overlay directly on the map. See in real time where it\'s raining and where cells are moving.' },
  'index.mf5Title': { de: 'Hindernisse', en: 'Obstacles' },
  'index.mf5Desc': { de: 'Hochspannungsleitungen, Masten und Hindernisse auf der Karte eingeblendet. Für mehr Sicherheit bei der Landung.', en: 'Power lines, masts and obstacles displayed on the map. For more safety during landing.' },
  'index.mf6Title': { de: 'Windlinien & Wind-Layer', en: 'Wind Lines & Wind Layer' },
  'index.mf6Desc': { de: 'Animierte Windlinien auf der Karte zeigen Richtung und Stärke in Echtzeit. Farbe, Länge und Dichte individuell einstellbar.', en: 'Animated wind lines on the map show direction and strength in real time. Color, length and density individually adjustable.' },
  'index.mf7Title': { de: 'Chase Crew Tracking', en: 'Chase Crew Tracking' },
  'index.mf7Desc': { de: 'Deine Verfolger sehen deinen Ballon live im Browser – ganz ohne App. Ein Link genügt. Position, Höhe, Heading in Echtzeit.', en: 'Your chasers see your balloon live in the browser – no app needed. One link is enough. Position, altitude, heading in real time.' },
  'index.mf8Title': { de: 'Lufträume (A–G)', en: 'Airspaces (A–G)' },
  'index.mf8Desc': { de: 'Alle Lufträume auf der Karte: CTR, TMA, Sperrgebiete und mehr. Klasse A bis G farblich dargestellt für sofortige Orientierung.', en: 'All airspaces on the map: CTR, TMA, restricted areas and more. Class A to G color-coded for instant orientation.' },
  'index.mf9Title': { de: 'QNH Korrektur', en: 'QNH Correction' },
  'index.mf9Desc': { de: 'Barometrische Höhenkorrektur mit QNH-Eingabe für präzise Druckhöhe. Wichtig für die korrekte Luftraum-Beurteilung.', en: 'Barometric altitude correction with QNH input for precise pressure altitude. Important for correct airspace assessment.' },
  'index.mf10Title': { de: 'HGT Import & Download', en: 'HGT Import & Download' },
  'index.mf10Desc': { de: 'Höhendaten (HGT) importieren oder direkt herunterladen für präzise AGL-Berechnung (Above Ground Level) in jedem Gelände.', en: 'Import or download elevation data (HGT) for precise AGL calculation (Above Ground Level) in any terrain.' },
  'index.mf11Title': { de: 'Outdoor-Modus', en: 'Outdoor Mode' },
  'index.mf11Desc': { de: 'Optimierte Darstellung für den Einsatz im Freien. Höherer Kontrast und größere Elemente bei direkter Sonneneinstrahlung.', en: 'Optimized display for outdoor use. Higher contrast and larger elements in direct sunlight.' },
  'index.mf12Title': { de: 'Offline-Modus', en: 'Offline Mode' },
  'index.mf12Desc': { de: 'Karten vorab herunterladen (4-Ecken-System), Fahrten offline speichern und anlegen. Synchronisation sobald wieder online.', en: 'Download maps in advance (4-corner system), save and create flights offline. Sync when back online.' },

  // Pricing teaser
  'index.priceLabel': { de: 'Preise', en: 'Pricing' },
  'index.priceTitle': { de: 'Ab <span style="color: var(--amber);">€9,99</span>/Monat', en: 'From <span style="color: var(--amber);">€9.99</span>/month' },
  'index.priceDesc': { de: '7 Tage kostenlos testen. Basis-GPS und Karte ohne Account nutzbar.', en: '7-day free trial. Basic GPS and map usable without account.' },
  'index.priceAll': { de: 'Alle Preise ansehen', en: 'View all pricing' },
  'index.priceFounder': { de: 'Founder-Preis sichern', en: 'Secure founder price' },

  // Instagram CTA
  'index.igTitle': { de: 'Folge uns auf Instagram', en: 'Follow us on Instagram' },
  'index.igDesc': { de: 'Updates, Behind the Scenes & mehr aus der Entwicklung', en: 'Updates, behind the scenes & more from development' },
  'index.igBtn': { de: '@nta_skynav folgen', en: 'Follow @nta_skynav' },
  'index.igFollow': { de: 'Folge uns auf Instagram für Updates!', en: 'Follow us on Instagram for updates!' },

  // ═══ FEATURES PAGE ═══
  'feat.pageTitle': { de: 'Gebaut für die Ballonfahrt', en: 'Built for Ballooning' },
  'feat.pageDesc': { de: 'Jede Funktion wurde von einem aktiven Ballonpiloten entwickelt. Kein generisches Luftfahrt-Tool – sondern speziell für die Ballonfahrt gebaut. Von der Startplanung mit Wettermodellen über die Navigation in der Luft bis zur automatischen Fahrtendokumentation im Logbuch – alles in einer App, die auch komplett offline funktioniert.', en: 'Every feature was developed by an active balloon pilot. Not a generic aviation tool – but built specifically for ballooning. From launch planning with weather models to in-flight navigation to automatic flight documentation in the logbook – all in one app that works completely offline.' },
  'feat.pillGPS': { de: 'Echtzeit GPS', en: 'Real-time GPS' },
  'feat.pillCalc': { de: 'Load Calculator', en: 'Load Calculator' },
  'feat.pillTimer': { de: 'Stoppuhr', en: 'Stopwatch' },
  'feat.pillTeam': { de: 'Team Tracking', en: 'Team Tracking' },
  'feat.pillLog': { de: 'Logbuch', en: 'Logbook' },
  'feat.pillLanding': { de: 'Landeprognose', en: 'Landing Prediction' },

  // Feature sections
  'feat.navLabel': { de: 'Navigation', en: 'Navigation' },
  'feat.navTitle': { de: 'GPS Navigation & Karten', en: 'GPS Navigation & Maps' },
  'feat.navDesc': { de: 'Präzise GPS-Daten in Echtzeit: Höhe (MSL & AGL), Geschwindigkeit, Heading und QNH-korrigierte Barometerhöhe. Höhendaten (HGT) können importiert oder direkt in der App heruntergeladen werden für präzise AGL-Berechnung.', en: 'Precise GPS data in real time: altitude (MSL & AGL), speed, heading and QNH-corrected barometric altitude. Elevation data (HGT) can be imported or downloaded directly in the app for precise AGL calculation.' },

  'feat.weatherLabel': { de: 'Wetter', en: 'Weather' },
  'feat.weatherTitle': { de: '5 Wettermodelle in einer App', en: '5 Weather Models in One App' },
  'feat.weatherDesc': { de: 'Von der hochauflösenden Nahbereichs-Vorhersage bis zum globalen Modell – du hast alle relevanten Wetterdaten direkt in der App. Windrichtung und Windstärke als Overlay auf der Karte.', en: 'From high-resolution short-range forecasts to global models – you have all relevant weather data directly in the app. Wind direction and speed as overlay on the map.' },

  'feat.toolsLabel': { de: 'Werkzeuge', en: 'Tools' },
  'feat.targetTitle': { de: 'Ziel / Target Navigation', en: 'Goal / Target Navigation' },
  'feat.targetDesc': { de: 'Setze Ziele direkt auf der Karte und navigiere in Echtzeit dorthin. Distanz, Richtung und voraussichtliche Ankunft werden live berechnet.', en: 'Set targets directly on the map and navigate to them in real time. Distance, bearing and estimated arrival are calculated live.' },

  'feat.timerTitle': { de: 'Uhr / Stoppuhr', en: 'Clock / Stopwatch' },
  'feat.timerDesc': { de: 'Stoppuhr und Timer direkt in der Navigation integriert. Immer im Blick, auch während der Fahrt.', en: 'Stopwatch and timer integrated directly into navigation. Always visible, even during flight.' },

  'feat.calcTitle': { de: 'Load Calculator', en: 'Load Calculator' },
  'feat.calcDesc': { de: 'Professionelle Tragkraftberechnung nach physikalischen Formeln. GO/NO-GO Entscheidung auf einen Blick.', en: 'Professional lift calculation based on physics formulas. GO/NO-GO decision at a glance.' },

  'feat.landingTitle': { de: 'Landeprognose', en: 'Landing Prediction' },
  'feat.landingDesc': { de: 'Berechnet den voraussichtlichen Landepunkt basierend auf aktueller Position, Wind und einstellbarer Sinkrate. Live auf der Karte angezeigt.', en: 'Calculates the estimated landing point based on current position, wind and adjustable descent rate. Displayed live on the map.' },

  'feat.mapLabel': { de: 'Karte & Layer', en: 'Maps & Layers' },
  'feat.mapTitle': { de: 'Karten & Offline-Download', en: 'Maps & Offline Download' },
  'feat.mapDesc': { de: 'Zwei Kartentypen zur Auswahl, beide offline verfügbar. Mit dem 4-Ecken Download-System lädst du genau das Gebiet herunter, das du brauchst.', en: 'Two map types to choose from, both available offline. With the 4-corner download system, you download exactly the area you need.' },

  'feat.obstTitle': { de: 'Hindernisse', en: 'Obstacles' },
  'feat.obstDesc': { de: 'Hochspannungsleitungen, Windräder, Masten und andere Luftfahrthindernisse direkt auf der Karte sichtbar. Für mehr Sicherheit bei der Landung.', en: 'Power lines, wind turbines, masts and other aviation obstacles visible directly on the map. For more safety during landing.' },

  'feat.radarTitle': { de: 'Radar', en: 'Radar' },
  'feat.radarDesc': { de: 'Echtzeit-Flugverkehr als Overlay auf der Karte. Sieh andere Luftfahrzeuge in deiner Umgebung – Flugzeuge, Helikopter, Segelflugzeuge, Paragleiter und andere Ballone.', en: 'Real-time air traffic as overlay on the map. See other aircraft in your area – planes, helicopters, gliders, paragliders and other balloons.' },

  'feat.airTitle': { de: 'Lufträume', en: 'Airspaces' },
  'feat.airDesc': { de: 'Alle Lufträume auf der Karte dargestellt – von Klasse A bis G. CTR, TMA und Sperrgebiete farblich codiert für sofortige Orientierung.', en: 'All airspaces displayed on the map – from Class A to G. CTR, TMA and restricted areas color-coded for instant orientation.' },

  'feat.outdoorLabel': { de: 'Steuerung', en: 'Controls' },
  'feat.outdoorTitle': { de: 'Outdoor-Modus', en: 'Outdoor Mode' },
  'feat.outdoorDesc': { de: 'Optimierte Darstellung für den Einsatz bei direkter Sonneneinstrahlung. Höherer Kontrast und größere Elemente für bessere Lesbarkeit im Korb.', en: 'Optimized display for use in direct sunlight. Higher contrast and larger elements for better readability in the basket.' },

  'feat.logLabel': { de: 'Logbuch', en: 'Logbook' },
  'feat.logTitle': { de: 'Digitales Fahrtenbuch', en: 'Digital Flight Log' },
  'feat.logDesc': { de: 'Jede Fahrt wird automatisch aufgezeichnet und im Logbuch gespeichert. Fahrten in Ordnern organisieren. Excel-Export für die Dokumentation.', en: 'Every flight is automatically recorded and saved in the logbook. Organize flights in folders. Excel export for documentation.' },

  'feat.teamLabel': { de: 'Live Team', en: 'Live Team' },
  'feat.teamTitle': { de: 'Team Tracking & Chase Crew', en: 'Team Tracking & Chase Crew' },
  'feat.teamDesc': { de: 'Mehrere Ballone gleichzeitig auf einer Karte verfolgen. Echtzeit-Positionsaustausch über verschlüsselte Verbindung. Chase Crew braucht keine App – nur einen Browserlink.', en: 'Track multiple balloons simultaneously on one map. Real-time position sharing via encrypted connection. Chase crew doesn\'t need an app – just a browser link.' },

  'feat.gasLabel': { de: 'Gas', en: 'Gas' },
  'feat.gasTitle': { de: 'Gas Management', en: 'Gas Management' },
  'feat.gasDesc': { de: 'Behalte den Überblick über deinen Gasvorrat. Flaschen einzeln verwalten, Verbrauch pro Fahrt tracken und immer wissen, wie viel noch übrig ist.', en: 'Keep track of your gas supply. Manage cylinders individually, track consumption per flight and always know how much is left.' },

  'feat.settingsLabel': { de: 'Einstellungen', en: 'Settings' },
  'feat.settingsTitle': { de: 'Alles anpassbar', en: 'Fully Customizable' },
  'feat.settingsDesc': { de: '9 Einstellungs-Kategorien für maximale Kontrolle. Von der Darstellung bis zur Aufzeichnung – du bestimmst, wie die App funktioniert.', en: '9 settings categories for maximum control. From display to recording – you decide how the app works.' },

  // CTA
  'cta.title': { de: 'Bereit zum Abheben?', en: 'Ready for takeoff?' },
  'cta.descFeat': { de: 'Teste NTA SkyNav 7 Tage kostenlos – alle Features, voller Umfang.', en: 'Try NTA SkyNav free for 7 days – all features, full scope.' },
  'cta.descAbout': { de: 'Teste NTA SkyNav als einer der ersten Beta-Tester.', en: 'Try NTA SkyNav as one of the first beta testers.' },
  'cta.betaTest': { de: 'Beta testen', en: 'Try Beta' },
  'cta.viewPricing': { de: 'Preise ansehen', en: 'View pricing' },

  // ═══ PRICING PAGE ═══
  'price.title': { de: 'Einfach & transparent', en: 'Simple & transparent' },
  'price.desc': { de: '7 Tage kostenlos testen. Kein Risiko, jederzeit kündbar. Basis-Funktionen ohne Account nutzbar.', en: '7-day free trial. No risk, cancel anytime. Basic features usable without account.' },
  'price.freeTitle': { de: 'Ohne Account', en: 'Without Account' },
  'price.freeDesc': { de: 'GPS-Navigation + Karte kostenlos nutzbar', en: 'GPS navigation + map free to use' },
  'price.founderName': { de: 'Founder', en: 'Founder' },
  'price.founderPeriod': { de: 'pro Jahr · für immer', en: 'per year · forever' },
  'price.founderNote': { de: 'Nur 50 Plätze – Preis bleibt für immer', en: 'Only 50 spots – price stays forever' },
  'price.founderBadge': { de: 'Fast voll', en: 'Almost full' },
  'price.founderBtn': { de: 'Founder werden', en: 'Become a Founder' },
  'price.yearlyName': { de: 'Jährlich', en: 'Yearly' },
  'price.yearlyPeriod': { de: 'pro Jahr', en: 'per year' },
  'price.yearlyNote': { de: '2 Monate gratis vs. Monatsabo', en: '2 months free vs. monthly' },
  'price.yearlyBadge': { de: 'Beliebteste Wahl', en: 'Most Popular' },
  'price.yearlyBtn': { de: '7 Tage gratis testen', en: '7 days free trial' },
  'price.monthlyName': { de: 'Monatlich', en: 'Monthly' },
  'price.monthlyPeriod': { de: 'pro Monat', en: 'per month' },
  'price.monthlyNote': { de: 'Jederzeit kündbar', en: 'Cancel anytime' },
  'price.monthlyBtn': { de: '7 Tage gratis testen', en: '7 days free trial' },

  // Features list items (shared in pricing cards)
  'price.f1': { de: 'Alle Pro-Features unbegrenzt', en: 'All Pro features unlimited' },
  'price.f2': { de: 'ICAO Karten & Offline-Maps', en: 'ICAO charts & offline maps' },
  'price.f3': { de: '5 Wettermodelle', en: '5 weather models' },
  'price.f4': { de: 'Load Calculator', en: 'Load Calculator' },
  'price.f5': { de: 'Live Team Tracking', en: 'Live Team Tracking' },
  'price.f6': { de: 'Gas Management & Logbuch', en: 'Gas Management & Logbook' },
  'price.f7': { de: 'Excel Export', en: 'Excel Export' },
  'price.fBadge': { de: 'Founder-Badge im Profil', en: 'Founder badge in profile' },
  'price.fFeedback': { de: 'Direkter Feedback-Kanal', en: 'Direct feedback channel' },
  'price.fPrice': { de: 'Preis steigt nie', en: 'Price never increases' },
  'price.fTrial': { de: '7 Tage kostenlos testen', en: '7-day free trial' },
  'price.fCancel': { de: 'Jederzeit kündbar', en: 'Cancel anytime' },
  'price.fFlex': { de: 'Flexibel ohne Bindung', en: 'Flexible, no commitment' },

  // Trial banner
  'price.trialTitle': { de: '7 Tage kostenlos testen', en: '7-day free trial' },
  'price.trialDesc': { de: 'Alle Pro-Features uneingeschränkt. Keine Kreditkarte nötig. Nach dem Trial entscheidest du, ob du weitermachen willst.', en: 'All Pro features unrestricted. No credit card required. After the trial, you decide if you want to continue.' },

  // Comparison
  'price.compLabel': { de: 'Vergleich', en: 'Comparison' },
  'price.compTitle': { de: 'Warum NTA SkyNav?', en: 'Why NTA SkyNav?' },
  'price.compFeature': { de: 'Feature', en: 'Feature' },
  'price.compGeneric': { de: 'Generische Luftfahrt-Apps', en: 'Generic aviation apps' },
  'price.compBallooning': { de: 'Speziell für Ballonfahrt', en: 'Built for ballooning' },
  'price.compPartial': { de: 'Teilweise', en: 'Partial' },
  'price.compPriceFrom': { de: 'Preis ab', en: 'Price from' },

  // FAQ
  'price.faqLabel': { de: 'FAQ', en: 'FAQ' },
  'price.faqTitle': { de: 'Häufige Fragen', en: 'Frequently Asked Questions' },
  'price.faq1q': { de: 'Kann ich jederzeit kündigen?', en: 'Can I cancel anytime?' },
  'price.faq1a': { de: 'Ja, du kannst dein Abo jederzeit kündigen. Nach der Kündigung hast du noch Zugriff bis zum Ende der bezahlten Laufzeit. Es gibt keine versteckten Kosten oder Kündigungsfristen.', en: 'Yes, you can cancel your subscription at any time. After cancellation, you still have access until the end of the paid period. There are no hidden costs or cancellation deadlines.' },
  'price.faq2q': { de: 'Was passiert nach dem 7-Tage Trial?', en: 'What happens after the 7-day trial?' },
  'price.faq2a': { de: 'Nach 7 Tagen kannst du entweder ein Abo abschließen oder die App weiter mit Basis-Funktionen (GPS + Karte) nutzen. Es wird nichts automatisch abgebucht.', en: 'After 7 days, you can either subscribe or continue using the app with basic features (GPS + map). Nothing is charged automatically.' },
  'price.faq3q': { de: 'Funktioniert die App offline?', en: 'Does the app work offline?' },
  'price.faq3a': { de: 'Ja! Karten können vorab heruntergeladen werden (4-Ecken-System). Fahrten und Logbuch-Einträge funktionieren komplett offline. Die App synchronisiert automatisch, sobald du wieder online bist. Der Pro-Status bleibt bis zu 7 Tage offline erhalten.', en: 'Yes! Maps can be downloaded in advance (4-corner system). Flights and logbook entries work completely offline. The app syncs automatically when you\'re back online. Pro status is maintained offline for up to 7 days.' },
  'price.faq4q': { de: 'Auf wie vielen Geräten kann ich die App nutzen?', en: 'How many devices can I use the app on?' },
  'price.faq4a': { de: 'Du kannst die App auf beliebig vielen Geräten nutzen – einfach mit demselben Account anmelden. Perfekt für Tablet im Korb und Handy als Backup.', en: 'You can use the app on as many devices as you want – just sign in with the same account. Perfect for tablet in the basket and phone as backup.' },
  'price.faq5q': { de: 'Brauche ich eine Kreditkarte für den Trial?', en: 'Do I need a credit card for the trial?' },
  'price.faq5a': { de: 'Nein, du kannst die 7-Tage-Testphase ohne Zahlungsdaten starten. Erst wenn du dich für ein Abo entscheidest, wird bezahlt.', en: 'No, you can start the 7-day trial without payment details. You only pay when you choose a subscription.' },
  'price.faq6q': { de: 'Für welche Geräte ist die App verfügbar?', en: 'Which devices is the app available for?' },
  'price.faq6a': { de: 'NTA SkyNav ist für Android (Smartphones + Tablets) und iOS (iPhone + iPad) verfügbar. Optimiert für Tablets im Querformat, funktioniert aber genauso auf dem Smartphone.', en: 'NTA SkyNav is available for Android (smartphones + tablets) and iOS (iPhone + iPad). Optimized for tablets in landscape mode, but works just as well on smartphones.' },

  // ═══ BETA PAGE ═══
  'beta.founderCheck': { de: 'Founder Programm geschlossen', en: 'Founder Program Closed' },
  'beta.closedTitle': { de: 'Alle 50 Plätze wurden in 72 Stunden vergeben', en: 'All 50 spots were taken in 72 hours' },
  'beta.closedDesc': { de: 'Sei dabei wenn wir live gehen — trage dich auf die Warteliste ein und teste NTA SkyNav 7 Tage kostenlos.', en: 'Be there when we go live — join the waitlist and try NTA SkyNav free for 7 days.' },
  'beta.waitlistTitle': { de: 'Auf die Warteliste', en: 'Join the Waitlist' },
  'beta.waitlistDesc': { de: 'Launch-Benachrichtigung + 7 Tage kostenlos testen.', en: 'Launch notification + 7 days free trial.' },
  'beta.waitlistPlaceholder': { de: 'deine@email.at', en: 'your@email.com' },
  'beta.waitlistBtn': { de: 'Auf die Warteliste', en: 'Join Waitlist' },
  'beta.waitlistSuccess': { de: 'Du bist auf der Warteliste! Wir melden uns beim Launch.', en: 'You\'re on the waitlist! We\'ll notify you at launch.' },
  'beta.whatYouGet': { de: 'Was dich erwartet', en: 'What to expect' },
  'beta.whatTitle': { de: 'NTA SkyNav zum Launch', en: 'NTA SkyNav at Launch' },
  'beta.perk1Title': { de: '7 Tage kostenlos', en: '7 Days Free' },
  'beta.perk1Desc': { de: 'Teste alle Pro-Features 7 Tage lang gratis. Keine Kreditkarte nötig zum Start.', en: 'Try all Pro features free for 7 days. No credit card needed to start.' },
  'beta.perk2Title': { de: 'Alles in einer App', en: 'All in One App' },
  'beta.perk2Desc': { de: 'GPS, ICAO-Karten, Wettermodelle, Load Calculator und Team Tracking — auch offline.', en: 'GPS, ICAO charts, weather models, load calculator and team tracking — even offline.' },
  'beta.perk3Title': { de: 'iPhone & Android', en: 'iPhone & Android' },
  'beta.perk3Desc': { de: 'Verfügbar für iOS und Android. Eine App für alle deine Geräte.', en: 'Available for iOS and Android. One app for all your devices.' },
  'beta.perk4Title': { de: 'Direkter Draht', en: 'Direct Line' },
  'beta.perk4Desc': { de: 'Feedback direkt an den Entwickler. Deine Wünsche fließen in die Entwicklung ein.', en: 'Feedback directly to the developer. Your input shapes the product.' },
  'beta.soonLabel': { de: 'Bald verfügbar', en: 'Coming soon' },
  'beta.soonAppStore': { de: 'Bald im', en: 'Soon on' },
  'beta.soonPlayStore': { de: 'Bald auf', en: 'Soon on' },

  // ═══ ABOUT PAGE ═══
  'about.label': { de: 'Über NTA SkyNav', en: 'About NTA SkyNav' },
  'about.title': { de: 'Gebaut von einem Ballonpiloten<br><span style="color: var(--amber);">für Ballonpiloten</span>', en: 'Built by a balloon pilot<br><span style="color: var(--amber);">for balloon pilots</span>' },
  'about.desc': { de: 'NTA SkyNav ist keine generische Luftfahrt-App. Sie wurde aus der täglichen Praxis heraus entwickelt – am Startplatz, im Korb und bei Wettbewerben.', en: 'NTA SkyNav is not a generic aviation app. It was developed from daily practice – at the launch site, in the basket and at competitions.' },
  'about.storyTitle': { de: '🎈 Die Geschichte', en: '🎈 The Story' },
  'about.storyP1': { de: 'Als aktiver Ballonpilot und Mitglied des Austrian National Balloon Teams habe ich jahrelang nach einer App gesucht, die wirklich für Ballonpiloten gemacht ist. Generische Luftfahrt-Apps kennen keine Tragkraftberechnung, kein Gas-Management und kein Team Tracking für mehrere Ballone. Also habe ich NTA SkyNav selbst gebaut.', en: 'As an active balloon pilot and member of the Austrian National Balloon Team, I spent years looking for an app that\'s truly made for balloon pilots. Generic aviation apps don\'t have lift calculation, gas management or team tracking for multiple balloons. So I built NTA SkyNav myself.' },
  'about.storyP2': { de: 'Was als persönliches Tool begann, ist zu einer vollständigen Navigations- und Planungsplattform gewachsen – entwickelt mit dem Feedback von Piloten aus dem Wettbewerbs- und Passagierfahrt-Bereich.', en: 'What started as a personal tool has grown into a complete navigation and planning platform – developed with feedback from pilots in competitive and passenger ballooning.' },
  'about.devTitle': { de: '⚙️ Entwicklung & Technik', en: '⚙️ Development & Technology' },
  'about.devP1': { de: 'NTA SkyNav wird als Ein-Mann-Projekt entwickelt und betrieben. Die App basiert auf modernen Web-Technologien (React, TypeScript, Capacitor) und ist für iPhone, iPad und Android-Geräte (Smartphones & Tablets) verfügbar.', en: 'NTA SkyNav is developed and operated as a one-man project. The app is built on modern web technologies (React, TypeScript, Capacitor) and is available for iPhone, iPad and Android devices (smartphones & tablets).' },
  'about.devP2': { de: 'Wetterdaten kommen von mehreren Modellen (ECMWF, GFS, ICON u.a.) über die Open-Meteo API. Kartenmaterial wird von OpenStreetMap und OpenTopoMap bereitgestellt. GPS-Daten werden in Echtzeit verarbeitet – für präzise Navigation direkt im Korb.', en: 'Weather data comes from multiple models (ECMWF, GFS, ICON etc.) via the Open-Meteo API. Map data is provided by OpenStreetMap and OpenTopoMap. GPS data is processed in real time – for precise navigation directly in the basket.' },
  'about.testedTitle': { de: '🧪 Getestet im echten Einsatz', en: '🧪 Tested in Real Conditions' },
  'about.testedDesc': { de: 'Jede Funktion wurde unter realen Bedingungen getestet – bei Trainingsfahrten, Wettbewerben und Passagierfahrten. Von der Tragkraftberechnung bei verschiedenen Temperaturen bis zur Zielnavigation bei wechselnden Windverhältnissen. Das Ergebnis ist eine App, die genau das tut, was ein Ballonpilot braucht.', en: 'Every feature was tested under real conditions – during training flights, competitions and passenger flights. From lift calculation at various temperatures to target navigation in changing wind conditions. The result is an app that does exactly what a balloon pilot needs.' },
  'about.visionTitle': { de: '🗺️ Die Vision', en: '🗺️ The Vision' },
  'about.visionDesc': { de: 'NTA SkyNav soll die Referenz-App für Ballonpiloten weltweit werden. Geplant sind weitere Features wie erweiterte Windanalyse, Flugbuch-Integration, Community-Features und noch mehr Wettermodelle. Dein Feedback als Beta-Tester fließt direkt in die Entwicklung ein.', en: 'NTA SkyNav aims to become the reference app for balloon pilots worldwide. Planned features include advanced wind analysis, flight log integration, community features and even more weather models. Your feedback as a beta tester flows directly into development.' },
  'about.privacyTitle': { de: '🛡️ Datenschutz & Sicherheit', en: '🛡️ Privacy & Security' },
  'about.privacyDesc': { de: 'Deine Daten gehören dir. GPS-Positionen werden nur lokal und in deinem persönlichen Cloud-Account gespeichert. Team Tracking Daten werden verschlüsselt übertragen und Sessions laufen automatisch nach 24 Stunden ab. Wir verkaufen keine Daten an Dritte.', en: 'Your data belongs to you. GPS positions are only stored locally and in your personal cloud account. Team tracking data is transmitted encrypted and sessions automatically expire after 24 hours. We don\'t sell data to third parties.' },
  'about.sourcesTitle': { de: '📡 Open-Source Datenquellen', en: '📡 Open-Source Data Sources' },
  'about.contactTitle': { de: '📬 Kontakt', en: '📬 Contact' },
  'about.contactDesc': { de: 'Fragen, Feedback oder Kooperationsanfragen?', en: 'Questions, feedback or partnership inquiries?' },

  // ═══ FEATURES PAGE – Bullet Lists ═══

  // Navigation & GPS
  'feat.nav.l1': { de: 'GPS-Anzeige: ALT (m/ft), AGL, SPD (km/h), HDG (°), ELEV, Koordinaten', en: 'GPS display: ALT (m/ft), AGL, SPD (km/h), HDG (°), ELEV, coordinates' },
  'feat.nav.l2': { de: 'QNH-Korrektur für präzise Druckhöhe', en: 'QNH correction for precise pressure altitude' },
  'feat.nav.l3': { de: 'HGT-Höhendaten importieren oder in-App herunterladen', en: 'Import or download HGT elevation data in-app' },
  'feat.nav.l4': { de: 'Präzise AGL-Berechnung (Höhe über Grund) in jedem Gelände', en: 'Precise AGL calculation (height above ground) in any terrain' },
  'feat.nav.l5': { de: 'ICAO-Karten mit Lufträumen (A–G), CTR, TMA', en: 'ICAO charts with airspaces (A–G), CTR, TMA' },
  'feat.nav.l6': { de: 'OSM + OpenTopoMap als Basiskarten', en: 'OSM + OpenTopoMap as base maps' },
  'feat.nav.l7': { de: 'Offline-Karten: Bereich wählen &amp; downloaden', en: 'Offline maps: select area &amp; download' },
  'feat.nav.l8': { de: 'Positionsmarker mit Heading-Anzeige und Trail', en: 'Position marker with heading indicator and trail' },

  // Landing Prediction
  'feat.landing.l1': { de: 'Prognosepunkt live auf der Karte dargestellt', en: 'Prediction point displayed live on the map' },
  'feat.landing.l2': { de: 'Sinkrate (m/s) individuell einstellbar', en: 'Descent rate (m/s) individually adjustable' },
  'feat.landing.l3': { de: 'Berücksichtigt aktuelle Windrichtung und -stärke', en: 'Takes current wind direction and speed into account' },
  'feat.landing.l4': { de: 'Hilft bei der Wahl des Landepunkts während der Fahrt', en: 'Helps choose the landing point during flight' },
  'feat.landing.l5': { de: 'Aktualisiert sich automatisch mit jeder Positionsänderung', en: 'Updates automatically with every position change' },

  // Load Calculator
  'feat.calc.l1': { de: 'Ballonprofil mit Hüllenvolumen und MTOW hinterlegen', en: 'Store balloon profile with envelope volume and MTOW' },
  'feat.calc.l2': { de: 'QNH, Temperatur und Startplatzhöhe als Eingabe', en: 'QNH, temperature and launch site elevation as input' },
  'feat.calc.l3': { de: 'Individuelle Passagiergewichte (bis 20 Passagiere)', en: 'Individual passenger weights (up to 20 passengers)' },
  'feat.calc.l4': { de: 'Bruttotragkraft, Gesamtgewicht, Reserve, Nutzlast', en: 'Gross lift, total weight, reserve, payload' },
  'feat.calc.l5': { de: 'GO/NO-GO Entscheidung mit MTOW- und MLW-Prüfung', en: 'GO/NO-GO decision with MTOW and MLW check' },
  'feat.calc.l6': { de: 'Ergebnis wird automatisch im Logbuch gespeichert', en: 'Result is automatically saved in the logbook' },

  // Gas Management
  'feat.gas.l1': { de: 'Gasflaschen individuell anlegen und benennen', en: 'Create and name gas cylinders individually' },
  'feat.gas.l2': { de: 'Füllstand per Slider oder manuell einstellen', en: 'Set fill level via slider or manually' },
  'feat.gas.l3': { de: 'Verbrauch pro Fahrt automatisch berechnet', en: 'Consumption per flight calculated automatically' },
  'feat.gas.l4': { de: 'Restmenge in Litern und Prozent', en: 'Remaining quantity in liters and percent' },
  'feat.gas.l5': { de: 'Daten werden im Logbuch mitgespeichert', en: 'Data is saved in the logbook' },
  'feat.gas.l6': { de: 'Excel-Export mit Flaschen-Details pro Fahrt', en: 'Excel export with cylinder details per flight' },

  // Weather
  'feat.weather.l1': { de: 'ICON-D2 – 2km Auflösung, ideal für Mitteleuropa', en: 'ICON-D2 – 2km resolution, ideal for Central Europe' },
  'feat.weather.l2': { de: 'ICON-EU – europäische Abdeckung', en: 'ICON-EU – European coverage' },
  'feat.weather.l3': { de: 'ICON Global – weltweite Vorhersage', en: 'ICON Global – worldwide forecast' },
  'feat.weather.l4': { de: 'ECMWF IFS – europäisches Referenzmodell', en: 'ECMWF IFS – European reference model' },
  'feat.weather.l5': { de: 'GPS Live-Daten – Echtzeit-Wind vom Gerät', en: 'GPS live data – real-time wind from device' },
  'feat.weather.l6': { de: 'Zeitauswahl bis +12 Stunden voraus', en: 'Time selection up to +12 hours ahead' },
  'feat.weather.l7': { de: 'Windprofil als Overlay direkt auf der Karte', en: 'Wind profile as overlay directly on the map' },
  'feat.weather.l8': { de: 'Powered by Open-Meteo.com (freie Wetterdaten)', en: 'Powered by Open-Meteo.com (open weather data)' },

  // Maps & Offline
  'feat.map.l1': { de: 'OSM (OpenStreetMap) – Straßen, Wege, Ortschaften', en: 'OSM (OpenStreetMap) – roads, paths, villages' },
  'feat.map.l2': { de: 'OpenTopoMap (OTM) – Höhenlinien und Geländedetails', en: 'OpenTopoMap (OTM) – contour lines and terrain details' },
  'feat.map.l3': { de: '4-Ecken Offline-System: Gebiet markieren → herunterladen', en: '4-corner offline system: mark area → download' },
  'feat.map.l4': { de: 'Karten im Hintergrund vorladen', en: 'Preload maps in the background' },
  'feat.map.l5': { de: 'Funktioniert komplett ohne Internetverbindung', en: 'Works completely without internet connection' },

  // Obstacles
  'feat.obst.l1': { de: 'Hochspannungsleitungen als Layer auf der Karte', en: 'Power lines as layer on the map' },
  'feat.obst.l2': { de: 'Windräder und Windparks eingezeichnet', en: 'Wind turbines and wind farms marked' },
  'feat.obst.l3': { de: 'Masten und Hindernisse mit Höhenangabe', en: 'Masts and obstacles with height information' },
  'feat.obst.l4': { de: 'Ein-/Ausschaltbar als separater Layer', en: 'Toggle on/off as separate layer' },
  'feat.obst.l5': { de: 'Hilft bei der Wahl sicherer Landeplätze', en: 'Helps choose safe landing sites' },

  // Airspaces
  'feat.air.l1': { de: 'Luftraumklassen A bis G farblich dargestellt', en: 'Airspace classes A to G color-coded' },
  'feat.air.l2': { de: 'CTR (Kontrollzonen) um Flugplätze', en: 'CTR (control zones) around airfields' },
  'feat.air.l3': { de: 'TMA (Terminal Areas) und Sperrgebiete', en: 'TMA (Terminal Areas) and restricted areas' },
  'feat.air.l4': { de: 'Ober- und Untergrenzen der Lufträume sichtbar', en: 'Upper and lower limits of airspaces visible' },
  'feat.air.l5': { de: 'Ein-/Ausschaltbar als separater Layer', en: 'Toggle on/off as separate layer' },

  // Radar
  'feat.radar.l1': { de: 'Flugzeuge, Helikopter und Segelflugzeuge auf der Karte', en: 'Aircraft, helicopters and gliders on the map' },
  'feat.radar.l2': { de: 'Paragleiter und andere Ballone sichtbar', en: 'Paragliders and other balloons visible' },
  'feat.radar.l3': { de: 'Echtzeit-Aktualisierung der Positionen', en: 'Real-time position updates' },
  'feat.radar.l4': { de: 'Ein-/Ausschaltbar als separater Layer', en: 'Toggle on/off as separate layer' },
  'feat.radar.l5': { de: 'Besseres Situationsbewusstsein in der Luft', en: 'Better situational awareness in the air' },

  // Logbook
  'feat.log.l1': { de: 'Automatische Track-Aufzeichnung mit GPS-Positionen', en: 'Automatic track recording with GPS positions' },
  'feat.log.l2': { de: 'Start- und Ende-Ort, Maximalhöhe (m + ft), Dauer', en: 'Start and end location, max altitude (m + ft), duration' },
  'feat.log.l3': { de: 'QNH und Beladungsdaten werden mitgespeichert', en: 'QNH and load data are saved along' },
  'feat.log.l4': { de: 'Gasverbrauch pro Fahrt automatisch erfasst', en: 'Gas consumption per flight automatically recorded' },
  'feat.log.l5': { de: 'Fahrten-Ordner zur Organisation', en: 'Flight folders for organization' },
  'feat.log.l6': { de: 'Excel-Export: Übersicht, Beladung, Gas, Track-Daten', en: 'Excel export: overview, load, gas, track data' },
  'feat.log.l7': { de: 'Offline-Speicherung, Auto-Sync bei Verbindung', en: 'Offline storage, auto-sync when connected' },
  'feat.log.l8': { de: 'Cloud-Backup über Supabase', en: 'Cloud backup via Supabase' },

  // Target Navigation
  'feat.target.l1': { de: 'Ziel auf der Karte antippen oder Koordinaten eingeben', en: 'Tap target on map or enter coordinates' },
  'feat.target.l2': { de: 'Distanz und Richtung zum Ziel in Echtzeit', en: 'Distance and bearing to target in real time' },
  'feat.target.l3': { de: 'Kompass-Anzeige mit Richtungspfeil', en: 'Compass display with direction arrow' },
  'feat.target.l4': { de: 'Perfekt für Wettbewerbs-Tasks und Zielnavigation', en: 'Perfect for competition tasks and target navigation' },
  'feat.target.l5': { de: 'Mehrere Ziele nacheinander setzen', en: 'Set multiple targets sequentially' },

  // Timer
  'feat.timer.l1': { de: 'Stoppuhr mit Start, Stop und Reset', en: 'Stopwatch with start, stop and reset' },
  'feat.timer.l2': { de: 'Countdown-Timer mit einstellbarer Dauer', en: 'Countdown timer with adjustable duration' },
  'feat.timer.l3': { de: 'Timer läuft im Hintergrund weiter', en: 'Timer continues running in the background' },
  'feat.timer.l4': { de: 'Direkt im Navigations-HUD sichtbar', en: 'Visible directly in the navigation HUD' },

  // Outdoor Mode
  'feat.outdoor.l1': { de: 'Hoher Kontrast für direktes Sonnenlicht', en: 'High contrast for direct sunlight' },
  'feat.outdoor.l2': { de: 'Größere UI-Elemente und Schrift', en: 'Larger UI elements and fonts' },
  'feat.outdoor.l3': { de: 'Optimierte Farben für Outdoor-Nutzung', en: 'Optimized colors for outdoor use' },
  'feat.outdoor.l4': { de: 'Per Menü ein- und ausschaltbar', en: 'Toggle on/off via menu' },

  // Team Tracking
  'feat.team.l1': { de: 'Team-Session erstellen mit 4-stelligem Join-Code', en: 'Create team session with 4-digit join code' },
  'feat.team.l2': { de: 'Bis zu 6 Piloten gleichzeitig auf einer Karte', en: 'Up to 6 pilots simultaneously on one map' },
  'feat.team.l3': { de: 'Callsign und individuelle Farbe pro Teilnehmer', en: 'Callsign and individual color per participant' },
  'feat.team.l4': { de: 'Echtzeit via Supabase Realtime (verschlüsselt)', en: 'Real-time via Supabase Realtime (encrypted)' },
  'feat.team.l5': { de: 'Chase Crew Link: Verfolger sehen alles im Browser', en: 'Chase Crew link: chasers see everything in the browser' },
  'feat.team.l6': { de: 'Position, Höhe, Heading, Geschwindigkeit live', en: 'Position, altitude, heading, speed live' },
  'feat.team.l7': { de: 'Session läuft automatisch nach 24h ab', en: 'Session expires automatically after 24h' },

  // Settings
  'feat.settings.l1': { de: 'Footer-Buttons: Welche Tools sichtbar sind', en: 'Footer buttons: which tools are visible' },
  'feat.settings.l2': { de: 'Einheiten: Meter/Fuß, km/h/kts, °C/°F', en: 'Units: meters/feet, km/h/kts, °C/°F' },
  'feat.settings.l3': { de: 'Pilotenprofil: Name, Callsign, Ballon', en: 'Pilot profile: name, callsign, balloon' },
  'feat.settings.l4': { de: 'Navigation: Kartentyp, Zoom, Nordausrichtung', en: 'Navigation: map type, zoom, north orientation' },
  'feat.settings.l5': { de: 'Windlinien: Farbe, Länge, Dichte', en: 'Wind lines: color, length, density' },
  'feat.settings.l6': { de: 'Positionsmarker: Größe, Trail-Länge, Farbe', en: 'Position marker: size, trail length, color' },
  'feat.settings.l7': { de: 'Audio: Höhenansagen, Vario-Ton', en: 'Audio: altitude announcements, variometer tone' },
  'feat.settings.l8': { de: 'UI-Größe: Schrift- und Panel-Skalierung', en: 'UI size: font and panel scaling' },
  'feat.settings.l9': { de: 'Aufzeichnung: Intervall, Auto-Start, Format', en: 'Recording: interval, auto-start, format' },

  // ═══ LANGUAGE TOGGLE ═══
  'lang.de': { de: 'DE', en: 'DE' },
  'lang.en': { de: 'EN', en: 'EN' },
};
