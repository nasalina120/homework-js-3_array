// Функція-конструктор для створення користувачів
function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Заповнення масиву десятьма об'єктами з описом користувача
for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90), // випадковий вік від 0 до 89
    Math.random() < 0.5, // випадкова стать
    `useremail${i}@gmail.com`,
    Math.random() < 0.5, // випадкова підписка
  );
  users.push(user);
}

console.table(users);
console.log("firstName users1 :>> ", users[0].getFullName());
