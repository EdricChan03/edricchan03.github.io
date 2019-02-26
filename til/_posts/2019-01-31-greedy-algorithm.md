---
layout: post
title: "TIL: The greedy algorithm"
tags:
  - python
  - algorithm
categories:
  - algorithm
author: edric_chan
---

Today I Learned about the [Greedy Algorithm](https://brilliant.org/wiki/greedy-algorithm/), which can be used to calculate the minimum elements required from a list that will sum up to a number.

For example:

```python
# An integer
S = 11
# A list of integers
V = [1,2,5]

"""
Write a function to determine the minimum number of elements in list V that can be summed up to S
"""
def minElement(S, V, E=0):
  # V.sort()
  # Edge case where there can only be one element
  if S == 0: return 0
  if S < 1: return E
  E+=1
  return minElement(S-V[-1], V, E)

print(minElement(S, V))
```

(Note that this is Python)

The code above will output `3`.

Here's a detailed explanation of how the code works:

1. First, the variables `S` and `V` are passed in to the function which is called in the last line. (In this example, `S` is `11` and `V` is `[1,2,5]`)
2. Next, the variable `S` specified is checked if the number is `0`. This is an edge case as there can't be any number of elements that can form `0`. (In this case, this zero check is skipped)
3. Next, the variable `S` specified is checked if 
