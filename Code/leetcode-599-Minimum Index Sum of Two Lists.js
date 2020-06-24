/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let min = list1.length + list2.length
    let favorite = []
    let list2HashMap = {}
    list2.map((item, index) => {
        list2HashMap[item] = index
    })
    list1.forEach((item, index)=> {
        if (list2HashMap[item] !== undefined) {
            let minIndex = index + list2HashMap[item]
            if (minIndex < min) {
                favorite = []
                favorite.push(item)
                min = minIndex
            } else if (minIndex === min) {
                favorite.push(item)
            }
        }
    })
    return favorite
};