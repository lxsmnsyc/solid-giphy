
export type ParamType<T> = T extends (props: infer U, ...args: any[]) => any
  ? U
  : never;