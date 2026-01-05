import Contents from "@/components/contents"
import { contentsIconComponentMap } from "@/constants"
import { CONTENTS, type ContentSubtypes, type CustomLayoutItem } from "@/types"
import CloseIcon from "@mui/icons-material/Close"
import DragIndicatorIcon from "@mui/icons-material/DragIndicator"
import { Box, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useMemo } from "react"

export type GridItemProps = CustomLayoutItem & {
  onDelete: () => void
  onChangeContent: (targetId: string, updateInfo: Partial<CustomLayoutItem>) => void
}

const GridItem = ({ i, dataId, type, subType, onDelete, onChangeContent }: GridItemProps) => {
  const options = useMemo(() => {
    return CONTENTS[type].map((subType) => {
      const IconComponent = contentsIconComponentMap[subType]
      return {
        label: subType,
        value: subType,
        icon: <IconComponent fontSize="small" />,
      }
    })
  }, [type])

  const onChangeChartType = (_: React.MouseEvent<HTMLElement>, value: ContentSubtypes) => {
    if (!value) return
    onChangeContent(i, { subType: value })
  }

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
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
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

          <ToggleButtonGroup
            exclusive
            color="primary"
            value={subType}
            onChange={onChangeChartType}
            sx={{ mr: "auto" }}
          >
            {options.map((option) => (
              <ToggleButton
                key={option.value}
                value={option.value}
                sx={{ width: "30px", height: "30px" }}
              >
                {option.icon}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

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
            pt: "10px",
          }}
        >
          <Contents subType={subType} dataId={dataId} />
        </Stack>
      </Box>
    </>
  )
}

export default GridItem
