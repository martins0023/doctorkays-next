"use client"

import React from "react";
import Stayintouch from "../../components/Stayintouch";
import Testimonials from "../../components/Testimonials";
import ContactPage from "./components/ContactPage";

const ContactContext = () => {
  return (
    <div>
      <ContactPage />
      <Testimonials />
      <Stayintouch />
    </div>
  );
};

export default ContactContext;
