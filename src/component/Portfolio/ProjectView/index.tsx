import React, { useEffect, useState, useMemo, useContext } from "react";

import "./style.scss";
import { ProjectData } from "../../../context/ProjectData";

import { useProjectDispatch } from "../../../context/ProjectContext";
import { useProjectState } from "../../../context/ProjectContext";
import { useDeviceState } from "../../../context/DeviceContext";

export const View = () => {
  return (
    <div className="projectView">
      <div className="contant">
        <DeviceView />
      </div>
    </div>
  );
};

const DeviceView = () => {
  let device = useDeviceState().device;
  let number = useProjectState().number;
  let state: any = useProjectState();
  let dispatch: any = useProjectDispatch();
  const [info, setInfo] = useState(ProjectData[number]);
  useMemo(() => {
    setInfo(ProjectData[number]);
  }, [useProjectState()]);
  return (
    <div className="deviceView">
      <p className="title views">{info.title}</p>
      <div
        className="leftBtn"
        onClick={() => {
          if (state.projectImgIdx - 1 === 0)
            dispatch({
              type: "CHANGE_PROJECTIMGIDX",
              idx: info.design.length,
            });
          else {
            dispatch({
              type: "CHANGE_PROJECTIMGIDX",
              idx: state.projectImgIdx - 1,
            });
          }
        }}
      />
      <div
        className="rightBtn"
        onClick={() => {
          if (state.projectImgIdx + 1 === info.design.length + 1)
            dispatch({
              type: "CHANGE_PROJECTIMGIDX",
              idx: 1,
            });
          else {
            dispatch({
              type: "CHANGE_PROJECTIMGIDX",
              idx: state.projectImgIdx + 1,
            });
          }
        }}
      />
      <p className="subTitle views2">
        {state.projectImgIdx + "/" + info.design.length}
      </p>
      <div className={"view " + "view" + device}>
        <div className="DeviceView" />
        <div className="imgView">
          <img src={info.design[state.projectImgIdx - 1]} />
        </div>
      </div>
    </div>
  );
};
