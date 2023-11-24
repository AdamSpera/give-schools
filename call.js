// Function to get data from the server
function getData() {
  const url = `${window.location.href}getData`;

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
  const url = `${window.location.href}getSchools`;

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
