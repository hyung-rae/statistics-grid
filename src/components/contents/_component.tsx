import type { ContentSubtypes } from "@/types"
import { Stack } from "@mui/material"
import DistributionChart from "./_components/DistributionChart"
import FeedData from "./_components/Feed"

interface ContentsProps {
  subType: ContentSubtypes
  dataId?: string
}

const renderContent = (subType: ContentSubtypes, dataId?: string) => {
  switch (subType) {
    case "feed":
      return <FeedData dataId={dataId} />

    case "donut":
    case "radialBar":
    case "pie":
      return <DistributionChart dataId={dataId} subType={subType} />

    case "line":
    case "bar":
    case "column":
    case "table":
      return (
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {subType} / {dataId}
        </Stack>
      )
    default:
      return null
  }
}

const Contents = ({ subType, dataId }: ContentsProps) => {
  return <div style={{ flex: 1, width: "100%" }}>{renderContent(subType, dataId)}</div>
}

export default Contents
