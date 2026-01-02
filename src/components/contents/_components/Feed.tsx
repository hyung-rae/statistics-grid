import { getStatisticsFeed } from "@/services/statisticsServices"
import { Stack, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import NoData from "./NoData"

type FeedStatisticsData = {
  label: string
  value: number
  unit: string
  preValue: number
}

const FeedData = ({ dataId }: { dataId?: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["feed", dataId],
    queryFn: () => getStatisticsFeed<FeedStatisticsData>(dataId!),
    enabled: !!dataId,
  })

  const compareRate = useMemo(() => {
    if (!data) return "데이터 없음"
    const { value, preValue, unit } = data
    const diff = value - preValue
    const rate = Math.abs(diff)
    const status = diff > 0 ? "증가" : diff < 0 ? "감소" : "변동 없음"

    return rate === 0 ? status : `${rate.toLocaleString()} ${unit} ${status}`
  }, [data])

  return data ? (
    <Stack justifyContent="center" gap={2.5} sx={{ width: "100%", height: "100%", px: 2 }}>
      <Stack gap={1} justifyContent="space-between">
        <Typography variant="body1">{data.label}</Typography>
        <Typography variant="h4">
          {data.value.toLocaleString()} {data.unit}
        </Typography>
      </Stack>

      <Stack justifyContent="space-between">
        <Typography variant="caption">어제 보다</Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {compareRate}
        </Typography>
      </Stack>
    </Stack>
  ) : (
    <NoData isLoading={isLoading} />
  )
}

export default FeedData
