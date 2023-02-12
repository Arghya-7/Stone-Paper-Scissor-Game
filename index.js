let computer = 0;
let user = 0;
function computerChoice()
{
    let choice = Number.parseInt(Math.random() * 3) + 1;
    if(choice == 1)
    {
        document.getElementById("computerImage").src = "Images/Stone.jpg";
        document.getElementById("computerChoice").innerHTML = "Stone";
    }
    else if(choice == 2)
    {
        document.getElementById("computerImage").src = "Images/Paper.jpg";
        document.getElementById("computerChoice").innerHTML = "Paper";
    }
    else{
        document.getElementById("computerImage").src = "Images/Scissors.jpg";
        document.getElementById("computerChoice").innerHTML = "Scissor";
    }
    return choice;
}
function userChoice(choice)
{
    if(choice == 1)
    {
        document.getElementById("userImage").src = "Images/Stone.jpg";
        document.getElementById("userChoice").innerHTML = "Stone";
    }
    else if(choice == 2)
    {
        document.getElementById("userImage").src = "Images/Paper.jpg";
        document.getElementById("userChoice").innerHTML = "Paper";
    }
    else{
        document.getElementById("userImage").src = "Images/Scissors.jpg";
        document.getElementById("userChoice").innerHTML = "Scissors";
    }
}
//1 is stone
//2 is paper
//3 is scissor
function display()
{
    if(computer==5 || user==5)
    {
        if(computer == 5)
        {
            document.getElementById("output").innerHTML = "Opps! Computer win the game";
        }
        else{
            document.getElementById("output").innerHTML = "Yayy! You win the game";
        }
        document.getElementById("displayComputerPoints").innerHTML = "Points:" + computer;
        document.getElementById("displayUserPoints").innerHTML = "Points:" + user;
        alert("Game Over");
    }
    else
    {
        document.getElementById("displayComputerPoints").innerHTML = "Points:" + computer;
        document.getElementById("displayUserPoints").innerHTML = "Points:" + user;
    }

}
function checkResult(a,b)
{
    if(a==b)
    {
        computer += 0;
        b +=0;
    }
    else if(a==1 && b==2)
    {
        user +=1;
    }
    else if(a==1 && b==3)
    {
        computer +=1;
    }
    else if(a==2 && b==1)
    {
        computer +=1;
    }
    else if(a==2 && b==3)
    {
        user +=1;
    }
    else if(a==3 && b==1)
    {
        user +=1;
    }
    else if(a==3 && b==2)
    {
        computer +=1;
    }
}
function check()
{
    if(computer==5 || user==5)
    {
        alert("Game Over");
    }
    else{
        let x = document.getElementById("cardtype").selectedIndex;
        let c = computerChoice();
        userChoice(x);
        checkResult(c,x);
        display();
    }
}