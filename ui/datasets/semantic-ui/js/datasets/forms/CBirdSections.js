import React from "react";
import { i18next } from "@translations/i18next";
import { SpecimenArrayField, ImageAcquisitionArrayField, SamplePreparationArrayField } from "@thekarinka/czbi-ui_lib";
 

export const SpecimenSection = {
  key: "specimen",
  label: i18next.t("Specimen"),
  component: () => {
    return (
      <div>
        <SpecimenArrayField fieldPath="metadata.specimen" />
      </div>
    );
  },
  includesPaths: ["metadata.specimen"],
};

export const SamplePreparationSection = {
  key: "sample_preparation",
  label: i18next.t("Sample Preparation"),
  component: () => {
    return (
      <div>
        {/* sample preparation pole podle UI a Vládi */}
        <SamplePreparationArrayField fieldPath="metadata.sample_preparation" />
      </div>
    );
  },
  includesPaths: ["metadata.sample_preparation"],
};

export const ImageAcquisitionSection = {
  key: "image_acquisition",
  label: i18next.t("Image Acquisition"),
  component: () => {
    return (
      <div>
        {/* image acquisition pole podle UI */}
        <ImageAcquisitionArrayField fieldPath="metadata.image_acquisition" />
      </div>
    );
  },
  includesPaths: ["metadata.image_acquisition"],
};