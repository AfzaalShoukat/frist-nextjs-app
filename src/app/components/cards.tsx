'use client' // This directive is needed for framer-motion animations

import { motion } from 'framer-motion'

export default function Card({ title, description, price}: { 
  title: string
  description: string
  price: string
}) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{title}</div>
      <h3 className="text-xl font-semibold mb-2">{description}</h3>
      <p className="text-gray-600">{price}</p>
    </motion.div>
  )
}