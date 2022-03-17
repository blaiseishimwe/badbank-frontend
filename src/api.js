const API_BASE_URL = "https://badbank-blaise.herokuapp.com";

export async function deposit({ id, depositAmount }) {
  const url = `${API_BASE_URL}/balances/deposit?id=${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ depositAmount }),
    });
    return response.json();
  } catch (error) {
    return { error };
  }
}

export async function withdraw({ id, withdrawAmount }) {
  const url = `${API_BASE_URL}/balances/withdraw?id=${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ withdrawAmount }),
    });
    return response.json();
  } catch (error) {
    return { error };
  }
}

export async function createaccount({ fullName, email, password }) {
  const url = `${API_BASE_URL}/users`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });
    return response.json();
  } catch (error) {
    return { error };
  }
}

export async function login({ email, password }) {
  const url = `${API_BASE_URL}/login`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  } catch (error) {
    return { error };
  }
}
