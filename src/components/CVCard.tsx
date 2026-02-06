import { motion } from 'framer-motion';
import { itemVariants } from '../lib/framer';
import { FileText, Download } from 'lucide-react';

export function CVCard() {
  return (
    <motion.a
      href="/Curriculo-Pedro-Ferreira-Software-Engineer.pdf"
      target="_blank"
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group relative p-6 rounded-3xl bg-card-bg border border-border-main flex flex-col justify-between overflow-hidden transition-colors duration-300 cursor-pointer"
    >

      <div className="absolute inset-0 bg-accent-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex justify-between items-start relative z-10">
        <div className="p-2 rounded-xl bg-accent-main/10 text-accent-main transition-colors group-hover:bg-accent-main group-hover:text-white">
          <FileText size={24} />
        </div>

        <div className="opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-accent-main">
          <Download size={20} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-text-main font-bold transition-colors group-hover:text-accent-main">Curriculum Vitae</h3>

        <div className="relative h-4 overflow-hidden">
          <p className="text-text-muted text-xs font-medium absolute transition-all duration-300 group-hover:-translate-y-full">
            Ver Currículo (PDF)
          </p>
          <p className="text-accent-main text-xs font-bold absolute translate-y-full transition-all duration-300 group-hover:translate-y-0 uppercase tracking-wider">
            Abrir em nova aba
          </p>
        </div>
      </div>
    </motion.a>
  );
}