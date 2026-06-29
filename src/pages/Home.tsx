import Hero from '../components/home/Hero';
import FeaturedArticles from '../components/home/FeaturedArticles';
import RecentPosts from '../components/home/RecentPosts';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <RecentPosts />
    </>
  );
}