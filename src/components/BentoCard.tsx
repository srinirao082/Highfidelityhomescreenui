import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  className?: string;
  delay: number;
}

export function BentoCard({ icon, title, description, gradient, className, delay }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 + delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative bg-white rounded-3xl p-8 border border-gray-200/60 shadow-lg shadow-gray-200/40 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
      
      {/* Gradient orb */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-all duration-500`} />
      
      <div className="relative">
        {/* Icon */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
          transition={{ duration: 0.4 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg shadow-current/20 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
          <div className="text-white relative z-10">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <h3 
          className="text-gray-900 mb-2"
          style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.015em' }}
        >
          {title}
        </h3>

        <p 
          className="text-gray-600 mb-6"
          style={{ fontSize: '15px', lineHeight: '1.6' }}
        >
          {description}
        </p>

        {/* Arrow */}
        <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-900 transition-colors">
          <span className="text-[13px]" style={{ fontWeight: 600 }}>Learn more</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
