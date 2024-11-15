This Project is from the backend Developer track from https://www.codecademy.com/career-journey/back-end-engineer
------------------------------------------------------------------------------------------------------------------

Think about what kinds of messages you’d like your program to output. Is it a horoscope generator? A fortune teller? An inspiring phrase? Knock-knock jokes? Here’s an example of what the output of a horoscope generator could look like:
```
Your sign is sun.
 
You are having good luck. 

You should: "trust no one"
```
Remember, to make your program truly random the message should really be made up of multiple strings that are output together.

Think about what parts of the string could stay the same each time and what parts could change. In the output above, what do you think are the pieces that change each time?

- Store message components
Decide how to store all of the message components for your game.

Think about what kind of data structures would work best to store the information. An array would be a good choice here because you can randomly access an array’s elements. Remember, there will be at least 3 sets of data that make up your final message so you might consider having multiple arrays. You may want to nest these arrays inside of an object to keep them organized.

- Create the message
Add functionality to randomly select the different message components so they can create a cohesive message.

You can use a loop to iterate through the object, with a switch case that can select and format each of the different message components.
