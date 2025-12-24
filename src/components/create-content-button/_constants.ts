import AddchartIcon from "@mui/icons-material/Addchart"
import FeedIcon from "@mui/icons-material/Feed"
import TableChartIcon from "@mui/icons-material/TableChart"

import type { Actions, ContentConfig } from "./_types"

export const CONTENT_CONFIG: ContentConfig = {
  chart: {
    minW: 3,
    minH: 2,
  },
  table: {
    minW: 3,
    minH: 2,
  },
  feed: {
    minW: 1,
    minH: 1,
  },
}

export const ACTIONS: Actions[] = [
  { icon: AddchartIcon, type: "chart", label: "차트" },
  { icon: TableChartIcon, type: "table", label: "테이블" },
  { icon: FeedIcon, type: "feed", label: "피드" },
]
