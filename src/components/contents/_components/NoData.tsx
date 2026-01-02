import Loading from "@/components/loading"
import { Stack, Typography } from "@mui/material"

const NoData = ({ isLoading = false }: { isLoading: boolean }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? <Loading /> : <Typography fontSize={15}>데이터가 없습니다.</Typography>}
    </Stack>
  )
}

export default NoData
