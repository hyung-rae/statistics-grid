import { useCallback, useEffect, useRef, useState } from "react"

type UseToggleStateProps = {
  initialValue?: boolean
  openCallback?: () => void
  closeCallback?: () => void
}

const useToggleState = ({
  initialValue = false,
  openCallback,
  closeCallback,
}: UseToggleStateProps = {}) => {
  const [state, setState] = useState(initialValue)

  const openCallbackRef = useRef(openCallback)
  const closeCallbackRef = useRef(closeCallback)

  const open = useCallback(() => {
    setState(true)
    openCallbackRef.current?.()
  }, [])

  const close = useCallback(() => {
    setState(false)
    closeCallbackRef.current?.()
  }, [])

  const toggle = useCallback(() => {
    setState((prev) => {
      if (prev) closeCallbackRef.current?.()
      else openCallbackRef.current?.()
      return !prev
    })
  }, [])

  useEffect(() => {
    openCallbackRef.current = openCallback
  }, [openCallback])

  useEffect(() => {
    closeCallbackRef.current = closeCallback
  }, [closeCallback])

  return [state, { open, close, toggle }] as const
}

export default useToggleState
export type UseToggleStateReturn = ReturnType<typeof useToggleState>
