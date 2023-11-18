import { useEffect, useState } from 'react';
import { db } from '../main.tsx'; 
import { collection, query, getDocs } from 'firebase/firestore';

function Indicators() {

  const [indicators, setIndicators] = useState<any[]>([]);

  const fetchData = async () => {
    const sessionData = sessionStorage.getItem('indicatorData');
    if (sessionData) {
      const parsedData = JSON.parse(sessionData);
      setIndicators(parsedData);
    } else {
      const qIndicators = query(collection(db, 'indicators'));

      const indicatorDocs = await getDocs(qIndicators);

      const indicatorsData: any[] = indicatorDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));


      sessionStorage.setItem('indicatorData', JSON.stringify(indicatorsData));
      setIndicators(indicatorsData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-theme-champagne  bg-opacity-60  text-theme-pan-navy">

        <div className="container mx-auto p-4 mt-4">


          <h2 className="text-2xl mb-4 text-theme-pan-navy ">Indicators</h2>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {indicators.map((indi: any) => (
              <article className="flex flex-col items-start  justify-between bg-gradient-to-r from-theme-champagne from-5% shadow-sm shadow-theme-pan-navy via-theme-oldlace to-95% to-theme-champagne rounded-lg ">
                <div className="relative w-full">
                  <a href={indi.link} className='hover:opacity-80' target='_blank'>
                    <img
                      src={indi.image}
                      alt=""
                      className="aspect-[16/9] w-full rounded-t-lg bg-theme-champagne object-cover sm:aspect-[2/1] lg:aspect-[4/2] grayscale-[50%]" />

                    <div className="absolute inset-0 rounded-t-lg ring-1 ring-inset ring-theme-pan-navy/30" />   </a>
                </div>
                <div className="max-w-xl px-6 pb-6 group">
                  <div className="mt-4 flex items-center gap-x-4 text-xs">

                    <span

                      className="relative z-10 rounded-lg  bg-theme-oldlace shadow-md shadow-theme-pan-oldlace px-3 py-2 h-9 font-medium text-sm text-theme-pan-navy    uppercase"
                    >
                      {indi.cost}
                    </span>

                  </div>
                  <div className="group relative ">
                    <h3 className="mt-3 text-md font-semibold leading-6 text-theme-pan-navy group-hover:text-theme-pan-sky">
                      <a href={indi.link} target='_blank'>
                        <span className="absolute inset-0" />
                        {indi.name}
                      </a>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-theme-pan-navy group-hover:text-theme-pan-sky">{indi.description}</p>
                  </div>
                  <div className="relative mt-2 flex items-center gap-x-4 group-hover:text-theme-pan-sky">

                    <div className="text-xs leading-6">
                      <p className="font-semibold text-theme-pan-navy hover:text-theme-pan-sky">
                        <a href={'https://twitter.com/' + indi.author} target='_blank'>
                          <span className="absolute inset-0" />
                          By {indi.author}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </article>

            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default Indicators
