// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript!', str1, str2, str3;

str1 = str.slice(0,1);

console.log(str1);

str2 = str.substring(1,0);

console.log(str2);

str3 = str.substr(0,1);

console.log(str3);