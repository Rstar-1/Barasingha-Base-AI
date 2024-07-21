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
    route: "mine/dashboard",
    accordian: "accordion-1",
    tabId: "cb1",
    dropdown: [],
  },
  {
    icon: "home",
    name: "Home",
    route: "cms",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [],
  },
  {
    icon: "briefcase",
    name: "Management",
    route: "",
    accordian: "accordion-3",
    tabId: "cb3",
    dropdown: [
      {
        icon: "file",
        name: "Pages",
        route: "AboutUs",
      },
      {
        icon: "folder",
        name: "Sections",
        route: "Services",
      },
    ],
  },
  {
    icon: "book",
    name: "Header",
    route: "billing",
    accordian: "accordion-6",
    tabId: "cb6",
    dropdown: [],
  },
  {
    icon: "folder",
    name: "Components",
    route: "seo",
    accordian: "accordion-6",
    tabId: "cb6",
    dropdown: [],
  },
];

export default sidebarmenu;
