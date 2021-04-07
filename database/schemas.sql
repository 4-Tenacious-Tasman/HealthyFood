CREATE TABLE IF NOT EXISTS users(
  id BIGSERIAL NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  age INT,
  target_calories INT,
  diet VARCHAR(50),
  exclude VARCHAR(1000),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS daily_meal_plans(
  id BIGSERIAL NOT NULL,
  user_id INT NOT NULL,
  date DATE DEFAULT CURRENT_DATE,
  breakfast JSON NOT NULL,
  lunch JSON NOT NULL,
  dinner JSON NOT NULL,
  nutrients JSON NOT NULL,
  PRIMARY KEY(id)
);
