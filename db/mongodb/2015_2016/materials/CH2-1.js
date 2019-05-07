// Init data
db.yellow.remove({});

db.yellow.insert({name: 'Tom', age: 20, sex: 'M'});
db.yellow.insert({name: 'Billy', age: 25, sex: 'M'});
db.yellow.insert({name: 'Mary', age: 18, sex: 'F'});
db.yellow.insert({name: 'Ken', age: 40, sex: 'M'});

// Update
db.yellow.update(
    {name: 'Tom'},
    {sex: 'F'}
);

db.yellow.update(
    {name: 'Tom'},
    {$set: {sex: 'F'}}
);

db.yellow.update(
    {name: 'Tom'},
    {$inc: {age: 1}}
);

// Update Array
db.yellow.update(
    {},
    {$set: {like: []}},
    {multi: true}
);

db.yellow.update(
    {name: 'Tom'},
    {$push: {like: 'Apple'}}
)

db.yellow.update(
   {name: 'Tom', like: 'Apple'},
   {$set: {"like.$": 'Orange'}}
);