import type { ContentType } from "@/types"
import { createContentId } from "@/utils"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import { ACTIONS, CONTENT_CONFIG } from "./_constants"
import type { CreateItemButtonProps } from "./_types"

const CreateContentButton = ({ onAdd }: CreateItemButtonProps) => {
  const handleClick = (type: ContentType) => {
    const id = createContentId(type)
    onAdd(id, CONTENT_CONFIG[type].minW || 1, CONTENT_CONFIG[type].minH || 1)
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
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
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

export default CreateContentButton
