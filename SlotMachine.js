function slots(quarters,goal){
    var win = false;
    if (goal == undefined){
        goal = 0;
    }
    while (win == false){
        if (quarters > 0){
            quarters--; //takes quarter
            if (Math.random() < .01){ //1 in 100 chances of winning
                quarters += 50 + Math.trunc(Math.random()*51); //between 50 and 100 quarters, inclusive 100
                console.log(quarters);
                if (quarters >= goal){
                    win = true;
                return quarters;
                }
            }
        }
        else {
            console.log(0);
            return 0;
        }
    }
}