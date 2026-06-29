import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock } from 'lucide-react';
import { articles, categories } from '../data/articles';
import { formatDate } from '../utils/helpers';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              博客文章
            </h1>
            <p className="text-white/70">
              记录技术成长，分享编程心得
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="relative flex-grow max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                全部 ({articles.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category.name
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm card-hover"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-500 text-xs">
                        <span>{formatDate(article.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {article.readTime}分钟
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${article.slug}`}
                      className="block mt-4 text-accent-500 text-sm font-medium hover:underline"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">没有找到相关文章</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}