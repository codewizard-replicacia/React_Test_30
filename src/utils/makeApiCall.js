const makeApiCall = (url, method = "GET", body, headers, isImage) => {
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        ...headers,
      },
    });
  }
  if (isImage) {
    return fetch(url, {
      method,
      body,
      headers: {
        ...headers,
      },
    });
  }
  return fetch(url, {
    method,
    body,
    headers: {
      "Content-type": "application/json",
      ...headers,
    },
  });
};

export default makeApiCall;
