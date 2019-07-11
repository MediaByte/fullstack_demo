export const apiCall = (link, page) =>
  fetch(link, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      page: page
    })
  }).then(response => response.json());

  