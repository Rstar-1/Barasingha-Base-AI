// const sidebarmenu = [
//   {
//     icon: "grid",
//     name: "Dashboard",
//     route: "dashboard",
//     accordian: "accordion-1",
//     tabId: "cb1",
//     dropdown: [],
//   },
//   {
//     icon: "folder",
//     name: "Management",
//     route: "management",
//     accordian: "accordion-2",
//     tabId: "cb2",
//     dropdown: [],
//   },
//   {
//     icon: "file",
//     name: "CMS",
//     route: "cms",
//     accordian: "accordion-4",
//     tabId: "cb4",
//     dropdown: [],
//   },
//   {
//     icon: "book",
//     name: "Bill Summary",
//     route: "billing",
//     accordian: "accordion-6",
//     tabId: "cb6",
//     dropdown: [],
//   },
//   {
//     icon: "help-circle",
//     name: "How it Works",
//     route: "how-works",
//     accordian: "accordion-3",
//     tabId: "cb3",
//     dropdown: [],
//   },
//   {
//     icon: "search",
//     name: "Seo",
//     route: "seo",
//     accordian: "accordion-5",
//     tabId: "cb5",
//     dropdown: [],
//   },
// ];

const sidebarmenu = [
  {
    icon: "grid",
    name: "Dashboard",
    route: "automate/dashboard",
    accordian: "accordion-1",
    tabId: "cb1",
    dropdown: [],
  },
  {
    icon: "file",
    name: "Website",
    route: "cms",
    accordian: "accordion-2",
    tabId: "cb2",
    dropdown: [
      {
        icon: "circle",
        name: "Home",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "AboutUs",
        route: "Services",
      },
      {
        icon: "circle",
        name: "Services",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "Gallery",
        route: "Services",
      },
      {
        icon: "circle",
        name: "Plans",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "Teams",
        route: "Services",
      },
    ],
  },
  {
    icon: "file-plus",
    name: "Others",
    route: "",
    accordian: "accordion-3",
    tabId: "cb3",
    dropdown: [
      {
        icon: "circle",
        name: "Home",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "AboutUs",
        route: "Services",
      },
      {
        icon: "circle",
        name: "Services",
        route: "AboutUs",
      },
    ],
  },
  {
    icon: "folder",
    name: "Admin",
    route: "seo",
    accordian: "accordion-4",
    tabId: "cb4",
    dropdown: [
      {
        icon: "circle",
        name: "Sidebar",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "Dashboard",
        route: "Services",
      },
      {
        icon: "circle",
        name: "Management",
        route: "AboutUs",
      },
    ],
  },
  {
    icon: "shield",
    name: "Navbar",
    route: "billing",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [],
  },
  {
    icon: "shield",
    name: "Footer",
    route: "billing",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [],
  },
];

export default sidebarmenu;
