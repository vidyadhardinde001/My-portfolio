import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vidyadhar Dinde",
  description:
    "Portfolio of Vidyadhar Dinde - Software Engineer, 3D Artist, Full Stack Developer, and Creative Technologist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/assets/logo.ico" type="image/x-icon" />

        {/* Standard Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta
          name="keywords"
          content="Vidyadhar Dinde, Portfolio, Software Engineer, 3D Artist, Full Stack Developer, Creative Technologist, Web Developer, Blender, React, Next.js, TypeScript"
        />
        <meta name="robots" content="index, follow" />
        <meta name="application-name" content="Vidyadhar Dinde Portfolio" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={String(metadata.title)} />
        <meta property="og:description" content={String(metadata.description)} />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://vidyadhardinde.me/" />
        <meta property="og:site_name" content="Vidyadhar Dinde Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title)} />
        <meta name="twitter:description" content={String(metadata.description)} />
        <meta name="twitter:image" content="/assets/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vidyadhardinde.me/" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vidyadhar Dinde",
              description: metadata.description,
              url: "https://vidyadhardinde.me/",
              sameAs: [
                "https://github.com/vidyadhardinde001",
                "https://www.linkedin.com/in/vidyadhar-dinde-447371252/",
                "https://www.instagram.com/_vidyadhar_d/",
              ],
              image: "https://vidyadhardinde.me/assets/og-image.jpg",
              jobTitle: [
                "Software Engineer",
                "3D Artist",
                "Full Stack Developer",
                "Creative Technologist",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miraj",
                addressRegion: "Maharashtra",
                postalCode: "416120",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>
      <body className={twMerge(montserrat.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
