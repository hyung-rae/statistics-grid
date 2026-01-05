import type { ContentSubtypes } from "@/types"
import DistributionChart from "./_components/DistributionChart"
import FeedData from "./_components/Feed"
import SeriesChart from "./_components/SeriesChart"
import TableData from "./_components/TableData"

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
      return <SeriesChart dataId={dataId} subType={subType} />

    case "table":
      return <TableData />
    default:
      return null
  }
}

const Contents = ({ subType, dataId }: ContentsProps) => {
  return (
    <div style={{ flex: 1, width: "100%", height: "100%" }}>{renderContent(subType, dataId)}</div>
  )
}

export default Contents
