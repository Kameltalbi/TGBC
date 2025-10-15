import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPage.css';

const NewsPage = () => {
  const { t } = useTranslation();
  
  // État pour les filtres
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Articles de blog simulés
  const articles = [
    {
      id: 1,
      title: "Le bâtiment durable en Tunisie : défis et opportunités",
      excerpt: "Découvrez les enjeux actuels du secteur de la construction durable en Tunisie et les opportunités qui s'offrent aux professionnels.",
      content: "Le secteur du bâtiment en Tunisie connaît une transformation majeure avec l'émergence des pratiques de construction durable. Face aux défis climatiques et énergétiques, les acteurs du secteur doivent s'adapter et innover...",
      author: "Dr. Ahmed Ben Ali",
      authorRole: "Expert en construction durable",
      date: "2025-01-15",
      category: "actualites",
      categoryLabel: "Actualités",
      image: "/images/news-1.jpg",
      featured: true,
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Nouvelles normes LEED v5 : ce qui change",
      excerpt: "Les nouvelles normes LEED v5 apportent des changements significatifs dans l'évaluation de la performance environnementale des bâtiments.",
      content: "Le système de certification LEED évolue avec la version 5 qui introduit de nouveaux critères d'évaluation et renforce les exigences en matière de durabilité...",
      author: "Ing. Fatma Khelil",
      authorRole: "Certificatrice LEED",
      date: "2025-01-10",
      category: "formations",
      categoryLabel: "Formations",
      image: "/images/news-2.jpg",
      featured: false,
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Matériaux écologiques : innovations tunisiennes",
      excerpt: "Focus sur les innovations locales en matière de matériaux de construction écologiques développés par des entreprises tunisiennes.",
      content: "L'industrie tunisienne des matériaux de construction se tourne vers des solutions plus durables et respectueuses de l'environnement...",
      author: "Prof. Mohamed Trabelsi",
      authorRole: "Chercheur en matériaux",
      date: "2025-01-08",
      category: "innovation",
      categoryLabel: "Innovation",
      image: "/images/news-3.jpg",
      featured: false,
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Retour sur le Forum National du Bâtiment Durable 2024",
      excerpt: "Bilan et perspectives après le succès du Forum National du Bâtiment Durable qui a réuni plus de 500 professionnels.",
      content: "Le Forum National du Bâtiment Durable 2024 a été un véritable succès avec la participation de plus de 500 professionnels du secteur...",
      author: "TGBC Communication",
      authorRole: "Équipe TGBC",
      date: "2025-01-05",
      category: "evenements",
      categoryLabel: "Événements",
      image: "/images/news-4.jpg",
      featured: false,
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Guide pratique : certification EDGE en Tunisie",
      excerpt: "Un guide complet pour comprendre et obtenir la certification EDGE (Excellence in Design for Greater Efficiencies) en Tunisie.",
      content: "La certification EDGE offre une approche simplifiée pour améliorer l'efficacité énergétique des bâtiments dans les pays émergents...",
      author: "Arch. Salma Mansouri",
      authorRole: "Consultante EDGE",
      date: "2025-01-03",
      category: "guides",
      categoryLabel: "Guides",
      image: "/images/news-5.jpg",
      featured: false,
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Étude de cas : projet résidentiel certifié LEED",
      excerpt: "Analyse détaillée d'un projet résidentiel tunisien ayant obtenu la certification LEED Gold.",
      content: "Ce projet résidentiel de 200 logements situé à Tunis représente un exemple concret de réussite en matière de construction durable...",
      author: "Ing. Youssef Ben Salem",
      authorRole: "Chef de projet",
      date: "2025-01-01",
      category: "etudes",
      categoryLabel: "Études de cas",
      image: "/images/news-6.jpg",
      featured: false,
      readTime: "10 min"
    }
  ];

  // Filtrer les articles
  const filteredArticles = articles.filter(article => {
    if (selectedCategory === 'all') return true;
    return article.category === selectedCategory;
  });

  // Obtenir l'article mis en avant
  const featuredArticle = articles.find(article => article.featured);

  // Formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="container">
          <div className="news-hero-content">
            <h1>{t('news.heroTitle')}</h1>
            <p className="hero-subtitle">{t('news.heroSubtitle')}</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{t('news.articles')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15</span>
                <span className="stat-label">{t('news.experts')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">{t('news.categories')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="featured-article-section">
          <div className="container">
            <div className="featured-article-card">
              <div className="featured-article-image">
                <div className="article-image-placeholder">
                  <span className="image-icon">📰</span>
                  <span>Image de l'article</span>
                </div>
                <div className="article-badge">Article à la une</div>
              </div>
              <div className="featured-article-content">
                <div className="article-meta">
                  <span className="article-category">{featuredArticle.categoryLabel}</span>
                  <span className="article-date">{formatDate(featuredArticle.date)}</span>
                  <span className="article-read-time">{featuredArticle.readTime}</span>
                </div>
                <h2>{featuredArticle.title}</h2>
                <p className="article-excerpt">{featuredArticle.excerpt}</p>
                <div className="article-author">
                  <div className="author-info">
                    <span className="author-name">{featuredArticle.author}</span>
                    <span className="author-role">{featuredArticle.authorRole}</span>
                  </div>
                  <a href={`/article/${featuredArticle.id}`} className="btn btn-primary">
                    {t('news.readMore')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Section */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('news.latestArticles')}</h2>
            <p className="section-description">
              {t('news.articlesDescription')}
            </p>
          </div>

          {/* Categories Filter */}
          <div className="categories-filter">
            <div className="filter-group">
              <label>{t('news.filterBy')}:</label>
              <div className="filter-buttons">
                <button 
                  className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  {t('news.all')}
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === 'actualites' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('actualites')}
                >
                  {t('news.news')}
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === 'formations' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('formations')}
                >
                  {t('news.training')}
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === 'innovation' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('innovation')}
                >
                  {t('news.innovation')}
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === 'guides' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('guides')}
                >
                  {t('news.guides')}
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === 'etudes' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('etudes')}
                >
                  {t('news.caseStudies')}
                </button>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="articles-grid">
            {filteredArticles.filter(article => !article.featured).map(article => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <div className="article-image-placeholder">
                    <span className="image-icon">📄</span>
                  </div>
                  <div className="article-category-badge">{article.categoryLabel}</div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-date">{formatDate(article.date)}</span>
                    <span className="article-read-time">{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <div className="article-author">
                      <span className="author-name">{article.author}</span>
                      <span className="author-role">{article.authorRole}</span>
                    </div>
                    <a href={`/article/${article.id}`} className="btn btn-small">
                      {t('news.readMore')}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="load-more-section">
            <button className="btn btn-outline">
              {t('news.loadMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="news-newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>{t('news.newsletterTitle')}</h2>
            <p>{t('news.newsletterDescription')}</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder={t('news.emailPlaceholder')}
                className="newsletter-input"
              />
              <button className="btn btn-primary">
                {t('news.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
