import { useState } from 'react';
import { cn } from '../lib/cn';

export const OperationsPanel = () => {
  const [isActive, setIsActive] = useState(true);
  const [isTaken, setIsTaken] = useState(false);

  return (
    <div
      className={cn(
        'z-20 flex h-[56px] w-full cursor-grab select-none flex-row gap-2 rounded bg-white p-1',
        isActive ? 'shadow-md' : 'opacity-40'
      )}
    >
      <button
        type="button"
        className={cn(
          'flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? '' : 'cursor-default',
          isTaken ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : ''
        )}
      >
        /
      </button>
      <button
        type="button"
        className={cn(
          'flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5] text-center',
          isActive ? '' : 'cursor-default',
          isTaken ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : ''
        )}
      >
        x
      </button>
      <button
        type="button"
        className={cn(
          'flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? '' : 'cursor-default',
          isTaken ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : ''
        )}
      >
        -
      </button>
      <button
        type="button"
        className={cn(
          'flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5]',
          isActive ? '' : 'cursor-default',
          isTaken ? 'hover:border-2 hover:border-[#5D5FEF] active:bg-[#5D5FEF] active:text-white' : ''
        )}
      >
        +
      </button>
    </div>
  );
};
