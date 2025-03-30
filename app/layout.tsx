import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomelis Rig Services | Critical Rigging Experts",
  description:
    "We deliver high-precision rigging solutions in complex offshore and onshore environments. Request your technical evaluation now.",
  keywords: [
    "rigging",
    "offshore lifting",
    "critical lifts",
    "onshore rigging",
    "Tomelis",
    "Qualitech",
    "heavy equipment",
    "lifting operations",
  ],
  openGraph: {
    title: "Tomelis Rig Services",
    description:
      "Critical Rigging & Heavy Lift Solutions – Safe, precise, and proven operations for your offshore and onshore needs.",
    url: "https://tomelisrigs.vercel.app/", // substitua pela URL real do seu site
    siteName: "Tomelis Rig Services",
    images: [
      {
        url: "https://www.tomelisrig.com/assets/images/og-image.jpg", // coloque sua imagem real
        width: 1200,
        height: 630,
        alt: "Tomelis Rig Services Offshore Rigging",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomelis Rig Services",
    description:
      "Expert solutions in heavy lifting and rigging, even in confined spaces with no crane access.",
    images: ["https://www.tomelisrig.com/assets/images/og-image.jpg"],
    site: "@tomelisrig", // opcional, se tiver conta no Twitter
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
