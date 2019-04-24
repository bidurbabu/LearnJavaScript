const hiker = {
    time: 30,
    display: function(name,location) {
        console.log(name + ' is from ' + location);
        console.log('And he hikes for ' + this.time + ' minutes everyday');
    }
};
console.log(hiker.display('bidur','Nepal'));  

//Apply example
console.log(hiker.display.apply({time: 50},['bidur1','Nepal1']));

//call example
console.log(hiker.display.call({time: 100},'bidur2','Nepal2'));

//bind example

const bidurHiker = hiker.display.bind({time: 200});
bidurHiker('bidur3','Nepal3');


