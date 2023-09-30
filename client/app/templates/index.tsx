/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import type { FunctionComponent } from "react";

import TemplatesMenu from "./menu";
import DropZone from "./dropZone";
import SummaryZone from "./summary";
const Templates: FunctionComponent = () => {
  const [GPTSummary, setGPTSummary] = useState<string>("");
  const [loadingSummary, setLoadingSummary] = useState<boolean>(false);

  useEffect(() => {
    console.log("GPTSummary", GPTSummary);
  }, [GPTSummary]);
  return (
    <div className="flex grow space-x-3 w-full h-[calc(100%_-_92px)]">
      <TemplatesMenu />
      <DropZone setGPTSummary={setGPTSummary} />
      <SummaryZone GPTSummary={GPTSummary} loadingSummary={loadingSummary} />
    </div>
  );
};
export default Templates;
