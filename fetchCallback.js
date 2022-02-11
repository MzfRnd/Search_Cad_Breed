function fetchCb(url, cb) {
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "06c19bd0-c9a6-410b-a3be-5d0a1450e1d9",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      cb(data);
    });
}
