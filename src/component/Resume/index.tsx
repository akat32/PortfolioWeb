import React, { useState, useContext, useEffect, useMemo } from "react";
import "./styles.scss";

// import { Document, Page } from "react-pdf";
let FileViewer: any = require("react-file-viewer");
let resumeFile = require("../../assets/resume.pdf");
export const Resume = () => {
  return (
    <div className="Resume">
      <div className="innerPdf">
        <FileViewer fileType="pdf" filePath={resumeFile} />
      </div>
      {/* <Document file={resume  File}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};
