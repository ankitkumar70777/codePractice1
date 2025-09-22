'use client';

import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log('searchText', searchText);

  function debounceFn(fn, delay) {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  const setSearchTextFn = (val) => {
    setSearchText(val);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setData(data.filter((obj, i) => i <= 5));
      }
    })();
  }, []);

  useEffect(() => {
    if (searchText) {
      const searchDataFn = () => {
        console.log('in if');
        const filterData = data.filter((post) => post?.title.includes(searchText));
        console.log('filterData', filterData);
        if (filterData) {
          setDataFiltered(filterData);
        }
      };
      const deplyFn = debounceFn(searchDataFn, 1000);
      deplyFn();
    } else {
      console.log('in else');
      setDataFiltered(data);
    }
  }, [searchText]);

  return (
    <div className='App'>
      <input
        type='text'
        onChange={(e) => setSearchTextFn(e.target.value)}
        value={searchText}
        className='border border-amber-600'
      />

      {dataFiltered.map((obj) => {
        return <p key={obj.id}>{obj.title}</p>;
      })}
    </div>
  );
}
