import React, {
  useEffect,
  useState,
  useMemo,
  useContext,
  Component,
} from "react";

import "./style.scss";
import { ProjectData } from "../../../context/ProjectData";
import "@polymer/iron-image/iron-image.js";

import { useProjectDispatch } from "../../../context/ProjectContext";
import { useProjectState } from "../../../context/ProjectContext";
import { useDeviceState } from "../../../context/DeviceContext";
import SmallImage from "./PLACEHOLDER.jpg.png";
import "./iron.css";

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
  }, [number]);
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
  }, [device, number, info]);
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
                // <IronImage
                //   srcPreload={SmallImage}
                //   srcLoaded={info.iphone[state.projectImgIdx - 1]}
                //   num={state.projectImgIdx}
                // />
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

interface Iprops {
  srcLoaded: string;
  srcPreload: string;
  num: number;
}
interface Istate {
  num: number;
}
class IronImage extends Component<Iprops, Istate> {
  ironImageHd: any | null;
  num: number;
  constructor(props: any) {
    super(props);
    this.ironImageHd = null;
    this.num = 1;
  }

  componentDidMount() {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = this.props.srcLoaded;

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        "style",
        `background-image: url('${this.props.srcLoaded}')`
      );
      this.ironImageHd.classList.add("iron-image-fade-in");
    };
    this.setState({
      num: this.props.num,
    });
  }

  render() {
    return (
      <div className="iron-image-container">
        <div
          className="iron-image-loaded"
          ref={(imageLoadedElem) => (this.ironImageHd = imageLoadedElem)}
        ></div>

        <div
          className="iron-image-preload"
          style={{ backgroundImage: `url('${this.props.srcPreload}')` }}
        ></div>
      </div>
    );
  }
}

export default IronImage;
