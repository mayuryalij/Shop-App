import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../state/actions/filter';

function FilterProds() {
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategories([
      'all',
      'electronics',
      'jewelery',
      "men's clothing",
      "women's clothing",
    ]);
  }, []);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const handleClick = (e) => {
    setShowFilter(false);
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="flex justify-center items-center p-2 relative">
      <button
        onClick={toggleFilter}
        className="inline-flex justify-center w-24 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-offset-gray-100 focus:ring-[#46ffd3]"
      >
        Filters
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {showFilter && (
        <div
          className="origin-top-right absolute top-full mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {categories.map((category) => (
              <button
                key={Math.random()}
                onClick={handleClick}
                value={category}
                className="text-gray-700 w-full block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterProds;
