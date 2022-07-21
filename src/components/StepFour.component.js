import React, { useContext, useEffect, useState } from "react";
import { actionTypes, StoreContext } from "../context/store-context";

const StepFour = () => {
  const { dispatch } = useContext(StoreContext);
  const [keyValuePair, setKeyValuePair] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
      const keyValuePair = data.map((el) => Object.entries(el));
      setKeyValuePair(keyValuePair);
    }
  }, []);

  const handleClick = () => {
    dispatch({
      type: actionTypes.SET_OPEN_TAB,
      payload: 4,
    });
  };

  return (
    <div className=" my-2">
      <p className="text-center text-xl">Final Data Review</p>
      <div className="overflow-x-auto relative my-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                key
              </th>
              <th scope="col" className="py-3 px-6">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="mb-24">
            {keyValuePair.length > 0 ? (
              keyValuePair.map((val) =>
                val.map((el, idx) => (
                  <tr
                    key={idx}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    {el.map((x, idx) => (
                      <td key={idx} className="py-4 px-6">
                        {x}
                      </td>
                    ))}
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan={2}>
                  <p className="text-red-500 font-bold text-center py-16">
                    No data available!!
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="px-4 py-12 text-center sm:px-6">
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Proceed to generate Excel
          </button>
        </div>
      </div>
      ​
    </div>
  );
};

export default StepFour;
