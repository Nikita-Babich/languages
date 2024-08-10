async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random'); // Fetch the data from the API
        const data = await response.json(); // Parse the JSON data from the response
        return data.content; // Return the "content" field
    } catch (error) {
        console.error('Error fetching the quote:', error);
        return null; // Return null or handle the error appropriately
    }
}

document.getElementById('refreshButton').addEventListener('click', 
	async () => {
		const quote = await fetchQuote(); // Fetch the quote
		document.getElementById('english').innerText = quote; // Display the quote in the div
	}
);