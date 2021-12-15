"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("feedbacks", [
      {
        id: "493abbed-369b-4dd7-b59b-00ed9ab280cf",
        feedback_date: new Date(),
        rating: 5,
        avatar: "",
        firstname: "Dareia",
        lastname: "Kamau",
        review:
          "i love it so much!!! i would buy it again every time if i could. it is so soft und so pretty. I recommended it to allll my friends and everyone is impressed :)",
        status: "visible",
        createdAt: new Date("2020-12-17T03:24:00"),
        updatedAt: new Date(),
      },
      {
        id: "ff5ff18b-713e-45e9-aec8-3920efa0c8cc",
        feedback_date: new Date(),
        rating: 3,
        avatar: "",
        firstname: "Janella",
        lastname: "Mah",
        review:
          "it's okay, unfortunately it doesn't suit me that much. but from the material and the fabrication it's good.",
        status: "visible",
        createdAt: new Date("2021-02-02T03:24:00"),
        updatedAt: new Date(),
      },
      {
        id: "793e0cf3-a016-4f3e-b12b-ada5bc50f32c",
        feedback_date: new Date(),
        rating: 5,
        avatar: "",
        firstname: "Yamin",
        lastname: "Miura",
        review:
          "I bought it as a gift and the person is absolutely over the moon. She says she doesn't wear anything else! Ava tempted me to buy this and I'm grateful to her.",
        status: "visible",
        createdAt: new Date("2021-03-21T03:24:00"),
        updatedAt: new Date(),
      },
      {
        id: "f39c8db3-501e-45be-8586-a597d069a2e0",
        feedback_date: new Date(),
        rating: 4,
        avatar: "",
        firstname: "Lys",
        lastname: "Windsor",
        review:
          "Beautiful cut, beautiful color, beautiful clothes! Madewell never disappoints me.",
        status: "visible",
        createdAt: new Date("2021-08-01T03:24:00"),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("feedbacks", null, {});
  },
};
