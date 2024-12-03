import dashboardImg from "./assets/dashboardimg.svg";
import employeesImg from "./assets/employeesimg.svg";
import taskboardImg from './assets/taskboardimg.svg';
import leaveboardImg from "./assets/leaveboardimg.svg";
import payrollImg from "./assets/payrollimg.svg";
import settingsImg from "./assets/settingsimg.svg";
import totalEmployeesImg from "./assets/allEmployees.svg";
import totalTasksImg from "./assets/allTasks.svg";
import totalLeaves from "./assets/allLeaves.svg";
import photo1 from "./assets/taskTeamPhoto.svg";
import photo2 from "./assets/taskTeamPhotoMale.svg";
import photo3 from "./assets/taskTeamPhotoLady.svg";
import photo4 from "./assets/taskTeamPhotoLadyAfro.svg"
import inProgressLogo from "./assets/in-progress-logo.svg";
import completedLogo from "./assets/completed-logo.svg";
import plannedLogo from "./assets/planned-logo.svg";
import allProjectsLogo from "./assets/all-projects-logo.svg";
import plannedTasks from "./assets/planned-tasks.svg";
import inProgress from "./assets/in-progress.svg";
import remainingLeaves from "./assets/remaining-leaves.svg";
import sickLeave from "./assets/sickleave.jpg";
import casualLeave from "./assets/casual leave.png";
import annualLeave from "./assets/annual leave.jpeg";
import generalLeaveLogo from "./assets/general leave logo.webp"


export const sidebarLinks = [
  {
    id: 1,
    Icon: dashboardImg,
    name: "Dashboard",
    path: "",
  },
  {
    id: 2,
    Icon: employeesImg,
    name: "Employees",
    path: "employees",
  },
  {
    id: 6,
    Icon: settingsImg,
    name: "Settings",
    path: "settings",
  },
];


export const leaveLenght = [
  {
    id:1,
    title:"HR/Admin",
    count:3,
    img:generalLeaveLogo
  },
  {
    id:2,
    title:"Product",
    count:5,
    img:generalLeaveLogo
  },
  {
    id:3,
    title:"Marketing",
    count:4,
    img:generalLeaveLogo
  },
  {
    id:4,
    title:"Operations",
    count:6,
    img:generalLeaveLogo
    },
]
export const taskLenght = [
  {
    id:1,
    title:"In Progress",
    count:23,
    img:inProgressLogo
  },
  {
    id:2,
    title:"Completed",
    count:20,
    img:completedLogo
  },
  {
    id:3,
    title:"Planned",
    count:15,
    img:plannedLogo
  },
  {
    id:4,
    title:"All Projects",
    count:15,
    img:allProjectsLogo
  },
]
export const eventLenght = [
  {
    id:1,
    title:"Total Employees",
    count:24,
    img:totalEmployeesImg
  },
  {
    id:2,
    title:"Total Tasks",
    count:107,
    img:totalTasksImg
  },
  {
    id:3,
    title:"Current Leaves",
    count:15,
    img:totalLeaves
  },
]
export const taskBoardTableData = [
  {
    id:1,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3,
      teamPhoto4:photo4
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Planned"
  },
  {
    id:2,
    title:"Productize Beta Testing",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Completed"
  },
  {
    id:3,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2   
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"In progress"
  },
  {
    id:4,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3,
      teamPhoto4:photo4   
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Planned"
  },
  {
    id:5,
    title:"Productize Beta Testing",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Completed"
  },
  {
    id:6,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2   
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"In progress"
  },
  {
    id:7,
    title:"Website Project Update On Slack",
    teamPhoto:{
      teamPhoto1:photo1,
      teamPhoto2:photo2,
      teamPhoto3:photo3,
      teamPhoto4:photo4
    },
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    action:"Planned"
  }
]


export const allLeaveList = [
  {
    id:1,
    name:"Raheem Sterling",
    img:photo1,
    leaveType:"Casual Leave",
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    days:"6 Days",
    status:"Pending"
  },
  {
    id:2,
    name:"Eggys Eggys",
    img:photo2,
    leaveType:"Sick Leave",
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    days:"6 Days",
    status:"Pending"
  },
  {
    id:3,
    name:"Chukwudi Tobiloba",
    img:photo3,
    leaveType:"Annual Leave",
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    days:"6 Days",
    status:"Declined"
  },
  {
    id:4,
    name:"Olawole Anita",
    img:photo4,
    leaveType:"Annual Leave",
    duration:{
      start:"03 Mar 2023",
      end:"10 Mar 2023"
    },
    days:"6 Days",
    status:"Approved"
  },
]
export const allEmployeesList = [
  {
    id:1,
    name:"Raheem Sterling",
    img:photo1,
    email:"raheem@tmt.com",
    dept:"Product",
    supervisor:"Eric Ten-Hagg",
    status:"Remote"
  },
  {
    id:2,
    name:"Eggys Eggys",
    img:photo2,
    email:"eggys@tmt.com",
    dept:"Product",
    supervisor:"Joshua Zirkzee",
    status:"On-Site"
  },
  {
    id:3,
    name:"Chukwudi Tobiloba",
    img:photo3,
    email:"chtobiloba@tmt.com",
    dept:"Marketing",
    supervisor:"Bukayo Saka",
    status:"On-Site"
  },
  {
    id:4,
    name:"Olawole Anita",
    img:photo4,
    email:"olawo999@tmt.com",
    dept:"Adminstration",
    supervisor:"Joshua Zirkzee",
    status:"Hybrid"
  },
]

export const departments = [
  {
    id: 1,
    name: "Product",
    employees: [
      { id: 1,  img:photo1,
        name:"Mikel Arteta",
        position:"Manager", },
      { id: 2,img:photo2,
        name:"Martin Odegaad",
        position:"Javascript fullstack dev", },
        { id: 3,img:photo3,
          name:"Bukayo Saka",
          position:"Data Analyst" },
          { id: 4,img:photo4,
            name:"Thomas Partey",
            position:"Cyber security", },
            { id: 5, img:photo1,
              name:"Declan rice",
              position:"Product designer", }
    ]
  },
  {
    id: 2,
    name: "Marketing",
    employees: [
      { id: 3,  img:photo2,
        name:"Carlo Ancelotti",
        position:"Manager", },
        { id: 4,img:photo3,
        name:"Segio Ramos",
        position:"Art Director",},
        { id: 5,img:photo4,
          name:"Modrich",
          position:"Marketer", },
          { id: 6,img:photo1,
            name:"Cristiano Ronaldo",
            position:"Customer Rep", },
            { id: 7, img:photo2,
              name:"Jude Bellingham",
              position:"customer rep",}
            ]
          },
          {
            id: 3,
            name: "Admin",
            employees: [
              { id: 8,   img:photo3,
                name:"Tomas Rosicky",
                position:"Manager", },
                { id: 9, img:photo4,
                  name:"Kanu Nwakwo",
                  position:"Art Director",},
                  { id: 10, img:photo1,
                    name:"Patrick Viera",
                    position:"Marketer", },
                    { id: 11,img:photo2,
        name:"Thienry Henry",
        position:"Customer Rep", },
        { id: 12, img:photo3,
          name:"Ian Wright",
          position:"customer rep",}
    ]
  },
  {
    id: 4,
    name: "Operations",
    employees: [
      { id: 13,   img:photo4,
        name:"Arsene Wenger",
        position:"Manager", },
        { id: 14, img:photo1,
          name:"Jenns Lehmann",
          position:"Art Director",},
          { id: 15, img:photo2,
            name:"Sol Campbell",
            position:"Marketer", },
            { id: 16,img:photo3,
              name:"Roberto Carlos",
              position:"Customer Rep", },
              { id: 17,  img:photo4,
        name:"Cesc Fabregas",
        position:"customer rep",}
      ]
    },
  ]
  // employee DB
  export const employeeSidebarLinks = [
    {
      id: 1,
      Icon: dashboardImg,
      name: "Dashboard",
      path: "",
    },
    {
      id: 2,
      Icon: taskboardImg,
      name: "Taskboard",
      path: "taskboard",
    },
    {
      id: 4,
      Icon: settingsImg,
      name: "Settings",
      path: "settings",
    },
  ];
  export const employeeSummaryLenght = [
    {
      id:1,
      title:"Planned Tasks",
      count:24,
      img:plannedTasks
    },
    {
      id:2,
      title:"In Progress",
      count:107,
      img:inProgress
    },
    {
      id:3,
      title:"Remaining Leaves",
      count:15,
      img:remainingLeaves
    },
  ]
  export const employeeRecentActTableData = [
    {
      id:1,
      activity:"New Task Assigned",
      description:"Website Project Update On Slack",
      date:"Sep 21, 2024",
      status:"Pending"
    },
    {
      id:2,
      activity:"Leave Request Approval",
      description:"Leave approved for Sep 30 - Oct",
      date:"Sep 21, 2024",
      status:"In Progress"
    },
    {
      id:3,
      activity:"Leave Request Approval",
      description:"Leave requested for Sep 30 - Oct",
      date:"Sep 21, 2024",
      status:"Approved"
    },
    {
      id:4,
      activity:"Leave Request",
      description:"Leave requested for Sep 30 - Oct",
      date:"Sep 21, 2024",
      status:"In Progress"
    },
    {
      id:5,
      activity:"New Task Assigned",
      description:"Website Project Update On Slack",
      date:"Sep 21, 2024",
      status:"Pending"
    },
    {
      id:6,
      activity:"New Task Assigned",
      description:"Website Project Update On Slack",
      date:"Sep 21, 2024",
      status:"Approved"
    },
    {
      id:7,
      activity:"Leave Request",
      description:"Leave requested for Sep 30 - Oct",
      date:"Sep 21, 2024",
      status:"In Progress"
    }
  ]
  export const employeeTaskLenght = [
    {
      id:1,
      title:"Planned Tasks",
      count:24,
      img:plannedTasks
    },
    {
      id:2,
      title:"In Progress",
      count:107,
      img:inProgress
    },
    {
      id:3,
      title:"Completed Tasks",
      count:15,
      img:totalTasksImg
    }
  ]
  export const employeetaskBoardTableData = [
    {
      id:1,
      title:"Website Project Update On Slack",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2,
        teamPhoto3:photo3,
        teamPhoto4:photo4
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"Planned"
    },
    {
      id:2,
      title:"Productize Beta Testing",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2,
        teamPhoto3:photo3
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"Completed"
    },
    {
      id:3,
      title:"Website Project Update On Slack",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2   
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"In progress"
    },
    {
      id:4,
      title:"Website Project Update On Slack",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2,
        teamPhoto3:photo3,
        teamPhoto4:photo4   
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"Planned"
    },
    {
      id:5,
      title:"Productize Beta Testing",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2,
        teamPhoto3:photo3
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"Completed"
    },
    {
      id:6,
      title:"Website Project Update On Slack",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2   
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"In progress"
    },
    {
      id:7,
      title:"Website Project Update On Slack",
      teamPhoto:{
        teamPhoto1:photo1,
        teamPhoto2:photo2,
        teamPhoto3:photo3,
        teamPhoto4:photo4
      },
      duration:{
        start:"03 Mar 2023",
        end:"10 Mar 2023"
      },
      action:"Planned"
    }
  ]

  export const employeeLeaveLenght = [
    {
      id:1,
      title:"Annual Leave Remain",
      count:"12/20",
      img:annualLeave
    },
    {
      id:2,
      title:"Sick Leave Remain",
      count:"5/10",
      img:sickLeave
    },
    {
      id:3,
      title:"Casual Leave Remain",
      count:"5/10",
      img:casualLeave
    }
  ]

  export const employeeLeaveHistory = [
    {
      id:1,
      leaveType:"Casual Leave",
      startDate:"03 Nov 2023",
      endDate:"14 Nov 2024",
      days:"6 Days",
      status:"Pending"
    },
    {
      id:2,
      leaveType:"Annual Leave",
      startDate:"03 Nov 2023",
      endDate:"14 Nov 2024",
      days:"6 Days",
      status:"Pending"
    },
    {
      id:3,
      leaveType:"Sick Leave",
      startDate:"03 Nov 2023",
      endDate:"14 Nov 2024",
      days:"6 Days",
      status:"Appproved"
    },
    {
      id:4,
      leaveType:"Casual Leave",
      startDate:"03 Nov 2023",
      endDate:"14 Nov 2024",
      days:"6 Days",
      status:"Declined"
    },
  ]