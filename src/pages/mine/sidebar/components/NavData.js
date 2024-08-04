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
    icon: "trending-down",
    name: "Buget",
    route: "",
    accordian: "accordion-2",
    tabId: "cb2",
    dropdown: [
      {
        icon: "circle",
        name: "MainSell",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "ElectricSell",
        route: "Services",
      },
      {
        icon: "circle",
        name: "MilkSell",
        route: "Services",
      },
      {
        icon: "circle",
        name: "DrGasSell",
        route: "Services",
      },
    ],
  },
  {
    icon: "trending-up",
    name: "Stocks",
    route: "Buyer",
    accordian: "accordion-3",
    tabId: "cb3",
    dropdown: [
      {
        icon: "circle",
        name: "LongTerm",
        route: "AboutUs",
      },
      {
        icon: "circle",
        name: "ShortTerm",
        route: "Services",
      },
    ],
  },
  {
    icon: "bar-chart",
    name: "LongBuget",
    route: "seo",
    accordian: "accordion-4",
    tabId: "cb4",
    dropdown: [],
  },
  {
    icon: "activity",
    name: "Website",
    route: "seo",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [],
  },
];

export default sidebarmenu;
