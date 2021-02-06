/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function(first, second) {
    first = first.split('');
    second = second.split('');

    const OPERATOR = {
        EDIT: 'edit',
        ADD: 'add',
        DELETE: 'delete',
    };
    let op = null;
    let isEdit = false;
    const firLen = first.length;
    const secLen = second.length;

    if (firLen === secLen) {
        op = OPERATOR.EDIT;
    } else if (firLen === secLen - 1) {
        op = OPERATOR.ADD;
    } else if (firLen === secLen + 1) {
        op = OPERATOR.DELETE;
    } else {
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            if (!isEdit) {
                switch(op) {
                    case OPERATOR.EDIT:
                        first[i] = second[i];
                        break;
                    case OPERATOR.ADD:
                        first.splice(i, 0, second[i]);
                        break;
                    case OPERATOR.DELETE:
                        first.splice(i, 1);
                        break;
                    default:
                        break;
                }
                isEdit = true;
            } else {
                return false;
            }
            i--;
        }
    }
    return true;
};