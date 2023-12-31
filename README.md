# Meet APP

## User Stories

# Feature 1: Filter Events by City

This feature allows users to filter events based on the city. Users can search for a specific city and view a list of upcoming events that take place in that city.

## User Story

As a user, I want to be able to filter events by city so that I can easily find and view the list of events happening in a particular city.

## Scenarios

### Scenario 1: Filtering events without specifying a city

**Given** that the user hasn't searched for any city,
**When** the user opens the app,
**Then** the user should see a list of all upcoming events, regardless of the city.

### Scenario 2: Displaying suggestions when searching for a city

**Given** that the main page is open,
**When** the user starts typing in the city textbox,
**Then** the user should see a list of suggested cities that match what they've typed, assisting them in selecting the desired city.

### Scenario 3: Selecting a city from the suggested list

**Given** that the user was typing "Berlin" in the city textbox and the list of suggested cities is showing,
**When** the user selects a city from the list (e.g., "Berlin, Germany"),
**Then** the selected city should replace the text in the city textbox (i.e., "Berlin, Germany"). The list of suggestions should disappear, and the user should receive a list of upcoming events specific to the selected city.

# Feature 2: Show/Hide an Event's Details

This feature allows users to show and hide event details, providing them with the flexibility to access information about events they are interested in.

## User Story

As a user, I want to be able to show and hide event details so that I can easily access information about events that I have an interest in.

## Scenarios

### Scenario 1: Event element is collapsed by default

**Given** the user has selected their chosen city to browse,
**When** the user receives the list of events in that city,
**Then** the events should be collapsed by default, showing only essential information.

### Scenario 2: User can expand an event to see its details

**Given** the user has chosen an event of interest,
**When** the user clicks on the chosen event,
**Then** the event's details are displayed, providing additional information about the event.

### Scenario 3: User can collapse an event to hide its details

**Given** the user has chosen and opened an event and no longer needs the details,
**When** the user clicks on the event,
**Then** the event will collapse and hide the details, allowing the user to focus on other events.

# Feature 3: Specify Number of Events

**User Story**

As a user I should be able to specify the number of displayed events So that I have control about how many events are displayed.

**Scenarios**

Scenario 1: When user hasn’t specified a number, 32 is the default number

**Given** the user has not specified a number of events in a city to display
**When** the user selects a city in which to view events
**Then** the default number will be 32

Scenario 2: User can change the number of events they want to see

**Given** the user has selected the city they wish to see events in and has received the default number of events
**When** the user wishes to adjust how many events are displayed
**Then** the user should be able to adjust how many events are displayed

# Feature 4: Use the App When Offline

**User Story**

As a user I should be able to use the app when offline So that I can access event information even when there is not internet available

**Scenarios**

Scenario 1: Show cached data when there’s no internet connection

**Given** the user has lost internet connection
**When** the user access the app
**Then** the cached data within the app should still be accessible

Scenario 2: Show error when user changes the settings (city, time range)

**Given** the user has changed their settings in the app
**When** the user next opens the app or returns from the settings screen
**Then** an error should display informing the user that changes have been made

# Feature 5: Data Visualization

**User Story**

As a user I should be able to view a chart which displays the number of upcoming events in each city

**Scenarios**

Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the user has not selected a city
**When** the user wants to compare events between cities
**Then** they should be able to access a chart with the number of upcoming events in each city

# Project Name

Brief description of the project.

## How this app will use serverless functions

### Feature 1: Filter events by city

For this feature, the app utilizes a serverless function to handle the filtering logic on the backend. When the user searches for a city, the frontend triggers the serverless function with the search query. The function retrieves the list of events from the API, filters them based on the city, and returns the filtered results to the frontend.

### Feature 2: Show/Hide event details

Serverless functions are not necessary for this feature as it primarily involves client-side interactivity. The show/hide functionality can be implemented using JavaScript and DOM manipulation on the client-side.

### Feature 3: Specify the number of events

Similar to Feature 1, a serverless function is used to handle the logic of fetching and filtering events based on the specified number. The frontend triggers the function with the desired number of events, and the function retrieves the appropriate number of events from the database or API. The retrieved events are then returned to the frontend for display.

### Feature 4: Use the app when offline

To enable offline functionality, the app utilizes caching and local storage mechanisms. These mechanisms allow the app to store essential data locally, allowing users to access and use the app even when they are not connected to the internet.

### Feature 5: Data Visualization

For data visualization purposes, the app employs serverless functions to generate the chart data. When a user requests a chart, the frontend triggers a serverless function that fetches the necessary data from the API. The function then performs any required calculations or transformations on the data and returns the processed data to the frontend for rendering and visualization.
