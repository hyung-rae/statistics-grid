import AddchartIcon from "@mui/icons-material/Addchart"
import FeedIcon from "@mui/icons-material/Feed"
import TableChartIcon from "@mui/icons-material/TableChart"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import type { JSX } from "react"
import { v4 as uuidv4 } from "uuid"
import { ITEM_CONFIG, type ItemType } from "./_constants"

export interface CreateItemButtonProps {
  onAdd: (i: string, minW: number, minH: number) => void
}

type Actions = {
  icon: JSX.Element
  name: ItemType
  label: string
}

const actions: Actions[] = [
  { icon: <AddchartIcon />, name: "chart", label: "차트" },
  { icon: <TableChartIcon />, name: "table", label: "테이블" },
  { icon: <FeedIcon />, name: "feed", label: "피드" },
]

export default function CreateItemButton({ onAdd }: CreateItemButtonProps) {
  const handleClick = (name: ItemType) => {
    const item = ITEM_CONFIG[name]
    if (!item) return

    onAdd(`${item.id}:${uuidv4()}`, item.minW, item.minH)
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
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.label,
              },
            }}
            onClick={() => handleClick(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
