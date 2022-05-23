// class Node{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

const depthFirstValue = (root) => {
    if (root === null) return [];
    const result = [];
    const stack = [root]; //null values
    while (stack.length > 0){
        const current = stack.pop();
       // console.log(current.val); //for testing
        result.push(current.val);

        //push children
        if(current.right) stack.push(current.right);
        if(current.left)  stack.push(current.left);
    }
    return result;
};
depthFirstValue();

//for testing..
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// depthFirstValue(e);

module.export = {
    depthFirstValue
}