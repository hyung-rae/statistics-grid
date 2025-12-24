import type { ContentType, SelectOptionType } from "@/types"
import type { SelectChangeEvent } from "@mui/material"
import { useMemo, useState } from "react"

const MOCK_DATA_LIST: (SelectOptionType & { type: ContentType })[] = [
  { value: "101", label: "오늘 가장 많이 본 페이지", type: "distribution" },
  { value: "102", label: "기기별 접속률", type: "distribution" },
  { value: "103", label: "지역별 접속 정보 ", type: "distribution" },
  { value: "104", label: "방문 유입 채널 TOP 3", type: "distribution" },

  { value: "105", label: "방문자 수 추이 ", type: "series" },
  { value: "106", label: "취소 현황 ", type: "series" },
  { value: "107", label: "매출액 ", type: "series" },
  { value: "108", label: "환불액", type: "series" },

  { value: "109", label: "오늘 총 방문자 수", type: "feed" },
  { value: "110", label: "오늘 페이지 방문 수 ", type: "feed" },
  { value: "111", label: "오늘 신규 방문자 수", type: "feed" },
]

interface UseSelectStatisticsResult {
  data: string | undefined
  handleChangeData: (event: SelectChangeEvent) => void
  dataList: SelectOptionType[]
}

const useSelectStatistics = (type: ContentType): UseSelectStatisticsResult => {
  const [data, setData] = useState<string | undefined>()

  const handleChangeData = (event: SelectChangeEvent) => {
    setData(event.target.value)
  }

  const dataList = useMemo(() => {
    return MOCK_DATA_LIST.map((item) => {
      return {
        value: item.value,
        label: item.label,
        disabled: item.type !== type,
      }
    })
  }, [type])

  return {
    data,
    dataList,
    handleChangeData,
  }
}

export default useSelectStatistics
