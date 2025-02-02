export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error();
  }
  return await response.json();
};

export const postData = async (url, data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw Error();
  }
  return await response.json();
};
