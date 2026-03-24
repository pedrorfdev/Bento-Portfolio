import { Layout, Server, Wrench } from "lucide-react";
import { motion } from 'framer-motion'
import { itemVariants } from "../lib/framer";

export function TechStack() {
  return (
    <motion.section variants={itemVariants} className="md:col-span-2 p-8 rounded-3xl bg-card-bg border border-border-main transition-[background-color,border-color] duration-700">
      <h3 className="text-xl font-bold mb-6">Ecossistema Técnico</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent-main mb-3 flex items-center">
            <Layout className="mr-2" />
            Interface
          </h4>
          <ul className="text-sm space-y-2 text-text-muted">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind v4</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent-main mb-3 flex items-center">
            <Server className="mr-2" />
            Sistemas
          </h4>
          <ul className="text-sm space-y-2 text-text-muted">
            <li>Node.js & NestJs</li>
            <li>PostgreSQL / NoSQL</li>
            <li>Arquitetura de APIs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent-main mb-3 flex items-center">
            <Wrench className="mr-2" />
            Ferramentas
          </h4>
          <ul className="text-sm space-y-2 text-text-muted">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>IA-Driven Dev</li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}