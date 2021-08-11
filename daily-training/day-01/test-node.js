/*
 * @Author: your name
 * @Date: 2021-07-05 18:15:58
 * @LastEditTime: 2021-07-07 23:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \daily-learning\daily-training\day-01\test-node.js
 */

var arr = [2, 3, 5, 4, 2, 1, 6];

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

// 冒泡排序
function bubbleSort(arr) {
    let len = arr.length;
    for(var i = 0; i < len - 1; i++) {
        for(var j = 0; j < len - 1 -i; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function bubbleSort2(arr) {
    let len = arr.length;
    let i = len - 1;

    while(i > 0) {
        let pos = 0;
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                pos = j;
                swap(arr, j, j + 1);
            }
        }

        i = pos;
    }
    return arr;
    
}

function bubbleSort3(arr) {
    let start = 0, end = arr.length - 1;
    while(start < end) {
        for(let i = start; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
              }
        }

        end -= 1;
        for(let j = end; j > start; j--) {
            if(arr[j -1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
        start += 1;
    }
    return arr;
}

// console.log('bubbleSort: ', bubbleSort(arr));

function bubbleSort4(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let endPos = 0;
      let startPos = 0;
  
      for (let i = start; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          endPos = i;
          swap(arr, i, i + 1);
        }
      }
      end = endPos;
      for (let i = end; i > start; i--) {
        if (arr[i - 1] > arr[i]) {
          startPos = i;
          swap(arr, i - 1, i);
        }
      }
      start = startPos;
    }
  
    return arr;
  }
  
  // test
  const arr2 = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
  console.log(bubbleSort3(arr2));













