// app/products/[id]/page.jsx
import Navbar from '../../../components/Navbar';
import FooterFull from '../../../components/FooterFull';
import ProductDetail from '../components/ProductDetail';
import { client } from '../../../lib/client';

// Generate metadata for SEO per product
export async function generateMetadata({ params }) {
  const { id } = params;
  const query = `*[_type == "shop" && _id == $id][0]{title, description}`;
  const product = await client.fetch(query, { id });

  // Flatten description to plain text snippet
  const rawText = Array.isArray(product?.description)
    ? product.description
        .map(block =>
          (block.children || []).map(child => child.text).join('')
        ).join(' ')
    : '';
  const descriptionSnippet = rawText.length > 160
    ? rawText.slice(0, 160) + '…'
    : rawText;

  return {
    title: product?.title || 'Product',
    description: descriptionSnippet,
    openGraph: {
      title: product?.title,
      description: descriptionSnippet,
    }
  };
}

export default async function Page({ params }) {
  const { id } = params;
  const query = `*[_type == "shop" && _id == $id][0]{_id, title, icon[]{ asset-> { url } }, price, reviews, rating, description}`;
  const product = await client.fetch(query, { id });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Product not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductDetail product={product} />
      </div>
      <FooterFull />
    </>
  );
}