import { getStatisticsDistribution } from "@/services/statisticsServices"
import type { ContentSubType } from "@/types"
import { blue } from "@mui/material/colors"
import { useQuery } from "@tanstack/react-query"
import type { ApexOptions } from "apexcharts"
import { useMemo } from "react"
import ReactApexChart from "react-apexcharts"
import NoData from "./NoData"

type DistributionStatisticsData = {
  label: string
  total: number
  list: { type: string; value: number }[]
}

const DistributionChart = ({
  dataId,
  subType,
}: {
  dataId?: string
  subType: ContentSubType<"distribution">
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["distribution", dataId],
    queryFn: () => getStatisticsDistribution<DistributionStatisticsData>(dataId!),
    enabled: !!dataId,
  })

  const series: ApexNonAxisChartSeries = data?.list.map((item) => item.value) || []

  const colors = useMemo(() => {
    const length = data?.list.length || 0
    return Array.from({ length }, (_, i) => {
      const shade = 900 - i * 100
      return blue[shade as keyof typeof blue]
    })
  }, [data?.list.length])

  const options: ApexOptions = {
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

    labels: data?.list.map((item) => item.type) || [],
    colors: colors,
    legend: {
      position: "top",

      itemMargin: {
        horizontal: 5, // 항목 간 수평 간격
        vertical: 5, // 항목 간 수직 간격
      },
    },

    plotOptions: {
      pie: {
        startAngle: 0, // 시작 각도 (0-360)
        endAngle: 360, // 끝 각도

        expandOnClick: false, // 클릭 시 확장

        offsetX: 0, // X축 오프셋
        offsetY: 0, // Y축 오프셋

        customScale: 1, // 차트 스케일 (0-1)

        dataLabels: {
          offset: 0, // 레이블 위치 조정
          minAngleToShowLabel: 10, // 레이블 표시 최소 각도
        },
      },
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: "16px",
          formatter: function (seriesName, opts) {
            return `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]} %`
          },
        },
      },
    },
  }

  return data ? (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactApexChart
        key={subType}
        options={options}
        series={series}
        type={subType}
        width="100%"
        height="100%"
      />
    </div>
  ) : (
    <NoData isLoading={isLoading} />
  )
}

export default DistributionChart
