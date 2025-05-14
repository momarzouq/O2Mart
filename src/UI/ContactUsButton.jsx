import React, { useState } from "react";
import { BiMessageAltDetail, BiX, BiLogoWhatsapp } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { IoChatbox } from "react-icons/io5";
const ContactUsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 fixed bottom-20 right-7 flex flex-col items-center gap-2">
      {/* Main Button */}
      <motion.button
        onClick={toggleMenu}
        initial={{ y: 0 }}
        animate={{ y: isOpen ? -2 : 0 }}
        className="bg-Brand rounded-full p-2 text-white text-xl w-10 h-10 flex items-center justify-center"
      >
        {isOpen ? <BiX /> : <BiMessageAltDetail />}
      </motion.button>

      {/* Animated Icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 rounded-full p-2 text-white text-xl w-10 h-10 flex items-center justify-center"
            >
              <BiLogoWhatsapp />
            </a>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 rounded-full p-2 text-white text-xl w-10 h-10 flex items-center justify-center"
            >
              <IoChatbox />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUsButton;
