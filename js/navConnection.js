fetch("../components/navbar.html")
.then(resp => resp.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;   
})

.catch(err => console.log(err));