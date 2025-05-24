// File: src/pages/BlogDetail.jsx
import React from "react";
import Navbar from "../../../components/Navbar";
import { client } from "../../../lib/client";
import BlogDetailClient from "./BlogDetailClient";
import FooterFull from "../../../components/FooterFull";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({ params }) {
  const { slug } = params
  const query = `*[_type=="blog" && slug.current==$slug][0]{
    title, description, "imageUrl": image[0].asset->url
  }`
  const post = await client.fetch(query, { slug })

  if (!post) return { title: 'Post Not Found' }

  const rawText = Array.isArray(post.description)
    ? post.description.map(b =>
        Array.isArray(b.children)
          ? b.children.map(c => c.text).join('')
          : ''
      ).join(' ')
    : ''
  const snippet = rawText.slice(0, 160) + '…'
  const imageUrl = post.imageUrl
    ? new URL(post.imageUrl, process.env.NEXT_PUBLIC_SITE_URL).toString()
    : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.png`

  return {
    title: post.title,
    description: snippet,
    openGraph: {
      title: post.title,
      description: snippet,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      siteName: 'Doctor Kays',
      images: [{ url: imageUrl, width:1200, height:630, alt:post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: snippet,
      images: [imageUrl],
    },
  }
}

export default function Page({ params }) {
  return (
    <>
      <Navbar/>
      <BlogDetailClient slug={params.slug}/>
      <FooterFull/>
    </>
  )
}