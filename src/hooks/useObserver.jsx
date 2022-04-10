import {useEffect, useRef} from 'react';

export const useObserver = (ref, canLoad, isLoading, cb) => {
  const observer = useRef();
  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect();
    const callback = (entries, observer) => {
      if(entries[0].isIntersecting && canLoad) {
        cb();
      }
    };
    observer.current = new IntersectionObserver(callback);
    if(!ref.current) return;
    observer.current.observe(ref.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])
}