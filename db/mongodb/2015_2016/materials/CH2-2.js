
mongo
var user=[
{	'age':1,'name':'Andy'},
{	'age':2,'name':'Amy'},
{	'age':3,'name':'Bob'},
{	'age':4,'name':'Bobby'},
{	'age':5,'name':'Emma'},
{	'age':6,'name':'Lina'},
{	'age':7,'name':'Calire'},
{	'age':8,'name':'Vince'},
{	'age':9,'name':'Vici'},
{	'age':10,'name':'Chris'}
]

var users=[
{	'name':'Andy',
	'age':22,
	'addr':{'code':5,'city':'Zhu Hai'},
	'lucky_no':[1,2,3]},
{	'name':'andy',
	'age':18,
	'addr':{'code':1,'city':'Guang zhou'},
	'lucky_no':[3,2,1]},
{	'name':'Demi',
	'age':12,
	'addr':{'city':'Zhu Hai','code':5},
	'lucky_no':[1,3]},
{	'name':'Tiger',
	'age':44,
	'addr':[{'code':4,'city':'Shen zhen'},{'code':5,'city':'Zhu Hai'}],
	'lucky_no':[3,4,5]},
{	'name':'Lion',
	'age':'44',
	'addr':{'code':6,'city':'Shan Tou'},
	'lucky_no':[3,4,5]},
{	'name':null,
	'age':null,
	'addr':null,
	'lucky_no':null},
{	'first':'Clarie',
	'last':'Shen'}]
	
db.users.drop()
use users
db.users.insert(users)

db.users.find()
db.users.find({},{_id:0})
db.users.find({},{age:1,_id:0})

db.users.find({age:{$lte:22}},{age:1,_id:0})
db.users.find({age:{$gt:22}},{age:1,_id:0})
 
db.users.find({},{lucky_no:1,_id:0})
db.users.find({lucky_no:{$in:[1,2]}},{lucky_no:1,_id:0})
db.users.find({lucky_no:{$nin:[1,2]}},{lucky_no:1,_id:0})

db.users.find({},{name:1,age:1,_id:0})
db.users.find({$or:[{name:'andy'},{age:{$lt:40}}]},{name:1,age:1,_id:0})
db.users.find({$nor:[{name:'andy'},{age:{$lt:40}}]},{name:1,age:1,_id:0})
db.users.find({$and:[{name:'andy'},{age:{$lt:40}}]},{name:1,age:1,_id:0})
db.users.find({name:'andy',age:{$lt:40}},{name:1,age:1,_id:0})

db.users.find({age:{$not:{$lt:40}}},{name:1,age:1,_id:0})

db.users.find({ lucky_no: { $not: { $in: [4, 5] }}},{lucky_no:1,_id:0})
 
db.users.find({ age: { $type : 2 } },{age:1})//1,2,10
db.users.find({ age: { $exists : true }})//1,2,10

db.users.find({addr : { code: 5 , city: 'Zhu Hai'} },{addr:1,_id:0})
db.users.find({'addr.code' : 5 ,'addr.city' : 'Zhu Hai' },{addr:1,_id:0})


db.users.find({},{lucky_no:1,_id:0})
db.users.find({ lucky_no: { $all: [ 1,2,3] } },{lucky_no:1,_id:0})
db.users.find({ lucky_no: { $size: 3} },{lucky_no:1,_id:0})
db.users.find({},{lucky_no:{$slice :1}})
db.users.find({},{lucky_no:{$slice :1},name:0,addr:0,age:0,_id:0})

db.users.find({},{ lucky_no: { $elemMatch: { $gt: 1, $lt: 3 } },_id:0})
db.users.find({},{ lucky_no: { $gt: 1, $lt: 3 } ,_id:0})

db.user.drop()
use user 

db.user.insert(user)

db.user.find({},{_id:0}).skip(2).limit(5)
db.user.find({},{_id:0}).sort({age:-1}).skip(2)


db.user.find({},{_id:0}).limit(5).skip(2).sort({age:-1})
db.user.find({},{_id:0}).skip(2).limit(5).sort({age:-1})
db.user.find({},{_id:0}).sort({age:-1}).skip(2).limit(5)




