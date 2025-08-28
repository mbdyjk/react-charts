import { ResponsiveBar } from "@nivo/bar";
import { defectData } from "../../../shared/data/defectData";
import ChartWrapper from "../../../components/ChartWrapper";

const NivoDefectBarChart = () => {
  // 각 데이터 포인트를 고유하게 만들기 위해 company와 yearMonth를 조합
  const chartData = defectData.map((item) => ({
    id: `${item.company}-${item.yearMonth}`,
    yearMonth: `${item.company} ${item.yearMonth}`,
    defective: item.defective,
    company: item.company,
  }));

  console.log("Chart data:", chartData); // 디버깅용

  return (
    <ChartWrapper>
      <div style={{ height: 450, width: "100%", minWidth: "700px" }}>
        <ResponsiveBar
          data={chartData}
          keys={["defective"]}
          indexBy="id"
          margin={{ top: 60, right: 80, bottom: 120, left: 80 }}
          padding={0.3}
          colors={["#4b5563"]}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#374151",
                  fontSize: 12,
                  fontWeight: 600,
                },
              },
              legend: {
                text: {
                  fill: "#1f2937",
                  fontSize: 14,
                  fontWeight: 700,
                },
              },
            },
            grid: {
              line: {
                stroke: "#d1d5db",
                strokeWidth: 1,
              },
            },
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 10,
            legend: "회사-연도-월",
            legendPosition: "middle",
            legendOffset: 70,
            tickRotation: -30,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 10,
            legend: "불량 개수",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 100,
              translateY: -100,
              itemWidth: 100,
              itemHeight: 20,
              itemsSpacing: 6,
              symbolSize: 14,
              symbolShape: "circle",
              itemTextColor: "#374151",
            },
          ]}
          tooltip={({ data }) => (
            <div
              style={{
                background: "white",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                color: "#374151",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <strong style={{ color: "#1f2937", fontWeight: "600" }}>
                {data.yearMonth}
              </strong>
              <br />
              <span style={{ color: "#6b7280", fontWeight: "500" }}>
                불량 개수:{" "}
              </span>
              <span
                style={{
                  color: "#374151",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {data.defective}
              </span>
            </div>
          )}
        />
      </div>
    </ChartWrapper>
  );
};

export default NivoDefectBarChart;
