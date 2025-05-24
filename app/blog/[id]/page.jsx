// File: src/pages/BlogDetail.jsx
import React from "react";
import Navbar from "../../../components/Navbar";
import { client } from "../../../lib/client";
import BlogDetailClient from "./BlogDetailClient";
import FooterFull from "../../../components/FooterFull";

export async function generateMetadata({ params }) {
  const slug = params.id;
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    description,
    "imageUrl": image[0].asset->url
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return { title: 'Post Not Found' };
  }

  // Extract plain text snippet from portable text
  const rawText = Array.isArray(post.description)
    ? post.description
        .map(block =>
          Array.isArray(block.children)
            ? block.children.map(child => child.text).join('')
            : ''
        )
        .join(' ')
    : '';
  const descriptionSnippet = rawText.length > 160
    ? rawText.slice(0, 160) + '…'
    : rawText;

  // Build absolute image URL
  const imageUrl = post.imageUrl
    ? new URL(post.imageUrl, process.env.NEXT_PUBLIC_SITE_URL).toString()
    : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.png`;

  return {
    title: post.title,
    description: descriptionSnippet,
    openGraph: {
      title: post.title,
      description: descriptionSnippet,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      siteName: 'Doctor Kays',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

/**
 * Server component to render blog detail client
 */
export default async function BlogDetailPage({ params }) {
  return (
    <>
      <Navbar />
      <BlogDetailClient slug={params.id} />
      <FooterFull />
    </>
  );
}
