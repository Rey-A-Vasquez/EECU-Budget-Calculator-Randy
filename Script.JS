const addTaskBtn = getElementById("add"); 
let task = JSON.parse(localStorage.getItem("Job")) || []; // Load task from local storage or empty array

async function getSalary(career) //get career salary from API
{
    try {
        const response = await fetch(`https://eecu-data-server.vercel.app/data${career}`); //Fetch salary data from API
        const data = await response.json(); //Parse the response as JSON
        return data.results[0].salary_min || 0; // Return minimum salary or 0 if not available
    } catch (error) { // Handle any errors that occur during the fetch operation
        console.error("Error fetching salary:", error); // Log the error to the console for debugging purposes
        return 0; // Return 0 in case of error
    }
}

function addTaskToList() {
    document.getElementById("add-cont").innerHTML = "<input type='number' class='new' id='new-expense'>";
    console.log('works');

}