import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      className="container px-6 pt-24 pb-16 mx-auto text-black dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="mb-6 text-4xl font-bold text-gradient">Terms of Service</h1>
      <p className="mb-4 text-lg">
        Welcome to OneUp! These Terms of Service outline the rules and regulations for the use of our website.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website, you accept these terms and conditions in full. Do not continue to use OneUp if you do not accept all of the terms.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">2. License to Use</h2>
      <p className="mb-4">
        Unless otherwise stated, OneUp and/or its licensors own the intellectual property rights for all material on the site.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Restrictions</h2>
      <ul className="mb-4 ml-6 list-disc">
        <li>You are specifically restricted from publishing any website material in any other media.</li>
        <li>Selling, sublicensing and/or otherwise commercializing any website material.</li>
        <li>Using this website in any way that is damaging to the website.</li>
      </ul>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Last updated: May 2025
      </p>
    </motion.div>
  );
};

export default TermsOfService;
