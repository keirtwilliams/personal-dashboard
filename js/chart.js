const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 

const config = {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Coding Hours",
        data: [3, 5, 2, 4, 6, 1, 0],
        backgroundColor: "rgba(99, 132, 255, 0.8)",
        borderRadius: 8,
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
        title: { display: true, text: "Hours Coded" },
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
