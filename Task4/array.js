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

// 4.1. ⭐ Отримати масив користувачів, які не підписані (not subscribed).

function getNotSubscribed(user) {
  if (user.isSubscribed === false) return user;
}

const arrNotSubscribed = users.filter(getNotSubscribed);
console.log("arrNotSubscribed :>> ", arrNotSubscribed);

// 4.2. ⭐ Вивести список повних імен користувачів.

function getUserNames(user) {
  return user.getFullName();
}
const userNames = users.map(getUserNames);
console.log("userNames :>> ");
console.table(userNames);

// 4.3. ⭐ Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

function getGirl(user) {
  if (user.isMale === false && user.age >= 6 && user.age <= 18) return user;
}

const userGirl = users.filter(getGirl).map(getUserNames);
console.log("userGirl :>> ");
console.table(userGirl);

// 4.4. ⭐ Видалити з масиву користувача з email  useremail5@gmail.com.

function findEmail(user) {
  return user.email === "useremail5@gmail.com";
}
const deleteEmail = users.findIndex(findEmail);
console.log("deleteEmail :>> ", deleteEmail);
users.splice(deleteEmail, 1);
console.table(users);

// 4.5. ⭐ Змінити email користувачу з id 2 (можна спробувати використати find).

function findId(user) {
  if (user.id === 2) return (user.email = "useremail2222222@gmail.com");
}
users.find(findId);
console.table(users);

// 4.6. ⭐ Визначити, який відсоток користувачів підписані (subscribed).

function subscribedUsers(user) {
  if (user.isSubscribed === true) return true;
}

const subUsers = users.filter(subscribedUsers);
const subUsersResult = Math.round((subUsers.length / users.length) * 100);
console.log("subUsersResult :>> ", subUsersResult);

// 4.7. ⭐ Знайти середній вік користувачів (спробувати використати reduce).

function averageAge(sumAverageAge, user) {
  return sumAverageAge + user.age;
}

const totalAge = users.reduce(averageAge, 0);
const resultAverageAge = Math.round(totalAge / users.length);
console.log("resultAverageAge :>> ", resultAverageAge);

// 4.8. ⭐ Впорядкувати користувачів за віком (від наймолодшого до найстаршого) (sort).
// 4.9. ⭐ Перевірити, чи є в масиві користувач з email'ом useremail7@gmail.com.
