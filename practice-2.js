const friends = ['Jarin', 'Tasnin', 'Anika', 'Mina', 'Rina'];
let evenFriends = [];
const arr = (friendsName) =>{

   for(let i = 0; i < friends.length; i++){
    if(friends[i].length % 2 === 0){
     evenFriends.push(friends[i]);
    }   
   } 
   return evenFriends;
}
const newArr = arr(friends);
console.log(newArr);