import { DepositFormApp, parseFormAppConfig } from "@js/oarepo_ui/forms";
import React from "react";
import ReactDOM from "react-dom";
import { EDTFSingleDatePicker } from "@js/oarepo_ui/forms";
import { parametrize } from "react-overridable";
import {
  CCMMDepositRecordSerializer,
  CCMMSections,
} from "@js/ccmm_invenio/forms";
import { ImageAcquisitionSection, SamplePreparationSection, SpecimenSection } from "./CBirdSections";


const { rootEl, config, ...rest } = parseFormAppConfig();
const recordSerializer = new CCMMDepositRecordSerializer(
  config.default_locale,
  config.custom_fields.vocabularies,
);

const parametrizeEDTFSingleDatePicker = parametrize(EDTFSingleDatePicker, {
  customInputProps: { width: 16 },
});

export const componentOverrides = {
  "InvenioRdmRecords.DepositForm.DatesField.DateField":
    parametrizeEDTFSingleDatePicker,
};

const sections = [
  ...CCMMSections,
  ImageAcquisitionSection,
  SamplePreparationSection,
  SpecimenSection,
]

ReactDOM.render(
  <DepositFormApp
    config={config}
    {...rest}
    sections={sections}
    recordSerializer={recordSerializer}
    componentOverrides={componentOverrides}
    useWizardForm
  />,
  rootEl,
);
