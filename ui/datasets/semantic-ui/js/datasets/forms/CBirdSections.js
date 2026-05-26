import React from "react";
import { i18next } from "@translations/i18next";
import { Specimen, ImageAcquisition, SamplePreparation } from "@thekarinka/czbi-ui_lib";
 
export const SpecimenSection = {
  key: "specimen",
  label: i18next.t("Specimen"),
  component: ({ record, formConfig }) => {
    return (
      <div>
        {/* specimen pole podle UI */}
        <Specimen fieldPath="metadata.specimen"></Specimen>
      </div>
    );
  },
  includesPaths: ["metadata.specimen"],
};

export const SamplePreparationSection = {
  key: "sample_preparation",
  label: i18next.t("SamplePreparation"),
  component: ({ record, formConfig }) => {
    return (
      <div>
        {/* sample preparation pole podle UI a Vládi */}
        <SamplePreparation fieldPath="metadata.sample_preparation"></SamplePreparation>
      </div>
    );
  },
  includesPaths: ["metadata.sample_preparation"],
};

export const ImageAcquisitionSection = {
  key: "image_acquisition",
  label: i18next.t("ImageAcquisition"),
  component: ({ record, formConfig }) => {
    return (
      <div>
        {/* image acquisition pole podle UI */}
        <ImageAcquisition fieldPath="metadata.image_acquisition"></ImageAcquisition>
      </div>
    );
  },
  includesPaths: ["metadata.image_acquisition"],
};