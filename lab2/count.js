var ans = prompt("Enter Your String :");
        var count=0;
        for (let i = 0; i < ans.length; i++) {
            if(ans[i]=='a'||ans[i]=='e'||ans[i]=='o'||ans[i]=='u'||ans[i]=='i'||ans[i]=='A'||ans[i]=='E'||ans[i]=='O'||ans[i]=='U'||ans[i]=='I')
                count++;
        }
        alert("number of vowels in your string is "+count);





//Another method
        //const vowels = ["a", "e", "i", "o", "u"];
//function countVowel(str) {

    //var count = 0;

    //for (var letter of str.toLowerCase()) {
        //if (vowels.includes(letter)) {
        //    count++;
      //  }
    //}

  //  return count
//}

//const string = prompt('Enter a string: ');

//const result = countVowel(string);

//alert(result);