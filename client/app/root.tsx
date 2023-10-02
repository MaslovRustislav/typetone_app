import { createContext, useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import Header from "./header";
import type { IContextTypes } from "./rootTypes";
export const SummaryContext = createContext<IContextTypes>({
  loading: false,
  setLoading: (value: boolean): void => {},
});
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const context: IContextTypes = { loading, setLoading };
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <section className=" m-0 w-full p-3 h-screen bg-demo-main-back">
          <SummaryContext.Provider value={context}>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </SummaryContext.Provider>
        </section>
      </body>
    </html>
  );
}
