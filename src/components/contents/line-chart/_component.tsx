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
  colors: ["#77B6EA", "#545454"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    title: {
      text: "Month",
    },
  },
  yaxis: {
    title: {
      text: "Temperature",
    },
    min: 5,
    max: 40,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,

    offsetX: -5,
  },
}

const series = [
  {
    name: "sample-1",
    data: [28, 29, 33, 36, 32, 32, 33],
  },
  {
    name: "sample-2",
    data: [12, 11, 14, 18, 17, 13, 13],
  },
]

const LineChart = () => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <ReactApexChart
        type="line"
        height={"100%"}
        options={options}
        series={series}
      />
    </Box>
  )
}

export default LineChart
