const  user = {
  username: "JohnDoe",
  price: 100,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to my website`);
  }
}

user.welcomeMessage();