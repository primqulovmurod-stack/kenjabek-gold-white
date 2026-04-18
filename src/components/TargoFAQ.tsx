'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "How do I track my shipment in real-time?",
    answer: "You can use your tracking ID on our platform's dashboard or via the Targo Go mobile app. We provide minute-by-minute updates using GPS integration."
  },
  {
    question: "What types of cargo do you handle?",
    answer: "Targo handles everything from sensitive medical equipment and luxury vehicles to high-volume industrial materials. Each category has specialized handling protocols."
  },
  {
    question: "Do you offer international customs support?",
    answer: "Yes, our team of legal experts manages all customs documentation and clearance for over 120 countries, ensuring no delays at borders."
  },
  {
    question: "What is your commitment to sustainability?",
    answer: "We are committed to carbon neutrality by 2030 through our electric fleet and optimized route algorithms that reduce fuel consumption by 40%."
  }
]

const TargoFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-black text-white py-24 md:py-32 px-8 md:px-16 font-rubik">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="targo-headline text-3xl md:text-4xl">Common Questions</h2>
          <div className="w-12 h-1 bg-targo-red mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-white/10' : 'bg-transparent border-white/5'} border rounded-sm overflow-hidden`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-targo-red' : 'text-white/80 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? <Minus size={20} className="text-targo-red" /> : <Plus size={20} className="text-white/30" />}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-white/50 leading-relaxed italic">
                  "{faq.answer}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargoFAQ
