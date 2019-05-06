let board = []

const play=(val)=>{
    const player=document.getElementById('player');
    const element=document.getElementById(val);

        if(player.innerText==='X'){
            player.innerText='0';
            element.innerText='X'
        } else {
            player.innerText = 'X'
            element.innerText='0'
        }
        console.log(board)
    }

    let sq1=board[0]
    let sq2=board[1]
    let sq3=board[2]
    let sq4=board[3]
    let sq5=board[4]
    let sq6=board[5]
    let sq7=board[6]
    let sq8=board[7]
    let sq9=board[8]