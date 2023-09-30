import type { ChangeEvent, DragEvent } from "react";
import React, { useCallback, useState, useRef, useContext } from "react";

import { SummaryContext } from "~/root";
import type { Toast } from "~/common/types";
import type { IDropZoneProps } from "./types";
import Toaster from "../../common/toaster";
import postSummary from "~/apis/summary";
const DropZone: React.FC<IDropZoneProps> = ({ setGPTSummary }) => {
  const { setLoading } = useContext(SummaryContext);
  const [documents, setDocuments] = useState<string[]>([]);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showToast = (message: string, type: "success" | "error" | "info") => {
    const newToast: Toast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };
  const isPdfFile = (file: File): boolean => {
    return file.type === "application/pdf";
  };

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);
      const droppedFiles: FileList = e.dataTransfer.files;
      const pdfFiles: File[] = Array.from(droppedFiles).filter(isPdfFile);
      console.log("selectedFiles on click", droppedFiles);
      if (pdfFiles.length > 0 && pdfFiles[0].size < 100000) {
        const file = pdfFiles[0];

        const fileNames: string[] = pdfFiles.map((file) => file.name);
        setDocuments([...documents, ...fileNames]);
        postSummary(file, setGPTSummary, setLoading);
      } else {
        showToast("Please select only PDF files.", "error");
      }
    },
    [documents, setGPTSummary, setLoading]
  );

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: FileList | null = e.target.files;
    console.log("selectedFiles", selectedFiles);
    if (selectedFiles) {
      const pdfFiles: File[] = Array.from(selectedFiles).filter(isPdfFile);

      if (pdfFiles.length > 0) {
        const file = pdfFiles[0];

        const fileNames: string[] = pdfFiles.map((file) => file.name);
        setDocuments([...documents, ...fileNames]);
        postSummary(file, setGPTSummary, setLoading);
      } else {
        alert("Please select only PDF files.");
      }
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white flex flex-col w-2/4  p-4.5 space-y-6 justify-start rounded-xl h-full">
      <Toaster toasts={toasts} removeToast={removeToast} />

      <div className="min-h-full flex items-center justify-center ">
        <div className="max-w-md w-full p-4">
          <div
            className={`p-6 border-2 border-dashed ${
              isDragOver ? "h-24" : ""
            } rounded-lg text-center cursor-pointer ${
              isDragOver ? "border-green-500" : "border-gray-300"
            }`}
            onDragLeave={(): void => {
              setIsDragOver(false);
            }}
            onDragEnter={(): void => {
              setIsDragOver(true);
            }}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onClick={openFileDialog}
          >
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={onFileInputChange}
              accept=".pdf"
            />
            {documents.length === 0 ? (
              !isDragOver && (
                <p className="text-gray-400">
                  Drag 'n' drop PDF files here, or click to select PDF files
                </p>
              )
            ) : (
              <div>
                <p className="text-green-500">PDF document added:</p>
                <ul className="text-gray-400">
                  {documents.map((document, index) => (
                    <li key={index}>{document}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
