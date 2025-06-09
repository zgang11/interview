// 实现Trim 处理字符串前后的空格、换行
type Trim<S extends string> = 
  S extends `${' ' | '\n' | '\t'}${infer T}` | `${infer T}${' ' | '\n' | '\t'}` 
    ? Trim<T> 
    : S


type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
type c = Trim<'   \n\t foo bar \t'>  // 'foo bar'