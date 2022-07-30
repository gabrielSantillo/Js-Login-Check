let token = Cookies.get(`token`);

let main = document.querySelector(`main`);

if(token !== undefined) {
    
    main.insertAdjacentHTML(`beforeend`,
     `
     <button id="log_out">Log out</button>
    `)
}
else {
    main.insertAdjacentHTML(`beforeend`, 
    `
    <h1>Go back and try a valid email and password</h1>
    `)
}

function logoutFunction(details) {
    Cookies.remove(`token`);
    location.href = `/index.html`;
}

let log_out_button = document.getElementById(`log_out`);
log_out_button.addEventListener(`click`, logoutFunction)