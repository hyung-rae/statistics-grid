import axiosInstance from "@/services/axios"
import AxiosMockAdapter from "axios-mock-adapter"

export const mockAdapter = new AxiosMockAdapter(axiosInstance, {
  onNoMatch: "passthrough",
  delayResponse: 1000,
})
