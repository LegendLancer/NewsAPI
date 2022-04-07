import { AItemProp } from '../../interfaces/dashboard';

const AItem = (props: AItemProp) => {
  return (
    <div
      onClick={() => props.onClick(true)}
      className={`relative group flex flex-col justify-around rounded-md border-sky-100 hover:border-white border-2 bg-white hover:bg-slate-700 bg-opacity-90 hover:bg-opacity-50 p-5 hover:scale-[1.2] transition-all duration-300 cursor-pointer hover:text-white selection:bg-none hover:rounded-br-[60px] hover:rounded-tl-[60px] before:transition-all before:duration-300 before:flex before:items-center before:pl-2 hover:before:pl-5 before:content-[""] before:w-0 before:h-0 hover:before:w-16 hover:before:h-16 before:absolute before:bg-sky-200 before:bg-opacity-60 hover:before:bg-white hover:before:bg-opacity-90 before:bottom-0 before:left-0 before:rounded-tr-full before:text-slate-700`}
    >
      <h1 className='text-center text-xl font-semibold text-slate-700 group-hover:text-slate-50'>
        {props.data.title}
      </h1>
      <div className='flex flex-col items-end text-right mt-5'>
        <span className='w-fit py-1'>
          Author:{' '}
          {props.data?.author?.slice(0, 20) +
            (props.data?.author?.length >= 20 && '...')}
        </span>
        <span className='w-fit py-1'>
          Date: {new Date(props.data.publishedAt).toLocaleDateString()}
        </span>
        <span className='w-fit py-1'>Source: {props.data.source.name}</span>
      </div>
    </div>
  );
};
export default AItem;
