fetch("../json/projects.json")
  .then(res => res.json())
  .then(data => {
    const activeProj = data.projects.filter(projects => projects.active === true).length;

    document.getElementById("active-projects").textContent = activeProj;
  });

   //JSON-LIKE STRUCTURE FOR ACTIVITY LOG 

  let storedData = localStorage.getItem("activityLog");
  let activityLog;

if (!storedData) {
  activityLog = {
    "activities": [
      {
        "id": 1,
        "description": "Created a new chart for weekly coding",
        "date": "2025-10-20",
        "type": "create"
      },
      {
        "id": 2,
        "description": "Remove outdated task",
        "date": "2025-01-01",
        "type": "delete"
      },
      {
        "id": 3,
        "description": "Created a simple react form",
        "date": "2025-11-20",
        "type": "create"
      }
    ]
  };
} else {
  activityLog = JSON.parse(storedData);
}


// CRUD OPERATION
const tbody = document.querySelector('#activity-body');
 activityLog.activities.forEach((activity) => {
       const newTr = document.createElement('tr');
       newTr.innerHTML = `
            <td>${activity.description} </td>
            <td>${activity.date} </td>
            <td> 
            <button class="edit-btn"> Edit </button> 
            <button class="delete-btn"> Delete </button> 
            </td>
       `;
       tbody.appendChild(newTr);
      });
