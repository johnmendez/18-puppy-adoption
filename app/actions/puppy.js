// Create an app/actions/puppy.js file
// Create an apiUrl variable set to https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan (you'll update this later)
const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function parseJson(r) {
  return r.json();
}

// Export a named findAllComplete function that returns an action object for PUPPY@FINDALL_COMPLETE
export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

// Export a named findAll function that returns a thunk
// Make a GET request to the apiUrl
export function findAll() {
  return dispatch => fetch(apiUrl)
  // Make a GET request to the apiUrl
    .then(r => r.json())
      // Dispatch findAllComplete with the data sent by the server
    .then(puppies => dispatch(findAllComplete(puppies)));
}


// Export a named createComplete function that returns an action object for PUPPY@CREATE_COMPLETE
export function createComplete(data = []) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data,
  };
}


// Export a named create function that takes in an argument formData and returns a thunk
export function create(formData) {
   //  Make a POST request to the apiUrl with headers, and JSON stringified body
  return dispatch => fetch(apiUrl, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
     //  Parse json from the server response
  }).then(parseJson)
   .then((puppy) => {
     //  Dispatch createComplete with the data sent by the server
     dispatch(createComplete(puppy));
   });
}

 // Export a named findOneComplete function that returns an action object for PUPPY@FINDONE_COMPLETE
export function findOneComplete(data = {}) {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
    data,
  };
}
// Export a named findOne function that takes in an argument id and returns a thunk
export function findOne(id) {
  //  Make a GET request to the apiUrl/id
  return dispatch => fetch(`${apiUrl}/${id}`)
  //  Parse json from the server response
  .then(parseJson)
  //  Dispatch findOneComplete with the data sent by the server
    .then((response) => {
      dispatch(findOneComplete(response));
    });
}
// Export a named updateComplete function that returns an action object for PUPPY@FINDONE_COMPLETE
export function updateComplete(data = {}) {
  return {
    type: 'PUPPY@UPDATE_COMPLETE',
    data,
  };
}


// Export a named update function that takes in arguments id and formData and returns a thunk
export function update(id, formData) {
  // Make a PUT request to the apiUrl/id with headers, and JSON stringified body
  return dispatch => fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
    // Parse json from the server response
  }).then(parseJson)
    .then((puppy) => {
      // Dispatch updateComplete with the data sent by the server
      dispatch(updateComplete(puppy));
    });
}
// Export a named toggleAdopted function that takes a single argument puppy and returns a thunk
export function toggleAdopted(puppy) {
  //  Create a new object that spreads the old puppy object and adds a value for adopted set to the opposite of the old adopted value for the puppy
  // Dispatch update passing in the puppy.id, and new object as arguments
  return update(puppy.id, { ...puppy, adopted: !puppy.adopted });
}
