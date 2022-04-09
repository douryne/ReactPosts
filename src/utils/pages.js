export const getPageCount = (totalPostsCount, postsLimit) => {
  return Math.ceil(totalPostsCount/postsLimit);
}