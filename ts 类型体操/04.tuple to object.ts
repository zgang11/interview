//使用ts实现将元组转换成对象的形式
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
type result = TupleToObject<typeof tuple>;