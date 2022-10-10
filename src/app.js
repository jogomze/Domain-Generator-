let prefix = ["Amazing", "Cool", "Big", "Super", "Very", "Inmportant"];
let word = ["code", "tech", "program", "database", "software", "software"];

for (let i = 0; i < prefix.length; i++) {
  for (let j = 0; j < word.length; j++) {
    console.log(prefix[i] + word[j] + ".com");
  }
}
document.getElementById("domain").innerHTML = "Hello";
