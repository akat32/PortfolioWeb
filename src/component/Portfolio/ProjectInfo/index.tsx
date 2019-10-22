import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import { DeviceConsumer, DeviceProvider } from '../../../context/DeviceSelector/Selector'
import SelectorContext from '../../../context/ProjectSelector/Selector'

import { ProjectData } from '../../../context/ProjectData'

export const ProjectInfo = () => {
    return (
        <div className = "projectInfo">
            <p className = "title alignRight">기종</p>
            <p className = "subTitle alignRight">Web / App 중 원하는 기종을 선택해주세요</p>
            <DeviceProvider>
                <div>
                    <DeviceSelector/>
                </div>
            </DeviceProvider>
            <p className = "title alignRight">설명</p>
            <p className = "subTitle alignRight">프로젝트에 대한 설명입니다</p>
            <hr className = "line"/>
            <Info />
        </div>
    )
}

const DeviceSelector = () => {
    return (
        <DeviceConsumer>
            { ({ actions } : any) => (
                <div className = "deviceSelector">
                    <div className = "Iphone">
                        <div className = "img"/>
                        <p className = "DeviceTitle">IPhone</p>
                    </div>
                    <div style = {{ flex : 1 }} />
                    <div className = "Tablet">
                        <div className = "img"/>
                        <p className = "DeviceTitle">Tablet</p>
                    </div>
                    <div style = {{ flex : 1 }} />
                    <div className = "Computer">
                        <div className = "img"/>
                        <p className = "DeviceTitle">Computer</p>
                    </div>
                </div>
            )}
        </DeviceConsumer>
    )
}

const Info = () => {
    const { state } = useContext(SelectorContext)
    useEffect( () => {
        console.log(state.number, ProjectData[state.number])
    })
    const [ info, setInfo ] = useState(ProjectData[state.number])
    return (
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
    )
}