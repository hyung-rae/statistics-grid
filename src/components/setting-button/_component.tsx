import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import SettingsIcon from "@mui/icons-material/Settings"
import { ACTIONS } from "./_constants"
import type { SettingType } from "./_types"

const SettingButton = ({
  onSave,
  onReset,
}: {
  onSave: () => void
  onReset: () => void
}) => {
  const handleClick = (type: SettingType) => {
    if (type === "save") {
      onSave()
      alert("save success")
      return
    }

    if (type === "reset") {
      onReset()
      alert("reset success")
      return
    }
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        width: "100%",
        height: 10,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="setting button"
        sx={{ position: "absolute", bottom: 16, left: 16 }}
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
  )
}

export default SettingButton
