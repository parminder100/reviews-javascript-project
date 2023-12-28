const usersData = [
    {
        id: 1,
        userImage: './img/user-image-1.jpg',
        userName: 'Bill Anderson',
        userDesignation: 'THE BOSS',
        userInfo: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
    {
        id: 2,
        userImage: './img/user-image-2.jpg',
        userName: 'Susan Smith',
        userDesignation: 'WEB DEVELOPER',
        userInfo: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
    },
    {
        id: 3,
        userImage: './img/user-image-3.jpg',
        userName: 'Anna Johnson',
        userDesignation: 'WEB DESIGNER',
        userInfo: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 4,
        userImage: './img/user-image-4.jpg',
        userName: 'Peter Jones',
        userDesignation: 'INTERN',
        userInfo: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
]

const userImageElement = document.querySelector(".reviews-img");
const userNameElement = document.querySelector(".user-name");
const userDesignationElement = document.querySelector(".user-designation");
const userInfoElement = document.querySelector(".user-info");

const handleSurpriseBtn = () =>{
    const randomUserData = Math.floor(Math.random() * usersData.length);
    // console.log(randomUserData);
    const selectedRandomUserData = usersData[randomUserData];
    // console.log(selectedRandomUserData.userName);
    userImageElement.src = selectedRandomUserData.userImage;
    userNameElement.textContent = selectedRandomUserData.userName;
    userDesignationElement.textContent = selectedRandomUserData.userDesignation;
    userInfoElement.textContent = selectedRandomUserData.userInfo;
}

let count = 1;
const handleNextBtn = () =>{
    //1st Method
    // for(i=count; i<usersData.length;i++){
    //     userImageElement.src = usersData[count].userImage;
    //     userNameElement.textContent = usersData[count].userName;
    //     userDesignationElement.textContent = usersData[count].userDesignation;
    //     userInfoEelement.textContent = usersData[count].userInfo;
    // }
    // count++;
    // if(count === 4){
    //     count = 0;
    // }

    //2nd Method
    if(count < usersData.length){
        userImageElement.src = usersData[count].userImage;
        userNameElement.textContent = usersData[count].userName;
        userDesignationElement.textContent = usersData[count].userDesignation;
        userInfoElement.textContent = usersData[count].userInfo;
        count++;
    }
    if(count === 4){
        count = 0; 
    }
};


const handlePreviousBtn = () =>{
    count--;
    if (count === -1) {
        count = usersData.length - 1;
    }
    console.log(count);

    userImageElement.src = usersData[count].userImage;
    userNameElement.textContent = usersData[count].userName;
    userDesignationElement.textContent = usersData[count].userDesignation;
    userInfoElement.textContent = usersData[count].userInfo;
}