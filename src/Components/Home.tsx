import LinkBadge from "./LinkBadge";

export default function Home() {

  return (
    <>
      <div className="pb-12 sm:pb-4 ">


        <div className="relative isolate  lg:px-8 ">
          <div className="mx-auto max-w-2xl py-8 sm:py-32 ">
            <div className="rounded-md font-wigrum font-normal  border bg-theme-oldlace border-theme-navy p-4 shadow-[3px_3px_0px_#040728] sm:p-8">


              <div className="mb-4 border-b pb-8 border-theme-navy">

                <img
                  className="inline-flex h-16 translate-y-2.5 w-auto justify-start rounded-md border border-theme-oldlace navy  shadow-[3px_3px_0px_#040728]  sm:h-16"
                  src={'./galleon.png'}
                  alt=""
                />
                <div className="inline-flex ml-8 text-theme-navy text-left">
                  <div className="    font-morion font-bold tracking-wide  ">
                    <span className="text-lg">Galleon Labs</span>
                    <p className="  text-md  font-wigrum font-normal   ">
                      A crypto-native development studio.
                    </p>
                  </div>


                </div>
              </div>

              <div className="pt-2">
                <h1 className="text-left text-lg font-bold text-theme-navy ">
                  <span className="block pb-4">Projects</span>
                </h1>
                <div>
                  <span className="inline-flex items-center justify-center">
                    <a className="flex" href="https://twitter.com/andrew_eth" target="_blank">
                      <div className="mx-auto w-auto justify-center text-center ">

                        <img
                          className="mx-auto translate-y-0.5 inline-flex  h-16 w-auto justify-center rounded-md border border-theme-navy text-center shadow-[3px_3px_0px_#040728]   hover:grayscale sm:h-16"
                          src={'./galleon-logo.png'}
                          alt=""
                        />
                      </div>
                      <div className="group">
                        <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">Galleon DAO</p>
                        <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">Ex-core development team</p>
                      </div>
                    </a>
                  </span>
                  <p className="mt-6 text-md text-theme-navy  group group-hover:text-theme-pan-sky pb-4">We served as the primary core development team to the VC-funded decentralised organisation, Galleon, with the mission to become the leading on-chain structured products provider. The DAO has since ran out of runway was discontinued after 1.5 years of development and multiple innovative product launches on Ethereum.</p>

                  <LinkBadge title={'Github'} url={'https://github.com/GalleonDAO'}></LinkBadge>
                </div>


              </div>




              <div className="pt-6">
                <h1 className="text-left text-lg  text-theme-navy ">
                  <span className="block pb-4 font-bold">Team</span>
                </h1>
                <div>
                  <span className="inline-flex items-center justify-center">
                    <a className="flex" href="https://twitter.com/andrew_eth" target="_blank">
                      <div className="mx-auto w-auto justify-center text-center ">

                        <img
                          className="mx-auto translate-y-0.5 inline-flex  h-16 w-auto justify-center rounded-md border border-theme-navy text-center shadow-[3px_3px_0px_#040728]   hover:grayscale sm:h-16"
                          src={'./davyjones.png'}
                          alt=""
                        />
                      </div>
                      <div className="group">
                        <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">Andrew // Davy Jones</p>
                        <p className="mt-1 text-md text-theme-navy pl-6 group group-hover:text-theme-pan-sky">@andrew_eth</p>
                      </div>
                    </a>
                  </span>

                </div>


              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}