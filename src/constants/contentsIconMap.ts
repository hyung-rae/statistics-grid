import type { ContentSubtypes } from "@/types"
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft"
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom"
import BallotIcon from "@mui/icons-material/Ballot"
import DonutLargeIcon from "@mui/icons-material/DonutLarge"
import PieChartIcon from "@mui/icons-material/PieChart"
import SsidChartIcon from "@mui/icons-material/SsidChart"
import TableChartIcon from "@mui/icons-material/TableChart"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import type { SvgIconProps } from "@mui/material"
import type { ComponentType } from "react"

export const contentsIconComponentMap: Record<ContentSubtypes, ComponentType<SvgIconProps>> = {
  // Series charts
  line: SsidChartIcon,
  bar: AlignHorizontalLeftIcon,
  column: AlignVerticalBottomIcon,
  // Distribution charts
  pie: PieChartIcon,
  donut: DonutLargeIcon,
  radialBar: TrackChangesIcon,
  // Table
  table: TableChartIcon,
  // Feed
  feed: BallotIcon,
}
