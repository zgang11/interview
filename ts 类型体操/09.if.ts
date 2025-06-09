//如果是正确就返回第二个，如果错误则返回第三个
type If<U extends Boolean, K extends any , T extends any> = U extends true ? K : T
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'