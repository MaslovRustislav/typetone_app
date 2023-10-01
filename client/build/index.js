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
import { jsx } from "react/jsx-runtime";
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
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
var tailwind_default = "/build/_assets/tailwind-36KT7PJL.css";

// app/header.tsx
import { NavLink } from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Header = () => /* @__PURE__ */ jsxs("div", { className: "w-12/12 h-20 mx-auto p-3 my-3 flex bg-white rounded-xl w-full ", children: [
  /* @__PURE__ */ jsxs(NavLink, { to: "/", className: "flex items-center h-full", children: [
    /* @__PURE__ */ jsx2("div", { className: "w-8 h-8 bg-cover ml-2  bg-typetone-logo" }),
    /* @__PURE__ */ jsx2("h1", { className: "text-xl font-semibold", children: "Typetone.AI" })
  ] }),
  /* @__PURE__ */ jsx2(NavLink, { to: "templates", className: "flex items-center mx-auto h-full ", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center cursor-pointer rounded-lg h-full  px-4 space-x-1 text-center  transition-all duration-200 ease-in-out text-neutral-900 hover:bg-hover-on-navbar stroke-neutral-600", children: [
    /* @__PURE__ */ jsx2("div", { className: "w-5 h-5 bg-cover ml-2  bg-templates-icon" }),
    /* @__PURE__ */ jsx2("div", { children: "Templates" })
  ] }) }),
  /* @__PURE__ */ jsxs("div", { className: "flex items-center h-full", children: [
    /* @__PURE__ */ jsx2("div", { className: "w-8 h-8 bg-cover " }),
    /* @__PURE__ */ jsx2("h1", { className: "text-xl w-36 font-semibold" })
  ] })
] }), header_default = Header;

// app/root.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var SummaryContext = createContext({
  loading: !1,
  setLoading: (value) => {
  }
}), links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  let [loading, setLoading] = useState(!1), context = { loading, setLoading };
  return /* @__PURE__ */ jsxs2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs2("head", { children: [
      /* @__PURE__ */ jsx3("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx3(Meta, {}),
      /* @__PURE__ */ jsx3(Links, {})
    ] }),
    /* @__PURE__ */ jsx3("body", { children: /* @__PURE__ */ jsx3("section", { className: " m-0 w-full p-3 h-screen bg-demo-main-back", children: /* @__PURE__ */ jsxs2(SummaryContext.Provider, { value: context, children: [
      /* @__PURE__ */ jsx3(header_default, {}),
      /* @__PURE__ */ jsx3(Outlet, {}),
      /* @__PURE__ */ jsx3(ScrollRestoration, {}),
      /* @__PURE__ */ jsx3(Scripts, {}),
      /* @__PURE__ */ jsx3(LiveReload, {})
    ] }) }) })
  ] });
}

// app/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsx as jsx4 } from "react/jsx-runtime";
var meta = () => [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
function Index() {
  return /* @__PURE__ */ jsx4("div", { className: "w-full h-[90%] flex justify-center items-center", children: " Homepage" });
}

// app/templates/index.tsx
var templates_exports = {};
__export(templates_exports, {
  default: () => templates_default
});
import { useState as useState4 } from "react";

// app/templates/menu/index.tsx
import { useState as useState2 } from "react";

// app/templates/menu/constant.ts
var contentItems = [{ name: "Summary" }];

// app/templates/menu/index.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var TemplatesMenu = () => {
  let [isOpenContent, setIsOpenContent] = useState2(!1);
  return /* @__PURE__ */ jsx5("div", { className: "shrink w-[20%] max_md:w-full h-full ", children: /* @__PURE__ */ jsxs3("div", { className: "bg-white flex flex-col    py-6 px-4  justify-start rounded-xl h-full", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex rounded-lg border my-8 border-neutral-300 focus-within:border-primary-300 h-min cursor-text shadow-sm space-x-2 text-neutral-800 placeholder:text-neutral-500 bg-white px-3.5 py-2.5  ", children: [
      /* @__PURE__ */ jsxs3(
        "svg",
        {
          width: "20",
          height: "20",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ jsx5(
              "path",
              {
                d: "M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ jsx5(
              "path",
              {
                d: "M21.925 21.925L28 28",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx5(
        "input",
        {
          placeholder: "Search Templates",
          className: "outline-none w-full bg-transparent"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs3(
      "div",
      {
        onClick: () => {
          setIsOpenContent(!isOpenContent);
        },
        className: "py-2 my-4 px-3 flex justify-between cursor-pointer select-none hover:bg-neutral-50 rounded-lg",
        children: [
          /* @__PURE__ */ jsx5("div", { className: " text-base text-neutral-500 font-medium", children: "Content" }),
          /* @__PURE__ */ jsx5(
            "div",
            {
              className: `stroke-[1.66667px] text-neutral-500 transition-transform  ${isOpenContent ? "-rotate-0" : "-rotate-90"}`,
              children: /* @__PURE__ */ jsx5(
                "svg",
                {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 32 32",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx5(
                    "path",
                    {
                      d: "M26 12L16 22L6 12",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ),
    isOpenContent && contentItems.map((contentItem) => /* @__PURE__ */ jsx5("div", { className: "transition-all space-y-1", children: /* @__PURE__ */ jsx5("div", { className: "rounded-lg cursor-pointer flex items-center py-1.5 pl-5 pr-6 space-x-2 text-neutral-900  transition-all duration-200    hover:bg-primary-50", children: /* @__PURE__ */ jsx5("div", { className: "text-ellipsis overflow-hidden", children: contentItem.name }) }) }))
  ] }) });
}, menu_default = TemplatesMenu;

// app/templates/summary/dropZone/index.tsx
import { useCallback, useState as useState3, useRef, useContext } from "react";

// app/common/toaster.tsx
import { useEffect } from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var Toaster = ({ toasts, removeToast }) => (useEffect(() => {
  let timer = setTimeout(() => {
    toasts.length > 0 && removeToast(toasts[0].id);
  }, 5e3);
  return () => {
    clearTimeout(timer);
  };
}, [toasts, removeToast]), /* @__PURE__ */ jsx6("div", { className: "fixed top-5 right-5 z-50", children: toasts.map((toast) => /* @__PURE__ */ jsx6(
  "div",
  {
    className: `w-full p-4 mt-4 rounded-lg shadow-lg transition-transform transform ${toast.type === "success" ? "bg-green-500 text-white translate-x-0" : toast.type === "error" ? "bg-red-500 text-white translate-x-0" : "bg-blue-500 text-white translate-x-0"}`,
    children: /* @__PURE__ */ jsxs4("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx6("p", { className: " px-4", children: toast.message }),
      /* @__PURE__ */ jsx6(
        "button",
        {
          className: "text-sm underline cursor-pointer",
          onClick: () => removeToast(toast.id),
          children: "Dismiss"
        }
      )
    ] })
  },
  toast.id
)) })), toaster_default = Toaster;

// app/apis/summary.ts
import Axios, { AxiosError } from "axios";
var postFile = async (file, setGPTSummary, setLoading, showToast) => {
  setLoading(!0);
  let formData = new FormData();
  formData.append("pdfFile", file);
  let response;
  try {
    response = await Axios.post("http://localhost:8000/summary", formData), setGPTSummary(response.data);
  } catch (e) {
    e instanceof AxiosError && showToast(e.response?.data?.detail || e.message, "error"), setLoading(!1);
    return;
  }
  return setLoading(!1), response.data;
}, summary_default = postFile;

// app/templates/summary/dropZone/index.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
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
      if (pdfFiles.length > 0) {
        let file = pdfFiles[0], fileNames = pdfFiles.map((file2) => file2.name);
        setDocuments(fileNames), summary_default(file, setGPTSummary, setLoading, showToast);
      } else
        showToast("Please select only PDF files.", "error");
    },
    [documents, setGPTSummary, setLoading]
  ), openFileDialog = () => {
    fileInputRef.current && fileInputRef.current.click();
  }, onFileInputChange = (e) => {
    let selectedFiles = e.target.files;
    if (selectedFiles) {
      let pdfFiles = Array.from(selectedFiles).filter(isPdfFile);
      if (pdfFiles.length > 0) {
        let file = pdfFiles[0], fileNames = pdfFiles.map((file2) => file2.name);
        setDocuments(fileNames), summary_default(file, setGPTSummary, setLoading, showToast);
      } else
        showToast("Please select only PDF files.", "error");
    }
  }, onDragOver = (e) => {
    e.preventDefault();
  }, handleDeleteClick = (e) => {
    e.stopPropagation(), setDocuments([]), setGPTSummary("");
  };
  return /* @__PURE__ */ jsxs5("div", { className: "bg-white flex flex-col w-2/4 max_md:w-full  p-4.5 space-y-6 justify-start rounded-xl h-full", children: [
    /* @__PURE__ */ jsx7(toaster_default, { toasts, removeToast }),
    /* @__PURE__ */ jsx7("div", { className: "min-h-full flex items-center justify-center ", children: /* @__PURE__ */ jsx7("div", { className: "max-w-md w-full p-4", children: /* @__PURE__ */ jsxs5(
      "div",
      {
        className: `p-6 border-2 border-dashed ${isDragOver ? "h-24" : ""} rounded-lg text-center cursor-pointer ${isDragOver ? "border-green-500" : "border-gray-300"}`,
        onDragLeave: () => {
          setIsDragOver(!1);
        },
        onDragEnter: () => {
          setIsDragOver(!0);
        },
        onDragOver,
        onDrop,
        onClick: openFileDialog,
        children: [
          /* @__PURE__ */ jsx7(
            "input",
            {
              type: "file",
              ref: fileInputRef,
              style: { display: "none" },
              onChange: onFileInputChange,
              accept: ".pdf"
            }
          ),
          documents.length === 0 ? !isDragOver && /* @__PURE__ */ jsx7("p", { className: "text-gray-400", children: "Drag 'n' drop PDF files here, or click to select PDF files" }) : /* @__PURE__ */ jsxs5("div", { children: [
            /* @__PURE__ */ jsx7("p", { className: "text-green-500", children: "PDF document added:" }),
            /* @__PURE__ */ jsx7("ul", { className: "text-gray-400", children: documents.map((document, index) => /* @__PURE__ */ jsx7("li", { children: document }, index)) }),
            /* @__PURE__ */ jsx7(
              "button",
              {
                className: "text-red-500 hover:text-red-700 cursor-pointer",
                onClick: handleDeleteClick,
                children: "Delete"
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}, dropZone_default = DropZone;

// app/templates/summary/index.tsx
import { useContext as useContext2 } from "react";

// app/common/styleSummaryt.ts
function styleSummary(summary) {
  return summary.split(". ").join(`.

`);
}

// app/common/loadert.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var Loader = () => /* @__PURE__ */ jsx8("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs6("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx8("p", { className: "text-xl font-semibold mb-4", children: "Summary is in process" }),
  /* @__PURE__ */ jsxs6("div", { className: "flex space-x-2 justify-center", children: [
    /* @__PURE__ */ jsx8("div", { className: "loader-dot animate-bounce", children: "." }),
    /* @__PURE__ */ jsx8("div", { className: "loader-dot animate-bounce", children: "." }),
    /* @__PURE__ */ jsx8("div", { className: "loader-dot animate-bounce", children: "." })
  ] })
] }) }), loadert_default = Loader;

// app/templates/summary/index.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var SummaryZone = ({ GPTSummary }) => {
  let { loading } = useContext2(SummaryContext);
  return /* @__PURE__ */ jsx9("div", { className: "bg-white flex flex-col w-2/4  max_md:w-full p-4 space-y-6 justify-start rounded-xl h-full", children: /* @__PURE__ */ jsxs7("div", { className: "bg-white flex flex-col  p-4.5 space-y-6 justify-start rounded-xl grow h-full w-full ", children: [
    /* @__PURE__ */ jsx9("div", { className: "pt-3 pb-5 border-b border-neutral-200 ", children: /* @__PURE__ */ jsx9("span", { className: " p-1 rounded-md border border-white text-2xl font-semibold text-neutral-900 outline-none bg-white min-w-0", children: "Document" }) }),
    /* @__PURE__ */ jsx9(
      "div",
      {
        className: `space-y-4 overflow-y-auto grow flex flex-col  items-center ${GPTSummary.length ? "" : " justify-center"} h-full w-full`,
        children: GPTSummary.length && !loading ? /* @__PURE__ */ jsx9("div", { className: "text-left font-normal text-base whitespace-pre-wrap text-neutral-600", children: styleSummary(GPTSummary) }) : /* @__PURE__ */ jsx9(Fragment, { children: loading ? /* @__PURE__ */ jsx9(loadert_default, {}) : /* @__PURE__ */ jsxs7(Fragment, { children: [
          /* @__PURE__ */ jsx9("div", { className: "text-center font-semibold text-xl text-neutral-900", children: "Your summary of the document will be shown here" }),
          /* @__PURE__ */ jsxs7("div", { className: "text-center font-normal text-base text-neutral-400", children: [
            /* @__PURE__ */ jsx9("p", { children: "After you upload document ," }),
            /* @__PURE__ */ jsx9("p", { children: "the results will be shown here." })
          ] })
        ] }) })
      }
    )
  ] }) });
}, summary_default2 = SummaryZone;

// app/templates/index.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var TemplatesSummary = () => {
  let [GPTSummary, setGPTSummary] = useState4("");
  return /* @__PURE__ */ jsxs8("div", { className: "flex max_md:flex-col grow min_md:space-x-3 w-full h-[calc(100%_-_92px)]", children: [
    /* @__PURE__ */ jsx10(menu_default, {}),
    /* @__PURE__ */ jsx10(dropZone_default, { setGPTSummary }),
    /* @__PURE__ */ jsx10(summary_default2, { GPTSummary })
  ] });
}, templates_default = TemplatesSummary;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3QWKQFE2.js", imports: ["/build/_shared/chunk-TVTI64JF.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { home: { id: "home", parentId: "root", path: "/", index: !0, caseSensitive: void 0, module: "/build/home-HZP3I5MP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F2IE3VMC.js", imports: ["/build/_shared/chunk-IAYRGFUC.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "templates/index": { id: "templates/index", parentId: "root", path: "templates", index: void 0, caseSensitive: void 0, module: "/build/templates/index-FX4GDLIU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "86133c59", hmr: void 0, url: "/build/manifest-86133C59.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
