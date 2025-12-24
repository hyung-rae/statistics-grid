import { Box } from "@mui/material"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import GridLayout from "@/components/statistics-grid/grid-layout"

export default function App() {
  return (
    <div>
      <Box>
        <GridLayout />
      </Box>
    </div>
  )
}
