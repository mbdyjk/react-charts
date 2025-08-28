import type { ReactNode } from "react";

interface ChartWrapperProps {
  children: ReactNode;
}

const ChartWrapper = ({ children }: ChartWrapperProps) => (
  <div className="p-4 bg-white shadow-md rounded-lg">{children}</div>
);

export default ChartWrapper;
