import type { ContentSubtypes, CustomLayoutItem } from "@/types"
import { Stack } from "@mui/material"
import FeedData from "./_components/Feed"

interface ContentsProps {
  subType: ContentSubtypes
  dataId?: string
  onChangeContent: (targetId: string, updateInfo: Partial<CustomLayoutItem>) => void
}

const renderContent = (subType: ContentSubtypes, dataId?: string) => {
  switch (subType) {
    case "feed":
      return <FeedData dataId={dataId} />
    case "line":
    case "bar":
    case "column":
    case "pie":
    case "donut":
    case "circle":
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
