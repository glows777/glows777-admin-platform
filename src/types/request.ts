export interface CustomOptionsType {
  repeat_request_cancel: boolean
  loading: boolean
  concise_data_format: boolean
  error_message_show: boolean
  code_message_show: boolean
}

export interface ResponseType<T> {
  code: number
  message: string
  data: T
}
export interface LoadingOptionType {
  text?: string
  fullscreen?: boolean
  background?: string
  [key: string]: any
}
