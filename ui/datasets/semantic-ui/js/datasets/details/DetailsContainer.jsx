import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _join from "lodash/join";
import { Grid, Item, Label } from "semantic-ui-react";
import { i18next } from "@translations/i18next";

export const DetailsContainer = (params) => {
  console.log("params", params.metadata);

  
  const metadata = JSON.stringify(_get(params, "metadata._api_data", i18next.t("No metadata")), "", 4);

  return (
    <section>
      <pre>{metadata}</pre>
    </section>
  );
};

DetailsContainer.propTypes = {
};

export default DetailsContainer;