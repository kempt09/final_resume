"use strict";
//============================Bio==============================//
var bio = {
    "name" : "Christopher Kempton",
    "role" : " Web Developer",
    "contacts" : {
        "email": "kempt09@gmail.com ",
        "github": "kempt09 ",
        "linkedin": "not shown ",
        "facebook": "not shown ",
        "location": "San Diego"
    },
    "picture" : "images/me.jpg",
    "welcomeMessage" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
    "skills" : ["HTML5","CSS3","JavaScript","jQuery"]
}

//============================Name/Role==============================//

bio.info = (function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#nav").prepend(formattedRole).prepend(formattedName);

})();


//============================Contacts==============================//

bio.contact = (function () {
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
    var contactInfo = formattedEmail + formattedGit + formattedLinkedin + formattedFacebook;
    $("#footerContacts").append(contactInfo);
})();


//============================Picture==============================//


bio.biopic = (function() {
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedPicture).append(formattedMessage)
})();

//============================Skills==============================//


bio.attributes = (function() {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
})();

//============================Work==============================//

var work = {
    "jobs": [
        {
            "employer": "US Navy",
            "title": "Office Manager",
            "location": "San Diego, CA",
            "dates": "2014-present",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "US Navy",
            "title": "Work Center Supervisor",
            "location": "San Diego, CA",
            "dates": "2012-2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "US Navy",
            "title": "Automotive Parts Specialist",
            "location": "Imperial Beach, CA",
            "dates": "2011-2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "US Navy",
            "title": "Automotive Mechanic",
            "location": "Imperial Beach, CA",
            "dates": "2010-2011",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
}

work.careers =  (function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedJob = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedJob).append(formattedDates + formattedLocation).append(formattedDescription);
    }
})();




//============================Projects==============================//



var projects = {
    "project": [
        {
            "title" : "Project Title",
            "dates" : "September 2015",
            "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine",
            "image" : "http://placehold.it/300x300"
        },
        {
            "title" : "Project Title",
            "dates" : "September 2015",
            "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine",
            "image" : "http://placehold.it/300x300"
        },
        {
            "title" : "Project Title",
            "dates" : "September 2015",
            "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine",
            "image" : "http://placehold.it/300x300"
        },
        {
            "title" : "Project Title",
            "dates" : "September 2015",
            "description" : "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine",
            "image" : "http://placehold.it/300x300"
        }
    ]
}

projects.examples = (function() {
    for (var item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].image);
        $(".project-entry:last").append(formattedImage).append(formattedTitle).append(formattedDates).append(formattedDescription);
    }
})();


//============================Education==============================//



var education = {
    "schools" : [

        {
            "school": "National University",
            "degree": "Bachelors",
            "major" : "Computer Science",
            "attended": "2013 - present",
            "location": "La Jolla, CA"
        },
        {
            "school": "<h4 class='school'> Udacity",
            "degree": "NanoDegree </h4>",
            "major" : "Front-End Development",
            "attended": "2015 - present",
            "location": "San Diego, CA"
        }
    ]
}

education.location = (function() {
    for ( var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].school);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var formattedAttended = HTMLschoolDates.replace("%data%", education.schools[school].attended);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var myEducation = formattedName + formattedDegree + formattedAttended + formattedLocation + formattedMajor;
        $(".education-entry:last").append(myEducation);
    }
})();


//============================Places lived/worked==============================//

var places = {
    "locations" : [
        {
            "location": "columbus, ohio"
        },
        {
            "location": "kuwait"
        },
        {
            "location": "spain"
        }
    ]
}


//============================International==============================//

//$("#main").append(internationalizeButton);
//function inName(name) {
//    name = "Christopher KEMPTON";
//    return name;
//}


//============================Google Map==============================//

map.places = (function() {
    $("#mapDiv").append(googleMap);
    initializeMap();
})();


