import ToolsList from './ToolsList'
import './TradingTools.css'

function TradingTools() {

  return (
    <>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-theme-champagne  bg-opacity-50  text-theme-pan-navy">

        <div className=" px-8 mt-8  text-theme-pan-navy">
          <h2 className="text-xl font-semibold text-theme-pan-navy mb-2">Crypto Trading Tools</h2>
          <p>
           Here you'll find an extensive collection of tools and platforms I use for both derivatives & on-chain trading. I use this page as a wayu to easily share and navigate between applications that I find provide value in crypto trading under the following categories.
          </p>
          <ul className=" list-inside mt-4">
            <li className="mb-2"><span className='font-bold'>Analytics:</span> Dive deep into data and make informed decisions.</li>
            <li className="mb-2"><span className='font-bold'>Charts:</span> Real-time and historic market data at your fingertips.</li>
            <li className="mb-2"><span className='font-bold'>Portfolio:</span> Manage and track your investments seamlessly.</li>
            <li className="mb-2"><span className='font-bold'>Explorer:</span> Browse blockchain transactions, addresses, and more.</li>
            <li className="mb-2"><span className='font-bold'>Discovery:</span> Stay updated with market trends and news.</li>
          </ul>
          <p className="mt-4">
            Feel free to upvote your favorite tools and platforms, its great to know what people find useful.
          </p>
        </div>

        <div>
          <ToolsList></ToolsList>
        </div>

      </div>

    </>
  )
}

export default TradingTools
