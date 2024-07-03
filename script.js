const count=document.getElementById('count');
const plus = document.querySelector('i');
const task=document.querySelector('h3');
const entered=document.querySelector('#plus');
const uli=document.querySelector('.list-items ul');
const input=document.getElementById('in');
const icon=document.querySelector('.navbar i');

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addToList(this.value);
        this.value="";
    }
});

const addToList = (value) => {
    const lis = document.createElement('li');
    lis.innerHTML = `${value} <i class="fa fa-trash" aria-hidden="true"></i>`;
    
    
    lis.querySelector('i').addEventListener('click',()=>
    {
        lis.remove();
        updatecount();

    })
    uli.appendChild(lis);
    updatecount();

    
};
const updatecount=()=>
    {
        const content=uli.children.length;
        count.textContent=content;
    }
    entered.addEventListener('click',()=>
        {
            addToList(input.value);
            input.value="";
        })
icon.addEventListener('click',()=>
{
    document.body.classList.toggle('back');
    if(document.body.classList.contains('back'))
        {   icon.classList.remove('fa-moon-o');
            icon.classList.add('fa-sun-o');
        }
    else{
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');

    }
  
        
   
})