import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { actionTypes, StoreContext } from "../context/store-context";

const schema = yup
  .object({
    headers: yup.string().required("*Headers field required"),
    endPointUrl: yup.string().required("*Endpoint field URL required"),
    requestBody: yup.object().shape({}).required(),
  })
  .required();

const StepTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { dispatch } = useContext(StoreContext);
  const onSubmit = (data) => {
    console.log(data);
    dispatch({
      type: actionTypes.SET_STEP_TWO,
      payload: data,
    });

    dispatch({
      type: actionTypes.SET_OPEN_TAB,
      payload: 2,
    });
  };
  return (
    <div className="w-2/3 mx-auto py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="headers"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Headers
        </label>
        <select
          {...register("headers")}
          id="headers"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select any</option>
          <option defaultValue='{"Content-Type":"application/json"}'>
            {'{ "Content-Type": "application/json" }'}
          </option>
          <option value="none">None</option>
        </select>
        <p className="text-red-500 my-2">{errors.headers?.message}</p>
        <label
          htmlFor="endPointUrl"
          className="block text-sm font-medium text-gray-700 py-3"
        >
          Endpoint(URL)
        </label>
        <input
          type="text"
          {...register("endPointUrl")}
          id="endPointUrl"
          placeholder="Endpoint (URL)"
          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <p className="text-red-500 my-2">{errors.endPointUrl?.message}</p>
        <label
          htmlFor="requestBody"
          className="block text-sm font-medium text-gray-700 py-3"
        >
          Request Body
        </label>
        <textarea
          {...register("requestBody")}
          className="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white  focus:ring-teal-500 focus:border-teal-500 focus:outline-none
      "
          rows="5"
          placeholder="log request in JSON format"
        />

        <p className="text-red-500 my-2">{errors.requestBody?.message}</p>

        <div className="px-4 py-12 text-center sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
