import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  delay?: number;
}

export default function BlogCard({
  slug,
  title,
  category,
  date,
  excerpt,
  image,
  delay = 0,
}: BlogCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/blog/${slug}`}
        className="group flex flex-col h-full rounded-md border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-cardHover overflow-hidden"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-mist">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 rounded bg-teal px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {category}
          </div>
        </div>
        <div className="flex flex-col flex-grow p-6">
          <p className="text-sm font-medium text-body mb-2">{date}</p>
          <h3 className="font-display text-2xl uppercase tracking-wide text-ink group-hover:text-teal transition-colors mb-3 line-clamp-2">
            {title}
          </h3>
          <p className="text-body leading-relaxed line-clamp-3 mb-6 flex-grow">
            {excerpt}
          </p>
          <span className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-teal mt-auto">
            Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
