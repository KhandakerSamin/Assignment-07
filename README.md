## 3 Project Features :

- **Course Duplication Alert:**
  - If a user tries to select the same course twice, a sweet alert is displayed, notifying them that the course has already been selected.

- **Credit Hour Limitation:**
  - Users have a maximum credit time limit of 20 hours.
  - They cannot exceed this limit when selecting courses.
  - If a user tries to select courses that would exceed the 20-hour limit, a sweet alert informs them that they don't have enough credit hours remaining.

- **Minimum Credit Hour Validation:**
  - Users cannot select courses that would result in a negative credit hour balance.
  - If they attempt to do so, a sweet alert appears, alerting them that the credit hours cannot go below 0.

## State Management : 

In our React project, we have a special way of keeping track of important information. We call it "state management." Imagine it as a place where we keep all the data our app needs to work correctly.

### How We Manage State

To do this, we use a method called [State Management Approach/Library/Tool]. Think of it like having neat and organized folders to keep everything in order. This method helps ensure that our app runs smoothly and efficiently.

### How It Works

- **Storing Data:** We put essential information in our "state," such as the number of credit hours you have or the courses you've selected. It's like having a dedicated space for keeping track of everything important.

- **Updating Data:** Whenever something changes, like when you choose a new course, we update the state to reflect that change. It's similar to jotting down new information or making updates in your notebook.

- **Using Data:** Our app reads this data from the state and displays it on your screen. It's like reading the notes in your notebook to see what's happening in our app.

### Why We Chose This Method

We chose this method because it helps us keep everything organized and our app running smoothly. It's like having a clean and tidy workspace to get things done.

### Example

Let's consider a simple example: You have a list of selected courses. When you pick a new course, we add it to your list in the state. When you view your list, we read it from the state and show it to you.

### Want to Learn More?

If you're curious and want to learn more about how we manage state or if you'd like to help us make our app even better, feel free to reach out. We're always looking to improve and make things easier for our users!
