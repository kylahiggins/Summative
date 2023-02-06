// hamburger menu toggle
let menu = document.getElementById('menu');
let hidden_nav = document.getElementById('hidden_nav');

menu.onclick = function(){
    hidden_nav.classList.toggle('no-display')
};

// Local storage 

let recieved_people_input = localStorage.getItem('peopleInput');
document.getElementById('people').value = recieved_people_input;

let recieved_vehicle_input = localStorage.getItem('vehicleInput');
document.getElementById('vehicle').innerHTML = recieved_vehicle_input;

let recieved_pickup_location = localStorage.getItem('pickUplocation');
document.getElementById('pick_up_location').innerHTML = recieved_pickup_location;

let recieved_pickup_date = localStorage.getItem('pickUpdate');
let pick_up_date = document.getElementById('pick_up_date');
pick_up_date.value = recieved_pickup_date;

let recieved_dropoff_location = localStorage.getItem('dropOfflocation');
document.getElementById('drop_off_location').innerHTML = recieved_dropoff_location;

let recieved_droppoff_date = localStorage.getItem('dropOffdate');
let drop_off_date = document.getElementById('drop_off_date');
drop_off_date.value = recieved_droppoff_date;

let recieved_distance_input = localStorage.getItem('distanceInput');
document.getElementById('distance_options').value = recieved_distance_input;

// Database

let my_database = [

    {
        vehicle: 'Motorbike',
        name: 'Harley Davidson',
        peoplemin: 1,
        peoplemax: 1,
        mindays: 1,
        maxdays: 5,
        fuel: 3.7,
        transmission: 'Manual',
        image: 'https://www.bennetts.co.uk/-/media/bikesocial/2020-february-images/how-to-change-gears-on-a-motorbike/changing_up_motorbike_gears.ashx?h=444&w=740&la=en&hash=5DA4B5A9C6F6F5A33D239D425821693C9BF484B7',
        price: '$109',
        features: [ '749cc Displacement', '2 Cylinders', 'Liquid Cooled System', 'Digital Odometer', '13.1L Tank', '6 Speed'],
        id: 1
    },
    
    {
        vehicle: 'Hatchback',
        name: 'Suzuki Swift',
        peoplemin: 1,
        peoplemax: 2,
        mindays: 1,
        maxdays: 10,
        fuel: 8.5,
        transmission: 'Automatic',
        image: 'https://www.topgear.com/sites/default/files/2021/07/5054-SwiftSportHybrid.jpg',
        price: '$129',
        features: ['Air Conditioned', 'CD Player', 'FM Radio', 'Power Steering', 'Central Locking', 'ABS Brakes', 'Airbags'],
        id: 2
    },

    {
        vehicle: 'Compact SUV',
        name: 'Mistubishi ASX',
        peoplemin: 1,
        peoplemax: 5,
        mindays: 3,
        maxdays: 10,
        fuel: 9.7,
        transmission: 'Automatic',
        image: 'https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/segment_review/hero_image/mitsubishi-asx-gsr-orange-my20-tw-1001x565-%281%29.jpg',
        price: '$144',
        features: ['Air Conditioned', 'Cruise Control', 'Bluetooth Sound System', 'Power Steering', 'Central Locking', 'ABS & EPS Brakes', 'USB ports x2'],
        id: 3
    },

    {
        vehicle: 'Motorhome',
        name: 'Toyota Hiace',
        peoplemin: 2,
        peoplemax: 6,
        mindays: 2,
        maxdays: 15,
        fuel: 17,
        transmission: 'Automatic',
        image: 'https://www.jucy.com/assets/NZ-LIFESTYLE-IMAGERY/1440-x-960_HERO/CAMPERS/CHASER/two-women-laughing-in-chaser-in-mountain-valley__FocusFillMaxWyIwLjAwIiwiMC4wMCIsMTI3MCw1OTBd.jpg',
        price: '$200',
        features: ['Gas Cooker', '50L Fridge', 'Bluetooth Sound System', '2 Double Beds', 'In-built Bathroom', 'Air Conditioned', 'Interior Lighting'],
        Secondfeatures: ['Auto', 'Petrol', 'Self Contained', 'Outdoor Chairs', 'Fresh Water Tank'],
        id: 4
    }    
]
let gas_price = 2.50;

// Object Builder

let results_section = document.getElementById('results_section');
function create_result_card(result_object){
    let results_container = document.createElement('div');
    results_container.classList.add('results-container');
    results_container.id = result_object.vehicle;
    results_section.appendChild(results_container);

    let flex_div_one = document.createElement("div");
    flex_div_one.classList.add("flex-div");
    results_container.appendChild(flex_div_one);

    let vehicle_img_wrapper = document.createElement("div");
    vehicle_img_wrapper.classList.add("vehicle-img-wrapper");
    flex_div_one.appendChild(vehicle_img_wrapper);

    let img = document.createElement("img");
    img.src = result_object.image;
    vehicle_img_wrapper.appendChild(img);

    let vehicle_name_div = document.createElement("div");
    vehicle_name_div.classList.add("title");
    vehicle_name_div.innerHTML = result_object.vehicle;
    flex_div_one.appendChild(vehicle_name_div);

    let div_row = document.createElement("div");
    div_row.classList.add('title-row');
    flex_div_one.appendChild(div_row);

    let vehicle_model = document.createElement("div");
    vehicle_model.classList.add('sub-title');
    vehicle_model.innerHTML = result_object.name;
    div_row.appendChild(vehicle_model);

    let fuel_display = document.createElement('div');
    fuel_display.classList.add('sub-title');
    fuel_display.innerHTML = result_object.fuel + '' + 'L/100km';
    div_row.appendChild(fuel_display);

    let flex_div_two = document.createElement('div');
    flex_div_two.classList.add('flex-div');
    results_container.appendChild(flex_div_two);

    let centred_div = document.createElement('div');
    centred_div.classList.add('centred-div');
    flex_div_two.appendChild(centred_div);

    let feature_title = document.createElement('div');
    feature_title.classList.add('feature-title');
    feature_title.innerHTML = 'Vehicle Features:';
    centred_div.appendChild(feature_title);

// fuction for populating features list
let create_feature_list = function(result_object){
    let feature_rows = document.createElement('div');
    feature_rows.classList.add('row');
    centred_div.appendChild(feature_rows);

    let feature_div = document.createElement('div');
    feature_div.classList.add('feature');
    feature_rows.appendChild(feature_div);

    let feature_span = document.createElement('span');
    feature_span.classList.add('material-symbols-outlined', 'green')
    feature_span.innerHTML = 'done';
    feature_div.appendChild(feature_span);

    let feature = document.createElement('p');
    feature.innerHTML = result_object;
    feature.classList.add('sub-title');
    feature_div.appendChild(feature);
}

let white_div = document.createElement('div');
white_div.classList.add('flex-div', 'white');
results_container.appendChild(white_div);

let cost_title = document.createElement('div');
cost_title.classList.add('title', 'purple');
cost_title.innerHTML = result_object.price + ' ' + 'NZD/day';
white_div.appendChild(cost_title);

let protection_title = document.createElement('div');
protection_title.classList.add('sub-title');
protection_title.innerHTML = 'Basic Protection Included';
white_div.appendChild(protection_title);

let selected_distance = document.getElementById('distance_options').value;

let estimated_fuel_cost = document.createElement('div');
estimated_fuel_cost.classList.add('sub-title','fuel-cost');
estimated_fuel_cost.innerHTML ='Estimated Fuel Cost:' + ' ' + '$' + result_object.fuel * selected_distance / 100 * gas_price;
white_div.appendChild(estimated_fuel_cost);

let select_btn = document.createElement('div');
select_btn.classList.add('select-btn');
select_btn.innerHTML = 'Select';
white_div.appendChild(select_btn);

// for loop for populating features
for (let i = 0; i < result_object.features.length; i++) {
    create_feature_list(result_object.features[i]);
  }
    }  

    
// for loop for creating result cards
for (let i = 0; i < my_database.length; i++) {
    create_result_card(my_database[i]);
  }

// autommatic first search when landing on page
search_calculate();  

// Filter Results

let search_btn = document.getElementById('search_btn');
search_btn.onclick = search_calculate;

function search_calculate(){
let peopleNum = document.getElementById('people').value; 

// Date Difference
let date_one_val = document.getElementById('pick_up_date').value;
let date_two_val = document.getElementById('drop_off_date').value;
let difference = calculate_day_difference(date_one_val,date_two_val);
function calculate_day_difference(first_date_value, second_date_value){
    let first_date = new Date(first_date_value);
    let second_date = new Date(second_date_value);
    let date_difference_in_miliseconds = second_date.getTime() - first_date.getTime();
    let difference_in_days = date_difference_in_miliseconds / (1000*3600*24);
    return difference_in_days;
}

// put result error back on page
document.getElementById('results_error_msg').classList.remove('no-display');


// Vehicle Filter

for(i=0; i< my_database.length; i++){ // for(vehicle of my database)
    if(my_database[i].peoplemin <= peopleNum && my_database[i].peoplemax >= peopleNum && my_database[i].mindays <= difference  && my_database[i].maxdays >= difference){
        document.getElementById(my_database[i].vehicle).classList.remove('no-display');
        document.getElementById('results_error_msg').classList.add('no-display');
        }
    else 
        document.getElementById(my_database[i].vehicle).classList.add('no-display');    

       
// Fuel Cost Calculation
let selected_distance = document.getElementById('distance_options').value;
// 
let fuel_cost = document.getElementsByClassName('fuel-cost');
for (let i = 0; i < my_database.length; i++) {
   fuel_cost[i].innerHTML = 'Estimated Fuel Cost:' + ' ' + '$' + my_database[i].fuel * selected_distance / 100 * gas_price;  
}

}



}
