import React, { useState } from 'react';

const FAQItem = ({ id, question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-2">
      <h2>
        <button
          id={`faqs-title-${id}`}
          type="button"
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={`faqs-text-${id}`}
        >
          <span>{question}</span>
          <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expanded ? '!rotate-180' : ''}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${expanded ? '!rotate-180' : ''}`} />
          </svg>
        </button>
      </h2>
      <div
        id={`faqs-text-${id}`}
        role="region"
        aria-labelledby={`faqs-title-${id}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-3">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    // Add your FAQs here
    { id: '01', question: 'What are the advantages of your service?', answer: 'Your answer here' },
    { id: '02', question: 'How do I get started?', answer: 'Your answer here' },
    { id: '03', question: 'What is the pricing?', answer: 'Your answer here' },
    { id: '04', question: 'How do I contact support?', answer: 'Your answer here' },
    { id: '05', question: 'Can I cancel anytime?', answer: 'Your answer here' },
    // ...
  ];

  return (
    <div className="divide-y divide-slate-200">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} {...faq} />
      ))}
    </div>
  );
};

const Faq = () => (
  <div className="relative font-inter antialiased">
    <main className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden">
      <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
        <h1 className="text-2xl font-bold text-white mb-4">FAQs</h1>
        <FAQList />
      </div>
    </main>
    {/* Add ther e is another comment here but you ddn not see it  your footer and banner here */}
  </div>
);

export default Faq;
