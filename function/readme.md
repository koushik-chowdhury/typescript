# TypeScript Code Explanation

## Overview

This code demonstrates TypeScript's type system, showing both problematic code using implicit `any` types and corrected versions with proper type annotations.

## Functions

### 1. `add` (Problematic Example)

```typescript
function add(num) {
  return num.toUpperCase() + 2;
}
let result = add("kc2");
console.log(result);
```

### `Issues`:

- Implicit any type for num parameter
- Runtime error risk: toUpperCase() called without type checking
- Returns "KC22" (string concatenation instead of numeric addition)

### 2. `add` (Corrected Example)

```typescript
function add(num: number) {
  return num + 10;
}
let value = add(10);
console.log(value);
```

### `Improvements`:

- Explicit number type parameter
- Type-safe numeric operation

### 3. `signUpUser` (Problematic Any Usage)

```typescript
function signUpUser(name, email, password) {
  return { name, email, password };
}
let user = signUpUser(1, 2, 3);
console.log(typeof user.email);
```

### `Issues`:

- All parameters implicitly any
- No type validation for user data

### 5. `signUpUserAgain` (Type-Safe Version)

```typescript
function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {
  return { name, email, password, isPaid };
}
let user = signUpUser('Koushik Chowdhury','csakoushik@gmail.com','hello1324'true)
console.log(user)
console.log(user.name)
```

### `Improvements`:

- Strict parameter typing
- Returns properly typed user object


### 6. `loginUser` (Arrow Function with Default)
```typescript
let loginUser = (
    name: string,
    email: string,
    isPaid: boolean = false
) => {
    return { name, email, isPaid }
}
```
### `Features`:

- Default parameter value
- Arrow function syntax with types
- Optional isPaid with default

## `Key Learnings`
- **Always avoid implicit any types**
- **Type annotations prevent runtime errors**
- **Default parameters enhance function flexibility**
- **TypeScript catches type mismatches at compile-time**