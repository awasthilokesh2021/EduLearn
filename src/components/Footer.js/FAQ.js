import { useState } from "react";

const FAQs = [
  {
    question: "How do I enroll?",
    answer: "Click on a course and follow the steps to enroll.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes, after successfully completing a course.",
  },
  {
    question: "Is there any refund policy?",
    answer: "Yes, you can request a refund within 7 days of enrollment.",
  },
  {
    question: "What is the course duration?",
    answer: "Each course varies, but most take 4-6 weeks to complete.",
  },
  {
    question: "What is the course duration?",
    answer: "Each course varies, but most take 4-6 weeks to complete.",
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, you can learn at your own pace and revisit lessons anytime.",
  },
  {
    question: "Do I need prior experience?",
    answer: "No, we have beginner to advanced-level courses for everyone.",
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Yes, our platform is mobile-friendly, and you can learn anytime.",
  },
  {
    question: "How can I contact support?",
    answer: "You can email us at support@edulearn.com for any assistance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Frequently Asked Questions
      </h1>
      {FAQs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <button
            className="w-full text-left font-semibold py-2 text-lg"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question} {openIndex === index ? "▲" : "▼"}
          </button>
          {openIndex === index && (
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
