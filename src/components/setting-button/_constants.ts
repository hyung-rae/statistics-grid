import type { Actions } from "./_types"
import SaveIcon from "@mui/icons-material/Save"
import RestartAltIcon from "@mui/icons-material/RestartAlt"
import FeedIcon from "@mui/icons-material/Feed"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

export const ACTIONS: Actions[] = [
  { icon: SaveIcon, type: "save", label: "저장" },
  { icon: FeedIcon, type: "contents", label: "콘텐츠 추가" },
  { icon: RestartAltIcon, type: "reset", label: "초기화" },
  { icon: DeleteForeverIcon, type: "remove", label: "전체 삭제" },
]
