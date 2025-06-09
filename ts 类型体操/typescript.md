#### TypeScript核心基础面试题与答案
##### 1、为什么越来越多的企业选择使用TypeScript ？
（1）有利于代码的静态分析。
有了静态类型，不必运行代码，就可以确定变量的类型，从而推断代码有没有错误。这就叫做代码的静态分析。
这对于大型项目非常重要，单单在开发阶段运行静态检查，就可以发现很多问题，避免交付有问题的代码，大大降低了线上风险。
（2）有利于发现错误。

由于每个值、每个变量、每个运算符都有严格的类型约束，TypeScript 就能轻松发现拼写错误、语义错误和方法调用错误，节省程序员的时间。

（3）更好的 IDE 支持，做到语法提示和自动补全。
IDE（集成开发环境，比如 VSCode）一般都会利用类型信息，提供语法提示功能（编辑器自动提示函数用法、参数等）和自动补全功能（只键入一部分的变量名或函数名，编辑器补全后面的部分）。

（4）提供了代码文档。
类型信息可以部分替代代码文档，解释应该如何使用这些代码，熟练的开发者往往只看类型，就能大致推断代码的作用。借助类型信息，很多工具能够直接生成文档。

（5）有助于代码重构。

##### 2、TypeScript 中的原始类型有哪些 ？
JavaScript 语言（注意，不是 TypeScript）将值分成8种类型。

- boolean
- string
- number
- bigint
- symbol
- object
- undefined
- null

TypeScript 继承了 JavaScript 的类型设计，以上8种类型可以看作 TypeScript 的基本类型。

注意，上面所有类型的名称都是小写字母，首字母大写的Number、String、Boolean等在 JavaScript 语言中都是内置对象，而不是类型名称。

另外，undefined 和 null 既可以作为值，也可以作为类型，取决于在哪里使用它们。

这8种基本类型是 TypeScript 类型系统的基础，复杂类型由它们组合而成。

##### 3、说说数组在 TypeScript 中是如何工作的 ？
JavaScript 数组在 TypeScript 里面分成两种类型，分别是数组（array）和元组（tuple）。
TypeScript 数组有一个根本特征：所有成员的类型必须相同，但是成员数量是不确定的，可以是无限数量的成员，也可以是零成员。
```typescript
let arr:number[] = [1, 2, 3];
```
上面示例中，数组arr的类型是number[]，其中number表示数组成员类型是number。

##### 4、什么是 any 类型，何时使用 ？
any 类型表示没有任何限制，该类型的变量可以赋予任意类型的值。
```typescript
let x:any;
x = 1; // 正确
x = 'foo'; // 正确
x = true; // 正确
```
上面示例中，变量x的类型是any，就可以被赋值为任意类型的值。
变量类型一旦设为any，TypeScript 实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报错。
```typescript
let x:any = 'hello';
x(1) // 不报错
x.foo = 100; // 不报错
```
上面示例中，变量x的值是一个字符串，但是把它当作函数调用，或者当作对象读取任意属性，TypeScript 编译时都不报错。原因就是x的类型是any，TypeScript 不对其进行类型检查。

由于这个原因，应该尽量避免使用any类型，否则就失去了使用 TypeScript 的意义。

实际开发中，any类型主要适用以下两个场合。

（1）出于特殊原因，需要关闭某些变量的类型检查，就可以把该变量的类型设为any。

（2）为了适配以前老的 JavaScript 项目，让代码快速迁移到 TypeScript，可以把变量类型设为any。有些年代很久的大型 JavaScript 项目，尤其是别人的代码，很难为每一行适配正确的类型，这时你为那些类型复杂的变量加上any，TypeScript 编译时就不会报错。

总之，TypeScript 认为，只要开发者使用了any类型，就表示开发者想要自己来处理这些代码，所以就不对any类型进行任何限制，怎么使用都可以。

##### 5、什么是void，什么时候使用void类型 ？
void 类型表示函数没有返回值。
```typescript
function f():void {
  console.log('hello');
}
```
上面示例中，函数f没有返回值，类型就要写成void。
如果返回其他值，就会报错。
```typescript
function f():void {
  return 123; // 报错
}
```
上面示例中，函数f()的返回值类型是void，但是实际返回了一个数值，编译时就报错了。


##### 6、TypeScript 中声明变量有哪些不同的关键字？
在TypeScript中，变量声明是代码编写的基础部分。let、const、var 是三种用于变量声明的关键字，它们各自有不同的作用域规则和可变性特点。

##### 7、如何书写带有类型注释的函数 ？
TypeScript 直接处理 JS 文件时，如果无法推断出类型，会使用 JS 脚本里面的 JSDoc 注释。
使用 JSDoc 时，有两个基本要求。
（1）JSDoc 注释必须以/**开始，其中星号（*）的数量必须为两个。若使用其他形式的多行注释，则 JSDoc 会忽略该条注释。
（2）JSDoc 注释必须与它描述的代码处于相邻的位置，并且注释在上，代码在下。
```typescript
/**
 * @param {string} somebody
 */
function sayHello(somebody) {
  console.log('Hello ' + somebody);
}
```
上面示例中，注释里面的@param是一个 JSDoc 声明，表示下面的函数sayHello()的参数somebody类型为string。

@return，@returns
@return和@returns命令的作用相同，指定函数返回值的类型。
```typescript
/**
 * @return {boolean}
 */
function foo() {
  return true;
}
/**
 * @returns {number}
 */
function bar() {
  return 0;
}
```

##### 8、如何在 TypeScript 中创建对象 ？
除了原始类型，对象是 JavaScript 最基本的数据结构。TypeScript 对于对象类型有很多规则。

对象类型的最简单声明方法，就是使用大括号表示对象，在大括号内部声明每个属性和方法的类型。
```typescript
const obj:{
  x:number;
  y:number;
} = { x: 1, y: 1 };
```

##### 9、如何在 TypeScript 中指定可选属性 ？
如果某个属性是可选的（即可以忽略），需要在属性名后面加一个问号。
```typescript
const obj: {
  x: number;
  y?: number;
} = { x: 1 };
```
上面示例中，属性y是可选的。
可选属性等同于允许赋值为undefined，下面两种写法是等效的。
```typescript
type User = {
  firstName: string;
  lastName?: string;
};
// 等同于
type User = {
  firstName: string;
  lastName: string|undefined;
};
```
上面示例中，类型User的属性lastName可以是字符串，也可以是undefined，就表示该属性可以省略不写。

##### 10、说说枚举在 TypeScript 中是如何工作的 ？
Enum 结构的特别之处在于，它既是一种类型，也是一个值。绝大多数 TypeScript 语法都是类型语法，编译后会全部去除，但是 Enum 结构是一个值，编译后会变成 JavaScript 对象，留在代码中。
```typescript
// 编译前
enum Color {
  Red,     // 0
  Green,   // 1
  Blue     // 2
}
// 编译后
let Color = {
  Red: 0,
  Green: 1,
  Blue: 2
};
```
上面示例是 Enum 结构编译前后的对比。
由于 TypeScript 的定位是 JavaScript 语言的类型增强，所以官方建议谨慎使用 Enum 结构，因为它不仅仅是类型，还会为编译后的代码加入一个对象。

##### 11、什么是参数解构 ？
函数参数如果存在变量解构，类型写法如下。
```typescript
function f(
  [x, y]: [number, number]
) {
  // ...
}
function sum(
  { a, b, c }: {
     a: number;
     b: number;
     c: number
  }
) {
  console.log(a + b + c);
}
```
参数结构可以结合类型别名（type 命令）一起使用，代码会看起来简洁一些。

```typescript
type ABC = { a:number; b:number; c:number };
function sum({ a, b, c }:ABC) {
  console.log(a + b + c);
}
```

##### 12、说说TypeScript 中 for 循环的不同变体
TypeScript 中的 for 循环主要有以下几种变体：
1. 普通 for 循环：这是一种经典的循环结构，通常用于遍历数组、对象或直至某个条件满足为止。其基本格式为：
```typescript
for (初始化表达式; 条件表达式; 迭代表达式) {  
    // 循环体  
}
```
2. for-in 循环：主要用于遍历对象的属性，或者可以用来遍历数组的索引。其格式为：
```typescript
for (变量 in 对象) {  
    // 循环体  
}
```
3. for-of 循环：这是 ES6 引入的一种循环变体，用于遍历可迭代对象（如数组、字符串或集合）。其格式为：
```typescript
for (变量 of 可迭代对象) {  
    // 循环体  
}
```

##### 13、TypeScript 中控制成员可见性有几种方法 ？
- 公共（public）成员：在 TypeScript 中，类的成员默认是公共的。这意味着它们可以在类的外部被访问。你不需要使用任何关键字来明确指定一个成员是公共的，但如果你希望代码更清晰，你也可以显式地使用 public 关键字。

- 私有（private）成员：如果你希望某个成员只能在类的内部被访问，你可以使用 private 关键字。私有成员在类的外部是不可见的。

- 受保护的（protected）成员：protected 关键字与 private 类似，但有一点不同：受保护的成员在派生类（即子类）中也是可见的。这对于实现某些设计模式（如模板方法模式）非常有用。

##### 14、TypeScript 支持静态类吗 ？为什么 ？
在 TypeScript 中，并没有直接支持“静态类”这个概念。类本身实际上就是对象，可以在不创建实例的情况下访问其静态成员。如果你想要一个仅包含静态成员且不能被实例化的类，可以通过定义一个包含静态属性和静态方法的类来实现。例如：
```typescript
class StaticClass {
    private constructor() {}
    static staticMethod() {
        console.log('This is a static method.');
    }
    static staticProperty = 'This is a static property.';
}

StaticClass.staticMethod(); // Works
console.log(StaticClass.staticProperty); // Works
new StaticClass(); // Error: Constructor of class 'StaticClass' is private and only accessible within the class declaration.
```
在这个例子中，StaticClass 有一个私有的构造函数，这意味着你不能在类的外部使用 new 关键字来创建它的实例。同时，这个类包含了一些静态方法和静态属性，你可以在不创建实例的情况下直接访问它们‌

##### 15、TypeScript 的主要特点是什么？
TypeScript 可以看成是 JavaScript 的超集（superset），即它继承了后者的全部语法，所有 JavaScript 脚本都可以当作 TypeScript 脚本（但是可能会报错），此外它再增加了一些自己的语法。

TypeScript 对 JavaScript 添加的最主要部分，就是一个独立的类型系统。

##### 16、使用 TypeScript 有什么好处？
静态类型有很多好处，这也是 TypeScript 想要达到的目的。

（1）有利于代码的静态分析。

有了静态类型，不必运行代码，就可以确定变量的类型，从而推断代码有没有错误。这就叫做代码的静态分析。

这对于大型项目非常重要，单单在开发阶段运行静态检查，就可以发现很多问题，避免交付有问题的代码，大大降低了线上风险。

（2）有利于发现错误。

由于每个值、每个变量、每个运算符都有严格的类型约束，TypeScript 就能轻松发现拼写错误、语义错误和方法调用错误，节省程序员的时间。

```typescript
let obj = { message: '' };
console.log(obj.messege); // 报错
```

上面示例中，不小心把`message`拼错了，写成`messege`。TypeScript 就会报错，指出没有定义过这个属性。JavaScript 遇到这种情况是不报错的。

```typescript
const a = 0;
const b = true;
const result = a + b; // 报错
```

上面示例是合法的 JavaScript 代码，但是没有意义，不应该将数值`a`与布尔值`b`相加。TypeScript 就会直接报错，提示运算符`+`不能用于数值和布尔值的相加。

```typescript
function hello() {
  return 'hello world';
}

hello().find('hello'); // 报错
```

上面示例中，`hello()`返回的是一个字符串，TypeScript 发现字符串没有`find()`方法，所以报错了。如果是 JavaScript，只有到运行阶段才会报错。

（3）更好的 IDE 支持，做到语法提示和自动补全。

IDE（集成开发环境，比如  VSCode）一般都会利用类型信息，提供语法提示功能（编辑器自动提示函数用法、参数等）和自动补全功能（只键入一部分的变量名或函数名，编辑器补全后面的部分）。

（4）提供了代码文档。

类型信息可以部分替代代码文档，解释应该如何使用这些代码，熟练的开发者往往只看类型，就能大致推断代码的作用。借助类型信息，很多工具能够直接生成文档。

（5）有助于代码重构。

修改他人的 JavaScript 代码，往往非常痛苦，项目越大越痛苦，因为不确定修改后是否会影响到其他部分的代码。

类型信息大大减轻了重构的成本。一般来说，只要函数或对象的参数和返回值保持类型不变，就能基本确定，重构后的代码也能正常运行。如果还有配套的单元测试，就完全可以放心重构。越是大型的、多人合作的项目，类型信息能够提供的帮助越大。

综上所述，TypeScript 有助于提高代码质量，保证代码安全，更适合用在大型的企业级项目。这就是为什么大量 JavaScript 项目转成 TypeScript 的原因。

##### 17、TypeScript 的内置数据类型有哪些？
- boolean
- string
- number
- bigint
- symbol
- object
- undefined
- null

TypeScript 继承了 JavaScript 的类型设计，以上8种类型可以看作 TypeScript 的基本类型。

TypeScript提供了多种内置数据类型，以帮助开发者定义变量的类型，这些类型包括：

- Boolean：布尔值类型，用于表示逻辑上的真(true)或假(false)。
```typescript
let isDone: boolean = false;
```

- Number：数字类型，所有的数字，包括整数和浮点数，都用Number类型表示，支持十进制、十六进制、二进制和八进制字面量。
```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
- String：字符串类型，用于表示文本数据。可以使用双引号(" ")、单引号(' ')或者模板字符串(“)来定义字符串值。
```typescript
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
```
- Array：数组类型，可以在元素类型后面使用[]来表示变量是该类型的数组，或者使用泛型数组类型Array<元素类型>。
```typescript
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];
```
- Tuple：元组类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
```typescript
let x: [string, number];
x = ["hello", 10]; // 正确
```
- Enum：枚举类型，用于定义一组命名的常数。TypeScript的枚举可以是数字或字符串枚举。
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
- Any：任意类型，允许赋值为任意类型的值，是一种逃避类型检查的方法。
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
```
- Void：用于标识没有任何类型，通常用在没有返回值的函数的返回类型上。
```typescript
function warnUser(): void {
   console.log("This is my warning message");
}
```
- Null 和 Undefined：TypeScript里，null和undefined有各自的类型名为null和undefined。默认情况下，它们是所有类型的子类型，就是说你可以将null和undefined赋值给比如number类型的变量。
```typescript
let u: undefined = undefined;
let n: null = null;
```
- Never：表示那些永不存在的值的类型，例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回类型。
```typescript
function error(message: string): never {
    throw new Error(message);
}
```
- Object：表示非原始类型，即除number，string，boolean，symbol，null或undefined之外的类型。
```typescript
declare function create(o: object | null): void;
```


##### 18、TypeScript 目前的稳定版本是什么？
TypeScript的最新稳定版本是4.7。然而，TypeScript的开发团队经常发布新版本，每个新版本都会带来新的特性、改进和错误修复。为了获取最新的稳定版本信息，建议访问TypeScript的官方网站或其GitHub页面。

##### 19、TypeScript 中的接口是什么？
interface 是对象的模板，可以看作是一种类型约定，中文译为“接口”。使用了某个模板的对象，就拥有了指定的类型结构。
```typescript
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```
上面示例中，定义了一个接口Person，它指定一个对象模板，拥有三个属性firstName、lastName和age。任何实现这个接口的对象，都必须部署这三个属性，并且必须符合规定的类型。


##### 20、TypeScript 中的模块是什么？
任何包含 import 或 export 语句的文件，就是一个模块（module）。相应地，如果文件不包含 export 语句，就是一个全局的脚本文件。
模块本身就是一个作用域，不属于全局作用域。模块内部的变量、函数、类只在内部可见，对于模块外部是不可见的。暴露给外部的接口，必须用 export 命令声明；如果其他文件要使用模块的接口，必须用 import 命令来输入。

##### 21、后端如何使用TypeScript？
TypeScript不仅可以在前端开发中使用，也非常适合于后端开发。它可以帮助开发者构建更加健壮、易于维护的后端应用程序。使用TypeScript进行后端开发通常涉及以下几个方面：

- 使用Node.js和TypeScript
Node.js是一个流行的JavaScript运行时，使得可以在服务器端执行JavaScript代码。由于TypeScript最终会被编译成JavaScript，这意味着你可以使用TypeScript编写Node.js应用程序。这样做的好处是你可以利用TypeScript的类型系统来提高代码的质量和可维护性。

- 使用TypeScript与后端框架
有许多Node.js后端框架支持或易于与TypeScript集成，比如Express、NestJS、Koa等。这些框架提供了路由、中间件、控制器等概念，使得开发RESTful API和其他服务器端逻辑变得简单。
Express：虽然Express本身是用JavaScript编写的，但你可以使用@types/express包来获得Express的TypeScript类型定义，这使得在TypeScript项目中使用Express变得简单。
NestJS：NestJS是一个用TypeScript编写的框架，它提供了一个用于构建高效、可维护的服务器端应用程序的强大架构。NestJS天生支持TypeScript，是开箱即用的。
- 类型安全的数据库交互
在后端开发中，与数据库的交互是常见需求。使用TypeScript，你可以利用ORM（对象关系映射）工具，如TypeORM、Prisma等，这些工具提供了类型安全的方式来执行数据库操作。这意味着你可以在编译时捕获与数据库交互相关的错误，而不是在运行时。

- 利用类型系统进行更好的协作和维护
在大型项目或团队项目中，TypeScript的类型系统可以帮助开发者更好地理解和使用代码，减少沟通成本，提高开发效率。类型注解和接口可以作为文档，帮助新团队成员快速理解项目结构和业务逻辑。

##### 22、TypeScript 中的类型断言是什么？
TypeScript 提供了“类型断言”这样一种手段，允许开发者在代码中“断言”某个值的类型，告诉编译器此处的值是什么类型。TypeScript 一旦发现存在类型断言，就不再对该值进行类型推断，而是直接采用断言给出的类型。

这种做法的实质是，允许开发者在某个位置“绕过”编译器的类型推断，让本来通不过类型检查的代码能够通过，避免编译器报错。这样虽然削弱了 TypeScript 类型系统的严格性，但是为开发者带来了方便，毕竟开发者比编译器更了解自己的代码。
```typescript
type T = 'a'|'b'|'c';
let foo = 'a';
let bar:T = foo as T; // 正确
```
上面示例中，最后一行的foo as T表示告诉编译器，变量foo的类型断言为T，所以这一行不再需要类型推断了，编译器直接把foo的类型当作T，就不会报错了。


##### 23、如何在 TypeScript 中创建变量？
在 TypeScript 中创建变量主要有以下几种方式：

- 使用 let 关键字创建一个可变变量。例如，let myVariable: string = "Hello, World!"。这里 myVariable 是一个字符串类型的变量，初始值为 "Hello, World!"。

- 如果先声明再初始化，变量可以被显式地注解。例如，let message: string; 然后将其设置为 "Hello, TypeScript!"。

- 可以使用插件或全局变量定义文件（如 xxx.d.ts），通过这种方式定义全局变量。

##### 24、在TypeScript中如何从子类调用基类构造函数？
在TypeScript中，从子类调用基类构造函数可以使用super()关键字。子类构造函数必须首先调用super()，然后才能使用this关键字。这确保了基类的构造函数首先被调用，从而初始化基类的属性和方法。

##### 25、解释如何使用 TypeScript mixin？
在TypeScript中，mixin提供了一种灵活的方式来复用类的成员，而无需使用传统的继承。一个mixin是一个类，它提供了可以被其他类使用而不需要继承的方法和属性。使用mixin的主要目的是促进代码的复用。

要在TypeScript中实现mixin，你需要遵循几个步骤来组合一个或多个现有类的行为到一个新的类中。这里是一个基本的过程：
- 首先，你需要定义一个或多个mixin。Mixin通常作为一个实现了某些功能但不会被单独使用的类。
```typescript
class DisposableMixin {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}
 
class ActivatableMixin {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
```
- 需要一个助手函数，它将mixin的成员复制到目标类中。
```typescript
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
```
- 创建一个类，使用Mixin
```typescript
class SmartObject implements DisposableMixin, ActivatableMixin {
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
 
    interact() {
        this.activate();
    }
 
    // Mixin properties
    isDisposed: boolean = false;
    dispose: () => void;
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
 
applyMixins(SmartObject, [DisposableMixin, ActivatableMixin]);
```

##### 26、TypeScript 中如何检查 null 和 undefined？
- TypeScript 提供了一个编译选项strictNullChecks。只要打开这个选项，undefined和null就不能赋值给其他类型的变量（除了any类型和unknown类型）。
```typescript
// tsc --strictNullChecks app.ts
let age:number = 24;
age = null;      // 报错
age = undefined; // 报错
```
上面示例中，打开--strictNullChecks以后，number类型的变量age就不能赋值为undefined和null。

- 非空断言
对于那些可能为空的变量（即可能等于undefined或null），TypeScript 提供了非空断言，保证这些变量不会为空，写法是在变量名后面加上感叹号!。
```typescript
function f(x?:number|null) {
  validateNumber(x); // 自定义函数，确保 x 是数值
  console.log(x!.toFixed());
}
function validateNumber(e?:number|null) {
  if (typeof e !== 'number')
    throw new Error('Not a number');
}
```


##### 27、TypeScript 中的 getter/setter 是什么？你如何使用它们？
存取器（accessor）是特殊的类方法，包括取值器（getter）和存值器（setter）两种方法。
它们用于读写某个属性，取值器用来读取属性，存值器用来写入属性。
```typescript
class C {
  _name = '';
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
```
上面示例中，get name()是取值器，其中get是关键词，name是属性名。外部读取name属性时，实例对象会自动调用这个方法，该方法的返回值就是name属性的值。

set name()是存值器，其中set是关键词，name是属性名。外部写入name属性时，实例对象会自动调用这个方法，并将所赋的值作为函数参数传入。

##### 28、如何允许模块外定义的类可以访问？
任何包含 import 或 export 语句的文件，就是一个模块（module）。相应地，如果文件不包含 export 语句，就是一个全局的脚本文件。

模块本身就是一个作用域，不属于全局作用域。模块内部的变量、函数、类只在内部可见，对于模块外部是不可见的。暴露给外部的接口，必须用 export 命令声明；如果其他文件要使用模块的接口，必须用 import 命令来输入。

如果一个文件不包含 export 语句，但是希望把它当作一个模块（即内部变量对外不可见），可以在脚本头部添加一行语句。

```typescript
export {};
```
上面这行语句不产生任何实际作用，但会让当前文件被当作模块处理，所有它的代码都变成了内部代码。

ES 模块的详细介绍，请参考 ES6 教程，这里就不重复了。本章主要介绍 TypeScript 的模块处理。

TypeScript 模块除了支持所有 ES 模块的语法，特别之处在于允许输出和输入类型。
假设你有一个Person类在person.ts文件中定义，你想在其他文件中使用这个类，你可以这样导出Person类：
```typescript
// person.ts
export class Person {
    constructor(public name: string) {}
}
```
然后，在另一个文件中，你可以使用import语句导入Person类：
```typescript
// app.ts
import { Person } from './person';
const person = new Person("John Doe");
console.log(person.name); // 输出: John Doe
```

##### 29、如何使用 Typescript 将字符串转换为数字？
- 使用Number函数
```typescript
const str = "123";
const num = Number(str);
console.log(num); // 输出：123
```
- 使用一元加号操作符
```typescript
const str = "456";
const num = +str;
console.log(num); // 输出：456
```
- 使用parseInt和parseFloat
```typescript
const intStr = "789px";
const floatStr = "3.14moretext";
const intNum = parseInt(intStr, 10); // 第二个参数是基数，这里指定为10表示十进制
const floatNum = parseFloat(floatStr);
console.log(intNum); // 输出：789
console.log(floatNum); // 输出：3.14
```

##### 30、什么是 .map 文件，为什么/如何使用它？
1. ‌.map文件‌是一种映射文件，主要用于描述源代码与目标代码之间的映射关系。在TypeScript开发中，.map文件是源代码映射文件，提供转译后的代码与原始源代码之间的映射信息，使得在调试过程中可以将运行时的代码关联回原始的TypeScript源代码。在链接器生成的.map文件中，则记录了源代码与目标代码之间的地址映射关系，帮助定位程序中的问题。

2. .map文件的作用
- ‌调试友好‌：在TypeScript开发中，.map文件使得开发者可以直接在开发工具中调试TypeScript源代码，而不是转译后可能难以阅读和理解的JavaScript代码，大大提高了调试效率‌。
- ‌错误追踪‌：当运行时发生错误时，错误堆栈可以直接指向TypeScript源代码中的具体位置，而不是转译后的JavaScript代码，这使得定位和修复问题更加直观快捷‌。
- ‌程序调试‌：链接器生成的.map文件可以帮助开发人员定位程序中的问题，进行调试和修复。此外，它还可以用于代码审计、性能分析和版本控制‌。
- ‌内存优化‌：在STM32开发中，.map文件可以详细展示单个文件、函数及用户定义的全局变量占用的内存空间，帮助进行代码优化和程序优化‌。
3. 如何使用.map文件
‌TypeScript中的使用‌：在tsconfig.json配置文件中启用sourceMap选项，编译器会在编译TypeScript文件到JavaScript时为每个输出的JavaScript文件生成一个对应的.map文件。大多数现代浏览器的开发者工具都自动支持源代码映射，开发者可以直接在浏览器中调试TypeScript源代码‌。

##### 31、TypeScript 中的类是什么？你如何定义它们？
类（class）是面向对象编程的基本构件，封装了属性和方法，TypeScript 给予了全面支持。

定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）：

- 「字段」 ：字段是类里面声明的变量。字段表示对象的有关数据。
- 「构造函数」：类实例化时调用，可以为类的对象分配内存。
- 「方法」：方法为对象要执行的操作

```typescript
classCar{
  //字段
  engine:string;

  //构造函数
  constructor(engine:string){
    this.engine=engine
  }

  //方法
  disp():void{
    console.log("发动机为:"+this.engine)
  }
}
```

##### 32、TypeScript 与 JavaScript 有什么关系？
TypeScript（简称 TS）是微软公司开发的一种基于 JavaScript （简称 JS）语言的编程语言。

它的目的并不是创造一种全新语言，而是增强 JavaScript 的功能，使其更适合多人合作的企业级项目。

TypeScript 可以看成是 JavaScript 的超集（superset），即它继承了后者的全部语法，所有 JavaScript 脚本都可以当作 TypeScript 脚本（但是可能会报错），此外它再增加了一些自己的语法。

TypeScript 对 JavaScript 添加的最主要部分，就是一个独立的类型系统。

##### 33、TypeScript 中的 JSX 是什么？
JSX 是 React 库引入的一种语法，可以在 JavaScript 脚本中直接书写 HTML 风格的标签。

TypeScript 支持 JSX 语法，但是必须将脚本后缀名改成.tsx。

.tsx文件中，类型断言一律使用as形式，因为尖括号的写法会与 JSX 冲突。
```typescript
// 使用
var x = foo as any;
// 不使用
var x = <any>foo;
```

##### 34、TypeScript 支持哪些 JSX 模式？

jsx设置如何处理.tsx文件。它一般以下三个值。
- preserve：保持 jsx 语法不变，输出的文件名为 jsx。
- react：将<div />编译成React.createElement("div")，输出的文件名为.js。
- react-native：保持 jsx 语法不变，输出的文件后缀名为.js。


```javascript
{
  "compilerOptions": {
    "jsx": "preserve"
  }
}
```

##### 35、如何编译 TypeScript 文件？
tsc 是 TypeScript 官方的命令行编译器，用来检查代码，并将其编译成 JavaScript 代码。

tsc 默认使用当前目录下的配置文件tsconfig.json，但也可以接受独立的命令行参数。命令行参数会覆盖tsconfig.json，比如命令行指定了所要编译的文件，那么 tsc 就会忽略tsconfig.json的files属性。


##### 36、TypeScript 中有哪些范围可用？这与JS相比如何？
在TypeScript中，”范围”（Scope）的概念与JavaScript大体相同，因为TypeScript是JavaScript的超集，它遵循相同的作用域规则。作用域决定了变量和函数的可见性和生命周期。在TypeScript（和JavaScript）中，主要有以下几种作用域类型：

- 全局作用域
在代码的最外层定义的变量或函数处于全局作用域。全局作用域中的变量在代码的任何地方都是可见的。在浏览器环境中，全局作用域指的是window对象；在Node.js环境中，指的是global对象。

- 函数作用域
函数作用域是指在函数内部声明的变量或函数。这些变量只能在函数内部访问，无法从函数外部访问。这适用于使用var关键字声明的变量。

- 块级作用域
ES6（因此包括TypeScript）引入了块级作用域，通过let和const关键字声明的变量具有块级作用域，即这些变量仅在其声明的块（例如if语句、for循环）或子块内部可见。

- 模块作用域
在TypeScript中，模块（文件）本身就是一个作用域。在一个模块内部定义的变量、函数、类等，默认情况下是局部的，不会泄露到全局作用域。如果你想在一个模块外部访问另一个模块内的变量，你需要显式地export它们，并在使用它们的模块中import。

- TypeScript的特有范围
虽然TypeScript遵循JavaScript的作用域规则，但它还引入了类型系统和一些其他特性（如命名空间），这些特性不直接影响运行时的作用域，但在编译时提供了额外的封装和组织代码的方式。

- 类型作用域：TypeScript的类型声明（如接口、类型别名）在编译到JavaScript时会被删除，因此它们不占用运行时作用域。然而，在TypeScript文件中，它们有自己的“作用域”，用于类型检查和类型推导。
- 命名空间：TypeScript的命名空间是另一种封装代码的方式，可以避免全局作用域污染。虽然在ES6模块的背景下，命名空间的使用变得不那么常见，但它们在组织大型应用的代码时仍然有用。

总的来说，TypeScript在作用域方面紧密遵循JavaScript的规则，同时通过其类型系统和模块系统提供了额外的组织和封装代码的能力。这使得在大型项目中管理和维护代码更加容易。

##### 37、TypeScript 中的箭头/lambda 函数是什么？
箭头函数是普通函数的一种简化写法，它的类型写法与普通函数类似。
```typescript
const repeat = (
  str:string,
  times:number
):string => str.repeat(times);
```
上面示例中，变量`repeat`被赋值为一个箭头函数，类型声明写在箭头函数的定义里面。其中，参数的类型写在参数名后面，返回值类型写在参数列表的圆括号后面。



##### 38、解释rest参数和声明rest参数的规则。
rest 参数表示函数剩余的所有参数，它可以是数组（剩余参数类型相同），也可能是元组（剩余参数类型不同）。
```typescript
// rest 参数为数组
function joinNumbers(...nums:number[]) {
  // ...
}
// rest 参数为元组
function f(...args:[boolean, number]) {
  // ...
}
```


##### 39、什么是三斜线指令？有哪些三斜杠指令？
如果类型声明文件的内容非常多，可以拆分成多个文件，然后入口文件使用三斜杠命令，加载其他拆分后的文件。

举例来说，入口文件是main.d.ts，里面的接口定义在interfaces.d.ts，函数定义在functions.d.ts。那么，main.d.ts里面可以用三斜杠命令，加载后面两个文件。
```typescript
/// <reference path="./interfaces.d.ts" />
/// <reference path="./functions.d.ts" />
```
三斜杠命令（`///`）是一个 TypeScript 编译器命令，用来指定编译器行为。它只能用在文件的头部，如果用在其他地方，会被当作普通的注释。另外，若一个文件中使用了三斜线命令，那么在三斜线命令之前只允许使用单行注释、多行注释和其他三斜线命令，否则三斜杠命令也会被当作普通的注释。

除了拆分类型声明文件，三斜杠命令也可以用于普通脚本加载类型声明文件。

三斜杠命令主要包含三个参数，代表三种不同的命令。

- path
- types
- lib


##### 40、Omit类型有什么作用？
Omit<Type, Keys>用来从对象类型Type中，删除指定的属性Keys，组成一个新的对象类型返回。

```typescript
interface A {
  x: number;
  y: number;
}
type T1 = Omit<A, 'x'>;       // { y: number }
type T2 = Omit<A, 'y'>;       // { x: number }
type T3 = Omit<A, 'x' | 'y'>; // { }

Omit<Type, Keys>的实现如下。

>type Omit<T, K extends keyof any> 
  = Pick<T, Exclude<keyof T, K>>;
```

##### 41、TypeScript中如何实现函数重载？
有些函数可以接受不同类型或不同个数的参数，并且根据参数的不同，会有不同的函数行为。这种根据参数类型不同，执行不同逻辑的行为，称为函数重载（function overload）。

```typescript
function reverse(str:string):string;
function reverse(arr:any[]):any[];
function reverse(
  stringOrArray:string|any[]
):string|any[] {
  if (typeof stringOrArray === 'string')
    return stringOrArray.split('').reverse().join('');
  else
    return stringOrArray.slice().reverse();
}
```

上面示例中，前两行类型声明列举了重载的各种情况。第三行是函数本身的类型声明，它必须与前面已有的重载声明兼容。



##### 42、如何让接口的所有属性都可选？
1、定义一个基础接口，比如 Color 如下所示：
```typescript
interface Color {  
  value: string;  
  R: number;  
  G: number;  
  B: number;  
}
```
2、使用映射类型创建一个新的类型，让所有属性变成可选的：
```typescript
type OptionalColor = {  
  [P in keyof Color]?: Color[P];  
}  
```


##### 43、什么时候应该使用关键字unknown？
unknown可以看作是更安全的any。一般来说，凡是需要设为any类型的地方，通常都应该优先考虑设为unknown类型。

在集合论上，unknown也可以视为所有其他类型（除了any）的全集，所以它和any一样，也属于 TypeScript 的顶层类型。



##### 44、什么是装饰器，它们可以应用于什么？
装饰器（Decorator）是一种语法结构，用来在定义时修改类（class）的行为。
在语法上，装饰器有如下几个特征。
>（1）第一个字符（或者说前缀）是`@`，后面是一个表达式。
（2）`@`后面的表达式，必须是一个函数（或者执行后可以得到一个函数）。
（3）这个函数接受所修饰对象的一些相关值作为参数。
（4）这个函数要么不返回值，要么返回一个新对象取代所修饰的目标对象。

下面就是一个最简单的装饰器。
```typescript
function simpleDecorator() {
  console.log('hi');
}

@simpleDecorator
class A {} // "hi"
```