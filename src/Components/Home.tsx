import { apps, projects, team } from "../constants";
import LinkBadge from "./LinkBadge";

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

export default function Home() {

  function Project({ project }: { project: ProjectProps }) {
    return (
      <div className="pb-6 mb-6 border-b border-theme-navy/20">
        <span className="inline-flex items-center justify-center">
          <a className="flex" href={project.url} target="_blank" rel="noopener noreferrer">
            <div className="mx-auto w-auto justify-center text-center ">
              <img className={'bg-white mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-theme-navy shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ' + project.imagePadding} src={project.imageSrc} alt={project.imageAlt} />
            </div>
            <div className="group">
              <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky font-semibold">{project.title}</p>
              <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{project.description}</p>
            </div>
          </a>
        </span>
        <p className="mt-6 text-md text-theme-navy group group-hover:text-theme-pan-sky pb-4">{project.detail}</p>
        {project.badges.map((badge: Badge) => (
          <LinkBadge key={badge.title} title={badge.title} url={badge.url} />
        ))}
      </div>
    );
  }

  function App({ app }: { app: AppProps }) {
    return (
      <div className="pb-6 mb-6 border-b border-theme-navy/20">
        <span className="inline-flex items-center justify-center">
          <a className="flex" href={app.url} target="_blank" rel="noopener noreferrer">
            <div className="mx-auto w-auto justify-center text-center ">
              <img className={'bg-white mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-theme-navy shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ' + app.imagePadding} src={app.imageSrc} alt={app.imageAlt} />
            </div>
            <div className="group">
              <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky font-semibold">{app.title}</p>
              <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{app.description}</p>
            </div>
          </a>
        </span>
      </div>
    );
  }

  function TeamMember({ member }: { member: TeamMemberProps }) {
    return (
      <div className="pb-4">
        <span className="inline-flex items-center justify-center">
          <a className="flex" href={member.url} target="_blank" rel="noopener noreferrer">
            <div className="mx-auto w-auto justify-center text-center ">
              <img className={' mx-auto translate-y-0.5 inline-flex h-16 w-16 justify-center rounded-md border border-theme-navy shadow-[3px_3px_0px_#040728] hover:grayscale sm:h-16 ' + member.imagePadding} src={member.imageSrc} alt={member.imageAlt} />
            </div>
            <div className="group">
              <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{member.name}</p>
              <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">{member.handle}</p>
            </div>
          </a>
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="pb-12 sm:pb-4">
        <div className="relative isolate lg:px-8">
          <div className="mx-auto max-w-3xl py-8 sm:py-16">
            <div className="rounded-md font-wigrum font-normal border bg-theme-oldlace border-theme-navy p-4 shadow-[3px_3px_0px_#040728] sm:p-8">
              <div className="mb-4 border-b pb-8 border-theme-navy">
                <img
                  className="block mb-3 sm:mb-0 sm:inline-flex h-16 sm:translate-y-2.5 w-auto justify-start rounded-md border border-theme-oldlace navy  shadow-[3px_3px_0px_#040728]  sm:h-16"
                  src={'./galleon.png'}
                  alt=""
                />
                <div className="inline-flex sm:ml-8 text-theme-navy text-left">
                  <div className="    font-morion font-bold tracking-wide">
                    <span className="text-lg">Galleon Labs</span>
                    <p className="  text-md  font-wigrum font-normal">
                      A crypto-native development studio. 
                      <a href="https://github.com/galleonlabs" target="_blank" className="">
                        <img
                          className="inline-flex ml-4 h-8 -translate-y-1 hover:bg-theme-champagne rounded-full"
                          src={'./github-mark.png'}
                          alt=""
                        />
                      </a>
                    </p>
                   
                  </div>
                </div>
              </div>

              <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Projects</h1>
              {projects.map((project: any) => (
                <Project key={project.title} project={project} />
              ))}

              <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Apps</h1>
              {apps.map((project: any) => (
                <App key={project.title} app={project} />
              ))}

              <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Team</h1>
              {team.map((member: any) => (
                <TeamMember key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}