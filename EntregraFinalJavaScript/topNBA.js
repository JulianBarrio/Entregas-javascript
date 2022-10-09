// fetch con api de nba mejores jugadores trayendo info

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'edbd74efb8msh71c81c9091cd4dbp103596jsn8f7c631923ed',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	}
};

const lista = document.getElementById("lista")

fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
	.then(response => response.json())
	.then((response) => response.data.forEach((info) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <p> <b>${info.first_name} ${info.last_name}</b> de ${info.team.full_name} de la conferencia ${info.team.conference} </p>
        <br>
        `
        lista.appendChild(li)
       
        
    }))
	.catch(err => console.error(err));
