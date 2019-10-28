import React, { useEffect, useState, useMemo, useContext } from 'react'

import './style.scss'
import { ProjectData } from '../../../context/ProjectData'


import { useProjectState } from '../../../context/ProjectContext'
import { useDeviceState } from '../../../context/DeviceContext'

let designPage = 1
export const View = () => {
    return (
        <div className = "projectView">
            <div className = "contant">
                <DeviceView/>
            </div>
        </div>
    )
}

const DeviceView = () => {
    let device = useDeviceState().device
    let number = useProjectState().number
    const [ info, setInfo ] = useState(ProjectData[number])
    useMemo( () => {
        setInfo(ProjectData[number])
        designPage = 1
    }, [useProjectState()])
    return (
        <div className = "deviceView">
            <p className = "title views">{ info.title }</p>
            <p className = "subTitle views2">{ designPage + '/' + info.design.length }</p>
            <div className = { 'view ' + 'view' + device }></div>
        </div>
    )
}