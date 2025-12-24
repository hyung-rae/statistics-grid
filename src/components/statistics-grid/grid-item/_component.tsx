import BarChart from "@/components/contents/bar-chart"
import CircleChart from "@/components/contents/circle-chart"
import ColumnChart from "@/components/contents/column-chart"
import DonutChart from "@/components/contents/donut-chart"
import FeedData from "@/components/contents/feed-data"
import LineChart from "@/components/contents/line-chart"
import PieChart from "@/components/contents/pie-chart"
import TableData from "@/components/contents/table-data"
import Select from "@/components/select"
import type { CHART_GROUPS, ContentSubType, ContentType } from "@/types"
import { parseContentId } from "@/utils"
import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import LoopIcon from "@mui/icons-material/Loop"
import { Box, IconButton, Stack } from "@mui/material"
import { useState, type ComponentType } from "react"
import type { LayoutItem } from "react-grid-layout"
import useSelectStatistics from "./_hooks/useSelectStatistics"
import type { SelectChangeEvent } from "node_modules/@mui/material"

type ContentComponents = {
  [K in keyof typeof CHART_GROUPS]: {
    [S in (typeof CHART_GROUPS)[K][number]]: ComponentType
  }
}

const CONTENT_COMPONENTS: ContentComponents = {
  series: {
    line: LineChart,
    bar: BarChart,
    column: ColumnChart,
  },
  distribution: {
    pie: PieChart,
    donut: DonutChart,
    circle: CircleChart,
  },
  table: {
    default: TableData,
  },
  feed: {
    default: FeedData,
  },
}

const renderContent = <T extends ContentType>(
  type: T,
  subType: (typeof CHART_GROUPS)[T][number]
) => {
  const ContentComponent = CONTENT_COMPONENTS[type][
    subType as keyof (typeof CONTENT_COMPONENTS)[T]
  ] as ComponentType
  return <ContentComponent />
}

export interface GridItemProps extends LayoutItem {
  onDelete: () => void
  onReload: () => void
  onChangeType: (preId: string, nextId: string) => void
}

const GridItem = ({ i, onDelete, onReload, onChangeType }: GridItemProps) => {
  const { type, subType, uuid } = parseContentId(i)
  const { data, dataList, handleChangeData } = useSelectStatistics(type)

  const [chart, setChart] = useState(subType)
  const handleChangeChart = (event: SelectChangeEvent) => {
    setChart(event.target.value as ContentSubType)

    const nextId = `${type}:${event.target.value}:${uuid}`
    onChangeType(i, nextId)
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: 0,
        }}
      >
        <IconButton id="handle" size="small" sx={{ cursor: "grab !important" }}>
          <DragIndicatorIcon fontSize="inherit" />
        </IconButton>

        <Box sx={{ flex: 1, maxWidth: "500px", minWidth: 0, px: "10px" }}>
          <Select value={data} options={dataList} onChange={handleChangeData} />
        </Box>

        <Stack direction="row">
          <IconButton size="small" onClick={onReload}>
            <LoopIcon fontSize="inherit" />
          </IconButton>

          <IconButton size="small" onClick={onDelete}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          py: "5px",
        }}
      >
        {renderContent(type, subType)}
      </Stack>

      <Box sx={{ width: "100px", ml: "auto" }}>
        <Select
          value={chart}
          options={[
            {
              value: "line",
              label: "line",
            },
            {
              value: "column",
              label: "column",
            },
            {
              value: "bar",
              label: "bar",
            },
          ]}
          onChange={handleChangeChart}
        />
      </Box>
    </Box>
  )
}

export default GridItem
