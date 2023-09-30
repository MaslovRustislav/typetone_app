import React, { useEffect } from "react";
import type { ToasterProps } from "./types";

const Toaster: React.FC<ToasterProps> = ({ toasts, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        removeToast(toasts[0].id);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [toasts, removeToast]);

  return (
    <div className="fixed top-5 right-5 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`w-full p-4 mt-4 rounded-lg shadow-lg transition-transform transform ${
            toast.type === "success"
              ? "bg-green-500 text-white translate-x-0"
              : toast.type === "error"
              ? "bg-red-500 text-white translate-x-0"
              : "bg-blue-500 text-white translate-x-0"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className=" px-4">{toast.message}</p>
            <button
              className="text-sm underline cursor-pointer"
              onClick={() => removeToast(toast.id)}
            >
              Dismiss
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toaster;
