import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, 
} from "@remix-run/react";

import stylesheet from "./tailwind.css";


export const links = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('./sw.js')
  //       .then(registration => {
  //         console.log('Service Worker registered:', registration);
  //       })
  //       .catch(error => {
  //         console.error('Service Worker registration failed:', error);
  //       });
  //   });
  // }
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
