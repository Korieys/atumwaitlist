import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export function SEO({
    title = "Atum | Build in Public, Effortlessly",
    description = "Document your progress without the work. Atum captures your commits and milestones, turning them into shareable updates automatically.",
    keywords = "build in public, developer tools, automation, coding journal, software engineering, matrix, dev tools, productivity",
    image = "/og-image.png",
    url = "https://atum.app",
}: SEOProps) {
    const siteTitle = title;
    const siteDescription = description;
    const siteUrl = url;
    const siteImage = image;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={siteUrl} />
            <meta name="theme-color" content="#84cc16" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />
        </Helmet>
    );
}
