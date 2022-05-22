function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
        let n = +input[line];
        line++
        let arr = input[line].trim().split(" ").map(Number);
        line++
        
        let stack = [];
        let top = -1;
        let next = [];
        
        for(let i=0;i<n;i++){
            next[i] = -1;
        }
        
        for(let i=0;i<n;i++){
            if(top == -1){
                top++
                stack.push(i)
            }else{
                while(top!=-1){
                    // console.log(arr[top])
                    if(arr[stack[top]] < arr[i]){
                        next[stack[top]]=arr[i];
                        stack.pop()
                        top--
                    }else{
                        break;
                    }
                }
                top++
                stack.push(i)
            }
            
        }
      
        console.log(next.join(" "))
        
    }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

