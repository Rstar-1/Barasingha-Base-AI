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
    route: "/admin/dashboard",
    accordian: "accordion-1",
    tabId: "cb1",
    dropdown: [],
  },
  {
    icon: "user",
    name: "Portfolio",
    route: "",
    accordian: "accordion-2",
    tabId: "cb2",
    dropdown: [
      {
        icon: "slack",
        name: "Gallery",
        route: "AboutUs",
      },
      {
        icon: "user-plus",
        name: "Clients",
        route: "Services",
      },
      {
        icon: "users",
        name: "Teams",
        route: "Teams",
      },
      {
        icon: "activity",
        name: "Services",
        route: "Gallery",
      },
    ],
  },
  {
    icon: "briefcase",
    name: "Management",
    route: "",
    accordian: "accordion-3",
    tabId: "cb3",
    dropdown: [
      {
        icon: "folder",
        name: "Blogs",
        route: "AboutUs",
      },
      {
        icon: "shopping-cart",
        name: "Ecommerce",
        route: "Services",
      },
      {
        icon: "folder-plus",
        name: "Elearning",
        route: "Teams",
      },
    ],
  },
  {
    icon: "folder-plus",
    name: "Customs",
    route: "",
    accordian: "accordion-6",
    tabId: "cb4",
    dropdown: [
      {
        icon: "star",
        name: "Reviews",
        route: "AboutUs",
      },
      {
        icon: "help-circle",
        name: "FAQ",
        route: "Services",
      },
      {
        icon: "folder",
        name: "Brands",
        route: "Teams",
      },
    ],
  },
  {
    icon: "file",
    name: "CMS",
    route: "cms",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [],
  },
  {
    icon: "book",
    name: "Bill Summary",
    route: "billing",
    accordian: "accordion-6",
    tabId: "cb6",
    dropdown: [],
  },
  {
    icon: "search",
    name: "Seo",
    route: "seo",
    accordian: "accordion-6",
    tabId: "cb6",
    dropdown: [],
  },
];

export default sidebarmenu;
