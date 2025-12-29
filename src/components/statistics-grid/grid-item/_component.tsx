import Contents from "@/components/contents"
import Select from "@/components/select"
import { CONTENTS, type CustomLayoutItem } from "@/types"
import DeleteIcon from "@mui/icons-material/Delete"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import LoopIcon from "@mui/icons-material/Loop"
import { Box, IconButton, Stack, type SelectChangeEvent } from "@mui/material"
import { useMemo } from "react"
import useSelectStatistics from "./_hooks/useSelectStatistics"

export type GridItemProps = CustomLayoutItem & {
  onDelete: () => void
  onReload: () => void
  onChangeType: (
    targetId: string,
    updateInfo: Partial<CustomLayoutItem>
  ) => void
}

const GridItem = ({
  i,
  type,
  subType,
  onDelete,
  onReload,
  onChangeType,
}: GridItemProps) => {
  const { data, dataList, handleChangeData } = useSelectStatistics(type)

  const chartList = useMemo(() => {
    return CONTENTS[type].map((item) => ({
      value: item,
      label: item,
    }))
  }, [type])

  const handleChangeContent = (event: SelectChangeEvent) => {
    onChangeType(i, {
      subType: event.target.value as typeof subType,
    })
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
        <Contents type={type} subType={subType} />
      </Stack>

      {["series", "distribution"].includes(type) && (
        <Box sx={{ width: "100px", ml: "auto" }}>
          <Select
            value={subType}
            options={chartList}
            onChange={handleChangeContent}
          />
        </Box>
      )}
    </Box>
  )
}

export default GridItem
