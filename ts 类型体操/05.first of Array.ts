//使用ts实现获取数组第一项
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type head1 = First<arr1>;
type head2 = First<arr2>;
type t1 = First<[]>;