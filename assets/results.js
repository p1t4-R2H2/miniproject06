var resultsContainerEl = document.querySelector('#resultsContainerEl');



var getSearchTerm=function(){
    var queryString = document.location.search;
    var termName = queryString.split('=')[1]
    console.log(termName);

    if(termName){
        resultsContainerEl.textContent=termName;
        getSearchResults(termName);
    }
    else{
        document.location.replace('./index.html');
    }
}






   var getSearchResults = function(term){
    var apiUrl = 'https://www.loc.gov/search/?q=' + term + '&fo=json'
    
    fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          var results = data.results                                                                                                          
          console.log(data);
          displayResults(data, results);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });

}

var displayResults = function (data, results){
    
    if(results.length===0){
        resultsContainerEl.textContent= 'No results found';
        return;
    }
    //change 'baseball' back to searchTerm
    // resultsContainerEl.textContent=searchTerm;

    for(var i=0; i<results.length; i++){
        var resultName=JSON.stringify(results[i].url);
        var resultEl = document.createElement('div');
        //resultEl.classList = 
        
        var titleEl = document.createElement('a');
        titleEl.addClass("")
        titleEl.textContent=resultName;

        resultEl.appendChild(titleEl);

        var statusEl=document.createElement('span');
        //statusEl.classList = 
        

        resultEl.appendChild(statusEl);

        resultsContainerEl.appendChild(resultEl);
        

        
    }
};

getSearchTerm();