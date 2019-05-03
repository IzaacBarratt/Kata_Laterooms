export function filterAccom(filters, accom) {
    var output = [];

    for (var i = 0; i < accom.length; i ++) {
        const a_item = accom[i];
        //if (a_item === undefined) continue;
        
        for (var j = 0; j < filters.length; j ++) {
            const filter = filters[j];

            // Checks if item contains any of the filters - if it does add to list and move on. 
            // Otherwise will run out and not add
            if (a_item.facilities.includes(filter)) {
                output.push(a_item);
                break;              
            }
        }
    }

    return output;
}