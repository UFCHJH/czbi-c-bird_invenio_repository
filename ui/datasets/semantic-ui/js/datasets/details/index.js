import React from "react";
import ReactDOM from "react-dom";
import DetailsContainer from "./DetailsContainer";

const rootEl = document.getElementById("record-detail-root-container");
if (rootEl) {
  const metada = JSON.parse(rootEl.dataset.metadata || "{}");
  ReactDOM.render(<DetailsContainer metadata={metada} />, rootEl);
} else {
  console.warn(
    "Root element (id: 'record-detail-root-container') for React rendering is missing. Skipping render DetailsContainer.",
  );
}
