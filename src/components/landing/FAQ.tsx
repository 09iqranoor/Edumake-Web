import { useState } from "react"
import "./faq.css"
import SectionBadge from "./SectionBadge"


interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is EduMake and how does it work?",
    answer:
      "EduMake is an all-in-one education platform that helps students learn better, supports teachers with smart tools, and gives parents and schools clear visibility into performance. Simply sign up, choose your role, and start exploring features like progress tracking, communication, assignments, and more.",
  },
  {
    question: "Who can use EduMake?",
    answer:
      "Students, teachers, parents, and schools can all use EduMake based on their specific roles and needs.",
  },
  {
    question: "Can parents track their child’s progress?",
    answer:
      "Yes, parents can easily monitor their child’s academic progress, attendance, and performance reports.",
  },
  {
    question: "Does EduMake support online classes and assignments?",
    answer:
      "Absolutely! EduMake supports virtual classes, assignments, submissions, and assessments.",
  },
  {
    question: "Is my data safe on EduMake?",
    answer:
      "Yes, we use industry-standard security practices to keep your data safe and secure.",
  },
  {
    question: "Can schools customize EduMake to fit their workflow?",
    answer:
      "Yes, EduMake can be customized to match different institutional workflows.",
  },
  {
    question: "How do I get support if I have issues?",
    answer:
      "You can reach our support team via email or the in-app help section.",
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">
          <SectionBadge
            text="FAQ"
            logo="/images/edu-make-logo.png"
          />

          <h2>Frequently Asked Questions</h2>
          <p>
            Find quick answers to the most common questions about using EduMake.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-card" key={index}>
              <button
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ
