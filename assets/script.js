var searchBar = document.querySelector('#searchBar');
var submitButton = document.querySelector('#submitButton');
var searchTerm 
var resultsContainerEl = document.querySelector('#resultsContainerEl');


console.log('script attached');
console.log(document.location);

var formSubmitHandler = function(){
    let searchTerm = searchBar.value.trim();
    console.log('Submit button clicked!');
    console.log(searchTerm);
    //getSearchResults()
    location.replace('assets/resultsPage.html?searchterm=' + searchTerm);                            
}




submitButton.addEventListener('click', formSubmitHandler);