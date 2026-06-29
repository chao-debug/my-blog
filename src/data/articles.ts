export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  readTime: number;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export const categories: Category[] = [
  { id: '1', name: '技术', slug: 'tech', count: 8 },
  { id: '2', name: '前端', slug: 'frontend', count: 5 },
  { id: '3', name: '后端', slug: 'backend', count: 3 },
  { id: '4', name: '生活', slug: 'life', count: 4 },
];

export const articles: Article[] = [
  {
    id: '1',
    slug: 'react-18-features',
    title: 'React 18 新特性详解',
    excerpt: 'React 18 带来了并发渲染、自动批处理等令人兴奋的新特性。本文深入探讨这些功能如何提升应用性能。',
    content: `# React 18 新特性详解

React 18 带来了许多令人兴奋的新特性，其中最核心的是**并发渲染（Concurrent Rendering）**。

## 并发渲染

并发渲染是 React 18 的旗舰功能，它让 React 能够：

- 中断渲染过程
- 优先处理更重要的更新
- 在后台准备新的界面

### Suspense

Suspense 组件现在可以用于数据获取：

\`\`\`jsx
<Suspense fallback={<Loading />}>
  <Profile />
</Suspense>
\`\`\`

## 自动批处理

React 18 在所有场景下都会自动批处理状态更新：

\`\`\`javascript
function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React 18: 只触发一次渲染
}
\`\`\`

## useTransition

使用 \`useTransition\` 可以标记某些更新为非紧急更新：

\`\`\`jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(input);
});
\`\`\`

## 总结

React 18 为现代 Web 应用提供了更好的用户体验和性能优化。`,
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20React%20programming%20abstract%20technology%20background%20with%20blue%20gradient&image_size=landscape_16_9',
    category: '前端',
    tags: ['React', 'JavaScript', '前端'],
    author: '张三',
    readTime: 8,
    date: '2024-01-15',
  },
  {
    id: '2',
    slug: 'typescript-best-practices',
    title: 'TypeScript 最佳实践指南',
    excerpt: '从类型安全到工程化，这篇文章总结了使用 TypeScript 的最佳实践和常见模式。',
    content: `# TypeScript 最佳实践指南

TypeScript 已成为现代前端开发的标配，以下是一些最佳实践。

## 类型定义

### 使用接口而非类型别名

对于复杂类型，优先使用接口：

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}
\`\`\`

## 严格模式

始终启用严格模式：

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## 泛型

合理使用泛型提高代码复用性：

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## 总结

遵循这些最佳实践，可以写出更健壮、更易维护的 TypeScript 代码。`,
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TypeScript%20programming%20code%20abstract%20background%20with%20green%20accent&image_size=landscape_16_9',
    category: '前端',
    tags: ['TypeScript', 'JavaScript', '最佳实践'],
    author: '张三',
    readTime: 10,
    date: '2024-01-12',
  },
  {
    id: '3',
    slug: 'nodejs-performance',
    title: 'Node.js 性能优化策略',
    excerpt: '深入探讨 Node.js 应用的性能瓶颈和优化方案，让你的服务更快更稳定。',
    content: `# Node.js 性能优化策略

Node.js 是高性能的运行时，但如果使用不当也会遇到性能问题。

## 内存管理

### 避免内存泄漏

\`\`\`javascript
// 错误：全局变量导致内存泄漏
let cache = [];

function processData(data) {
  cache.push(data);
}
\`\`\`

## 异步处理

### 使用 Promise.all

\`\`\`javascript
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);
\`\`\`

## 总结

通过合理的优化策略，可以显著提升 Node.js 应用的性能。`,
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20server%20backend%20technology%20abstract%20blue%20digital%20background&image_size=landscape_16_9',
    category: '后端',
    tags: ['Node.js', '性能优化', '后端'],
    author: '张三',
    readTime: 12,
    date: '2024-01-10',
  },
  {
    id: '4',
    slug: 'css-grid-layout',
    title: 'CSS Grid 布局完全指南',
    excerpt: '掌握 CSS Grid 布局，构建复杂的响应式布局变得轻而易举。',
    content: `# CSS Grid 布局完全指南

CSS Grid 是强大的二维布局系统。

## 基础语法

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## 响应式设计

\`\`\`css
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## 总结

CSS Grid 让复杂布局变得简单直观。`,
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20grid%20layout%20design%20abstract%20colorful%20geometric%20shapes&image_size=landscape_16_9',
    category: '前端',
    tags: ['CSS', '布局', '前端'],
    author: '张三',
    readTime: 7,
    date: '2024-01-08',
  },
  {
    id: '5',
    slug: 'ai-development-trends',
    title: '2024 年 AI 开发趋势',
    excerpt: 'AI 正在改变软件开发方式，本文探讨 2024 年最值得关注的 AI 开发趋势。',
    content: `# 2024 年 AI 开发趋势

AI 技术正在深刻改变软件开发行业。

## AI 辅助编程

Copilot、CodeLlama 等工具正在提升开发效率。

## Agent 架构

AI Agent 将成为新的应用架构模式。

## 总结

拥抱 AI，让它成为你的超级助手。`,
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20artificial%20intelligence%20futuristic%20technology%20abstract%20neural%20network&image_size=landscape_16_9',
    category: '技术',
    tags: ['AI', '趋势', '技术'],
    author: '张三',
    readTime: 6,
    date: '2024-01-05',
  },
  {
    id: '6',
    slug: 'learning-to-code',
    title: '从零开始学编程',
    excerpt: '分享我的编程学习之路，希望能帮助正在入门的你。',
    content: `# 从零开始学编程

学习编程是一段充满挑战但又非常有成就感的旅程。

## 选择语言

建议从 Python 或 JavaScript 开始。

## 实践项目

动手实践是最好的学习方式。

## 总结

坚持下去，你会发现编程的乐趣。`,
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=programming%20learning%20education%20code%20abstract%20colorful%20background&image_size=landscape_16_9',
    category: '生活',
    tags: ['学习', '编程', '入门'],
    author: '张三',
    readTime: 5,
    date: '2024-01-02',
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): Article[] => {
  if (category === 'all') return articles;
  return articles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.slice(0, 3);
};

export const getRecentPosts = (limit: number = 5): Article[] => {
  return articles.slice(0, limit);
};