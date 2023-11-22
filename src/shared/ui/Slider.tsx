import { useState } from 'react';
import { Eye } from '../assets/svg/Eye';
import { cn } from '../lib/cn';
import { Selector } from '../assets/svg/Selector';

export const Slider = () => {
  const [isRuntime, setIsRuntime] = useState(false);

  const setRuntime = () => setIsRuntime(true);
  const setConstructor = () => setIsRuntime(false);

  return (
    <>
      <div className="flex w-full flex-row justify-end">
        <div className="flex h-[38px] w-60 flex-row items-center justify-center rounded-md bg-[#F3F4F6] p-px">
          <button
            type="button"
            onClick={setRuntime}
            className={cn('flex h-9 w-[107px] flex-row items-center justify-center gap-2 px-3 py-2', {
              'rounded-md border border-[#E2E3E5] bg-white': isRuntime,
            })}
          >
            <Eye class={cn('h-5 w-5 fill-none', !isRuntime ? 'stroke-[#4D5562]' : 'stroke-[#5D5FEF]')} />
            <span className="text-sm text-[#4D5562]">Runtime</span>
          </button>
          <button
            type="button"
            onClick={setConstructor}
            className={cn('flex h-9 w-[133px] flex-row items-center justify-center gap-2 px-3 py-2', {
              'rounded-md border border-[#E2E3E5] bg-white': !isRuntime,
            })}
          >
            <Selector class={cn('h-5 w-5 fill-none', isRuntime ? 'stroke-[#4D5562]' : 'stroke-[#5D5FEF]')} />
            {/* <img src={Selector} alt="selector" className="h-[20px] w-[20px]" /> */}
            <span className="text-sm text-[#4D5562]">Constructor</span>
          </button>
        </div>
      </div>
    </>
  );
};
