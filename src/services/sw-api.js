export function getAllStarShips(endpoint) {
    console.log('endpoint 2 ', endpoint);
    return (fetch(endpoint, {mode: 'cors'}).then(res => res.json()));
  }