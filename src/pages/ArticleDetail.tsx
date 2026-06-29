import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getArticleBySlug } from '../data/articles';
import { formatDate } from '../utils/helpers';
import 'highlight.js/styles/github.css';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">文章未找到</h2>
          <Link to="/blog" className="text-primary-600 hover:underline">
            返回博客首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto py-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
              <span className="text-white/70 text-sm">{formatDate(article.date)}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <p className="text-white/70">{article.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={16} />
                <span className="text-sm">{article.readTime}分钟阅读</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="text-sm">作者: {article.author}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-900 mt-5 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ className, children }) => {
                    const language = className?.replace('language-', '') || '';
                    return (
                      <code
                        className={`inline-block px-2 py-1 bg-gray-100 rounded text-sm font-mono ${
                          language ? `language-${language}` : ''
                        }`}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => (
                    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4">
                      {children}
                    </pre>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </article>

            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">标签</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all"
              >
                <ArrowLeft size={18} />
                返回博客
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}