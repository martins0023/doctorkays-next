import { Edit3, HelpCircle, Home, Info, Phone } from "lucide-react";

export const navItems = [
  { label: "Home", href: "https://doctorkays.com", iconMapping: <Home className="w-5 h-5 inline mr-2" /> },
  { label: "About Us", href: "https://doctorkays.com/about", iconMapping: <Info className="w-5 h-5 inline mr-2" /> },
  // { label: "Community Forums", href: "/community", iconMapping: <Users className="w-5 h-5 inline mr-2" /> },
  { label: "Blog", href: "https://blog.doctorkays.com/", iconMapping: <Edit3 className="w-5 h-5 inline mr-2" /> },
  // { label: "Shop", href: "/shop", iconMapping: <ShoppingCart className="w-5 h-5 inline mr-2" /> },
  { label: "Contact", href: "https://doctorkays.com/contact", iconMapping: <Phone className="w-5 h-5 inline mr-2" /> },
  { label: "FAQs", href: "https://doctorkays.com/faqs", iconMapping: <HelpCircle className="w-5 h-5 inline mr-2" /> },
];

export const resourcesLinks = [
  // { href: "https://blog.doctorkays.com/", text: "Blog" },
  { href: "https://doctorkays.com/faqs", text: "FAQs" },
  // { href: "https://www.youtube.com/@Doctorkays", text: "MOS" },
  // { href: "https://www.youtube.com/@Doctorkays", text: "Clinic Series" },
  // { href: "/community", text: "Community Forums" },
];

export const platformLinks = [
  { href: "https://consultation.doctorkays.com/", text: "Consultation" },
  // { href: "/shops", text: "Shops and Merch" },
  // { href: "#", text: "Clinic Online (coming soon)" },
];

export const communityLinks = [
  { href: "https://doctorkays.com/about", text: "About us" },
  { href: "https://doctorkays.com/contact", text: "Contact Us" },
  // { href: "/partnership", text: "Become a Sponsor/Collaborate" },
  { href: "https://doctorkays.com/projects", text: "Projects" },
  { href: "https://doctorkays.com/volunteer", text: "Become a volunteer" },
];
