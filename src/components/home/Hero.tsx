import { ArrowRight, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">全栈开发者 / 技术博主</span>
            </div>
          </div>

          <h1 className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="block text-white text-4xl md:text-6xl font-bold mb-4">
              你好，我是
            </span>
            <span className="block text-gradient text-4xl md:text-7xl font-bold font-serif">
              张三
            </span>
          </h1>

          <p className="animate-slide-up opacity-0 text-white/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            热爱编程，专注于 Web 开发和技术分享。
            在这里，我记录技术成长，分享编程心得，希望能帮助更多人爱上编程。
          </p>

          <div className="animate-slide-up opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Link
              to="/blog"
              className="group px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              阅读博客
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              了解更多
            </Link>
          </div>

          <div className="animate-slide-up opacity-0 flex items-center justify-center gap-6 mt-12"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all duration-300"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:zhangsan@example.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white/80 hover:text-white transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}