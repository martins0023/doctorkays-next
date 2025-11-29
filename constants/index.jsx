import { Edit3, HelpCircle, Home, Info, Phone, User2Icon } from "lucide-react";

export const navItems = [
  { label: "Home", href: "https://doctorkays.com", iconMapping: <Home className="w-5 h-5 inline mr-2" /> },
  { label: "About Us", href: "https://doctorkays.com/about", iconMapping: <Info className="w-5 h-5 inline mr-2" /> },
  // { label: "Community Forums", href: "/community", iconMapping: <Users className="w-5 h-5 inline mr-2" /> },
  { label: "Blog", href: "https://blog.doctorkays.com/", iconMapping: <Edit3 className="w-5 h-5 inline mr-2" /> },
  // { label: "Shop", href: "/shop", iconMapping: <ShoppingCart className="w-5 h-5 inline mr-2" /> },
  { label: "Contact", href: "https://doctorkays.com/contact", iconMapping: <Phone className="w-5 h-5 inline mr-2" /> },
  { label: "FAQs", href: "https://doctorkays.com/faqs", iconMapping: <HelpCircle className="w-5 h-5 inline mr-2" /> },
];

export const testimonials = [
  {
    user: "MLS Abimbola",
    country: "United Kingdom",
    image: User2Icon,
    text: "Service is very satisfying.",
    rating: 5,
  },
  {
    user: "Philadolar",
    country: "Nigeria",
    image: User2Icon,
    text: "Your product or content has been really educative and also fun to watch. Keep it up",
    rating: 5,
  },
  {
    user: "Oluitan Olumide",
    country: "Nigeria",
    image: User2Icon,
    text: "Doctor kays has been an amazing Doctor since I got to know him.",
    rating: 5,
  },
  {
    user: "Jeremiah Robert",
    country: "Nigeria",
    image: User2Icon,
    text: "Dr Kays is now a household name in social media space. The people on my space are loving it, to the extent of asking: this Doctor kay's you are always posting is doing very good with the health education. Those tips and reminders are very helpul.",
    rating: 5,
  },
  {
    user: "Commy-Constance Oko",
    country: "Nigeria",
    image: User2Icon,
    text: "I have learnt so much about personal health and got to know a lot on health matters generally. Thank you so much Dr. Kays for always giving prompt response to my questions.",
    rating: 5,
  },
  {
    user: "Ezekiel",
    country: "London",
    image: User2Icon,
    text: "Great team and the app is easy to use.",
    rating: 5,
  },
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
