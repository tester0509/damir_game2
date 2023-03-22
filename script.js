let height = document.documentElement.clientHeight;
let width = document.querySelector('.game-scene').offsetWidth;
let damir = document.getElementById('player');
let score = 0;
let movied = false;

function game_start(){
    document.querySelector('.game-scene').setAttribute('style','height:'+height+'px;');
    console.log(width);
    move_obj(create_obj());
    move_obj(create_obj());
    move_obj(create_obj());
    move_obj(create_obj());
    move_obj(create_obj());
}

function create_obj(){
    img_znch = Math.floor(Math.random() * 2 + 1);
    console.log(img_znch);
    coord1 = Math.random()*430;
    coord2 = Math.random() * (height - 100) + 100;
    let img = document.createElement('img');
    img.src = 'img/'+img_znch+'.png';
    img.classList.add('obj');
    img.style = 'bottom:'+coord2+'px;left:'+coord1+'px;';
    document.querySelector('.game-scene').append(img);
    return img;
}

function move_obj(obj){
    let start = obj.style.bottom.split('px')[0];
    obj.style.bottom = (start-10)+'px';
    if(obj.style.bottom.split('px')[0]<5){
        if((Number(damir.style.left.split('px')[0])+50>=obj.style.left.split('px')[0])&&(damir.style.left.split('px')[0]<=Number(obj.style.left.split('px')[0])+50)){
            console.log('счёт');
            score++;
            document.getElementsByClassName('score')[0].innerHTML = score;
            if(score==20){
                alert('Поздравляю вы выебали 10 овец!');
            }
            start = -1;
        }
    }
    if(start>0){
        setTimeout(move_obj,50,obj);
    }else{
        obj.remove();
        move_obj(create_obj());
    }
}

game_start();

document.getElementById('left').onclick = function(){
    player.style.left = (player.style.left.split('px')[0]-10)+'px';
};

function move_right(){
    player.style.left = (Number(player.style.left.split('px')[0])+10)+'px';
    if((width-50>Number(player.style.left.split('px')[0]))&&movied){
        setTimeout(move_right,40);
    }else{
        movied = false;
    }
}

function move_left(){
    player.style.left = (Number(player.style.left.split('px')[0])-10)+'px';
    if((0<Number(player.style.left.split('px')[0]))&&movied){
        setTimeout(move_left,40);
    }else{
        movied = false;
    }
}

document.getElementById('right').addEventListener('mousedown', function(){
    if(movied){
        movied = false;
    }else{
        movied = true;
    }
    
    move_right();
});

document.getElementById('left').addEventListener('mousedown', function(){
    if(movied){
        movied = false;
    }else{
        movied = true;
    }

    move_left();
});