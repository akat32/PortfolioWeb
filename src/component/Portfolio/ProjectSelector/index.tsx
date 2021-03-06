import React, { useEffect, useContext } from "react";

import { ProjectData } from "../../../context/ProjectData";
import {
  useProjectDispatch,
  useProjectState,
} from "../../../context/ProjectContext";
import { useDeviceDispatch } from "../../../context/DeviceContext";
import "./style.scss";

export const ProjectSelector = () => {
  return (
    <div className="SelectorMain">
      <p className="title">프로젝트</p>
      <p className="subTitle">보려고자 하는 프로젝트를 선택해주세요</p>
      <>
        <hr style={{ marginTop: "30px" }} />
        <div className="projectList">
          <Selector />
        </div>
        <hr />
      </>
    </div>
  );
};

const Selector = () => {
  return (
    <div>
      <>
        <div className="innerList">
          {ProjectData.map((item, i) => (
            <Item key={`option_${i}`} num={i} />
          ))}
        </div>
      </>
    </div>
  );
};

const Item = (props: any) => {
  const dispatch: any = useProjectDispatch();
  let deviceDispatch: any = useDeviceDispatch();
  const state = useProjectState();
  const number = state.number;
  function SelectedCheck() {
    if (props.num === number) return {};
  }
  return (
    <div
      className={"item " + `${"projectIcon"}`}
      style={{ backgroundImage: `url(${ProjectData[props.num].icon})` }}
      onClick={() => {
        deviceDispatch({ type: "RESET" });
        dispatch({ type: "RESET_PROJECTIMG" });
        dispatch({ type: "CHANGE_NUMBER", number: props.num });
      }}
    >
      {/* {props.num} */}
    </div>
  );
};
