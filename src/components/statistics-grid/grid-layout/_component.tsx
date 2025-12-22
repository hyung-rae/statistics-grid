import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import LoopIcon from "@mui/icons-material/Loop"
import { Card, IconButton, MenuItem, Select, Stack } from "@mui/material"
import { useMemo } from "react"
import ReactGridLayout, {
  useContainerWidth,
  type LayoutItem,
} from "react-grid-layout"
import { aspectRatio, gridBounds, minMaxSize } from "react-grid-layout/core"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import classes from "./_style.module.css"
import LineChart from "../../line-chart"

export default function GridLayout() {
  const { width, containerRef, mounted } = useContainerWidth()

  const ratio16x9 = useMemo(() => [aspectRatio(16 / 9)], [])
  const ratio1x1 = useMemo(() => [aspectRatio(1)], [])

  const gridConstraints = useMemo(() => [gridBounds, minMaxSize], [])

  const layout: LayoutItem[] = [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 5,
      h: 9,
      minW: 5,
      maxW: 12,
      maxH: 20,
      constraints: ratio16x9,
    },
  ]

  return (
    <div ref={containerRef} className={classes.grid_container}>
      {mounted && (
        <ReactGridLayout
          className={classes.grid_layout}
          width={width}
          layout={layout}
          gridConfig={{ cols: 12, rowHeight: 30, containerPadding: [50, 50] }}
          dragConfig={{ enabled: true, handle: "#handle" }}
          constraints={gridConstraints}
        >
          {layout.map((item) => (
            <Card variant="outlined" key={item.i} className={classes.grid_item}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "flex-end" }}
              >
                <IconButton
                  id="handle"
                  aria-label="delete"
                  size="small"
                  className={classes.handle}
                >
                  <DragIndicatorIcon fontSize="inherit" />
                </IconButton>

                <IconButton aria-label="delete" size="small">
                  <LoopIcon fontSize="inherit" />
                </IconButton>

                <IconButton aria-label="delete" size="small">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Stack>

              <div className={classes.content}>
                <LineChart />
              </div>

              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "flex-end" }}
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
            </Card>
          ))}
        </ReactGridLayout>
      )}
    </div>
  )
}
