import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { getFeaturedArticles } from '../../data/articles';
import { formatDate } from '../../utils/helpers';

export default function FeaturedArticles() {
  const articles = getFeaturedArticles();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精选文章
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            精心挑选的技术文章，希望能对你有所帮助
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md card-hover opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animation: 'fadeIn 0.6s ease-out forwards' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {article.readTime}分钟
                    </span>
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="flex items-center gap-1 text-accent-500 text-sm font-medium hover:gap-2 transition-all"
                  >
                    阅读更多
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}