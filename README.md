# Fitness Tracker WebSite

# 1.Project Purpose and Features

This Fitness Tracker application helps users log their daily workouts by entering exercise type, duration, gender, and age. It then calculates estimated calories burned and visually displays the workout data using charts. The goal is to provide users with an intuitive way to monitor their fitness progress over time.

# 2.Setup and Usage Instructions

2.1 Clone or download the project files.

2.2 Open the index.html file in any modern web browser.

2.3 Fill out the workout form by selecting an exercise type, entering duration (in minutes), gender, and age.

2.4 Submit the form to see the workout summary and the updated workout progress chart.

2.5 Repeat the process to track multiple workout sessions.

2.6 No server or backend setup is required as the app runs fully in the browser.

# 3.Dependencies

Chart.js — a JavaScript library for rendering responsive and interactive charts.
Included via CDN in the HTML file to visualize workout data.

# 4.Description of Key Functions or Features

# 4.1 calculateCalories(type, duration, gender, age)
Estimates calories burned using MET values for different exercise types:

Yoga: MET = 3

Cardio: MET = 8

Battle Ropes: MET = 10

Dumbbell Row: MET = 5

Default MET: 6

Uses average weight assumptions based on gender (75 kg for males, 65 kg for females).

Calculation formula:

Calories=((MET x 3,5 x weight) / 200) x duration

# 4.2 Form Submission Handler

Listens for form submission event and prevents page reload.

Extracts form input values.

Calls calculateCalories() to compute calories burned.

Updates the DOM to display workout details.

Updates the bar chart to add new data points for duration and calories burned.

Resets the form for new entries.

# 4.3 Chart.js Integration

Displays two datasets on a bar chart:

Workout duration in minutes.

Calories burned per session.

The chart updates dynamically as new workouts are logged.

