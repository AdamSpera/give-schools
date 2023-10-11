// Function to get data from the server
function getData() {
  const url = 'https://give-schools.pages.dev/getData';

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error getting data:', error);
      throw error;
    });
}

// Function to get schools from the server
function getSchools() {
  const url = 'https://give-schools.pages.dev/getSchools';

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error getting schools:', error);
      throw error;
    });
}

// Log a message and call the functions to get data and schools
console.log('Getting data from Cloudflare D1...');
Promise.all([getData(), getSchools()])
  .then(([data, schools]) => {
    console.log('Data:', data);
    console.log('Schools:', schools);
  })
  .catch(error => {
    console.error('Error:', error);
  });