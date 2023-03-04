import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ScrollButton = () => {
    const [showButton,setShowButton] = useState(true)

    useEffect(()=>{
        const handleScrollButtonVisibility = ()=>{
          window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
    
        }
    
        window.addEventListener('scroll',handleScrollButtonVisibility)
        return ()=>{
          window.removeEventListener('scroll',handleScrollButtonVisibility)
        }
      },[])

      const handleScrollToTop = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
      }

  return (
    <Box w={"40px"} >
        {
                     showButton && (
                      <div className={`scrollToTop`} style={{w:"20%"}} >
                           <button className="fixed bottom-5 right-7 z-50 cursor-pointer p-4"
                             onClick={handleScrollToTop}
                             >
                              <img 
                               style={{width:"40px"}}
                               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUjFJuqWnp8p64p5ffPftE2KgOIiH7UeA8YORv0gk8sVZyCCPPLtGCJa_0w5K3XBmFFM&usqp=CAU" alt="scrollToTop"/>

                           </button>
                      </div>
                     )
                  }
    </Box>
  )
}

export default ScrollButton