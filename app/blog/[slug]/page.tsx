import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/shared/CtaSection";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Prana Physio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* Blog Hero */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-site max-w-4xl text-center">
          <Reveal>
            <div className="mb-6">
              <span className="rounded bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-4xl uppercase tracking-wide text-ink md:text-5xl lg:text-6xl mb-6">
              {post.title}
            </h1>
            <p className="text-sm font-medium text-body uppercase tracking-widest">
              {post.date} · By Dr. Meera Joshi
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-site max-w-5xl -mt-8 relative z-10">
        <Reveal delay={0.2}>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-md shadow-card">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </div>

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-3xl">
          <article className="space-y-12">
            {post.body.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.1}>
                <div>
                  <h2 className="font-display text-3xl uppercase tracking-wide text-ink mb-6">
                    {section.heading}
                  </h2>
                  <div className="space-y-6">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-body text-lg leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </article>

          {/* Author Bio */}
          <Reveal>
            <div className="mt-16 flex items-center gap-6 rounded-md bg-mist p-8 border border-line">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/hero.jpg"
                  alt="Dr. Meera Joshi"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-ink">
                  Dr. Meera Joshi
                </h3>
                <p className="text-sm text-body leading-relaxed mt-1">
                  Lead Physiotherapist at Prana Physio. With over 15 years of experience across Australia and India,
                  Meera specializes in musculoskeletal injuries and Reformer Pilates.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 text-center">
             <Link href="/blog" className="link-teal font-semibold tracking-wide">
               &lt; Back to all articles
             </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
