

// hamburger menu toggle
let menu = document.getElementById('menu');
let hidden_nav = document.getElementById('hidden_nav');

menu.onclick = function(){
    hidden_nav.classList.toggle('no-display')
};

// Local storage

document.getElementById('search_btn').onclick = function(){
    let people_input = document.getElementById('people').value;
    localStorage.setItem('peopleInput', people_input);

    let vehicle_input = document.getElementById('vehicle').value;
    localStorage.setItem('vehicleInput', vehicle_input);

    let pick_up_location_input = document.getElementById('pick_up_location').value;
    localStorage.setItem('pickUplocation', pick_up_location_input);

    let pick_up_date_input = document.getElementById('pick_up_date').value;
    localStorage.setItem('pickUpdate', pick_up_date_input);

    let drop_off_location_input = document.getElementById('drop_off_location').value;
    localStorage.setItem('dropOfflocation', drop_off_location_input);

    let drop_off_date_input = document.getElementById('drop_off_date').value;
    localStorage.setItem('dropOffdate', drop_off_date_input); 

    let distance_input = document.getElementById('distance_options').value;
    localStorage.setItem('distanceInput', distance_input);


    if(pick_up_date_input && drop_off_date_input )
        window.location = '../results.html';

        else
        document.getElementById('pick_up_error').classList.remove('no-display');
        document.getElementById('drop_off_error').classList.remove('no-display');
};








