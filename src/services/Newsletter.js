import { NEWSLETTER_API } from "./api";

export async function createUser(userForm) {
  const userFormJson = JSON.stringify(userForm);
  const options = {
    method: "post",
    body: userFormJson,
    headers: { "content-type": "application/json" },
  };

  const response = await fetch(NEWSLETTER_API, options).then((res) =>
    res.json().then((data) => data)
  );

  return response;
}

export async function messageStatus(res) {
  const response = await createUser(res);
  if (response.status === "error") {
    var errorCode = response.status;
    var errorMessage = response.message;
    return { data: { errorCode, errorMessage }, success: false };
  } else {
    return { data: response, success: true };
  }
}
