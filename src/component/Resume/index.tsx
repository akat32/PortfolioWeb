import React, { useState, useContext, useEffect, useMemo } from "react";
import "./styles.scss";

import { Document, Page } from "react-pdf";

// import resumeFile from "../../assets/resume.pdf";
export const Resume = () => {
  return (
    <div className="Resume">
      {/* <FileViewer fileType="pdf" filePath={resumeFile} />
       */}
      {/* <Document file={resumeFile}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};
