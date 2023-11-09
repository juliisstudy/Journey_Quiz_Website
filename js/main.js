// color value
const darkPink = "#ff8383";
const lightPink = "#ffaeae";
const color = "color";
const bgColor = "background-color";
const warmYellow = "#f9c49d";

// Quiz section html elements 
const eachQuizNav = ".eachnavquiz";
const resultBTN = "#resultbtn";
const resultBtnNav = "#resultbtnav";

//effects
const off_Screen = "offscreen";
const selectionTabClass = ".selectiona";
const careFamily = "careFamily";
const careFamilyElm = "#careFamily";
const reference = "#refvf";
const careInfoClass = ".careinfoa";
const careHealth = "careHealth";
const careHealthElm = "#careHealth";
const careGroup = "caregroup";
const careGroupElm = "#caregroup";
const careWellness = "careWellness";
const careWellnessElm = "#careWellness";
const careTake = "careTake";
const careTakeElm = "#careTake";
const careselectionA = "#careselectiona";
const linktitle = ".linktitle";
const arrow_one = ".ar1";

const careSelectionContainerB = "#careselectionb";
const carehusband = "carehusband";
const carehusbandElm = "#carehusband";
const careInfoB = ".careinfob";
const careFriend = "carefriends";

const careFriendElm = "#carefriends";
const whyWomanSection = ".whywoman";
const biowhywoman = "biowhywoman";
const riskwhywoman = "riskwhywoman";
const bioWhyDiv = "#biowhy";
const riskWhyDiv = "#riskwhy";
const introWhyDiv = "#introwhy";

const mainNavDiv = "#mainnav";
const tabClass = ".tab";
const arrows = "#nextqa, #nextqb, #nextqc, #nextqd, #nextqe, #nextqf, #nextqg, #nextqh, #nextqi, #nextqn";
const nextArrows = "#nextqba, #nextqbb, #nextqbc, #nextqbd, #nextqbe, #nextqbf, #nextqbg, #nextqbh, #nextqbi, #nextqbn,#nextqbt, #nextqbtt";

let journey;

$(document).ready(function() {
    begin();
});

function begin() {
    journey = new Journey();
    journey.goscreen("welcome");
    $(mainNavDiv, journey.body).removeClass("offscreen");
    $(".sumtotal").addClass("open");
    setTimeout(function() {
        $(".sumtotal").removeClass("open")
    }, 1000);
    $("#preload-wrap").remove();
    journey.init();
    }

class Journey {
    constructor() {
        this.body = $("#mainbody");
    }
    init() {
        $(".sumtotal").hover(function() {
            $(".panel").addClass("offscreen");
            $(".sumtotal").addClass("open")
        }, function() {
            $(".sumtotal").removeClass("open")
        });

        //navigation icons
        journey.navHoverEffect("#navintro", "#navintroab");
        journey.navHoverEffect("#navcare", "#navcareab");
        journey.navHoverEffect("#navabout", "#navaboutab");
        journey.navHoverEffect("#navhome", "#navhomeab");
        journey.navHoverEffect("#navor", "#navorab");
        journey.navHoverEffect("#navquiz", "#navquizab");

       // $(mainNavDiv, this.body).on("click", tabClass, this.onNavClick);
        $(introWhyDiv, this.body).on("click", whyWomanSection, this.onWomanClick);
        $(careselectionA, this.body).on("click", selectionTabClass, this.oncareClick);
        $(careSelectionContainerB, this.body).on("click", ".select-b", this.oncarebClick);

        $(".ui-slider").css(bgColor, warmYellow);
        $(window).on("load", function() {
            $(".preload").addClass("offscreen");
            setTimeout(function() {
                journey.startScreen = begin();
            }, 1000)
        })
    };

    check(val, divId, image, questionId) {
        $(questionId).empty();
        let divElmAtribute = document.getElementById(divId).getAttribute("data-selection");
        $(questionId).text(divElmAtribute);
        switch (Number(val)) {
            case 0:
                $(image).removeClass("a b c d");
                $(image).addClass("a");
                break;
            case 1:
                $(image).removeClass("a b c d");
                $(image).addClass("b");
                break;
            case 2:
                $(image).removeClass("a b c d");
                $(image).addClass("c");
                break;
            case 3:
                $(image).removeClass("a b c d");
                $(image).addClass("d");
                break;
        }
    }
    isChecked(e) {
        let selection = document.getElementsByName("q" + e);
        if (selection.length < 1) {
            return true;
        }
        for (let n = 0; n < selection.length; n++) {
            if (selection[n].checked) {
                return true;
            }
        }
        return false;
    };
    validateForm() {
        let numberOfQue = document.getElementById("number_of_questions").value;
        for (let i = 1; i <= numberOfQue; i++) {
            if (!journey.isChecked(i)) {
                let fLabel = document.getElementsByName("q" + i).item(0).getAttribute("title");
                if (fLabel == null) fLabel = i;
                alert("Please answer question " + fLabel + ".");
                return false;
            }
        }
    };
    oncareClick(e) {
        let careTitilesArray = getQueryArray(careselectionA, linktitle);
        //let arrowsArray = getQueryArray(careselectionA, arrow_one);
        let tab = $(e.target).closest(selectionTabClass);
        restColorT(careTitilesArray);

        for(const title of careTitilesArray){
            title.addEventListener("click",function(){
                //restColorT(careTitilesArray);
                console.log("sdfaf");
                this.style.color = darkPink;
         });
        } 
      
        if (tab.hasClass(careFamily)) {
            $(reference).show();
            offScreen(careInfoClass);
            onScreen(careFamilyElm);
            changeToColor(careTitilesArray[0], color, darkPink);

        } else if (tab.hasClass(careHealth)) {
            $(reference).show();
            offScreen(careInfoClass);
            onScreen(careHealthElm);
          
        } else if (tab.hasClass(careGroup)) {
            $(reference).show();
            offScreen(careInfoClass);
            onScreen(careGroupElm);
           
        } else if (tab.hasClass(careWellness)) {
            $(reference).hide();
            offScreen(careInfoClass);
            onScreen(careWellnessElm);
        
        } else if (tab.hasClass(careTake)) {
            $(reference).show();
            offScreen(careInfoClass);
            onScreen(careTakeElm);
        }
    };
    oncarebClick(e) {

        let tab = $(e.target).closest(".select-b");
        let titlesArray = getQueryArray(careSelectionContainerB, linktitle);
        let arrowsArray = getQueryArray(careSelectionContainerB, arrow_one);

        if (tab.hasClass(carehusband)) {
            offScreen(careInfoB);
            offScreen(careFriendElm);
            onScreen(carehusbandElm);
            restColor(titlesArray, arrowsArray);
            changeToColor(titlesArray[0], color, darkPink);

        } else if (tab.hasClass(careFriend)) {
            offScreen(careInfoB);
            offScreen(carehusbandElm);
            onScreen(careFriendElm);
            restColor(titlesArray, arrowsArray);
            changeToColor(titlesArray[1], color, darkPink);
        }
    };
    onWomanClick(e) {
        let tab = $(e.target).closest(whyWomanSection);
        let titlesArray = getQueryArray(introWhyDiv, linktitle);
        let arrowsArray = getQueryArray(introWhyDiv, arrow_one);
        if (tab.hasClass(biowhywoman)) {
            offScreen(bioWhyDiv);
            onScreen(riskWhyDiv);
            restColor(titlesArray, arrowsArray);
            changeToColor(titlesArray[0], color, darkPink);
        } else if (tab.hasClass(riskwhywoman)) {
            offScreen(riskWhyDiv);
            onScreen(bioWhyDiv);
            restColor(titlesArray, arrowsArray);
            changeToColor(titlesArray[1], color, darkPink);
            changeToColor(arrowsArray[1], color, darkPink);
        }
    };
    goscreen(e) {
        let current = "current";
        const questionsPage = "quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten quizintro resultmaybe resultgood";
        const mainPages = "what why outcome careself carefriend caremethod caretreatment carebio";
        const allPages = "loading welcome about what why outcome quiz orgnation carepage sidenav intro care careself resultmaybe resultgood result maybe carefriend caretreatment carebio current quizone quiztwo quizthree quizfour quizfive quizsix quizseven quizeight quiznine quizten caremethod";
        const whatSectPages = "what why outcome";
        const careSectPages = "careself carefriend caretreatment caremethod carebio";
        const sectionPages = "welcome about carepage quizpage orgnation intropage";
        const navList = "#intronav, #carenav, #quiznav";
        const whatNavList = "#whatnav,#whynav,#outcomenav";
        const careNavList = "#fnav,#unav,#snav";
        const returnDiv = "#returna,#returnq,#returnc";

        
        journey.body.removeClass(allPages).addClass(e).find(".screen").removeClass(current).filter('[data-screen="' + e + '"]').addClass("current");

        // change nav color when click
        const eachnavs = document.getElementsByClassName("eachnav");
        $(eachnavs).css(bgColor, lightPink);

        for(const nav of eachnavs){
            nav.addEventListener("click",function(){
                $(nav).css(bgColor, lightPink);
                this.style.backgroundColor = darkPink;
         });
        } 

        if (sectionPages.indexOf(e) > -1) {
            $(navList).hide();
            $("#intro-wrap, #care-wrap, #quiz-wrap").addClass(off_Screen);
            $(navList).removeClass("careleft").addClass("disabled");
            $(returnDiv).hide()
        }
        if (whatSectPages.indexOf(e) > -1) {
            $("#intronav").fadeIn(300);
            $("#care-wrap, #quiz-wrap", "#carenav, #quiznav").addClass(off_Screen);
            $("#intro-wrap").removeClass(off_Screen);
            $("#intronav").removeClass(off_Screen).addClass("careleft");
            $("#returnq, #returnc, #returna").hide();
            $("#returna").show()
        }
        if ("what".indexOf(e) > -1) {
            $(whatNavList).addClass("eachnav").css(bgColor, lightPink);
            $("#whatnav").css(bgColor, darkPink);
        }
        if ("why".indexOf(e) > -1) {
            $(whatNavList).addClass("eachnav").css(bgColor, lightPink);
        }
        if ("outcome".indexOf(e) > -1) {
            $(whatNavList).addClass("eachnav").css(bgColor, lightPink);
        }
        if ("careself".indexOf(e) > -1) {
            $(careNavList).css(bgColor, lightPink);
            $("#snav").css(bgColor, darkPink);
            $(whatNavList).removeClass("eachnav");
        }
        if ("carefriend".indexOf(e) > -1) {
            $(careNavList).css(bgColor, lightPink);
            $(whatNavList).removeClass("eachnav");
        }
        if ("caremethod".indexOf(e) > -1) {
            $(careNavList).css(bgColor, lightPink);
            $(whatNavList).removeClass("eachnav");
        }
        if (questionsPage.indexOf(e) > -1) {
            $(whatNavList).removeClass("eachnav");
            $(careNavList).removeClass("eachnavcare");
            $(returnDiv).hide();
            $("#returnq").show()
        }
        if (sectionPages.indexOf(e) > -1) {
            $(whatNavList).removeClass("eachnav");
            $(careNavList).removeClass("eachnavcare");
            $(returnDiv).hide();
            $("#sum").addClass(off_Screen);
        }
        if ("welcome".indexOf(e) > -1) {
            clearNav();
            $("#navhomea").removeClass(off_Screen);
            $("#navhome").css(bgColor, darkPink);
        }
        if ("intropage".indexOf(e) > -1) {
            clearNav();
            $("#navintroa").removeClass(off_Screen);
            $("#navintro").css(bgColor, darkPink);
            $("#sum").addClass(off_Screen);
        }
        if ("quizpage".indexOf(e) > -1) {
            const startBtn = document.getElementById('nextqa');
            startBtn.addEventListener("click",function(){
                        $(startBtn).hide();
            });
            clearNav();
            $("#navquiza").removeClass(off_Screen);
            $("#navquiz").css(bgColor, darkPink);
            $(startBtn).show();
        }
        if ("orgnation".indexOf(e) > -1) {
            clearNav();
            $("#navora").removeClass(off_Screen);
            $("#navor").css(bgColor, darkPink);
        }
        if ("carepage".indexOf(e) > -1) {
            clearNav();
            $("#navcarea").removeClass(off_Screen);
            $("#navcare").css(bgColor, darkPink);
        }
        if ("about".indexOf(e) > -1) {
            clearNav();
            $("#navabouta").removeClass(off_Screen);
            $("#navabout").css(bgColor, darkPink);
        }
        if (careSectPages.indexOf(e) > -1) {
            $("#carenav").fadeIn(300);
            $("#intro-wrap, #quiz-wrap").addClass(off_Screen);
            $("#intronav, #quiznav").addClass(off_Screen).removeClass("careleft");
            $("#care-wrap").removeClass(off_Screen);
            $("#carenav").removeClass(off_Screen).addClass("careleft");
            $(returnDiv).hide();
            $("#returnc").show();
        }
        if (questionsPage.indexOf(e) > -1) {
            $("#quiznav").fadeIn(300);
            $("#intro-wrap, #care-wrap").addClass(off_Screen);
            $("#intronav, #carenav").addClass(off_Screen).removeClass("careleft");
            $("#quiz-wrap").removeClass(off_Screen);
            $("#quiznav").removeClass(off_Screen).addClass("careleft topz")
        }
        
        if ("quizintro".indexOf(e) > -1) {
            journey.changQuizNav("#quizintronav");
            clearSum();
            $("#nextqa").show();
        }
        if ("quizone".indexOf(e) > -1) {
            journey.changQuizNav("#quizonenav");
            clearSum();
            $("#nextqb,#nextqba").show();
        }
        if ("quiztwo".indexOf(e) > -1) {
            journey.changQuizNav("#quiztwonav");
            clearSum();
            $("#nextqc,#nextqbb").show();
        }
        if ("quizthree".indexOf(e) > -1) {
            journey.changQuizNav("#quizthreenav");
            clearSum();
            $("#nextqd,#nextqbc").show();
        }
        if ("quizfour".indexOf(e) > -1) {
            journey.changQuizNav("#quizfournav");
            clearSum();
            $("#nextqe", "#nextqbd").show();
        }
        if ("quizfive".indexOf(e) > -1) {
            journey.changQuizNav("#quizfivenav");
            clearSum();
            $("#nextqf,#nextqbe").show();
        }
        if ("quizsix".indexOf(e) > -1) {
            journey.changQuizNav("#quizsixnav");
            clearSum();
            $("#nextqg,#nextqbf").show();
        }
        if ("quizseven".indexOf(e) > -1) {
            journey.changQuizNav("#quizsevennav");
            clearSum();
            $("#nextqh,#nextqbg").show();
        }
        if ("quizeight".indexOf(e) > -1) {
            journey.changQuizNav("#quizeightnav");
            clearSum();
            $("#nextqi,#nextqbh").show();
        }
        if ("quiznine".indexOf(e) > -1) {
            journey.changQuizNav("#quizninenav");
            clearSum();
            $("#nextqbi,#nextqn").show();
        }
        if ("quizten".indexOf(e) > -1) {
            journey.changQuizNav("#quiztennav");
            $("#sum").removeClass(off_Screen);
            $(arrows, nextArrows).hide();
            $("#nextqbn").show();
        }
        if ("resultmaybe".indexOf(e) > -1) {
            clearSum();
            $("#nextqbt").show();
        }
        if ("resultgood".indexOf(e) > -1) {
            clearSum();
            $("#nextqbtt").show()
        }
    };
    //Navigation effect
    navHoverEffect(icon, text) {
        $(icon).hover(function() {
            onScreen(text);
        }, function() {
            offScreen(text)
        })
    };
    sum() {
        let sum = 0;
        this.validateForm();
        const quizDiv = document.querySelector("#quiz-wrap");
        let quizChecked = quizDiv.querySelectorAll('input[type="radio"]:checked');
        let values = Array.from(quizChecked, radio => Number(radio.value))
        sum = values.reduce((accumulator, currentValue) => accumulator + currentValue);
        $("#result").empty();
        $(".resultss").empty();
        $(".resultss").text(sum);
        if (sum >= 10) {
            this.goscreen("resultmaybe")
        } else if (sum < 10) {
            this.goscreen("resultgood")
        }
    };
    changQuizNav(quizNav) {
        changeToColor(eachQuizNav, bgColor, lightPink);
        changeToColor(quizNav, bgColor, darkPink);
        $(resultBTN, resultBtnNav).addClass(off_Screen);
    }
};

function offScreen(element) {
    $(element).addClass(off_Screen);
}

function onScreen(element) {
    $(element).removeClass(off_Screen);
}

function changeToColor(element, attrt, color) {
    $(element).css(attrt, color);
}

function restColor(titles, arrows) {
    titles.map((title) => changeToColor(title, color, lightPink));
    arrows.map((arrow) => changeToColor(arrow, bgColor, lightPink))
}

function restColorT(titles) {
    titles.map((title) => changeToColor(title, color, lightPink));
}

function getQueryArray(elementDiv, elementClass) {
    const divElm = document.querySelector(elementDiv);
    const arrayElm = divElm.querySelectorAll(elementClass);
    return Array.from(arrayElm);
}

function clearSum() {
    $("#sum").addClass(off_Screen);
    $(arrows, nextArrows).hide();
}

function clearNav(){
    $(".n").css(bgColor, lightPink);
    $(".navp").addClass(off_Screen);
}

