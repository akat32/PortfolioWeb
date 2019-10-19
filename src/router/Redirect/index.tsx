import React, { useEffect } from 'react'

export const RedirectLink = () => {
    useEffect( () => {
        setTimeout(function() {
            window.location.href = '/'
        }, 1500);
      
    }, [])
    return <></>
} 