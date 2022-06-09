// code your solution here
function superbowlWin(records){
    const denverYear = records.find(winningSeason);
    if (!!denverYear === true){
        return denverYear.year
    }
    else {
        return undefined
    }
    
}

const winningSeason = function(record) {
    return record.result === 'W'  
}