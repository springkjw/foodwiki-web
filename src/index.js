import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr";
import AppRouter from "./routers";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (url, method = "get", data) =>
          axios({ method, url, data })
            .then((res) => res.data)
            .catch((err) => console.log(err)),
      }}
    >
      <AppRouter />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
