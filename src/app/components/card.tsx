'use client'
import { motion } from 'framer-motion'
export default function Card({title,description,icon}:{
    title: string
    description :string
    icon:string
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
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
    
  );
}
