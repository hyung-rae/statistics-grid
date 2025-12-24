import LineChart from "@/components/line-chart"
import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import LoopIcon from "@mui/icons-material/Loop"
import { Box, IconButton, MenuItem, Select, Stack } from "@mui/material"
import type { LayoutItem } from "react-grid-layout"

export interface GridItemProps extends LayoutItem {
  onDelete: () => void
  onReload: () => void
}

const GridItem = ({ onDelete, onReload }: GridItemProps) => {
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
      <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
        <IconButton
          id="handle"
          size="small"
          sx={{
            mr: "auto !important",
            cursor: "grab !important",
          }}
        >
          <DragIndicatorIcon fontSize="inherit" />
        </IconButton>

        <IconButton size="small" onClick={onReload}>
          <LoopIcon fontSize="inherit" />
        </IconButton>

        <IconButton size="small" onClick={onDelete}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
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
        <LineChart />
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        sx={{ justifyContent: "space-between" }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          size="small"
        >
          <MenuItem value={10}>Line</MenuItem>
          <MenuItem value={20}>Bar</MenuItem>
          <MenuItem value={30}>Column</MenuItem>
        </Select>
      </Stack>
    </Box>
  )
}

export default GridItem
