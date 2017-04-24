// Create an app/actions/puppy.js file
// Create an apiUrl variable set to https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan (you'll update this later)
const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';
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
