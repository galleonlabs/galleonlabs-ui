
import { Outlet } from "react-router-dom";
import './Layout.css'

export default function Layout() {
  return (
    <>
      <div className="min-h-full bg-[url('./assets/Frame.png')] font-morion font-bold bg-contain bg-repeat bg-top">
        <div className="py-10 sm:py-0 ">
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 "><Outlet></Outlet></div>
          </main>
        </div>
      </div>
    </>
  )
}
