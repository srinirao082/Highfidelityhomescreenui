import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  title: string;
  description: string;
  href: string;
}

interface NavigationDropdownProps {
  label: string;
  items: MenuItem[];
  delay: number;
}

export function NavigationDropdown({ label, items, delay }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        onMouseEnter={() => setIsOpen(true)}
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 transition-colors text-[14px] relative group flex items-center gap-1"
        style={{ fontWeight: 500 }}
      >
        {label}
        <ChevronDown 
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl border border-gray-200/60 shadow-2xl shadow-gray-900/10 overflow-hidden z-50"
          >
            <div className="p-2">
              {items.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group/item"
                >
                  <div 
                    className="text-gray-900 mb-1 group-hover/item:text-blue-600 transition-colors"
                    style={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    {item.title}
                  </div>
                  <div 
                    className="text-gray-600 text-[12px] leading-relaxed"
                    style={{ fontWeight: 400 }}
                  >
                    {item.description}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
