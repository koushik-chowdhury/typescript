
# 📘 TypeScript Code Example

This documentation explains a basic TypeScript example, including variable declarations, typing, function usage, and module syntax.

---

## ✅ Code Sample

```ts
let greetings = 'Koushik chowdhury';

let age = 22.5;

console.log(`Hello, my name is ${greetings} and I am ${age} years old`);

// number
let userId: number = 12345;

// boolean
let isLoggedIn: boolean = true;

// avoiding any
let hero: string;

function getHero() {
    return 'Iron Man';
}

hero = getHero();

hero = 'My Crush is -----';

console.log(hero);

export { }
```

---

## 🔍 Code Breakdown

### 🔸 Variable: `greetings`

- **Type**: Inferred as `string`
- **Value**: `'Koushik chowdhury'`
- **Usage**: Used in a `console.log` statement with template literals.

---

### 🔸 Variable: `age`

- **Type**: Inferred as `number` (since `22.5` is a floating-point number).
- **Usage**: Included in the greeting message.

---

### 🔸 Template Literal

- Uses backticks (`` ` ``) to embed variables into a string.
- Example:
  ```ts
  `Hello, my name is ${greetings} and I am ${age} years old`
  ```

---

### 🔸 Variable: `userId`

- **Type**: Explicitly typed as `number`.
- **Value**: `12345`
- **Purpose**: Demonstrates static typing in TypeScript.

---

### 🔸 Variable: `isLoggedIn`

- **Type**: `boolean`
- **Value**: `true`
- **Use Case**: Used to represent login state.

---

### 🔸 Variable: `hero`

- **Type**: `string`
- **Initial Value**: Not assigned initially.
- **Later Assigned**: The return value of `getHero()`, which returns `'Iron Man'`.

---

### 🔸 Function: `getHero()`

- **Return Type**: Inferred as `string`
- **Returns**: `'Iron Man'`
- **Used For**: Assigning a string value to the `hero` variable.

---

### 🔸 Reassignment of `hero`

- Later in the code, `hero` is reassigned:
  ```ts
  hero = 'My Crush is -----';
  ```
- Since `hero` is a `string`, reassignment is allowed with another string.

---

### 🔸 Module Export

```ts
export { }
```

- This marks the file as a module.
- Prevents TypeScript from treating this file's variables as global.
- Important in larger applications for modularity.

---

## 💡 Summary of TypeScript Features Used

- **String Interpolation** with template literals.
- **Type Inference** vs **Explicit Typing**.
- **Primitive Types**: `string`, `number`, `boolean`.
- **Function Declaration and Return Type Inference**.
- **Reassignment and Type Safety**.
- **Module System** via `export`.

---

## 🛠 Recommended Tools

To run TypeScript properly:

### 🔹 Compile Using `tsc`

```bash
tsc filename.ts
node filename.js
```

### 🔹 Or Use `ts-node` (without manual compilation)

Install it globally:

```bash
npm install -g ts-node typescript
```

Then run:

```bash
ts-node filename.ts
```

---

## ✅ Best Practices Followed

- ✔️ Used type annotations where necessary.
- ✔️ Declared types explicitly for clarity (`userId`, `isLoggedIn`, `hero`).
- ✔️ Used `function` keyword for reusability.
- ✔️ Avoided `any` type, using `string` instead.
- ✔️ Exported module properly to avoid global scope issues.

---

## 📌 Final Notes

> TypeScript enhances JavaScript by adding static types.  
> It catches bugs at compile time and improves code maintainability.