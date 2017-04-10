function scoreCard(theName, theClass, theGender) {

	    this.names = theName;
	    this.userClass = theClass;
	    this.gender = theGender;
	    this.quizScores = [];
	    this.currentScore = 0;

	}
	scoreCard.prototype = {
	    constructor: scoreCard,
	    saveScore:function (addScore)  {
	        this.quizScores.push(addScore);
	    },
	    show:function ()  {
	        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
	        return this.names + " Quiz Scores: " + scores + "Gender === >" + this.gender;
	    },
	    changeclass:function (newClass)  {
	        this.userClass = newClass;
	        return "New class Saved: " + this.userClass;
	    }
	}