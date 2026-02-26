---
title: 'Python for Dummies Pt.1: Comparator Refresher'
timestamp: 2026-02-26T23:48:00
---

Dear Shariq,

I challenge you to read through this article if you think you are literate enough. You probably know by now how to print strings with the `print()` function and compare two variables against. Just to refresh your mind on it I'll write out an example of some code that uses the comparators. Lines starting with the `#` symbol are comments - meaning they aren't executed. This is useful for describing what a line does to other people reading your code or even yourself when you come back to read it again in the future.

```python
# let's declare some variables 
a = 1
b = 1

# the '==' symbol checks if two variables are equal to one another. 
print(a==b) # prints True
c = (a==b) # stores the value of (a==b) into c
print(c) # prints True

# the < symbol checks if something is less than the other
# a good way to remember how this works is to imagine the open mouth pointing to the greater value
print(a < b) # prints False since a is not less than b

# and vice versa for the > symbol
print(a > b) # checks if a is greater than b 

# this last symbol is a little tricky: the '<=' symbol
# it checks if something is either less than OR equal to the other value
print(a <= b) # prints True. can you explain why?
```

Alright, that concludes our lesson on the comparator symbols. Try running them in  **PyCharm** and report to me what you find.

For our next lesson, we'll look at for **arithmetic** symbols.
