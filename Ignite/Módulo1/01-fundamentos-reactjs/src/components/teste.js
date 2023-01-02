const lista = [1,2,3,4,0]
verifyIfValuesIsNull(lista)
function verifyIfValuesIsNull(lista) {
    let count = 0

    for (var i = 0; i < lista.length; i++) {
        // console.log(lista[i]);
        if(lista[i] == null || lista[i] == 0){
            count++;
        }
    }
    
    console.log(count)
}