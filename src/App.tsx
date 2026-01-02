import GridLayout from "@/components/statistics-grid/grid-layout"
import { Box } from "@mui/material"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <GridLayout />
      </Box>
    </QueryClientProvider>
  )
}
