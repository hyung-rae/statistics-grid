import ConfirmDialog from "@/components/confirm-dialog"
import Contents from "@/components/contents"
import SettingDialog from "@/components/setting-dialog"
import { type CustomLayoutItem } from "@/types"
import CloseIcon from "@mui/icons-material/Close"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import { Box, IconButton, Stack } from "@mui/material"
import { useState } from "react"

export type GridItemProps = CustomLayoutItem & {
  onDelete: () => void
  onChangeType: (
    targetId: string,
    updateInfo: Partial<CustomLayoutItem>
  ) => void
}

const GridItem = ({ subType, onDelete }: GridItemProps) => {
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false)
  const [openSettingDialog, setOpenSettingDialog] = useState(false)

  return (
    <>
      <SettingDialog
        open={openSettingDialog}
        close={() => setOpenSettingDialog(false)}
      />

      <ConfirmDialog
        title="Are you sure you want to delete this content?"
        content="Once deleted, it cannot be recovered."
        open={openDeleteConfirm}
        close={() => setOpenDeleteConfirm(false)}
        confirm={onDelete}
      />

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

          <IconButton size="small" onClick={() => setOpenDeleteConfirm(true)}>
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
          <Contents subType={subType} data={[]} />
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "flex-end" }}></Stack>
      </Box>
    </>
  )
}

export default GridItem
