import React, { useContext } from "react";
import { SummaryContext } from "~/root";
import type { FunctionComponent } from "react";

import type { ISummaryProps } from "./types";
import Loader from "~/common/loadert";
export const SummaryZone: FunctionComponent<ISummaryProps> = ({ GPTSummary }) => {
  const { loading } = useContext(SummaryContext);
  console.log("value", loading);
  return (
    <div className="bg-white flex flex-col w-2/4  p-4 space-y-6 justify-start rounded-xl h-full">
      <div className="bg-white flex flex-col  p-4.5 space-y-6 justify-start rounded-xl grow h-full w-full ">
        <div className="pt-3 pb-5 border-b border-neutral-200 ">
          <span className=" p-1 rounded-md border border-white text-2xl font-semibold text-neutral-900 outline-none bg-white min-w-0">
            Document
          </span>
        </div>
        <div
          className={`space-y-4 grow flex flex-col  items-center ${
            GPTSummary.length ? "" : " justify-center"
          } h-full w-full`}
        >
          {GPTSummary.length && !loading ? (
            // <div
            //   dangerouslySetInnerHTML={{ __html: GPTSummary }}
            // />
            <div className="text-left font-normal text-base whitespace-pre-wrap text-neutral-600">
              {" "}
              {prettingSummary(GPTSummary)}
            </div>
          ) : (
            <>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className="text-center font-semibold text-xl text-neutral-900">
                    Your summary of the document will be shown here
                  </div>
                  <div className="text-center font-normal text-base text-neutral-400">
                    <p>After you upload document ,</p>
                    <p>the results will be shown here.</p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryZone;

// private

const prettingSummary = (summary: string) => {
  return summary.split(". ").join(".\n\n");
};
