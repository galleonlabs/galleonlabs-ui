import React from "react";
import { projects, apps, team } from "../constants";

// Interfaces
export interface Badge {
  title: string;
  url: string;
}

export interface ProjectProps {
  title: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  detail: string;
  badges: Badge[];
  imagePadding?: string;
}

export interface AppProps {
  title: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  imagePadding?: string;
}

export interface TeamMemberProps {
  name: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  handle?: string;
  imagePadding?: string;
}

// Components
const Project: React.FC<{ project: ProjectProps }> = ({ project }) => (
  <div className="pb-6 mb-6 border-b border-theme-navy/20">
    <span className="inline-flex items-center justify-center">
      <a className="flex" href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="mx-auto w-auto justify-center text-center ">
          <img
            className={`bg-white mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-theme-navy shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ${project.imagePadding}`}
            src={project.imageSrc}
            alt={project.imageAlt}
          />
        </div>
        <div className="group">
          <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky font-semibold">
            {project.title}
          </p>
          <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">
            {project.description}
          </p>
        </div>
      </a>
    </span>
  </div>
);

const App: React.FC<{ app: AppProps }> = ({ app }) => (
  <div className="pb-6 mb-6 border-b border-theme-navy/20">
    <span className="inline-flex items-center justify-center">
      <a className="flex" href={app.url} target="_blank" rel="noopener noreferrer">
        <div className="mx-auto w-auto justify-center text-center ">
          <img
            className={`bg-white mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-theme-navy shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ${app.imagePadding}`}
            src={app.imageSrc}
            alt={app.imageAlt}
          />
        </div>
        <div className="group">
          <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky font-semibold">
            {app.title}
          </p>
          <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{app.description}</p>
        </div>
      </a>
    </span>
  </div>
);

const TeamMember: React.FC<{ member: TeamMemberProps }> = ({ member }) => (
  <div className="pb-4">
    <span className="inline-flex items-center justify-center">
      <a className="flex" href={member.url} target="_blank" rel="noopener noreferrer">
        <div className="mx-auto w-auto justify-center text-center ">
          <img
            className={`mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-theme-navy shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ${member.imagePadding}`}
            src={member.imageSrc}
            alt={member.imageAlt}
          />
        </div>
        <div className="group">
          <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{member.name}</p>
          <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{member.handle}</p>
        </div>
      </a>
    </span>
  </div>
);

// Main component
const Home: React.FC = () => {
  return (
    <div className="pb-12 sm:pb-4">
      <div className="relative isolate lg:px-8">
        <div className="mx-auto max-w-3xl py-8 sm:py-16">
          <div className="rounded-md font-wigrum font-normal border bg-theme-oldlace border-theme-navy p-4 shadow-[3px_3px_0px_#040728] sm:p-8">
            <Header />
            <ProjectsSection />
            <AppsSection />
            <TeamSection />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const Header: React.FC = () => (
  <div className="mb-4 border-b pb-8 border-theme-navy">
    <img
      className="block mb-3 sm:mb-0 sm:inline-flex h-16 sm:translate-y-2.5 w-auto justify-start rounded-md border border-theme-oldlace navy shadow-[3px_3px_0px_#040728] sm:h-16"
      src={"./galleon.png"}
      alt=""
    />
    <div className="inline-flex sm:ml-8 text-theme-navy text-left">
      <div className="font-morion font-bold tracking-wide">
        <span className="text-lg">Galleon Labs</span>
        <p className="text-md font-wigrum font-normal">
          A crypto-native development studio.
          <a href="https://github.com/galleonlabs" target="_blank" rel="noopener noreferrer" className="">
            <img
              className="inline-flex ml-4 h-8 -translate-y-1 hover:bg-theme-champagne rounded-full"
              src={"./github-mark.png"}
              alt="GitHub"
            />
          </a>
        </p>
      </div>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => (
  <>
    <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Projects</h1>
    {projects.map((project: ProjectProps) => (
      <Project key={project.title} project={project} />
    ))}
  </>
);

const AppsSection: React.FC = () => (
  <>
    <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Apps</h1>
    {apps.map((app: AppProps) => (
      <App key={app.title} app={app} />
    ))}
  </>
);

const TeamSection: React.FC = () => (
  <>
    <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Team</h1>
    {team.map((member: TeamMemberProps) => (
      <TeamMember key={member.name} member={member} />
    ))}
  </>
);

export default Home;
