import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-5WZCCOTE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-JPQDRPB6.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_react2 = __toESM(require_react(), 1);

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-H6B2SRWL.css";

// app/header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/header.tsx"
  );
  import.meta.hot.lastModified = "1696057793595.879";
}
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12/12 h-20 mx-auto p-3 my-3 flex bg-white rounded-xl w-full ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "flex items-center h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-cover ml-2  bg-typetone-logo" }, void 0, false, {
        fileName: "app/header.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-semibold", children: "Typetone.AI" }, void 0, false, {
        fileName: "app/header.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/header.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "templates", className: "flex items-center mx-auto h-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center cursor-pointer rounded-lg h-full  px-4 space-x-1 text-center  transition-all duration-200 ease-in-out text-neutral-900 hover:bg-hover-on-navbar stroke-neutral-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-5 h-5 bg-cover ml-2  bg-templates-icon" }, void 0, false, {
        fileName: "app/header.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Templates" }, void 0, false, {
        fileName: "app/header.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/header.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/header.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-cover " }, void 0, false, {
        fileName: "app/header.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl w-36 font-semibold" }, void 0, false, {
        fileName: "app/header.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/header.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/header.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = Header;
var header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var SummaryContext = (0, import_react2.createContext)({
  loading: false,
  setLoading: (value) => {
  }
});
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  _s();
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const context = {
    loading,
    setLoading
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: " m-0 w-full p-3 h-screen bg-demo-main-back", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SummaryContext.Provider, { value: context, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(header_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(App, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SummaryContext,
  links,
  App
};
//# sourceMappingURL=/build/_shared/chunk-R4HRV4DQ.js.map
