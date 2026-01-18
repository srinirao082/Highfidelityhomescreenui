import { motion } from 'motion/react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

export function ProcessStep({ number, title, description, delay }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Connecting line (hidden on last item) */}
      <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent group-last:hidden" />
      
      <div className="relative bg-white rounded-2xl p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Number */}
        <div className="mb-6">
          <span 
            className="text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text"
            style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '1' }}
          >
            {number}
          </span>
        </div>

        {/* Content */}
        <h3 
          className="text-gray-900 mb-3"
          style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.015em' }}
        >
          {title}
        </h3>

        <p 
          className="text-gray-600"
          style={{ fontSize: '15px', lineHeight: '1.6' }}
        >
          {description}
        </p>

        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
