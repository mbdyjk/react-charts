export type DefectData = {
  company: string;
  yearMonth: string;
  total: number;
  defective: number;
  defectRate: number;
};

export const defectData: DefectData[] = [
  {
    company: "CompanyA",
    yearMonth: "2023-01",
    total: 1000,
    defective: 50,
    defectRate: 5.0,
  },
  {
    company: "CompanyA",
    yearMonth: "2023-02",
    total: 1200,
    defective: 60,
    defectRate: 5.0,
  },
  {
    company: "CompanyA",
    yearMonth: "2023-03",
    total: 1100,
    defective: 55,
    defectRate: 5.0,
  },
  {
    company: "CompanyB",
    yearMonth: "2023-01",
    total: 800,
    defective: 40,
    defectRate: 5.0,
  },
  {
    company: "CompanyB",
    yearMonth: "2023-02",
    total: 900,
    defective: 45,
    defectRate: 5.0,
  },
];
