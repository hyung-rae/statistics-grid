import type { ContentSubtypes, CustomLayoutItem } from "@/types"
import { Stack } from "@mui/material"

interface ContentsProps {
  subType: ContentSubtypes
  apiUrl?: string
  onChangeContent: (
    targetId: string,
    updateInfo: Partial<CustomLayoutItem>
  ) => void
}

const renderContent = (subType: ContentSubtypes) => {
  switch (subType) {
    case "feed":
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
          {subType}
        </Stack>
      )
    default:
      return null
  }
}

const Contents = ({ subType, apiUrl, onChangeContent }: ContentsProps) => {
  return <div style={{ flex: 1, width: "100%" }}>{renderContent(subType)}</div>
}

export default Contents
