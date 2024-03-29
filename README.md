# Leetcode-training

## 1) [Reverse String ](https://github.com/mauricechouam/Leetcode-training/blob/main/Reverse%20String/code.js)
A function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.
Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

## 2)[Reverse Interger](https://github.com/mauricechouam/Leetcode-training/blob/main/Reverse%20Interger/code.js)
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows. Constraints: -231 <= x <= 231 - 1
Example 1:
Input: x = 123
Output: 321

## 3)[Non-Decreasing Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Non-Decreasing%20Array/code.js)
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

## 4)[Missing Number](https://github.com/mauricechouam/Leetcode-training/blob/main/Missing%20Number/code.js)
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
* Constraints:
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

## 5)[Single Number](https://github.com/mauricechouam/Leetcode-training/blob/main/Reverse%20Words%20in%20a%20String%20III/code.js)
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
Example 1:
Input: nums = [2,2,1]
Output: 1
Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
## 6)[Valid Anagram](https://github.com/mauricechouam/Leetcode-training/blob/main/Valid%20Anagram/code.js)
Given two strings s and t , write a function to determine if t is an anagram of s.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

## 7) [Set Mismatch](https://github.com/mauricechouam/Leetcode-training/blob/main/Set%20Mismatch/code.js)
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.

## 8) [Reverse Words in a String III](https://github.com/mauricechouam/Leetcode-training/blob/main/Set%20Mismatch/code.js)
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

## 9) [Jump Game](https://github.com/mauricechouam/Leetcode-training/blob/main/Jump%20Game/code.js)
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


## 10) [Search in Rotated Sorted Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Search%20in%20Rotated%20Sorted%20Array/code.js)
You are given an integer array nums sorted in ascending order, and an integer target.
Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
If target is found in the array return its index, otherwise, return -1.
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1


## 11) [Shuffle the Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Shuffle%20the%20Array/code.js)
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
Example 1:
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Example 2:
Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

## 12) [the Greatest Number of Candies](https://github.com/mauricechouam/Leetcode-training/blob/main/Greatest%20Number%20of%20Candies/code.js)
Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
Example 1
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

## 13) [Intersection of Two Arrays II](https://github.com/mauricechouam/Leetcode-training/blob/main/Intersection%20of%20Two%20Arrays%20II/code.js)
Given two arrays, write a function to compute their intersection.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

## 14) [Height Checker](https://github.com/mauricechouam/Leetcode-training/blob/main/Height%20Checker/code.js)
Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.
Example 1:
Input: heights = [1,1,4,2,1,3]
Output: 3
Explanation: 
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.
Example 2:
Input: heights = [5,1,2,3,4]
Output: 5

## 15) [Rotate Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Rotate%20Array/code.js)
Given an array, rotate the array to the right by k steps, where k is non-negative.
Follow up:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

## 16) [Pow(x, n)](https://github.com/mauricechouam/Leetcode-training/blob/main/Pow(x%2C%20n)/code.js)
Implement pow(x, n), which calculates x raised to the power n (i.e. xn).
Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

## 17) [1-bit and 2-bit Characters](https://github.com/mauricechouam/Leetcode-training/blob/main/1-bit%20and%202-bit%20Characters/code.js)
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).
Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.
Example 1:
Input: 
bits = [1, 0, 0]
Output: True
Explanation: 
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

## 18) [Defuse the Bomb](https://github.com/mauricechouam/Leetcode-training/blob/main/Defuse%20the%20Bomb/code.js)
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
Example 1:
Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

## 19) [Target Sum](https://github.com/mauricechouam/Leetcode-training/blob/main/Target%20Sum/code.js)
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
Find out how many ways to assign symbols to make sum of integers equal to target S.
Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
There are 5 ways to assign symbols to make the sum of nums be target 3.

## 20) [Relative Sort Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Relative%20Sort%20Array/code.js)
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

## 21) [Two Sum](https://github.com/mauricechouam/Leetcode-training/blob/main/Two%20Sum/code.js)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

## 22) [Maximum Binary Tree](https://github.com/mauricechouam/Leetcode-training/blob/main/Maximum%20Binary%20Tree/code.js)
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

## 23) [Longest Substring Without Repeating Characters](https://github.com/mauricechouam/Leetcode-training/blob/main/Longest%20Substring%20Without%20Repeating%20Characters/code.js)
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

## 24) [Insert into a Binary Search Tree](https://github.com/mauricechouam/Leetcode-training/blob/main/Insert%20into%20a%20Binary%20Search%20Tree/code.js)
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

## 25) [Count Number of Teams](https://github.com/mauricechouam/Leetcode-training/blob/main/Count%20Number%20of%20Teams/code.js)
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
You have to form a team of 3 soldiers amongst them under the following rules:
Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
Example 1:
Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 

## 26) [Minimum Add to Make Parentheses Valid](https://github.com/mauricechouam/Leetcode-training/blob/main/Count%20Number%20of%20Teams/code.js)
Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.
Formally, a parentheses string is valid if and only if:
It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.
Example 1:
Input: "())"
Output: 1
Example 2:
Input: "((("
Output: 3

## 27) [Permutation](https://github.com/mauricechouam/Leetcode-training/blob/main/Permutations/code.js)
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

## 28) [Find Smallest Letter Greater Than Target](https://github.com/mauricechouam/Leetcode-training/blob/main/Find%20Smallest%20Letter%20Greater%20Than%20Target/code.js)
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.
Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"
Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

## 29) [Letter Combinations of a Phone Number](https://github.com/mauricechouam/Leetcode-training/blob/main/Letter%20Combinations%20of%20a%20Phone%20Number/code.js)
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
Letter Combinations of a Phone Number
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

## 30) [Remove Nth Node From End of List](https://github.com/mauricechouam/Leetcode-training/blob/main/Letter%20Combinations%20of%20a%20Phone%20Number/code.js)
Given the head of a linked list, remove the nth node from the end of the list and return its head.
Follow up: Could you do this in one pass?
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

## 31) [Lowest Common Ancestor of a Binary Tree](https://github.com/mauricechouam/Leetcode-training/blob/main/Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/code.js)
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

## 32) [Add Two Numbers](https://github.com/mauricechouam/Leetcode-training/commit/abc0ce47cbed8b092a0c769a4897a00dce957865)
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
\You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## 33) [Base 7](https://github.com/mauricechouam/Leetcode-training/blob/main/Base%207/code.js)
Given an integer, return its base 7 string representation.\
Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7

## 34) [Coin Change](https://github.com/mauricechouam/Leetcode-training/blob/main/Coin%20Change/code.js)
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
Example 3:
Input: coins = [1], amount = 0
Output: 0

## 35) [3Sum](https://github.com/mauricechouam/Leetcode-training/blob/main/Coin%20Change/code.js)
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Notice that the solution set must not contain duplicate triplets.
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:
Input: nums = []
Output: []

## 36) [Divide Two Integers](https://github.com/mauricechouam/Leetcode-training/blob/main/Divide%20Two%20Integers/code.js)
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.

## 37) [Remove Duplicates from Sorted List](https://github.com/mauricechouam/Leetcode-training/blob/main/Remove%20Duplicates%20from%20Sorted%20List/code.js)
Given a sorted linked list, delete all duplicates such that each element appear only once.
Example 1:
Input: 1->1->2
Output: 1->2
Example 2:
Input: 1->1->2->3->3
Output: 1->2->3

## 38) [Remove Duplicates from Sorted Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Remove%20Duplicates%20from%20Sorted%20Array/code.js)
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
Internally you can think of this:
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

## 39) [Nim Game](https://github.com/mauricechouam/Leetcode-training/blob/main/Nim%20Game/code.js)
You are playing the following Nim Game with your friend:
Initially, there is a heap of stones on the table.
You and your friend will alternate taking turns, and you go first.
On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
The one who removes the last stone is the winner.
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.
Example1
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.

Example 2:
Input: n = 1
Output: true

## 40) [String to Integer (atoi)](https://github.com/mauricechouam/Leetcode-training/blob/main/String%20to%20Integer%20(atoi)/code.js)
Implement atoi which converts a string to an integer.
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
Example 1:
Input: str = "42"
Output: 42
Example 2:
Input: str = "   -42"
Output: -42

## 41) [Valid Number](https://github.com/mauricechouam/Leetcode-training/blob/main/Valid%20Number/code.js)
Validate if a given string can be interpreted as a decimal number.
Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"-+3" => false
"95a54e53" => false

## 42) [Longest Increasing Subsequence](https://github.com/mauricechouam/Leetcode-training/blob/main/Longest%20Increasing%20Subsequence/code.js)
Given an integer array nums, return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

## 43) [Increasing Triplet Subsequence](https://github.com/mauricechouam/Leetcode-training/blob/main/Increasing%20Triplet%20Subsequence/code.js)
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

## 44) [Find All Anagrams in a String](https://github.com/mauricechouam/Leetcode-training/commit/29cb955e5cbe991ea4647a8f1dd5c7d6b40eddfa)
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter.
Example 1:
Input:
s: "cbaebabacd" p: "abc"
Output:
[0, 6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

## 45) [Permutation in String](https://github.com/mauricechouam/Leetcode-training/commit/0594ef239a5ecc6536173ffd931a8558968e1e8d)
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
Example 1:
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False

## 46) [Subsets](https://github.com/mauricechouam/Leetcode-training/blob/main/Subsets/code.js)
Given an integer array nums, return all possible subsets (the power set).
The solution set must not contain duplicate subsets.
Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:
Input: nums = [0]
Output: [[],[0]]

## 47) [Letter Case Permutation](https://github.com/mauricechouam/Leetcode-training/blob/main/Letter%20Case%20Permutation/code.js)
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. You can return the output in any order.
Example 1:
Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:
Input: S = "3z4"
Output: ["3z4","3Z4"]

## 48) [Plus One](https://github.com/mauricechouam/Leetcode-training/commit/0241133c72eab4d100012201f8e145b41a92a053)
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.
Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

## 49) [Sort Colors](https://github.com/mauricechouam/Leetcode-training/blob/main/Sort%20Colors/code.js)
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
Follow up:
Could you solve this problem without using the library's sort function?
Could you come up with a one-pass algorithm using only O(1) constant space?
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

## 50) [First Missing Positive](https://github.com/mauricechouam/Leetcode-training/blob/main/First%20Missing%20Positive/code.js)
Given an unsorted integer array nums, find the smallest missing positive integer.
Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?
Example 1:
Input: nums = [1,2,0]
Output: 3
Example 2:
Input: nums = [3,4,-1,1]
Output: 2

## 51) [Find All Numbers Disappeared in an Array](https://github.com/mauricechouam/Leetcode-training/tree/main/Find%20All%20Duplicates%20in%20an%20Array)
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]

## 52) [Find All Duplicates in an Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Find%20All%20Duplicates%20in%20an%20Array/code.js)
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?
Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[2,3]

## 53) [Remove Palindromic Subsequences](https://github.com/mauricechouam/Leetcode-training/blob/main/Remove%20Palindromic%20Subsequences/code.js)
Given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.
Return the minimum number of steps to make the given string empty.
A string is a subsequence of a given string, if it is generated by deleting some characters of a given string without changing its order.
A string is called palindrome if is one that reads the same backward as well as forward.
Example 1:
Input: s = "ababa"
Output: 1
Explanation: String is already palindrome
Example 2:
Input: s = "abb"
Output: 2
Explanation: "abb" -> "bb" -> "". 
Remove palindromic subsequence "a" then "bb".

## 54) [Sqrt(x)](https://github.com/mauricechouam/Leetcode-training/blob/main/Sqrt(x)/code.js)
Given a non-negative integer x, compute and return the square root of x.\
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Example 1:
Input: x = 4
Output: 2
Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

## 55) [ Backspace String Compare](https://github.com/mauricechouam/Leetcode-training/blob/main/Backspace%20String%20Compare/code.js)
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

## 56) [Reverse Words in a String](https://github.com/mauricechouam/Leetcode-training/blob/main/Reverse%20Words%20in%20a%20String/code.js)
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.

## 57) [Valid Palindrome](https://github.com/mauricechouam/Leetcode-training/blob/main/Valid%20Anagram/code.js)
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.
Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:
Input: "race a car"
Output: false

## 58) [Valid Palindrome II](https://github.com/mauricechouam/Leetcode-training/blob/main/Valid%20Palindrome%20II/code.js)
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

## 59) [Max Number of K-Sum Pairs](https://github.com/mauricechouam/Leetcode-training/blob/main/Max%20Number%20of%20K-Sum%20Pairs/code.js)
You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.
Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

## 60) [Longest Consecutive Sequence](https://github.com/mauricechouam/Leetcode-training/blob/main/Longest%20Consecutive%20Sequence/code.js)
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 ## 61)[Largest Number](https://github.com/mauricechouam/Leetcode-training/blob/main/Largest%20Number/code.js)
 Given a list of non-negative integers nums, arrange them such that they form the largest number.
Note: The result may be very large, so you need to return a string instead of an integer.
Example 1:
Input: nums = [10,2]
Output: "210"
Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"

 ## 62)[Find First and Last Position of Element in Sorted Array](https://github.com/mauricechouam/Leetcode-training/blob/main/Find%20First%20and%20Last%20Position%20of%20Element%20in%20Sorted%20Array/code.js)
 Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
Follow up: Could you write an algorithm with O(log n) runtime complexity?
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

 ## 63)[Combination Sum III](https://github.com/mauricechouam/Leetcode-training/blob/main/Combination%20Sum%20III/code.js)
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
Example 1:
Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.

 ## 64)[Rotate Image](https://github.com/mauricechouam/Leetcode-training/blob/main/Rotate%20Image/code.js)
 You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

 ## 65)[Fibonacci Number](https://github.com/mauricechouam/Leetcode-training/blob/main/Fibonacci%20Number/code.js)
 You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

## 66)[String Matching in an Array](https://github.com/mauricechouam/Leetcode-training/blob/main/String%20Matching%20in%20an%20Array/code.js)
Given an array of string words. Return all strings in words which is substring of another word in any order. 
String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].
Example 1:
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
Example 2 : 
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

## 67)[Maximum Sum of 3 Non-Overlapping Subarrays](https://github.com/mauricechouam/Leetcode-training/blob/main/Maximum%20Sum%20of%203%20Non-Overlapping%20Subarrays/code.js)
Given an integer array nums and an integer k, find three non-overlapping subarrays of length k with maximum sum and return them.
Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.
Example 1:
Input: nums = [1,2,1,2,6,7,5,1], k = 2
Output: [0,3,5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

## 68)[Best Time to Buy and Sell Stock III](https://github.com/mauricechouam/Leetcode-training/blob/main/Best%20Time%20to%20Buy%20and%20Sell%20Stock%20III/code.js)
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
Example 1:
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

## 69)[Best Time to Buy and Sell Stock](https://github.com/mauricechouam/Leetcode-training/blob/main/Best%20Time%20to%20Buy%20and%20Sell%20Stock/code.js)
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

## 70)[Search Insert Position ](https://github.com/mauricechouam/Leetcode-training/blob/main/Search%20Insert%20Position/code.js)
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
















