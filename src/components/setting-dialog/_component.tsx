import { contentsIconComponentMap } from "@/constants"
import { getStatisticsList } from "@/services/statisticsServices"
import type { ContentSubtypes, ContentType, CustomLayoutItem } from "@/types"
import { createContentId, getInitSubType } from "@/utils"
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

const SettingDialog = ({ open, close, handleAddContent }: SettingDialogProps) => {
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

          <CustomToggleButtonGroup exclusive color="primary" value={type} onChange={handleType}>
            <ContentButton title="line, bar, column" value="series" iconType="line" />

            <ContentButton title="pie, donut, radialBar" value="distribution" iconType="pie" />

            <ContentButton title="table" value="table" iconType="table" />

            <ContentButton title="feed" value="feed" iconType="feed" />
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

const ContentButton = ({
  title,
  value,
  iconType,
}: {
  title: string
  value: ContentType
  iconType: ContentSubtypes
}) => {
  const Icon = contentsIconComponentMap[iconType]

  return (
    <Tooltip followCursor placement="top" title={title}>
      <ToggleButton value={value}>
        <Icon />
      </ToggleButton>
    </Tooltip>
  )
}

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  justifyContent: "space-around",
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]: {
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
  },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]: {
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`,
  },
  [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled}, & .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]:
    {
      borderLeft: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`,
    },
}))
