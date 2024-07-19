// src/components/FAQs.js
import React from "react";

import "../static/FAQs.css";

const FAQs = () => {
  const faqs = [
    {
      question: "What services does your digital marketing agency offer?",
      answer:
        "We specialize in a range of digital marketing services including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website design & development.",
    },
    {
      question: "How can digital marketing benefit my business?",
      answer:
        "Digital marketing can significantly enhance your online presence, attract more leads, increase brand awareness, improve customer engagement, and ultimately drive sales and revenue growth.",
    },
    {
      question:
        "How do you determine the right digital marketing strategy for my business?",
      answer:
        "We conduct a thorough analysis of your industry, target audience, competitors, and current marketing efforts. Based on this assessment, we develop a customized strategy tailored to meet your specific business goals and objectives.",
    },
    {
      question:
        "What results can I expect from your digital marketing services?",
      answer:
        "While results can vary depending on various factors such as industry competition and the effectiveness of previous marketing efforts, our goal is to achieve measurable outcomes including increased website traffic, higher conversion rates, improved ROI on advertising spend, and enhanced brand visibility.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "We use a combination of key performance indicators (KPIs) such as website analytics (traffic, bounce rates, conversions), social media engagement metrics, email open and click-through rates, and ROI analysis from advertising campaigns to gauge the success of our efforts.",
    },
    {
      question:
        "What makes your digital marketing agency different from others?",
      answer:
        "Our agency stands out due to our commitment to delivering personalized solutions, a deep understanding of digital marketing trends and technologies, transparent communication, and a results-driven approach focused on achieving tangible business outcomes for our clients.",
    },
    {
      question: "How much do your digital marketing services cost?",
      answer:
        "The cost of our services can vary depending on the scope and complexity of your project or campaign. We offer customized pricing based on your specific needs and goals. We believe in transparent pricing and provide detailed proposals outlining the services included and the associated costs.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline for seeing results can vary based on factors such as your industry, current online presence, and the competitiveness of your market. Generally, significant improvements can be observed within the first 3-6 months of implementing a digital marketing strategy, but ongoing efforts are crucial for sustained growth.",
    },
    {
      question: "Do I need to sign a long-term contract for your services?",
      answer:
        "We offer flexible engagement options tailored to your preferences. While we recommend committing to a strategic plan for optimal results, we understand the need for flexibility. We provide both short-term and long-term contract options depending on your needs.",
    },
    {
      question: "How do I get started with your digital marketing services?",
      answer:
        "To get started, simply contact us via phone or email to schedule a consultation. During this initial discussion, we'll learn more about your business objectives and challenges, and outline how our digital marketing expertise can help you achieve your goals effectively.",
    },
  ];

  return (
    <div className="faqs-container">
      <h1>FAQs</h1>

      {faqs.map((faq, index) => (
        <div className="faq-item">
          <div className="faq-question">{faq.question}</div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
