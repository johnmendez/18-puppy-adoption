import _ from 'lodash';
// Use _.unionBy to create a reducer function that responds to: (refer to the library reducer)
export default function puppies(state = [], action) {
  switch (action.type) {
    case 'PUPPY@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, 'id');
    case 'PUPPY@FINDDONE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    case 'PUPPY@CREATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    case 'PUPPY@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');
    default:
      return state;
  }
}
