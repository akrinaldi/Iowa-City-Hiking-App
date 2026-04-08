const tenhikes = {"Hickory Hill":1.3,"Ryserson's Woods":3.4,"Hora Woods": 9.7,"Big Grove/Schwab-Burford Acquisition":10};
const tfhikes = {"Redbird Farms Wildlife Area":10.7,"Pechman Creek Delta":11.2,"Frytown Conservation Area":11.4,"Lake MacBride State Park":17,"Ciha Fen":22.3,"Cone Marsh":23.3,"Rochester Cemetery":23.7};
const tfplushikes = {"Red Cedar Wildlife Area":25.4,"Land of the Swamp White Oak":28.4,"Eden Park":31.7,"Cedar Bluffs Recreation Area":36.4,"Chinkapin Bluffs":37.4,"Sockum Ridge":39.8,"Brinton Timber":47.6,"Port Louisa":48.3};
const allhikes = { ...tenhikes, ...tfhikes, ...tfplushikes };




// if userValue is 10mi, return hikes from tenhikes to the results box
// if userValue is 25mi, return hikes from tfhikes to the results box
// if userValue is 25plusmi, return hikes from tfplushikes to the results box
// if userValue is anymi, return hikes from allhikes to the results box



const hikeSelect = function hikeSelect() {
    const resultsBox = document.getElementById("results-container");
    const resultsList = document.createElement('ul');

    const distances = document.querySelectorAll('input[name="distance"]')
    for (const distance of distances) {
        if (distance.checked) {
            let userValue = distance.value;
            if (userValue === "10mi") {
                console.log("10");
                for (const [key, value] of Object.entries(tenhikes)) {
                    const hike = document.createElement('li');
                    hike.textContent = `${key}: ${value} mi`;
                    resultsList.appendChild(hike);
                    resultsBox.appendChild(resultsList);
                }
            } else if (userValue === "25mi") {
                console.log("25");
                for (const [key, value] of Object.entries(tfhikes)) {
                    const hike = document.createElement('li');
                    hike.textContent = `${key}: ${value} mi`;
                    resultsList.appendChild(hike);
                    resultsBox.appendChild(resultsList);
                }
             } else if (userValue === "25plusmi") {
                console.log("25+");
                for (const [key, value] of Object.entries(tfplushikes)) {
                    const hike = document.createElement('li');
                    hike.textContent = `${key}: ${value} mi`;
                    resultsList.appendChild(hike);
                    resultsBox.appendChild(resultsList);
                    
                }
            } else if (userValue === "anymi") {
                console.log("any");
                for (const [key, value] of Object.entries(allhikes)) {
                    const hike = document.createElement('li');
                    hike.textContent = `${key}: ${value} mi`;
                    resultsList.appendChild(hike);
                    resultsBox.appendChild(resultsList);
                    
                }
            } else {
                console.log("Error: No hike distance option selected");
          }
        } else {
            continue;
        }
    
    }
}

//onclick

const clearHikesButton = document.getElementById("clearHikes");

clearHikesButton.addEventListener('click', function() {
    document.getElementById('results-container').innerHTML = '';
});

document.getElementById("descriptions");


