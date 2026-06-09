import React, { useState, useRef } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";  // @ add pannanum // 🔴 Irukkala!
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_8i4bteg",      // 🔁 Replace with your EmailJS Service ID
        "template_mk1dz9l",     // 🔁 Replace with your EmailJS Template ID
        formRef.current,
        "lVeoyrmwmm6QJm4IG"       // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Message send panna mudiyala. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">

      {/* RIGHT SIDE GRADIENT GLOW */}
      <div className="absolute right-0 top-0 h-full w-3/4 bg-gradient-to-l from-pink-500/40 via-purple-500/30 to-transparent blur-3xl"></div>

      {/* CONTACT CARD */}
      <div className="relative z-10 w-[85%] max-w-5xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl shadow-2xl p-12">

        <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-pink-400 inline-block pb-2">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="gap-2 flex flex-col mt-4 w-35">
              <a
                href="mailto:smpmariselvam199@gmail.com"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition text-center"
              >
                Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/m-mari-selvam-24904024a/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition text-center"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/smpmariselvam"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition text-center"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-purple-400 mt-1" size={18} />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">
                  Hosur, TamilNadu, India
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - EMAILJS FORM */}
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-inner">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-purple-400 hover:text-purple-300 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <input
                  type="text"
                  name="from_name"           // 🔁 Match with EmailJS template variable
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#0f172a] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-400"
                />

                <input
                  type="email"
                  name="from_email"          // 🔁 Match with EmailJS template variable
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#0f172a] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-400"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full bg-[#0f172a] text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-pink-400"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Contact;