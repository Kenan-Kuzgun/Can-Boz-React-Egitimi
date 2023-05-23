import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas/index";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccapted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adını giriniz."
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Üniversitenizi seçiniz."
            >
              <option value="">Lütfen üniversitenizi seçiniz.</option>
              <option value="bogazici">Boğazici</option>
              <option value="gsu">Galatasaray</option>
              <option value="itü">İTÜ</option>
              <option value="odtü">ODTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button
              disabled={isSubmitting}
              type="submit"
              style={{ marginBottom: 30 }}
            >
              Kaydet
            </button>
            <Link to={"/"}>Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
