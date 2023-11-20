import { Counter } from './features/counter/Counter';

function App() {
  return (
    <main className="container mx-auto flex h-screen flex-row items-center justify-center gap-14">
      <div className="flex flex-col items-center justify-end gap-[30px]">
        <div className="flex w-full flex-row justify-end">
          <div className="flex h-[38px] w-60 flex-row items-center justify-center rounded-md bg-[#F3F4F6] p-px">
            <div className="flex h-9 w-[107px] flex-row items-center justify-center gap-2 px-3 py-2">
              <img src="" alt="" className="h-[20px] w-[20px] bg-black" />
              <span className="text-sm">Runtime</span>
            </div>
            <div className="flex h-9 w-[132px] flex-row items-center justify-center gap-2 rounded-md border border-[#E2E3E5] bg-white px-3 py-2">
              <img src="" alt="" className="h-[20px] w-[20px] bg-black" />
              <span className="text-sm">Constructor</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-14">
          <div className="flex h-[448px] w-60 flex-col items-center gap-3">
            <div className="h-[60px] w-full rounded p-1 shadow-md">
              <div className="h-full w-full rounded-md bg-[#F3F4F6] px-2 py-1 text-right text-4xl">0</div>
            </div>
            <div className="flex h-[56px] w-full flex-row gap-2 rounded p-1 shadow-md">
              <div className="flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5]">
                /
              </div>
              <div className="flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5] text-center">
                x
              </div>
              <div className="flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5]">
                -
              </div>
              <div className="flex h-[48px] w-[52px] flex-row items-center justify-center rounded-md border border-[#E2E3E5]">
                +
              </div>
            </div>
            <div className="grid h-[224px] w-full grid-cols-3 grid-rows-4 gap-2 rounded p-1 shadow-md">
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">7</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">8</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">9</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">4</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">5</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">6</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">1</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">2</div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">3</div>
              <div className="col-span-2 flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">
                0
              </div>
              <div className="flex flex-row items-center justify-center rounded-md border border-[#E2E3E5]">,</div>
            </div>
            <div className="h-[72px] w-full rounded p-1 shadow-md">
              <div className="flex h-full w-full flex-row items-center justify-center rounded-md bg-[#5D5FEF] text-white">
                =
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end gap-[30px]">
            <div className="flex h-[444px] w-60 flex-col items-center justify-center rounded-md border-2 border-dashed border-[#C4C4C4]">
              <img src="" alt="" className="mb-3 h-[20px] w-[20px] bg-black" />
              <p className="text-center text-sm text-[#5D5FEF]">Перетащите сюда</p>
              <p className="w-[106px] text-center text-xs text-[#6B7280]">любой элемент из левой панели</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
