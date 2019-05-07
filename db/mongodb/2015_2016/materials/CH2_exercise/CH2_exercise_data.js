var data = [
	{
		_id: 1,
		title: "Hello Tom",
		text: "One day, I meet Kate. We have dinner in KFC.",
		author_id: 15,
		author_name: "Tom",
		votes: 120,
		gender: "M",
		tags: ["food", "Tom", "KFC"]
	},
	{
		_id: 2,
		title: "I study Java",
		text: "I love Java, oh yeah.",
		author_id: 20,
		author_name: "Mary",
		votes: 50,
		gender: "F",
		tags: ["Java", "Mary", "study"]
	},
	{
		_id: 3,
		title: "I study C++",
		text: "I love C++, oh yeah.",
		author_id: 25,
		author_name: "Jack",
		votes: 100,
		gender: "M",
		tags: ["C++", "Jack", "study", "IT"]
	},
	{
		_id: 4,
		title: "Eat Pizza",
		text: "Pizza is so good, I want it everyday.",
		author_id: 20,
		author_name: "Mary",
		votes: 999,
		gender: "F",
		tags: ["food", "pizza"]
	},
	{
		_id: 5,
		title: "Happy day!",
		text: "Dick brings me some oranges, we eat together and then study Web development.",
		author_id: 15,
		author_name: "Tom",
		votes: 200,
		gender: "M",
		tags: ["food", "Tom", "study", "IT", "food"]
	},
	{
		_id: 6,
		title: "Sleep all day",
		text: "I am so tired and sleep all day.",
		author_id: 25,
		author_name: "Jack",
		votes: 30,
		gender: "M",
		tags: ["sleep", "health"]
	}
];

db.ch2_curd_test.insert(data);