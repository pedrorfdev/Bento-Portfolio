import { motion } from 'framer-motion'
import { itemVariants } from '../lib/framer'

interface ProjectProps {
  title: string
  pitch: string
  description: string
  tags: string[]
  link?: string
  github: string
}

export function ProjectCard({ title, pitch, description, tags, link, github }: ProjectProps) {
  return (
    <motion.section
      variants={itemVariants}
      whileHover={{
        y: -8,
        scale: 1.01,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group md:col-span-2 p-6 rounded-3xl bg-card-bg flex flex-col justify-between overflow-hidden relative border border-border-main hover:border-accent-main/50 hover:shadow-[0_0_20px_-5px_var(--color-accent-main)] transition-[background-color,border-color,shadow] duration-500"
    >
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-main opacity-0 blur-[80px] group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>

        <div className="relative min-h-[65px] mb-6">
          <p className="text-text-muted leading-relaxed text-balance absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
            {pitch}
          </p>

          <p className="text-accent-main text-base font-medium leading-relaxed text-balance opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-border-main/50 text-[10px] uppercase tracking-wider font-bold text-text-muted">
              {tag}
            </span>
          ))}
        </div>

        

        <div className="flex gap-4">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-main hover:underline flex items-center gap-1"
            >
              Explorar Solução ↗
            </a>
          ) : (
            /* Caso seja Back-end e não tenha link de deploy */
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-main/5 border border-accent-main/20 text-[10px] font-bold text-accent-main uppercase tracking-widest">
              <span className="relative flex h-1.5 w-1.5">
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-main"></span>
              </span>
              Production Ready API
            </div>
          )}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-muted hover:text-text-main transition-colors flex items-center gap-1"
          >
            {link ? "Ver Código" : "Acessar Repositório ↗"}
          </a>
        </div>
      </div>
    </motion.section>
  )
}