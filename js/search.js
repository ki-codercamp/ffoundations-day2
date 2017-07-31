function searchForm() {
    var input, filter, ul, li, a, i;
    input = document.getElementsByClassName('searchbox');
    filter = input.val();
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');
    console.log(filter);
    // for(i=0 ; i< li.length; i++){
    //     a = li[i].getElementsByTagName('h4')[0];
    //     if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
    //         li[i].style.display = "";
    //     }
    //
    //     else{
    //         li[i].style.display = 'none';
    //     }
    // }
}
