// Remove command prefix
PennController.ResetPrefix(null);

//generate unique id
uniqueID = [1,2,3,4].map(v=>Math.floor((1+Math.random())*0x10000).toString(16).substring(1)).join('-');

// define a function to get a random number in range(0,max)
function getRandomTask(max) {
  return Math.floor(Math.random() * max);
}

//choose a random task for participants
var exp = getRandomTask(3) // possible int: 0,1,2

// task 1
if(exp == 0){
    Sequence("consent","intro","background","intro-2","ex1-instructions","1.1 training-v2","endTrain-1", randomize("1.2 prior-v2"),"send","debrief","payment_form","send","completion_screen");
}

//task 2
else if(exp == 1){
    Sequence("consent","intro","background","intro-2","ex2-instructions", randomize('2.1 training'),"endTrain-2", randomize("2.2 likelihood"),"send","debrief","payment_form","send","completion_screen");
}

//task 3
else{
    Sequence("consent","intro","background","intro-2","ex3-instructions", randomize("3.1 training"),"endTrain-3",randomize("3.2 posterior"),"send","debrief","payment_form","send","completion_screen");
}

//DebugOff()
//Sequence("consent","intro","background","intro-2","ex1-instructions","1.1 training-v2","endTrain-1", randomize("1.2 prior-v2"),"send","ex2-instructions", randomize('2.1 training'),"endTrain-2", randomize("2.2 likelihood") ,"send","ex3-instructions", randomize("3.1 training"),"endTrain-3",randomize("3.2 posterior") ,"send","debrief","send","completion_screen")
//Sequence("consent","background","intro","intro-2");
//Sequence("debrief","send","payment_form","send","completion_screen")
//uncomment for experiment 1 - version2
//Sequence("ex1-instructions","1.1 training-v2","endTrain-1", randomize("1.2 prior-v2") )

//uncomment for experiment 2
//Sequence("ex2-instructions", randomize('2.1 training'),"endTrain-2", randomize("2.2 likelihood") )

//uncomment for experiment 3
//Sequence("ex3-instructions", randomize("3.1 training"),"endTrain-3",randomize("3.2 posterior") )


// consent form
newTrial("consent",
    newHtml("consent_form","consent.html")
        .cssContainer({"width":"720px"})
        .checkboxWarning("????????????????????????????????????")
        .log()
        .print()
    ,
    newButton("continue", "????????????")
        .center()
        .print()
        .wait(getHtml("consent_form").test.complete()
                  .failure(getHtml("consent_form").warn())
        )
).log( "ID" , uniqueID );

// background form
newTrial("background",
    newHtml("background","background.html")
        .cssContainer({"width":"720px"})
        .checkboxWarning("??????????????????????????????????????????")
        .log()
        .print()
    ,
    newButton("continue", "????????????")
        .center()
        .print()
        .wait(getHtml("background").test.complete()
                  .failure(getHtml("background").warn())
        )
).log( "ID" , uniqueID )
;

//Intro
newTrial("intro",
        newText("Hello! ?????????????????????????")
            .bold()
            .center()
            .print()
        ,
        newText("id", "?????????????????????ID???  "+ uniqueID )
            .bold()
            .color("red")
            .center()
            .print()
        ,
        newText("<p>????????????????????????????????????????????????Chrome, Firefox, ???Safari????????????")
            .center()
            .print()
        ,
        newText("??????????????????10???????????????????????????????????????????????????")
            .center()
            .print()
        ,
        newText("????????????????????????????????????<b>?????????????????????</b>???")
            .center()
            .print()
        ,
        newText("??????<b>???????????????</b>????????????????????????????????????????????????</p>")
            .center()
            .print()
        // ,
        // newText("<p>?????????????????????????????????</p>")
        //     .center()
        //     .print()
        // ,
        // newText("<b>??????1. ???????????????????????????????????????</b>")
        //     .center()
        //     .print()
        // ,
        // newText("<b>??????2. ????????????????????????????????????????????????????????????</b>")
        //     .center()
        //     .print()
        // ,
        // newText("<b>??????3. ?????????????????????????????????????????????</b>")
        //     .center()
        //     .print()
        ,
        newText("<p>?????????????????????????????????????????????????????????????????????????????? :)</p>")
            .center()
            .print()
        ,
        newText("<p?????????????????????????????????????????????????????????????????????????????????????????????:) </p>")
            .center()
            .print()
        ,
        newText("???????????????????????????????????????????????????")
            .center()
            .print()
        ,
        newText("?????????????????????????????????<b>???????????????</b>?????????????????????????????????</p>")
            .center()
            .print()
        ,
        newText("????????????????????????????????????????????????????????????????????????????????????</p>")
            .center()
            .print()
        ,
        newText("????????????????????????????????????????????????????????????????????????</p>")
            .center()
            .print()
        ,
        newButton("wait", "????????????????????????")
            .center()
            .print()
            .wait()
        // ,
        // newVar("ID")
        //     .global()
        //     .set(getTextInput("input_ID"))
        // ,
        // newVar("Email")
        //     .global()
        //     .set(getTextInput("email"))
)

// introduction to the character
newTrial('intro-2',
    newText("????????????")
        .bold()
        .css("font-size", "1.5em")
        .center()
        .print()
    ,
    newText("instructions-1", "<p>??????????????????????????????????????????????????????</p>")
        .center()
        .print()
    ,
    newImage("w1", "wanggang.png")
        .size(150,150)
    ,
    newImage("w2", "lihua.png")
        .size(150,150)
    ,
    newImage("w3", "xiaoming.png")
        .size(150,150)
    ,
    newImage("w4", "other.png")
        .size(150,150)
    ,
    newCanvas('worlds', 650, 250)
        .add( 0, 50, getImage('w1') )
        .add( 160, 50, getImage('w2'))
        .add( 320, 50, getImage('w3'))
        .add( 480, 50, getImage('w4'))
        .center()
        .print()
    ,
    newText("instructions-2", "<p>??????????????????<font color=red>??????</font>??????????????????<br>??????????????????????????????????????????????????????????????????<font color=red>??????</font>???</p>")
        .center()
        .print()
    ,
    newButton("wait", "??????????????????")
        .center()
        .print()
        .wait()
)



//1. prior experiment - select picture
// Instructions
newTrial("ex1-instructions",
    newText("instructions-1", "????????????")
        .bold()
        .css("font-size", "1.5em")
        .center()
        .print()
    ,
    newText("??????????????? ???????")
        .bold()
        .center()
        .print()
    ,
    newText("instructions-2", "<p>????????????????????????????????????????????????????????????????????????????????????????????????</p>")
        .center()
        .print()
    ,
    newText("instructions-3", "<b> 1. ????????????????????????????????? ???? </b>")
        .print()
    ,
    newText("instructions-4", "<b> 2. ?????????????????????????<b style='color:Blue;'> ???????????? </b>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????tip??????????????????????????????????????????????????????</b>")
        .print()
    ,
    newText("instructions-6", "<p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? :)  </p>")
        .center()
        .print()
    ,
    newText("<p>????????????????????????????????????????????????????????????????????????????????????</p>")
            .center()
            .print()
    ,
    newButton("wait", " ???????????? ")
        .center()
        .print()
        .wait()
)

//1.1 training - version2
newTrial("1.1 training-v2",
    newText(" ?????? ")
        .bold()
        .css("border", "solid 1px black")
        .center()
        .print()
    ,
    newText('s1',"   </p> &nbsp??????&nbsp")
        .bold()
        .css("font-size", "1.6em")
        .before( newImage("wanggang.png").size(90) )

    ,
    newText("s2", '<br><br>&nbsp???<font color = red>&nbsp &nbsp?&nbsp &nbsp</font>?????????????????? ???')
        .center()
        .bold()
        .css("font-size", "1.6em")
    ,
    newImage("lihua.png")
        .size(90,90)
        .before(getText('s1'))
        .after(getText('s2'))
        .center()
        .print()
    ,
    newText(" -----------------------------------------------------------------------------------------------------------").center().print()
    ,
    newText("question", "????????????????????????????????????????????????<font color = red>????????????</font>???????????? <font color = red>?</font> ???, ???????????????????????????????????????")
        .bold()
        .center()
        .print()
    ,
    newText("??????tip??????????????????????????????????????????????????????")
        .bold()
        .center()
        .print()
    ,
    newText("instruction", "<br>???<b style='color:Blue;'> ?????????<b>????????????</b></b> ??????????????????????????????????????????")
        .center()
        .print()
    ,
    newText("feedback")
    ,
    newImage("w1", "wanggang.png")
        .size(200,200)
    ,
    newImage("w2", "lihua.png")
        .size(200,200)
    ,
    newImage("w3", "other.png")
        .size(200,200)
    ,
    newText("pleasewait", "</br>????????????3?????????")
        .bold()
        .center()
        .print()
    ,
    newTimer("wait", 3000)
        .start()
        .wait()
    ,
    getText("pleasewait")
        .remove()
    ,
    newCanvas( 'worlds', 700, 450)
        .add( 0, 50, getImage('w1') )
        .add( 250, 50, getImage('w2'))
        .add( 500, 50, getImage('w3'))
        .center()
        .print()
    ,
    newSelector("world")
        .add( getImage("w1") , getImage("w2"), getImage("w3") )
        .log("all")
    ,
    getSelector("world")
        .callback(
            getSelector("world")
                .test.selected(getImage("w2")).success( 
                    getText("feedback")
                            .text("<p>????????????????????????????????????????????????????????????</p> ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????")
                            .color("red")
                            .center()
                            .print(150,250,"worlds")
                )
                .test.selected(getImage("w1")).success(
                    getText("feedback")
                        .text("<p>????????????????????????????????????????????????????????????</p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????")
                        .color("red")
                        .center()
                        .print(150,250,"worlds")
                    
                )
                .test.selected(getImage("w3")).success(
                    getText("feedback")
                        .text("<p>???????????????????????????????????????????????????????????????</p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????")
                        .color("red")
                        .center()
                        .print(150,250,"worlds")
                    
                )
        )
    ,
    getSelector("world").wait()
    ,
    newText("??????????????????????????????????????????")
        .bold()
        .center()
        .print(180,360,"worlds")
    ,
    newText("button","??????????????????????????????????????? ")
    ,
    newButton("wait", " ????????????")
        .center()
        .bold()
        .before(getText("button"))
        .after(newText("???????????????"))
        .print(150,400,"worlds")
        .wait()
).log( "ID" , uniqueID )

//end training
newTrial("endTrain-1",
    newText("????????????!")
            .bold()
            .css("font-size", "1.5em")
            .center()
            .print()
    ,
    // newText("<p> ????????????! </p>")
    //     .bold()
    //     .css("font-size", "2em")
    //     .center()
    //     .print()
    // ,
    newText("<p>?????????????????????????????????????????????<font color=red>??????</font>??????????????????????????????</p>")
        .center()
        .print()
    ,
    newText("<p>?????????????????????????????????????????????????????????:) ??????????????????????????????????????????????????????")
        .center()
        .print()
    ,
    newText("?????????????????????????????????<b>???????????????</b>?????????????????????????????????</p>")
        .center()
        .print()
    ,
    newText("<p>?????????????????????????????????????????????????????????????????????</p>")
        .center()
        .print()
    ,
    newButton("wait", " ??????????????????")
        .center()
        .print()
        .wait()
);

//1.2 version2
// instead of the name of the character, here we use the pictures of the character
Template("item1.csv",
    row => newTrial( "1.2 prior-v2" ,
        newTimer("break", 1000)
            .start()
            .wait()
        ,
        newImage("W1", row.W1)
            .size(200,200)
        ,
        newImage("W2", row.W2)
            .size(200,200)
        ,
        newImage("W3", row.W3)
            .size(200,200)
        ,
        newText('s1',"&nbsp ?????? ")
            .bold()
            .css("font-size", "1.6em")
            .before( newImage(row.W1).size(90,90) )
        ,
        newText("s2", "<br><br>&nbsp"+row.sentence2 + '???')
            .center()
            .bold()
            .css("font-size", "1.6em")
        ,
        newImage(row.W2)
            .size(90,90)
            .before(getText('s1'))
            .after(getText('s2'))
            .center()
            .print()
        ,
        newText(" -----------------------------------------------------------------------------------------------------------").center().print()
        ,
        newText("question", "???????????????????????????????????????????????????????????????????????? ? ?????????????????????????????????????????????")
            .bold()
            .color("red")
            .center()
            .print()
        ,
        newText("??????tip??????????????????????????????????????????????????????")
            .bold()
            .color("red")
            .center()
            .print()
        ,
        newText("instruction", "???<b style='color:Blue;'> ?????????<b>??????</b></b> ?????????<b>????????????</b>??????????????????????????????")
            .center()
            .print()
        ,
        newText("pleasewait", "</br>????????????2?????????")
            .center()
            .print()
        ,
        newTimer("wait", 2000)
            .start()
            .wait()
        ,
        getText("pleasewait")
            .remove()
        ,
        newCanvas( 'worlds', 700, 350)
            .add( 0, 50, getImage('W1') )
            .add( 250, 50, getImage('W2'))
            .add( 500, 50, getImage('W3'))
            .center()
            .print()
        ,
        newSelector("world")
            .add( getImage("W1") , getImage("W2"),getImage("W3") )
            .shuffle()
            .log()
            .wait()
    )
    .log( "ID" , uniqueID )
    .log("experiment", row.experiment)
    .log("senID", row.senID)
    .log("item", row.item)
    .log("type", row.type)
    .log("sentence", row.sentence)
    .log("W1", row.W1)
    .log("W2", row.W2)
    .log("W3", row.W3)
);



//2. likelihood experiment - dropdown 

// 2.0 instruction
newTrial("ex2-instructions",
    newText("instructions-1", "????????????")
        .bold()
        .css("font-size", "1.5em")
        .center()
        .print()
    ,
    newText("??????????????? ???????")
        .bold()
        .center()
        .print()
    ,
    newText("instructions-2", "<p>??????????????????????????????????????????????????????????????????<font color = red>???????????????????????????????????????</font>???????????????</p>")
        .center()
        .print()
    ,
    newText("instructions-3", "<b> 1. ????????????????????????????????????????????????????????????????????????????????? ???????</b>")
        .print()
    ,
    newText("instructions-4", "<b> 2. ??????????????????????????????????????????<font color = red>????????????????????????????????????</font>???????????????????????????????????????????????????</b>")
        .print()
    ,
    newText("instructions-5", "<b> 3. ????????????????????????????????????????????????????????????????????????????????????????????????:) ????????????????????????????????????????????????<font color = red>?????????</font>?????????</b>")
        .print()
    ,
    newText("instructions-7", "<p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? </p>")
        .center()
        .print()
    ,
    newText("<p>????????????????????????????????????????????????????????????????????????????????????</p>")
            .center()
            .print()
    ,
    newButton("wait", " ??????????????????")
        .center()
        .print()
        .wait()
);

//2.1 training
Template("item2-train.csv",
    row => newTrial( "2.1 training" ,
        newTimer("break", 1000)
            .start()
            .wait()
        ,
        newText(" ???????????? ")
        .bold()
        .css("border", "solid 1px black")
        .center()
        .print()
        ,
        newText("instruct","<br>?????????????????????????????????????????????")
            .color("red")
            .center()
            .print()
        ,
        newText("instruct-2","?????????????????????????????????????????????<font color = red>??????????????????????????????</font>??????????????????")
            .bold()
            .center()
            .print()
        ,
        
        newText("<br><b>??????tip??????????????????????????????????????????????????????????????????????????????</b>???")
            .center()
            .print()
        ,
        
        newText("<p> -----------------------------------------------------------------------------------------------------------</p>").center().print()
        ,
        newDropDown("pronouns", "")
            .add('???','?????????','??????', row.op4)
            .shuffle()
            .before(newText("sentence", row.sentence + " ")
                .bold()
                .css("font-size", "1.8em"))
            .after(newText("sentence2", " " + row.sentence2 )
                .bold()
                .css("font-size", "1.8em"))
            .center()
            .bold()
            .css("font-size", "1.5em")
            .log()
            .print()
        ,
        newText('</p>').print()
        ,
        newImage("trueworld", row.world)
            .size(300,300)
            .center()
            .print()
        ,
        getDropDown("pronouns")
            .wait()
        ,
        newButton("next", "Next")
            .center()
            .bold()
            .log()
            .css("font-size", "1em")
            .print(880,390)
            .wait()
    )
    .log( "ID" , uniqueID )
    // .log("Email", getVar("Email"))
    .log("experiment", row.experiment)
    .log("item", row.item)
    .log("sentence", row.sentence)
    .log("sentence2", row.sentence2)
    .log("world", row.world)
);

newTrial("endTrain-2",
    newText("??????????????????! ")
            .bold()
            .css("font-size", "1.5em")
            .center()
            .print()
    ,
    // newText("<p> ??????????????????! </p>")
    //     .bold()
    //     .css("font-size", "2em")
    //     .center()
    //     .print()
    // ,
    newText("<p>???????????????????????????????????????<b>?????????????????????</b>?????????????????????????????????????????????????????????</p>")
        .center()
        .print()
    ,
    newText("<p>????????????????????????????????????????????????</p>")
        .color("blue")
        .center()
        .print()
    ,
    newText("?????????????????????????????????<b>???????????????</b>?????????????????????????????????</p>")
            .center()
            .print()
    ,
    newText("<p>?????????????????????????????????????????????????????????????????????????????????:) </p>")
        .center()
        .print()
    ,
    newButton("wait", " ??????????????????")
        .center()
        .print()
        .wait()
)

//2.2 start experiment
Template("item2.csv",
    row => newTrial( "2.2 likelihood" ,
        newTimer("break", 1000)
            .start()
            .wait()
        ,
        newText("instruct","<br>?????????????????????????????????????????????")
            .color("red")
            .center()
            .print()
        ,
        newText("instruct-2","?????????????????????????????????????????????<font color = red>?????????????????????????????????????????????</font>???")
            .bold()
            .center()
            .print()
        ,
        
        newText("<br><b>??????tip??????????????????????????????????????????????????????????????????????????????</b>???")
                .center()
                .print()
        ,
        
        newText("<p> -----------------------------------------------------------------------------------------------------------</p>").center().print()
        ,
        newDropDown("pronouns", "")
            .add('???','?????????','??????',row.op4)
            .shuffle()
            .before(newText("sentence", row.sentence + ' ')
                .bold()
                .css("font-size", "1.8em"))
            .after(newText("sentence2", " " + row.sentence2 )
                .bold()
                .css("font-size", "1.8em"))
            .center()
            .bold()
            .css("font-size", "1.5em")
            .log()
            .print()
        ,
        newText('</p>').print()
        ,
        newImage("trueworld", row.world)
            .size(300,300)
            .center()
            .print()
        ,
        getDropDown("pronouns")
            .wait()
        ,
        newButton("next", "Next")
            .center()
            .bold()
            .css("font-size", "1.1em")
            .print(850,370)
            .wait()
    )
    .log( "ID" , uniqueID )
    // .log("Email", getVar("Email"))
    .log("senID", row.senID)
    .log("experiment", row.experiment)
    .log("Group", row.Group)
    .log("type", row.type)
    .log("item", row.item)
    .log("condition",row.condition)
    .log("sentence", row.sentence)
    .log("sentence2", row.sentence2)
    .log("world", row.world)
);

// 3. posterior experiment
// Instructions
newTrial("ex3-instructions",
    newText("instructions-1", "????????????")
        .bold()
        .css("font-size", "1.5em")
        .center()
        .print()
    ,
    newText("??????????????? ???????")
        .bold()
        .center()
        .print()
    ,
    newText("instructions-2", "<p>????????????????????????????????????????????????????????????????????????????????????</p>")
        .center()
        .print()
    ,
    newText("instructions-3", "<b>1. ??????????????????????????? ??????????tip???????????????????????? </b>")
        .print()
    ,
    newText("instructions-4", "<b>2. ???????????????????????????????????????????????????????????????????<b style='color:Blue;'> ????????? </b>?????????????????????????????????????????????????????????</b>")
        .print()
    ,
    newText("instructions-5", "<b>3. ???????????????????????????????????????<b style='color:Blue;'> ???????????? </b>???????????????????????? ??????????????????????????????????????????????????????</b>")
        .print()
    ,
    newText("<br>?????????????????????????????????????????????????????????????????????????????????????????????:) ")
        .center()
        .print()
    ,
    newText("???????????????????????????????????????????????????")
        .center()
        .print()
    ,
    newText("<br>?????????????????????????????????????????????????????????????????????????????????")
            .center()
            .print()
    ,
    newText("????????????????????????????????????????????????????????????????????????????????????<br>")
            .center()
            .print()
    ,
    newText("instructions-7", "<p>??????????????????<b>????????????</b>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<font color=red>??????</font>??????????????????</p>")
        .center()
        .print()
    ,
    newButton("wait", " ?????????????????? ")
        .center()
        .print()
        .wait()
)
//3.1 training - 5 trials
Template("item3-train.csv",
row => 
    newTrial("3.1 training",
        newTimer("break", 1000)
                .start()
                .wait()
        ,
        newVar("correct")
            .log("set")
        ,
        newText(" ???????????? ")
        .bold()
        .css("border", "solid 1px black")
        .center()
        .print()
        ,
        newText("feedback")
        ,
        newText("sentence", row.sentence)
                    .bold()
                    .css("font-size", "2em")
                    .center()
                    .print()
        ,
        newTimer("wait", 10000)
            .start()
        ,
        newText("question", "</p>" + row.question)
            .bold()
            .css("font-size", "1.2em")
            .before(newText("</p> ?????????").css("font-size", "1.2em"))
            .color("red")
            .center()
            .print()
        ,
        newText("instruction", "</p> ?????????????????????????????? <b style='color:Blue;'> ?????????</b> ???????????????????????????????????????????????????")
            .center()
            .print()
        ,
        newKey("space", " ")
            .callback( getTimer("wait").stop() )
            .log()
        ,
        getTimer("wait")
            .wait()
        ,
        //  getText("sentence")
        //     .remove()
        // ,
        getText("instruction")
            .remove()
        ,
        newText("</p> ??????<b style='color:Blue;'> ???????????? </b> ?????? ")
            .center()
            .print()
        ,
        newImage("op1", row.option1)
            .size(200,200)
            //.print()
        ,
        newImage("ans", row.answer)
            .size(200,200)
            //.before( getImage("W1") )
        ,
        newImage("op3", row.option3)
            .size(200,200)
            //.before( getImage("W2") )
            //.print()
        ,
        newCanvas( 'worlds', 700, 200)
            .add( 0, 50, getImage('op1') )
            .add( 250, 50, getImage('ans'))
            .add( 500, 50, getImage('op3'))
            .center()
            .print()
        ,
        newSelector("world")
            .add( getImage("op1") , getImage("ans"), getImage("op3") )
            .shuffle()
            .once()
            .log()
            .wait()
        ,
        getSelector("world")
            .test.selected(getImage("ans"))
            .success( 
                getText("feedback")
                    .text("???????????????????????????")
                    .color('red')
                    .center()
                    .print(280,300,"worlds")
                ,
                getVar("correct")
                    .set(true)
            )
            .failure( 
                getText("feedback")
                    .text("??????!")
                    .after(newText(row.feedback).color("red"))
                    .after(newText("</p> ??????????????????").color("red"))
                    .color("red")
                    .center()
                    .print(280,300,"worlds")
                ,
                getVar("correct")
                    .set(false)
                )
        ,
        newTimer("post-trial", 3000).start()
        ,
        newKey(" ")
            .callback( getTimer("post-trial").stop() )
            .log()
        ,
        getTimer("post-trial")
            .wait()

    )
    .log("experiment", row.experiment)
    .log("sentence", row.sentence)
    .log("item", row.item)
    .log("Correct", getVar("correct"))
    .log( "ID" , uniqueID )
    // .log("Email", getVar("Email"))
)

newTrial("endTrain-3",
    newText("??????????????????!")
            .bold()
            .css("font-size", "1.5em")
            .center()
            .print()
    ,
    // newText("<p> ??????????????????! </p>")
    //     .bold()
    //     .css("font-size", "2em")
    //     .center()
    //     .print()
    // ,
    newText("<br>??????????????????<font color=red>??????</font>??????????????????????????????????????????????????????<font color = red>????????????</b>????????????")
        .center()
        .print()
    ,
    newText("?????????????????????????????????????????????????????????:) ")
            .center()
            .print()
    ,
    newText("?????????????????????????????????????????????????????????<br>")
        .center()
        .print()
    ,
    newText("<br>?????????????????????????????????????????????????????????????????????????????????")
            .center()
            .print()
    ,
    newText("????????????????????????????????????????????????????????????????????????????????????<br>")
            .center()
            .print()
    ,
    newText("<p>?????????????????????????????????????????????????????????????????????????????????:) </p>")
        .center()
        .print()
    ,
    newButton("wait", " ??????????????????")
        .center()
        .print()
        .wait()
);
 


//3.2 start
// show the sentence and give participants several seconds to think about the answer
Template("item3.csv",
    row => newTrial( "3.2 posterior" ,
        newTimer("break", 1000)
            .start()
            .wait()
        ,
        newText("sentence", row.sentence)
            .bold()
            .css("font-size", "2em")
            .center()
            .print()
        ,
        newTimer("wait", 15000)
            .start()
        ,
        newText("question", "</p>" + row.question)
            .bold()
            .css("font-size", "1.2em")
            .before(newText("</p> ?????????").css("font-size", "1.2em"))
            .color("red")
            .center()
            .print()
        ,
        newText("instruction", "</p> ?????????????????????????????? <b style='color:Blue;'> ?????????</b> ????????????????????????????????????????????????")
            .center()
            .print()
        ,
        newKey("space", " ")
            .callback( getTimer("wait").stop() )
            .log()
        ,
        getTimer("wait")
            .wait()
        ,
        //  getText("sentence"
        // ,
         getText("instruction")
            .remove()
        ,
        newText("</p> ??????<b style='color:Blue;'> ???????????? </b> ?????? ")
            .center()
            .print()
        ,
        newImage("W1", row.W1)
            .size(200,200)
            //.print()
        ,
        newImage("W2", row.W2)
            .size(200,200)
            //.before( getImage("W1") )
            //.print()
        ,
        newImage("W3", row.W3)
            .size(200,200)
            //.before( getImage("W2") )
            //.print()
        ,
        newCanvas( 'worlds', 700, 200)
            .add( 0, 50, getImage('W1') )
            .add( 250, 50, getImage('W2'))
            .add( 500, 50, getImage('W3'))
            .center()
            .print()
        ,
        newSelector("world")
            .add( getImage("W1") , getImage("W2"),getImage("W3") )
            .shuffle()
            .once()
            .log()
            .wait()
    )
    .log( "ID" , uniqueID )
    // .log("Email", getVar("Email"))
    .log("experiment", row.experiment)
    .log("senID", row.senID)
    .log("Group", row.Group)
    .log("item", row.item)
    .log("type", row.type)
    .log("condition",row.condition)
    .log("sentence", row.sentence)
    .log("w1",row.W1)
    .log("w2",row.W2)
    .log("w3",row.W3)
);

// debriefing form
newTrial("debrief",
    newHtml("debriefing_form", "debrief.html")
        .cssContainer({"width":"720px"})
        .log()
        .print()
    ,
    newButton("continue", "??????????????????")
        .center()
        .print()
        .wait(
            getHtml("debriefing_form").test.complete()
                .failure( getHtml("debriefing_form").warn() )
        )
).log( "ID" , uniqueID )

// payment_form
newTrial("payment_form",
    newHtml("payment_form", "alipay2.html")
        .cssContainer({"width":"720px"})
        .checkboxWarning("?????????????????????")
        .inputWarning("????????????????????????")
        .log()
        .print()
    ,
    newButton("continue", "????????????")
        .print()
        .center()
        .wait(
            getHtml("payment_form").test.complete(true)
                .failure( getHtml("payment_form").warn() )
        )
).log( "ID" , uniqueID )

// Send results
SendResults("send")

// Completion screen
newTrial("completion_screen",
    newText("thanks", "?????????????????????" + "??????ID??????"+ uniqueID )
        .bold()
        .color('red')
        .center()
        .print()
    ,
    newText("exit", "??????????????????15??????????????????????????????????????????????????????????????????????????????????????????zhaofylisa@gmail.com????????????????????????ID????????????????????? :) ")
        .center()
        .print()
    ,
    newText(" ??????????????????????????????...")
        .center()
        .print()
    ,
    newButton("void", "")
        .wait()
)
