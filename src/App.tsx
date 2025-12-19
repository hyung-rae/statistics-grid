import { Box, Container } from "@mui/material"
import { grey } from "@mui/material/colors"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

export default function App() {
  return (
    <Container maxWidth={false} sx={{ pt: "70px" }}>
      <Box
        sx={{
          height: "85vh",
          border: "1px solid",
          borderColor: grey[300],
          borderRadius: "4px",
        }}
      ></Box>
    </Container>
  )
}
