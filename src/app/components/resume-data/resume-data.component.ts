import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.scss']
})
export class ResumeDataComponent implements OnInit {
  resumeData;
  constructor() {
    this.resumeData = {
      "imagebaseurl": "",
      "name": "Jesse Berman",
      "role": "Full Stack Web Developer",
      "linkedinId": "jesse-berman-b0965715b",
      "skypeid": "Your skypeid",
      "roleDescription": "I have always been intrigued by DIY or building projects that enabled me to express my creativity. I fell in love with Full Stack development because, it allows me to build programs from start to finish, innovate projects, and be creative.",
      "socialLinks": [
        {
          "name": "linkedin",
          "url": "https://www.linkedin.com/in/jesse-berman-b0965715b",
          "className": "fa fa-linkedin"
        },
        {
          "name": "github",
          "url": "https://github.com/Jberma23",
          "className": "fa fa-github"
        },
        {
          "name": "blog",
          "url": "https://medium.com/@jesse.ben.berman",
          "className": "fa fa-pencil"
        }
      ],
      "aboutme": "I am a Full stack web developer with a passion for entrepreneurship and innovation. With experience in Ruby on Rails, Oracle, PHP, Angular, JavaScript, and React and a background in economics. While I have always had a love for projects that allowed me to be creative I found my love for coding through my dream to one day be an entrepreneur. I bring strong skills in team-building and project management that help companies scale and grow.",
      "address": "Washington, DC",
      "website": "https://github.com/Jberma23",
      "Email": "jesse.ben.berman@gmail.com",
      "education": [
        {
          "UniversityName": "Flatiron School",
          "specialization": "Software Engineering",
          "MonthOfPassing": "October",
          "YearOfPassing": "2019"
        },
        {
          "UniversityName": "The University of Maryland",
          "specialization": "Economics",
          "MonthOfPassing": "May",
          "YearOfPassing": "2019",
          "Achievements": "Dean’s List Spring 2019, Study Abroad Internship in Guatemala, Summer 2018"
        },
        {
          "UniversityName": "Montgomery College",
          "specialization": "Business, General Studies",
          "MonthOfPassing": "May",
          "YearOfPassing": "2016",
          "Achievements": "Dean’s List: Fall 2015 & Fall 2016"
        }
      ],
      "work": [
        {
          "CompanyName": "IMG-Crown",
          "specialization": "Web Applications Developer",
          "MonthOfBeginning": "January",
          "YearOfBeginning": "2020",
          "MonthOfLeaving": "Current",
          "YearOfLeaving": "",
          "Achievements": ["Loading, processing, and publishing large datasets and managing server sites and databases", "Created and currently maintaining an Angular application to manage data processing, procedures, and trouble shooting with a easy to use, user-friendly web-application", "Updating and maintaining an Oracle database to be efficient as well as adding new functionality and datasets when necessary", "Working within a team using Scrum Framework which included daily meetings, working on project together, and communicating with the team and our clients often"]
        },
        {
          "CompanyName": "Social Entrepreneur Corp",
          "specialization": "Consulting Intern",
          "MonthOfBeginning": "June",
          "YearOfBeginning": "2018",
          "MonthOfLeaving": "Aug",
          "YearOfLeaving": "2018",
          "Achievements": ["Volunteered as a consultant to provide sustainable economic relief in poverty-stricken areas", "Updated and created new social media pages for marketing efforts", "Successfully created a grassroots fundraising campaign resulting in revenue of $500+ for non-profit organizations."]
        },
        {
          "CompanyName": "Dulles Cosmetic Surgery and Skin Care",
          "specialization": "Business & Marketing Intern",
          "MonthOfBeginning": "July",
          "YearOfBeginning": "2017",
          "MonthOfLeaving": "May",
          "YearOfLeaving": "2018",
          "Achievements": ["Utilized MDWare software to analyze and identify clients for marketing and client acquisition use", "Built and designed website and social media pages for new laser school initiatives", "Participated in customer service and client relations projects"]
        }
      ],
      "skillsDescription": "",
      "skills": [
        {
          "skillname": "Ruby"
        },
        {
          "skillname": "Ruby on Rails"
        },
        {
          "skillname": "React"
        },
        {
          "skillname": "Redux"
        },
        {
          "skillname": "Angular"
        },
        {
          "skillname": "JavaScript"
        },
        {
          "skillname": "PHP"
        },
        {
          "skillname": "JQuery"
        },
        {
          "skillname": "Heroku"
        },
        {
          "skillname": "AWS"
        },
        {
          "skillname": "HTML5"
        },
        {
          "skillname": "CSS"
        },
        {
          "skillname": "Material UI"
        },
        {
          "skillname": "SQL"
        },
        {
          "skillname": "Bootstrap"
        },
        {
          "skillname": "Semantic UI"
        },
        {
          "skillname": "JSON"
        },
        {
          "skillname": "APIs"
        },
        {
          "skillname": "Oracle"
        },
        {
          "skillname": "AJAX"
        },
        {
          "skillname": "Github"
        }
      ],
      "portfolio": [
        {
          "name": "Takeout TruckStop",
          "description": "Web Application",
          "imgurl": "images/portfolio/phone.jpg",
          "projectLink": "https://takeouttruckstop.herokuapp.com"
        },
        {
          "name": "Now You Know",
          "description": "Web Application",
          "imgurl": "images/portfolio/project.jpg",
          "projectLink": "https://github.com/Jberma23/NYk_FrontEnd"
        },
        {
          "name": "MPT3",
          "description": "Web Application",
          "imgurl": "images/portfolio/project2.png",
          "projectLink": "https://github.com/Jberma23/MPT3_frontend"
        },
        {
          "name": "My Pet Routine",
          "description": "Web Application",
          "imgurl": "images/portfolio/project3.jpg",
          "projectLink": "https://github.com/Jberma23/MyPetsRoutine"
        }
      ],
      "testimonials": [
        {
          "description": "Jesse is consistently a helping hand and is hungry for knowledge",
          "name": "Noa Havivi, Program Director"
        },
        {
          "description": "Jesse is a wonderful asset to any team. He is a hard-worker who is passionate and reliable. He takes the initiative to help out whenever and wherever need. I would happily rehire him when the opportunity presented itself",
          "name": "Leah Schwartz, Previous Employer"
        }
      ]
    }
  }

  ngOnInit(): void {


  }

}
