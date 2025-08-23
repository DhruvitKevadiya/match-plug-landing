"use client";
import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface Category {
  id: string;
  label: string;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`w-6 h-6 text-black transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const FAQAccordionItem: React.FC<{
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ faq, isOpen, onToggle }) => (
  <div className="border-b border-gray-300 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full py-6 flex justify-between items-center text-left hover:opacity-80 transition-opacity"
      aria-expanded={isOpen}
    >
      <h3 className="text-xl font-bold text-[#03DD3C] pr-4">{faq.question}</h3>
      <ChevronIcon isOpen={isOpen} />
    </button>

    {isOpen && (
      <div className="pb-6">
        <p className="text-xl text-black leading-relaxed">{faq.answer}</p>
      </div>
    )}
  </div>
);

const CategoryTab: React.FC<{
  category: Category;
  isActive: boolean;
  onClick: () => void;
}> = ({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 text-xl rounded-full border transition-all ${
      isActive
        ? "border-white bg-white text-black"
        : "border-white text-white hover:bg-white/10"
    }`}
  >
    {category.label}
  </button>
);

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const categories: Category[] = [
    { id: "tips", label: "Tips" },
    { id: "predictions", label: "Predictions" },
    { id: "payments", label: "Payments" },
    { id: "general", label: "General" },
  ];

  // Dummy FAQ data - will be replaced with API calls
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is Matchplug?",
      answer:
        "Matchplug is a prediction betting tips platform dedicated to helping you access expert predictions and cut your losses as low as possible.",
      category: "general",
    },
    {
      id: 2,
      question: "How accurate are your predictions?",
      answer:
        "Our winning culture helps us work hard to follow trends to ensure our soccer prediction accuracy stays as high as 85%. Our team can sometimes raise this bar to 90% depending on the information they can access.",
      category: "predictions",
    },
    {
      id: 3,
      question: "Do I have to pay for betting tips?",
      answer:
        "We give you two options because Tip180 is for everyone; the free and paid plans. So, you still have access to tips and soccer predictions but when you're ready for more you can become a paid subscriber with us.",
      category: "payments",
    },
    {
      id: 4,
      question: "How do I register for Matchplug?",
      answer:
        "You can register by visiting our website and filling out the registration form. Once registered, you can choose your preferred plan and start accessing the restricted segments on our website.",
      category: "general",
    },
    {
      id: 5,
      question: "What types of betting tips do you provide?",
      answer:
        "We provide a variety of betting tips, including OVER 1.5, Double Chance, Potential Risk (High Odds), and more. Our tips are garnered from several experts to ensure your continuous win.",
      category: "tips",
    },
    {
      id: 6,
      question: "How often do you update your tips?",
      answer:
        "We update our tips regularly, between 18 - 72 hours before kickoff. You can also follow us on our social media pages for the most recent updates.",
      category: "tips",
    },
    {
      id: 7,
      question: "Can I trust the information provided by Matchplug?",
      answer:
        "Yes, we pride in our transparency and sharing which is why we have our tracking system so you see how many wins we curate over time. Our team also conducts thorough research to ensure that the information we provide is as accurate as can be.",
      category: "general",
    },
    {
      id: 8,
      question: "What if I have questions or need assistance?",
      answer:
        "You can forward your questions to our support team through the contact information provided on our website. We would love to know your concerns.",
      category: "general",
    },
    {
      id: 9,
      question: "Is there a money-back guarantee?",
      answer:
        "We are very dedicated to helping you cut losses but we also stay aware of the fact that betting always carries risks. We do not offer a money-back guarantee, but we are committed to helping you bet better and wisely.",
      category: "payments",
    },
    {
      id: 10,
      question: "What payment methods do you accept for subscriptions?",
      answer:
        "We accept various payment methods, including credit/debit cards and other online payment platforms. You can find more details on our payment page.",
      category: "payments",
    },
    {
      id: 11,
      question: "Can I cancel my subscription at any time?",
      answer:
        "Please read through our cancellation policy for more details on how to proceed.",
      category: "payments",
    },
    {
      id: 12,
      question: "How can I improve my betting skills?",
      answer:
        "As highlighted above, we don't just give you tips, we teach you to move safely as you bet. You can find reports, blogs and other educational resources on our page to guide your betting decisions.",
      category: "tips",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => faq.category === activeCategory);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      className="py-20 relative overflow-hidden transition-all"
      style={{
        backgroundImage: "url(/black-marble-patterned-texture-background.jpg)",
        backgroundColor: "#455DBD",
        backgroundBlendMode: "screen",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* FAQ Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className=" ">
              {filteredFAQs.length > 0 ? (
                <div>
                  {filteredFAQs.map((faq) => (
                    <FAQAccordionItem
                      key={faq.id}
                      faq={faq}
                      isOpen={openItems.has(faq.id)}
                      onToggle={() => toggleItem(faq.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-500">
                    No FAQs available for this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
