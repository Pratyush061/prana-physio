import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import BlogCard from "@/components/shared/BlogCard";
import CtaSection from "@/components/shared/CtaSection";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Prana Physio, Indore",
  description:
    "Expert articles on physiotherapy, Pilates, injury prevention, and recovery from Dr. Meera Joshi.",
};

export default function BlogIndexPage() {
  return (
    <main>
      <PageHero title="The Prana Physio Blog" subtitle="Insights, Advice & Clinical Updates" />

      <section className="py-16 md:py-24 bg-mist">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                category={post.category}
                date={post.date}
                excerpt={post.excerpt}
                image={post.image}
                delay={(i % 3) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
