import type { ContentSubType } from "@/types"
import { blue } from "@mui/material/colors"
import type { ApexOptions } from "apexcharts"
import { useEffect, useMemo, useState } from "react"
import ReactApexChart from "react-apexcharts"
import NoData from "./NoData"

const SeriesChart = ({ subType }: { dataId?: string; subType: ContentSubType<"series"> }) => {
  const series: ApexAxisChartSeries = [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ]

  const colors = useMemo(() => {
    const length = 2
    return Array.from({ length }, (_, i) => {
      const shade = 900 - i * 100
      return blue[shade as keyof typeof blue]
    })
  }, [])

  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        width: "100%",
        height: "100%",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: colors,
      dataLabels: {
        enabled: true,
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
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
        offsetY: 0,
        offsetX: -5,
      },
      plotOptions: {
        bar: {
          horizontal: subType === "bar",
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
    }),
    [subType, colors]
  )

  const chartType = subType === "line" ? "line" : "bar"

  const [mount, setMount] = useState(false)

  const timer = setTimeout(() => {
    setMount(true)
  }, 1000)

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return mount ? (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactApexChart
        key={subType}
        options={options}
        series={series}
        type={chartType}
        width="100%"
        height="100%"
        style={{}}
      />
    </div>
  ) : (
    <NoData isLoading={true} />
  )
}

export default SeriesChart
