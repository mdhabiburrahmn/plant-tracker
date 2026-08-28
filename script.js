
let thrivingList = [];
let strugglingList = [];

let totalCount = document.getElementById('totalCount');
let thrivingCount = document.getElementById('thrivingCount');
let strugglingCount = document.getElementById('strugglingCount');   

const allfilterBtn = document.getElementById('all-filter-btn');
const thrivingfilterBtn = document.getElementById('thriving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')


const allCardSection = document.getElementById('allCards');
const mainCointainer = document.querySelector('main');


function calculateCount(){
    totalCount.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount();

function toggleStyle(id){
    allfilterBtn.classList.remove('bg-black', 'text-white') 
    thrivingfilterBtn.classList.remove('bg-black', 'text-white')  
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')  

    allfilterBtn.classList.add('bg-gray-300','text-black') 
    thrivingfilterBtn.classList.add('bg-gray-300','text-black')  
    strugglingFilterBtn.classList.add('bg-gray-300','text-black')  

    const selected = document.getElementById(id);

selected.classList.remove('bg-gray-300','text-black');
selected.classList.add('bg-black', 'text-white');
}

