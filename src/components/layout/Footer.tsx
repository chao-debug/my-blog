import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                <span className="text-white font-serif">Z</span>
              </div>
              <span className="text-xl font-bold font-serif">张三的博客</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              记录技术成长，分享编程心得。这里是我的个人空间，欢迎来访！
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  首页
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  关于我
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  博客文章
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:zhangsan@example.com"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors text-sm"
              >
                <Mail size={16} />
                zhangsan@example.com
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} 张三的博客. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}