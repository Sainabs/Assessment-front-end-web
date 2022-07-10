console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert ("Submitted successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


const cat = document.querySelector('img');
cat.addEventListener('mouseover', () => {
	alert('you are stronger than a bulldozer!');
  });



const RestaurantsRecommendationBtn=document.querySelector('#Restaurants')
RestaurantsRecommendationBtn.addEventListener('click',() => {
		alert ('Capitol Cafe Mpls')
	});
RestaurantsRecommendationBtn= ["Capitol Cafe Mpls", "Birchwood Cafe", "Gandhi Mahal"];
const random = Math.floor(Math.random() * Restaurants.length);
console.log(random, Restaurants[random]);

