import React, { useState, useContext, useEffect, useMemo } from "react";
import "./style.scss";

import { ProjectData } from "../../../context/ProjectData";
import { useDeviceDispatch } from "../../../context/DeviceContext";
import {
  useProjectState,
  useProjectDispatch,
} from "../../../context/ProjectContext";

import web from "../../../assets/www.svg";
import git from "../../../assets/github.svg";
import playstore from "../../../assets/playstore.svg";

export const ProjectInfo = () => {
  let number = useProjectState().number;
  const [info, setInfo] = useState(ProjectData[number]);
  useMemo(() => {
    setInfo(ProjectData[number]);
  }, [useProjectState()]);
  return (
    <div className="projectInfo">
      <p className="title alignRight">기종</p>
      <p className="subTitle alignRight">기종을 선택해주세요.</p>
      <>
        <div>
          <DeviceSelector info={info} />
        </div>
      </>
      <p className="title alignRight">설명</p>
      <p className="subTitle alignRight">프로젝트에 대한 설명입니다.</p>
      <hr className="line" />
      <>
        <div>
          <Info />
        </div>
      </>
    </div>
  );
};

const DeviceSelector = (info: any) => {
  const dispatch: any = useDeviceDispatch();
  const projectDevice: any = useProjectDispatch();
  return (
    <div className="deviceSelector">
      {info.info.iphone.length !== 0 ? (
        <>
          <div style={{ flex: 1 }} />
          <div
            className="Iphone"
            onClick={() => {
              projectDevice({ type: "RESET_PROJECTIMG" });
              dispatch({ type: "CHANGE_IPHONE" });
            }}
          >
            <div className="img" />
            <p className="DeviceTitle">IPhone</p>
          </div>
          <div style={{ flex: 1 }} />
        </>
      ) : null}
      {info.info.tablet.length !== 0 ? (
        <>
          <div style={{ flex: 1 }} />
          <div
            className="Tablet"
            onClick={() => {
              projectDevice({ type: "RESET_PROJECTIMG" });
              dispatch({ type: "CHANGE_TABLET" });
            }}
          >
            <div className="img" />
            <p className="DeviceTitle">Tablet</p>
          </div>
          <div style={{ flex: 1 }} />
        </>
      ) : null}
      {info.info.computer.length !== 0 ? (
        <>
          <div style={{ flex: 1 }} />

          <div
            className="Computer"
            onClick={() => {
              projectDevice({ type: "RESET_PROJECTIMG" });
              dispatch({ type: "CHANGE_COMPUTER" });
            }}
          >
            <div className="img" />
            <p className="DeviceTitle">Computer</p>
          </div>
          <div style={{ flex: 1 }} />
        </>
      ) : null}
    </div>
  );
};

const Info = () => {
  let number = useProjectState().number;
  const [info, setInfo] = useState(ProjectData[number]);
  useMemo(() => {
    setInfo(ProjectData[number]);
  }, [useProjectState()]);
  return (
    <div>
      <>
        <div className="info">
          <div>
            <p className="title infoText">프로젝트 명</p>
            <p className="subTitle infoBText">{info.title}</p>
          </div>
          <div>
            <p className="title infoText">설명</p>
            <p className="subTitle infoBText">{info.description}</p>
          </div>
          <div>
            <p className="title infoText">사용 기술</p>
            <p className="subTitle infoBText">{info.technology}</p>
          </div>
          <div>
            <p className="title infoText">역할</p>
            <p className="subTitle infoBText">{info.role}</p>
          </div>
          <div>
            <p className="title infoText">인원</p>
            <p className="subTitle infoBText">{info.personnel}</p>
          </div>
          <div>
            <p className="title infoText">프로젝트 내용</p>
            <p className="subTitle infoBText">{info.contents}</p>
          </div>
          <div className="projectInfoLocation">
            {info.github !== "" ? (
              <>
                <div style={{ flex: 1 }} />
                <img
                  src={git}
                  className="git"
                  onClick={() => {
                    window.location.href = info.github;
                  }}
                />

                <div style={{ flex: 1 }} />
              </>
            ) : null}
            {info.playStore !== "" ? (
              <>
                <div style={{ flex: 1 }} />
                <img
                  src={playstore}
                  className="play"
                  onClick={() => {
                    window.location.href = info.playStore;
                  }}
                />

                <div style={{ flex: 1 }} />
              </>
            ) : null}{" "}
            {info.webSite !== "" ? (
              <>
                <div style={{ flex: 1 }} />
                <img
                  src={web}
                  className="web"
                  onClick={() => {
                    window.location.href = info.webSite;
                  }}
                />

                <div style={{ flex: 1 }} />
              </>
            ) : null}
          </div>
        </div>
      </>
    </div>
  );
};
