# ToDoList-Coding-Challenge

This project was completed over the course of 2 weeks. Unfortunately I didn't have as much time to work on it as I would have liked due to work obligations with the upcoming holiday season. How I spent my time over the course of the project is broken down as follows:

Planning out functionality (1 hour total)
Over the course of the project, I stopped at several points to plan out how data would flow between the components, component states, and localStorage by diagramming on a notebook. I also drew out mocks of the pages, labeling probable divs to plan out future styling.

Research (1 hour total)
Over the course of the project, I looked up a few tutorials for refreshers on functionality such as working with the localStorage object and styling components with CSS

Basic frontend infrastructure (1 hour total)
Creating components and pages, setting up react router, organizing file directories. Baseline was made with create react app and I removed files and made changes as necessary.

Login Screen Functionality (2 hours total)
Working on login screen functionality included setting up state for inputs and styling, and writing methods for validation and sending the fetch request. 

List Page Functionality (3 hours total)
Definitely the longest portion. I spent a majority of the time writing methods for this page's functionality. Methods were written to make changes in the persisted local storage and rerender the task list each time changes were made. Filter method similarly pulls from localStorage, but modifies the list based on the searchfield before changing state values.

Edit / Display Component functionality (1 hour total)
Functionality for the buttons on these components took less time as they were written in the List Page and passed down. All that was needed to do was set up state and some onChange funcionality.

Testing / Bugfixing / Refactoring (1.5 hours total)
This time was spread across the functionality steps. There were several instances where functionality did not perform as expected and I had to investigate bugs / refactor code. Some specific examples include properly formatting the form data for the fetch request, email and password validation, and restyling based on different conditions. 

Styling: (2-3 hours total)
Modifying the stylesheets was done at the very end, after all functionality was implemented and tested. I had to do some research for this step to refresh my memory as a majority of my recent projects were using MUI components rather than vanilla CSS. 
