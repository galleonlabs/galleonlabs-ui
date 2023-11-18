const navigation = {
  main: [
    { name: 'Trading Tools', href: '' },
    { name: 'Learn', href: '/learn' },
    { name: 'Indicators', href: '/indicators' },
  ],
  social: [

    {
      name: 'Twitter',
      href: 'https://twitter.com/davyjonesxbt',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },

  ],
}

const external = [
  { name: 'Aevo', href: 'https://app.aevo.xyz/r/Bubbly-Tangy-Nash ' },
  { name: 'dYdX', href: 'https://dydx.exchange/r/VPOHUBVP' },

]


export default function Footer() {
  return (
    <footer className="bg-theme-champagne bg-opacity-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="sm:-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-theme-pan-navy hover:text-theme-pan-sky ">
                {item.name}
              </a>
            </div>
          ))}
          
      

        </nav>

        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        

          <span className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 border-t border-theme-pan-navy pt-3 mt-3">
            {external.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} target="_blank" className="text-sm leading-6 text-theme-pan-navy hover:text-theme-pan-sky ">
                  {item.name}
                </a>
              </div>
            ))}


          </span>

        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-theme-pan-navy hover:text-theme-pan-sky ">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
