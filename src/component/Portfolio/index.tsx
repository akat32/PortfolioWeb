import React from 'react'

import './style.scss'


import { useDeviceDispatch, useDeviceState } from '../../context/DeviceContext'
// 들어가야 할 변수

// project, 현재 프로젝트
// 프로젝트에 대한 정보
// 프로젝트 이름, 사용 기술, 인원, 프로젝트 내용, 간단한 설명
// 기종
// 4개로 나눔
// 프로젝트들
// 화면
// 기종 변경
// description
import { ProjectSelector } from './ProjectSelector'
import { ProjectInfo } from './ProjectInfo/index'

export const Portfolio = () => {
    
    const Device = useDeviceState().device
    return (
        <div className = "project">
            <div style = {{ height : '4em'}}/>
            <div className = "contant">
                <ProjectSelector/>
                <div style = {{ flex : 1 }}>
                    <p>{Device}</p>
                </div>
                <ProjectInfo/>
            </div>
        </div>
    )
}