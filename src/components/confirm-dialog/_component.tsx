import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import { type JSX } from "react"

type ConfirmDialogProps = {
  open: boolean
  title?: string | JSX.Element
  content?: string | JSX.Element
  close: () => void
  confirm: () => void
}

const ConfirmDialog = ({
  title,
  content,
  open,
  close,
  confirm,
}: ConfirmDialogProps) => {
  const handleConfirm = () => {
    confirm()
    close()
  }

  return (
    <Dialog onClose={close} open={open}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>
        <Button onClick={close}>취소</Button>
        <Button onClick={handleConfirm}>확인</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
