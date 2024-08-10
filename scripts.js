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

async function fetchTranslation(sentence, targetLang) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(sentence)}&langpair=en|${encodeURIComponent(targetLang)}`;
    try {
        const response = await fetch(url); // Fetch the translation
        const data = await response.json(); // Parse the JSON response
        return data.responseData.translatedText; // Return the translated text
    } catch (error) {
        console.error('Error fetching the translation:', error);
        return "Failed to fetch translation."; // Handle the error and provide feedback
    }
}

function clean(){
	document.getElementById('english').innerText = '';
	document.getElementById('german').innerText = '';
	document.getElementById('slovak').innerText = '';
	document.getElementById('russian').innerText = '';
}

document.getElementById('refreshButton').addEventListener('click', 
	async () => {
		clean();
		const quote = await fetchQuote(); // Fetch the quote
		document.getElementById('english').innerText = quote; // Display the quote in the div
		
			let translation;
		translation = await fetchTranslation(quote, 'de'); // Fetch the translation
		document.getElementById('german').innerText = translation; // Display the translation in the german div
		
		translation = await fetchTranslation(quote, 'sk'); 
		document.getElementById('slovak').innerText = translation; 
		
		translation = await fetchTranslation(quote, 'ru'); 
		document.getElementById('russian').innerText = translation; 
	}


);