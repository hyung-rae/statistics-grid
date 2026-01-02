import { useToggleState } from "@/hooks"
import type { CustomLayoutItem } from "@/types"
import CloseIcon from "@mui/icons-material/Close"
import SettingsIcon from "@mui/icons-material/Settings"
import { IconButton, Snackbar } from "@mui/material"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import { useState } from "react"
import SettingDialog from "../setting-dialog"
import { ACTIONS } from "./_constants"
import type { SettingButtonProps, SettingType } from "./_types"

const SettingButton = ({ onSave, onReset, onRemove, onAdd }: SettingButtonProps) => {
  const [message, setMessage] = useState("")
  const [isOpenSnackbar, { open: openSnackbar, close: closeSnackbar }] = useToggleState()
  const [isOpenSetting, { open: openSetting, close: closeSetting }] = useToggleState()

  const handleOpenSnackbar = (message?: string) => {
    setMessage(message || "")
    openSnackbar()
  }

  const handleClick = (type: SettingType) => {
    switch (type) {
      case "save":
        onSave()
        handleOpenSnackbar("저장 되었습니다.")
        break
      case "reset":
        onReset()
        break
      case "contents":
        openSetting()
        break
      case "remove":
        onRemove()
        handleOpenSnackbar("전체 컨텐츠가 삭제 되었습니다.")
        break
    }
  }

  const handleAddContent = (content: CustomLayoutItem) => {
    onAdd(content)
  }

  return (
    <>
      <Snackbar
        open={isOpenSnackbar}
        message={message}
        autoHideDuration={2000}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        onClose={closeSnackbar}
      />

      <SettingDialog
        open={isOpenSetting}
        close={closeSetting}
        handleAddContent={handleAddContent}
      />

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          zIndex: 1,
          width: "100%",
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <SpeedDial
          ariaLabel="setting button"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
          icon={<SettingsIcon />}
        >
          {ACTIONS.map((action) => {
            const Icon = action.icon
            return (
              <SpeedDialAction
                key={action.type}
                icon={<Icon />}
                slotProps={{
                  tooltip: {
                    title: action.label,
                  },
                }}
                onClick={() => handleClick(action.type)}
              />
            )
          })}
        </SpeedDial>
      </Box>
    </>
  )
}

export default SettingButton
