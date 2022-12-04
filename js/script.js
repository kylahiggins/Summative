let menu = document.getElementById('menu');
let hidden_nav = document.getElementById('hidden_nav');

menu.onclick = function(){
    hidden_nav.classList.toggle('no-display')
};

let search = document.getElementById('search_btn');

search.onclick = function(){
    window.location = './results.html';
}




// Database

let my_database = [

    {
        vehical: 'Motorbike',
        name: 'Harley Davidson',
        peoplemin: '1',
        peoplemax: '1',
        mindays: '1',
        maxdays: '5',
        fuel: '3.7l/100km',
        transmission: 'Manual',
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/category-images/2021/hero-cards-3-up/cruiser-motorcycle-1x1.jpg?impolicy=myresize&rw=650',
        price: '$109/day',
        features: [ '749cc Displacement', '2 Cylinders', 'Liquid Cooled System', 'Digital Odometer', '13.1L Tank', '6 Speed']
    },
    
    {
        vehical: 'Small Car',
        name: 'Suzuki Swift',
        peoplemin: '1',
        peoplemax: '2',
        mindays: '1',
        maxdays: '10',
        fuel: '8.5l/100km',
        transmission: 'Automatic',
        image: 'https://www.topgear.com/sites/default/files/2021/07/5054-SwiftSportHybrid.jpg',
        price: '$129/day',
        features: ['Air Conditioned', 'CD Player', 'FM Radio', 'Power Steering', 'Central Locking', 'ABS Brakes', 'Airbags']
    },

    {
        vehical: 'Large Car',
        name: 'Mistubishi ASX',
        peoplemin: '1',
        peoplemax: '5',
        mindays: '3',
        maxdays: '10',
        fuel: '9.7l/100km',
        transmission: 'Automatic',
        image: 'https://www.topgear.com/sites/default/files/2021/07/5054-SwiftSportHybrid.jpg',
        price: '$144/day',
        features: ['Air Conditioned', 'Cruise Control', 'Bluetooth Sound System', 'Power Steering', 'Central Locking', 'ABS & EPS Brakes', 'USB ports x2']
    },

    {
        vehical: 'Motorhome',
        name: 'Jucy Chaser',
        peoplemin: '2',
        peoplemax: '6',
        mindays: '2',
        maxdays: '15',
        fuel: '17l/100km',
        transmission: 'Automatic',
        image: 'https://www.topgear.com/sites/default/files/2021/07/5054-SwiftSportHybrid.jpg',
        price: '$200/day',
        features: ['Gas cooker', '50L Fridge', 'Bluetooth Sound System', 'In-built Bathroom', 'Inside table', '2 Double beds', 'Self-contained']
    },
]