const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
	logging: false
});


const Page = db.define('pages', {
  title: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true
	},
  slug: {
		type: Sequelize.STRING,
	},
  content: {
		type: Sequelize.TEXT,
		allowNull: false,
		notEmpty: true
	},
  status: {
		type: Sequelize.ENUM('open', 'closed'),
	},
});

const User = db.define('users', {
  name: {
		type: Sequelize.STRING,
		allowNull: false,
		notEmpty: true
	},
  email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true
		},
		notEmpty: true
	},
});

module.exports = {
	db,
	Page,
	User
};
