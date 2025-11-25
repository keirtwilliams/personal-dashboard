fetch("../json/projects.json")
.then(res => res.json())
.then(data => {
    const projectCount = data.projects.length;

      const project = document.getElementById('projects')
      project.textContent = projectCount;
  })

  .catch(error => console.log(error));