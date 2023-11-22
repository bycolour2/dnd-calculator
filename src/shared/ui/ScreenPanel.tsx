import { useState } from 'react';
import { cn } from '../lib/cn';

type ScreenPanelProps = {};

export const ScreenPanel = (props: ScreenPanelProps) => {
  const [isActive, setIsActive] = useState(true);
  const [isTaken, setIsTaken] = useState(false);

  return (
    <div
      className={cn(
        'h-[60px] w-full rounded p-1',
        isActive && !isTaken ? 'shadow-md' : 'cursor-default select-none opacity-40'
      )}
    >
      <div className="h-full w-full rounded-md bg-[#F3F4F6] px-2 py-1 text-right text-4xl font-extrabold">0</div>
    </div>
  );
};
