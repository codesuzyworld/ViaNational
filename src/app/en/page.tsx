import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../../lib/api";
import { TopNav } from "@/app/_components/TopNav";
import HeroSection from "@/app/_components/heroSection";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <div className="w-full h-screen flex flex-col">
        <TopNav />
        <div className="w-full flex-1">
          <HeroSection locale="en"/>          
        </div>
      </div>

        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      <Container>
      </Container>
    </main>
  );
}
