import { useState, useCallback, useMemo } from 'react';

const usePagination = (items: any[], pageSize: number) => {
  const [page, setPage] = useState(1);

  // Calculate whether previous and next pages are available
  const isPrevPageAvailable = page > 1;
  const isNextPageAvailable = useMemo(() => page * pageSize < items.length, [page, pageSize, items]);

  // Calculate the slice of items for the current page
  const currentData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }, [page, pageSize, items]);

  const goToNextPage = useCallback(() => {
    if (isNextPageAvailable) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isNextPageAvailable]);

  const goToPrevPage = useCallback(() => {
    if (isPrevPageAvailable) {
      setPage((prevPage) => prevPage - 1);
    }
  }, [isPrevPageAvailable]);

  return {
    page,
    setPage,
    isNextPageAvailable,
    isPrevPageAvailable,
    goToNextPage,
    goToPrevPage,
    currentData, // Add currentData to the returned object
  };
};

export default usePagination;
