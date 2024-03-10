const baseURL = import.meta.env.SERVER_URL;


async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    console.log("IT WORKED", res);
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export async function loginRequest(cred) {
  const res = await fetch(baseURL + "/login", { //
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cred),
  });
  const token = await convertToJson(res);
  return token;
}

