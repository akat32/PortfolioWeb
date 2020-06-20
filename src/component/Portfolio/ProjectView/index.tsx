import React, { useEffect, useState, useMemo } from "react";

import "./style.scss";
import { ProjectData } from "../../../context/ProjectData";
// import Swiper from "react-easy-swipe";
import { useSwipeable, Swipeable } from "react-swipeable";
import { useProjectState } from "../../../context/ProjectContext";
import { useDeviceState } from "../../../context/DeviceContext";

import "@polymer/iron-image/iron-image.js";
import SmallImage from "./PLACEHOLDER.jpg.png";
import "./iron.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
  const [info, setInfo] = useState(ProjectData[number]);
  const [design, setDesign] = useState<String[] | null>(null);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (design !== null)
        idx === design.length - 1
          ? setIdx((idx) => 0)
          : setIdx((idx) => idx + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [idx]);
  useMemo(() => {
    setInfo(ProjectData[number]);
  }, [number]);
  useMemo(() => {
    setIdx(0);
  }, [number, device]);
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
  }, [device, info]);
  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (design !== null)
        return idx === 0
          ? setIdx((idx) => design.length - 1)
          : setIdx((idx) => idx - 1);
    },
    onSwipedLeft: () => {
      if (design !== null)
        idx === design.length - 1
          ? setIdx((idx) => 0)
          : setIdx((idx) => idx + 1);
    },
  });
  return (
    <div className="deviceView">
      {design !== null ? (
        <>
          <p className="title views ProjectTitle">
            <div
              className="leftBtn"
              onClick={() => {
                return idx === 0
                  ? setIdx((idx) => design.length - 1)
                  : setIdx((idx) => idx - 1);
              }}
            />
            <div
              className="rightBtn"
              onClick={() => {
                return idx === design.length - 1
                  ? setIdx((idx) => 0)
                  : setIdx((idx) => idx + 1);
              }}
            />
            {info.title}
          </p>
          <p className="subTitle views2">{idx + 1 + "/" + design.length}</p>
          <div className={"view " + "view" + device}>
            <div className="DeviceView" {...handlers} />

            <div className="imgView">
              {device === "IPhone" ? (
                <LazyLoadImage
                  alt={SmallImage}
                  width={"100%"}
                  height={"100%"}
                  effect="blur"
                  src={info.iphone[idx]}
                />
              ) : null}
              {device === "Tablet" ? (
                <LazyLoadImage
                  alt={SmallImage}
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  src={info.tablet[idx]}
                />
              ) : null}
              {device === "COMPUTER" ? (
                <LazyLoadImage
                  alt={SmallImage}
                  effect="blur"
                  width={"100%"}
                  height={"100%"}
                  src={info.computer[idx]}
                />
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
