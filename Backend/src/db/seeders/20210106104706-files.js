"use strict";
const { v4: uuidv4 } = require("uuid");
/* https://imgur.com/a/Fs8hHE2 */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("files", [
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1861",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product1.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product1.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product1.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1862",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product2.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product2.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product2.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1863",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product3.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product3.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product3.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1864",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product4.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product4.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product4.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1865",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product5.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product5.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product5.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1866",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product6.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product6.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product6.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1867",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product7.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product7.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product7.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1868",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product8.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product8.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product8.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "products",
        belongsToColumn: "image",
        belongsToId: "afaf98d5-4060-4408-967b-c4f4af3d1869",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "product9.jpeg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/products/product9.jpeg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/products/product9.jpeg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        belongsTo: "feedbacks",
        belongsToColumn: "image",
        belongsToId: "493abbed-369b-4dd7-b59b-00ed9ab280cf",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "person1.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/feedback/person1.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/feedback/person1.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "feedbacks",
        belongsToColumn: "image",
        belongsToId: "ff5ff18b-713e-45e9-aec8-3920efa0c8cc",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "person2.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/feedback/person2.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/feedback/person2.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "feedbacks",
        belongsToColumn: "image",
        belongsToId: "793e0cf3-a016-4f3e-b12b-ada5bc50f32c",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "person3.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/feedback/person3.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/feedback/person3.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "feedbacks",
        belongsToColumn: "image",
        belongsToId: "f39c8db3-501e-45be-8586-a597d069a2e0",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "person4.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/feedback/person4.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/feedback/person4.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        belongsTo: "blogs",
        belongsToColumn: "author_avatar",
        belongsToId: "07aeff53-31e5-4276-8307-f855b22b6436",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "author_avatar.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_1.png",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_1.png",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "hero_image",
        belongsToId: "07aeff53-31e5-4276-8307-f855b22b6436",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "hero_image.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/first_hero.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/first_hero.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_one",
        belongsToId: "07aeff53-31e5-4276-8307-f855b22b6436",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_one.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_one.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_one.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_two",
        belongsToId: "07aeff53-31e5-4276-8307-f855b22b6436",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_two.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_two.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_two.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_three",
        belongsToId: "07aeff53-31e5-4276-8307-f855b22b6436",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_three.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_three.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_three.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        belongsTo: "blogs",
        belongsToColumn: "author_avatar",
        belongsToId: "c4245ff9-6a53-4b13-8539-0b69b442cfd1",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "author_avatar.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_1.png",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_1.png",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "hero_image",
        belongsToId: "c4245ff9-6a53-4b13-8539-0b69b442cfd1",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "hero_image.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/second_hero.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/second_hero.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_one",
        belongsToId: "c4245ff9-6a53-4b13-8539-0b69b442cfd1",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_four.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_four.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_four.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_two",
        belongsToId: "c4245ff9-6a53-4b13-8539-0b69b442cfd1",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_five.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_five.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_five.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_three",
        belongsToId: "c4245ff9-6a53-4b13-8539-0b69b442cfd1",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_six.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_six.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_six.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        belongsTo: "blogs",
        belongsToColumn: "author_avatar",
        belongsToId: "57fbad3f-528a-43b2-83e8-32ba30708194",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "author_avatar.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_2.png",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_2.png",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "hero_image",
        belongsToId: "57fbad3f-528a-43b2-83e8-32ba30708194",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "hero_image.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/third_hero.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/third_hero.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_one",
        belongsToId: "57fbad3f-528a-43b2-83e8-32ba30708194",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_four.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_four.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_four.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_two",
        belongsToId: "57fbad3f-528a-43b2-83e8-32ba30708194",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_five.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_five.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_five.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_three",
        belongsToId: "57fbad3f-528a-43b2-83e8-32ba30708194",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_six.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_six.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_six.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        belongsTo: "blogs",
        belongsToColumn: "author_avatar",
        belongsToId: "6fd75915-f1f0-447b-b144-c58c03d4df20",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "author_avatar.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_2.png",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/author_2.png",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "hero_image",
        belongsToId: "6fd75915-f1f0-447b-b144-c58c03d4df20",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "hero_image.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/fourth_hero.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/fourth_hero.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_one",
        belongsToId: "6fd75915-f1f0-447b-b144-c58c03d4df20",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_four.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_four.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_four.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_two",
        belongsToId: "6fd75915-f1f0-447b-b144-c58c03d4df20",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_five.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_five.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_five.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "blogs",
        belongsToColumn: "blog_image_three",
        belongsToId: "6fd75915-f1f0-447b-b144-c58c03d4df20",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "content_image_six.jpg",
        privateUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_six.jpg",
        publicUrl: "https://madewell-backend.herokuapp.com/images/blogs/content_image_six.jpg",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "users",
        belongsToColumn: "avatar",
        belongsToId: "7facf8cc-0af5-448a-a17c-84bbf22f2ded",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "avatar1.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/users/avatar1.png",
        publicUrl: "https://madewell-backend.herokuapp.com/images/users/avatar1.png",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        belongsTo: "users",
        belongsToColumn: "avatar",
        belongsToId: "7facf8cc-0af5-448a-a17c-84bbf22f2de6",
        createdById: null,
        deletedAt: null,
        id: uuidv4(),
        name: "avatar2.png",
        privateUrl: "https://madewell-backend.herokuapp.com/images/users/avatar2.png",
        publicUrl: "https://madewell-backend.herokuapp.com/images/users/avatar2.png",
        sizeInBytes: 2012,
        updatedById: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("files", null, {});
  },
};
