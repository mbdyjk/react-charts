// src/App.tsx
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DefectBarChart from "./features/recharts/bar/DefectBarChart";
import DefectCombinedChart from "./features/recharts/combined/DefectCombinedChart";
import NivoDefectBarChart from "./features/nivo/bar/DefectBarChart";

const App = () => {
  const [library, setLibrary] = useState<string>("recharts");
  const [chartType, setChartType] = useState<string>("bar");

  const renderChart = () => {
    console.log("renderChart called:", { library, chartType });

    if (library === "recharts" && chartType === "bar") {
      return <DefectBarChart />;
    }
    if (library === "recharts" && chartType === "combined") {
      return <DefectCombinedChart />;
    }
    if (library === "nivo" && chartType === "bar") {
      return <NivoDefectBarChart />;
    }
    return <div>차트를 선택하세요</div>;
  };

  // 현재 선택된 상태를 표시하는 디버그 정보
  console.log("Current state:", { library, chartType });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">ChartLab</h1>
            <p className="text-gray-600">불량율 데이터 시각화 도구</p>
          </div>

          {/* Controls */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  라이브러리 선택
                </label>
                <select
                  value={library}
                  onChange={(e) => {
                    const newLibrary = e.target.value;
                    console.log("Library changed to:", newLibrary);
                    setLibrary(newLibrary);
                    // Nivo로 변경할 때 combined가 선택되어 있다면 bar로 변경
                    if (newLibrary === "nivo" && chartType === "combined") {
                      setChartType("bar");
                    }
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="recharts">Recharts</option>
                  <option value="nivo">Nivo</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  차트 종류
                </label>
                <select
                  value={chartType}
                  onChange={(e) => {
                    const newChartType = e.target.value;
                    console.log("Chart type changed to:", newChartType);
                    setChartType(newChartType);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="bar">Bar Chart</option>
                  {library === "recharts" && (
                    <option value="combined">Combined Chart</option>
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Chart Display */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                현재 선택: {library} - {chartType}
              </p>
            </div>
            {renderChart()}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
