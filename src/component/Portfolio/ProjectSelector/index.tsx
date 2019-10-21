import React, { useEffect, useContext } from 'react'

import { SelectorConsumer, SelectorProvider } from '../../../context/ProjectSelector/Selector'
import SelectorContext from '../../../context/ProjectSelector/Selector'

import { ProjectData } from '../../../context/ProjectData'
import './style.scss'

export const ProjectSelector = () => {
    useEffect( () => {
        console.log(ProjectData)
    }, [])
    return (
        <div>
            <div style = {{ height : '4em'}}/>
            <p className = "title">프로젝트</p>
            <p className = "subTitle">보려고자 하는 프로젝트를 선택해주세요</p>
            <SelectorProvider>
                <div>
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
                    <div>
                        { ProjectData.map( (item, i) => (
                            <div
                                key = { i }
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