import FeedIcon from "@mui/icons-material/Feed"
import PieChartIcon from "@mui/icons-material/PieChart"
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart"
import TableChartIcon from "@mui/icons-material/TableChart"
import type { Actions, ContentConfig } from "./_types"

export const CONTENT_CONFIG: ContentConfig = {
  series: {
    minW: 1,
    minH: 1,
  },
  distribution: {
    minW: 1,
    minH: 1,
  },
  table: {
    minW: 1,
    minH: 1,
  },
  feed: {
    minW: 1,
    minH: 1,
  },
}

export const ACTIONS: Actions[] = [
  { icon: StackedBarChartIcon, type: "series", label: "series" },
  { icon: PieChartIcon, type: "distribution", label: "distribution" },
  { icon: TableChartIcon, type: "table", label: "table" },
  { icon: FeedIcon, type: "feed", label: "feed" },
]
