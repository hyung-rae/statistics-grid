import Select from "@/components/select"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material"

type SettingDialogProps = {
  open: boolean
  close: () => void
}

const SettingDialog = ({ open, close }: SettingDialogProps) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={close}>
      <DialogTitle>Content Setting</DialogTitle>

      <DialogContent>
        <Stack direction="column" gap={1} sx={{ mt: 2, mb: 3 }}>
          <Typography variant="body1">Statistics Data</Typography>

          <Select options={[]} value="" onChange={() => {}} />
        </Stack>

        <Stack direction="column" gap={1}>
          <Typography variant="body1">Layout type</Typography>

          <Select options={[]} value="" onChange={() => {}} />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={close}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default SettingDialog
