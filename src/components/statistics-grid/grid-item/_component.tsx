import Contents from "@/components/contents"
import { type CustomLayoutItem } from "@/types"
import CloseIcon from "@mui/icons-material/Close"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import { Box, IconButton, Stack } from "@mui/material"

export type GridItemProps = CustomLayoutItem & {
  onDelete: () => void
  onChangeContent: (
    targetId: string,
    updateInfo: Partial<CustomLayoutItem>
  ) => void
}

const GridItem = ({
  apiUrl,
  subType,
  onDelete,
  onChangeContent,
}: GridItemProps) => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <IconButton
            id="handle"
            size="small"
            sx={{
              cursor: "grab !important",
              "&:active": { cursor: "grabbing !important" },
            }}
          >
            <DragIndicatorIcon fontSize="inherit" />
          </IconButton>

          <IconButton size="small" onClick={onDelete}>
            <CloseIcon fontSize="inherit" />
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
          <Contents
            subType={subType}
            apiUrl={apiUrl}
            onChangeContent={onChangeContent}
          />
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "flex-end" }}></Stack>
      </Box>
    </>
  )
}

export default GridItem
