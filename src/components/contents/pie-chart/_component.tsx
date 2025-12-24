import { Box } from "@mui/material"
import ReactApexChart from "react-apexcharts"
import type { ApexOptions } from "apexcharts"

const options: ApexOptions = {
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  legend: {
    position: "top",
  },
}

const series = [44, 55, 41, 17, 15]

const PieChart = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ReactApexChart
        type="pie"
        height={"100%"}
        options={options}
        series={series}
      />
    </Box>
  )
}

export default PieChart
