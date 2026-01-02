import { getStatisticsList } from "@/services/statisticsServices"
import type { ContentType, CustomLayoutItem } from "@/types"
import { createContentId, getInitSubType } from "@/utils"
import BallotIcon from "@mui/icons-material/Ballot"
import PieChartIcon from "@mui/icons-material/PieChart"
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart"
import TableChartIcon from "@mui/icons-material/TableChart"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  styled,
  ToggleButton,
  toggleButtonClasses,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  Tooltip,
  Typography,
  type SelectChangeEvent,
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import Select from "../select"

type SettingDialogProps = {
  open: boolean
  close: () => void
  handleAddContent: (content: CustomLayoutItem) => void
}

const SettingDialog = ({
  open,
  close,
  handleAddContent,
}: SettingDialogProps) => {
  const [type, setType] = useState<ContentType>("feed")
  const [data, setData] = useState<string>()

  const handleType = (_: React.MouseEvent<HTMLElement>, value: ContentType) => {
    setType(value)
    setData("")
  }

  const handleChangeData = (event: SelectChangeEvent) => {
    setData(event.target.value)
  }

  const { data: statisticsList } = useQuery({
    queryKey: ["statistics-list", type],
    queryFn: () =>
      getStatisticsList<{
        total: number
        list: { id: string; name: string }[]
      }>({ type }),
  })

  const optionList = useMemo(() => {
    const { list } = statisticsList ?? { list: [] }
    return list.map(({ id, name }) => ({ value: id, label: name }))
  }, [statisticsList])

  const createContent = () => {
    if (!data) return

    const content = {
      i: createContentId(),
      type,
      subType: getInitSubType(type),
      dataId: data,
      w: 1,
      h: 1,
    } as CustomLayoutItem

    handleAddContent(content)
    close()
  }

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={close}>
      <DialogTitle>콘텐츠 추가하기</DialogTitle>

      <DialogContent>
        <Stack direction="column" gap={2} sx={{ mt: 2, mb: 4 }}>
          <Typography variant="body1">통계 유형</Typography>

          <CustomToggleButtonGroup
            color="primary"
            value={type}
            exclusive
            onChange={handleType}
          >
            <Tooltip followCursor placement="top" title="line, bar, column">
              <ToggleButton value="series">
                <StackedBarChartIcon />
              </ToggleButton>
            </Tooltip>

            <Tooltip followCursor placement="top" title="pie, donut, circle">
              <ToggleButton value="distribution">
                <PieChartIcon />
              </ToggleButton>
            </Tooltip>

            <Tooltip followCursor placement="top" title="table">
              <ToggleButton value="table">
                <TableChartIcon />
              </ToggleButton>
            </Tooltip>

            <Tooltip followCursor placement="top" title="feed">
              <ToggleButton value="feed">
                <BallotIcon />
              </ToggleButton>
            </Tooltip>
          </CustomToggleButtonGroup>
        </Stack>

        <Stack direction="column" gap={2} sx={{ mt: 2, mb: 4 }}>
          <Typography variant="body1">통계 데이터</Typography>

          <Select
            value={data}
            options={optionList}
            onChange={handleChangeData}
            placeholder="데이터를 선택해주세요."
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>취소</Button>
        <Button onClick={createContent}>추가</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SettingDialog

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  justifyContent: "space-around",
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
    },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${
        (theme.vars || theme).palette.action.disabledBackground
      }`,
    },
}))
