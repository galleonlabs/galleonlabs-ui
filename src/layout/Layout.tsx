
import { Outlet } from "react-router-dom";
import './Layout.css'
// import { classNames } from '../utils';

// const navigation = [
//   { name: 'Main Deck', href: '' },
//   { name: 'Galleon DAO', href: 'galleon-dao' },
// ]


export default function Layout() {
  return (
    <>
      <div className="min-h-full bg-[url('./assets/Frame.png')] font-morion font-bold bg-contain bg-repeat bg-top">
        {/* <nav className="bg-theme-oldlace shadow-[3px_3px_0px_#040728]  ">
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
              <div className="flex h-16 justify-between">
                <div className="flex ">
                
                  <div className=" -my-px ml-6 flex space-x-4">
                    {navigation.map((item) => (

                      <NavLink key={item.name} to={item.href} className={classNames(

                        'border-transparent text-theme-pan-navy tracking-wide hover:text-theme-pan-sky hover:border-theme-pan-sky ',
                        'inline-flex items-center border-b px-1 pt-1 text-lg '
                      )}
                      >                          {item.name}</NavLink>


                    ))}



                  </div>

                </div>

              </div>
            </div>

           
          </>

        </nav> */}

        <div className="py-10 sm:py-0 ">
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 "><Outlet></Outlet></div>
          </main>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </>
  )
}
