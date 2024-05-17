/* eslint-disable */

const ShimmerSearchBar = ({ setSearchedValue }) => {
  return (
    <>
      <form className="flex items-center max-w-sm ml-[410px] mt-8">
        <label htmlFor="simple-search" className="sr-only "></label>
        <div className=" w-full">
          <div className="absolute inset-y-0  flex items-center ps-3 pointer-events-none"></div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-300 border text-center border-white-300 text-gray-700  text-lg font-normal rounded-lg focus:ring-white-500 focus:border-white-500 block w-[800px] ps-10 p-2.5  dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-gray-600 outline-none dark:focus:ring-white-500 dark:focus:border-white-500"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 relative left-[350px] text-sm text-gray-600 bg-white-700 rounded-lg   hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
        >
          <span className="sr-only">Search</span>
        </button>
      </form>
    </>
  );
};

export default ShimmerSearchBar;
