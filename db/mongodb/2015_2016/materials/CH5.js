db.agg1.aggregate( [
   { $group: { _id: "$name", score: { $avg: "$score" } } }
] );


db.agg1.aggregate( [
   { $group: 
        { 
        _id: "$subject", 
        count: { $sum: 1 } 
        } 
   },
   { $match: { count: { $gte: 2} } },
   { $sort: {count: -1}}
] );


db.agg1.mapReduce( 
   function() { emit(this.name, this.score); }, 
   function(key, values) 
   {
        return Array.sum(values)/values.length;
   }, 
   {  
         query:{},  
         out:"temp" 
   }
).find();
