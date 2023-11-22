import { useState } from 'react';
import { cn } from '../lib/cn';

export const SummaryBtnPanel = () => {
  const [isActive, setIsActive] = useState(true);
  const [isTaken, setIsTaken] = useState(false);

  return (
    <div className={cn('h-[72px] w-full rounded p-1 shadow-md', isActive ? 'shadow-md' : 'cursor-default opacity-40')}>
      <button
        type="button"
        className={cn(
          'flex h-full w-full flex-row items-center justify-center rounded-md bg-[#5D5FEF] text-white',
          isActive ? '' : 'cursor-default',
          isTaken ? 'hover:border-2 hover:border-[#4a4bbb] active:bg-[#4a4bbb]' : ''
        )}
      >
        =
      </button>
    </div>
  );
};
