import React from "react";

import "./style.scss";
import { ResumeData } from "../../context/ResumeData";
import { Resume } from "../Resume";
export const Home = () => {
  return (
    <div className="home">
      <div className="home_back">
        <div className="resumeBox">
          <div className="careerBox">
            경력
            <hr />
            {ResumeData.career.map((item, i) => {
              return (
                <div className="careerItem resumeItem" key={i}>
                  <div className="inner_box">
                    <div className="inner_info_box">
                      <img src={item.icon} className="carrerIcon" />
                      <div className="carrerInfo">
                        <p className="info_title">{item.company}</p>
                        <p className="info_sub">{item.job}</p>
                        <p>
                          <span>{item.startAt}</span> ~{" "}
                          <span>{item.endAt !== "" ? item.endAt : "현재"}</span>
                        </p>
                      </div>
                    </div>
                    <p className="info_des">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="educationBox">
            학력
            <hr />
            {ResumeData.education.map((item, i) => {
              return (
                <div className="educationItem resumeItem" key={i}>
                  <div className="inner_box">
                    <div className="inner_info_box">
                      <img src={item.icon} className="carrerIcon" />
                      <div className="educationInfo">
                        <p className="info_title">{item.school}</p>
                        <p className="info_sub">{item.department}</p>
                        <p>
                          <span>{item.startAt}</span> ~{" "}
                          <span>{item.endAt !== "" ? item.endAt : "현재"}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="awardsBox">
            수상
            <hr />
            {ResumeData.awards.map((item, i) => {
              return (
                <div className="awardsItem resumeItem" key={i}>
                  <div className="inner_box">
                    <div className="inner_info_box">
                      <div className="awardsInfo">
                        <p className="info_title">{item.title}</p>
                        <p className="info_sub">{item.host}</p>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="info_des">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="certificateBox">
            자격증
            <hr />
            {ResumeData.certificate.map((item, i) => {
              return (
                <div className="certificateItem resumeItem" key={i}>
                  <div className="inner_box">
                    <div className="inner_info_box">
                      <div className="awardsInfo">
                        <p className="info_title">{item.title}</p>
                        <p className="info_sub">{item.host}</p>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
