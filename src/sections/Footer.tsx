"use client";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import { useEffect, useState } from "react";

// Hardcoded footer content
const footerContent = {
  socialLinks: {
    twitter: "https://twitter.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  navigationLinks: [
    { href: "/", text: "Home" },
    { href: "/projects", text: "Projects" },
    { href: "/gallery", text: "Gallery" },
    { href: "/contact", text: "Contact" },
    { href: "/about", text: "About Us" },
  ],
  copyrightText: "Siddhivinayak Engineers, Inc. All rights reserved.",
};

export const Footer = () => {
  const [year, setYear] = useState<string | null>(null);

  // Fetch the current year
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#121825] text-[#BCBCBC] text-sm py-20 text-center">
      <div className="container">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {footerContent.navigationLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.text} {/* No <a> tag inside Link */}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          {footerContent.socialLinks &&
            Object.entries(footerContent.socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                {platform === "twitter" && <SocialX className="hover:text-blue-500" />}
                {platform === "instagram" && <SocialInsta className="hover:text-blue-500" />}
                {platform === "linkedin" && <SocialLinkedIn className="hover:text-blue-500" />}
              </a>
            ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6">
          &copy; {year ? year : "Loading..."} {footerContent.copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
