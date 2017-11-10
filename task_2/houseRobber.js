function houseRobber(nums) {
    // @target 0 - unknown, 1 -  house index select as target, -1 - lock index
    let smart = nums.map( (x) => { return {val: x, target: 0 } })

    function logic(left, mainIndex, right){
        /*обработка особых случаев - домов в конце и начале улицы*/
        if(left === undefined) left = {val: 0, target: -1 };
        if(right === undefined) right = {val: 0, target: -1 };
        // справа или слева дома уже выбраны мишенями
        if(left.target === 1 || right.target === 1 ){
            smart[mainIndex].target = -1;
            return 1; // шагаем вперед
        }
        // подходящий дом
        if(smart[mainIndex].val>=left.val && smart[mainIndex].val>=right.val
            || smart[mainIndex].val>=left.val && right.target === -1
            || smart[mainIndex].val>=right.val && left.target === -1
            || left.target === -1 && right.target === -1){
            chooseCell(mainIndex);
            return 2;// можно сделать два шага
        }else{
            // нужно изучить следующие дома подробно 
            if(smart[mainIndex+1])
                logic(smart[mainIndex], mainIndex+1, smart[mainIndex+2]);
            return 0; // и вернуться к этому
        }
    }
    function chooseCell(index){
        if(smart[index]){smart[index].target = 1;}
        if(smart[index-1]){smart[index-1].target = -1;}
        if(smart[index+1]){smart[index+1].target = -1;}
    }
    // main point
    let index=0;
    while(index<smart.length){
        index+=logic(smart[index-1], index, smart[index+1]);
    }
return smart.reduce((sum, item) =>{ return (item.target === 1) ? sum+=item.val : sum}, 0);
}

// test
let nums = [5, 5, 5];
// => 10
console.log(houseRobber(nums));

nums = [1, 3, 1, 3, 100];
// => 103
console.log(houseRobber(nums));

nums = [2, 1, 3, 6, 100, 1, 2, 1, 1, 8, 4, 1];
// => 116
console.log(houseRobber(nums));

nums = [2, 1, 3, 6, 100, 300, 500, 900, 1500, 2500, 5000, 10000];
// => 13708
console.log(houseRobber(nums));

nums.reverse();
// => 13708
console.log(houseRobber(nums));