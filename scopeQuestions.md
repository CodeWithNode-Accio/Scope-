**JavaScript Scope Concepts – Multiple Choice Questions**

---

**Question 1:**

What will be the output of the following code?

```javascript
function testScope() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
testScope();
```

A) `2` and `2`  
B) `2` and `1`  
C) `1` and `2`  
D) `1` and `1`  

---

**Question 2:**

What will be the output of the following code?

```javascript
function testScope() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
testScope();
```

A) `2` and `1`  
B) `1` and `2`  
C) `2` and `2`  
D) `1` and `1`  

---



**Question 5:**

What will be logged to the console?

```javascript
function hello() {
    var x = y = 1;
} hello();
console.log(typeof x);
console.log(typeof y);
```

A) `"undefined"` and `"undefined"`  
B) `"number"` and `"number"`  
C) `"undefined"` and `"number"`  
D) `"number"` and `"undefined"`  

---

**Question 6:**

What will be the output of the following code?

```javascript
var x = 10;
function foo() {
    console.log(x);
    var x = 20;
    console.log(x);
}
foo();
```

A) `10` and `20`  
B) `undefined` and `20`  
C) `10` and `10`  
D) `undefined` and `undefined`  

---

**Question 7:**

What will be the output when the following code is executed?

```javascript
var x = 1;
function outer() {
    var x = 2;
    function inner() {
        x++;
        var x = 3;
        console.log(x);
    }
    inner();
}
outer();
```

A) `3`  
B) `4`  
C) `ReferenceError`  
D) `NaN`  

---

**Question 8:**

What will be the output of the following code?

```javascript
var x = 5;
function hello() {
    console.log(x);
    var x = 10;
    console.log(x);
} hello();
```

A) `5` and `10`  
B) `undefined` and `10`  
C) `undefined` and `undefined`  
D) `10` and `10`  

---

**Question 9:**

What will be the output of the following code?

```javascript
{
    let a = 10;
    {
        const a = 20;
        console.log(a);
    }
    console.log(a);
}
```

A) `20` and `10`  
B) `10` and `20`  
C) `20` and `20`  
D) `10` and `10`  

---

**Question 10:**

What will happen when the following code is executed?

```javascript
function foo() {
    console.log(bar);
    let bar = 10;
}
foo();
```

A) Logs `10`  
B) Logs `undefined`  
C) Throws a `ReferenceError`  
D) Throws a `Cannot Access before initilization`  

