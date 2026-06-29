import { Github, Twitter, Mail, BookOpen, Briefcase, Award } from 'lucide-react';

const skills = [
  { name: 'React', level: '95%' },
  { name: 'TypeScript', level: '90%' },
  { name: 'Node.js', level: '85%' },
  { name: 'Python', level: '80%' },
  { name: 'CSS/SCSS', level: '90%' },
  { name: 'MySQL', level: '75%' },
];

const experiences = [
  {
    year: '2022 - 至今',
    title: '高级前端工程师',
    company: '某知名互联网公司',
    description: '负责核心产品的前端架构设计和开发，带领团队完成多个大型项目。',
  },
  {
    year: '2020 - 2022',
    title: '前端工程师',
    company: '某创业公司',
    description: '参与产品从0到1的开发，负责前端技术选型和实现。',
  },
  {
    year: '2018 - 2020',
    title: '初级前端工程师',
    company: '某外包公司',
    description: '学习并实践前端开发，参与多个企业级项目。',
  },
];

const achievements = [
  '发布技术博客超过100篇',
  'GitHub Stars 超过5000',
  '开源项目被多家公司使用',
  '技术社区优质创作者',
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-400 to-primary-400 flex items-center justify-center text-white text-4xl font-serif shadow-xl">
              Z
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              关于我
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              全栈开发者，热爱技术，乐于分享。希望通过博客帮助更多人学习编程。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">个人简介</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  我是张三，一名热爱编程的全栈开发者。从2018年开始接触编程，至今已有多年的开发经验。
                </p>
                <p>
                  我擅长前端开发，精通 React、TypeScript、Node.js 等技术栈。同时也对后端开发和数据库有深入的了解。
                </p>
                <p>
                  在工作之余，我喜欢写技术博客，分享自己的学习心得和项目经验。希望能够帮助更多人走进编程的世界。
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-primary-600 transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-primary-600 transition-all"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="mailto:zhangsan@example.com"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-primary-600 transition-all"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">技术技能</h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">工作经历</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={exp.year}
                className={`relative pl-8 pb-8 ${index !== experiences.length - 1 ? 'border-l-2 border-primary-200' : ''}`}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary-600 font-medium">{exp.company}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">{exp.year}</span>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="text-primary-500" size={28} />
                学习经历
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900">本科 - 计算机科学与技术</h3>
                  <p className="text-gray-500 text-sm">某大学 (2014 - 2018)</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900">高中</h3>
                  <p className="text-gray-500 text-sm">某中学 (2011 - 2014)</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Award className="text-accent-500" size={28} />
                成就与荣誉
              </h2>
              <ul className="space-y-3">
                {achievements.map((achievement) => (
                  <li key={achievement} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-accent-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">联系我</h2>
            <p className="text-white/70 mb-8">
              如果你有任何问题或合作意向，欢迎随时联系我！
            </p>
            <a
              href="mailto:zhangsan@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-800 font-medium rounded-lg hover:bg-gray-100 transition-all"
            >
              <Mail size={20} />
              发送邮件
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}