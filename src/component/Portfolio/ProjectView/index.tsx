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
  const [design, setDesign] = useState<String[] | null>(null);
  useMemo(() => {
    setInfo(ProjectData[number]);
  }, [useProjectState()]);
  useMemo(() => {
    switch (device) {
      case "IPhone":
        setDesign(info.iphone);
        break;
      case "Tablet":
        setDesign(info.tablet);
        break;
      case "COMPUTER":
        setDesign(info.computer);
        break;
    }
  }, [device]);
  return (
    <div className="deviceView">
      {design !== null ? (
        <>
          <p className="title views">{info.title}</p>
          <div
            className="leftBtn"
            onClick={() => {
              if (state.projectImgIdx - 1 === 0)
                dispatch({
                  type: "CHANGE_PROJECTIMGIDX",
                  idx: design.length,
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
              if (state.projectImgIdx + 1 === design.length + 1)
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
            {state.projectImgIdx + "/" + design.length}
          </p>
          <div className={"view " + "view" + device}>
            <div className="DeviceView" />
            <div className="imgView">
              {device === "IPhone" ? (
                <img src={info.iphone[state.projectImgIdx - 1]} />
              ) : null}
              {device === "Tablet" ? (
                <img src={info.tablet[state.projectImgIdx - 1]} />
              ) : null}
              {device === "COMPUTER" ? (
                <img src={info.computer[state.projectImgIdx - 1]} />
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
