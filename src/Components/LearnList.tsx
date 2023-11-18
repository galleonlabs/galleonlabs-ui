import React, { useEffect, useState } from 'react';
import { analytics, db } from '../main.tsx'; // Assuming db is exported from main.tsx
import { collection, query, where, getDocs } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import usePagination from '../hooks/UsePagination.tsx';
import { PlatformItem, ArticleItem } from './LearnItems.tsx';
import { logEvent } from 'firebase/analytics';
const pageSize = 5;
const pageSizeArticles = 6

export type LearnItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  upvotes: number;
  affiliateLink?: string;
  website: string;
  level?: string;
  author?: string;
  category: string;
  cost: string;
};

const LearnList: React.FC = () => {
  const [platforms, setPlatforms] = useState<LearnItem[]>([]);
  const [articles, setArticles] = useState<LearnItem[]>([]);
  const { isNextPageAvailable: isNextPlatformPageAvailable, isPrevPageAvailable: isPrevPlatformPageAvailable, goToNextPage: goToNextPlatformPage, goToPrevPage: goToPrevPlatformPage, currentData: paginatedPlatforms } = usePagination(platforms, pageSize);
  const { isNextPageAvailable: isNextArticlePageAvailable, isPrevPageAvailable: isPrevArticlePageAvailable, goToNextPage: goToNextArticlePage, goToPrevPage: goToPrevArticlePage, currentData: paginatedArticles } = usePagination(articles, pageSizeArticles);
  const [upvotedItems, setUpvotedItems] = useState<string[]>(() => {
    return JSON.parse(sessionStorage.getItem('upvotedItems') || '[]');
  });

  const fetchData = async () => {
    const sessionData = sessionStorage.getItem('learnData');
    if (sessionData) {
      const parsedData = JSON.parse(sessionData);
      setPlatforms(parsedData.platforms);
      setArticles(parsedData.articles);
    } else {
      const qPlatforms = query(collection(db, 'learn'), where('category', '==', 'platform'));
      const qArticles = query(collection(db, 'learn'), where('category', '==', 'article'));
      const platformDocs = await getDocs(qPlatforms);
      const articleDocs = await getDocs(qArticles);
      const platformsData: any[] = platformDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const articlesData: any[] = articleDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      platformsData.sort((a, b) => b.upvotes - a.upvotes);
      articlesData.sort((a, b) => b.upvotes - a.upvotes);
      sessionStorage.setItem('learnData', JSON.stringify({ platforms: platformsData, articles: articlesData }));
      setPlatforms(platformsData);
      setArticles(articlesData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleUpvote = async (id: string, currentUpvotes: number, type: string) => {
    if (!upvotedItems.includes(id)) {
      const newUpvotes = currentUpvotes + 1;
      const itemRef = doc(db, 'learn', id);
      await updateDoc(itemRef, { upvotes: newUpvotes });
      logEvent(analytics, 'upvote_item', { id: id, type: type });
      // Update the local state
      const updateLocalState = (arr: any[]) => {
        return arr.map((item) => {
          if (item.id === id) {
            return { ...item, upvotes: newUpvotes };
          }
          return item;
        });
      };

      setPlatforms(updateLocalState(platforms));
      setArticles(updateLocalState(articles));
      sessionStorage.setItem('learnData', JSON.stringify({ platforms: updateLocalState(platforms), articles: updateLocalState(articles) }));

      // Update the upvoted items in the state and sessionStorage
      const updatedUpvotedItems = [...upvotedItems, id];
      setUpvotedItems(updatedUpvotedItems);
      sessionStorage.setItem('upvotedItems', JSON.stringify(updatedUpvotedItems));
    }
  };

  return (
    <div className="container mx-auto p-4 mt-4">
      <h2 className="text-2xl  mb-4 text-theme-pan-navy">Platforms</h2>
      <ul role="list" className="divide-y divide-theme-pan-navy mt-8 shadow-sm shadow-theme-pan-navy  rounded-lg bg-gradient-to-r from-theme-oldlace via-theme-oldlace to-90% to-theme-champagne ">
        {paginatedPlatforms.map((post: any) => (


          <PlatformItem
            key={post.id}
            item={post}
            onUpvote={handleUpvote}
            isUpvoted={upvotedItems.includes(post.id)}
          />


        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          disabled={!isPrevPlatformPageAvailable}
          onClick={() => goToPrevPlatformPage()}
          className="py-2 px-4 rounded-lg border border-theme-pan-navy text-theme-pan-navy disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={!isNextPlatformPageAvailable}
          onClick={() => goToNextPlatformPage()}
          className="py-2 px-4 rounded-lg border border-theme-pan-navy text-theme-pan-navy disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <h2 className="text-2xl mb-4 text-theme-pan-navy mt-8">Articles</h2>
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {paginatedArticles.map((post: any) => (
          <ArticleItem
            key={post.id}
            item={post}
            onUpvote={handleUpvote}
            isUpvoted={upvotedItems.includes(post.id)}
          />

        ))}

      </div>
      <div className="flex justify-between mt-4">
        <button
          disabled={!isPrevArticlePageAvailable}
          onClick={() => goToPrevArticlePage()}
          className="py-2 px-4 rounded-lg border border-theme-pan-navy text-theme-pan-navy disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={!isNextArticlePageAvailable}
          onClick={() => goToNextArticlePage()}
          className="py-2 px-4 rounded-lg border border-theme-pan-navy text-theme-pan-navy disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LearnList;
