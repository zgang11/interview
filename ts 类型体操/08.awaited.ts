//通过此方法可以获取promise中的参数
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

type X = MyAwaited<Promise<string>>;
type Y = MyAwaited<Promise<{ field: number }>>;
type Z = MyAwaited<Promise<Promise<string | number>>>;