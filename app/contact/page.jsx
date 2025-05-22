import React from "react";
import Navbar from "../../components/Navbar";
import FooterFull from "../../components/FooterFull";
import ContactContext from "./ContactContext";

export const metadata = {
  title: "Contact Us | Doctor Kays",
  description:
    "Get in touch with Doctor Kays team for inquiries, support, or collaboration.",
  openGraph: {
    title: "Contact Us | Doctor Kays",
    description: "Reach out to Doctor Kays team for any questions or support.",
    url: "/contact",
    siteName: "Doctor Kays",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Doctor Kays",
    description: "Reach out to Doctor Kays team for any questions or support.",
  },
};

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto md:pt-20 px-6">
        <ContactContext />
      </div>
      <FooterFull />
    </div>
  );
}
