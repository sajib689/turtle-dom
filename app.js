const turtle = document.querySelector('.turt');
let x = 0;
let y = 0;
const speed = 5;
function handleKeyDown (event) {
    if(!event.key.includes('Arrow')) {return};
    switch(event.key){
        case 'ArrowUp':
            y = y + 1;
            break; 
            case 'ArrowDown':
                y = y - 1;
                break;
                case 'ArrowRight':
                    x = x + 1;
                    break;
                    case 'ArrowLeft':
                        x = x - 1;
                        break;
                        default: 
                        console.log('That is not a valid movement')
                        break;
    }
    turtle.setAttribute('style', `--x: ${x * 5}px; --y: ${y * 5}px;`);
}

window.addEventListener('keydown', handleKeyDown)