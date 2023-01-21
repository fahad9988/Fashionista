import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({children}) => {

const {pathname}=useLocation();
React.useEffect(()=>{
 window.scrollTo(0, 0);
},[pathname])

  return (
   children||null
  )
}

export default ScrollToTop