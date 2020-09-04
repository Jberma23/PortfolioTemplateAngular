import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Portfolio';
  resumeData = {
    "imagebaseurl": "",
    "name": "Your Name Here",
    "role": "Your Role",
    "linkedinId": "Your linkedin-id here",
    "skypeid": "Your skypeid",
    "roleDescription": "Your role description",
    "socialLinks": [
      {
        "name": "linkedin",
        "url": "Your Linkedin profile url",
        "className": "fa fa-linkedin"
      },
      {
        "name": "github",
        "url": "Linke to your github repo",
        "className": "fa fa-github"
      },
      {
        "name": "blog",
        "url": "Link to your blog",
        "className": "fa fa-pencil"
      },
      {
        "name": "email",
        "url": "Your Email"
      }
    ],
    "aboutme": "About me",
    "address": "Location",
    "website": "Your website",
    "Email": "Email",
    "education": [
      {
        "UniversityName": "School #1",
        "specialization": "Major",
        "MonthOfPassing": "Month",
        "YearOfPassing": "Year"
      },
      {
        "UniversityName": "School #2",
        "specialization": "Major",
        "MonthOfPassing": "Month",
        "YearOfPassing": "Year",
        "Achievements": "Achievements"
      },
      {
        "UniversityName": "School #3",
        "specialization": "Major",
        "MonthOfPassing": "Month",
        "YearOfPassing": "Year",
        "Achievements": "Achievements"
      }
    ],
    "work": [
      {
        "CompanyName": "Job #1",
        "specialization": "Title",
        "MonthOfBeginning": "Month Start",
        "YearOfBeginning": "Year Start",
        "MonthOfLeaving": "Month End",
        "YearOfLeaving": "Year end",
        "Achievements": ["Achievement #1", "Achievement #2", "Achievement #3", "Achievement #4"]
      },
      {
        "CompanyName": "Job #2",
        "specialization": "Title",
        "MonthOfBeginning": "Month Start",
        "YearOfBeginning": "Year Start",
        "MonthOfLeaving": "Month End",
        "YearOfLeaving": "Year end",
        "Achievements": ["Achievement #1", "Achievement #2", "Achievement #3", "Achievement #4"]
      },
      {
        "CompanyName": "Job #3",
        "specialization": "Title",
        "MonthOfBeginning": "Month Start",
        "YearOfBeginning": "Year Start",
        "MonthOfLeaving": "Month End",
        "YearOfLeaving": "Year end",
        "Achievements": ["Achievement #1", "Achievement #2", "Achievement #3", "Achievement #4"]
      }
    ],
    "skillsDescription": "",
    "skills": [
      {
        "skillname": "Skill1"
      },
      {
        "skillname": "Skill2"
      },
      {
        "skillname": "Skill3"
      },
      {
        "skillname": "Skill4"
      },
      {
        "skillname": "Skill5"
      },
      {
        "skillname": "Skill6"
      },
      {
        "skillname": "Skill7"
      },
      {
        "skillname": "Skill8"
      },
      {
        "skillname": "Skill9"
      },
      {
        "skillname": "Skill10"
      }
      // You can add more skills here and edit their progress bar starting line 327 of ../assets/css/layout.css. When you change the skill name here you must change the name of the class to the corresponding skill in layout.css for it to display correctly
    ],
    "portfolio": [
      {
        "name": "Project 1",
        "description": "Project 1 Description",
        "imgurl": "../assets/images/Template-images/Project1.jpg",
        "projectLink": "Project 1 Url"
      },
      {
        "name": "Project 2",
        "description": "Project 2 Description",
        "imgurl": "../assets/images/Template-images/Project2.jpg",
        "projectLink": "Project 2 Url"
      },
      {
        "name": "Project 3",
        "description": "Project 3 Description",
        "imgurl": "../assets/images/Template-images/Project3.png",
        "projectLink": "Project 3 Url"
      },
      {
        "name": "Project 4",
        "description": "Project 4 Description",
        "imgurl": "../assets/images/Template-images/Project4.jpg",
        "projectLink": "Project 4 Url"
      }
    ],
    "testimonials": [
      {
        "description": "Testimonial 1",
        "name": "Name of person giving testimonial 1, Relation/Position"
      },
      {
        "description": "Testimonial 2",
        "name": "Name of person giving testimonial 2, Relation/Position"
      }
    ]
  };

}
