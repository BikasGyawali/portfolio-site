import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Contact = () => {
 

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="flex h-[90vh] login flex-col bg-indigo-900 shadow-md  rounded px-auto justify-center items-center">
        <div className="shadow-lg rounded  w-[90%] md:w-[60%] lg:w-[40%] pt-6  bg-white flex flex-col justify-center items-center">
          <p className="font-iceberg px-3 pt-2 text-red-500  text-xl md:text-2xl">
            Contact
          </p>

          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={yup.object().shape({
              name: yup.string().required("Please enter your name"),
              email: yup
                .string()
                .email()
                .required("Please enter your email address"),
              message: yup.string().required("Please enter message"),
            })}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <div className="px-8 pt-6 pb-8 h-400 w-96 flex flex-col justify-center items-center">
                  <div className="mb-4 flex flex-col justify-start ">
                    <label
                      htmlFor="name"
                      className="font-iceberg text-sm lg:text-lg uppercase"
                    >
                      NAME
                    </label>
                    <Field
                      className="mt-2 font-iceberg appearance-none border h-12 py-2 px-3  w-72 lg:w-[30vw] leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                    />
                    <p className="text-red-500 center font-normal font-iceberg">
                      <ErrorMessage name="name" />
                    </p>
                  </div>
                  <div className="mb-4  flex flex-col justify-start">
                    <label
                      htmlFor="email"
                      className="font-iceberg  text-sm lg:text-lg uppercase"
                    >
                      Email
                    </label>
                    <Field
                      className="mt-2 font-iceberg appearance-none border h-12 py-2 px-3 w-72 lg:w-[30vw]  leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <p className="text-red-500 center font-normal font-iceberg">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                  <div className="mb-4 flex flex-col justify-start">
                    <label
                      htmlFor="message"
                      className="font-iceberg text-sm lg:text-lg uppercase"
                    >
                      Message
                    </label>
                    <Field
                      className="mt-2 font-iceberg appearance-none border py-2 px-3 w-72 h-32 lg:w-[30vw]  leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="message"
                      placeholder="Message"
                    />
                    <p className="text-red-500 center font-iceberg font-normal">
                      <ErrorMessage name="message" />
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center ">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 font-iceberg text-white py-2 mb-12 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 md:hover:scale-105 duration-300 hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="flex justify-center pt-6 bg-gray-50 w-full items-center gap-x-4">
        <p className="text-2xl cursor-pointer">
          <i className="fa-brands fa-linkedin"></i>
        </p>
        <p className="text-2xl cursor-pointer">
          <i className="fa-brands fa-github"></i>
        </p>
        <p className="text-2xl cursor-pointer">
          <i className="fa-brands fa-facebook"></i>
        </p>
      </div>
    </>
  );
};

export default Contact;
