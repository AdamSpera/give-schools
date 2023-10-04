// document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('getData').addEventListener('click', async () => {
    console.log('click');
    // Define the URL of your Cloudflare function
    const url = 'https://give-schools.pages.dev/getData';

    // Send a GET request to the function
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Do something with the data
        console.log(data);
      })
      .catch(error => {
        // Handle errors, like network issues or invalid JSON
        console.error('There has been a problem with your fetch operation:', error);
      });

  });
// });
