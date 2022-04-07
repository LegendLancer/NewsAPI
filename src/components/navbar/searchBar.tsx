import { SearchIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setKeyword } from '../../features/articles/articleSlice';

const SearchBar = () => {
  let [key, setKey] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {});
  return (
    <div className='relative group'>
      <input
        className='w-28 focus-within:w-64 h-30 border-solid border-2 border-slate-50 focus-within:border-slate-500 transition-all duration-500 outline-none rounded-3xl bg-transparent pl-9 pr-4 py-1 text-slate-700'
        placeholder='Any keywords to search...'
        value={key}
        onChange={(event) => setKey(event.target.value)}
        onKeyUp={(event) => event.key === 'Enter' && dispatch(setKeyword(key))}
      />
      <SearchIcon className='opacity-30 transition-all duration-500 group-focus-within:opacity-90 w-5 h-5 absolute top-2 left-3 ' />
    </div>
  );
};

export default SearchBar;
