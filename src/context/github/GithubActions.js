// Get search results

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  try {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const { items } = await response.json();

    return items;
  } catch (error) {
    console.log(error);
  }
};

// Get User repos

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  try {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get Single user

export const getUser = async (login) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
