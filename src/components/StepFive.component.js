import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const StepFive = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data"));
    setData(localData);
  }, []);

  const handleExportReq = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, "Data.xlsx");
  };
  return (
    <div className="px-4 py-12 text-center sm:px-6">
      <button
        type="button"
        onClick={handleExportReq}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Generate ExcelSheet
      </button>
    </div>
  );
};

export default StepFive;
