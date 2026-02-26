---
title: 'Python for Dummies Pt.2: Arithmetic Operators'
timestamp: 2026-02-27T00:32:00
---

In my last post, I covered comparators, now we move on to arithemtic operators. You're familiar with the ones from math, but in Python, you have different symbols. The ones for `+` and `-` are the same but for multiplication we go from using x to \*, and for division we use the `/` or `//` symbol. We can also use the `**` to take something to the power of n.

Before we start, I wanted to introduce a way to format strings so that we can encode variables straight into the string. Take a look, it's pretty useful:

```plain
name = "Shariq"
age = 12

# Without an f-string (messy)
print("My name is " + name + " and I am " + str(age) + " years old.")

# With an f-string (clean and easy to read!)
print(f"My name is {name} and I am {age} years old.")
```

Now let's take a look at the arithmetic operators:

```plain
# Set up a couple of variables to use
x = 10
y = 3

# Addition (+)
addition = x + y
print(f"Addition: {x} + {y} = {addition}") 
# Output: Addition: 10 + 3 = 13

# Subtraction (-)
subtraction = x - y
print(f"Subtraction: {x} - {y} = {subtraction}") 
# Output: Subtraction: 10 - 3 = 7

# Multiplication (*)
multiplication = x * y
print(f"Multiplication: {x} * {y} = {multiplication}") 
# Output: Multiplication: 10 * 3 = 30

# Standard/Float Division (/) 
# This always returns a floating-point (decimal) number
standard_division = x / y
print(f"Standard Division: {x} / {y} = {standard_division}") 
# Output: Standard Division: 10 / 3 = 3.3333333333333335

# Floor/Integer Division (//)
# This divides the numbers and rounds down to the nearest whole number
floor_division = x // y
print(f"Floor Division: {x} // {y} = {floor_division}") 
# Output: Floor Division: 10 // 3 = 3

# Exponentiation / Power (**)
# This raises the first number to the power of the second number (10^3)
power = x ** y
print(f"Power: {x} ** {y} = {power}") 
# Output: Power: 10 ** 3 = 1000
```

With these in your toolkit, you've  now got the power to take on any calculator in the world and win! We'll take a look at lists in the next blogpost.
