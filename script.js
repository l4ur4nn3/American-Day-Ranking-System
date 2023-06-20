var ranking = []; // Array to store the ranking data

window.onload = function () {
    // When the page loads, retrieve the ranking data from localStorage
    var rankingData = localStorage.getItem("rankingData");
    if (rankingData) {
        ranking = JSON.parse(rankingData); // Parse the JSON data and assign it to the ranking array
        displayRanking(); // Display the ranking on the page
    }
};

function addRanking() {
    // Function to add a new ranking entry
    var name = document.getElementById("name").value; // Get the name input value
    var score = document.getElementById("score").value; // Get the score input value

    if (name.trim() === "" || score.trim() === "") {
        // If name or score is empty, show an alert and return
        alert("Veuillez remplir tous les champs.");
        return;
    }

    var data = { name: name, score: score }; // Create an object with name and score
    ranking.push(data); // Add the data to the ranking array

    localStorage.setItem("rankingData", JSON.stringify(ranking)); // Store the ranking array in localStorage

    displayRanking(); // Display the updated ranking on the page
    displayRankingClone(); // Display the updated ranking clone on the page

    document.getElementById("name").value = ""; // Clear the name input field
    document.getElementById("score").value = ""; // Clear the score input field
}

document.getElementById("name").addEventListener("keydown", function (event) {
    // Event listener for the name input field keydown event
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter key behavior
        document.getElementById("score").focus(); // Move focus to the score input field
    }
});

document.getElementById("score").addEventListener("keydown", function (event) {
    // Event listener for the score input field keydown event
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default Enter key behavior
        addRanking(); // Add the ranking entry
    }
});

function deleteRanking(index) {
    // Function to delete a ranking entry given its index
    ranking.splice(index, 1); // Remove the entry from the ranking array
    displayRanking(); // Display the updated ranking on the page
    localStorage.setItem("rankingData", JSON.stringify(ranking)); // Update the ranking data in localStorage

    displayRankingClone(); // Display the updated ranking clone on the page
}

function displayRanking() {
    // Function to display the ranking on the page
    var rankingList = document.getElementById("ranking");
    rankingList.innerHTML = ""; // Clear the existing ranking list

    ranking.sort(function (a, b) {
        return b.score - a.score; // Sort the ranking array in descending order of score
    });

    for (var i = 0; i < ranking.length; i++) {
        var data = ranking[i];
        var ligne = document.createElement("li");
        var numero = document.createElement("span");
        numero.textContent = (i + 1) + ". "; // Display the ranking number
        ligne.appendChild(numero);
        ligne.textContent += data.name + " - " + data.score + " minute(s)"; // Display the name and score

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.setAttribute("data-index", i); // Set the data-index attribute to the entry's index
        deleteButton.addEventListener("click", function (event) {
            var index = event.target.getAttribute("data-index");
            deleteRanking(index); // Delete the entry when the delete button is clicked
        });

        ligne.appendChild(deleteButton);
        rankingList.appendChild(ligne);

        displayRankingClone(); // Update the ranking clone
    }
}

function showPodium() {
    // Function to display the podium (top 3 rankings)
    var podiumList = document.getElementById("meilleursrankings");
    podiumList.innerHTML = ""; // Clear the existing podium list

    ranking.sort(function (a, b) {
        return b.score - a.score; // Sort the ranking array in descending order of score
    });

}

function displayRankingClone() {
    // Function to display the ranking clone (top 3 rankings)
    var rankingCloneListe = document.getElementById("rankingClone");
    rankingCloneListe.innerHTML = ""; // Clear the existing ranking clone list

    for (var i = 0; i < 3; i++) {
        var data = ranking[i];
        var ligne = document.createElement("li");
        var numero = document.createElement("span");
        numero.textContent = (i + 1) + ". "; // Display the ranking number
        ligne.appendChild(numero);
        ligne.textContent += data.name + " - " + data.score + " minute(s)"; // Display the name and score

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.setAttribute("data-index", i); // Set the data-index attribute to the entry's index
        deleteButton.addEventListener("click", function (event) {
            var index = event.target.getAttribute("data-index");
            deleteRanking(index); // Delete the entry when the delete button is clicked
        });

        ligne.appendChild(deleteButton);
        rankingCloneListe.appendChild(ligne);
    }
}

var deleteButtonLocalStorage = document.createElement("button");
deleteButtonLocalStorage.textContent = "Supprimer tout";
deleteButtonLocalStorage.addEventListener("click", function () {
    var confirmation = confirm("Êtes-vous sûr de vouloir supprimer la totalité des données ? Cette action est irréversible.");

    if (confirmation) {
        localStorage.clear(); // Clear the localStorage
        ranking = []; // Clear the ranking array
        displayRanking(); // Clear the ranking on the page
        displayRankingClone(); // Clear the ranking clone on the page
    }
});

document.getElementById("score").addEventListener("input", function (event) {
    // Event listener for the score input field input event
    var scoreInput = event.target;
    scoreInput.value = scoreInput.value.replace(/,/g, '.'); // Replace comma with dot in the score input
});

var divMain = document.querySelector(".main");
divMain.appendChild(deleteButtonLocalStorage); // Add the delete button for clearing localStorage to the page
