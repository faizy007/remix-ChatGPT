import React, { useState, useEffect, useMemo } from "react";
import { Link } from "@remix-run/react";
import {chatLog} from "./_index"

export default function Pagination() {
  // Sample data
  const data = useMemo(
    () => [
      {
        id: 1,
        message: "John Doe iogvilgvigea;iogrvoegh;iovughqekvkijqebi;vugbeio;uh",
        result:
          "john@example.com ukedfcvwluegciwgeiucgwigcklwebjciklgjwebilcugwio;cbil;wjbilgucbik;wsegvbfck;io.gwbsdvai;.ckgbwasiko;.cvfgbiok;.wasGBEK;IOVFCGBAWEOS;IKDGFCVBOL;KWAGBSEODLCVFK;GBWDSOL;FKCVGOWSKL;EGF",
      },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },
      { id: 1, message: "John Doe", result: "john@example.com" },
      { id: 2, message: "Jane Smith", result: "jane@example.com" },

      // Add more data as needed
    ],
    []
  );

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const newData = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentData(chatLog.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, data]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setCurrentData([]);
  };

  return (
    <div>
      <div className="flex justify-between bg-gray-200 py-4 sticky top-0 z-10">
        <Link
          to="/"
          className="m-2 px-4 py-2 rounded-lg bg-blue-500 text-white"
        >
          back
        </Link>
      </div>
      <div className="w-full p-4 h-screen">
        <table className="min-w-full bg-white border border-gray-200 table-fixed">
          <thead className="py-4 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 truncate max-w-[200px]">
                  {item?.id}
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 truncate max-w-[200px]">
                  {item?.message}
                </td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 truncate max-w-[400px]">
                  {item?.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-4 bg-gray-200 py-4 sticky bottom-0 z-10 p-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-3 py-1 ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-3 py-1 ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
