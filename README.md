# Profile scroller for university students
I recently learned about iterators, a newer feature of the es6 javascript. Basically, iterators are objects that provide a way to access elements of a collection sequentially. They define a seamless interface for traversing data structures like arrays, strings, maps, sets, etc. Iterators uses the iteration protocol which consist of two key components, the iterable object and iterator object. 

The iterable object implements the Symbol.iterator method. This method is responsible for returning the iterator object.

On the other hand, iterator objects represents the actual iteration state. It implements the next() method, which returns an object with two properties, which are value(the current value of the iteration), and done(a boolean indicating the whether the iteration is complete). 

While implementing, I developed a project: a scrollable app that collects a few details of university students. you can check it out through the link: [student-profiles](https://uni-student-profs.netlify.app/)

This app utilizes the next() method to iterate through the objects stored in the data array, which basically allows the app to process each object in the data array one at a time. 
