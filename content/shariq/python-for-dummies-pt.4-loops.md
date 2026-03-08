---
title: 'Python for Dummies Pt.4: Loops'
timestamp: 2026-03-08T16:14:00
---

In the last post, we figured out how to shove all your data into a List so it isn't scattered all over your script. But if you have a list of 100 things and want to print every single one, writing `print(list[0])`, `print(list[1])`, `print(list[2])` is a miserable way to spend your afternoon. 

Computers are incredibly dumb, but they are very fast. **Loops** are how we force the computer to do the repetitive, boring work for us.

---

### 1. The `for` Loop (The List Consumer)
A `for` loop goes through a list, one item at a time, and does whatever you tell it to do with that item. It doesn't complain. It doesn't ask for a break.

```python
games = ["Minecraft", "Roblox", "Elden Ring"]

# "game" is just a temporary variable name we made up for the current item
for game in games:
    print(f"Booting up {game}...")
    
print("All games loaded. Try not to rage quit.")

```

**What it actually does:** Python looks at the list, grabs "Minecraft", runs the code block. Then it grabs "Roblox", runs the code block. It keeps going until the list is empty.

---

### 2. The `range()` Function (Doing things X amount of times)

Sometimes you don't have a list. You just want to annoy someone by doing the exact same thing 5 times in a row. That’s where `range()` comes in.

```python
# Remember, Python starts counting at 0. 
# So range(5) will count: 0, 1, 2, 3, 4.

for i in range(5):
    print(f"Warning #{i}: Shariq, clean your room.")

```

If you don't use loops for this kind of stuff, you are basically just using a thousand-dollar machine as a typewriter.

---

### 3. The `while` Loop (The "Are we there yet?" loop)

A `for` loop stops when it reaches the end of a list or a range. A `while` loop is more stubborn. It will keep running its code block over and over again *until a specific condition becomes False*.

```python
player_hp = 3

while player_hp > 0:
    print(f"You have {player_hp} HP. You take a hit!")
    # Subtract 1 from HP every time the loop runs
    player_hp = player_hp - 1 

print("You have 0 HP. Game Over.")

```

> **CRITICAL RULE:** If you forget to actually change the condition inside a `while` loop (like forgetting to subtract the HP), the loop will literally run forever until your computer runs out of memory and crashes. This is called an **infinite loop**, and yes, you will accidentally write one eventually.

---

### The Cheat Sheet

| Loop Type | When to actually use it |
| --- | --- |
| **`for` loop** | When you know exactly how many times you want to run the code (like going through a list of 5 items). |
| **`while` loop** | When you don't know how long it will take, but you know when it should stop (like waiting for a player's health to hit 0). |

Now you know how to automate your code. Next time, we’ll look at **If/Else Statements**, which is how we actually teach the computer to make a decision instead of just blindly running whatever we type.
