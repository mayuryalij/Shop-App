import React from 'react';
import FilterProds from './components/FilterProds';
import Products from './components/Products';

function Home() {
  return (
    <div>
      <FilterProds />
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
    </div>
  );
}

export default Home;
