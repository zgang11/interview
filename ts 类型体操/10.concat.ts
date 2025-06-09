//ts实现数组的concat功能
type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result = Concat<[1], [2]>;