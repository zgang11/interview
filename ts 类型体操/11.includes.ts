//判断元组是否存在相应的类型
type Includes<T extends any[], U> = U extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type isPillarMen1 = Includes<[1, 2, 3], 2>; // expected to be `false`