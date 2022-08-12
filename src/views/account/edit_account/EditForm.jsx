import {
  ArrowLeftOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { CustomInput, CustomMobileInput } from "components/formik";
import { ACCOUNT } from "constants/routes";
import { Field, useFormikContext } from "formik";
import PropType from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

const EditForm = ({ isLoading, authProvider }) => {
  const history = useHistory();
  const { values, submitForm } = useFormikContext();

  return (
    <div className="user-profile-details">
      <Field
        disabled={isLoading}
        name="fullname"
        type="text"
        label="* Nom complet"
        placeholder="Entrer votre nom et prénom"
        component={CustomInput}
        style={{ textTransform: "capitalize" }}
      />
      <Field
        disabled={authProvider !== "password" || isLoading}
        name="email"
        type="email"
        label="* Adresse Email"
        placeholder="ipssi@example.com"
        component={CustomInput}
      />
      <Field
        disabled={isLoading}
        name="address"
        type="text"
        label="Adresse"
        placeholder="25 Rue Claude Tillier, 75012 Paris"
        component={CustomInput}
        style={{ textTransform: "capitalize" }}
      />
      <CustomMobileInput
        defaultValue={values.mobile}
        name="mobile"
        disabled={isLoading}
        label="Numéro de téléphone"
      />
      <br />
      <div className="edit-user-action">
        <button
          className="button button-muted w-100-mobile"
          disabled={isLoading}
          onClick={() => history.push(ACCOUNT)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp; Retour au profil
        </button>
        <button
          className="button w-100-mobile"
          disabled={isLoading}
          onClick={submitForm}
          type="button"
        >
          {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
          &nbsp;
          {isLoading ? "Updating Profile" : "Modifier le profil"}
        </button>
      </div>
    </div>
  );
};

EditForm.propTypes = {
  isLoading: PropType.bool.isRequired,
  authProvider: PropType.string.isRequired,
};

export default EditForm;
