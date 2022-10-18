# A little challenge
1) The console outputs 3
2) ReferenceError: discountedPrices is not defined
   (out of scope variable)
3) The console outputs 3
4) Nothing happens (we don't output anything)
5) The console outputs 3
6) [Function: discountPrices]
7) The console outputs 150
8) Nothing happens (we don't output anything)
9) ReferenceError: i is not defined
10) The console outputs 3
11) Nothing happens (we don't output anything)

## Data Types
12) 
    A) student.name;
    B) student["Grad Year"];
    C) student.greeting();
    D) student["Favorite Teacher"].name;
    E) student.courseLoad[0];

## Basic Operators & Type Conversion
13) 
    A) '32'
    B) 1
    C) 3
    D) '3null'
    E) 4
    F) 0
    G) 3undefined
    H) NaN

14) 
    A) true
    B) false
    C) true
    D) false
    E) false
    F) true

** ADD question 15 here **

## Loops
17) The array newArr will have the value of [2,4,6].
Here's what happened:
+ Line 16 calls modifyArray() with two arguments [1,2,3] and doSomething
+ [1,2,3] is the original array
+ doSomething is the name of the function we want to "call back" to within the for loop
+ newArr is created to store the *new* modified array of the original array
+ Line 5 is called 3 times within the for loop, iterating over each element in the OG array
+ Each time line 5 calls doSomething() with the argument being each element in the OG array
+ Each passed in element (as a copy) is multiplied by 2 and returned
+ The returned element is "pushed" to newArr
+ Once for loop finishes, newArr is returned with value [2,4,6]

19) 1 4 3 2