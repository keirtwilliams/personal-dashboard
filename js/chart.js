const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 

const config = {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Coding Hours",
        data: [3, 5, 2, 4, 6, 7.5, 10],
        backgroundColor: "#4943e8",
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Weekly Coding Activity",
        font: { size: 18, weight: "bold" },
        color: "#333",
      },
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} hours`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 2 },
        grid: { color: "rgba(200, 200, 200, 0.3)" },
      },
      x: { grid: { display: false } },
    },
  },
};

window.addEventListener("load", () => {
  const ctx = document.getElementById("weeklyCodingChart").getContext("2d");
  new Chart(ctx, config);
});
