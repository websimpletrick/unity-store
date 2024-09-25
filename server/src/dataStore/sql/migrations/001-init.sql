CREATE TABLE USER (
    id       VARCHAR PRIMARY KEY,
    name     VARCHAR NOT NULL,
    email    VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    role     VARCHAR NOT NULL
); 

CREATE TABLE SELLER_REQUEST(
      id        VARCHAR PRIMARY KEY,
      userId    VARCHAR NOT NULL,
      name      VARCHAR NOT NULL,
      email     VARCHAR NOT NULL UNIQUE,
      password  VARCHAR NOT NULL,
      status    VARCHAR NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CATEGORIES (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE PRODUCTS (
    id               VARCHAR PRIMARY KEY,
    name             VARCHAR NOT NULL,
    description      VARCHAR NOT NULL,
    price            INTEGER NOT NULL,
    quantity         INTEGER NOT NULL,
    mainImage        VARCHAR NOT NULL,
    images           VARCHAR NOT NULL,
    categoryId       VARCHAR NOT NULL,
    sellerId         VARCHAR NOT NULL,

    FOREIGN KEY (categoryId) REFERENCES CATEGORIES (id),
    FOREIGN KEY (sellerId) REFERENCES USER (id)
);

CREATE TABLE ORDERS (
    id          VARCHAR PRIMARY KEY,
    userId      VARCHAR NOT NULL,
    totalAmount INTEGER  NOT NULL,
    createdAt   DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userId) REFERENCES USER (id)
);

CREATE TABLE ORDER_ITEMS (
    id          VARCHAR PRIMARY KEY,
    orderId     VARCHAR NOT NULL,
    productId   VARCHAR NOT NULL,
    quantity    INTEGER NOT NULL,
    price       INTEGER NOT NULL,

    FOREIGN KEY (orderId) REFERENCES ORDERS (id),
    FOREIGN KEY (productId) REFERENCES PRODUCTS (id)
);

CREATE TABLE ADDRESS (
    id          VARCHAR PRIMARY KEY,
    userId      VARCHAR NOT NULL,
    street      VARCHAR NOT NULL,
    city        VARCHAR NOT NULL,
    state       VARCHAR NOT NULL,
    country     VARCHAR NOT NULL,
    phone       VARCHAR NOT NULL,

    FOREIGN KEY (userId) REFERENCES USER (id)
);

CREATE TABLE REVIEWS (
    id          VARCHAR PRIMARY KEY,
    userId      VARCHAR NOT NULL,
    productId   VARCHAR NOT NULL,
    rating      INTEGER NOT NULL,
    review      VARCHAR NOT NULL,
    createdAt   DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userId) REFERENCES USER (id),
    FOREIGN KEY (productId) REFERENCES PRODUCTS (id)
);