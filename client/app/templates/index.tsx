import React, { useState } from "react";
import type { FunctionComponent } from "react";

import TemplatesMenu from "./menu";
import DropZone from "./summary/dropZone";
import SummaryZone from "./summary";
const TemplatesSummary: FunctionComponent = () => {
  const [GPTSummary, setGPTSummary] = useState<string>("");

  return (
    <div className="flex max_md:flex-col grow min_md:space-x-3 w-full h-[calc(100%_-_92px)]">
      <TemplatesMenu />
      <DropZone setGPTSummary={setGPTSummary} />
      <SummaryZone GPTSummary={GPTSummary} />
    </div>
  );
};
export default TemplatesSummary;
