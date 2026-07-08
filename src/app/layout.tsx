import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RALORA GLOW | Luxury Skincare for Every Body",
  description:
    "RALORA GLOW is a premium luxury unisex skincare brand. Discover the SPCL Tan Removal Body Scrub — crafted with thoughtfully selected natural ingredients for a premium self-care experience.",
  keywords:
    "Ralora Glow, luxury skincare, tan removal scrub, body scrub, premium skincare, unisex skincare, natural skincare, SPCL scrub",
  openGraph: {
    title: "RALORA GLOW | Luxury Skincare for Every Body",
    description:
      "Premium luxury unisex skincare. Crafted with natural ingredients for a refined self-care ritual.",
    url: "https://raloraglow.com",
    siteName: "RALORA GLOW",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RALORA GLOW Luxury Skincare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RALORA GLOW | Luxury Skincare for Every Body",
    description:
      "Premium luxury unisex skincare. Crafted with natural ingredients for a refined self-care ritual.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FFFFFF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RALORA GLOW",
              description:
                "Premium luxury unisex skincare brand featuring the SPCL Tan Removal Body Scrub.",
              url: "https://raloraglow.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7416751547",
                contactType: "customer service",
              },
              sameAs: ["https://instagram.com/raloraglow"],
            }),
          }}
        />
      </head>
      <body className="bg-white text-[#111111] antialiased">{children}</body>
    </html>
  );
}
