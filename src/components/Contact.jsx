/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../utils/Loader";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...fromData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!fromData.name) {
      errors.name = "Name is required";
    }
    if (!fromData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(fromData.email)) {
      errors.email = "Invalid email address";
    }
    if (!fromData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (Object.keys(validationError).length > 0) {
      setError(validationError);
    } else {
      setError({});
      setIsSending(true);

      emailjs
        .send(
          "service_acb3h47",
          "template_vjq9umm",
          fromData,
          "iJAUq6qj1phRJDyaM"
        )
        .then((res) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.log("Error: " + err);
          toast.error("Failed to send message");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="mb-8 text-4xl font-semibold text-center tracking-tighter">
        Let&apos;s Connect 😊
      </h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={fromData.name}
              placeholder="name"
              onChange={handleFormData}
              className={`mb-8 w-full appearance-none border border-stone-50/30 
                bg-transparent px-3 py-2 text-sm focus:border-stone-400
                focus:outline-none rounded-lg`}
            />
            {error.name && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {error.name}
              </motion.p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={fromData.email}
              placeholder="email"
              onChange={handleFormData}
              className={`mb-8 w-full appearance-none border border-stone-50/30 
                bg-transparent px-3 py-2 text-sm focus:border-stone-400
                focus:outline-none rounded-lg`}
            />
            {error.email && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm text-rose-800"
              >
                {error.email}
              </motion.p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            id="message"
            name="message"
            value={fromData.message}
            placeholder="message"
            onChange={handleFormData}
            className={`mb-8 w-full appearance-none border border-stone-50/30 
                bg-transparent px-3 py-2 text-sm focus:border-stone-400
                focus:outline-none rounded-lg h-32`}
          />
          {error.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-rose-800"
            >
              {error.message}
            </motion.p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200
            px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-300 ${
              isSending ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          disabled={isSending}
        >
          <div className="flex items-center gap-2 justify-center">
            {isSending ? <Loader /> : "Send Message"}
            {!isSending && <FiSend />}
          </div>
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;