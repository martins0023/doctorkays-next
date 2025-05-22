'use client';

import { CheckCircle2 } from "lucide-react";
import axios from "axios";
import { pricingOptions } from "../../../constants";
import { motion } from "framer-motion";
import { staggerContainer, textVariants } from "../../../constants/animations";
import { useState } from "react";
import Modal from "./ModalPrice";
import PaymentForm from "./PaymentForm";
import SubscriptionForm from "./SubscriptionForm";
import ModalDisplay from "../../../components/Modal";

const Pricing = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [consultationData, setConsultationData] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSubscriptionModal = (option) => {
    setSelectedOption(option);
    setIsSubscriptionModalOpen(true);
  };

  const closeSubscriptionModal = () => {
    setIsSubscriptionModalOpen(false);
    setSelectedOption(null);
  };

  const handleProceedToPayment = (formData) => {
    setConsultationData(formData);
    setIsSubscriptionModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setConsultationData(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handlePaymentSuccess = async (paymentResponse) => {
  //   console.log("Payment successful:", paymentResponse);
  //   try {
  //     const apiUrl = "http://localhost:5000"; // Ensure this is your backend URL in development
  //     console.log("Sending confirmation email with consultationData:", consultationData);
  //     const emailResponse = await fetch(`${apiUrl}/api/sendConfirmationEmail`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: consultationData.email,
  //         name: consultationData.name,
  //         consultationType: consultationData.consultationType,
  //       }),
  //     });
  //     console.log("HTTP status for email request:", emailResponse.status);
  //     const emailResult = await emailResponse.json();
  //     console.log("Email confirmation response:", emailResult);
  //   } catch (err) {
  //     console.error("Error sending confirmation email:", err);
  //   }
  //   setIsPaymentModalOpen(false);
  //   // Optionally, navigate to a thank-you page.
  // };

  const handlePaymentSuccess = async (paymentResponse) => {
    console.log("Payment success:", paymentResponse);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const payload = {
        email: consultationData.email,
        name: consultationData.name,
        consultationType: consultationData.consultationType,
        story: consultationData.story,
      };

      console.log(
        "Sending email request to:",
        `${apiUrl}/api/sendConfirmationEmail`
      );

      const emailResponse = await fetch(`${apiUrl}/api/sendConfirmationEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Request-ID": paymentResponse.transactionId, // For tracking
        },
        body: JSON.stringify(payload),
      });

      const responseText = await emailResponse.text();
      const emailResult = emailResponse.ok
        ? JSON.parse(responseText)
        : { error: `HTTP ${emailResponse.status}`, details: responseText };

      console.log("Email service response:", emailResult);

      if (!emailResponse.ok) {
        throw new Error(emailResult.error || "Email delivery failed");
      }
    } catch (err) {
      console.error("Email error details:", {
        error: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString(),
      });
      // Consider adding user notification
    } finally {
      setIsPaymentModalOpen(false);
    }
  };

  const handleFreeSubscription = async (formData) => {
    try {
      // Use the production URL if needed, otherwise default to localhost.
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      let response;
      // Check if formData is an instance of FormData (for file uploads)
      if (formData instanceof FormData) {
        response = await axios.post(
          `${apiUrl}/api/free-subscription`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(
          `${apiUrl}/api/free-subscription`,
          formData
        );
      }
      console.log("Free subscription confirmation email sent:", response.data);
      setModalMessage(
        "We have received your request and sent a confirmation email. Kindly check your spam, if you do not receive a confirmation email in the next 30 seconds."
      );
      setIsModalOpen(true);
      // Optionally, show a confirmation modal or toast here.
    } catch (error) {
      console.error(
        "Error sending free subscription confirmation email:",
        error
      );
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mt-20"
    >
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
      >
        Appointment Booking
      </motion.h2>
      <p></p>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Family Package" && (
                  <span className="bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    <br />
                    (Emergency)
                  </span>
                )}
              </p>

              {/* Pricing Section */}
              <p className="mb-8">
                {/* Original Price (crossed out) if present */}
                {option.originalPrice && (
                  <span className="text-2xl mr-2 line-through text-gray-400">
                    {option.originalPrice}
                  </span>
                )}

                {/* Current Price */}
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">
                  / {option.type}
                </span>
              </p>

              <ul>
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-8 flex items-center">
                    <div>
                      <CheckCircle2 className="" />
                    </div>
                    <span className="ml-2 leading-loose">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openSubscriptionModal(option)}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-purple-600 to-red-400 border border-primary rounded-lg transition duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {/* Subscription Modal */}
      {isSubscriptionModalOpen && selectedOption && (
        <Modal onClose={closeSubscriptionModal}>
          <SubscriptionForm
            option={selectedOption}
            onClose={closeSubscriptionModal}
            onProceedToPayment={handleProceedToPayment}
            onFreeSubscription={handleFreeSubscription}
          />
        </Modal>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && consultationData && (
        <Modal onClose={closePaymentModal}>
          <PaymentForm
            consultationData={consultationData}
            onPaymentSuccess={handlePaymentSuccess}
            onClose={closePaymentModal}
          />
        </Modal>
      )}

      <ModalDisplay
        isOpen={isModalOpen}
        onClose={closeModal}
        message={modalMessage}
      />
    </motion.div>
  );
};

export default Pricing;
