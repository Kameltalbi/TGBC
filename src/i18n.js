import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions françaises
const frTranslations = {
  header: {
    tgbc: "Le TGBC",
    membership: "Adhésion",
    programs: "Programmes",
    agenda: "Agenda",
    resources: "Ressources",
    becomeMember: "Devenir membre"
  },
  hero: {
    title: "Construisons ensemble un avenir durable en Tunisie",
    subtitle: "Le Tunisia Green Building Council promeut la construction écologique, développe un réseau professionnel dynamique et fournit des ressources essentielles pour transformer le secteur du bâtiment en Tunisie.",
    becomeMember: "Devenir membre",
    discoverPrograms: "Découvrir nos programmes"
  },
  presentation: {
    title: "À propos du TGBC",
    description: "Le Tunisia Green Building Council est une organisation à but non lucratif dédiée à la promotion de la construction durable en Tunisie. Nous rassemblons les professionnels du secteur pour créer un écosystème vert et innovant.",
    learnMore: "En savoir plus",
    innovation: "Innovation",
    sustainability: "Durabilité",
    community: "Communauté"
  },
  keyFigures: {
    title: "Nos Chiffres Clés",
    members: "Membres actifs",
    projects: "Projets certifiés",
    events: "Événements organisés",
    resources: "Ressources disponibles"
  },
  news: {
    title: "Actualités & Articles",
    seeAll: "Voir toutes les actualités",
    leedCertification: "Nouvelle certification LEED en Tunisie",
    leedDescription: "Découvrez les premiers projets certifiés LEED dans notre pays...",
    sustainableMaterials: "Formation sur les matériaux durables",
    materialsDescription: "Une session de formation intensive sur les nouveaux matériaux...",
    annualReport: "Rapport annuel 2024",
    reportDescription: "Consultez notre rapport annuel sur l'état de la construction..."
  },
  events: {
    title: "Événements à venir",
    allEvents: "Tous les événements",
    sustainableConference: "Conférence sur la construction durable",
    conferenceDescription: "Une journée dédiée aux innovations dans le secteur...",
    ecoWorkshop: "Atelier matériaux écologiques",
    workshopDescription: "Découvrez les nouveaux matériaux de construction...",
    certifiedVisit: "Visite de site certifié",
    visitDescription: "Visite guidée d'un bâtiment certifié LEED...",
    register: "S'inscrire"
  },
  programs: {
    title: "Programmes & Initiatives",
    discover: "Découvrir nos programmes",
    certifications: "Certifications",
    certificationsDesc: "Programmes de certification pour les bâtiments verts et les professionnels",
    training: "Formations",
    trainingDesc: "Ateliers et formations spécialisées en construction durable",
    tools: "Outils pratiques",
    toolsDesc: "Guides et outils pour la mise en œuvre de projets durables",
    pilotProjects: "Projets pilotes",
    pilotDesc: "Accompagnement de projets innovants et durables"
  },
  testimonials: {
    title: "Témoignages & Partenaires",
    joinNetwork: "Rejoindre le réseau",
    testimonial1: "Le TGBC m'a permis de développer mes compétences en construction durable et de rejoindre un réseau professionnel dynamique.",
    author1: "- Ahmed Ben Ali, Architecte",
    testimonial2: "Grâce aux formations du TGBC, notre entreprise a pu certifier ses premiers projets verts.",
    author2: "- Fatma Khelil, Directrice Projets"
  },
  resources: {
    title: "Ressources en accès libre",
    accessAll: "Accéder à toutes nos ressources",
    reports: "Rapports",
    reportsDesc: "Études et rapports sur la construction durable",
    guides: "Guides pratiques",
    guidesDesc: "Manuels et guides pour les professionnels",
    videos: "Vidéos",
    videosDesc: "Formations et conférences en ligne"
  },
  newsletter: {
    title: "Restez informés sur la construction durable en Tunisie",
    subtitle: "Recevez nos dernières actualités, événements et ressources directement dans votre boîte mail.",
    placeholder: "Votre adresse email",
    subscribe: "S'abonner"
  },
  countdown: {
    title: "Site en construction",
    subtitle: "Notre nouveau site sera bientôt en ligne !"
  },
  about: {
    heroTitle: "Tunisia Green Building Council",
    heroSubtitle: "Le Tunisia Green Building Council est une organisation à but non lucratif dédiée à la promotion de la construction durable en Tunisie.",
    visionTitle: "Notre Vision",
    visionText: "Construire un avenir durable pour la Tunisie, où chaque bâtiment et chaque projet urbain respectent l'environnement, améliorent la qualité de vie et contribuent à la lutte contre le changement climatique.",
    missionTitle: "Notre Mission",
    missionText: "Le Tunisia Green Building Council (TGBC) œuvre pour :",
    missionList: [
      "Promouvoir la construction durable et l'efficacité énergétique dans le secteur du bâtiment.",
      "Sensibiliser et former les acteurs publics, privés et académiques aux enjeux environnementaux.",
      "Développer et adapter des outils de certification et de référence propres au contexte tunisien.",
      "Créer une plateforme de collaboration entre professionnels, chercheurs, institutions et citoyens.",
      "Accompagner la Tunisie dans sa transition vers une économie bas carbone."
    ],
    valuesTitle: "Nos Valeurs",
    innovation: "Innovation",
    innovationDesc: "Encourager les nouvelles pratiques et technologies écologiques.",
    integrity: "Intégrité",
    integrityDesc: "Agir avec transparence et responsabilité.",
    collaboration: "Collaboration",
    collaborationDesc: "Fédérer les acteurs du secteur autour d'objectifs communs.",
    sustainability: "Durabilité",
    sustainabilityDesc: "Assurer une performance environnementale, sociale et économique à long terme.",
    historyTitle: "Notre Histoire",
    historyText1: "Fondé en 2012, le Tunisia Green Building Council est né de l'initiative d'architectes, d'ingénieurs, d'universitaires et d'écologistes tunisiens.",
    historyText2: "Depuis sa création, le TGBC s'impose comme un acteur majeur dans la promotion de la construction respectueuse de l'environnement, en s'inspirant des meilleures pratiques internationales tout en tenant compte des spécificités locales.",
    governanceTitle: "Gouvernance et Équipe",
    governanceText1: "Le TGBC repose sur une équipe pluridisciplinaire composée de professionnels du bâtiment, d'experts en durabilité, de chercheurs et de représentants institutionnels.",
    governanceText2: "Le Conseil est piloté par un bureau exécutif, épaulé par des commissions techniques et scientifiques qui assurent la pertinence et la qualité des initiatives mises en œuvre.",
    partnersTitle: "Nos Partenaires",
    partnersText: "Le TGBC collabore avec :",
    partnersList: [
      "Les institutions publiques (ministères, municipalités, agences nationales).",
      "Les organisations professionnelles du bâtiment et de l'énergie.",
      "Les universités et centres de recherche.",
      "Les organisations internationales engagées dans la durabilité."
    ],
    contactTitle: "Contact",
    address: "Adresse du siège (à préciser)",
    email: "Email : contact@tgbc.org",
    social: "Suivez-nous sur : LinkedIn | Facebook | Twitter"
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets de construction durable.",
    form: {
      name: "Nom complet",
      email: "Adresse email",
      phone: "Téléphone",
      company: "Entreprise/Organisation",
      subject: "Sujet",
      message: "Votre message",
      send: "Envoyer le message"
    },
    info: {
      title: "Informations de contact",
      address: "Adresse",
      addressValue: "Adresse du siège (à préciser)",
      phone: "Téléphone",
      phoneValue: "+216 XX XXX XXX",
      email: "Email",
      emailValue: "contact@tgbc.org",
      hours: "Heures d'ouverture",
      hoursValue: "Lundi - Vendredi: 9h00 - 17h00"
    },
    faq: {
      title: "Questions fréquentes",
      q1: "Comment devenir membre du TGBC ?",
      a1: "Pour devenir membre, vous pouvez remplir le formulaire d'adhésion en ligne ou nous contacter directement.",
      q2: "Quels sont les avantages de l'adhésion ?",
      a2: "L'adhésion vous donne accès à nos formations, événements, ressources et réseau professionnel.",
      q3: "Proposez-vous des formations ?",
      a3: "Oui, nous organisons régulièrement des formations et ateliers sur la construction durable.",
      q4: "Comment certifier mon projet ?",
      a4: "Nous proposons des programmes de certification adaptés au contexte tunisien."
    }
  }
};

// Traductions anglaises
const enTranslations = {
  header: {
    tgbc: "About TGBC",
    membership: "Membership",
    programs: "Programs",
    agenda: "Agenda",
    resources: "Resources",
    becomeMember: "Become a member"
  },
  hero: {
    title: "Let's build a sustainable future together in Tunisia",
    subtitle: "The Tunisia Green Building Council promotes ecological construction, develops a dynamic professional network and provides essential resources to transform the building sector in Tunisia.",
    becomeMember: "Become a member",
    discoverPrograms: "Discover our programs"
  },
  presentation: {
    title: "About TGBC",
    description: "The Tunisia Green Building Council is a non-profit organization dedicated to promoting sustainable construction in Tunisia. We bring together professionals in the sector to create a green and innovative ecosystem.",
    learnMore: "Learn more",
    innovation: "Innovation",
    sustainability: "Sustainability",
    community: "Community"
  },
  keyFigures: {
    title: "Our Key Figures",
    members: "Active members",
    projects: "Certified projects",
    events: "Organized events",
    resources: "Available resources"
  },
  news: {
    title: "News & Articles",
    seeAll: "See all news",
    leedCertification: "New LEED certification in Tunisia",
    leedDescription: "Discover the first LEED certified projects in our country...",
    sustainableMaterials: "Training on sustainable materials",
    materialsDescription: "An intensive training session on new materials...",
    annualReport: "Annual report 2024",
    reportDescription: "Consult our annual report on the state of construction..."
  },
  events: {
    title: "Upcoming Events",
    allEvents: "All events",
    sustainableConference: "Sustainable construction conference",
    conferenceDescription: "A day dedicated to innovations in the sector...",
    ecoWorkshop: "Eco materials workshop",
    workshopDescription: "Discover new construction materials...",
    certifiedVisit: "Certified site visit",
    visitDescription: "Guided tour of a LEED certified building...",
    register: "Register"
  },
  programs: {
    title: "Programs & Initiatives",
    discover: "Discover our programs",
    certifications: "Certifications",
    certificationsDesc: "Certification programs for green buildings and professionals",
    training: "Training",
    trainingDesc: "Workshops and specialized training in sustainable construction",
    tools: "Practical tools",
    toolsDesc: "Guides and tools for implementing sustainable projects",
    pilotProjects: "Pilot projects",
    pilotDesc: "Support for innovative and sustainable projects"
  },
  testimonials: {
    title: "Testimonials & Partners",
    joinNetwork: "Join the network",
    testimonial1: "TGBC has allowed me to develop my skills in sustainable construction and join a dynamic professional network.",
    author1: "- Ahmed Ben Ali, Architect",
    testimonial2: "Thanks to TGBC training, our company was able to certify its first green projects.",
    author2: "- Fatma Khelil, Project Director"
  },
  resources: {
    title: "Free access resources",
    accessAll: "Access all our resources",
    reports: "Reports",
    reportsDesc: "Studies and reports on sustainable construction",
    guides: "Practical guides",
    guidesDesc: "Manuals and guides for professionals",
    videos: "Videos",
    videosDesc: "Online training and conferences"
  },
  newsletter: {
    title: "Stay informed about sustainable construction in Tunisia",
    subtitle: "Receive our latest news, events and resources directly in your mailbox.",
    placeholder: "Your email address",
    subscribe: "Subscribe"
  },
  countdown: {
    title: "Site under construction",
    subtitle: "Our new site will be online soon!"
  },
  about: {
    heroTitle: "Tunisia Green Building Council",
    heroSubtitle: "The Tunisia Green Building Council is a non-profit organization dedicated to promoting sustainable construction in Tunisia.",
    visionTitle: "Our Vision",
    visionText: "Building a sustainable future for Tunisia, where every building and every urban project respects the environment, improves quality of life and contributes to the fight against climate change.",
    missionTitle: "Our Mission",
    missionText: "The Tunisia Green Building Council (TGBC) works to:",
    missionList: [
      "Promote sustainable construction and energy efficiency in the building sector.",
      "Raise awareness and train public, private and academic actors on environmental issues.",
      "Develop and adapt certification and reference tools specific to the Tunisian context.",
      "Create a collaboration platform between professionals, researchers, institutions and citizens.",
      "Support Tunisia in its transition to a low-carbon economy."
    ],
    valuesTitle: "Our Values",
    innovation: "Innovation",
    innovationDesc: "Encourage new ecological practices and technologies.",
    integrity: "Integrity",
    integrityDesc: "Act with transparency and responsibility.",
    collaboration: "Collaboration",
    collaborationDesc: "Federate sector actors around common objectives.",
    sustainability: "Sustainability",
    sustainabilityDesc: "Ensure long-term environmental, social and economic performance.",
    historyTitle: "Our History",
    historyText1: "Founded in 2012, the Tunisia Green Building Council was born from the initiative of Tunisian architects, engineers, academics and environmentalists.",
    historyText2: "Since its creation, TGBC has established itself as a major player in promoting environmentally friendly construction, drawing inspiration from international best practices while taking into account local specificities.",
    governanceTitle: "Governance and Team",
    governanceText1: "TGBC relies on a multidisciplinary team made up of building professionals, sustainability experts, researchers and institutional representatives.",
    governanceText2: "The Council is led by an executive board, supported by technical and scientific commissions that ensure the relevance and quality of the initiatives implemented.",
    partnersTitle: "Our Partners",
    partnersText: "TGBC collaborates with:",
    partnersList: [
      "Public institutions (ministries, municipalities, national agencies).",
      "Professional organizations in construction and energy.",
      "Universities and research centers.",
      "International organizations committed to sustainability."
    ],
    contactTitle: "Contact",
    address: "Headquarters address (to be specified)",
    email: "Email: contact@tgbc.org",
    social: "Follow us on: LinkedIn | Facebook | Twitter"
  },
  contact: {
    title: "Contact us",
    subtitle: "We are here to answer your questions and support you in your sustainable construction projects.",
    form: {
      name: "Full name",
      email: "Email address",
      phone: "Phone",
      company: "Company/Organization",
      subject: "Subject",
      message: "Your message",
      send: "Send message"
    },
    info: {
      title: "Contact information",
      address: "Address",
      addressValue: "Headquarters address (to be specified)",
      phone: "Phone",
      phoneValue: "+216 XX XXX XXX",
      email: "Email",
      emailValue: "contact@tgbc.org",
      hours: "Opening hours",
      hoursValue: "Monday - Friday: 9:00 AM - 5:00 PM"
    },
    faq: {
      title: "Frequently asked questions",
      q1: "How to become a TGBC member?",
      a1: "To become a member, you can fill out the online membership form or contact us directly.",
      q2: "What are the benefits of membership?",
      a2: "Membership gives you access to our training, events, resources and professional network.",
      q3: "Do you offer training?",
      a3: "Yes, we regularly organize training and workshops on sustainable construction.",
      q4: "How to certify my project?",
      a4: "We offer certification programs adapted to the Tunisian context."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
