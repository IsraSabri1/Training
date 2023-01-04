    let count = 0
    let countEl = document.getElementById("count-el")
    let saveEl = document.getElementById("save-el")
    function increment (){
        count += 1
        console.log("the button was clicked")
        countEl.textContent = count
    }
    function save(){
    let countDash = count + " - "
    saveEl.textContent += countDash
    count = 0
    countEl.textContent = count
    console.log(count)
    }

    //task log a greeting to console
    /*let name = "Isra Ahmed Sabri"
    let greeting = "Hello , my name is "

    let myGreeting = greeting + name

    console.log(myGreeting)*/
    // task - write your string variable
    /*let username =  "Isra"
    let message = "You have three new notifications"
    console.log(message + ", " + username + "!")

    let messageToUser = message +", " + username + "!"
    console.log(messageToUser)*/
   /* let lapsCompleted = 0
    function incrementLaps(){
        lapsCompleted = lapsCompleted + 1
    }

    incrementLaps()
    incrementLaps()
    incrementLaps()

    console.log(lapsCompleted)
*/
    //task - write a function that logs the sum
    /*
    let lap1 = 34
    let lap2 = 33
    let lap3 = 36

    function summation (){
    let total= lap1+lap2+lap3
    console.log(total)
    }
    summation()
    */

    //document.getElementById("count-el").innerText =5
    /*
    let count = 5
    console.log(count)

    // task - write first javaScript variable
    /*let myAge = 22
    console.log(myAge)*/

    //task - basic mathematical operation
    /*let myAge = 22
    let humanDogRatio = 7
    let myDogAge = myAge * humanDogRatio
    console.log(myDogAge)*/

    //task reassigning and incrementing
    /*let bonusPoints = 50
    bonusPoints = bonusPoints + 50
    bonusPoints = bonusPoints - 75
    bonusPoints = bonusPoints + 45
    console.log(bonusPoints)*/

