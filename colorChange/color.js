var all_buttons = document.getElementsByTagName('button');

var copy_of_buttons = [];
for(var i=0; i<all_buttons.length; i++)
{
    copy_of_buttons.push(all_buttons[i].classList[1]);
}

function colorchange(choice)
{
    if(choice.value === 'red')
    {
        for(var i=0; i<all_buttons.length; i++)
        {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    }
    else if(choice.value === 'green')
    {
        for(var i=0; i<all_buttons.length; i++)
        {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
        }
    }
    else if(choice.value === 'random')
    {
        let variety = ['btn-success', 'btn-warning','btn-danger','btn-primary'];
        
        for(var i=0; i<all_buttons.length; i++)
        {
            var num = Math.floor(Math.random() * 4);
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(variety[num]);
        }
    }
    else{
        for(var i=0; i<all_buttons.length; i++)
        {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copy_of_buttons[i]);
        }
    }
}