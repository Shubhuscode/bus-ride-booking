import { InteractiveBarChart } from "@/components/charts/interactive-bar-chart";
import { RadialShapeChart } from "@/components/charts/radial-shape-chart";
import { RadialStackedChart } from "@/components/charts/radial-stacked-chart";
import { RadialTextChart } from "@/components/charts/radial-text-chart";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";

export default function ChartsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Charts" />
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <RadialTextChart />
          <RadialShapeChart />
          <RadialStackedChart />
          <RadialTextChart />
        </div>
      </div>

      <InteractiveBarChart />
    </DashboardShell>
  );
}
