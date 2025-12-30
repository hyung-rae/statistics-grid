import { Stack, Typography } from "@mui/material"

const FeedData = () => {
  return (
    <Stack
      justifyContent="center"
      gap={2.5}
      sx={{ width: "100%", height: "100%", px: 2 }}
    >
      <Stack gap={1} justifyContent="space-between">
        <Typography variant="body1">오늘 총 방문자 수</Typography>
        <Typography variant="h4">1,234 명</Typography>
      </Stack>

      <Stack justifyContent="space-between">
        <Typography variant="caption">어제 보다</Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          4 명 감소
        </Typography>
      </Stack>
    </Stack>
  )
}

export default FeedData
