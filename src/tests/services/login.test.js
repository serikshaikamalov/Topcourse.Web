test("Auth login", async () => {
  const data = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "serik.shaikamalov@gmail.com",
      password: "123123",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  expect(data).toHaveProperty("user");
  expect(data).toHaveProperty("token");
});
