import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageSquare,
  Check,
  Navigation,
  Navigation2,
  Navigation2Icon,
  Navigation2OffIcon,
  LucideNavigation,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const contactInfo = {
    email: "prabhxs@gmail.com",
    phone: "+91-9772977123",
    linkedin: "https://www.linkedin.com/in/prabhxjottsingh/",
    github: "https://github.com/prabhxjottsingh",
  };

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000); // Reset after 2 seconds
  };

  return (
    <section className="py-5 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3">
          <MessageSquare className="w-8 h-8 text-blue-400" />
          <span>Get in Touch</span>
        </h2>

        <div className="grid gap-8">
          {/* Contact Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p- hover:border-blue-500/30 transition-all duration-300">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                <div className="p-1 bg-gray-900/50 rounded-lg border border-gray-700 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 text-sm">
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-blue-400 transition-colors duration-300 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.email, "email")}
                  className="p-1 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group"
                  title={copiedField === "email" ? "Copied!" : "Copy email"}
                >
                  {copiedField === "email" ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                <div className="p-1 bg-gray-900/50 rounded-lg border border-gray-700 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 text-sx">
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-white hover:text-blue-400 transition-colors duration-300 hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(contactInfo.phone, "phone")}
                  className="p-1 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  title={copiedField === "phone" ? "Copied!" : "Copy phone"}
                >
                  {copiedField === "phone" ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                <div className="p-1 bg-gray-900/50 rounded-lg border border-gray-700 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 text-sm">
                  <p className="text-xs text-gray-400 mb-1">LinkedIn</p>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 duration-300 hover:underline flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                  >
                    Connect on LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300">
                <div className="p-1 bg-gray-900/50 rounded-lg border border-gray-700 group-hover:border-blue-500/30 group-hover:scale-110 transition-all duration-300">
                  <Github className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 text-sm">
                  <p className="text-xs text-gray-400 mb-1">GitHub</p>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 duration-300 hover:underline flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                  >
                    View GitHub Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
