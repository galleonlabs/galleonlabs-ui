import { dao } from "../constants";
import LinkBadge from "./LinkBadge";



export default function DAO() {

  function Project({ project }: { project: any }) {
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
        <p className="mt-6 text-md text-theme-navy group group-hover:text-theme-pan-sky "></p>
        {project.badges.map((badge: any) => (
          <LinkBadge key={badge.title} title={badge.title} url={badge.url} />
        ))}
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
                  className="inline-flex h-16 translate-y-2.5 w-auto justify-start rounded-md border border-theme-oldlace navy  shadow-[3px_3px_0px_#040728]  sm:h-16"
                  src={'./galleon-logo.png'}
                  alt=""
                />
                <div className="inline-flex ml-8 text-theme-navy text-left">
                  <div className="    font-morion font-bold tracking-wide  ">
                    <span className="text-lg">Galleon DAO</span>
                    <p className="  text-md  font-wigrum font-normal   ">
                      The discontinued decentralised asset manager, governed by Doubloon.
                    </p>
                  </div>


                </div>
              </div>


              {/* Projects Section */}
              <h1 className="text-left text-lg font-bold text-theme-navy pb-4">Resource Archive</h1>
          
                {dao.map((project: any) => (
                  <Project key={project.title} project={project} />
                ))}
             
  

            </div>
          </div>
        </div>
      </div>
    </>
  )
}