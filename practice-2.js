const friends = ['Jarin', 'Tasnin', 'Anika', 'Mina', 'Rina'];
let evenFriends = [];

const arr = (friendsName) =>{
   for(const friend of friends){
    if(friend.length % 2 === 0){
     evenFriends.push(friend);
    }   
   } 
   return evenFriends;
}
const newArr = arr(friends);
console.log(newArr);