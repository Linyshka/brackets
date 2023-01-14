module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let n = 0;
  while(n < str.length) {
    if(str[n] === "(")
      stack.push("(");
    else if(str[n] === "{")
      stack.push("{");
    else if(str[n] === "[")
      stack.push("[");
    else if(str[n] === "1")
      stack.push("1");
    else if(str[n] === "3")
      stack.push("3");
    else if(str[n] === "5")
      stack.push("5");
    else if(str[n] === ")") {
      if(stack.pop() != "(")
        return false;
    }
    else if(str[n] === "}") {
      if(stack.pop() != "{")
        return false;
    }
    else if(str[n] === "]") {
      if(stack.pop() != "[")
        return false;
    }
    else if(str[n] === "2") {
      if(stack.pop() != "1")
        return false;
    }
    else if(str[n] === "4") {
      if(stack.pop() != "3")
        return false;
    }
    else if(str[n] === "6") {
      if(stack.pop() != "5")
        return false;
    }
    else if(str[n] === "7") {
      if(stack[stack.length - 1] === "7")
        stack.pop();
      else stack.push("7");
    }
    else if(str[n] === "8") {
      if(stack[stack.length - 1] === "8")
        stack.pop();
      else stack.push("8");
    }
    else if(str[n] === "|") {
      if(stack[stack.length - 1] === "|")
        stack.pop();
      else stack.push("|");
    }
    n++;
  }
  if(stack.length)
    return false;
  return true;
}