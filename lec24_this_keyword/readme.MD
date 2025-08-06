# this keyword depends on how it is being called upon

1. function calling --> window( global object)
2. method calling --> object of that method (current object)
3. constructor calling --> this (current object)
4. event handling --> event.target (current object)
5. arrow function --> this (global object)
6. bind() method --> this (bound object)
7. call() method --> this (called object)
8. apply