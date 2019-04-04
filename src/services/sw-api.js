export function getAllStarShips(endpoint) {
    return (fetch(endpoint, {mode: 'cors'}).then(res => res.json()));
  }