import { motion } from "framer-motion";
import { ProjectCard } from "./components/ProjectCard";
import { SocialCard } from "./components/SocialCard";
import { StatusCard } from "./components/StatusCard";
import { TechStack } from "./components/TechStack";
import { ThemeToggle } from "./components/ThemeToggle";
import { Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from "./lib/framer";
import { CVCard } from "./components/CVCard";

export function App() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-app-bg text-text-main p-4 md:p-8"
    >
      <header className="max-w-6xl mx-auto flex justify-end mb-4">
        <ThemeToggle />
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-4">
        <motion.section
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 p-10 rounded-3xl bg-card-bg border border-border-main flex flex-col justify-center transition-[background-color,border-color] duration-700"
        >
          <Sparkles className="text-accent-main mb-6 opacity-80" size={32} />
          <h1 className="text-5xl font-bold mb-6 tracking-tighter text-text-main">
            Olá, sou Pedro.
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-[90%]">
            Full Stack Engineer focado em sistemas escaláveis.
          </p>
        </motion.section>

        <SocialCard platform="GitHub" href="https://github.com/pedrorfdev" />

        <StatusCard />

        <SocialCard
          platform="LinkedIn"
          href="https://linkedin.com/in/pedroff"
        />

        <CVCard />

        <TechStack />

        <ProjectCard
          title="OmniCommerce API"
          pitch="Engine de e-commerce robusta com foco em gestão de produtos e performance de catálogo."
          description="Desenvolvi uma infraestrutura de back-end escalável, priorizando a integridade dos dados e a rapidez nas consultas de inventário. Implementação de padrões de design para suportar grandes volumes de requisições."
          tags={["Node.js", "PostgreSQL", "REST API", "Docker"]}
          github="https://github.com/pedrorfdev/Omni-Commerce"
        />

        <ProjectCard
          title="Titan Core API"
          pitch="Sistema de alta disponibilidade, arquitetura modular preparada para escala e alta testabilidade."
          description="Backend desenvolvido com NestJS sob os princípios do SOLID. O foco foi criar uma aplicação de fácil manutenção e testabilidade, simulando um ambiente de produção corporativo de alto nível."
          tags={["NestJS", "TypeScript", "Jest", "Clean Architecture"]}
          github="https://github.com/pedrorfdev/Titan-Core-API"
        />

        <ProjectCard
          title="MoneyFlow"
          pitch="Aplicação de gestão financeira com persistência de dados e controle de transações."
          description="Uma ferramenta para controle de fluxo de caixa que utiliza gerenciamento de estado global para cálculos em tempo real. Implementei persistência de dados local para garantir que a experiência do usuário seja contínua e resiliente a recarregamentos."
          tags={[
            "React",
            "Styled Components",
            "Context API",
            "Local Storage Persistence",
          ]}
          link="https://flow-money-one.vercel.app/"
          github="https://github.com/pedrorfdev/Money-Flow"
        />

        <ProjectCard
          title="Modern Arq Portfolio"
          pitch="Plataforma institucional multi-página para arquitetura, com foco em navegação fluida e design minimalista."
          description="Desenvolvi uma experiência completa de navegação para escritórios de arquitetura. O projeto foca em arquitetura de informação e layouts responsivos complexos, garantindo uma presença digital sólida e elegante."
          tags={[
            "React",
            "Tailwind CSS",
            "Multi-page Navigation",
            "Performance",
          ]}
          link="https://modern-arq-portfolio.vercel.app"
          github="https://github.com/pedrorfdev/Modern-Arq-Portfolio"
        />

        <ProjectCard
          title="Bento Portfolio"
          pitch="Experiência imersiva em Bento Grid com animações coreografadas e Dark Mode."
          description="Meu cartão de visitas técnico. Utilizei as tecnologias mais recentes do ecossistema React para criar uma interface que equilibra estética, performance e acessibilidade."
          tags={["React", "Tailwind v4", "Framer Motion", "TypeScript"]}
          link="https://pedroferreira-dev.vercel.app/"
          github="https://github.com/pedrorfdev/Bento-Portfolio"
        />
      </main>

      <footer className="max-w-6xl mx-auto w-full mt-24 pb-16 flex flex-col md:flex-row items-center justify-between gap-4 px-4 border-t border-border-main/30 pt-8">
        <div className="flex items-center gap-2 text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse opacity-80" />
          <p className="text-[13px] font-light tracking-tight">
            &copy; {new Date().getFullYear()} Pedro Ferreira • Full Stack Engineer
          </p>
        </div>

        <div className="text-text-muted/60 italic text-[12px] font-light">
          Built with React, Framer Motion & Tailwind v4
        </div>
      </footer>
    </motion.div>
  );
}
