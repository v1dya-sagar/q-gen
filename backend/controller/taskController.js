const fs = require('fs');
const pdf = require('pdf-parse');
const { questionbank } = require('../dbase/dcon.js');

var charArr = ["0","0","0","0","0","0"]

function addElement(character){
    charArr.push(character);
    charArr.shift();
}

async function dataSend(){

}

const uploadFile = async (req,res) =>{
    const chapter = req.file.originalname;
    await questionbank.query('CREATE TABLE IF NOT EXISTS `qgendb`.`qapi_qbcontent` (`qid` INT NOT NULL ,`part` VARCHAR(2) NOT NULL,`question` VARCHAR(50) NOT NULL, `option1` VARCHAR(10) NOT NULL ,`option2` VARCHAR(10) NOT NULL ,`option3` VARCHAR(10) NOT NULL ,`option4` VARCHAR(10) NOT NULL ,`difficulty` VARCHAR(5) NOT NULL ,`subject` VARCHAR(30) NOT NULL ,`chapter` VARCHAR(30) NOT NULL ,`mark` VARCHAR(3) NOT NULL ,  PRIMARY KEY (`qid`));',(res,err)=>{
        if(err){
            console.log(err)
        }
    });
    var part = "";
    var parta = "";
    var j = 1;
    let dataBuffer = fs.readFileSync(req.file.path);
    console.log("Good")
    pdf(dataBuffer).then(function(data){
        console.log(data)
        while(j < 30){
            var Data = { difficulty:"1", mark:"1"
            }
            Data.chapter = chapter;
        for(var i=0; i<=data.text.length; i++){
            
            addElement(data.text[i]);
            // console.log(charArr.join(""))
            if((charArr.join("")) == "PART-A"){
                part = "A";
            } else if((charArr.join("")) == "PART-B"){
                part = "B";
            }
            else if((charArr.join("")) == "PART-C"){
                part = "C"
            }else{}

            if(j != 1){
               
            }

            if( part === "A"){
                if( data.text[i-3] == j){
                 parta = ""
                }
                if(data.text[i-1] != "?"){
                    parta = parta + data.text[i];
                    // console.log(data.text[i]);
                    // console.log(parta)
                    // console.log(i)
                }
                else{
                    Data.question = parta;
                    while(data.text[i] != j){
                        var flag;
                        var option1,option2,option3,option4;
                    for(i;i<=data.text.length; i++){
                        if((data.text[i-2]+data.text[i-1])  == "*i" ){
                            
                            flag = "i"

                        }
                        // Data.option1 = option1;
                        // console.log("next1")
                        // console.log(option1)
                        // if((data.text[i-3]+data.text[i-2]+data.text[i-1])  == "ii." ){
                            
                        //     flag = "ii"


                        // }
                        // Data.option2 = option2;
                        // console.log("next2")
                        // console.log(option2)
                        // if((data.text[i-3]+data.text[i-2]+data.text[i-1]) == "iii"){
                        //     flag = "iii"

                        // }
                        // Data.option3 = option3;
                        // console.log("next3");
                        // console.log(option3)
                        // if((data.text[i-3]+data.text[i-2]+data.text[i-1])  == "iv."){
                        //     console.log("next3")
                        //     flag = "iv"

                        // }
                        // Data.option4 = option4;
                        // console.log("next4")
                        // console.log(option4)

                        if(flag === "i"){option1 = option1 + data.text[i]; if(data.text[i] == "."){ Data.option1 = option1;console.log(option1); flag = 'ii'; continue}}
                        if(flag === "ii"){option2 = option2 + data.text[i]; if(data.text[i] == "."){ Data.option2 = option2;console.log(option2);flag = 'iii'; continue}}
                        if(flag === "iii"){option3 = option3 + data.text[i]; if(data.text[i] == "."){ Data.option3 = option3;console.log(option3);flag = 'iv'; continue}}
                        if(flag === "iv"){option4 = option4 + data.text[i];  
                            if(data.text[i] == "."){ 
                                Data.option4 = option4;console.log(option4);
                                flag=""; 
                                j++;
                                console.log(part)
                                console.log(Data)
                                questionbank.query('CREATE TABLE IF NOT EXISTS `qgendb`.`qbcontent` (`qid` INT NOT NULL ,`part` VARCHAR(2) NOT NULL,`question` VARCHAR(50) NOT NULL, `option1` VARCHAR(10) NOT NULL ,`option2` VARCHAR(10) NOT NULL ,`option3` VARCHAR(10) NOT NULL ,`option4` VARCHAR(10) NOT NULL ,`difficulty` VARCHAR(5) NOT NULL ,`subject` VARCHAR(30) NOT NULL ,`chapter` VARCHAR(30) NOT NULL ,`mark` VARCHAR(3) NOT NULL ,  PRIMARY KEY (`qid`));',(err,res)=>{
                                    if(err){
                                        console.log(err)
                                    }
                                    console.log(res);
                                }); 
                                console.log("hello"); 
                                continue}}
                    }
                    }

                }
                }
            }
        }

        
    })
    console.log(req.file)
    res.send(req.file)
};


module.exports = {
    uploadFile
}