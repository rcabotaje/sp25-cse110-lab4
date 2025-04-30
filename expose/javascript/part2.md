1. It will print out the last interation index of the for loop, because the value of i keeps its value when the for loop ends.
2. It will print out the value of the last item discounted
3. It will get the price of the last item it discounted, but rounded to the nearest dollar.
4. It will return the all the values of the finalPrice in the array of Discounted bc it stores and saves all of it in it.
5. An error will get produced because, the i is using let, so its only in the scope of the for loop.
6. An error will get produced because, the discountedPrice is using let, so its only in the scope of the for loop.
7. It will print out the value of the last item's final price, since they are in the same scope it sees it and will print it.
8. it will return the value of the array of discounted because the value's of it are returned.
9. An error will get produced because, the i is using let, so its only in the scope of the for loop.
10. It will print out the length of the prices array because they are in the same scope.
11. It will return the value of each number with it's discount bc even though it has a const, after each iteration in a sense a new const discountedPrice gets created with the previous one getting deleted, each disount gets added to the disounted array and the value of that array gets returned.
12. For 12:
    1. student.name
    2. student["Grad Year"]
    3. student.greeting();
    4. student["Favorite Teacher"].name
    5. student.courseLoad[0]
13. Arithmetic
    1. '3'+ 2 = '32' since integers map to their exact string representation
    2. '3'- 2 = 1 since - converts both to numbers and subracts them
    3. 3+null = 3 since javascript turns null into its integer representaion (null = 0)and adds them
    4. '3'+null = '3null' since javascript concationates them as stings
    5. true + 3 = 4 since javasscript converts true to its integer value true = 1, and adds them together
    6. false + null = 0 since javascript converts both to ints and both have int values of 0 and add them up bc of the +.
    7. '3'+undefined = '3undefined' since javascript concatinates them as strings
    8. '3'-undenied = NaN since undefined doesnt have an int representation so its NaN("not a number")
14. Comparison
    1. '2'>1 =true since it maps the string to its integer
    2. '2'<'12' =true since it maps both numbers to their integers
    3. 2 =='2' = true since it maps both to their integers
    4. 2 ==='2' = false since it the types are different
    5. true == 2 bc true maps to 1 and 1 doesnt equal 2
    6. true === Boolean(2) since Boolean(2) maps to true (since it thinks any number thats not 0 is true)
15. == compares values after trying to convert them to common types, while === compares both values and types
16.  in da repositoyr
17.  The result will be each number in the array gets doubled and added into a new array, which then gets returned. I arrived at this conclusion by putting a for loop iterating through the newArr seeing the values and I saw that all the numbers were doubled of the ones entered into to function.
18.  in da repository
19.  The output of my code was:
    
> 9:28:11 PM
> 
> 9:28:12 PM
> 
> 9:28:13 PM
> 
> 9:28:14 PM
> 
> 9:28:15 PM
> 
> 9:28:16 PM
> 
> 9:28:17 PM
> 
> 9:28:18 PM
> 
> 9:28:19 PM
> 
> 9:28:20 PM
> 
> 9:28:21 PM


And it kept going until I hit Ctrl+C to end it.
