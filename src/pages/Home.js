import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { actionTypes, StoreContext } from "../context/store-context";

const schema = yup
  .object({
    taskName: yup.string().trim().required("Task name is required"),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(StoreContext);
  const onSubmit = (data) => {
    dispatch({
      type: actionTypes.SET_TASK_NAME,
      payload: data.taskName,
    });

    navigate("/task-wizard");
  };

  return (
    <div className="w-2/3 mx-auto py-36">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="taskName"
          className="block text-sm font-medium text-gray-700 py-3"
        >
          Task name
        </label>
        <input
          type="text"
          {...register("taskName")}
          id="taskName"
          placeholder="Task name"
          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <p className="text-red-500">{errors.taskName?.message}</p>
        <div className="px-4 py-12 text-center sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Generate Test
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
