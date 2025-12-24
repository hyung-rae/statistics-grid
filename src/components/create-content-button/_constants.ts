import FeedIcon from "@mui/icons-material/Feed"
import PieChartIcon from "@mui/icons-material/PieChart"
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart"
import TableChartIcon from "@mui/icons-material/TableChart"
import type { Actions, ContentConfig } from "./_types"

export const CONTENT_CONFIG: ContentConfig = {
  series: {
    minW: 3,
    minH: 2,
  },
  distribution: {
    minW: 2,
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
  { icon: StackedBarChartIcon, type: "series", label: "시리즈형 차트" },
  { icon: PieChartIcon, type: "distribution", label: "분포형 차트" },
  { icon: TableChartIcon, type: "table", label: "테이블" },
  { icon: FeedIcon, type: "feed", label: "피드" },
]
