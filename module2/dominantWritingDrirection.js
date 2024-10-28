const SCRIPTS = require("./script");

function dominantDirection(text) {
    // Your code here.
    let counted = countBy(text, char => {
        let script = charScript(char.codePointAt(0));
        return script ? script.direction : "null";

    }).filter(({name}) => name != "null");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  function charScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.find(c => c.name == name);
      if (!known) {
        counts.push({name, count: 1});
      } else {
        known.count++;
      }
    }
    return counts;
  }
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl