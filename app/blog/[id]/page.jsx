// File: src/pages/BlogDetail.jsx
import React from "react";
import Navbar from "../../../components/Navbar";
import { client } from "../../../lib/client";
import BlogDetailClient from "./BlogDetailClient";
import FooterFull from "../../../components/FooterFull";

export async function generateMetadata({ params }) {
  const post = await client.fetch(
    `*[_type=="blog" && slug.current==$slug][0]{
       title, description
    }`,
    { slug: params.id }
  );
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.description.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.description.slice(0, 160),
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  // const { id } = useParams();
  // const [post, setPost] = useState(null);

  // if (loading) return <Spinner />;
  // if (!post) return <NotFound />;

  return (
    <>
      <Navbar />
      <BlogDetailClient />
      <FooterFull />
    </>
  );
}
