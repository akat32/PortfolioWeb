import React, { useEffect, useContext } from 'react'

import './style.scss'
import { SelectorConsumer, SelectorProvider } from '../../../context/ProjectSelector/Selector'

import { ProjectData } from '../../../context/ProjectData'

export const ProjectSelector = () => {
    useEffect( () => {
        console.log(ProjectData)
    }, [])
    return (
        <>
            asd
        </>
    )
} 