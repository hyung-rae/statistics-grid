import CreateContentButton from "@/components/create-content-button"
import GridItem from "@/components/statistics-grid/grid-item"
import { getStatisticsList } from "@/services/statisticsServices"
import { Box, Card } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
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
  } = useHandleGrid()

  const { data } = useQuery({
    queryKey: ["statistics"],
    queryFn: getStatisticsList,
  })

  // todo
  const onReload = async () => {}

  console.log(data)

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
      <CreateContentButton onAdd={onAddContent} />

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
                onDelete={() => onDeleteContent(item.i)}
                onChangeType={onChangeContent}
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
