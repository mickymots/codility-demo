const lowest_bound = 1
const lowestFn =  function lowest(A) {
    A.sort((a,b)=> a-b)
    return A.reduce((lowest,current) => {
       if(current == lowest)
        return lowest + 2
       else return lowest 
    }, lowest_bound)
    

}




module.exports = lowestFn