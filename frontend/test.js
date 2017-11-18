$.ajax({
  url: "/api/users",
  method: "POST",
  data: {user:{email: "max@gmail.com",
               name: "max",
               password: "123456",
              }}
});

$.ajax({
  url: "/api/session",
  method: "POST",
  data: {user:{email: "max@gmail.com",
               password: "123456"
              }}
});

$.ajax({
  url: "/api/session",
  method: "DELETE"
});

User.new(email: "max@gmail.com", name: "max", password: "123456")
