import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = e => {
    setScroll(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scroll]);

  return scroll;
};

export default useScroll;
