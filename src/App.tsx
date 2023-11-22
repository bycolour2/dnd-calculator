import { Slider } from './shared/ui/Slider';
import { ScreenPanel } from './shared/ui/ScreenPanel';
import { OperationsPanel } from './shared/ui/OperationsPanel';
import { NumbersPanel } from './shared/ui/NumbersPanel';
import { SummaryBtnPanel } from './shared/ui/SummaryBtnPanel';
import { ConstructorZone } from './shared/ui/ConstructorZone';

function App() {
  return (
    <main className="container mx-auto flex h-screen flex-row items-center justify-center gap-14">
      <div className="flex flex-col items-center justify-end gap-[30px]">
        <Slider />
        <div className="flex flex-row gap-14">
          <div className="flex h-[448px] w-60 flex-col items-center gap-3">
            <ScreenPanel />
            <OperationsPanel />
            <NumbersPanel />
            <SummaryBtnPanel />
          </div>
          <ConstructorZone />
        </div>
      </div>
    </main>
  );
}

export default App;
