import React from 'react';
import { ArrowUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { LearnItem } from './LearnList.tsx';
import { classNames } from '../utils/index.tsx';

interface LearnEntryProps {
  item: LearnItem;
  onUpvote: (id: string, currentUpvotes: number, type: string) => void;
  isUpvoted: boolean;
}
export const ArticleItem: React.FC<LearnEntryProps> = ({ item, onUpvote, isUpvoted }) => {
  return (
    <article className="flex flex-col items-start  justify-between bg-gradient-to-r from-theme-champagne from-5% shadow-sm shadow-theme-pan-navy via-theme-oldlace to-95% to-theme-champagne rounded-lg ">
      <div className="relative w-full">
        <a href={item.affiliateLink || item.website} className='hover:opacity-80' target='_blank'>
          <img
            src={item.image}
            alt=""
            className="aspect-[16/9] w-full rounded-t-lg bg-theme-champagne object-cover sm:aspect-[2/1] lg:aspect-[4/2] grayscale-[50%]" />

          <div className="absolute inset-0 rounded-t-lg ring-1 ring-inset ring-theme-pan-navy/30" />   </a>
      </div>
      <div className="max-w-xl px-6 pb-6 group">
        <div className="mt-4 flex items-center gap-x-4 text-xs">

          <span

            className="relative z-10 rounded-lg  bg-theme-oldlace shadow-md shadow-theme-pan-oldlace px-3 py-2 h-9 font-medium text-sm text-theme-pan-navy    uppercase"
          >
            {item.level}
          </span>
          <button
            disabled={isUpvoted}
            className={
              classNames(isUpvoted ? 'hover:bg-theme-champagne bg-theme-champagne shadow-md border-0 shadow-theme-pan-oldlace' : 'hover:border-b-2   hover:bg-theme-oldlace shadow-md shadow-theme-pan-oldlace', 'group flex w-14 h-9 border-0      items-center justify-center rounded-lg text-sm font-medium text-theme-pan-navy ')
            }
            onClick={() => onUpvote(item.id, item.upvotes, item.category)}
          >
            {item.upvotes}
            <ArrowUpIcon className={
              classNames(isUpvoted ? 'hover:bg-theme-champagne bg-theme-champagne' : ' ', ' text-theme-pan-navy ml-1 w-3.5 h-3.5')
            }></ArrowUpIcon>
          </button>
        </div>
        <div className="group relative ">
          <h3 className="mt-3 text-md font-semibold leading-6 text-theme-pan-navy group-hover:text-theme-pan-sky">
            <a href={item.affiliateLink || item.website} target='_blank'>
              <span className="absolute inset-0" />
              {item.name}
            </a>
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-theme-pan-navy group-hover:text-theme-pan-sky">{item.description}</p>
        </div>
        <div className="relative mt-2 flex items-center gap-x-4 group-hover:text-theme-pan-sky">

          <div className="text-xs leading-6">
            <p className="font-semibold text-theme-pan-navy">
              <a href={item.affiliateLink || item.website} target='_blank'>
                <span className="absolute inset-0" />
                By {item.author}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export const PlatformItem: React.FC<LearnEntryProps> = ({ item, onUpvote, isUpvoted }) => {
  return (
    <li className="relative py-5 group">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-16 w-16 flex-none rounded-lg bg-theme-champagne border border-theme-pan-navy" src={item.image} alt="" />
            <div className="min-w-0 flex-auto pt-2">
              <a target='_blank' href={item.affiliateLink || item.website}>
                <p className="text-md font-semibold leading-6 text-theme-pan-navy group-hover:text-theme-pan-sky">


                  {item.name}

                </p>
                <p className="mt-1 flex text-sm leading-5 text-theme-pan-navy group-hover:text-theme-pan-sky">
                  <a className="relative truncate">
                    {item.description}
                  </a>
                </p>
              </a>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-x-4">
            <span

              className="relative z-10 rounded-lg  bg-theme-oldlace shadow-md shadow-theme-pan-oldlace px-3 py-2 h-9 font-medium text-sm text-theme-pan-navy    uppercase"
            >
              {item.cost}
            </span>

            <button
              disabled={isUpvoted}
              className={
                classNames(isUpvoted ? 'hover:bg-theme-champagne bg-theme-champagne shadow-md border-0 shadow-theme-pan-oldlace' : 'hover:border-b-2   hover:bg-theme-oldlace shadow-md shadow-theme-pan-oldlace', 'group flex w-14 h-10 border-0      items-center justify-center rounded-lg text-sm font-medium text-theme-pan-navy ')
              }
              onClick={() => onUpvote(item.id, item.upvotes, item.category)}
            >
              {item.upvotes}
              <ArrowUpIcon className='ml-1 w-3.5 h-3.5 text-theme-pan-navy'></ArrowUpIcon>
            </button>
            <a href={item.affiliateLink || item.website} target='_blank' className='flex shrink-0 items-center gap-x-2 ml-2'>
              <div className="hidden sm:flex sm:flex-col sm:items-end">



                <p className="mt-1 text-md pb-1.5 leading-5 text-theme-pan-navy group-hover:text-theme-pan-sky">
                  Explore
                </p>

              </div>
              <ChevronRightIcon className="h-5 w-5 flex-none text-theme-pan-navy group-hover:text-theme-pan-sky" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
