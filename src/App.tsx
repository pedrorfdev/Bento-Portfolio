import { motion } from 'framer-motion'
import { ProjectCard } from "./components/ProjectCard";
import { SocialCard } from "./components/SocialCard";
import { StatusCard } from "./components/StatusCard";
import { TechStack } from "./components/TechStack";
import { ThemeToggle } from "./components/ThemeToggle";
import { Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from './lib/framer';
import { CVCard } from './components/CVCard';

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
          <h1 className="text-5xl font-bold mb-6 tracking-tighter text-text-main">Olá, sou Pedro.</h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-[90%]">
            Software Engineer com visão de produto. Transformo códigos em soluções estratégicas que geram valor real.
          </p>
        </motion.section>

        <SocialCard platform="GitHub" href="https://github.com/pedrorfdev" />

        <StatusCard />

        <SocialCard platform="LinkedIn" href="https://linkedin.com/in/pedroff" />

        <CVCard />

        <TechStack />

        <ProjectCard
          title="OmniCommerce API"
          pitch="Engine de e-commerce robusta com foco em gestão de produtos e performance de catálogo."
          description="Desenvolvi uma infraestrutura de back-end escalável, priorizando a integridade dos dados e a rapidez nas consultas de inventário. Implementação de padrões de design para suportar grandes volumes de requisições."
          tags={['Node.js', 'PostgreSQL', 'REST API', 'Docker']}
          github="https://github.com"
        />

        <ProjectCard
          title="Titan Core API"
          pitch="Sistema de alta disponibilidade com arquitetura modular e Injeção de Dependência."
          description="Backend desenvolvido com NestJS sob os princípios do SOLID. O foco foi criar uma aplicação de fácil manutenção e testabilidade, simulando um ambiente de produção corporativo de alto nível."
          tags={['NestJS', 'TypeScript', 'Jest', 'Clean Architecture']}
          github="https://github.com"
        />

        <ProjectCard
          title="MoneyFlow"
          pitch="Aplicação de gestão financeira com persistência de dados e controle de transações."
          description="Uma ferramenta para controle de fluxo de caixa que utiliza gerenciamento de estado global para cálculos em tempo real. Implementei persistência de dados local para garantir que a experiência do usuário seja contínua e resiliente a recarregamentos."
          tags={['React', 'Styled Components', 'Context API', 'Local Storage Persistence']}
          link="https://demo2.com"
          github="https://github.com"
        />

        <ProjectCard
          title="Modern Arq Portfolio"
          pitch="Plataforma institucional multi-página para arquitetura, com foco em navegação fluida e design minimalista."
          description="Desenvolvi uma experiência completa de navegação para escritórios de arquitetura. O projeto foca em arquitetura de informação e layouts responsivos complexos, garantindo uma presença digital sólida e elegante."
          tags={['React', 'Tailwind CSS', 'Multi-page Navigation', 'Performance']}
          link="https://demo2.com"
          github="https://github.com"
        />

        <ProjectCard
          title="Bento Portfolio v2"
          pitch="Experiência imersiva em Bento Grid com animações coreografadas e Dark Mode."
          description="Meu cartão de visitas técnico. Utilizei as tecnologias mais recentes do ecossistema React para criar uma interface que equilibra estética, performance e acessibilidade."
          tags={['React', 'Tailwind v4', 'Framer Motion', 'TypeScript']}
          link="https://demo2.com"
          github="https://github.com"
        />

      </main>
    </motion.div>
  )
}
