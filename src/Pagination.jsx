import React, { useState } from "react";
import { foods } from "./data";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = foods.length / itemsPerPage;

  const currentItems = foods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <>
      <h1 className="flex justify-center items-center mt-8 text-3xl font-bold underline uppercase">
        Pagination
      </h1>
      <div className="flex justify-center items-center mt-4">
        {currentPage > 1 && (
          <button
            onClick={handlePrevious}
            className="mx-2 p-2 bg-red-500 text-white rounded"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={handleNext}
            className="mx-2 p-2 bg-green-500 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
      <div className="flex justify-center items-center border-2 mt-4">
        <p className="w-1/3 text-center">ID</p>
        <p className="w-1/3 text-center">NAME</p>
        <p className="w-1/3 text-center">PRICE</p>
      </div>
      {currentItems.map((food) => (
        <div
          key={food.id}
          className="flex justify-center items-center border-2"
        >
          <p className="w-1/3 text-center">{food.id}</p>
          <p className="w-1/3 text-center">{food.name}</p>
          <p className="w-1/3 text-center">${food.price}</p>
        </div>
      ))}
    </>
  );
};

export default Pagination;
