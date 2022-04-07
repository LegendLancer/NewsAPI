import SearchBar from './searchBar';

const Navbar = () => {
  return (
    <div className='flex flex-row-reverse px-12 items-center h-20 w-full fixed bg-white bg-opacity-10 top-0 z-10 backdrop-blur-xl shadow-xl'>
      <SearchBar />
      <div className='relative text-3xl mr-auto'>
        <h1 className='text-slate-700 font-bold'>NewsAPI</h1>
        <h1 className='absolute top-0 left-0 animate-ping opacity-30 text-slate-600'>
          NewsAPI
        </h1>
      </div>
    </div>
  );
};
export default Navbar;
