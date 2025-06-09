// 实现 TS 中的 Omit 方法

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K extends keyof T> = {
  [R in keyof T as R extends K ? never: R ]: T[R]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>