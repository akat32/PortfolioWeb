import React, { useEffect, useContext } from 'react'

import { SelectorConsumer, SelectorProvider } from '../../../context/ProjectSelector/Selector'
import SelectorContext from '../../../context/ProjectSelector/Selector'

import { ProjectData } from '../../../context/ProjectData'
import './style.scss'

export const ProjectSelector = () => {
    return (
        <div className = "SelectorMain">
            <p className = "title">프로젝트</p>
            <p className = "subTitle">보려고자 하는 프로젝트를 선택해주세요</p>
            <SelectorProvider>
                <div className = "projectList">
                    <Selector />
                </div>
            </SelectorProvider>
        </div>
    )
}

const Selector = () => {
    const { state } = useContext(SelectorContext)
    return (
        <div>
            <SelectorConsumer>
                { ({actions} : any) => (
                    <div className = "innerList">
                        { ProjectData.map( (item, i) => (
                            <div
                                key = { `option_${i}` }
                                className = "item"
                                onClick = { () => {
                                    actions.setNumber(i)
                                }}
                            />
                        ))}
                    </div>
                )}
            </SelectorConsumer>
        </div>
    )
}