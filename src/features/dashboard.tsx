import { Dialog, Transition } from '@headlessui/react';
import { PhotographIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import { Img } from 'react-image';
import { useSelector } from 'react-redux';
import { stateType } from '../app/store';
import AItem from '../components/dashboard/articleItem';

function query(content: string | undefined, key: string | undefined) {
  return content
    ?.toLowerCase()
    .replace(/\s+/g, '')
    .includes(key ? key.toLowerCase().replace(/\s+/g, '') : '');
}

const Dashboard = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [index, setIndex] = useState<number>(0);

  const articles = useSelector((state: stateType) => state.articles);

  return (
    <>
      <div
        className={`w-screen h-screen grid grid-cols-2 lg:grid-cols-3 transition-all duration-500 gap-16 py-40 px-16 backdrop-blur-sm ${
          isOpen ? 'bg-black opacity-40' : 'bg-transparent'
        }`}
      >
        {articles.data
          .filter((one) => {
            return (
              query(one?.title, articles.keyword) ||
              query(one?.content, articles.keyword)
            );
          })
          .map((one, index) => {
            return (
              <AItem
                onClick={(val: boolean) => {
                  setIndex(index);
                  setIsOpen(val);
                }}
                data={one}
                key={index}
                index={index}
              />
            );
          })}
      </div>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={() => setIsOpen(false)}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='bg-transparent backdrop-blur-2xl inline-block w-full max-w-3xl my-8 overflow-hidden pb-10 text-left align-middle transition-all transformshadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='backdrop-blur-xl bg-white bg-opacity-50 py-5 text-3xl px-16 font-bold leading-8 text-center text-slate-900'
                >
                  {articles.data[index]?.title}
                </Dialog.Title>

                <div className='flex items-stretch'>
                  <p className='w-[45%] text-gray-800 font-semibold px-8 text-lg flex justify-center items-center'>
                    {articles.data[index]?.content}
                  </p>
                  <div className='w-[55%] flex flex-col gap-5'>
                    <div className='author text-sm text-slate-500 text-bold py-2 px-8 bg-white bg-opacity-50 backdrop-blur-lg rounded-bl-xl'>
                      <p>Author: {articles.data[index]?.author}</p>
                    </div>
                    <Img
                      className='rounded-2xl p-1 border-2 border-slate-600'
                      src={articles.data[index]?.urlToImage}
                      loader={
                        <div className='w-full h-56 flex justify-center items-center border-2 bg-slate-300 text-black'>
                          Loading...
                        </div>
                      }
                      unloader={
                        <div className='w-full h-56 border-2 bg-slate-300 flex flex-col items-center justify-center'>
                          <PhotographIcon className='h-20 w-full' />
                          Sorry, No image or not able to display
                        </div>
                      }
                    />
                    {/* <img src={articles.data[index]?.urlToImage} /> */}
                  </div>
                </div>

                <div className='mt-4 flex justify-between px-5'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 w-24 items-center text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={() => setIsOpen(false)}
                  >
                    Back
                  </button>
                  <div className='flex text-slate-800 gap-20 bg-white bg-opacity-50 backdrop-blur-xl items-center px-10 rounded-xl'>
                    <span>
                      Date:{' '}
                      {new Date(
                        articles.data[index]?.publishedAt
                      ).toLocaleDateString()}
                    </span>
                    <span>Source: {articles.data[index]?.source.name}</span>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Dashboard;
