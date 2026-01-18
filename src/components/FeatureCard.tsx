import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

export function FeatureCard({ icon, title, description, gradient, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.3 + delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative bg-white rounded-3xl p-9 border border-gray-200/60 shadow-lg shadow-gray-200/40 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
        initial={false}
      />
      
      {/* Gradient Orbs */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:scale-150`} />
      <div className={`absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr ${gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 delay-100 group-hover:scale-150`} />
      
      <div className="relative">
        {/* Icon Container */}
        <motion.div 
          whileHover={{ rotate: [0, -4, 4, -4, 0], transition: { duration: 0.5 } }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-7 shadow-xl shadow-current/25 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
          <div className="text-white relative z-10">
            {icon}
          </div>
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>

        {/* Content */}
        <div className="space-y-3 mb-6">
          <h3 
            className="text-gray-900 leading-tight"
            style={{ fontSize: '21px', fontWeight: 600, letterSpacing: '-0.015em' }}
          >
            {title}
          </h3>

          <p 
            className="text-gray-600 leading-relaxed"
            style={{ fontSize: '15px', lineHeight: '1.6' }}
          >
            {description}
          </p>
        </div>

        {/* Interactive Arrow */}
        <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-900 transition-all duration-300">
          <span 
            className="text-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ fontWeight: 600 }}
          >
            Explore feature
          </span>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ArrowUpRight 
              className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
            />
          </motion.div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-3xl">
          <motion.div
            className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
          />
        </div>
      </div>

      {/* Border highlight on hover */}
      <div className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`} style={{ WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }} />
    </motion.div>
  );
}
