document.addEventListener('DOMContentLoaded', function() {
  // Language dictionaries
  const languages = {
    'de': {
      'nav.home': 'Startseite',
      'nav.features': 'Funktionen',
      'nav.contact': 'Kontakt',
      'hero.subtitle': 'Vereinfachen Sie Ihre persönlichen Finanzen',
      'hero.description': 'Verpassen Sie keine Transaktion mehr - Sparen Sie Zeit & bleiben Sie organisiert',
      'hero.download': 'Beta App herunterladen',
      'hero.explore': 'Funktionen erkunden',
      'features.title': 'Hauptfunktionen',
      'features.tracking.title': 'Umfassendes Finanztracking',
      'features.tracking.desc': 'Verfolgen Sie Ausgaben, Einkommen und Transfers zwischen Konten mit anpassbaren Kategorien.',
      'features.reports.title': 'Visuelle Berichte',
      'features.reports.desc': 'Sehen Sie Ihre Ausgabenmuster mit intuitiven Diagrammen und überwachen Sie Kontostände im Zeitverlauf.',
      'features.secure.title': 'Sicher & Privat',
      'features.secure.desc': 'Alle Ihre Finanzdaten bleiben auf Ihrem Gerät oder in Ihrem persönlichen iCloud-Konto.',
      'features.receipts.title': 'Belegverwaltung',
      'features.receipts.desc': 'Scannen Sie Belege direkt mit Ihrer Kamera und speichern Sie sie lokal mit Ihren Transaktionen.',
      'features.sync.title': 'iCloud Synchronisation',
      'features.sync.desc': 'Synchronisieren Sie nahtlos über alle Ihre Apple-Geräte und greifen Sie überall auf Ihre Finanzdaten zu.',
      'features.automation.title': 'Intelligente Automatisierung',
      'features.automation.desc': 'Schnellzugriff, wiederkehrende Transaktionen und Home-Screen-Widgets für schnelle Transaktionseingabe.',
      'features.customize.title': 'Anpassbare Erfahrung',
      'features.customize.desc': 'Wählen Sie zwischen Hell- und Dunkelmodus und nutzen Sie die App in mehreren Sprachen.',
      'features.export.title': 'Import & Export',
      'features.export.desc': 'Importieren Sie Transaktionen aus CSV-Dateien und exportieren Sie Ihre Daten für andere Tools.',
      'screenshots.title': 'App Screenshots',
      'overview.title1': 'Finanztracking',
      'overview.title2': 'einfach gemacht',
      'overview.desc': 'CashProtector macht das Tracking Ihrer Finanzen mühelos. Keine vergessenen Ausgaben mehr und keine Zeitverschwendung durch komplizierte App-Navigation.',
      'overview.feature1.title': 'Einfach tippen',
      'overview.feature1.desc': 'Verwenden Sie Home-Screen-Widgets, um Ausgaben sofort zu erfassen, ohne die App zu öffnen.',
      'overview.feature2.title': 'Einfach halten',
      'overview.feature2.desc': 'Drücken Sie das App-Symbol, um direkt zum Transaktionserstellungsbildschirm zu gelangen.',
      'overview.feature3.title': 'Einmal einrichten',
      'overview.feature3.desc': 'Automatische Verfolgung wiederkehrender Rechnungen und Einkommen.',
      'quote.title': 'Verfolgen Sie Ihre Finanzen, ohne Ihren Tag zu unterbrechen.',
      'quote.subtitle': 'CashProtector passt sich Ihrem Leben an, nicht umgekehrt.',
      'privacy.title1': 'Ihre Finanzdaten gehören',
      'privacy.title2': 'nur Ihnen',
      'privacy.subtitle': 'Bei CashProtector steht Ihre finanzielle Privatsphäre an erster Stelle.',
      'privacy.feature1.title': 'Keine Datenweitergabe:',
      'privacy.feature1.desc': 'Wir sammeln, greifen nicht auf Ihre Finanzdaten zu und speichern sie nicht.',
      'privacy.feature2.title': 'Keine Werbung:',
      'privacy.feature2.desc': 'Keine Anzeigen, kein Tracking und keine Datenweitergabe.',
      'privacy.feature3.title': 'Lokale Speicherung:',
      'privacy.feature3.desc': 'Alle Ihre Daten bleiben sicher auf Ihrem Gerät oder in Ihrer persönlichen iCloud.',
      'privacy.feature4.title': 'Volle Kontrolle:',
      'privacy.feature4.desc': 'Sie können Ihre Daten jederzeit exportieren oder löschen.',
      'languages.title': 'Verfügbar in mehreren Sprachen',
      'languages.subtitle': 'Die App ist in den folgenden Sprachen verfügbar:',
      'languages.english': 'Englisch',
      'languages.german': 'Deutsch',
      'languages.spanish': 'Spanisch',
      'languages.french': 'Französisch',
      'languages.italian': 'Italienisch',
      'languages.russian': 'Russisch',
      'download.title': 'Jetzt herunterladen',
      'download.subtitle': 'Nehmen Sie die Kontrolle über Ihre persönlichen Finanzen, ohne Kompromisse bei Privatsphäre oder Sicherheit einzugehen.',
      'download.button': 'Beta App herunterladen',
      'download.compatibility': 'CashProtector ist für iPhone und iPad mit iOS 18 oder neuer verfügbar.',
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Haben Sie Fragen zur App? Kontaktieren Sie mich gerne!',
      'contact.support.title': 'Support erhalten',
      'contact.support.desc': 'Bei Fragen zur App oder für Feedback können Sie mich über folgende Wege erreichen:',
      'contact.support.email': 'E-Mail',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.app-privacy': 'Datenschutz CashProtector'
    },
    'en': {
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.contact': 'Contact',
      'hero.subtitle': 'Simplify Your Personal Finances',
      'hero.description': 'Never miss a transaction again - Save time & stay organized',
      'hero.download': 'Download Beta App',
      'hero.explore': 'Explore Features',
      'features.title': 'Main Features',
      'features.tracking.title': 'Comprehensive Financial Tracking',
      'features.tracking.desc': 'Track expenses, income, and transfers between accounts with customizable categories.',
      'features.reports.title': 'Visual Reports',
      'features.reports.desc': 'See your spending patterns with intuitive charts and monitor account balances over time.',
      'features.secure.title': 'Secure & Private',
      'features.secure.desc': 'All your financial data stays on your device or in your personal iCloud account.',
      'features.receipts.title': 'Receipt Management',
      'features.receipts.desc': 'Scan receipts directly with your camera and store them locally with your transactions.',
      'features.sync.title': 'iCloud Synchronization',
      'features.sync.desc': 'Sync seamlessly across all your Apple devices and access your financial data anywhere.',
      'features.automation.title': 'Intelligent Automation',
      'features.automation.desc': 'Quick access, recurring transactions, and home screen widgets for fast transaction entry.',
      'features.customize.title': 'Customizable Experience',
      'features.customize.desc': 'Choose between light and dark mode and use the app in multiple languages.',
      'features.export.title': 'Import & Export',
      'features.export.desc': 'Import transactions from CSV files and export your data for use with other tools.',
      'screenshots.title': 'App Screenshots',
      'overview.title1': 'Financial tracking',
      'overview.title2': 'made easy',
      'overview.desc': 'CashProtector makes tracking your finances effortless. No more forgotten expenses and no time wasted on complicated app navigation.',
      'overview.feature1.title': 'Just tap',
      'overview.feature1.desc': 'Use home screen widgets to capture expenses instantly without opening the app.',
      'overview.feature2.title': 'Just hold',
      'overview.feature2.desc': 'Press the app icon to go directly to the transaction creation screen.',
      'overview.feature3.title': 'Set up once',
      'overview.feature3.desc': 'Automatic tracking of recurring bills and income.',
      'quote.title': 'Track your finances without interrupting your day.',
      'quote.subtitle': 'CashProtector adapts to your life, not the other way around.',
      'privacy.title1': 'Your financial data belongs',
      'privacy.title2': 'only to you',
      'privacy.subtitle': 'At CashProtector, your financial privacy comes first.',
      'privacy.feature1.title': 'No Data Sharing:',
      'privacy.feature1.desc': 'We don\'t collect, access, or store your financial data.',
      'privacy.feature2.title': 'No Ads:',
      'privacy.feature2.desc': 'No advertisements, no tracking, and no data sharing.',
      'privacy.feature3.title': 'Local Storage:',
      'privacy.feature3.desc': 'All your data stays secure on your device or in your personal iCloud.',
      'privacy.feature4.title': 'Full Control:',
      'privacy.feature4.desc': 'You can export or delete your data at any time.',
      'languages.title': 'Available in Multiple Languages',
      'languages.subtitle': 'The app is available in the following languages:',
      'languages.english': 'English',
      'languages.german': 'German',
      'languages.spanish': 'Spanish',
      'languages.french': 'French',
      'languages.italian': 'Italian',
      'languages.russian': 'Russian',
      'download.title': 'Download Now',
      'download.subtitle': 'Take control of your personal finances without compromising on privacy or security.',
      'download.button': 'Download Beta App',
      'download.compatibility': 'CashProtector is available for iPhone and iPad with iOS 18 or newer.',
      'contact.title': 'Contact',
      'contact.subtitle': 'Have questions about the app? Feel free to reach out!',
      'contact.support.title': 'Get Support',
      'contact.support.desc': 'For questions about the app or to provide feedback, you can reach me through:',
      'contact.support.email': 'Email',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',
      'footer.app-privacy': 'CashProtector Privacy Policy'
    }
  };
  
  // Set the language on page load (default to German)
  let currentLang = 'de';
  
  // Function to update content based on selected language
  function updateContent(lang) {
    // Update HTML elements with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (languages[lang][key]) {
        element.textContent = languages[lang][key];
      }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update screenshot images
    document.querySelectorAll('.screenshot-img').forEach(img => {
      const imgId = img.getAttribute('data-img-id');
      if (lang === 'en') {
        img.src = `./img/en/${imgId}.jpg`;
      } else {
        img.src = `./img/${imgId}.jpg`;
      }
    });
    
    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Update current language
    currentLang = lang;
  }
  
  // Add event listeners to language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      updateContent(lang);
      
      // Close the mobile navbar if it's open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
  
  // Initialize with German
  updateContent('de');
  
  // Add click handler to close mobile navbar when any nav link is clicked
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });
});