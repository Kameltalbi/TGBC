import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traductions françaises
const frTranslations = {
  header: {
    tgbc: "Le TGBC",
    membership: "Adhésion",
    programs: "Programmes",
    events: "Événements",
    news: "Actualités",
    resources: "Ressources",
    becomeMember: "Devenir membre"
  },
  hero: {
    slide1: {
      title: "Soyez partie de la transition verte de la Tunisie",
      subtitle: "Au Tunisia Green Building Council, nous nous engageons à conduire la transformation durable dans l'environnement bâti. Grâce à l'éducation, l'innovation et la collaboration, nous donnons aux professionnels, aux entreprises et aux communautés les moyens de construire des espaces plus intelligents, plus verts et plus sains.",
      cta: "Rejoignez-nous"
    },
    slide2: {
      title: "Votre rôle compte",
      subtitle: "Que vous soyez expert ou que vous commenciez votre parcours vers la durabilité, votre rôle compte. Formons ensemble une Tunisie plus résiliente et éco-consciente.",
      cta: "Découvrir nos programmes"
    },
    slide3: {
      title: "Éducation & Innovation",
      subtitle: "Grâce à des programmes éducatifs complets et à des solutions innovantes, nous construisons une communauté de leaders durables qui transforment l'environnement bâti de la Tunisie pour un meilleur avenir.",
      cta: "En savoir plus"
    },
    slide4: {
      title: "Partenariat & Collaboration",
      subtitle: "Rejoignez notre réseau de professionnels engagés pour construire ensemble l'avenir durable de la Tunisie. Ensemble, nous créons des solutions innovantes pour un environnement bâti plus respectueux.",
      cta: "Rejoindre le réseau"
    },
    learnMore: "En savoir plus"
  },
  presentation: {
    title: "À propos du TGBC",
    description: "Le Tunisia Green Building Council (TGBC) œuvre pour un avenir durable en promouvant la construction écologique en Tunisie. À travers ses programmes, ses formations et ses partenariats, le TGBC encourage l'innovation, l'efficacité énergétique et le respect de l'environnement dans le secteur du bâtiment.",
    learnMore: "En savoir plus sur le TGBC",
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
    heroTitle: "Nos Programmes pour un Bâtiment Durable",
    heroDescription: "Le Tunisia Green Building Council (TGBC) développe des programmes visant à accélérer la transition vers des bâtiments écologiques, sains et économes en énergie. Ces initiatives s'adressent aux professionnels, aux institutions et aux citoyens qui souhaitent contribuer à un avenir durable.",
    heroCta: "Découvrir nos initiatives",
    axesTitle: "Les grands axes de nos programmes",
    axesDescription: "Présentation synthétique des domaines dans lesquels le TGBC agit",
    axesList: [
      {
        icon: "🏫",
        title: "Construction durable",
        description: "Promotion des pratiques de conception, construction et rénovation respectueuses de l'environnement."
      },
      {
        icon: "💡",
        title: "Efficacité énergétique",
        description: "Accompagnement des acteurs du bâtiment pour réduire la consommation et optimiser les ressources."
      },
      {
        icon: "🌱",
        title: "Matériaux écologiques",
        description: "Sensibilisation à l'usage de matériaux locaux, recyclables et à faible empreinte carbone."
      },
      {
        icon: "🏙",
        title: "Urbanisme durable",
        description: "Intégration des principes d'écologie urbaine dans les projets d'aménagement du territoire."
      },
      {
        icon: "🎓",
        title: "Formation & certification",
        description: "Développement des compétences à travers des formations, webinaires et certifications internationales."
      },
      {
        icon: "🤝",
        title: "Partenariats & plaidoyer",
        description: "Collaboration avec les institutions, entreprises et ONG pour faire évoluer les politiques publiques."
      }
    ],
              programsTitle: "Nos Programmes phares",
              programsDescription: "Découvrez nos initiatives emblématiques du TGBC",
              featuredProgramsTitle: "Nos Programmes Phares",
              featuredProgramsDescription: "Les programmes phares du Tunisia Green Building Council (TGBC) incarnent son engagement concret en faveur du bâtiment durable et de la transition écologique en Tunisie. Ils couvrent des domaines clés tels que la formation et la certification environnementale, la promotion des matériaux écologiques, la recherche sur l'efficacité énergétique, et l'accompagnement des collectivités locales dans la planification urbaine durable. À travers ces initiatives, le TGBC favorise la montée en compétence des professionnels, soutient l'innovation dans la construction et contribue à la diffusion d'une culture du développement durable à l'échelle nationale. Ces programmes constituent un levier essentiel pour accélérer la transformation du secteur et créer des villes plus vertes et résilientes.",
              objectivesTitle: "Objectifs",
              objectivesDescription: "Le cours d'introduction fournit des connaissances en durabilité aux participants non-techniques et aux professionnels de l'industrie qui souhaitent comprendre les bases de la rénovation des bâtiments et de l'efficacité énergétique dans la région du Golfe. L'atelier interactif est parfait pour ceux qui souhaitent acquérir une base solide de l'industrie de la rénovation des bâtiments.",
              targetAudienceTitle: "Public Cible",
              targetAudienceDescription: "Nos programmes s'adressent à un large éventail de professionnels et d'organisations engagés dans la construction durable. Que vous soyez architecte, ingénieur, promoteur immobilier, gestionnaire d'installations, représentant d'une collectivité locale ou d'une institution publique, nos formations et initiatives sont conçues pour répondre à vos besoins spécifiques. Nous accueillons également les propriétaires de bâtiments, les professionnels de l'hôtellerie, les bureaux d'études et les ONG qui souhaitent intégrer les principes du développement durable dans leurs projets. Aucune expérience préalable n'est requise, nos programmes s'adaptent à tous les niveaux de compétence.",
              eligibilityTitle: "Éligibilité",
              eligibilityDescription: "Il n'y a aucune expérience préalable ou qualification requise pour le cours et il convient aux professionnels de tous niveaux et à toute personne intéressée par la compréhension des fondamentaux de la rénovation des bâtiments.",
              courseContentsTitle: "Contenu du Cours",
              audienceCategories: [
                {
                  title: "Professionnels de l'industrie",
                  items: ["Architectes", "Ingénieurs", "Promoteurs", "Bureaux d'études"]
                },
                {
                  title: "Décideurs & Institutions",
                  items: ["Collectivités locales", "Ministères", "Agences publiques", "ONG"]
                },
                {
                  title: "Secteur privé",
                  items: ["Propriétaires de bâtiments", "Gestionnaires d'installations", "Professionnels de l'hôtellerie"]
                }
              ],
    all: "Tous",
    education: "Éducation",
    training: "Formation",
    research: "Recherche",
    partnership: "Partenariat",
    programsList: [
      {
        category: "education",
        title: "Programme \"Green Education\"",
        description: "Sensibiliser les étudiants et enseignants aux principes de la construction durable à travers des ateliers et des concours inter-universitaires.",
        image: "https://via.placeholder.com/400x200?text=Green+Education",
        link: "/programs/green-education",
        cta: "En savoir plus"
      },
      {
        category: "training",
        title: "Programme \"TGBC Training Series\"",
        description: "Cycle de formations certifiantes en partenariat avec des experts nationaux et internationaux pour professionnaliser les acteurs du bâtiment durable.",
        image: "https://via.placeholder.com/400x200?text=Training+Series",
        link: "/programs/training-series",
        cta: "Voir le calendrier"
      },
      {
        category: "partnership",
        title: "Programme \"Green Cities Tunisia\"",
        description: "Accompagner les municipalités dans l'intégration de solutions vertes et de stratégies bas carbone dans leurs projets urbains.",
        image: "https://via.placeholder.com/400x200?text=Green+Cities",
        link: "/programs/green-cities",
        cta: "Découvrir le programme"
      },
      {
        category: "research",
        title: "Programme \"Innovation & Research Hub\"",
        description: "Soutenir la recherche et l'innovation technologique dans les domaines de l'énergie, des matériaux et de l'architecture bioclimatique.",
        image: "https://via.placeholder.com/400x200?text=Research+Hub",
        link: "/programs/research-hub",
        cta: "Rejoindre le réseau"
      }
    ],
    impactTitle: "Impacts et résultats",
    impactDescription: "Nos chiffres clés et indicateurs de performance",
    professionals: "Professionnels formés",
    projects: "Projets accompagnés",
    activePrograms: "Programmes actifs",
    buildings: "Bâtiments durables",
    partnerships: "Partenariats",
    ctaTitle: "Appel à participation",
    ctaDescription: "Vous souhaitez contribuer à un projet, devenir partenaire ou lancer un programme avec le TGBC ?",
    proposeCollaboration: "Proposer une collaboration",
    becomeMember: "Devenir membre",
    testimonialsTitle: "Témoignages & Partenaires",
    testimonialsList: [
      {
        text: "Grâce aux programmes TGBC, notre entreprise a pu certifier ses premiers projets verts et améliorer significativement notre impact environnemental.",
        name: "Ahmed Ben Ali",
        position: "Directeur Technique",
        company: "Constructa Tunisie"
      },
      {
        text: "Les formations TGBC m'ont permis de développer mes compétences en construction durable et d'intégrer un réseau professionnel dynamique.",
        name: "Fatma Khelil",
        position: "Architecte",
        company: "Studio Vert"
      },
      {
        text: "Le programme Green Cities nous a accompagnés dans la mise en place de solutions durables pour notre municipalité.",
        name: "Mohamed Trabelsi",
        position: "Maire",
        company: "Municipalité de Sousse"
      }
    ],
    partnersTitle: "Nos Partenaires",
    partnersList: [
      {
        name: "BERD",
        logo: "https://via.placeholder.com/150x80?text=BERD"
      },
      {
        name: "IFC",
        logo: "https://via.placeholder.com/150x80?text=IFC"
      },
      {
        name: "GIZ",
        logo: "https://via.placeholder.com/150x80?text=GIZ"
      },
      {
        name: "Ministère Environnement",
        logo: "https://via.placeholder.com/150x80?text=Min+Env"
      },
      {
        name: "Université Tunis",
        logo: "https://via.placeholder.com/150x80?text=Univ+Tunis"
      }
    ],
    linksTitle: "Liens transversaux",
    linksDescription: "Consultez notre agenda pour découvrir les prochaines formations, conférences et actions liées à nos programmes.",
    viewAgenda: "Voir l'agenda des événements",
    accessResources: "Accéder aux ressources"
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
    heroTitle: "À propos de TGBC",
    heroSubtitle: "Construire aujourd'hui, penser demain.",
    heroDescription: "Le Tunisia Green Building Council (TGBC) est une organisation à but non lucratif dédiée à la promotion du bâtiment durable en Tunisie. Nous rassemblons les acteurs du secteur de la construction, de l'ingénierie, de l'urbanisme et de l'environnement pour encourager des pratiques responsables, innovantes et respectueuses de la planète.",
    missionTitle: "Notre Mission",
    missionText: "Promouvoir une culture du bâtiment durable en Tunisie en sensibilisant, formant, et accompagnant les acteurs publics et privés dans la transition vers des constructions écologiques, efficaces et saines.",
    visionTitle: "Notre Vision",
    visionText: "Une Tunisie où chaque bâtiment contribue positivement à l'environnement, à la santé publique, et au développement économique durable.",
    objectivesTitle: "Nos Objectifs",
    objectivesList: [
      "Favoriser l'adoption des normes et labels de construction durable (ex : LEED, EDGE, etc.)",
      "Sensibiliser les professionnels et le grand public à l'importance du développement durable dans le bâtiment",
      "Développer des partenariats nationaux et internationaux",
      "Accompagner les projets de construction dans l'intégration de solutions durables",
      "Contribuer aux politiques publiques et à la réglementation environnementale"
    ],
    valuesTitle: "Nos Valeurs",
    sustainability: "Durabilité",
    sustainabilityDesc: "Agir pour les générations futures",
    innovation: "Innovation",
    innovationDesc: "Encourager les solutions nouvelles et efficaces",
    collaboration: "Collaboration",
    collaborationDesc: "Travailler ensemble pour un impact réel",
    transparency: "Transparence",
    transparencyDesc: "Garantir l'intégrité de nos actions",
    responsibility: "Responsabilité",
    responsibilityDesc: "Intégrer les enjeux sociaux et environnementaux dans chaque projet",
    teamTitle: "Notre Équipe",
    teamText: "Une équipe pluridisciplinaire de professionnels engagés : architectes, ingénieurs, experts en énergie, urbanistes, juristes et consultants environnementaux.",
    foundersTitle: "Nos Membres Fondateurs",
    foundersText: "TGBC a été fondé par un collectif de professionnels tunisiens partageant une même conviction : il est temps d'agir localement pour bâtir durablement.",
    networkTitle: "Notre Réseau",
    networkText: "TGBC est en lien avec plusieurs initiatives régionales et internationales :",
    networkList: [
      "World Green Building Council",
      "GBCI (Green Business Certification Inc.)",
      "Universités, centres de recherche et institutions publiques tunisiennes",
      "ONG locales et internationales"
    ],
    downloadsTitle: "Téléchargements / Liens Utiles",
    downloadsList: [
      "Brochure de présentation (PDF)",
      "Rapport d'activités",
      "Charte des membres"
    ],
    contactTitle: "Contact",
    address: "Adresse du siège (à préciser)",
    email: "Email : contact@tgbc.org",
    social: "Suivez-nous sur : LinkedIn | Facebook | Twitter"
  },
  membership: {
    heroTitle: "Rejoindre le TGBC",
    heroSubtitle: "Rejoignez le mouvement du bâtiment durable en Tunisie.",
    heroDescription: "En devenant membre du TGBC, vous intégrez un réseau national et international d'acteurs engagés pour un avenir plus vert. Ensemble, nous bâtissons des solutions concrètes pour réduire l'impact environnemental du secteur de la construction.",
    heroDetails: "Devenir membre du Tunisia Green Building Council (TGBC), c'est rejoindre un réseau national en pleine expansion qui rassemble plus d'une centaine d'acteurs de la chaîne de valeur du bâtiment durable : architectes, ingénieurs, promoteurs, bureaux d'études, institutions publiques, industriels, établissements d'enseignement, ONG et médias spécialisés. L'adhésion au TGBC offre à ses membres un accès privilégié à des ressources techniques, des formations spécialisées, des événements exclusifs et des opportunités de collaboration avec des experts du développement durable. Elle permet également de renforcer la visibilité des entreprises et des professionnels engagés, d'accroître leur crédibilité auprès des décideurs et partenaires, et de valoriser leurs initiatives environnementales à travers les canaux de communication du TGBC. C'est un véritable levier pour intégrer les meilleures pratiques du bâtiment vert et contribuer activement à la transition écologique du secteur en Tunisie.",
    cta: "Je deviens membre",
    whyJoinTitle: "Pourquoi devenir membre ?",
    communityTitle: "Une communauté engagée",
    communityDesc: "Rejoignez un réseau dynamique regroupant architectes, ingénieurs, promoteurs, chercheurs, collectivités et institutions partageant une même vision du développement durable.",
    knowledgeTitle: "Un accès privilégié à la connaissance",
    knowledgeDesc: "Profitez de formations, conférences et ressources exclusives sur les normes, certifications et innovations en matière de construction écologique.",
    collaborationTitle: "Des opportunités de collaboration",
    collaborationDesc: "Participez à des projets pilotes, à des groupes de travail thématiques et à des initiatives nationales et régionales soutenues par le TGBC et ses partenaires internationaux.",
    visibilityTitle: "Visibilité et reconnaissance",
    visibilityDesc: "Bénéficiez d'une reconnaissance officielle en tant qu'acteur engagé dans le développement durable et valorisez vos projets à travers nos médias et événements.",
    categoriesTitle: "Les catégories d'adhésion",
    categoriesDesc: "Chaque acteur du secteur peut trouver sa place au sein du TGBC. Les adhésions sont ouvertes aux personnes physiques et morales selon plusieurs formules adaptées.",
    individualTitle: "Membre individuel",
    individualPrice: "150 DT",
    individualTarget: "Architectes, ingénieurs, chercheurs, étudiants",
    individualBenefits: [
      "Accès aux événements",
      "Formations et ressources en ligne",
      "Réseau professionnel",
      "Newsletter exclusive"
    ],
    companyTitle: "Entreprise",
    companyPrice: "800 DT",
    companyTarget: "Bureaux d'études, promoteurs, industriels, fournisseurs",
    companyBenefits: [
      "Participation aux groupes de travail",
      "Visibilité sur le site et médias du TGBC",
      "Accès aux projets pilotes",
      "Conseil prioritaire"
    ],
    institutionTitle: "Institution / ONG",
    institutionPrice: "500 DT",
    institutionTarget: "Collectivités locales, associations, universités",
    institutionBenefits: [
      "Partenariats",
      "Participation aux projets collectifs",
      "Accès aux ressources techniques",
      "Collaboration internationale"
    ],
    studentTitle: "Étudiant",
    studentPrice: "50 DT",
    studentTarget: "Étudiants en architecture, ingénierie ou environnement",
    studentBenefits: [
      "Accès gratuit aux webinaires",
      "Tarifs réduits sur les formations",
      "Ressources pédagogiques",
      "Mentorat professionnel"
    ],
    joinNow: "Rejoindre maintenant",
    memberBenefitsTitle: "Avantages réservés aux membres",
    trainingTitle: "Formations & certifications",
    trainingDesc: "Réductions sur les formations TGBC et sur les programmes internationaux partenaires (LEED, EDGE, BREEAM, etc.).",
    communicationTitle: "Visibilité & communication",
    communicationDesc: "Mise en avant sur le site TGBC, dans la newsletter, et lors des événements nationaux et internationaux.",
    participationTitle: "Participation active",
    participationDesc: "Accès à des commissions techniques, groupes de réflexion et projets pilotes autour du bâtiment vert.",
    supportTitle: "Accompagnement",
    supportDesc: "Conseil prioritaire dans les démarches de certification environnementale ou de performance énergétique.",
    howToJoinTitle: "Comment adhérer ?",
    step1Title: "Remplissez le formulaire",
    step1Desc: "Remplissez le formulaire d'adhésion en ligne",
    step1Cta: "Formulaire d'adhésion",
    step2Title: "Envoyez votre dossier",
    step2Desc: "Envoyez votre profil et justificatifs",
    step3Title: "Effectuez le paiement",
    step3Desc: "Paiement de la cotisation annuelle par virement ou chèque",
    step4Title: "Recevez vos accès",
    step4Desc: "Certificat de membre et accès à l'espace réservé",
    memberSpaceTitle: "Espace membre",
    memberSpaceDesc: "Un espace sécurisé réservé aux membres permet d'accéder aux ressources techniques, à la documentation, aux webinaires, et à la communauté TGBC.",
    memberSpaceCta: "Accéder à mon espace membre",
    resources: "Ressources techniques",
    documentation: "Documentation",
    webinars: "Webinaires",
    community: "Communauté TGBC",
    finalCtaTitle: "Ensemble, faisons du bâtiment durable la norme en Tunisie.",
    finalCtaDesc: "Adhérez dès aujourd'hui au TGBC et contribuez au changement.",
    finalCtaButton: "Je deviens membre du TGBC",
    formTitle: "Formulaire d'adhésion TGBC",
    personalInfo: "Informations personnelles",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    company: "Entreprise",
    position: "Poste",
    membershipType: "Type d'adhésion",
    selectType: "Sélectionnez votre type d'adhésion",
    address: "Adresse",
    streetAddress: "Adresse",
    city: "Ville",
    country: "Pays",
    additionalInfo: "Informations supplémentaires",
    message: "Message",
    messagePlaceholder: "Dites-nous pourquoi vous souhaitez rejoindre le TGBC...",
    cancel: "Annuler",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours...",
    formSuccess: "Votre demande a été envoyée avec succès ! Vous allez être redirigé vers votre client email.",
    formError: "Une erreur s'est produite. Veuillez réessayer."
  },
  events: {
    heroTitle: "Ensemble pour un avenir durable",
    heroSubtitle: "Retrouvez tous les événements, formations et rencontres organisés par le TGBC pour promouvoir le bâtiment vert en Tunisie.",
    heroCta: "Voir le calendrier complet",
    calendarTitle: "Calendrier des événements",
    calendarDescription: "Découvrez tous nos événements, formations et rencontres pour développer vos compétences en construction durable.",
    filterBy: "Filtrer par",
    all: "Tous",
    conferences: "Conférences",
    trainings: "Formations",
    workshops: "Ateliers",
    webinars: "Webinaires",
    exhibitions: "Salons",
    register: "Je m'inscris",
    fullProgram: "Programme complet",
    loadMore: "Voir plus d'événements",
    newsletterTitle: "Restez informé de nos événements",
    newsletterDescription: "Recevez nos dernières actualités et invitations aux événements directement dans votre boîte mail.",
    emailPlaceholder: "Votre adresse email",
    subscribe: "S'abonner",
    viewFullCalendar: "Voir le calendrier complet",
    fullCalendar: "Calendrier complet",
    today: "Aujourd'hui",
    month: "Mois",
    year: "Année",
    monthView: "Mois",
    weekView: "Semaine",
    upcomingEvents: "Événements à venir",
    recentlyAdded: "Récemment ajoutés",
    going: "participants",
    spotsRemaining: "places restantes"
  },
  news: {
    heroTitle: "Actualités & Blog",
    heroSubtitle: "Découvrez les dernières actualités, analyses et expertises du secteur du bâtiment durable en Tunisie.",
    articles: "Articles",
    experts: "Experts",
    categories: "Catégories",
    latestArticles: "Derniers articles",
    articlesDescription: "Restez informé des dernières tendances et innovations en construction durable.",
    filterBy: "Filtrer par",
    all: "Tous",
    news: "Actualités",
    training: "Formations",
    innovation: "Innovation",
    guides: "Guides",
    caseStudies: "Études de cas",
    readMore: "Lire la suite",
    loadMore: "Voir plus d'articles",
    newsletterTitle: "Restez informé de nos actualités",
    newsletterDescription: "Recevez nos derniers articles et analyses directement dans votre boîte mail.",
    emailPlaceholder: "Votre adresse email",
    subscribe: "S'abonner"
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets de construction durable.",
    mainTitle: "Entrons en contact",
    subtitleLeft: "N'hésitez pas à nous dire bonjour !",
    phone: "Téléphone",
    email: "Email",
    office: "Bureau",
    seeOnMap: "Voir sur Google Maps →",
    formIntro: "Parfait ! Nous sommes ravis de vous entendre et commençons quelque chose de spécial ensemble. Appelez-nous pour toute question.",
    formTitle: "Contact",
    name: "Nom",
    phonePlaceholder: "Téléphone",
    subject: "Sujet",
    message: "Dites-nous ce qui vous intéresse",
    sendButton: "Envoyez-nous",
    form: {
      title: "Formulaire de contact",
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
      addressValue: "Immeuble Hayet, 2 rue du Lac Loch Ness, Mezzanine, App 5\nLes Berges du Lac 1053",
      phone: "Téléphone",
      phoneValue: "+216 71 709 647",
      email: "Email",
      emailValue: "contact@tunisiagbc.org",
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
    events: "Events",
    news: "News",
    resources: "Resources",
    becomeMember: "Become a member"
  },
  hero: {
    slide1: {
      title: "Be Part of Tunisia's Green Transition",
      subtitle: "At Tunisia Green Building Council, we are committed to driving sustainable transformation across the built environment. Through education, innovation, and collaboration, we empower professionals, businesses, and communities to build smarter, greener, and healthier spaces.",
      cta: "Join Us"
    },
    slide2: {
      title: "Your Role Matters",
      subtitle: "Whether you're an expert or just beginning your sustainability journey, your role matters. Let's shape a more resilient and eco-conscious Tunisia — together.",
      cta: "Discover Programs"
    },
    slide3: {
      title: "Education & Innovation",
      subtitle: "Through comprehensive education programs and innovative solutions, we're building a community of sustainability leaders who are transforming Tunisia's built environment for a better tomorrow.",
      cta: "Learn More"
    },
    slide4: {
      title: "Partnership & Collaboration",
      subtitle: "Join our network of committed professionals to build together Tunisia's sustainable future. Together, we create innovative solutions for a more respectful built environment.",
      cta: "Join the network"
    },
    learnMore: "Learn More"
  },
  presentation: {
    title: "About TGBC",
    description: "The Tunisia Green Building Council (TGBC) works for a sustainable future by promoting ecological construction in Tunisia. Through its programs, training and partnerships, TGBC encourages innovation, energy efficiency and environmental respect in the building sector.",
    learnMore: "Learn more about TGBC",
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
    heroTitle: "Our Programs for Sustainable Building",
    heroDescription: "The Tunisia Green Building Council (TGBC) develops programs aimed at accelerating the transition to ecological, healthy and energy-efficient buildings. These initiatives are aimed at professionals, institutions and citizens who want to contribute to a sustainable future.",
    heroCta: "Discover our initiatives",
    axesTitle: "The main axes of our programs",
    axesDescription: "Synthetic presentation of the areas in which TGBC operates",
    axesList: [
      {
        icon: "🏫",
        title: "Sustainable construction",
        description: "Promotion of design, construction and renovation practices that respect the environment."
      },
      {
        icon: "💡",
        title: "Energy efficiency",
        description: "Support for building stakeholders to reduce consumption and optimize resources."
      },
      {
        icon: "🌱",
        title: "Ecological materials",
        description: "Awareness of the use of local, recyclable materials with low carbon footprint."
      },
      {
        icon: "🏙",
        title: "Sustainable urban planning",
        description: "Integration of urban ecology principles into territorial development projects."
      },
      {
        icon: "🎓",
        title: "Training & certification",
        description: "Skills development through training, webinars and international certifications."
      },
      {
        icon: "🤝",
        title: "Partnerships & advocacy",
        description: "Collaboration with institutions, companies and NGOs to evolve public policies."
      }
    ],
    programsTitle: "Our flagship programs",
    programsDescription: "Discover our emblematic TGBC initiatives",
    featuredProgramsTitle: "Our Flagship Programs",
    featuredProgramsDescription: "The flagship programs of the Tunisia Green Building Council (TGBC) embody its concrete commitment to sustainable building and ecological transition in Tunisia. They cover key areas such as environmental training and certification, promotion of ecological materials, research on energy efficiency, and support for local communities in sustainable urban planning. Through these initiatives, TGBC promotes professional skills development, supports innovation in construction, and contributes to the dissemination of sustainable development culture at the national level. These programs constitute an essential lever to accelerate sector transformation and create greener and more resilient cities.",
    objectivesTitle: "Objectives",
    objectivesDescription: "The introductory course provides knowledge of sustainability to non-technical participants and industry professionals looking to understand the basics behind building retrofit and energy efficiency in the Gulf region. The interactive workshop is perfect for those wanting to gain a solid foundation of the building retrofit industry.",
    targetAudienceTitle: "Target Audience",
    targetAudienceDescription: "Our programs are designed for a wide range of professionals and organizations committed to sustainable construction. Whether you are an architect, engineer, real estate developer, facility manager, representative of a local authority or public institution, our training and initiatives are designed to meet your specific needs. We also welcome building owners, hospitality professionals, consulting firms and NGOs who want to integrate sustainable development principles into their projects. No prior experience is required, our programs adapt to all skill levels.",
    eligibilityTitle: "Eligibility",
    eligibilityDescription: "There is no prior experience or qualification required for the course and it is suitable for professionals of all levels and anyone interested in understanding the fundamentals of building retrofit.",
    courseContentsTitle: "Course Contents",
    audienceCategories: [
      {
        title: "Industry Professionals",
        items: ["Architects", "Engineers", "Developers", "Consulting firms"]
      },
      {
        title: "Decision Makers & Institutions",
        items: ["Local authorities", "Ministries", "Public agencies", "NGOs"]
      },
      {
        title: "Private Sector",
        items: ["Building owners", "Facility managers", "Hospitality professionals"]
      }
    ],
    all: "All",
    education: "Education",
    training: "Training",
    research: "Research",
    partnership: "Partnership",
    programsList: [
      {
        category: "education",
        title: "\"Green Education\" Program",
        description: "Sensitize students and teachers to sustainable construction principles through workshops and inter-university competitions.",
        image: "https://via.placeholder.com/400x200?text=Green+Education",
        link: "/programs/green-education",
        cta: "Learn more"
      },
      {
        category: "training",
        title: "\"TGBC Training Series\" Program",
        description: "Certifying training cycle in partnership with national and international experts to professionalize sustainable building stakeholders.",
        image: "https://via.placeholder.com/400x200?text=Training+Series",
        link: "/programs/training-series",
        cta: "View calendar"
      },
      {
        category: "partnership",
        title: "\"Green Cities Tunisia\" Program",
        description: "Accompany municipalities in integrating green solutions and low-carbon strategies into their urban projects.",
        image: "https://via.placeholder.com/400x200?text=Green+Cities",
        link: "/programs/green-cities",
        cta: "Discover the program"
      },
      {
        category: "research",
        title: "\"Innovation & Research Hub\" Program",
        description: "Support research and technological innovation in energy, materials and bioclimatic architecture.",
        image: "https://via.placeholder.com/400x200?text=Research+Hub",
        link: "/programs/research-hub",
        cta: "Join the network"
      }
    ],
    impactTitle: "Impacts and results",
    impactDescription: "Our key figures and performance indicators",
    professionals: "Trained professionals",
    projects: "Accompanied projects",
    activePrograms: "Active programs",
    buildings: "Sustainable buildings",
    partnerships: "Partnerships",
    ctaTitle: "Call for participation",
    ctaDescription: "Do you want to contribute to a project, become a partner or launch a program with TGBC?",
    proposeCollaboration: "Propose a collaboration",
    becomeMember: "Become a member",
    testimonialsTitle: "Testimonials & Partners",
    testimonialsList: [
      {
        text: "Thanks to TGBC programs, our company was able to certify its first green projects and significantly improve our environmental impact.",
        name: "Ahmed Ben Ali",
        position: "Technical Director",
        company: "Constructa Tunisia"
      },
      {
        text: "TGBC training allowed me to develop my skills in sustainable construction and integrate a dynamic professional network.",
        name: "Fatma Khelil",
        position: "Architect",
        company: "Studio Vert"
      },
      {
        text: "The Green Cities program accompanied us in implementing sustainable solutions for our municipality.",
        name: "Mohamed Trabelsi",
        position: "Mayor",
        company: "Sousse Municipality"
      }
    ],
    partnersTitle: "Our Partners",
    partnersList: [
      {
        name: "EBRD",
        logo: "https://via.placeholder.com/150x80?text=EBRD"
      },
      {
        name: "IFC",
        logo: "https://via.placeholder.com/150x80?text=IFC"
      },
      {
        name: "GIZ",
        logo: "https://via.placeholder.com/150x80?text=GIZ"
      },
      {
        name: "Environment Ministry",
        logo: "https://via.placeholder.com/150x80?text=Min+Env"
      },
      {
        name: "Tunis University",
        logo: "https://via.placeholder.com/150x80?text=Univ+Tunis"
      }
    ],
    linksTitle: "Cross-cutting links",
    linksDescription: "Check our agenda to discover upcoming training, conferences and actions related to our programs.",
    viewAgenda: "View events calendar",
    accessResources: "Access resources"
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
    heroTitle: "About TGBC",
    heroSubtitle: "Building today, thinking tomorrow.",
    heroDescription: "The Tunisia Green Building Council (TGBC) is a non-profit organization dedicated to promoting sustainable building in Tunisia. We bring together actors from the construction, engineering, urban planning and environment sectors to encourage responsible, innovative and planet-friendly practices.",
    missionTitle: "Our Mission",
    missionText: "Promote a culture of sustainable building in Tunisia by raising awareness, training, and supporting public and private actors in the transition to ecological, efficient and healthy constructions.",
    visionTitle: "Our Vision",
    visionText: "A Tunisia where every building contributes positively to the environment, public health, and sustainable economic development.",
    objectivesTitle: "Our Objectives",
    objectivesList: [
      "Promote the adoption of sustainable construction standards and labels (e.g., LEED, EDGE, etc.)",
      "Raise awareness among professionals and the general public about the importance of sustainable development in building",
      "Develop national and international partnerships",
      "Support construction projects in integrating sustainable solutions",
      "Contribute to public policies and environmental regulations"
    ],
    valuesTitle: "Our Values",
    sustainability: "Sustainability",
    sustainabilityDesc: "Acting for future generations",
    innovation: "Innovation",
    innovationDesc: "Encouraging new and effective solutions",
    collaboration: "Collaboration",
    collaborationDesc: "Working together for real impact",
    transparency: "Transparency",
    transparencyDesc: "Ensuring the integrity of our actions",
    responsibility: "Responsibility",
    responsibilityDesc: "Integrating social and environmental issues into every project",
    teamTitle: "Our Team",
    teamText: "A multidisciplinary team of committed professionals: architects, engineers, energy experts, urban planners, lawyers and environmental consultants.",
    foundersTitle: "Our Founding Members",
    foundersText: "TGBC was founded by a collective of Tunisian professionals sharing the same conviction: it's time to act locally to build sustainably.",
    networkTitle: "Our Network",
    networkText: "TGBC is connected to several regional and international initiatives:",
    networkList: [
      "World Green Building Council",
      "GBCI (Green Business Certification Inc.)",
      "Tunisian universities, research centers and public institutions",
      "Local and international NGOs"
    ],
    downloadsTitle: "Downloads / Useful Links",
    downloadsList: [
      "Presentation brochure (PDF)",
      "Activity report",
      "Members charter"
    ],
    contactTitle: "Contact",
    address: "Headquarters address (to be specified)",
    email: "Email: contact@tgbc.org",
    social: "Follow us on: LinkedIn | Facebook | Twitter"
  },
  membership: {
    heroTitle: "Join TGBC",
    heroSubtitle: "Join the sustainable building movement in Tunisia.",
    heroDescription: "By becoming a TGBC member, you join a national and international network of actors committed to a greener future. Together, we build concrete solutions to reduce the environmental impact of the construction sector.",
    heroDetails: "Becoming a member of the Tunisia Green Building Council (TGBC) means joining a rapidly expanding national network that brings together more than a hundred actors from the sustainable building value chain: architects, engineers, developers, engineering firms, public institutions, industrialists, educational establishments, NGOs and specialized media. TGBC membership offers its members privileged access to technical resources, specialized training, exclusive events and collaboration opportunities with sustainable development experts. It also helps strengthen the visibility of committed companies and professionals, increase their credibility with decision-makers and partners, and showcase their environmental initiatives through TGBC communication channels. It's a real lever for integrating best practices in green building and actively contributing to the ecological transition of the sector in Tunisia.",
    cta: "I become a member",
    whyJoinTitle: "Why become a member?",
    communityTitle: "An engaged community",
    communityDesc: "Join a dynamic network bringing together architects, engineers, developers, researchers, communities and institutions sharing the same vision of sustainable development.",
    knowledgeTitle: "Privileged access to knowledge",
    knowledgeDesc: "Benefit from exclusive training, conferences and resources on standards, certifications and innovations in ecological construction.",
    collaborationTitle: "Collaboration opportunities",
    collaborationDesc: "Participate in pilot projects, thematic working groups and national and regional initiatives supported by TGBC and its international partners.",
    visibilityTitle: "Visibility and recognition",
    visibilityDesc: "Benefit from official recognition as an actor committed to sustainable development and showcase your projects through our media and events.",
    categoriesTitle: "Membership categories",
    categoriesDesc: "Every sector actor can find their place within TGBC. Memberships are open to individuals and legal entities according to several adapted formulas.",
    individualTitle: "Individual member",
    individualPrice: "150 DT",
    individualTarget: "Architects, engineers, researchers, students",
    individualBenefits: [
      "Access to events",
      "Online training and resources",
      "Professional network",
      "Exclusive newsletter"
    ],
    companyTitle: "Company",
    companyPrice: "800 DT",
    companyTarget: "Engineering firms, developers, industrialists, suppliers",
    companyBenefits: [
      "Participation in working groups",
      "Visibility on TGBC website and media",
      "Access to pilot projects",
      "Priority consultation"
    ],
    institutionTitle: "Institution / NGO",
    institutionPrice: "500 DT",
    institutionTarget: "Local communities, associations, universities",
    institutionBenefits: [
      "Partnerships",
      "Participation in collective projects",
      "Access to technical resources",
      "International collaboration"
    ],
    studentTitle: "Student",
    studentPrice: "50 DT",
    studentTarget: "Students in architecture, engineering or environment",
    studentBenefits: [
      "Free access to webinars",
      "Reduced rates on training",
      "Educational resources",
      "Professional mentoring"
    ],
    joinNow: "Join now",
    memberBenefitsTitle: "Benefits reserved for members",
    trainingTitle: "Training & certifications",
    trainingDesc: "Discounts on TGBC training and international partner programs (LEED, EDGE, BREEAM, etc.).",
    communicationTitle: "Visibility & communication",
    communicationDesc: "Highlighting on TGBC website, newsletter, and national and international events.",
    participationTitle: "Active participation",
    participationDesc: "Access to technical commissions, reflection groups and pilot projects around green building.",
    supportTitle: "Support",
    supportDesc: "Priority advice in environmental certification or energy performance procedures.",
    howToJoinTitle: "How to join?",
    step1Title: "Fill out the form",
    step1Desc: "Fill out the online membership form",
    step1Cta: "Membership form",
    step2Title: "Send your file",
    step2Desc: "Send your profile and supporting documents",
    step3Title: "Make the payment",
    step3Desc: "Annual membership fee payment by transfer or check",
    step4Title: "Receive your access",
    step4Desc: "Member certificate and access to reserved space",
    memberSpaceTitle: "Member space",
    memberSpaceDesc: "A secure space reserved for members allows access to technical resources, documentation, webinars, and the TGBC community.",
    memberSpaceCta: "Access my member space",
    resources: "Technical resources",
    documentation: "Documentation",
    webinars: "Webinars",
    community: "TGBC community",
    finalCtaTitle: "Together, let's make sustainable building the norm in Tunisia.",
    finalCtaDesc: "Join TGBC today and contribute to change.",
    finalCtaButton: "I become a TGBC member",
    formTitle: "TGBC Membership Form",
    personalInfo: "Personal Information",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    position: "Position",
    membershipType: "Membership Type",
    selectType: "Select your membership type",
    address: "Address",
    streetAddress: "Street Address",
    city: "City",
    country: "Country",
    additionalInfo: "Additional Information",
    message: "Message",
    messagePlaceholder: "Tell us why you want to join TGBC...",
    cancel: "Cancel",
    submit: "Send Application",
    submitting: "Sending...",
    formSuccess: "Your application has been sent successfully! You will be redirected to your email client.",
    formError: "An error occurred. Please try again."
  },
  events: {
    heroTitle: "Together for a sustainable future",
    heroSubtitle: "Discover all the events, training sessions and meetings organized by TGBC to promote green building in Tunisia.",
    heroCta: "View full calendar",
    calendarTitle: "Events calendar",
    calendarDescription: "Discover all our events, training sessions and meetings to develop your skills in sustainable construction.",
    filterBy: "Filter by",
    all: "All",
    conferences: "Conferences",
    trainings: "Training",
    workshops: "Workshops",
    webinars: "Webinars",
    exhibitions: "Exhibitions",
    register: "Register",
    fullProgram: "Full program",
    loadMore: "View more events",
    newsletterTitle: "Stay informed about our events",
    newsletterDescription: "Receive our latest news and event invitations directly in your mailbox.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    viewFullCalendar: "View full calendar",
    fullCalendar: "Full Calendar",
    today: "Today",
    month: "Month",
    year: "Year",
    monthView: "Month",
    weekView: "Week",
    upcomingEvents: "Upcoming Events",
    recentlyAdded: "Recently Added",
    going: "going",
    spotsRemaining: "spots remaining"
  },
  news: {
    heroTitle: "News & Blog",
    heroSubtitle: "Discover the latest news, analysis and expertise in the sustainable building sector in Tunisia.",
    articles: "Articles",
    experts: "Experts",
    categories: "Categories",
    latestArticles: "Latest articles",
    articlesDescription: "Stay informed about the latest trends and innovations in sustainable construction.",
    filterBy: "Filter by",
    all: "All",
    news: "News",
    training: "Training",
    innovation: "Innovation",
    guides: "Guides",
    caseStudies: "Case studies",
    readMore: "Read more",
    loadMore: "View more articles",
    newsletterTitle: "Stay informed about our news",
    newsletterDescription: "Receive our latest articles and analysis directly in your mailbox.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe"
  },
  contact: {
    title: "Contact us",
    subtitle: "We are here to answer your questions and support you in your sustainable construction projects.",
    mainTitle: "Let's get in touch",
    subtitleLeft: "Don't be afraid to say hello with us!",
    phone: "Phone",
    email: "Email",
    office: "Office",
    seeOnMap: "See on Google Map →",
    formIntro: "Great! We're excited to hear from you and let's start something special together. Call us for any inquiry.",
    formTitle: "Contact",
    name: "Name",
    phonePlaceholder: "Phone",
    subject: "Subject",
    message: "Tell us about your interested in",
    sendButton: "Send to us",
    form: {
      title: "Contact Form",
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
      addressValue: "Immeuble Hayet, 2 rue du Lac Loch Ness, Mezzanine, App 5\nLes Berges du Lac 1053",
      phone: "Phone",
      phoneValue: "+216 71 709 647",
      email: "Email",
      emailValue: "contact@tunisiagbc.org",
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
