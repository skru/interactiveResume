var data = [
  {name: "JS",    value:  30},
  {name: "Python",    value:  80},
  {name: "HTML",     value: 70},
  {name: "CSS",   value: 60},
  {name: "Django", value: 70}
];

bio = {"name":"Joseph Mohan",
		 "role":"web dev",
		 "contacts":{
		 				 "email":"skruproxy@gmail.com",
		 				 "mobile":"+798989898",
		 				 "github":"https://github.com/skru",
		 				 "twitter":"https://twitter.com/",
		 				 "location":"Maidstone UK",
		 },
		 "welcome_message":"hi there....",
		 "skills": data,
		 "bioPic":"images/portpic.png",
  display : function(){
  var formattedname = HTMLheaderName.replace("%data%",bio.name);
  var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedrole);
  $("#header").prepend(formattedname);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);
  var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcome_message);
  $("#header").append(formattedWelcomeMessage);
  
  /*if (bio) {
  	$("#header").append(HTMLskillsStart);
  	for (var i = 0;i<bio.skills.length;i++) {
  		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i].name);
  		$("#skills").append(formattedSkill);
  	}
  }*/
  $("#header").append(HTMLskillsStart);
  var width = 360,
      barHeight = 20;
      
  var x = d3.scale.linear()
      .range([0, width])
      
  var chart = d3.select(".chart")
      .attr("width", width)
      x.domain([0, d3.max(data, function(d) { return d.value; })]);
      chart.attr("height", barHeight * data.length);
      
  var bar = chart.selectAll("g")
      .data(data)
      .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
      
  bar.append("rect")
      .attr("width", function(d) { return x(d.value); })
      .attr("height", barHeight - 1);
      
  bar.append("text")
      .attr("x", function(d) { return x(d.value) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });
  }
};

work = {
  "jobs": [
  {
    "title":"chef",
    "employer":"The landlord",
    "dates":"2yrs",
    "location":"Berlin",
    "description":"funt"
		 
  },
  {
    "title":"cheif",
    "employer":"The slandlord",
    "dates":"28yrs",
    "location":"Paris",
    "description":"funty"
  }],
  display : function (){
  $("#workExperience").append(HTMLworkStart);
  for (var job in work["jobs"]) {
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work["jobs"][job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work["jobs"][job].title);
    $(".work-entry").append(formattedWorkEmployer+formattedWorkTitle);
    var formattedWorkYears = HTMLworkDates.replace("%data%",work["jobs"][job].dates);
    $(".work-entry").append(formattedWorkYears);
    var formattedWorkLocation = HTMLworkDates.replace("%data%",work["jobs"][job].location);
    $(".work-entry").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work["jobs"][job].description);
    $(".work-entry").append(formattedWorkDescription);
    }
  }
};
  
projects = {
	"projects": [
	{
		"title":"newsshuffle.com",
		"dates":"Jan 2014/on-going",
		"description":"A news site updated hourly",
		"image":["images/joe.jpg"]
	},
	{
		"title":"mock-up portfolio",
		"dates":"Oct2014/on-going",
		"description":"first nanodegree project mock-up",
		"image":["images/joe.jpg","images/joe.jpg"]
	},
	{
		"title":"frogger",
		"dates":"Oct2014/on-going",
		"description":"coming up!",
		"image":["images/joe.jpg","images/joe.jpg","images/joe.jpg"]
	}
	],
	display : function(){
  $("#projects").append(HTMLprojectStart);
  for ( var project in projects["projects"]) {
  	var formatWorkTitle = HTMLprojectTitle.replace("%data%",projects["projects"][project].title);
  	$(".project-entry").append(formatWorkTitle);
  	var formatWorkDates = HTMLprojectDates.replace("%data%",projects["projects"][project].dates);
  	$(".project-entry").append(formatWorkDates);
  	var formatWorkDescription = HTMLprojectDescription.replace("%data%",projects["projects"][project].description);
  	$(".project-entry").append(formatWorkDescription);
  	for ( var img in projects.projects[project].image) {
  	  var formatWorkImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[img]);
  	  $(".project-entry").append(formatWorkImage);
  	  }
    }
  }
};

education = {
	"schools": [
	{
		"name":"Udacity",
		"location":"New York",
		"degree":"NanoDegree",
		"majors":["CS","JS","Git"],
		"dates": "2013",
		"url":"http://www.udacity.com"
	},
	{
		"name":"Codecademy",
		"location":"Moscow",
		"degree":"yes",
		"majors":["hell yeh"],
		"dates": "2013",
		"url":"http://wwwww"
	}
	]
,
	"onlineCourses": [
	{
		"title": "Udacity cs101",
		"about": "back-end development",
		"URL":"http://www.google.com",
		"dates":"2013-1014"

	},
	{
		"title": "Udacity cs201",
		"about": "Intro to ...",
		"URL":"http://www.google.com",
		"dates":"2013-1014"

	}
	],
	display : function(){
  $("#education").append(HTMLschoolStart);
  for (var school in education["schools"]) {
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedSchoolNameUrl = formattedSchoolName.replace("#",education.schools[school].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry").append(formattedSchoolNameUrl+formattedSchoolDegree);
    var formattedSchoolLocation = HTMLschoolName.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry").append(formattedSchoolDates);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    $(".education-entry").append(formattedSchoolMajor);
  }
  
  $(".education-entry").append(HTMLonlineClasses);
  for (var course in education["onlineCourses"]) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    var formattedOnlineTitleUrl = formattedOnlineTitle.replace("#",education.onlineCourses[course].URL);
    $(".education-entry").append(formattedOnlineTitleUrl);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].about);
    $(".education-entry").append(formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry").append(formattedOnlineDates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].URL);
    $(".education-entry").append(formattedOnlineUrl);
}
  
}

};
  
function inName(){
  var name = bio.name.trim().split(" ");
  var first = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  var last = name[1].toUpperCase();
  return first+" "+last;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

bio.display()
work.display()
projects.display();
education.display();

