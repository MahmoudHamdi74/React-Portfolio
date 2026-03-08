import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { useTranslation } from '../../hooks/useTranslation'
import contactDict from '../../content/contact/contact.content'

export default function ContactForm() {
  const content = useTranslation(contactDict);
  const [state, handleSubmit] = useForm("xjgabezl");

  if (state.succeeded) {
    return (
      <div className="contact-form rounded-2xl p-8 shadow-xl border bg-amber-50/80 border-amber-200 shadow-amber-100 dark:bg-gray-900/50 dark:border-purple-800/50 dark:shadow-purple-900/30">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">🎉 {content.successTitle || 'Thank You!'}</h3>
          <p className="text-lg text-gray-700 dark:text-neutral-300">{content.successMessage || 'Your message has been sent successfully! I will contact you soon.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form rounded-2xl p-8 shadow-xl border bg-amber-50/80 border-amber-200 shadow-amber-100 dark:bg-gray-900/50 dark:border-purple-800/50 dark:shadow-purple-900/30">
      <h3 className="text-3xl text-center font-bold mb-4 text-gray-900 dark:text-white">{content.letsWork}</h3>
      <p className="text-lg mb-6 text-center text-gray-700 dark:text-neutral-300">{content.formDescription}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-gray-900 dark:text-neutral-300">{content.nameLabel}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={content.namePlaceholder}
              required
              className="ring-2 ring-amber-200 dark:ring-purple-800/50 rounded-md p-2 w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-500 focus:ring-amber-500 dark:focus:ring-purple-500 bg-white dark:bg-gray-800"
            />
            <ValidationError 
              prefix={content.nameLabel || "Name"} 
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-gray-900 dark:text-neutral-300">{content.emailFieldLabel}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={content.emailPlaceholder}
              required
              className="ring-2 ring-amber-200 dark:ring-purple-800/50 rounded-md p-2 w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-500 focus:ring-amber-500 dark:focus:ring-purple-500 bg-white dark:bg-gray-800"
            />
            <ValidationError 
              prefix={content.emailFieldLabel || "Email"} 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="subject" className="font-medium text-gray-900 dark:text-neutral-300">{content.subjectLabel}</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder={content.subjectPlaceholder}
              required
              className="ring-2 ring-amber-200 dark:ring-purple-800/50 rounded-md p-2 w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-500 focus:ring-amber-500 dark:focus:ring-purple-500 bg-white dark:bg-gray-800"
            />
            <ValidationError 
              prefix={content.subjectLabel || "Subject"} 
              field="subject"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <label htmlFor="message" className="font-medium text-gray-900 dark:text-neutral-300">{content.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              placeholder={content.messagePlaceholder}
              rows={5}
              required
              className="ring-2 ring-amber-200 dark:ring-purple-800/50 rounded-md p-2 w-full text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-500 focus:ring-amber-500 dark:focus:ring-purple-500 resize-none bg-white dark:bg-gray-800"
            />
            <ValidationError 
              prefix={content.messageLabel || "Message"} 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>
        <div className="flex justify-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="flex justify-center items-center text-white bg-amber-500 hover:bg-amber-600 shadow-sm shadow-amber-200/50 hover:shadow-md hover:shadow-amber-300/60 dark:bg-purple-600 dark:shadow-purple-900/30 dark:hover:bg-purple-700 dark:hover:shadow-purple-800/50 px-6 py-2 rounded-md font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
          {state.submitting ? (content.sendingButton || 'Sending...') : content.sendButton}
        </button>
            </div>
      </form>
    </div>
  )
}
