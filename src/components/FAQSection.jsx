import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan anytime from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time, and your access will continue until the end of your billing cycle.You can cancel your subscription at any time, and your access will continue until the end of your billing cycle.You can cancel your subscription at any time, and your access will continue until the end of your billing cycle. ",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add company details, tax ID, and other info directly from the billing section.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill you monthly or annually based on your chosen plan. You'll get an invoice via email and in your dashboard.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Head to your profile settings and update your email address there. We'll send a confirmation link to your new address.",
  },
];

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState([]);
  const [toggleAll, setToggleAll] = useState(false);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightText = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={i} className="bg-[#ff6e0c] px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleToggle = (index) => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleExpandCollapseAll = () => {
    if (toggleAll) {
      setExpanded([]);
    } else {
      setExpanded(filteredFaqs.map((_, i) => i));
    }
    setToggleAll(!toggleAll);
  };

  return (
    <section className="w-full  bg-orange-100">
      <div className="text-center mb-10">
        <p className="text-sm font-medium bg-orange-100 uppercase"></p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-gray-600">
          Have questions? We are here to help.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="🔍 Search..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#ff6e0c] transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleExpandCollapseAll}
            className="px-4 py-2 bg-[#ff6e0c] text-white rounded hover:bg-[#ff6e0c] transition"
          >
            {toggleAll ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto px-4 py-16">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 focus:outline-none"
              >
                <span>{highlightText(faq.question, searchTerm)}</span>
                {expanded.includes(index) ? (
                  <FaMinus className="text-gray-500" />
                ) : (
                  <FaPlus className="text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {expanded.includes(index) && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-600 text-base">
                      {highlightText(faq.answer, searchTerm)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>

      {/*  */}
    </section>
  );
}
