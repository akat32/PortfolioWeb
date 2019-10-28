import React, { useEffect, useContext } from 'react'

import { ProjectData } from '../../../context/ProjectData'
import { useProjectDispatch, useProjectState } from '../../../context/ProjectContext'
import './style.scss'

export const ProjectSelector = () => {

    return (
        <div className = "SelectorMain">
            <p className = "title">프로젝트</p>
            <p className = "subTitle">보려고자 하는 프로젝트를 선택해주세요</p>
            <>
                <div className = "projectList">
                    <Selector />
                </div>
            </>
        </div>
    )
}

const Selector = () => {
    return (
        <div>
            <>
                    <div className = "innerList">
                        { ProjectData.map( (item, i) => (
                            <Item
                                key = { `option_${i}` }
                                num = { i }
                            />
                        ))}
                    </div>
            </>
        </div>
    )
}

const Item = (props: any) => {
    const dispatch:any = useProjectDispatch()
    const number = useProjectState().number
    function SelectedCheck() {
        if ( props.num === number ) return { backgroundColor: 'red' }
    }
    return (
        <div className = "item" style = { SelectedCheck() } onClick = { () => {
            dispatch({type : 'CHANGE_NUMBER', number : props.num})
        }}>
            { props.num }
        </div>
    )
}