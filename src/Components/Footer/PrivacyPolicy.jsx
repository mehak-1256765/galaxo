import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="container px-6 pt-24 pb-16 mx-auto text-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-6 text-4xl font-bold text-gradient">Privacy Policy</h1>
      <p className="mb-4 text-lg">
        Your privacy is important to us. It is OneUp's policy to respect your privacy regarding any information we may collect from you across our website.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, and contact details for service and analytics purposes.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use the information to provide and improve our services, communicate with you, and comply with legal obligations.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance your experience. You can control cookie settings through your browser.
      </p>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Last updated: May 2025
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
