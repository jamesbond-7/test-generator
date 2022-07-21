import React, { useContext, useState } from "react";
import { actionTypes, StoreContext } from "../context/store-context";

const StepThree = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { taskName } = state;
  const { operationName, serviceName } = state.step1;
  const { endPointUrl, headers, requestBody } = state.step2;

  const [loading, setLoading] = useState(false);

  const handleRequest = () => {
    try {
      setLoading(true);
      console.log(requestBody);
      const data = JSON.parse(localStorage.getItem("data")) || [];
      setTimeout(() => {
        localStorage.setItem("data", JSON.stringify([...data, requestBody]));
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      window.alert(err);
      setLoading(false);
    }

    dispatch({
      type: actionTypes.SET_OPEN_TAB,
      payload: 3,
    });
  };

  return (
    <div className=" my-2">
      <p className="text-center text-xl">Review Request</p>
      <div className="overflow-x-auto relative my-16">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Entities
              </th>
              <th scope="col" className="py-3 px-6">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Taskname
              </th>
              <td className="py-4 px-6">{taskName || "NA"}</td>
            </tr>
            <tr>
              <th colSpan={2} className="py-4 px-6 ">
                Step1
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Service name
              </th>
              <td className="py-4 px-6">{serviceName || "NA"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Operation name
              </th>
              <td className="py-4 px-6">{operationName || "NA"}</td>
            </tr>

            <tr>
              <th colSpan={2} className="py-4 px-6 ">
                Step2
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Headers
              </th>
              <td className="py-4 px-6">{headers || "NA"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Request Body
              </th>
              <td className="py-4 px-6">
                {JSON.stringify(requestBody) || "NA"}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Endpoint URL
              </th>
              <td className="py-4 px-6">{endPointUrl || "NA"}</td>
            </tr>
          </tbody>
        </table>
        <div className="px-4 py-12 text-center sm:px-6">
          <button
            type="button"
            onClick={handleRequest}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            {loading ? "Loading..." : "Proceed to make request"}
          </button>
        </div>
      </div>
      ​
    </div>
  );
};

export default StepThree;
