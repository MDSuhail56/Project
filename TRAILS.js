const sortContainer=document.querySelector('.sort-container');
sortContainer.addEventListener('change',function(event){
    const sortValue=event.target.value;
    if(sortValue==='ascending'){
        window.location.href='home.html';
    }elseif(sortValue==='descending'){
        window.location.href='profiles.html';
    }
});