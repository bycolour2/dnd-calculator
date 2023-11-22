import { LegacyRef, forwardRef } from 'react';
import { AddImage } from '../assets/svg/AddImage';

export const ConstructorZone = forwardRef((_, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className="flex h-[444px] w-60 flex-col items-center justify-center rounded-md border-2 border-dashed border-[#C4C4C4]"
    >
      <div className="mb-3 h-[20px] w-[20px]">
        <AddImage />
      </div>
      <p className="text-center text-sm text-[#5D5FEF]">Перетащите сюда</p>
      <p className="w-[106px] text-center text-xs text-[#6B7280]">любой элемент из левой панели</p>
    </div>
  );
});
