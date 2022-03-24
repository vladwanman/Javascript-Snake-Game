let direction = 0;
let snake = [];
let fruit = [];

function startGame()
{
    direction = 0;
    fruit = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    snake = [[0,0],[0,0]]
    setTimeout(snakeGame, 1000)
}

function snakeGame()
{


    for (let i = snake.length; i > 1; i--)
        {
            snake[i-1] = snake[i-2];
        }
    

    switch(direction)
    {
        case 0:
            snake[0] = [snake[0][0], snake[0][1]+1];
            break;
        case 1:
            snake[0] = [snake[0][0]+1, snake[0][1]];
            break;
        case 2:
            snake[0] = [snake[0][0], snake[0][1]-1];
            break;
        case 3:
            snake[0] = [snake[0][0]-1, snake[0][1]];
            break;
    }

    if(snake[0][0] == fruit[0] && snake[0][1] == fruit[1])
    {
        snake[snake.length] = snake[snake.length - 1];
        fruit = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    }

    if (snake[0][0] < 0 || snake[0][1] < 0 || snake[0][0] > 9 || snake[0][1] > 9)
    {
        let cssChanger = 
        `
        <style>
        .game>div{
            background-color: red;
        }
        </style>
        `;
        document.getElementById("cssHolder").innerHTML = cssChanger;
        return;
    }

    for (let i = 1; i < snake.length; i++)
    {
        if (snake[0][0] == snake[i][0] && snake[0][1] == snake [i][1])
        {
            let cssChanger = 
        `
        <style>
        .game>div{
            background-color: red;
        }
        </style>
        `;
        document.getElementById("cssHolder").innerHTML = cssChanger;
        return;
        }
    }

    let cssChanger = 
    `
    <style>
    .game>div{
        background-color: white;
    }
    `;

    for (let i = 0; i < snake.length; i++)
    {
        cssChanger += 
        `
            #snakeGrid${snake[i][0]}${snake[i][1]}{
                background-color: green;
            }
        `;
    }

    cssChanger += 
    `
        #snakeGrid${fruit[0]}${fruit[1]}{
            background-color: purple;
        }
    `

    cssChanger += `</style>`;

    document.getElementById("cssHolder").innerHTML = cssChanger;

    

    setTimeout(snakeGame, 500)
}

function directionChange(input)
{
    if ((direction + input) % 2 != 0)
    {
        direction = input;
    }
    
}