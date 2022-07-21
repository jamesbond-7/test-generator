import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { actionTypes, StoreContext } from "../context/store-context";

const schema = yup
  .object({
    serviceName: yup.string().trim().required("*Service name is required"),
    operationName: yup
      .mixed()
      .oneOf(
        ["GET", "POST", "PUT", "DELETE"],
        "*Operation must be either GET/POST/PUT/DELETE "
      )
      .required(),
  })
  .required();

const StepOne = () => {
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
      type: actionTypes.SET_STEP_ONE,
      payload: data,
    });
    dispatch({
      type: actionTypes.SET_OPEN_TAB,
      payload: 1,
    });
  };
  return (
    <div className="w-2/3 mx-auto py-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="serviceName"
          className="block text-sm font-medium text-gray-700 py-3"
        >
          Service Name
        </label>
        <input
          type="text"
          {...register("serviceName")}
          id="serviceName"
          placeholder="Service name"
          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <p className="text-red-500 my-2">{errors.serviceName?.message}</p>
        <label
          htmlFor="operationName"
          className="block text-sm font-medium text-gray-700 py-3"
        >
          Operation Name
        </label>
        <input
          type="text"
          {...register("operationName")}
          id="operationName"
          placeholder="Operation name"
          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <p className="text-red-500 my-2">{errors.operationName?.message}</p>

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

export default StepOne;
