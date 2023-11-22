import { useState } from 'react';
import { cn } from '../lib/cn';

export const NumbersPanel = () => {
  const [isActive, setIsActive] = useState(true);
  const [isTaken, setIsTaken] = useState(false);

  return (
    <div
      className={cn(
        'grid h-[224px] w-full select-none grid-cols-3 grid-rows-4 gap-2 rounded p-1',
        isActive ? 'shadow-md' : 'cursor-default opacity-40'
      )}
    >
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        7
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        8
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        9
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        4
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        5
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        6
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        1
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        2
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        3
      </button>
      <button
        type="button"
        className={cn(
          'col-span-2 flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        0
      </button>
      <button
        type="button"
        className={cn(
          'flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : 'cursor-default'
        )}
      >
        ,
      </button>
    </div>
  );
};
