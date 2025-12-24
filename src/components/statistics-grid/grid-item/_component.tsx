import FeedData from "@/components/contents/feed-data"
import LineChart from "@/components/contents/line-chart"
import PieChart from "@/components/contents/pie-chart"
import TableData from "@/components/contents/table-data"
import Select from "@/components/select"
import type { ContentType } from "@/types"
import { parseContentId } from "@/utils"
import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import LoopIcon from "@mui/icons-material/Loop"
import { Box, IconButton, Stack } from "@mui/material"
import type { ComponentType } from "react"
import type { LayoutItem } from "react-grid-layout"
import useSelectData from "./_hooks/useSelectData"

const CONTENT_COMPONENTS: Record<ContentType, ComponentType> = {
  series: LineChart,
  distribution: PieChart,
  table: TableData,
  feed: FeedData,
}

const renderContent = (type: ContentType) => {
  const ContentComponent = CONTENT_COMPONENTS[type]
  return <ContentComponent />
}

export interface GridItemProps extends LayoutItem {
  onDelete: () => void
  onReload: () => void
}

const GridItem = ({ i, onDelete, onReload }: GridItemProps) => {
  const { type } = parseContentId(i)
  const { data, dataList, handleChangeData } = useSelectData(type)

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
        {renderContent(type)}
      </Stack>
    </Box>
  )
}

export default GridItem
