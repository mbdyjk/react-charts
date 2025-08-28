import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { defectData } from "../../../shared/data/defectData";
import ChartWrapper from "../../../components/ChartWrapper";

const DefectBarChart = () => (
  <ChartWrapper>
    <BarChart width={600} height={300} data={defectData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="yearMonth" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="defective" fill="#8884d8" name="불량 개수" />
    </BarChart>
  </ChartWrapper>
);

export default DefectBarChart;
