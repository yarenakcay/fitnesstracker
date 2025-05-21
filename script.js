// Get references to the form and chart context
const form = document.getElementById("workoutForm");
const chartCtx = document.getElementById("workoutChart").getContext("2d");

// Object to store workout data
const workoutData = {
  labels: [],       // Workout types (e.g., Cardio, Yoga)
  durations: [],    // Duration values
  calories: []      // Calories burned values
};

// Create a bar chart using Chart.js
const workoutChart = new Chart(chartCtx, {
  type: "bar",
  data: {
    labels: workoutData.labels,
    datasets: [
      {
        label: "Duration (min)", // Label for duration dataset
        data: workoutData.durations,
        backgroundColor: "rgba(54, 162, 235, 0.6)" // Blue bars
      },
      {
        label: "Calories Burned", // Label for calories dataset
        data: workoutData.calories,
        backgroundColor: "rgba(255, 99, 132, 0.6)" // Red bars
      }
    ]
  },
  options: {
    responsive: true, // Make chart responsive
    plugins: {
      title: {
        display: true,
        text: "Workout Duration & Calories Burned" // Chart title
      }
    },
    scales: {
      y: {
        beginAtZero: true // Y-axis starts from 0
      }
    }
  }
});

// Simple calorie calculation function
function calculateCalories(type, duration, gender, age) {
  let metValue = 6; // Default MET (Metabolic Equivalent Task) value

  // Set MET value based on workout type
  switch (type) {
    case "Yoga":
      metValue = 3;
      break;
    case "Cardio":
      metValue = 8;
      break;
    case "Battle Ropes":
      metValue = 10;
      break;
    case "Dumbbell Row":
      metValue = 5;
      break;
  }

  // Use average weight based on gender
  const weight = gender === "Male" ? 75 : 65;

  // Calorie formula: (MET * 3.5 * weight / 200) * duration
  const calories = ((metValue * 3.5 * weight) / 200) * duration;

  return Math.round(calories); // Round to nearest whole number
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get user input values
  const type = document.getElementById("type").value;
  const duration = parseInt(document.getElementById("duration").value);
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);

  // Calculate calories burned
  const calories = calculateCalories(type, duration, gender, age);

  // Update daily progress display
  document.getElementById("progress-workout").innerHTML = `Workout Type: <strong>${type}</strong>`;
  document.getElementById("progress-duration").innerHTML = `Duration: <strong>${duration} minutes</strong>`;
  document.getElementById("progress-gender").innerHTML = `Gender: <strong>${gender}</strong>`;
  document.getElementById("progress-age").innerHTML = `Age: <strong>${age}</strong>`;
  document.getElementById("progress-calories").innerHTML = `Calories Burned: <strong>${calories}</strong>`;

  // Add new data to the chart
  workoutData.labels.push(type);
  workoutData.durations.push(duration);
  workoutData.calories.push(calories);
  workoutChart.update(); // Refresh the chart

  // Reset the form fields
  form.reset();
});
