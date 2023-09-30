var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  SummaryContext: () => SummaryContext,
  default: () => App,
  links: () => links
});
import { createContext, useState } from "react";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-H6B2SRWL.css";

// app/header.tsx
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV2("div", { className: "w-12/12 h-20 mx-auto p-3 my-3 flex bg-white rounded-xl w-full ", children: [
  /* @__PURE__ */ jsxDEV2(NavLink, { to: "/", className: "flex items-center h-full", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "w-8 h-8 bg-cover ml-2  bg-typetone-logo" }, void 0, !1, {
      fileName: "app/header.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("h1", { className: "text-xl font-semibold", children: "Typetone.AI" }, void 0, !1, {
      fileName: "app/header.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/header.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV2(NavLink, { to: "templates", className: "flex items-center mx-auto h-full ", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex items-center cursor-pointer rounded-lg h-full  px-4 space-x-1 text-center  transition-all duration-200 ease-in-out text-neutral-900 hover:bg-hover-on-navbar stroke-neutral-600", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "w-5 h-5 bg-cover ml-2  bg-templates-icon" }, void 0, !1, {
      fileName: "app/header.tsx",
      lineNumber: 13,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2("div", { children: "Templates" }, void 0, !1, {
      fileName: "app/header.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/header.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/header.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV2("div", { className: "flex items-center h-full", children: [
    /* @__PURE__ */ jsxDEV2("div", { className: "w-8 h-8 bg-cover " }, void 0, !1, {
      fileName: "app/header.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("h1", { className: "text-xl w-36 font-semibold" }, void 0, !1, {
      fileName: "app/header.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/header.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/header.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), header_default = Header;

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var SummaryContext = createContext({
  loading: !1,
  setLoading: (value) => {
  }
}), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  let [loading, setLoading] = useState(!1), context = { loading, setLoading };
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: /* @__PURE__ */ jsxDEV3("section", { className: " m-0 w-full p-3 h-screen bg-demo-main-back", children: /* @__PURE__ */ jsxDEV3(SummaryContext.Provider, { value: context, children: [
      /* @__PURE__ */ jsxDEV3(header_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
function Index() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "w-full h-[90%] flex justify-center items-center", children: " Homepage" }, void 0, !1, {
    fileName: "app/home.tsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

// app/templates/index.tsx
var templates_exports = {};
__export(templates_exports, {
  default: () => templates_default
});
import { useEffect as useEffect2, useState as useState4 } from "react";

// app/templates/menu/index.tsx
import { useState as useState2 } from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var TemplatesMenu = () => {
  let [isOpenContent, setIsOpenContent] = useState2(!1);
  return /* @__PURE__ */ jsxDEV5("div", { className: "shrink w-[20%] h-full ", children: /* @__PURE__ */ jsxDEV5("div", { className: "bg-white flex flex-col  py-6 px-4  justify-start rounded-xl h-full", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "flex rounded-lg border my-8 border-neutral-300 focus-within:border-primary-300 h-min cursor-text shadow-sm space-x-2 text-neutral-800 placeholder:text-neutral-500 bg-white px-3.5 py-2.5  ", children: [
      /* @__PURE__ */ jsxDEV5(
        "svg",
        {
          width: "20",
          height: "20",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsxDEV5(
              "path",
              {
                d: "M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              void 0,
              !1,
              {
                fileName: "app/templates/menu/index.tsx",
                lineNumber: 17,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV5(
              "path",
              {
                d: "M21.925 21.925L28 28",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              },
              void 0,
              !1,
              {
                fileName: "app/templates/menu/index.tsx",
                lineNumber: 23,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/templates/menu/index.tsx",
          lineNumber: 10,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          placeholder: "Search Templates",
          className: "outline-none w-full bg-transparent"
        },
        void 0,
        !1,
        {
          fileName: "app/templates/menu/index.tsx",
          lineNumber: 30,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/templates/menu/index.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "flex h-12 rounded-lg border border-neutral-300 focus-within:border-primary-300  cursor-default relative shadow-sm space-x-2 text-neutral-800 placeholder:text-neutral-500 bg-white px-3.5 select-none py-2.5" }, void 0, !1, {
      fileName: "app/templates/menu/index.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(
      "div",
      {
        onClick: () => {
          setIsOpenContent(!isOpenContent);
        },
        className: "py-2 my-4 px-3 flex justify-between cursor-pointer select-none hover:bg-neutral-50 rounded-lg",
        children: [
          /* @__PURE__ */ jsxDEV5("div", { className: " text-base text-neutral-500 font-medium", children: "Content" }, void 0, !1, {
            fileName: "app/templates/menu/index.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV5(
            "div",
            {
              className: `stroke-[1.66667px] text-neutral-500 transition-transform  ${isOpenContent ? "-rotate-0" : "-rotate-90"}`,
              children: /* @__PURE__ */ jsxDEV5(
                "svg",
                {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 32 32",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsxDEV5(
                    "path",
                    {
                      d: "M26 12L16 22L6 12",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/templates/menu/index.tsx",
                      lineNumber: 55,
                      columnNumber: 15
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/templates/menu/index.tsx",
                  lineNumber: 48,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/templates/menu/index.tsx",
              lineNumber: 43,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/templates/menu/index.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ),
    isOpenContent && /* @__PURE__ */ jsxDEV5("div", { className: "transition-all space-y-1", children: /* @__PURE__ */ jsxDEV5("div", { className: "rounded-lg cursor-pointer flex items-center py-1.5 pl-5 pr-6 space-x-2 text-neutral-900  transition-all duration-200    hover:bg-primary-50", children: /* @__PURE__ */ jsxDEV5("div", { className: "text-ellipsis overflow-hidden", children: "Summary" }, void 0, !1, {
      fileName: "app/templates/menu/index.tsx",
      lineNumber: 67,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/templates/menu/index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/templates/menu/index.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/templates/menu/index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/templates/menu/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}, menu_default = TemplatesMenu;

// app/templates/dropZone/index.tsx
import { useCallback, useState as useState3, useRef, useContext } from "react";

// app/common/toaster.tsx
import { useEffect } from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Toaster = ({ toasts, removeToast }) => (useEffect(() => {
  let timer = setTimeout(() => {
    toasts.length > 0 && removeToast(toasts[0].id);
  }, 5e3);
  return () => {
    clearTimeout(timer);
  };
}, [toasts, removeToast]), /* @__PURE__ */ jsxDEV6("div", { className: "fixed top-5 right-5 z-50", children: toasts.map((toast) => /* @__PURE__ */ jsxDEV6(
  "div",
  {
    className: `w-full p-4 mt-4 rounded-lg shadow-lg transition-transform transform ${toast.type === "success" ? "bg-green-500 text-white translate-x-0" : toast.type === "error" ? "bg-red-500 text-white translate-x-0" : "bg-blue-500 text-white translate-x-0"}`,
    children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV6("p", { className: " px-4", children: toast.message }, void 0, !1, {
        fileName: "app/common/toaster.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6(
        "button",
        {
          className: "text-sm underline cursor-pointer",
          onClick: () => removeToast(toast.id),
          children: "Dismiss"
        },
        void 0,
        !1,
        {
          fileName: "app/common/toaster.tsx",
          lineNumber: 32,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/common/toaster.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)
  },
  toast.id,
  !1,
  {
    fileName: "app/common/toaster.tsx",
    lineNumber: 20,
    columnNumber: 9
  },
  this
)) }, void 0, !1, {
  fileName: "app/common/toaster.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this)), toaster_default = Toaster;

// app/apis/summary.ts
import Axios from "axios";
var postFile = async (file, setGPTSummary, setLoading) => {
  setLoading(!0), console.log("is it called??", file);
  let formData = new FormData();
  formData.append("pdf_file", file);
  let response = await Axios.post("http://localhost:8000/summary", formData);
  return setGPTSummary(response.data), setLoading(!1), response.data;
}, summary_default = postFile;

// app/templates/dropZone/index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var DropZone = ({ setGPTSummary }) => {
  let { setLoading } = useContext(SummaryContext), [documents, setDocuments] = useState3([]), [isDragOver, setIsDragOver] = useState3(!1), [toasts, setToasts] = useState3([]), fileInputRef = useRef(null), showToast = (message, type) => {
    let newToast = {
      id: Date.now(),
      message,
      type
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, isPdfFile = (file) => file.type === "application/pdf", onDrop = useCallback(
    (e) => {
      e.preventDefault(), setIsDragOver(!1);
      let droppedFiles = e.dataTransfer.files, pdfFiles = Array.from(droppedFiles).filter(isPdfFile);
      if (console.log("selectedFiles on click", droppedFiles), pdfFiles.length > 0 && pdfFiles[0].size < 1e5) {
        let file = pdfFiles[0], fileNames = pdfFiles.map((file2) => file2.name);
        setDocuments([...documents, ...fileNames]), summary_default(file, setGPTSummary, setLoading);
      } else
        showToast("Please select only PDF files.", "error");
    },
    [documents, setGPTSummary, setLoading]
  );
  return /* @__PURE__ */ jsxDEV7("div", { className: "bg-white flex flex-col w-2/4  p-4.5 space-y-6 justify-start rounded-xl h-full", children: [
    /* @__PURE__ */ jsxDEV7(toaster_default, { toasts, removeToast }, void 0, !1, {
      fileName: "app/templates/dropZone/index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "min-h-full flex items-center justify-center ", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-md w-full p-4", children: /* @__PURE__ */ jsxDEV7(
      "div",
      {
        className: `p-6 border-2 border-dashed ${isDragOver ? "h-24" : ""} rounded-lg text-center cursor-pointer ${isDragOver ? "border-green-500" : "border-gray-300"}`,
        onDragLeave: () => {
          setIsDragOver(!1);
        },
        onDragEnter: () => {
          setIsDragOver(!0);
        },
        onDragOver: (e) => {
          e.preventDefault();
        },
        onDrop,
        onClick: () => {
          fileInputRef.current && fileInputRef.current.click();
        },
        children: [
          /* @__PURE__ */ jsxDEV7(
            "input",
            {
              type: "file",
              ref: fileInputRef,
              style: { display: "none" },
              onChange: (e) => {
                let selectedFiles = e.target.files;
                if (console.log("selectedFiles", selectedFiles), selectedFiles) {
                  let pdfFiles = Array.from(selectedFiles).filter(isPdfFile);
                  if (pdfFiles.length > 0) {
                    let file = pdfFiles[0], fileNames = pdfFiles.map((file2) => file2.name);
                    setDocuments([...documents, ...fileNames]), summary_default(file, setGPTSummary, setLoading);
                  } else
                    alert("Please select only PDF files.");
                }
              },
              accept: ".pdf"
            },
            void 0,
            !1,
            {
              fileName: "app/templates/dropZone/index.tsx",
              lineNumber: 103,
              columnNumber: 13
            },
            this
          ),
          documents.length === 0 ? !isDragOver && /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-400", children: "Drag 'n' drop PDF files here, or click to select PDF files" }, void 0, !1, {
            fileName: "app/templates/dropZone/index.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this) : /* @__PURE__ */ jsxDEV7("div", { children: [
            /* @__PURE__ */ jsxDEV7("p", { className: "text-green-500", children: "PDF document added:" }, void 0, !1, {
              fileName: "app/templates/dropZone/index.tsx",
              lineNumber: 118,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV7("ul", { className: "text-gray-400", children: documents.map((document, index) => /* @__PURE__ */ jsxDEV7("li", { children: document }, index, !1, {
              fileName: "app/templates/dropZone/index.tsx",
              lineNumber: 121,
              columnNumber: 21
            }, this)) }, void 0, !1, {
              fileName: "app/templates/dropZone/index.tsx",
              lineNumber: 119,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/templates/dropZone/index.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/templates/dropZone/index.tsx",
        lineNumber: 87,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/templates/dropZone/index.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/templates/dropZone/index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/templates/dropZone/index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}, dropZone_default = DropZone;

// app/templates/summary/index.tsx
import { useContext as useContext2 } from "react";

// app/common/loadert.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Loader = () => /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxDEV8("div", { className: "text-center", children: [
  /* @__PURE__ */ jsxDEV8("p", { className: "text-xl font-semibold mb-4", children: "Summary is in process" }, void 0, !1, {
    fileName: "app/common/loadert.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV8("div", { className: "flex space-x-2 justify-center", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "loader-dot animate-bounce", children: "." }, void 0, !1, {
      fileName: "app/common/loadert.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "loader-dot animate-bounce", children: "." }, void 0, !1, {
      fileName: "app/common/loadert.tsx",
      lineNumber: 10,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "loader-dot animate-bounce", children: "." }, void 0, !1, {
      fileName: "app/common/loadert.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/common/loadert.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/common/loadert.tsx",
  lineNumber: 6,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/common/loadert.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), loadert_default = Loader;

// app/templates/summary/index.tsx
import { Fragment, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var SummaryZone = ({ GPTSummary }) => {
  let { loading } = useContext2(SummaryContext);
  return console.log("value", loading), /* @__PURE__ */ jsxDEV9("div", { className: "bg-white flex flex-col w-2/4  p-4 space-y-6 justify-start rounded-xl h-full", children: /* @__PURE__ */ jsxDEV9("div", { className: "bg-white flex flex-col  p-4.5 space-y-6 justify-start rounded-xl grow h-full w-full ", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "pt-3 pb-5 border-b border-neutral-200 ", children: /* @__PURE__ */ jsxDEV9("span", { className: " p-1 rounded-md border border-white text-2xl font-semibold text-neutral-900 outline-none bg-white min-w-0", children: "Document" }, void 0, !1, {
      fileName: "app/templates/summary/index.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/templates/summary/index.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9(
      "div",
      {
        className: `space-y-4 grow flex flex-col  items-center ${GPTSummary.length ? "" : " justify-center"} h-full w-full`,
        children: GPTSummary.length && !loading ? (
          // <div
          //   dangerouslySetInnerHTML={{ __html: GPTSummary }}
          // />
          /* @__PURE__ */ jsxDEV9("div", { className: "text-left font-normal text-base whitespace-pre-wrap text-neutral-600", children: [
            " ",
            prettingSummary(GPTSummary)
          ] }, void 0, !0, {
            fileName: "app/templates/summary/index.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this)
        ) : /* @__PURE__ */ jsxDEV9(Fragment, { children: loading ? /* @__PURE__ */ jsxDEV9(loadert_default, {}, void 0, !1, {
          fileName: "app/templates/summary/index.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this) : /* @__PURE__ */ jsxDEV9(Fragment, { children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "text-center font-semibold text-xl text-neutral-900", children: "Your summary of the document will be shown here" }, void 0, !1, {
            fileName: "app/templates/summary/index.tsx",
            lineNumber: 37,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "text-center font-normal text-base text-neutral-400", children: [
            /* @__PURE__ */ jsxDEV9("p", { children: "After you upload document ," }, void 0, !1, {
              fileName: "app/templates/summary/index.tsx",
              lineNumber: 41,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV9("p", { children: "the results will be shown here." }, void 0, !1, {
              fileName: "app/templates/summary/index.tsx",
              lineNumber: 42,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/templates/summary/index.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/templates/summary/index.tsx",
          lineNumber: 36,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/templates/summary/index.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/templates/summary/index.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/templates/summary/index.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/templates/summary/index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}, summary_default2 = SummaryZone, prettingSummary = (summary) => summary.split(". ").join(`.

`);

// app/templates/index.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Templates = () => {
  let [GPTSummary, setGPTSummary] = useState4(""), [loadingSummary, setLoadingSummary] = useState4(!1);
  return useEffect2(() => {
    console.log("GPTSummary", GPTSummary);
  }, [GPTSummary]), /* @__PURE__ */ jsxDEV10("div", { className: "flex grow space-x-3 w-full h-[calc(100%_-_92px)]", children: [
    /* @__PURE__ */ jsxDEV10(menu_default, {}, void 0, !1, {
      fileName: "app/templates/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(dropZone_default, { setGPTSummary }, void 0, !1, {
      fileName: "app/templates/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(summary_default2, { GPTSummary, loadingSummary }, void 0, !1, {
      fileName: "app/templates/index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/templates/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, templates_default = Templates;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7I5ATEZT.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-5WZCCOTE.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-JPQDRPB6.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { home: { id: "home", parentId: "root", path: "/", index: !0, caseSensitive: void 0, module: "/build/home-H6TSHG7X.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RCSQWGP2.js", imports: ["/build/_shared/chunk-R4HRV4DQ.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "templates/index": { id: "templates/index", parentId: "root", path: "templates", index: void 0, caseSensitive: void 0, module: "/build/templates/index-IAFPFKXV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "c1332f1c", hmr: { runtime: "/build/_shared/chunk-JPQDRPB6.js", timestamp: 1696091337939 }, url: "/build/manifest-C1332F1C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  home: {
    id: "home",
    parentId: "root",
    path: "/",
    index: !0,
    caseSensitive: void 0,
    module: home_exports
  },
  "templates/index": {
    id: "templates/index",
    parentId: "root",
    path: "templates",
    index: void 0,
    caseSensitive: void 0,
    module: templates_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
