export async function api(url, method, token, body) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  if (token !== ""){
    headers["Authorization"] = "Bearer "+token
  }
  const res = await fetch(url, {
    method: method,
    headers:headers,
    body: body
  })
  if (!res.ok) {
    throw new Error(res.error)
  }
  const data = await res.json()
  return data

}

export async function apiNO_PAY(url, token, method) {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  if (!res.ok) {
    throw new Error(res.error)
  }
  const data = await res.json()
  return data

}