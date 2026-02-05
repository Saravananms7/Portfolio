import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // Sign up at https://www.emailjs.com/
    const serviceID = 'YOUR_SERVICE_ID'
    const templateID = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    if (serviceID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setStatus('error')
        setErrorMessage('EmailJS is not configured. Please set your Service ID, Template ID, and Public Key in Contact.jsx.')
      }, 1000)
      return
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text)
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      }, (error) => {
        console.log(error.text)
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again later.')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "saravanansworkspace@gmail.com",
      link: "mailto:saravanansworkspace@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8078539018",
      link: "tel:+918078539018"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Munnar, Kerala, India",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Saravananms7",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/saravananm2511",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:saravanansworkspace@gmail.com",
      color: "hover:text-red-600"
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question, want to collaborate, or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  href={info.link}
                  className="flex items-center p-4 bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                    <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-lg ${social.color} transition-all duration-200`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-xl p-8 shadow-lg relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-950/50 text-white transition-colors duration-200 disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-950/50 text-white transition-colors duration-200 disabled:opacity-50"
                    placeholder="saravanansworkspace@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-950/50 text-white transition-colors duration-200 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-slate-950/50 text-white transition-colors duration-200 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl
                    ${status === 'success'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : status === 'error'
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
