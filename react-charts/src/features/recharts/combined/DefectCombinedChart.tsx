import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { defectData } from "../../../shared/data/defectData";
import ChartWrapper from "../../../components/ChartWrapper";

const DefectCombinedChart = () => (
  <ChartWrapper>
    <ComposedChart width={600} height={300} data={defectData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="yearMonth" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="defective" fill="#8884d8" name="불량 개수" />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="defectRate"
        stroke="#ff7300"
        name="불량율 (%)"
      />
    </ComposedChart>
  </ChartWrapper>
);

export default DefectCombinedChart;
