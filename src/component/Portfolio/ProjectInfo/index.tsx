import React, { useState, useContext, useEffect, useMemo } from 'react'
import './style.scss'

import { ProjectData } from '../../../context/ProjectData'
import { useDeviceDispatch } from '../../../context/DeviceContext'
import { useProjectState } from '../../../context/ProjectContext'
export const ProjectInfo = () => {
    return (
        <div className = "projectInfo">
            <p className = "title alignRight">기종</p>
            <p className = "subTitle alignRight">Web / App 중 원하는 기종을 선택해주세요</p>
            <>
                <div>
                    <DeviceSelector/>
                </div>
            </>
            <p className = "title alignRight">설명</p>
            <p className = "subTitle alignRight">프로젝트에 대한 설명입니다</p>
            <hr className = "line"/>
            <>
                <div>
                    <Info />
                </div>
            </>
        </div>
    )
}

const DeviceSelector = () => {
    const dispatch:any = useDeviceDispatch()
    return (
                <div className = "deviceSelector">
                    <div className = "Iphone" onClick = { () => dispatch({type : 'CHANGE_IPHONE'})}>
                        <div className = "img"/>
                        <p className = "DeviceTitle">IPhone</p>
                    </div>
                    <div style = {{ flex : 1 }} />
                    <div className = "Tablet" onClick = { () => dispatch({type : 'CHANGE_TABLET'})}>
                        <div className = "img"/>
                        <p className = "DeviceTitle">Tablet</p>
                    </div>
                    <div style = {{ flex : 1 }} />
                    <div className = "Computer" onClick = { () => dispatch({type : 'CHANGE_COMPUTER'})}>
                        <div className = "img"/>
                        <p className = "DeviceTitle">Computer</p>
                    </div>
                </div>
    )
}

const Info = () => {
    let number = useProjectState().number
    const [ info, setInfo ] = useState(ProjectData[number])
    useMemo( () => {
        setInfo(ProjectData[number])
    }, [useProjectState()])
    return (
        <div>
            <>
                <div className = "info">
                    <div>
                        <p className = "title infoText">프로젝트 명</p>
                        <p className = "subTitle infoBText">{info.title}</p>
                    </div>
                    <div>
                        <p className = "title infoText">역할</p>
                        <p className = "subTitle infoBText">{info.role}</p>
                    </div>
                    <div>
                        <p className = "title infoText">사용 기술</p>
                        <p className = "subTitle infoBText">{info.technology}</p>
                    </div>
                    <div>
                        <p className = "title infoText">인원</p>
                        <p className = "subTitle infoBText">{info.personnel}</p>
                    </div>
                    <div>
                        <p className = "title infoText">프로젝트 내용</p>
                        <p className = "subTitle infoBText">{info.contents}</p>
                    </div>
                </div>
            </>
        </div>
    )
}