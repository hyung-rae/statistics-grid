import SettingButton from "@/components/setting-button"
import GridItem from "@/components/statistics-grid/grid-item"
import { Box, Card } from "@mui/material"
import ReactGridLayout from "react-grid-layout"
import { GRID_COLS, GRID_PADDING } from "./_constants"
import useHandleGrid from "./_hooks/useHandleGrid"

const GridLayout = () => {
  const {
    containerRef,
    mounted,
    width,
    layout,
    rowHeight,
    constraints,
    onLayoutChange,
    onAddContent,
    onDeleteContent,
    onChangeContent,
    saveLayout,
    resetLayout,
    removeLayout,
  } = useHandleGrid()

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
      <SettingButton
        onAdd={onAddContent}
        onSave={saveLayout}
        onReset={resetLayout}
        onRemove={removeLayout}
      />

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
          resizeConfig={{
            enabled: true,
            handles: ["sw", "se"],
          }}
          constraints={constraints}
          style={{ minHeight: "100vh" }}
          onLayoutChange={onLayoutChange}
        >
          {layout.map((item) => (
            <Card variant="outlined" key={item.i}>
              <GridItem
                {...item}
                onDelete={() => onDeleteContent(item.i)}
                onChangeContent={onChangeContent}
              />
            </Card>
          ))}
        </ReactGridLayout>
      )}
    </Box>
  )
}

export default GridLayout
