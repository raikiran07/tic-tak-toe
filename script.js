const cells = document.querySelectorAll('.cell')

const message = document.getElementById('message')

const resetBtn = document.getElementById('reset-game')

const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let gameBoard = ['','','','','','','','','']

let currentPlayer = 'X'

const makeMove = (e) => {
    
    const cellIndex = Array.from(cells).indexOf(e.target)
    if(currentPlayer==='X' && gameBoard[cellIndex]===''){
        
        e.target.classList.add('player-1')
    }
    else if(currentPlayer==='O' && gameBoard[cellIndex]===''){
        e.target.classList.add('player-2')
    }
    else{
        // alert("choose another cell")
        return;
    }

    if(gameBoard[cellIndex]==='' && !isGameOver()){
        gameBoard[cellIndex] = currentPlayer
        e.target.textContent = currentPlayer
    }
   if(isGameOver()){
    message.innerText = `${currentPlayer} wins!`
   }
   else if(!gameBoard.includes('')){
    message.innerText = 'Its a draw'
   }
   else{
  
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.innerText = `${currentPlayer}'s turn`
   }
}

cells.forEach(cell=>{
    cell.addEventListener('click',makeMove)
})


function isGameOver(){
    for(const pattern of winPattern){
        const [a,b,c] = pattern
        if(gameBoard[a]!=='' && gameBoard[a]===gameBoard[b] && gameBoard[a]!=='' && gameBoard[a]===gameBoard[c]){
            return true
        }
       
    }

    return false;
}


function resetGame(){
    currentPlayer = 'X'
    message.innerText = `${currentPlayer}'s turn`
    gameBoard = ['','','','','','','','','']
    cells.forEach(cell=>{
        cell.innerText = ''
        cell.classList.remove('player-1')
        cell.classList.remove('player-2')
    })
}


resetBtn.addEventListener('click',resetGame)
