import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { getRecentPosts } from '../../data/articles';
import { formatDate } from '../../utils/helpers';

export default function RecentPosts() {
  const posts = getRecentPosts(5);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最新文章
            </h2>
            <p className="text-gray-600">
              最近更新的技术文章
            </p>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-1 text-primary-600 font-medium hover:gap-2 transition-all"
          >
            查看全部文章
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm card-hover opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animation: 'slideIn 0.6s ease-out forwards' }}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary-100 text-primary-800 text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 truncate">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}分钟阅读
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}