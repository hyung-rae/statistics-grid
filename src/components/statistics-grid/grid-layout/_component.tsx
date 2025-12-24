import CreateContentButton from "@/components/create-content-button"
import GridItem from "@/components/statistics-grid/grid-item"
import { Box, Card } from "@mui/material"
import ReactGridLayout from "react-grid-layout"
import { GRID_COLS, GRID_PADDING } from "./_constants"
import useGridLayout from "./_hooks/useGridLayout"

const GridLayout = () => {
  const {
    containerRef,
    mounted,
    width,
    layout,
    rowHeight,
    constraints,
    onAdd,
    onLayoutChange,
    onDelete,
    onChangeType,
  } = useGridLayout()

  // todo
  const onReload = () => {}

  return (
    <Box
      ref={containerRef}
      sx={{
        minWidth: "1200px",
        height: "100vh",
        overflowY: "scroll",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}
    >
      <CreateContentButton onAdd={onAdd} />

      {mounted && (
        <ReactGridLayout
          width={width}
          layout={layout}
          gridConfig={{
            cols: GRID_COLS,
            rowHeight,
            containerPadding: [GRID_PADDING, GRID_PADDING],
          }}
          dragConfig={{ enabled: true, handle: "#handle" }}
          constraints={constraints}
          style={{ minHeight: "100vh" }}
          onLayoutChange={onLayoutChange}
        >
          {layout.map((item) => (
            <Card variant="outlined" key={item.i}>
              <GridItem
                {...item}
                onDelete={() => onDelete(item.i)}
                onChangeType={onChangeType}
                onReload={onReload}
              />
            </Card>
          ))}
        </ReactGridLayout>
      )}
    </Box>
  )
}

export default GridLayout
