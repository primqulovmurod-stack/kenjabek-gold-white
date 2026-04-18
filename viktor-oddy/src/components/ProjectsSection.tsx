import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    id: "evr",
    title: "evr",
    description: "From idea to millions raised for a web3 AI product",
    image: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
  },
  {
    id: "automation",
    title: "Automation Machines",
    description: "Streamlining industrial automation processes",
    image: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif"
  },
  {
    id: "portfolio",
    title: "xPortfolio",
    description: "Modern portfolio management platform",
    image: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
  }
];

const ProjectItem: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div 
      ref={ref as any}
      className={`flex flex-col gap-8 transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="ml-20 md:ml-28">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#051A24] font-mondwest italic mb-2">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70">
          {project.description}
        </p>
      </div>
      <div className="w-full rounded-2xl overflow-hidden shadow-lg aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-16 md:gap-20">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
