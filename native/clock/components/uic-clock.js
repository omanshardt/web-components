/**
 * uic-clock 1.1
 * Release date: 2020-06-13
 */

class uicClock extends HTMLElement {
    static get observedAttributes() {
        return ['digital'];
    }

    constructor() {
        super();
        // this.snd = new Audio( "data:audio/wav;base64,UklGRhg8AABXQVZFSlVOSxwAAAAYPAAAAAAAAEw6AAAAAAAAkw4AAAAAAAAAAAAAZm10IBAAAAABAAIARKwAABCxAgAEABAAZGF0YUw6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////8AAAAA/////wAAAAB+AH4AhQqFCpILkgtBCkEKXBNcE7IPsg9FA0UDvQm9CdwB3AEq9ir2Bf4F/h7/Hv+l/qX+VAhUCOYH5gdzCnMKkA2QDbEJsQlJCkkKTAhMCPoC+gLXB9cHzwXPBZb+lv4CAQIB/wD/ALP7s/s2/Tb9hwOHAxwBHAHFAsUCJA4kDiULJQsgAiACfQV9BZf/l/8f9R/15frl+k78Tvwr9yv3b/xv/EIAQgCI/oj+rfyt/Gz9bP32//b/Qf5B/vAC8AJ9B30HhwOHAzsHOwc6CToJUgFSAf3//f8r/Cv8hfmF+UH8QfyO9473TPpM+twA3ACF+YX5W/9b//UG9Qas/Kz8dgJ2AjULNQvPBM8EgAiACBINEg20ArQC5v3m/eb/5v8w/TD9pPik+GD9YP2YBJgEdwJ3AjgFOAXgCeAJKQMpA3oCegJoBmgGYQFhARkBGQFPA08DSQFJAXkCeQLE/sT+q/ur+3P+c/7x+vH6nPqc+pEAkQBlAGUA1QDVAG8HbwduCG4IpQOlA4MDgwPwBPAE8fzx/O387fy8BLwEu/q7+vH28fbf/t/++vX69TTxNPGa+pr6ofah9nz3fPfQAtACbgJuAoIAggBsAmwCXQBdAB/+H/4Q+hD6DPkM+UP6Q/oE+QT5IPog+mb7ZvuK+or6+/r7+jH5MflK/Er8RP1E/XX6dfqaAJoAEwITAhP9E/33A/cDsQCxAJ/1n/Ug/SD9OP04/ez07PSf/J/8HQEdAS/8L/zq/+r/3wPfAz7/Pv/G/sb+YAZgBkYHRgc2AzYDCAgICD8HPwc8ADwAAgECAcj9yP2T+ZP5Jv0m/bz7vPuL/Yv9agNqA88AzwAkAyQDDAgMCEYDRgObBJsEaAdoB44BjgFjBGMEEQkRCSgDKAM//z//xQLFApkAmQAQ+hD6h/6H/mcCZwKd/J38SQRJBMQKxApZAFkA/QH9ATsHOwfE/sT+df91/ysDKwOO/o7+qv+q/wcABwBu/G78e/17/bD8sPx3/Hf8Uv9S/5QBlAECAwIDgASABIcFhwUgBSAF7APsAywELAT6/fr9LPws/J8BnwFq+2r7+/n7+Y4CjgIE/AT8Ovo6+h4EHgSi/aL9wvvC+wYHBgfxBvEGKAMoA5QIlAi2B7YHggKCAm8BbwHNAc0BG/8b/9/+3/6cApwC8gDyADABMAHbBNsEMgEyAckByQFfBl8GNQM1A+QE5ASLBYsFlQKVArkFuQXvBO8EE/4T/pYBlgH8APwA/vv+++UA5QAEBAQE1//X/3wDfAN3CXcJ1wPXA8kAyQDeBt4GcgNyAwD/AP94BXgFpQSlBLH9sf2AAYABE/8T/8H5wfle/V79UPxQ/Fr6WvqWAZYBGwEbAR8AHwDLAssCFwEXAaUBpQGfAZ8Bj/6P/rf+t/4vAC8AzP3M/ZT8lPyc/Zz9xfzF/Hb5dvnb/Nv8W/5b/qT4pPj5/fn9WARYBKP8o/yf/p/+JAQkBE/7T/v6+fr5q/+r/4j6iPoS+xL7av9q/6r8qvxI/Uj90v/S/xz9HP3A+8D7ewB7ACgBKAEVABUAWgJaAnMCcwLaANoAMAEwAZP+k/4m/Cb8of6h/uP74/vh++H7JwAnANL80vxX/Vf9XwRfBPz//P+t/a397gPuAwoDCgPg/+D/wgPCA6oFqgVWAFYAhv+G/4YBhgGz/LP8q/ur+50AnQCv/a/9Of45/kwETAR+/37/Wv5a/jwDPAPx/vH+GP8Y/2wCbAI5/zn/DgAOAHwBfAHc/dz9Vf5V/vn9+f20+rT6OP44/mP/Y//l++X7Z/9n/1wDXANk/2T/pP+k/10DXQPk/+T/UvxS/I3/jf8N/w3/IPsg+/n9+f0G/gb+h/mH+bL8svx8/Xz9pfql+lD+UP5rAmsCGAAYAGcBZwH5AvkCwv/C//z+/P7pAOkA/P38/cT9xP1VAFUA/P78/qH+of7H/8f/Wf1Z/XL/cv8NAQ0Bd/x3/HAAcAD6A/oDsP6w/s0BzQFvBW8Fwv/C/wIAAgB5AnkC+P34/Sf+J/4rASsBP/8//9b/1v/yAvICWgJaAvz//P8MAgwClwOXA3sBewHWAtYCugS6BP4A/gDFAMUAwwHDAd793v22/bb9Z/9n/0H+Qf4zADMAlgCWAEb/Rv9dAl0CQAJAAlr/Wv/2AvYChgKGAnL+cv4JAQkBzwLPAof+h/7X/9f/UwFTAUX8Rfxe/V79uf+5/5f7l/sL/Qv9JwEnAZP+k/5K/0r/aQFpAVD/UP+T/pP+aABoAEL/Qv8g/iD+H/8f/7X+tf7Y/dj9Df0N/dv92/0+/j7+HP4c/u3/7f8hACEAJgEmAfMA8wAS/xL/NAE0AdgA2ABv/G/8w/7D/tn+2f6D+4P7Zv9m/9//3/+q/Kr88v/y/6oAqgAj/SP9HAAcABkCGQLf/t/+mgGaAVUDVQPa/9r/1QDVAGgBaAF//n/+u/67/rL/sv9I/0j/7P7s/hj/GP/F/sX+cv9y/xX/Ff8r/yv/vgC+AD4BPgEUARQBywDLAHYBdgETABMAtf61/gT/BP///f/9pvym/Af/B//7/vv+Yv1i/UoBSgEBAgECaf5p/roAugCAAIAAsvyy/JT/lP8lACUANfw1/Gj+aP7F/8X/EfwR/GL8Yvzd/d39XPxc/Nr92v1X/lf+uf25/YX/hf+w/rD+vP28/cz/zP/P/8//vP68/isAKwCM/4z/4v3i/U7+Tv5V/lX+c/xz/LT8tPwY/hj+if2J/fP88/zc/9z/JQAlAK7+rv4fAR8B7gDuAIv9i/3B/8H/l/+X/3H8cfyE/4T/tAC0AEf9R/1k/2T/hACEAIP+g/73//f/YwBjADz/PP+RAZEB1ADUAIT/hP+6ALoAdf91/0D+QP6zALMANP80/zL+Mv5FAEUAWf9Z/1/+X/7t/+3/9//3/+3+7f5oAGgA2gDaAK8ArwD1APUALgIuAskAyQDZ/9n//wD/ALP/s//7/Pv8fv5+/rf+t/4D/QP96v7q/lkAWQCb/pv+PwA/AEoASgCq/qr+iACIAGMAYwCv/q/+DgAOAPj++P7s/ez9hv+G/yv+K/5W/Vb9HQAdAFX/Vf9y/nL+BP8E/4v+i/6V/ZX9sv6y/lf+V/6E/oT+tf+1/1H/Uf/Y/tj+U/5T/lT/VP/W/tb+VP1U/ev96/0a/hr+0/zT/KP9o/0B/wH/Tf5N/oX/hf+iAKIAkP+Q/1sAWwCSAJIAuf65/mz/bP85/zn/mf2Z/Z/+n/5I/kj+fv1+/UL+Qv4P/g/+Wf5Z/pb/lv+3/7f/NP80/5wAnADq/+r/I/8j/2gAaAAvAC8A8f7x/sj/yP8q/yr/FP4U/pz+nP45/zn/2P7Y/vP+8/4I/wj/F/8X/5r+mv4c/xz/IwAjAJv/m/8BAAEAXwBfACr/Kv/2/vb+UP5Q/kr9Sv3t/e39K/4r/n/9f/3e/t7+Lv8u/2f/Z//9//3/6f/p/0AAQAD9AP0AoP+g/0f/R/8BAAEAS/5L/jX+Nf5A/0D/Xv5e/gb+Bv60/rT+5P7k/gr/Cv+f/5//IAAgAAcABwDU/9T/kv+S/9T/1P+e/57/6//r/0YARgCe/57/7//v/8j/yP8l/yX/BP8E//b+9v54/nj+iv+K/6UApQApACkAjwCPAOAA4ACaAJoARgFGAWEAYQD+//7/MAAwAHP/c/9P/k/+0P/Q/2X/Zf8B/wH/ngCeACUAJQCaAJoA7wDvAC0BLQFcAFwA/gD+ACMAIwBWAFYAEAAQAF3/Xf9G/0b/P/8//0r/Sv/i/+L/dP90/33/ff//////9v72/mz/bP/o/+j/5//n/10AXQBHAEcAKwArAIEAgQDS/9L/pf+l/3v/e//l/uX+5f3l/QD/AP+2/rb+9f71/q7/rv9X/1f/a/9r/24AbgDa/9r/sv+y/4f/h/9j/2P/Tf9N/z//P/88/jz+VP5U/gD/AP+s/qz+4v7i/hAAEAAlACUAov+i/4f/h/9i/2L/xP/E/6f/p/+Q/5D/fv9+/2//b//s/uz+9P70/gX/Bf8g/yD/u/67/lv+W/6D/4P/I/8j/8P+w/7h/+H/7f/t//P/8/9oAGgARgBGAB0AHQDo/+j/O/87/6L+ov4c/xz/tv62/uT+5P6T/5P/wP7A/mr/av+C/4L/j/+P/xYAFgCK/4r/dP90/+T/5P/U/tT+zv7O/lv/W/9y/3L/h/6H/qb+pv5O/07/cv9y/5P+k/4v/y//Rf9F/1v/W/9r/2v/cv9y/3T/dP/0/vT+/f79/o//j/8c/xz/LP8s/z//P//N/s3+YP5g/vz9/P0w/jD+df51/r/+v/4K/wr/wf/B/1r/Wv/o/+j/XABcALT/tP+L/4v/4v/i/7/+v/6x/rH+OP84/1H+Uf56/nr+Kv8q/93+3f6L/4v/p/+n/6//r/8nACcAkf+R//T/9P/Q/9D/L/8v/5//n/+d/53/IP8g/6r/qv87/zv/0P/Q/+H/4f9n/2f/Y/9j/+X/5f/u/+7/6f/p/1oAWgBIAEgALAAsAAoACgDn/+f/xf/F/zH/Mf+r/qv+Of45/mj+aP4t/y3/9v72/rP/s//a/9r/bv9u/20AbQBVAFUAMAAwAP7//v9P/0//s/6z/ir+Kv7E/cT9Cv4K/mf+Z/5I/kj+oP+g/+L/4v+B/4H//f/9/9//3/83/zf/k/+T//3+/f51/3X/+f75/g7+Dv64/rj+7P7s/qL+ov7Z/9n/e/97//7+/v51/3X/9v72/nT/dP/o/+j/ZP9k/+L/4v/S/9L/xf/F/7D/sP+W/5b/Bv8G/wH/Af8H/wf/Ff8V/y//L/9Q/lD+9P70/hcAFwAuAC4AswCzABgBGAHUANQAAQABALn/uf/9//3/VP9U/0b/Rv/L/8v/XP9c/2r/av9y/3L/iACIAIUBhQHSAdIBAwIDAg8CDwIDAQMBAAEAAQ0BDQE2/zb/jP+M/w4ADgAo/yj/ygDKAOcA5wBxAHEA1wDXAKMAowDtAO0ALwEvAW0AbQCsAKwA8wDzAE0ATQCrAKsAigCKAPX/9f/n/+f/Yf9h/2r/av9+/37/n/+f/8IAwgBIAEgAvP+8/y4ALgCX/5f/g/+D//7//v+B/4H/hv+G/xcAFwCr/6v/Mf8x/z7/Pv9d/13/9v72/g8ADwClAKUApACkAAkACQDYANgAnwCfAOn/6f83ADcAEP8Q/4f/h/+X/5f/Nv82/9z/3P/+//7/nP+c/ysAKwCo/6j/ov+i/yAAIAAbABsAjgCOAPYA9gDaANoAqQCpAHEAcQBIAEgAHQAdAH3/ff8AAAAACQAJAI7/jv8iACIAs/+z/0L/Qv9RAFEAWABYAN3/3f/YANgAPwA/AKUApQAHAAcAaf9p/+L/4v9q/2r/A/8D/67/rv9b/1v/h/+H/7MAswBIAEgAPwA/ACYAJgCO/47/ef95/3H/cf+C/4L/nv+e/zv/O/9l/2X/Ev8S/73+vf71/vX+N/83/3H+cf4o/yj/5v/m/5P/k/+l/qX+tv62/lP/U//y/fL9pf6l/uH/4f+T/5P/Ov86/0v/S//Y/tj+8f7x/oj+iP4w/jD+av5q/ij+KP56/nr+Tf9N/4P+g/64/7j/3f/d/+D+4P5q/2r/d/93/3z+fP4Q/xD/PP88/+j+6P6G/4b/pf+l/8H/wf/B/sH+v/6//tX/1f9h/2H/7v/u/3IAcgDc/9z/Sv9K/7f/t/+n/6f/qf+p/6v/q/8u/y7/vv++/0z/TP9d/13/8v/y/33/ff8IAAgADQANAP7+/v54AHgA9gD2AFcAVwAgACAAeAB4AFUAVQCi/6L/CP8I/5f/l/8s/yz/S/9L/3oAegAVABUAnP+c/xgAGACK/4r/hP+E/wMAAwCCAIIA/QD9AGUAZQA+AD4AkwCTAGj/aP/P/8//PwA/ALf/t/84ADgAMgAyAKj/qP+fAJ8ACgAKAPn/+f9jAGMASgBKAD8APwCkAKQA//////QA9ABZAFkAq/+r/54AngAVABUABf8F/xEAEQAmACYAsQCxADIBMgEVARUBXQFdARcBFwFEAEQA+AD4AMUAxQCYAJgAbQFtAUsASwCqAKoAiACIAHAAcABaAFoARABEAL0AvQCvAK8AmACYAIgBiAFgAWABJQElAesA6wCuAK4A8v/y/1ABUAG+AL4AIgAiAIcAhwD9AP0AbQBtAFEAUQBCAEIAtwC3ACcAJwAgACAAHQEdARABEAH5APkAzADMAJ//n/8QABAACAAIAI//j/+4ALgAVABUAN//3/9uAG4A7P/s/2cAZwBiAGIA0P/Q/0UARQBGAEYAQABAALkAuQCz/7P/qv+q/6r/qv88/zz/3f/d/33/ff8o/yj/VwBXAPb/9v8OAA4AmwCbABH/Ef8O/w7/Hf8d/0D/QP92/3b/qP+o/8z/zP/s/+z/Av8C/4//j/+f/5//Ov86/1kAWQDs/+z/ff99/wcABwCL/4v/mf+Z/x3/Hf8t/y3/W/9b/4P/g/+u/67/YQBhAHP/c///////EAAQAAf/B/+K/4r/IAAgAKv/q/+3/7f/xv/G/9H/0f/cANwA1v/W/8D/wP81ADUAsv6y/jv/O//X/9f///7//q3/rf/S/9L/df91/5j/mP+y/7L/y//L/+T/5P9z/3P/AgACAI7/jv+S/5L/GwAbACL/Iv8r/yv/xP/E/2L/Yv/+//7/mQCZAKb/pv8eAB4AEwATAIz/jP8AAAAAev96/4X/hf8TABMAqf+p/0EAQQBEAEQARABEAMP/w/+u/67/pv+m/7T/tP8+AD4AQgBCAEYARgC+/77/tAC0ACkAKQCa/5r/kgCSABAAEAANAA0AiwCLAAQABAD8//z/9f/1/3f/d/+B/4H/lgCWADIAMgDAAMAAuAC4AKQApACJAIkAYABgADsAOwCd/53/i/+L/xgAGAAxADEAOQA5AMgAyABMAEwALwAvABsBGwEFAAUAXQBdAMUAxQA0ADQAmgCaAIgAiAB5AHkAZwBnANr/2v/Y/9j/3//f//T/9P+QAJAAmQCZABcBFwGEAIQA2//b/7kAuQAlACUAFAAUAIkAiQCKAIoABgAGAAMBAwF9AH0AZgBmAEwATAC9/73/tP+0/zYANgBLAEsAWwBbANgA2ADTANMAPwA/AJYAlgB2AHYAYQBhAEQARAAwADAALAAsACYAJgCpAKkAKwArAJ//n/8mACYAsf+x/7oAugBIAUgBwQDBAB0BHQHvAO8AQgBCAJn/mf+JAIkADgAOABoAGgAyADIATABMAFwAXABjAGMA5wDnANP/0/87ADsAOwA7ALX/tf+xALEAQwBDAEoASgDEAMQAQQBBADoAOgAnACcAIwAjACUAJQCiAKIAJQAlACMAIwAdAB0AIQAhACgAKACo/6j/NgA2AFAAUABaAFoAXgBeAF0AXQBUAFQATgBOAEYARgC4/7j/QQBBAM//z//V/9X/cwBzAAsACwAJAAkAkACQABkAGQCN/43/DAAMACUAJQA3ADcAQABAAFAAUADZ/9n/WABYAN3/3f/i/+L/4f/h//H/8f8DAAMAAwADABEAEQCf/5//nP+c/6j/qP/B/8H/3P/c//j/+P+IAIgAjwCPAI4AjgD3//f/YP9g/+D/4P9k/2T/dv92/yQAJADM/8z/4P/g/3kAeQAOAA4AhwCHAHYAdgDs/+z/2//b/1AAUADa/9r/YwBjAGsAawD3//f/dv92//v/+/8TABMAIAAgACQAJAAyADIAPQA9ADUANQAsACwAKgAqACMAIwAhACEAJAAkACQAJAAmACYAKAAoAKkAqQApACkAmP+Y/43/jf+j/6P/u/+7/08ATwBzAHMAhgCGAPkA+QDnAOcAyv/K/yQAJAARABEAkP+Q/5z/nP89AD0A5f/l/wEAAQCZAJkALQAtACoAKgCbAJsAjwCPAAEAAQBwAHAAZQBlANn/2f9TAFMA1//X/9z/3P9nAGcAdQB1AHQAdADvAO8AYwBjADwAPAAbABsAEwATAAEAAQD6//r/j/+P/yMAIwAyADIAygDKAFAAUADCAMIAsQCxABQAFAD0//T/agBqAGr/av/s/+z/hQCFAKP/o/+1ALUAugC6ALL/sv+pAKkAoQChABQAFAAIAAgAggCCAAMAAwAGAAYAkACQABIAEgCO/47/GwAbAKwArACsAKwApQClAJkAmQBzAHMATgBOAD4APgCs/6z/IwAjADQANABCAEIAyQDJANIA0gC8/7z/pQClAKIAogCQ/5D/gQCBAAUABQCQ/5D/pQClALcAtwC7ALsAsgCyAJwAnACFAIUAbgBuAFgAWABOAE4ATgBOAE8ATwDS/9L/XABcAO0A7QDu/+7/ZABkAOcA5wDlAOUAxgDGAKMAowAHAAcA6v/q/+D/4P9s/2z/AwADAKoAqgDIAMgAxQDFAK0ArQAWABYA+P/4/1oAWgBP/0//2f/Z/3EAcQCOAI4AHwAfAKIAogCeAJ4ADQANAH0AfQDz//P/6v/q/3QAdACDAIMABwAHAJMAkwAdAB0AFgAWAJcAlwCcAJwAmwCbAI4AjgB9AH0AcwBzAGcAZwBZAFkA0f/R/9L/0v9jAGMA/f/9/4YAhgCLAIsAkP+Q/44AjgCJAIkAAQABAPT/9P/x//H//f/9/woACgAbABsALwAvADsAOwBAAEAAQwBDAEEAQQBBAEEAvP+8/73/vf9YAFgAdQB1AP////+GAIYAjgCOAI0AjQCCAIIAcQBxANv/2/9cAFwAZQBlAOH/4f/o/+j/fP98/5r/mv+9AL0AVABUAN//3//kAOQA2wDbAMX/xf8tAC0AFwAXAJT/lP8fAB8AJwAnALf/t//R/9H/4//j//P/8/8JAAkAGgAaABsAGwAUABQAFwAXABsAGwAbABsAnQCdABgAGAAXABcAngCeABQAFAAMAAwAGAAYACMAIwAqACoAMwAzAEAAQABJAEkARgBGAEYARgBEAEQAuwC7ADMAMwArACsAnACcAA8ADwAQABAADwAPAAwADAAdAB0AMgAyADkAOQA+AD4ASABIAEwATABFAEUAOAA4AC0ALQAqACoAKgAqACUAJQAkACQALgAuADsAOwA4ADgAMwAzADsAOwA/AD8APgA+AEMAQwBKAEoASQBJAEkASQBIAEgAQwBDAL0AvQA1ADUALAAsAJ8AnwAYABgAGwAbABcAFwASABIAJAAkADYANgA6ADoAPgA+AEIAQgBBAEEAQgBCADcANwAmACYAIwAjACAAIAAWABYAEgASABoAGgAlACUAKgAqAC0ALQA1ADUANQA1AC4ALgAwADAALwAvAKgAqAAlACUAHgAeABIAEgARABEAGAAYAKAAoACeAJ4AmQCZABgAGAAGAAYA9f/1/wIAAgAXARcBEQARAJEAkQAQARAB+wD7AGUAZQDCAMIAHQAdAIn/if+KAIoAi/+L/xkAGQAzADMAy//L/+L/4v/3APcAAQABAP7//v93AHcA8QDxAN//3/9MAEwAxwDHAD4APgAuAC4AKAAoAK7/rv+y/7L/PgA+AFkAWQByAHIAeQB5APb/9v/3//f//v/+/woACgCcAJwAowCjAB0AHQCeAJ4AlQCVAHsAewBtAG0AYABgAEYARgA3ADcAMwAzAK7/rv+5/7n/SwBLAF0AXQB0AHQAdwB3AGgAaADY/9j/SABIALz/vP+8/7z/wv/C/9z/3P/+//7/DwAPACAAIACrAKsApgCmAJgAmAB7AHsAWABYAEMAQwC0/7T/tf+1/0QARADZ/9n/+v/6/5IAkgAXABcAoQChAB0AHQAPAA8AigCKAPz//P/2//b/ewB7AHUAdQBvAG8AbQBtAGMAYwDT/9P/yv/K/83/zf9XAFcA4P/g/+b/5v9zAHMAAQABAAQABAACAAIABgAGAAgACAANAA0AGAAYAJYAlgCXAJcAnACcAIkAiQDx//H/5//n/+P/4//x//H/AQABAA4ADgAmACYAtgC2ADUANQAvAC8AJQAlACIAIgAbABsAEwATAB0AHQAjACMAIgAiAC8ALwAyADIAMAAwADIAMgAjACMAGAAYABYAFgAQABAAEgASAJYAlgCOAI4ACAAIAPz//P/q/+r/7P/s//T/9P/+//7/DAAMABkAGQAqACoAMwAzADMAMwAzADMALwAvACoAKgAhACEAFwAXABoAGgAcABwAHQAdACUAJQArACsAMQAxADQANAAwADAALgAuAC4ALgAtAC0AKQApACAAIAAcABwAHAAcABYAFgAXABcAGQAZABwAHAApACkAJwAnACQAJAAwADAALQAtACgAKAAvAC8ALgAuADMAMwA3ADcALgAuADUANQA2ADYAKgAqACsAKwAnACcAJAAkACkAKQAlACUAKQApADcANwA3ADcAOQA5ADUANQAvAC8AMwAzAC8ALwAnACcAJQAlACAAIAAfAB8AHwAfABcAFwAeAB4AJAAkACEAIQAlACUAKwArACoAKgAjACMAHgAeAB4AHgAcABwAGgAaABQAFAANAA0AFwAXABoAGgAPAA8AHAAcACkAKQAsACwAOQA5ADwAPABBAEEATwBPAEoASgBDAEMAPgA+ADIAMgAyADIALQAtAB0AHQAdAB0AIgAiACAAIAAfAB8AIgAiAC4ALgAvAC8AMQAxAD8APwA5ADkALwAvACsAKwAYABgAEgASABMAEwD+//7//////w4ADgAMAAwAEAAQABgAGAAdAB0AJwAnAC0ALQAtAC0AKgAqACsAKwAwADAAKgAqACEAIQAfAB8AHwAfACIAIgAgACAAHAAcAC0ALQAwADAAKQApADgAOAA2ADYAKgAqAC4ALgArACsAJwAnACcAJwAXABcACwALAAoACgAGAAYABwAHAAsACwCVAJUAHgAeACIAIgAjACMAGAAYABkAGQAlACUAHAAcABIAEgATABMADwAPAA4ADgALAAsAAQABAAgACAAPAA8ACQAJABUAFQAeAB4AGgAaACMAIwArACsAJwAnAB8AHwAcABwAnACcAAwADAABAAEAAAAAAPb/9v/0//T//f/9/wAAAAAIAAgACgAKAAsACwAiACIAIQAhABIAEgAZABkAGQAZAA4ADgAJAAkA//////7//v8AAAAA/f/9/wMAAwAKAAoADQANABIAEgAXABcAHgAeABgAGAASABIAGQAZABEAEQAGAAYACwALAAIAAgD5//n/AgACAAMAAwAIAAgAEwATABgAGAAmACYALAAsACQAJAAnACcAMAAwADIAMgAsACwAKAAoACoAKgAjACMAHAAcABkAGQALAAsACAAIAA0ADQAKAAoAFwAXABsAGwAaABoALgAuADMAMwApACkAKwArACgAKAAeAB4AGQAZABIAEgALAAsABQAFAAAAAAAGAAYACAAIAAgACAASABIAHAAcACMAIwAcABwAEwATABoAGgATABMABQAFAAoACgAGAAYABAAEAAwADAAMAAwADgAOABAAEAANAA0AFQAVABsAGwAYABgAHQAdACYAJgArACsAJgAmACQAJAAiACIAEwATAAwADAAPAA8AAwADAAAAAAAHAAcACwALABQAFAATABMAEQARACAAIAAmACYAHQAdAB0AHQAZABkAEAAQAAsACwAIAAgACwALAAoACgAOAA4AHQAdACQAJAAkACQAJQAlACcAJwAoACgAGwAbAA8ADwASABIACwALAAgACAASABIADQANAAYABgANAA0AEQARAAwADAAKAAoADwAPABoAGgAfAB8AIAAgACEAIQAgACAAHwAfABgAGAARABEAEAAQAAgACAACAAIABgAGAAYABgACAAIACAAIABAAEAAaABoAGgAaABUAFQAYABgAFAAUAAkACQAHAAcAAQABAPj/+P/+//7/CAAIAAoACgAKAAoAFgAWABsAGwAUABQADwAPAAoACgAHAAcACwALAAcABwAEAAQADAAMAAoACgAIAAgADgAOAA4ADgAMAAwADQANABAAEAAVABUAEwATABAAEAAXABcAFwAXABcAFwAaABoAGQAZABYAFgATABMAEgASAA0ADQD//////////wcABwADAAMABwAHABMAEwAZABkAHQAdABwAHAAVABUAEQARAA0ADQAJAAkACAAIAAkACQAKAAoACwALABEAEQATABMADwAPABEAEQATABMAEwATAA8ADwAHAAcAAwADAAEAAQD4//j/9v/2//n/+f/z//P/+P/4/wMAAwACAAIAAgACAAYABgALAAsADQANAA4ADgARABEAFQAVABkAGQAdAB0AGgAaABUAFQATABMADAAMAAoACgAMAAwACgAKAAwADAANAA0ADgAOAA0ADQAIAAgABwAHAAsACwALAAsACgAKAAoACgAJAAkABwAHAAgACAALAAsACAAIAAcABwARABEAFgAWABMAEwATABMAFAAUABEAEQAPAA8ACQAJAAYABgALAAsADQANABEAEQAVABUAGAAYABoAGgAZABkAGgAaABwAHAAZABkAHQAdACIAIgAhACEAHgAeABgAGAAUABQADwAPAAoACgAJAAkABAAEAP7//v8BAAEAAwADAP3//f/7//v/AQABAAQABAAEAAQABQAFAAYABgAHAAcACAAIAAcABwACAAIAAQABAAQABAADAAMABwAHAA4ADgAPAA8AEQARABUAFQASABIADgAOAAsACwAOAA4AEAAQAA8ADwARABEAEAAQAAsACwAMAAwADQANAAsACwAKAAoADwAPABYAFgAUABQAFQAVABcAFwAUABQAEwATABMAEwANAA0ACQAJAAkACQAIAAgAAgACAAAAAAD+//7//////wYABgALAAsADAAMABIAEgAbABsAHAAcABcAFwAYABgAFQAVABAAEAAQABAAEgASABQAFAASABIAFAAUABkAGQAWABYAEgASABYAFgAXABcADQANAAsACwAGAAYA/v/+//7//v8BAAEAAQABAAMAAwAHAAcACwALAA4ADgAMAAwABwAHAAMAAwAFAAUABAAEAP///////////v/+//v/+//6//r/9v/2//D/8P/t/+3/8v/y//f/9//8//z/AgACAAgACAATABMAEwATAA8ADwATABMAFAAUAA0ADQAPAA8AEQARAAgACAAFAAUABwAHAAUABQAGAAYACgAKAA0ADQATABMAFAAUABIAEgAQABAADgAOAAkACQAEAAQAAwADAAAAAAACAAIABwAHAAkACQAIAAgABgAGAAQABAADAAMAAwADAAEAAQADAAMACgAKAAsACwAJAAkACAAIAAUABQACAAIABAAEAAYABgACAAIABwAHAA0ADQAMAAwADQANABMAEwAUABQAFwAXABwAHAAVABUAEgASAA8ADwAFAAUAAAAAAPz//P/3//f/9v/2//j/+P/9//3/AgACAAQABAAEAAQABQAFAAQABAD+//7/+f/5//z//P/6//r/+v/6/wEAAQABAAEAAQABAAUABQADAAMABAAEAAwADAAOAA4AEAAQABYAFgAWABYAFQAVABUAFQASABIAEQARABAAEAAMAAwABQAFAAQABAAIAAgABgAGAAYABgAJAAkADQANABAAEAATABMAFAAUABQAFAAUABQADwAPAAoACgAEAAQA/v/+/////////////v/+/wIAAgAHAAcABwAHAAUABQAKAAoACwALAAkACQAOAA4ADwAPAAsACwAMAAwADAAMAAkACQAMAAwADgAOAAkACQAKAAoADQANAAoACgALAAsADAAMAAkACQALAAsACwALAAkACQAHAAcABQAFAAQABAACAAIA//////3//f//////AQABAAAAAAAGAAYADwAPAA8ADwAOAA4AEAAQAAkACQAFAAUABgAGAAIAAgABAAEABAAEAAMAAwADAAMABwAHAAUABQAFAAUABwAHAAgACAAGAAYABQAFAAgACAAJAAkACAAIAAwADAANAA0ACAAIAAUABQAEAAQABQAFAAEAAQABAAEABgAGAAQABAABAAEABwAHAAoACgAGAAYACgAKAAoACgAEAAQAAAAAAP3//f/4//j/9P/0//X/9f/2//b/+//7/wEAAQADAAMABgAGAA0ADQARABEAFAAUABcAFwAWABYAFAAUAA8ADwALAAsACwALAAMAAwAAAAAABQAFAAEAAQD+//7/AQABAAAAAAABAAEABAAEAAQABAADAAMABgAGAAoACgAMAAwADAAMAAwADAAJAAkABAAEAAMAAwD/////+f/5//////8CAAIA/f/9/wEAAQAGAAYABAAEAAUABQAIAAgACwALAAsACwAKAAoADAAMAAsACwAIAAgACgAKAA4ADgANAA0ADgAOABIAEgARABEADgAOABQAFAAUABQADQANAA8ADwAKAAoAAgACAAIAAgAAAAAA+//7//3//f/+//7/9//3//n/+f8AAAAAAAAAAAAAAAADAAMACQAJAAcABwADAAMABgAGAAYABgAEAAQABQAFAAMAAwADAAMAAwADAAIAAgAFAAUABQAFAAkACQARABEADQANAA0ADQASABIADAAMAAoACgAOAA4ACAAIAAcABwAKAAoAAQABAP7//v8EAAQABQAFAAAAAAABAAEABgAGAAIAAgD+//7/AQABAAMAAwADAAMAAgACAP7//v/7//v/+v/6//r/+v/6//r/+f/5//7//v8DAAMA/////wAAAAAJAAkACQAJAAcABwALAAsACQAJAAUABQAGAAYABwAHAAsACwAQABAAFwAXABUAFQAUABQAGQAZABIAEgAHAAcABwAHAAMAAwD7//v/9f/1/+7/7v/x//H/9f/1//T/9P/3//f/+//7//v/+//9//3/+f/5//f/9//+//7/AAAAAPv/+//8//z/AgACAAMAAwAAAAAABAAEAAkACQAEAAQAAgACAP/////4//j//P/8/wAAAAD7//v/AAAAAAcABwAIAAgABgAGAAMAAwADAAMAAwADAAAAAAD8//z/+f/5//r/+v/8//z//P/8//////8FAAUAAwADAP7//v/8//z/+//7//n/+f/x//H/9f/1//n/+f/1//X//P/8/wMAAwACAAIABwAHAAwADAAKAAoABwAHAAYABgANAA0ADwAPABEAEQAdAB0AIQAhAB8AHwAfAB8AGQAZABQAFAASABIACQAJAAgACAAIAAgA//////7//v8BAAEAAQABAAYABgAHAAcACAAIAAsACwAIAAgAAgACAP/////8//z/+P/4//b/9v/3//f/9v/2//b/9v///////P/8//X/9f/3//f/9f/1//D/8P/1//X/+v/6//7//v8HAAcACgAKAA0ADQAOAA4ACgAKAAsACwALAAsACwALAAoACgADAAMABAAEAAUABQAEAAQACQAJAAkACQAJAAkAEAAQAAwADAAKAAoACgAKAP////////////////L/8v/z//P/+v/6//f/9//6//r/AQABAAIAAgABAAEAAQABAAMAAwAEAAQABAAEAAkACQAMAAwADAAMAAsACwAEAAQABAAEAAYABgADAAMAAQABAAQABAAHAAcACgAKAAsACwAQABAAEAAQAA4ADgAQABAADwAPAAoACgAEAAQAAQABAP7//v/3//f/9P/0//j/+P/z//P/8P/w//v/+//7//v/9f/1//r/+v/3//f/7//v//H/8f/t/+3/7//v//T/9P/x//H/8v/y//X/9f/1//X/9//3//n/+f//////AgACAAEAAQAHAAcACwALAAkACQAJAAkACAAIAAoACgAJAAkABAAEAAcABwADAAMA+//7/wIAAgAEAAQA/f/9/wMAAwAJAAkABgAGAAgACAAMAAwACQAJAAQABAD/////+//7//X/9f/2//b//f/9/wEAAQAEAAQABwAHAAoACgALAAsACAAIAAMAAwAAAAAAAAAAAAMAAwABAAEA/P/8/wEAAQAAAAAA/f/9/wIAAgADAAMA/v/+/wEAAQD/////AAAAAP/////+//7/AgACAP////8BAAEACAAIAAEAAQD+//7/BgAGAPv/+//v/+//7f/t/+j/6P/r/+v/8P/w//L/8v/8//z/AwADAAQABAAFAAUA/f/9//n/+f/6//r/9//3//j/+P/4//j/+f/5//n/+f/8//z/AAAAAAAAAAACAAIABwAHAAUABQAEAAQACgAKAAcABwAEAAQACgAKAAkACQAIAAgACgAKAAsACwAKAAoABgAGAAEAAQD9//3/+//7//7//v8BAAEAAgACAA0ADQASABIAEwATABQAFAAMAAwABQAFAAMAAwD9//3//v/+/wAAAAD6//r/AQABAAMAAwD/////BwAHAAgACAACAAIABAAEAAYABgAGAAYABgAGAAcABwAKAAoACgAKAAcABwACAAIA+v/6//7//v/6//r/7//v//X/9f/6//r/9//3//////8EAAQABwAHAA8ADwAMAAwACQAJAAMAAwD3//f/9f/1//H/8f/n/+f/6v/q//L/8v/y//L/9f/1//3//f8HAAcABQAFAAUABQAJAAkAAAAAAPv/+//6//r/8v/y//b/9v/2//b/7v/u//P/8//6//r/9//3//v/+/8BAAEABQAFAAkACQAKAAoADQANAAsACwAJAAkAEQARAA0ADQAEAAQAAgACAAAAAAD+//7/+v/6//v/+/8GAAYACAAIAAUABQASABIAFAAUAA4ADgARABEACwALAAUABQACAAIA9v/2//X/9f/7//v/+//7//3//f8BAAEACQAJAAkACQAGAAYADQANAAkACQAGAAYADAAMAAgACAABAAEA//////v/+//7//v/9f/1//D/8P/4//j/8//z/+r/6v/0//T/9//3//b/9v/8//z/AQABAAUABQAGAAYAAwADAAIAAgAAAAAA/P/8//f/9//w//D/9P/0//T/9P/x//H//P/8/wEAAQABAAEADAAMAA4ADgAHAAcABwAHAAUABQADAAMA/P/8//X/9f/5//n/9//3//D/8P/y//L/9P/0//b/9v/1//X/+P/4/wAAAAAAAAAAAgACAAgACAAIAAgABgAGAAQABAD/////AgACAAAAAAD3//f//f/9//3//f/5//n//////wIAAgAAAAAABQAFAAoACgAQABAADwAPAAgACAAJAAkAAwADAPr/+v/4//j/+P/4//z//P/7//v//P/8/wcABwAFAAUAAQABAAUABQAAAAAA+//7//z//P/4//j/+v/6//v/+//z//P/9f/1//f/9//w//D/8v/y//f/9//3//f/+v/6/wEAAQAGAAYABAAEAAUABQAKAAoABwAHAAMAAwADAAMA/v/+//3//f/2//b/7v/u//X/9f/x//H/7f/t//n/+f/+//7/AAAAAAUABQAHAAcADAAMAAsACwAFAAUACAAIAAcABwADAAMAAwADAAEAAQACAAIA/v/+//r/+v/8//z/9//3//P/8//6//r/+f/5//n/+f/+//7//P/8//3//f/+//7//P/8/wIAAgAFAAUA/////wQABAAJAAkABAAEAAIAAgAIAAgADQANAAkACQAKAAoAEQARABIAEgARABEADQANAAwADAALAAsABQAFAAQABAAHAAcAAgACAAAAAAAIAAgABgAGAAMAAwACAAIA//////v/+//2//b/9//3//v/+//2//b/8//z//b/9v/4//j/+v/6//n/+f/9//3/BQAFAAEAAQD/////BAAEAAIAAgD+//7//f/9//7//v8AAAAAAQABAAUABQAJAAkABgAGAAEAAQAFAAUABwAHAAIAAgAEAAQACQAJAAoACgAJAAkADAAMAA4ADgAJAAkABAAEAAEAAQD//////P/8//f/9//2//b/+P/4//P/8//x//H/+P/4//r/+v/4//j/+v/6/wEAAQAAAAAA/f/9//////8AAAAA/v/+//////8CAAIACAAIAAkACQAHAAcACwALAAwADAAEAAQAAgACAAMAAwD//////v/+/wAAAAACAAIAAwADAP/////9//3//f/9//n/+f/2//b/+f/5//3//f/7//v/+f/5//3//f/8//z/9v/2//n/+f/8//z/+P/4//b/9v/5//n/+v/6//X/9f/y//L/9v/2//j/+P/3//f/+v/6/wAAAAADAAMAAAAAAAIAAgAIAAgABgAGAAIAAgAFAAUABwAHAAcABwAHAAcABQAFAAUABQADAAMA/f/9//////8AAAAA+//7//7//v8AAAAA/P/8//v/+//+//7/AAAAAP7//v/7//v//f/9///////5//n/9//3//n/+f/4//j/9//3//v/+/8DAAMABAAEAAIAAgAJAAkADQANAAkACQAJAAkABgAGAAMAAwACAAIA/v/+//7//v8AAAAA+v/6//n/+f/9//3//P/8//v/+/8AAAAABAAEAAIAAgADAAMABwAHAAkACQAFAAUABQAFAAYABgADAAMA/v/+//r/+v/7//v/9//3//D/8P/z//P/+f/5//n/+f/6//r//////wEAAQABAAEAAQABAAIAAgACAAIAAQABAP3//f8AAAAABQAFAAIAAgADAAMABgAGAAIAAgABAAEACAAIAAYABgAFAAUACgAKAAgACAAFAAUAAAAAAPz//P////////////r/+v//////BAAEAAEAAQD/////AgACAAMAAwAEAAQABgAGAAcABwAIAAgACgAKAAYABgAFAAUABgAGAAAAAAD6//r//f/9/wAAAAD9//3/AQABAAQABAAAAAAAAQABAAUABQACAAIAAAAAAAgACAAJAAkACAAIAAkACQAGAAYABQAFAAIAAgD6//r/+//7/wEAAQD+//7//v/+/wIAAgD+//7//////wEAAQD8//z//v/+//3//f/3//f/+v/6//3//f/6//r/+v/6//z//P/8//z//f/9/wEAAQAEAAQABQAFAAoACgAPAA8ACQAJAAQABAABAAEA/f/9//v/+//6//r/9v/2//r/+v/7//v/8//z//P/8//5//n/+f/5//z//P8FAAUABwAHAAkACQAKAAoABAAEAAMAAwACAAIA9//3//b/9v/5//n/9f/1//r/+v8AAAAA/f/9/wMAAwAMAAwACgAKAAkACQALAAsADQANAAwADAAHAAcABAAEAAEAAQD//////f/9//v/+/8AAAAAAwADAP7//v8AAAAAAwADAP7//v8BAAEABAAEAAIAAgAHAAcABwAHAAMAAwAEAAQAAAAAAPr/+v/6//r/9P/0/+3/7f/y//L/9//3//P/8//6//r/CAAIAAYABgAIAAgADgAOAAsACwAJAAkABgAGAP3//f/+//7//f/9//X/9f/5//n//v/+//7//v8EAAQACQAJAAkACQAJAAkABgAGAAQABAADAAMAAQABAAIAAgD+//7//P/8//3//f/7//v//v/+//z//P/2//b/AAAAAAAAAAD3//f//v/+/wUABQACAAIABwAHAAkACQAFAAUABgAGAAIAAgD9//3//P/8//v/+//6//r//f/9/1Jlc1VOAQAAeJztlU9LAzEQxb9Lrq7a7LYF91b8A4IFkUoPUpY0mS2B3aRMZotS+t3dTetCZc3Ng5hj3u+9DExmyJ7tAJ22huU8Ydpo0qJi+f5MRpCFpPfvsi1LB8TyUcJUg4K8Pm0P64J0DR4gVLAThgpHAmlAB6NOKocLniasJuzE/iwR/NWLr2htlS61PBed2IHqT/PGaXkHBLIzLYV7Biwt1qA8niEKs4GF2LolILw6UI9mZkT14bTzjhdwTUVt8LarDuoBbf1kN1ouoN7audiGXacC3tTejvdK06n2unW2Nd727Ng5aU3J8suuncZ3kx+SI7uaBCgPsWAyDbFgMguxYHIcYsFkkP2QXCXMP9Ngl+lIeDrqfN3kFU5vjKAGYfhdesxyNr4es8PqEGc/zv7/nf34HcSViCvxF74DPpmmk2ya3aRxCeIS/O4SfAKq8daYAExHV1YmAAAAkw4AAEgaSNntE/cJ/AT9A/0D/gL/Af8B/wH/Af8B/wH/Af8B/wE=");
        this._hDeg = null;
        this._mDeg = null;
        this._sDeg = null;
        this.sr = this.attachShadow({ mode: 'open' });
        this.sr.innerHTML = `<span><svg xmlns:php="http://php.net/xsl" xmlns:xlink="http://php.net/xsl" id="mb-header-svg" viewBox="0 0 220 220" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5; width:0.92em; height:0.92em; vertical-align:-0.10em">
                    <circle id="mb-main-circle" cx="110" cy="110" r="90" style="fill:none; stroke:rgb(0,0,0); stroke-width:28px"/>
                    <g transform="translate(110,110)">
                        <path id="mb-hour" d="M0,0L0,-48" transform="rotate(180)" style="fill: none; stroke: rgb(0, 0, 0); stroke-width: 20px; display: block;"/>
                        <path id="mb-minute" d="M0,0L0,-64" transform="rotate(30)" style="fill: none; stroke: rgb(0, 0, 0); stroke-width: 20px; display: block;"/>
                        <!--<path id="mb-second" d="M0,0L0,-64" transform="rotate(30)" style="fill: none; stroke: rgb(200, 0, 0); stroke-width: 10px; display: block;"/>-->
                    </g>
                    <circle id="mb-middle-circle" cx="110" cy="110" r="0" style="fill:rgb(0,0,0); stroke:none"/>
                    </svg><span id="digital-clock"></span></span>`;
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (newValue !== oldValue) {
            this[attrName] = this.hasAttribute(attrName);
        }
    }

    get digital() {
        return this.hasAttribute('digital');
    }
    set digital(isDigital) {
        if (isDigital) {
            this.setAttribute('digital', true);
        } else {
            this.removeAttribute('digital');
            this.sr.querySelector('#digital-clock').innerHTML = '';
        }
    }

    get stopTime() {
        return this._stopTime;
    }

    stopTime(stop) {
        this._stopTime = true;
        window.cancelAnimationFrame(this.animationId);
    }
    startTime(start) {
        this._stopTime = false;
        this.doClock(this);
    }

    connectedCallback() {
        var color = window.getComputedStyle(this, null).color;
        this.sr.querySelector('#mb-main-circle').style.stroke = color;
        this.sr.querySelector('#mb-hour').style.stroke = color;
        this.sr.querySelector('#mb-minute').style.stroke = color;
        this.sr.querySelector('#mb-middle-circle').style.fill = color;
        this.sr.querySelector('span').style.whiteSpace = 'nowrap';
        this.doClock(this);
    }
    doClock(obj) {
        var obj = obj;
        var myDate = new Date();
        var hour = myDate.getHours();
        var minute = myDate.getMinutes();
        var second = myDate.getSeconds();

        var hDeg = 360 / 12 * hour + 30 / 60 * minute;
        var mDeg = 360 / 60 * minute;
        var sDeg = 360 / 60 * second;

        if (obj._hDeg != hDeg) {
            obj.sr.querySelector('#mb-hour').setAttribute('transform', 'rotate(' + hDeg + ')');
            obj._hDeg = hDeg;
        }
        if (obj._mDeg != mDeg) {
            obj.sr.querySelector('#mb-minute').setAttribute('transform', 'rotate(' + mDeg + ')');
            obj._mDeg = mDeg;
        }
        if (obj._sDeg != sDeg) {
            //obj.sr.querySelector('#mb-second').setAttribute('transform', 'rotate(' + sDeg + ')');
            if (obj.digital) {
                hour = (hour < 10) ? '0' + hour : hour;
                minute = (minute < 10) ? '0' + minute : minute;
                second = (second < 10) ? '0' + second : second;
                //obj.snd.play();
                obj.second = second;
                //var arrTime = `${hour}:${minute}:${second}`;
                var arrTime = '&nbsp;' + hour + ':' + minute + ':' + second;
                obj.sr.querySelector('#digital-clock').innerHTML = arrTime;
            }
            else {
                if (obj.sr.querySelector('#digital-clock').innerHTML != '') {
                    obj.sr.querySelector('#digital-clock').innerHTML = '';
                }
            }
            obj._sDeg = sDeg;
        }
        obj.animationId = requestAnimationFrame(function() { obj.doClock(obj) });
    }
}

customElements.define('uic-clock', uicClock);
