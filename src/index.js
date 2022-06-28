module.exports = function toReadable (number) {

    if(number === 0){return 'zero'};

    let lvl_1 = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    let lvl_2 = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let special_lvl = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    
    let arr = String(number).split('');
    let chunk_num_arr = [];
    result = '';
    

    for (;;) {
        if(arr.length){
            arr.length > 3 ? chunk_num_arr.unshift(arr.splice(arr.length - 3, 3)) : chunk_num_arr.unshift(arr.splice(0, arr.length))             
        }else break;
    }
    chunk_num_arr.forEach((element, index) => {        
        element.forEach((el, idx) => {            
            if (element.length === 3 && idx === 0) {                
                result += lvl_1[el] + ' hundred';
            }else if(el !== 0){
                if ( (element.length === 3 && idx === 1) || (element.length === 2 && idx === 0) ) {                    
                        el == 1 ? result += special_lvl[element[element.length - 1]] : result += lvl_2[el] + lvl_1[element[element.length - 1]]
                    }                
                else if (element.length === 1) { result += lvl_1[el]; }                
            }            
        });        
    });
    return result.trim();
}
