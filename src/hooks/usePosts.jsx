import {useMemo} from 'react';

export const useSortedPosts = (posts, selectedSort) => {
  const sortedPosts = useMemo(() => {
    if(!selectedSort) return posts;
    return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  }, [selectedSort, posts]);
  
  return sortedPosts;
}

export const usePosts = (posts, searchQuery, selectedSort) => {
  const sortedPosts = useSortedPosts(posts, selectedSort);

  const sortedAndFiltered = useMemo(() => {
    if(!searchQuery) return sortedPosts;
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [sortedPosts, searchQuery])

  return sortedAndFiltered;
}