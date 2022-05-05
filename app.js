// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'daniel',
        satisfaction: 2,
    },
    {
        name: 'tyler',
        satisfaction: 3,
    },
    {
        name: 'flair',
        satisfaction: 1,
    },
    {
        name: 'dun',
        satisfaction: 2,
    },
];

    
addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    const name = friendInputEl.value;
    const newFriend = {
        name: name || `Friend #${Math.floor(Math.random() * 1000)}`,
        satisfaction: 1
    };
    friendData.push(newFriend);
    friendInputEl.value = '';
    displayFriends();
    
    // get the name from the input
    // create a new friend object
    // push it into the friends state array, passed in as an argument
    // reset the input
    // display all the friends (use a function here)
    console.log(newFriend);
});

function displayFriends() {
    friendsEl.textContent = ''; 
    // clear out the friends in DOM

    // for each friend in state . . .
    for (let friend of friendData) {
        const friendElList = renderFriend(friend);
        friendElList.addEventListener('click', () => {
            if (mushroomCount === 0) {
                alert('no mushrooms ! go get more');
            }
            if (mushroomCount > 0 && friend.satisfaction < 3) {
                friend.satisfaction++;
                mushroomCount--;
                displayFriends();
                displayMushrooms();

            }
        });
        friendsEl.append(friendElList);
    }
    // use renderFriend to make a friendEl
    
    // this is a clickable list, so . . .
    //     add an event listener to each friend
    //         and if the friend's satisfaction level is below 3 and you have mushrooms left
    //             increment the friends satisfaction and decrement your mushrooms
    //             then display your friends and mushrooms with the updated state
    


            

}


    
function displayMushrooms() {
    mushroomsEl.textContent = '';
        
        
    for (let i = 0; i < mushroomCount; i++) {
        const mushEl = renderMushroom(i);
        mushroomsEl.append(mushEl);
    }
    
}
displayFriends();
displayMushrooms();
