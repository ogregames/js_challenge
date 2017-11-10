//  Примечание
// `l1` и `l2` не массив, вы не можете получить доступ к элементу по индексу `l1[0]`. 
// Это Линейный связный список – https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA

// `l1, l2` это `ListNode` и  имеет  только `.x` и `.next`. Декларация обьекта ниже. Вы не можете вносить изменения в объект.
function ListNode(x) {
  this.value = x;
  this.next = null;
}

function mergeTwoLinkedLists(l1, l2) {
  let merged=[];
  let val1 = l1;
  let val2 = l2;
  while(val1 || val2){
    if(!val1){// l1 array already end
      merged.push(val2.value);
      val2 = val2.next;
    }else if(!val2){// l2 array already end
      merged.push(val1.value);
      val1 = val1.next;
    }else if(val1.value <= val2.value){
      merged.push(val1.value);
      val1 = val1.next;
    }else{
      merged.push(val2.value);
      val2 = val2.next;
    }
  }
  console.log(merged);
} 

 // test
(function test2(){
  // l1 = [1, 2, 3]` и `l2 = [4, 5, 6]` массив полученный слиянием должен выглядеть следующим образом `[1, 2, 3, 4, 5, 6]`
  let l1= new ListNode(1);
  let l1_tmp = new ListNode(2);
  l1.next = l1_tmp;
  l1_tmp.next = new ListNode(3);

  let l2= new ListNode(4);
  let l2_tmp = new ListNode(5);
  l2.next = l2_tmp;
  l2_tmp.next = new ListNode(6);
  console.log(mergeTwoLinkedLists(l1, l2));
}());

(function test1(){
//Для `l1 = [5,10,15,40]` и `l2 = [2,3,20]` массив полученный слиянием должен выглядеть следующим образом `[2, 3, 5, 10, 15, 20, 40]`
  let l1= new ListNode(5);
  let l1_tmp = new ListNode(10);
  l1.next = l1_tmp;
  let l1_tmp2 = new ListNode(15);
  l1_tmp.next = l1_tmp2;
  l1_tmp2.next = new ListNode(40);

  let l2= new ListNode(2);
  let l2_tmp = new ListNode(3);
  l2.next = l2_tmp;
  l2_tmp.next = new ListNode(20);
  console.log(mergeTwoLinkedLists(l1, l2));
}())