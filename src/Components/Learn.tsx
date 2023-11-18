import './Learn.css'
import LearnList from './LearnList'

function Learn() {

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-theme-champagne  bg-opacity-60  text-theme-pan-navy">

        <div className=" px-8 pt-8  text-theme-pan-navy">
          <h2 className="text-xl font-semibold text-theme-pan-navy mb-2">Crypto Learning Resources</h2>
          <p>
           Here you'll find hand picked resources that I have come across that I feel provide quality education on the topic. I've split them into two categories and will add new material as I come across and review it myself.
          </p>
          <ul className=" list-inside mt-4">
            <li className="mb-2"><span className='font-bold'>Platforms:</span> Education hubs that provide a rich quantity of learning materials around trading.</li>
            <li className="mb-2"><span className='font-bold'>Articles:</span> Single topic resources that I have read and feel provide a high quality dive into a particular topic..</li>

          </ul>
          <p className="mt-4">
            None of the below is sponsored or an advertisement but please upvote any that you have found value from.
          </p>
        </div>

        <LearnList />
      </div>
    </>
  )
}

export default Learn
