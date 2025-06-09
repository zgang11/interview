//extends前面T是泛型会进行分发
type MyExclude<T, V> = T extends V ? never : T;

//相当于 ('a' extends 'a'|'c' ? never : 'a') | ('b' extends 'a'|'c' ? never : 'b')
//普通字面量不会进行分发  'a'|'b' extends 'a'|'c' ? 1 : 2   //2
type a = MyExclude<"a" | "b", "a" | "c">;