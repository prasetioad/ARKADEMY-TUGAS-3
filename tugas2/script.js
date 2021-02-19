const names = [
    'Abigail','Alexandra','Alison','Amanda',
    'Angela','Bella','Carol','Caroline',
    'Carolyn','Deirdre','Diana','Elizabeth',
    'Ella','Faith','Penelope',
]


// let filterNames = function (query) {
//     return names.filter(function(people) {
//         return people.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     })
//   }


  
// let searchName = function(string,number,callback){
//     let hasil = [...callback(string)];
//     let person = hasil.slice(0,number);
//     console.log(person);
// }

// searchName('an',3,filterNames);

// const person = names.filter()
// console.log(person)


// const filterName = names.filter((people) => {
//     return people == 'Diana'
// })

// console.log(filterName)



// const mapping = names.map((string) => {
//     return string == 'Diana'
// })
// console.log(mapping)


let findPerson =((word) => {
    let filter = []
    for(y = 0; y < word.length;y++){
        for(i = 0; i < names.length; i++){
            for(x = 0; x < names[i].length; x++){
                let lowNames = names[i].toLowerCase();
                let lowWord = word[y].toLowerCase();
                if(word.length >= 2){
                    if(lowNames.charAt(x) == lowWord && lowNames.charAt(x+1) ==  word[y+1]){
                        filter.push(names[i])
                    }
                }else if(word.length === 1){
                    if(lowNames.charAt(x) == word[y]){
                        filter.push(names[i])
                    }
                }else {
                    console.log('ketikkan kata...')
                }
            }
        }
    }
    return filter
})


let gabung =((word,number, callback) => {
    let person = [...callback(word)]
    let hasil = person.slice(0,number)
    if(hasil.length == 0 && typeof(hasil) !== 'string'){
        console.log('Kata tidak sesuai dengan apapun!')
    }else{
        console.log(hasil)
    }
})


gabung('an',4,findPerson);

// console.log(filter);


// let search = 'A'
// const filtered = names.filter(name => name === search )
// console.log(filtered)