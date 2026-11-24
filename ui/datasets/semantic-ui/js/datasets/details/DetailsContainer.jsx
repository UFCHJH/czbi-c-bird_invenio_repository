import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _join from "lodash/join";
import { Grid, Item, Label } from "semantic-ui-react";
import { i18next } from "@translations/i18next";
import { SpecimenView, SamplePreparationView, ImageAcquisitionView } from "@ufchjh/czbi-ui_lib";


export const DetailsContainer = (params) => {
  console.log("params", params.metadata);

  
  const metadata = JSON.stringify(_get(params, "metadata._api_data", i18next.t("No metadata")), "", 4);
  const api_data = params.metadata["_api_data"]

  return (
    <div style={{display: "flex", "flex-direction": "column", gap: "1.5rem"}}>
      <section>
        <SpecimenView items={api_data.specimen}></SpecimenView>
      </section>
      <section>
        <SamplePreparationView items={api_data.sample_preparation}></SamplePreparationView>
      </section>
      <section>
        <ImageAcquisitionView items={api_data.image_acquisition}></ImageAcquisitionView>
      </section>
    </div>
  );
};

DetailsContainer.propTypes = {
};

export default DetailsContainer;