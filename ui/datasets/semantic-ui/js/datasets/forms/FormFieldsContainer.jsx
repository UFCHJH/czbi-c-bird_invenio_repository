import * as React from "react";

import { Specimen, ImageAcquisition, SamplePreparation } from "@thekarinka/czbi-ui_lib";

import {
  useFormConfig,
  FormikStateLogger,
  CreatibutorsField,
  useFieldData,
  TextField,
} from "@js/oarepo_ui/forms";
import { useFormikContext, getIn } from "formik";
import { AccordionField } from "react-invenio-forms";
import { i18next } from "@translations/i18next";
import { UppyUploader } from "@js/invenio_rdm_records";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FormFieldsContainerComponent = ({ record }) => {
  console.log("debug FromFieldsContainer");
  console.log("EMMA DEBUG", require.resolve("@js/oarepo_ui/forms"));
  const formConfig = useFormConfig();
  const { filesLocked } = formConfig;

  return (
    <React.Fragment>
      <AccordionField
        includesPaths={[
          "metadata.creators",
          "metadata.publication_date",
          "metadata.resource_type",
        ]}
        active
        label={i18next.t("Mandatory information")}
      >
        <CreatibutorsField
          fieldPath="metadata.creators"
          modal={{ addLabel: "Add", editLabel: "Edit" }}
          schema="creators"
        />

        <TextField fieldPath="metadata.publication_date" />
        <TextField fieldPath="metadata.resource_type.id" label="Resource type" placeholder="Type 'dataset'" />
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.title"]}
        active
        label={i18next.t("Basic information")}
      >
        <TextField fieldPath="metadata.title" />
      </AccordionField>
      <AccordionField
        includesPaths={["files.enabled"]}
        active
        label={
          <label htmlFor="files.enabled">{i18next.t("Files upload")}</label>
        }
        data-testid="filesupload-button"
      >
        <UppyUploader
          isDraftRecord={!record.is_published}
          config={formConfig}
          quota={formConfig.quota}
          decimalSizeDisplay={formConfig.decimal_size_display}
          allowEmptyFiles={formConfig.allow_empty_files}
          fileUploadConcurrency={formConfig.file_upload_concurrency}
          showMetadataOnlyToggle={false}
          filesLocked={filesLocked}
        />
      </AccordionField>

{/* specimen pole podle UI */}
      <AccordionField
        includesPaths={["metadata.specimen"]}
        active
        label={i18next.t("Specimen")}
      >
        <Specimen fieldPath="metadata.specimen"></Specimen>
      </AccordionField>

{/* sample preparation pole podle UI a Vládi */}
      <AccordionField
        includesPaths={["metadata.sample_preparation"]}
        active
        label={i18next.t("Sample preparation")}
      >
        <SamplePreparation fieldPath="metadata.sample_preparation"></SamplePreparation>
      </AccordionField>

{/* image acquisition pole podle UI */}
      <AccordionField
        includesPaths={["metadata.image_acquisition"]}
        active
        label={i18next.t("Image acquisition")}
      >
        <ImageAcquisition fieldPath="metadata.image_acquisition"></ImageAcquisition>
      </AccordionField>

      {process.env.NODE_ENV === "development" && <FormikStateLogger />}
    </React.Fragment>
  );
};

FormFieldsContainerComponent.propTypes = {
  record: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    record: state.deposit.record,
  };
};

export default connect(mapStateToProps)(FormFieldsContainerComponent);
