import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  keywords,
  image = "https://nwayami.vercel.app/seo/seo.jpg",
  url = "https://nwayami.vercel.app/",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
