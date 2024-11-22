import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("is required"),
    phone: Yup.string().required("is required"),
    email: Yup.string().required("is required"),
    text: Yup.string().required("is required"),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    setSuccess(true);
  };

  return (
    <div className="w-full order-1 text-custom-2 py-16 sm:py-0 sm:order-2 xl:w-[696px] sm:h-[563px]">
      {success ? (
        <div className="animate-in slide-in-from-top">
          <p className="text-4xl font-semibold mb-3 sm:mt-36">
            Thank you for contacting us
          </p>
          <p className="text-xl mb-6">
            We will contact you as soon as possible.
          </p>
          <button
            type="button"
            className="w-full sm:w-auto mt-6 mb-4 py-3 px-12 rounded-full bg-black text-white"
            onClick={() => setSuccess(false)}
          >
            Right!
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-4xl font-semibold mb-10">Contact us</h3>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              text: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div
                  className={`floating-label ${
                    errors.name && touched.name ? "error" : " "
                  }`}
                >
                  <Field type="text" name="name" id="name" placeholder=" " />
                  <label htmlFor="name">Name*</label>
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-custom-3"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-xl mb-4">I'm interested: </p>
                  <div className="flex flex-wrap">
                    <div className="checkbox-group">
                      <input type="checkbox" id="ch-1" />
                      <label htmlFor="ch-1">UX Design</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="ch-2" />
                      <label htmlFor="ch-2">UI Design</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="ch-3" />
                      <label htmlFor="ch-3">Desarrollo web</label>
                    </div>
                    <div className="checkbox-group">
                      <input type="checkbox" id="ch-4" />
                      <label htmlFor="ch-4">Desarrollo de apps</label>
                    </div>
                  </div>
                </div>
                <div
                  className={`floating-label ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                >
                  <Field type="text" name="email" id="email" placeholder=" " />
                  <label htmlFor="email">Email*</label>
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-custom-3"
                  />
                </div>
                <div
                  className={`floating-label ${
                    errors.phone && touched.phone ? "error" : ""
                  }`}
                >
                  <Field type="text" name="phone" id="phone" placeholder=" " />
                  <label htmlFor="phone">Phone</label>
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="text-sm text-custom-3"
                  />
                </div>
                <div
                  className={`floating-label ${
                    errors.text && touched.text ? "error" : ""
                  }`}
                >
                  <Field type="text" name="text" id="text" placeholder=" " />
                  <label htmlFor="text">Tell us a little more*</label>
                  <ErrorMessage
                    name="text"
                    component="p"
                    className="text-sm text-custom-3"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto mt-6 mb-4 py-3 px-12 rounded-full bg-black text-white"
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};
