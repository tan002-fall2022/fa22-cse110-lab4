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
    A) student.name; \
    B) student["Grad Year"]; \
    C) student.greeting(); \
    D) student["Favorite Teacher"].name; \
    E) student.courseLoad[0]; 

## Basic Operators & Type Conversion
13) 
    A) '32' (+ is interpreted as string concatenation instead)\
    B) 1 (operands are converted into number first) \
    C) 3 (null is defined as 0 in arithmetic so it's the same as 3 + 0) \
    D) '3null' (string concatenation, null is interpreted as a string) \
    E) 4 (true is defined as 1 in arithmetic .ie 3 + 1) \
    F) 0 (false defined as 0 and null also defined as 0 in arithmetic) \
    G) 3undefined (string concatenation, undefined is interpreted as string) \
    H) NaN (regular number expression, but undefined is interpreted as NaN)

14) 
    A) true (string '2' becomes number 2) \
    B) false (compares first letter of string, '2' and '1'. '2' has larger ASCII value than '1') \
    C) true ('2' is converted to 2) \
    D) false (different datatype so false) \
    E) false (true maps to 1, and 1 != 2) \
    F) true (Boolean() returns true for any non-empty, non-zero, object or array, and the 2 operands have same datatype)

15) == converts the operands into the same data type first before comparison. 
=== however does not and will also compare the datatype and return false if 
the operands don't have the same dataype.
Ex: 2 == '2' returns true because '2' is first converted into 2 before comparison
    2 === '2' returns false because 2 is a number but '2' is a string,
              and since they don't have the same datatype === returns false

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