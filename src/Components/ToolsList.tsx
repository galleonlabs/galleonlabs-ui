import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db, analytics } from '../main.tsx';
import './ToolsList.css'
import { logEvent } from "firebase/analytics";
import { ArrowUpIcon, HeartIcon } from '@heroicons/react/24/outline';
import xIcon from '../assets/x.jpg'
import { classNames } from '../utils/index.tsx';


const ToolsList: React.FC = () => {
  const [tools, setTools] = useState<any[]>([]);
  const [groupedTools, setGroupedTools] = useState<Record<string, any[]>>({});
  const upvotedTools = JSON.parse(localStorage.getItem('upvotedTools') || '[]');

  useEffect(() => {
    logEvent(analytics, 'page_view', { page_path: '/trading-tools' });

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'tools'));
      const toolsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTools(toolsArray);

      // Group tools by category
      const grouped: Record<string, any[]> = {};
      toolsArray.forEach((tool: any) => {
        const category = tool.category || 'Uncategorized';
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(tool);
        grouped[category].sort((a, b) => b.upvotes - a.upvotes);
      });
      setGroupedTools(grouped);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      // Group tools by category
      const grouped: Record<string, any[]> = {};
      tools.forEach((tool: any) => {
        const { category = 'Uncategorized' } = tool;
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(tool);
        grouped[category].sort((a, b) => b.upvotes - a.upvotes);
      });
      setGroupedTools(grouped);
    };

    fetchData();
  }, [tools]);


  const handleToolClick = (toolName: string) => {
    logEvent(analytics, 'select_tool', { name: toolName });
  };

  const handleUpvote = async (id: string, currentUpvotes: number) => {
    if (upvotedTools.includes(id)) {
      alert('You have already upvoted this tool.');
      return;
    }

    const toolRef = doc(db, 'tools', id);
    await updateDoc(toolRef, { upvotes: currentUpvotes + 1 });
    const toolDoc = await getDoc(toolRef);
    const updatedTool = { id: toolDoc.id, ...toolDoc.data() };

    setTools(prevTools =>
      prevTools.map(tool => tool.id === id ? updatedTool : tool)
    );

    upvotedTools.push(id);
    localStorage.setItem('upvotedTools', JSON.stringify(upvotedTools));

    const toolName = tools.find(tool => tool.id === id)?.name;
    if (toolName) {
      logEvent(analytics, 'upvote_tool', { name: toolName });
    }
  };

  return (
    <div className="   text-theme-pan-navy p-8">

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          className="relative flex sm:mb-6 items-center space-x-3 rounded-lg shadow-sm shadow-theme-pan-navy  bg-gradient-to-r from-theme-oldlace via-theme-oldlace to-90% to-theme-champagne px-6 py-3 group  focus-within:ring-2 focus-within:ring-theme-theme-pan-navy focus-within:ring-offset-2   hover:border-theme-pan-sky hover:shadow-sm hover:shadow-theme-pan-navy "
        >
          <div className="flex-shrink-0 mr-4">
            <img className="h-12 w-12 p-1 grayscale-[20%] overflow-hidden rounded-lg border bg-white border-theme-pan-navy" src={'/usa.png'} alt={'usa logo'} />
          </div>
          <div className="min-w-0 flex-1">
            <a href={'https://ultrasoundapps.com/?utm_source=davyjonesxbt'} target="_blank" rel="noopener noreferrer" className="focus:outline-none" onClick={() => handleToolClick('ultrasoundapps')}>
              <p className="text-md font-medium text-theme-pan-navy  group-hover:text-theme-pan-sky">Ultra Sound Apps</p>
              <p className="truncate text-sm text-theme-pan-navy  group-hover:text-theme-pan-sky">Create your own browser homepage of crypto apps.</p>

            </a>
          </div>


        </div>

        <div
          className="relative flex mb-6 items-center space-x-3 rounded-lg shadow-sm shadow-theme-pan-navy  bg-gradient-to-r from-theme-oldlace via-theme-oldlace to-90% to-theme-champagne px-6 py-3 group  focus-within:ring-2 focus-within:ring-theme-theme-pan-navy focus-within:ring-offset-2   hover:border-theme-pan-sky hover:shadow-sm hover:shadow-theme-pan-navy "
        >
          <div className="flex-shrink-0 mr-4">
            <img className="h-12 w-12  grayscale-[20%] overflow-hidden rounded-lg border bg-white border-theme-pan-navy" src={'https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg'} alt={'usa logo'} />
          </div>
          <div className="min-w-0 flex-1">
            <a href={'https://twitter.com'} target="_blank" rel="noopener noreferrer" className="focus:outline-none" onClick={() => handleToolClick('twitter')}>
              <p className="text-md font-medium text-theme-pan-navy  group-hover:text-theme-pan-sky">Twitter (X)</p>
              <p className="truncate text-sm text-theme-pan-navy  group-hover:text-theme-pan-sky">The gateway to the crypto community.</p>

            </a>
          </div>


        </div>

      </div>
      {Object.keys(groupedTools).map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl mb-4">{category}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {groupedTools[category].map(({ id, name, description, logo, affiliateLink, website, upvotes, socialLink, endorsed }) => (
              <div
                key={id}
                className="relative flex items-center space-x-3 rounded-lg shadow-sm shadow-theme-pan-navy  bg-gradient-to-r from-theme-oldlace via-theme-oldlace to-90% to-theme-champagne px-6 py-3 group  focus-within:ring-2 focus-within:ring-theme-theme-pan-navy focus-within:ring-offset-2   hover:border-theme-pan-sky hover:shadow-sm hover:shadow-theme-pan-navy"
              >
                <div className="flex-shrink-0 mr-4">
                  <img className="h-12 w-12 grayscale-[20%] overflow-hidden rounded-lg border border-theme-pan-navy" src={logo} alt={name} />
                </div>
                <div className="min-w-0 flex-1">
                  <a href={affiliateLink || website} target="_blank" rel="noopener noreferrer" className="focus:outline-none" onClick={() => handleToolClick(name)}>
                    <p className="text-md font-medium text-theme-pan-navy  group-hover:text-theme-pan-sky">{name}</p>
                    <p className="truncate text-sm text-theme-pan-navy  group-hover:text-theme-pan-sky">{description}</p>

                  </a>
                </div>

                {endorsed && (
                  <span className="  has-tooltip hidden sm:inline-flex">
                    <span className='tooltip rounded-lg py-1 px-2 text-sy bg-theme-oldlace text-theme-pan-navy -mt-10 '><HeartIcon className='w-4 h-4'></HeartIcon></span>
                    <img src={'./davyjones.png'} className="h-6 w-6 text-theme-pan-navy rounded-lg y grayscale-[40%] shadow-md shadow-theme-champagne " />
                  </span>
                )}

                {socialLink && (
                  <a href={socialLink} target="_blank" rel="noopener noreferrer" className=" hidden sm:inline-flex">
                    <img src={xIcon} className="h-6 w-6 text-theme-pan-navy rounded-lg shadow-sm shadow-theme-champagne opacity-85 grayscale-[40%] " />
                  </a>
                )}




                <button
                  disabled={upvotedTools.includes(id)}
                  className={
                    classNames(upvotedTools.includes(id) ? 'hover:bg-theme-champagne bg-theme-champagne shadow-md border-0 shadow-theme-pan-oldlace' : 'hover:border-b-2   hover:bg-theme-oldlace shadow-md shadow-theme-pan-oldlace', 'group flex w-14 h-10 border-0      items-center justify-center rounded-lg text-sm font-medium text-theme-pan-navy ')
                  }
                  onClick={() => handleUpvote(id, upvotes)}
                >
                  {upvotes}
                  <ArrowUpIcon
                    className={
                      classNames(upvotedTools.includes(id) ? 'hover:bg-theme-champagne bg-theme-champagne' : ' ', ' text-theme-pan-navy ml-1 w-3.5 h-3.5')
                    }
                  ></ArrowUpIcon>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsList;
