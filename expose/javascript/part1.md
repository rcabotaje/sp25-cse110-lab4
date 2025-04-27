1. 20 is prinited out by line 9.
2. 20 is printed out by line 13
3. you should not use var because since it has a global scope so it has no block-level visibility.
4. 20 it printed out by line 9
5. An error comes out because the result is using let, the let variable has assignment 'result' in it and it only exists in the if-statement's block, so when console.log tries to run, since they arent in the same block, "result" is not in the scope so it's not seen by it and doesn't know it exists.
6. 0 is printed out at line 9
7. An error comes out because the result is using const which is the same as let just it can't get changed, the cosnt variable can only be seen in the block it's created in (which is in the if-staements block), line 13 isn't in the same block as it, so when result is called it doesn't see it exists so, it throws an error that its undefiend.
