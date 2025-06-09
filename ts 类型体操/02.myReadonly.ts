//使用ts实现获取readonly方法
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};