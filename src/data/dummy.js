import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft, } from 'react-icons/bs';
// import {BiSolidCoffeeTogo} from 'react-icons/bi'
import {FaMugHot} from 'react-icons/fa';
import { BiColorFill,BiBadge } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount,MdCoffee } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';
import MarketBasket from '../pages/MarketBasket';
import hotcoffee from './hotcoffee.png';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Sujay Sir', y: 372.0 },
    { x: 'Dhananjay Sir', y: 66.0 },
    { x: 'Shashank', y: 24.0 },
    { x: 'Teena', y: 24.0 },
    { x: 'Shruti', y: 24.0 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '372',
    start: '1',
    end: '10',
    colors: colorMappingData[1] },

  { label: '11 to 20',
    start: '11',
    end: '20',
    colors: colorMappingData[2] },

  { label: '21 to 30',
    start: '21',
    end: '30',
    colors: colorMappingData[3] },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
  title: 'Orders',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const apriori = [
    {
      headerText:'LHS',
      field:'LHS',
      width:'450'
    },
    {
      headerText:'RHS',
      field:'RHS',
      width:'450'
    },
    {
      headerText:'Confidence',
      field:'Confidence',
      width:'200'
    }
  ];
export const offers = [
    {
      headerText:'Primary Item',
      field:'LHS',
      width:'450'
    },
    {
      headerText:'Discounted Items',
      field:'RHS',
      width:'450'
    },
  ];

export const customersGrid = [
  // { type: 'checkbox', width: '50' },
  // { headerText: 'Photo',
    {width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
    {
      headerText:'Name',
      field:'Name',
      width:'200'
    },
    {
      headerText:'Phone',
      field:'Phone',
      width:'200'
    }
  

];

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  
  
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Analytics',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'marketbasket',
        // icon: <MarketBasket />,
      },
      {
        name:'competitors',
      },
      {
        name:'offers'
      }
      
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      // {
      //   name: 'area',
      //   icon: <AiOutlineAreaChart />,
      // },

      // {
      //   name: 'bar',
      //   icon: <AiOutlineBarChart />,
      // },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      // {
      //   name: 'financial',
      //   icon: <RiStockLine />,
      // },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      // {
      //   name: 'pyramid',
      //   icon: <GiLouvrePyramid />,
      // },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];


export const aprioriData=[
  {LHS: ["Add On Syrup (Add On Irish Syrup)"], RHS: "Iced Americano (350 ML)", Confidence: 1.0},
  {LHS: ["Berliner Mix 3 Pcs (Dark Choco Mousse Berliner)"], RHS: "Berliner Mix 3 Pcs (Lotus Biscoff Berliner)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (chocolate Tartlet)"], RHS: "Mix Tartlet 3 Pcs (salted Caramel tartlet)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (salted Caramel tartlet)"], RHS: "Mix Tartlet 3 Pcs (chocolate Tartlet)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)"], RHS: "Mix Tartlet 3 Pcs (chocolate Tartlet)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)"], RHS: "Mix Tartlet 3 Pcs (salted Caramel tartlet)", Confidence: 1.0},
  {LHS: ["Tartlets (Filter Kaapi Tartlet)"], RHS: "Tartlets (chocolate Tartlet)", Confidence: 1.0},
  {LHS: ["Calzones Veg (Calzone Paneer)", "Calzones Veg (Calzone Veg)"], RHS: "Papparoti (Add On Nutella sauce)", Confidence: 1.0},
  {LHS: ["Calzones Veg (Calzone Paneer)", "Papparoti (Add On Nutella sauce)"], RHS: "Calzones Veg (Calzone Veg)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (chocolate Tartlet)", "Calzones Veg (Calzone Paneer)"], RHS: "Mix Tartlet 3 Pcs (salted Caramel tartlet)", Confidence: 1.0},
  {LHS: ["Calzones Veg (Calzone Paneer)", "Mix Tartlet 3 Pcs (salted Caramel tartlet)"], RHS: "Mix Tartlet 3 Pcs (chocolate Tartlet)", Confidence: 1.0},
  {LHS: ["Papparoti (Plain)", "Almond Honey Latte (250 ML)"], RHS: "Kaapicino (250 ML)", Confidence: 1.0},
  {LHS: ["Kaapicino (250 ML)", "Almond Honey Latte (250 ML)"], RHS: "Papparoti (Plain)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)"], RHS: "Mix Tartlet 3 Pcs (chocolate Tartlet)', 'Mix Tartlet 3 Pcs (salted Caramel tartlet)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (chocolate Tartlet)", "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)"], RHS: "Mix Tartlet 3 Pcs (salted Caramel tartlet)", Confidence: 1.0},
  {LHS: ["Mix Tartlet 3 Pcs (salted Caramel tartlet)", "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)"], RHS: "Mix Tartlet 3 Pcs (chocolate Tartlet)", Confidence: 1.0},
  {LHS: ["Mix Berliner 2 Pcs (Lotus Biscoff Berliner)"], RHS: "Mix Berliner 2 Pcs (Nutella Berliner)", Confidence: 0.7500000000000001},
  {LHS: ["Mix Berliner 2 Pcs (Blueberry Cheese Cake Berliner)"], RHS: "Mix Berliner 2 Pcs (Nutella Berliner)", Confidence: 0.7500000000000001},
  {LHS: ["Mix Tartlet 3 Pcs (chocolate Tartlet)"], RHS: "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)", Confidence: 0.7500000000000001},
  {LHS: ["Mix Tartlet 3 Pcs (salted Caramel tartlet)"], RHS: "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)", Confidence: 0.7500000000000001},
  {LHS: ["Mix Tartlet 3 Pcs (chocolate Tartlet)"], RHS: "Mix Tartlet 3 Pcs (salted Caramel tartlet)', 'Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)", Confidence: 0.7500000000000001},
  {LHS: ["Mix Tartlet 3 Pcs (salted Caramel tartlet)"], RHS: "Mix Tartlet 3 Pcs (chocolate Tartlet)', 'Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)", Confidence: 0.7500000000000001},
  {LHS: ["Mix Tartlet 3 Pcs (chocolate Tartlet)", "Mix Tartlet 3 Pcs (salted Caramel tartlet)"], RHS: "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)", Confidence: 0.7500000000000001},
  {LHS: ["Add On Syrup (Add On hazelnuts Syrup)"], RHS: "Cafe Latte (250 ML)", Confidence: 0.6666666666666666},
  {LHS: ["Tartlets (Kacha Nimbu Tartlet)"], RHS: "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)", Confidence: 0.6666666666666666},
  {LHS: ["Calzones Veg (Calzone Veg)", "Papparoti (Add On Nutella sauce)"], RHS: "Calzones Veg (Calzone Paneer)", Confidence: 0.6666666666666666},
  {LHS: ["Papparoti (Plain)", "Origanal South Indian Frappe (350 ML)"], RHS: "Kaapicino (250 ML)", Confidence: 0.6666666666666666},
  {LHS: ["Kaapicino (250 ML)", "Origanal South Indian Frappe (350 ML)"], RHS: "Papparoti (Plain)", Confidence: 0.666666666666666}
 ];

// export const aprioriData = [
//   {"LHS":'harsh',"RHS":'HI',"Confidence":'1'},
// ];


export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '2888',
    // percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '192',
    // percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '14',
    // percentage: '+38%',
    title: 'Categories',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '477',
    // percentage: '-12%',
    title: 'Reviews',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <FaMugHot/>,
    title: 'Hot Coffee',
    desc: '#1 Best Seller',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BiBadge/>,
    title: 'Baked vada pav',
    desc: '#2 Best Seller',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <MdCoffee/>,
    title: 'Cold Coffee',
    desc: '#3 Best Seller',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
];
export const recentTransactions2 = [
  {
    icon: <FaMugHot/>,
    title: 'Hot Coffee',
    desc: '#1 Best Seller',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BiBadge/>,
    title: 'Baked vada pav',
    desc: '#2 Best Seller',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <MdCoffee/>,
    title: 'Cold Coffee',
    desc: '#3 Best Seller',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },

  
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const productsPerformance = [
  {
    image:
      product5,
    title: 'Is it good butterscotch ice-cream?',
    desc: 'Ice-Cream, Milk, Powder',
    rating: 'Good',
    itemSold: '65%',
    earningAmount: '$546,000',
  },
  {
    image:
      product6,
    title: 'Supreme fresh tomato available',
    desc: 'Market, Mall',
    rating: 'Excellent',
    itemSold: '98%',
    earningAmount: '$780,000',
  },
  {
    image:
      product7,
    title: 'Red color candy from Gucci',
    desc: 'Chocolate, Yummy',
    rating: 'Average',
    itemSold: '46%',
    earningAmount: '$457,000',
  },
  {
    image:
      product4,
    title: 'Stylish night lamp for night',
    desc: 'Electric, Wire, Current',
    rating: 'Poor',
    itemSold: '23%',
    earningAmount: '$123,000',
  },
];

export const medicalproBranding = {
  data: [
    {
      title: 'Due Date',
      desc: 'Oct 23, 2021',
    },
    {
      title: 'Budget',
      desc: '$98,500',
    },
    {
      title: 'Expense',
      desc: '$63,000',
    },
  ],
  teams: [
    {
      name: 'Bootstrap',
      color: 'orange',
    },
    {
      name: 'Angular',
      color: '#FB9678',
    },
  ],
  leaders: [
    {
      image:
        avatar2,
    },
    {
      image:
        avatar3,
    },
    {
      image:
        avatar2,
    },
    {
      image:
        avatar4,
    },
    {
      image:
        avatar,
    },
  ],
};

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
export const ordersGrid = [
  {
    field: 'Invoice',
    headerText: 'Invoice',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Date',
    headerText: 'Date',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'Timestamp',
    headerText: 'Timestamp',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Item Name',
    headerText: 'Item Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Price',
    headerText: 'Price',
    format: 'C2', // Apply currency formatting
    textAlign: 'Center',
    width: '120',
  },
];


export const customersData =[
  {
      "Name": "sanket rathod",
      CustomerImage:avatar4,"Phone": 9833008769.0
  },
  {
      "Name": "neel",
      CustomerImage:avatar2,"Phone": 8369680541.0
  },
  {
      "Name": "samudaya",
      CustomerImage:avatar,"Phone": 3.0
  },
  {
      "Name": "shreya",
      CustomerImage:avatar3,"Phone": 9829430847.0
  },
  {
      "Name": "shreyanshi",
      CustomerImage:avatar2,"Phone": 7903754877.0
  },
  {
      "Name": "dhruv",
      CustomerImage:avatar,"Phone": 9702932166.0
  },
  {
      "Name": "akshat",
      CustomerImage:avatar4,"Phone": 7999750116.0
  },
  {
      "Name": "Dhruv kumaaar\\8273454326",
      CustomerImage:avatar3,"Phone": 8273454326.0
  },
  {
      "Name": "Shubhum Shah",
      CustomerImage:avatar,"Phone": 9619516050.0
  },
  {
      "Name": "Doctor Valerie Dmello/Jay Anna",
      CustomerImage:avatar4,"Phone": 9892091625.0
  },
  {
      "Name": "umang",
      CustomerImage:avatar3,"Phone": 9930714899.0
  },
  {
      "Name": "sahina",
      CustomerImage:avatar2,"Phone": 9702017839.0
  },
  {
      "Name": "ASIF SHAIKH",
      CustomerImage:avatar2,"Phone": 9382107892.0
  },
  {
      "Name": "kundan",
      CustomerImage:avatar2,"Phone": 9082203571.0
  },
  {
      "Name": "shashank",
      CustomerImage:avatar2,"Phone": 8818806789.0
  },
  {
      "Name": "Vininjay Sir",
      CustomerImage:avatar2,"Phone": 9869066351.0
  },
  {
      "Name": "aadi",
      CustomerImage:avatar2,"Phone": 9878811600.0
  },
  {
      "Name": "khushal",
      CustomerImage:avatar2,"Phone": 7721893339.0
  },
  {
      "Name": "sujay sir",
      CustomerImage:avatar2,"Phone": 8652510000.0
  },
  {
      "Name": "dab",
      CustomerImage:avatar2,"Phone": 9867678987.0
  },
  {
      "Name": "JABBAR\\9002495461",
      CustomerImage:avatar2,"Phone": 9002495461.0
  },
  {
      "Name": "Saheba",
      CustomerImage:avatar2,"Phone": 9999496803.0
  },
  {
      "Name": "deepak chef",
      CustomerImage:avatar2,"Phone": 9167462870.0
  },
  {
      "Name": "NARESH",
      CustomerImage:avatar2,"Phone": 7021274723.0
  },
  {
      "Name": "ARNAV/9588263699",
      CustomerImage:avatar2,"Phone": 9588263699.0
  },
  {
      "Name": "Dhananjay Sir",
      CustomerImage:avatar2,"Phone": 1111111111.0
  },
  {
      "Name": "sidhanth sharma/daddy",
      CustomerImage:avatar2,"Phone": 9903678967.0
  },
  {
      "Name": "amol",
      CustomerImage:avatar2,"Phone": 7823841899.0
  },
  {
      "Name": "SIDI SHAH",
      CustomerImage:avatar2,"Phone": 9619138408.0
  },
  {
      "Name": "Naishar",
      CustomerImage:avatar2,"Phone": 9819123074.0
  },
  {
      "Name": "priyankk",
      CustomerImage:avatar2,"Phone": 9079977369.0
  },
  {
      "Name": "adish shah",
      CustomerImage:avatar2,"Phone": 9167647627.0
  },
  {
      "Name": "niyeti a",
      CustomerImage:avatar2,"Phone": 9137585536.0
  },
  {
      "Name": "Aanya",
      CustomerImage:avatar2,"Phone": 9875402270.0
  },
  {
      "Name": "pranay jain",
      CustomerImage:avatar2,"Phone": 9311134003.0
  },
  {
      "Name": "asha",
      CustomerImage:avatar2,"Phone": 9773659002.0
  },
  {
      "Name": "aayushi saraf",
      CustomerImage:avatar2,"Phone": 9765999655.0
  },
  {
      "Name": "teena",
      CustomerImage:avatar2,"Phone": 9967349286.0
  },
  {
      "Name": "allah baksh",
      CustomerImage:avatar2,"Phone": 9324609696.0
  },
  {
      "Name": "shubham",
      CustomerImage:avatar2,"Phone": 8850701966.0
  },
  {
      "Name": "SaiRaj Sir",
      CustomerImage:avatar2,"Phone": 9819995469.0
  },
  {
      "Name": "khushal",
      CustomerImage:avatar2,"Phone": 8169537850.0
  },
  {
      "Name": "aman",
      CustomerImage:avatar2,"Phone": 9930943499.0
  },
  {
      "Name": "Nagesh Anna",
      CustomerImage:avatar2,"Phone": 9901231662.0
  },
  {
      "Name": "SWIGGY",
      CustomerImage:avatar2,"Phone": 3340585576.0
  },
  {
      "Name": "Sanjay mehta melting Pot",
      CustomerImage:avatar2,"Phone": 9323880927.0
  },
  {
      "Name": "priti jha",
      CustomerImage:avatar2,"Phone": 9334561141.0
  },
  {
      "Name": "Sabina /7021105769",
      CustomerImage:avatar2,"Phone": 7021105769.0
  },
  {
      "Name": "saurabh ash",
      CustomerImage:avatar2,"Phone": 9867654294.0
  },
  {
      "Name": "Dhananjay Sir/room guest",
      CustomerImage:avatar2,"Phone": 1111111111.0
  },
  {
      "Name": "mohit sadhwani",
      CustomerImage:avatar2,"Phone": 9833337890.0
  },
  {
      "Name": "SHUBHAAAMM/mommyyyy",
      CustomerImage:avatar2,"Phone": 8017689593.0
  },
  {
      "Name": "ankit",
      CustomerImage:avatar2,"Phone": 9833633361.0
  },
  {
      "Name": "nitin m",
      CustomerImage:avatar2,"Phone": 8652569567.0
  },
  {
      "Name": "kartik/9768413111",
      CustomerImage:avatar2,"Phone": 9768413111.0
  },
  {
      "Name": "NEHA",
      CustomerImage:avatar2,"Phone": 9930003677.0
  },
  {
      "Name": "Saahil Mukadam/9945672297",
      CustomerImage:avatar2,"Phone": 9945672297.0
  },
  {
      "Name": "jainam",
      CustomerImage:avatar2,"Phone": 9930993309.0
  },
  {
      "Name": "kunal/9769255313",
      CustomerImage:avatar2,"Phone": 9769255313.0
  },
  {
      "Name": "gheet",
      CustomerImage:avatar2,"Phone": 9930990039.0
  },
  {
      "Name": "sachin",
      CustomerImage:avatar2,"Phone": 9810076504.0
  },
  {
      "Name": "Akshay sabo",
      CustomerImage:avatar2,"Phone": 9969324543.0
  },
  {
      "Name": "ashtha",
      CustomerImage:avatar2,"Phone": 9326478859.0
  },
  {
      "Name": "kunal mittal",
      CustomerImage:avatar2,"Phone": 9702017329.0
  },
  {
      "Name": "gupta",
      CustomerImage:avatar2,"Phone": 9869434118.0
  },
  {
      "Name": "runuk",
      CustomerImage:avatar2,"Phone": 9582052121.0
  },
  {
      "Name": "amishah",
      CustomerImage:avatar2,"Phone": 9167952215.0
  },
  {
      "Name": "jotika",
      CustomerImage:avatar2,"Phone": 8076797155.0
  },
  {
      "Name": "mehul",
      CustomerImage:avatar2,"Phone": 8107407900.0
  },
  {
      "Name": "raahil",
      CustomerImage:avatar2,"Phone": 9825523603.0
  },
  {
      "Name": "Kasturi Datar",
      CustomerImage:avatar2,"Phone": 9920107686.0
  },
  {
      "Name": "kritin",
      CustomerImage:avatar2,"Phone": 8657427899.0
  },
  {
      "Name": "yashvi",
      CustomerImage:avatar2,"Phone": 7045256838.0
  },
  {
      "Name": "YASIN / 6297069592",
      CustomerImage:avatar2,"Phone": 6297069592.0
  },
  {
      "Name": "brijesh",
      CustomerImage:avatar2,"Phone": 8655732605.0
  },
  {
      "Name": "Meet",
      CustomerImage:avatar2,"Phone": 9166355353.0
  },
  {
      "Name": "shreya",
      CustomerImage:avatar2,"Phone": 9819839741.0
  },
  {
      "Name": "noel",
      CustomerImage:avatar2,"Phone": 9920085188.0
  },
  {
      "Name": "ved",
      CustomerImage:avatar2,"Phone": 9372481297.0
  },
  {
      "Name": "Sidhharth",
      CustomerImage:avatar2,"Phone": 9760211796.0
  },
  {
      "Name": "vedit photo shoot",
      CustomerImage:avatar2,"Phone": 9324291794.0
  },
  {
      "Name": "gauravi",
      CustomerImage:avatar2,"Phone": 8828467217.0
  },
  {
      "Name": "purvesh",
      CustomerImage:avatar2,"Phone": 9619480719.0
  },
  {
      "Name": "shashank",
      CustomerImage:avatar2,"Phone": 9535751749.0
  },
  {
      "Name": "Karan",
      CustomerImage:avatar2,"Phone": 8511120790.0
  },
  {
      "Name": "mahir Advani",
      CustomerImage:avatar2,"Phone": 9833028820.0
  },
  {
      "Name": "kosha",
      CustomerImage:avatar2,"Phone": 9833904424.0
  },
  {
      "Name": "Melissa",
      CustomerImage:avatar2,"Phone": 9892969791.0
  },
  {
      "Name": "Lakhi Salian Barista",
      CustomerImage:avatar2,"Phone": 9967935947.0
  },
  {
      "Name": "jinesh",
      CustomerImage:avatar2,"Phone": 7666203759.0
  },
  {
      "Name": "dhiresh",
      CustomerImage:avatar2,"Phone": 9029411690.0
  },
  {
      "Name": "janvy",
      CustomerImage:avatar2,"Phone": 8080077191.0
  },
  {
      "Name": "koma",
      CustomerImage:avatar2,"Phone": 7030453360.0
  },
  {
      "Name": "khushik",
      CustomerImage:avatar2,"Phone": 8888900924.0
  },
  {
      "Name": "kajal",
      CustomerImage:avatar2,"Phone": 9869722401.0
  },
  {
      "Name": "kunal",
      CustomerImage:avatar2,"Phone": 9522760000.0
  },
  {
      "Name": "pratik",
      CustomerImage:avatar2,"Phone": 9930505512.0
  },
  {
      "Name": "danish",
      CustomerImage:avatar2,"Phone": 9816140572.0
  },
  {
      "Name": "Sachin Sir Honrao",
      CustomerImage:avatar2,"Phone": 9004495943.0
  },
  {
      "Name": "Aditya shahri",
      CustomerImage:avatar2,"Phone": 8964026507.0
  },
  {
      "Name": "Amitesh",
      CustomerImage:avatar2,"Phone": 9920582922.0
  },
  {
      "Name": "uady anna",
      CustomerImage:avatar2,"Phone": 4444444444.0
  },
  {
      "Name": "nitin shah",
      CustomerImage:avatar2,"Phone": 9930941136.0
  },
  {
      "Name": "harsh",
      CustomerImage:avatar2,"Phone": 9372055653.0
  },
  {
      "Name": "Harshit",
      CustomerImage:avatar2,"Phone": 8440845564.0
  },
  {
      "Name": "yash D",
      CustomerImage:avatar2,"Phone": 9820166636.0
  },
  {
      "Name": "rizan",
      CustomerImage:avatar2,"Phone": 9167390991.0
  },
  {
      "Name": "addya",
      CustomerImage:avatar2,"Phone": 9905191010.0
  },
  {
      "Name": "rahul",
      CustomerImage:avatar2,"Phone": 7588444101.0
  },
  {
      "Name": "jay",
      CustomerImage:avatar2,"Phone": 9870988069.0
  },
  {
      "Name": "parathi",
      CustomerImage:avatar2,"Phone": 8879954487.0
  },
  {
      "Name": "Manali",
      CustomerImage:avatar2,"Phone": 9819557758.0
  },
  {
      "Name": "RAAAHIL",
      CustomerImage:avatar2,"Phone": 9167156829.0
  },
  {
      "Name": "aartij",
      CustomerImage:avatar2,"Phone": 9769325898.0
  },
  {
      "Name": "shruti",
      CustomerImage:avatar2,"Phone": 8077665959.0
  },
  {
      "Name": "Awadhi",
      CustomerImage:avatar2,"Phone": 7000446734.0
  },
  {
      "Name": "anisha bihani",
      CustomerImage:avatar2,"Phone": 9285123600.0
  },
  {
      "Name": "monica hh",
      CustomerImage:avatar2,"Phone": 9869318083.0
  },
  {
      "Name": "advik",
      CustomerImage:avatar2,"Phone": 9987337220.0
  },
  {
      "Name": "SOWMYA",
      CustomerImage:avatar2,"Phone": 8279830459.0
  },
  {
      "Name": "bhavin doshi",
      CustomerImage:avatar2,"Phone": 9819842321.0
  },
  {
      "Name": "anchal",
      CustomerImage:avatar2,"Phone": 7016846708.0
  },
  {
      "Name": "neelesh",
      CustomerImage:avatar2,"Phone": 7838823636.0
  },
  {
      "Name": "Vimal Bha / Boss Friend",
      CustomerImage:avatar2,"Phone": 9820295555.0
  },
  {
      "Name": "rohan",
      CustomerImage:avatar2,"Phone": 9043673736.0
  },
  {
      "Name": "shruti",
      CustomerImage:avatar2,"Phone": 9769422249.0
  },
  {
      "Name": "kavya",
      CustomerImage:avatar2,"Phone": 9967279226.0
  },
  {
      "Name": "Shreya jain",
      CustomerImage:avatar2,"Phone": 8696930000.0
  },
  {
      "Name": "Priti",
      CustomerImage:avatar2,"Phone": 9136679934.0
  },
  {
      "Name": "Asmi Anand",
      CustomerImage:avatar2,"Phone": 8045686321.0
  },
  {
      "Name": "Babu Anna Sir",
      CustomerImage:avatar2,"Phone": 9869441122.0
  },
  {
      "Name": "Samaira Sandhu",
      CustomerImage:avatar2,"Phone": 9914500788.0
  },
  {
      "Name": "MANAS",
      CustomerImage:avatar2,"Phone": 9423150361.0
  },
  {
      "Name": "piyush",
      CustomerImage:avatar2,"Phone": 6287310405.0
  },
  {
      "Name": "sujay sir/sharavan",
      CustomerImage:avatar2,"Phone": 8652510000.0
  },
  {
      "Name": "Pratham",
      CustomerImage:avatar2,"Phone": 9082809070.0
  },
  {
      "Name": "shivani shah",
      CustomerImage:avatar2,"Phone": 9930759839.0
  },
  {
      "Name": "shikha",
      CustomerImage:avatar2,"Phone": 9833060105.0
  },
  {
      "Name": "Pratik B",
      CustomerImage:avatar2,"Phone": 8980452380.0
  },
  {
      "Name": "shurbhi",
      CustomerImage:avatar2,"Phone": 9924737954.0
  },
  {
      "Name": "vatsal/9821554200",
      CustomerImage:avatar2,"Phone": 9821554200.0
  },
  {
      "Name": "Ishan sharma",
      CustomerImage:avatar2,"Phone": 8966054333.0
  },
  {
      "Name": "parth",
      CustomerImage:avatar2,"Phone": 7738402838.0
  },
  {
      "Name": "ritika",
      CustomerImage:avatar2,"Phone": 7225999975.0
  },
  {
      "Name": "fara",
      CustomerImage:avatar2,"Phone": 9820460251.0
  },
  {
      "Name": "parinita",
      CustomerImage:avatar2,"Phone": 8291100388.0
  },
  {
      "Name": "khusbo ratnani/9175157000",
      CustomerImage:avatar2,"Phone": 9175157000.0
  },
  {
      "Name": "Vanshika Agarwal",
      CustomerImage:avatar2,"Phone": 7077729100.0
  },
  {
      "Name": "partham",
      CustomerImage:avatar2,"Phone": 9699425425.0
  },
  {
      "Name": "ayra",
      CustomerImage:avatar2,"Phone": 7499325914.0
  },
  {
      "Name": "Dhananjay Sir",
      CustomerImage:avatar2,"Phone": 1111111110.0
  },
  {
      "Name": "ankit",
      CustomerImage:avatar2,"Phone": 9819990489.0
  },
  {
      "Name": "SWAYAM",
      CustomerImage:avatar2,"Phone": 7977382598.0
  },
  {
      "Name": "chirag jay shah/9819899965",
      CustomerImage:avatar2,"Phone": 9819899965.0
  },
  {
      "Name": "KRUNAL",
      CustomerImage:avatar2,"Phone": 9930051433.0
  },
  {
      "Name": "thea",
      CustomerImage:avatar2,"Phone": 7738451044.0
  },
  {
      "Name": "KUNAL",
      CustomerImage:avatar2,"Phone": 9930051433.0
  },
  {
      "Name": "Svkriti",
      CustomerImage:avatar2,"Phone": 7738117526.0
  },
  {
      "Name": "ruhi",
      CustomerImage:avatar2,"Phone": 9167837980.0
  },
  {
      "Name": "biral",
      CustomerImage:avatar2,"Phone": 9821244313.0
  },
  {
      "Name": "madhav",
      CustomerImage:avatar2,"Phone": 7007483639.0
  },
  {
      "Name": "yuvraj Bhansali",
      CustomerImage:avatar2,"Phone": 9957997937.0
  },
  {
      "Name": "Magha",
      CustomerImage:avatar2,"Phone": 9820224008.0
  },
  {
      "Name": "mukraj",
      CustomerImage:avatar2,"Phone": 7718859036.0
  },
  {
      "Name": "rojul",
      CustomerImage:avatar2,"Phone": 9713445772.0
  },
  {
      "Name": "shubi",
      CustomerImage:avatar2,"Phone": 7014457704.0
  },
  {
      "Name": "aashna",
      CustomerImage:avatar2,"Phone": 9971148084.0
  },
  {
      "Name": "tejas patel",
      CustomerImage:avatar2,"Phone": 8433777234.0
  },
  {
      "Name": "kalppp",
      CustomerImage:avatar2,"Phone": 7045418285.0
  },
  {
      "Name": "sanil",
      CustomerImage:avatar2,"Phone": 9137596326.0
  },
  {
      "Name": "shruti",
      CustomerImage:avatar2,"Phone": 9769087539.0
  },
  {
      "Name": "Darsh Gogia",
      CustomerImage:avatar2,"Phone": 9354450150.0
  },
  {
      "Name": "saket singhania",
      CustomerImage:avatar2,"Phone": 8080029370.0
  },
  {
      "Name": "darpan",
      CustomerImage:avatar2,"Phone": 9687264572.0
  },
  {
      "Name": "shubaham",
      CustomerImage:avatar2,"Phone": 9730080167.0
  },
  {
      "Name": "anuay",
      CustomerImage:avatar2,"Phone": 9167901983.0
  },
  {
      "Name": "shruti",
      CustomerImage:avatar2,"Phone": 9819064749.0
  },
  {
      "Name": "yash",
      CustomerImage:avatar2,"Phone": 9930675406.0
  },
  {
      "Name": "hem",
      CustomerImage:avatar2,"Phone": 7977772033.0
  },
  {
      "Name": "manan gada",
      CustomerImage:avatar2,"Phone": 8898042364.0
  },
  {
      "Name": "RAMONA",
      CustomerImage:avatar2,"Phone": 9820013269.0
  },
  {
      "Name": "vishal",
      CustomerImage:avatar2,"Phone": 9930211991.0
  },
  {
      "Name": "khush",
      CustomerImage:avatar2,"Phone": 8287621273.0
  },
  {
      "Name": "anshika",
      CustomerImage:avatar2,"Phone": 7017246612.0
  },
  {
      "Name": "Guari",
      CustomerImage:avatar2,"Phone": 9819838852.0
  },
  {
      "Name": "nitishaaa",
      CustomerImage:avatar2,"Phone": 8319010426.0
  },
  {
      "Name": "Smit Mehta",
      CustomerImage:avatar2,"Phone": 9769842922.0
  },
  {
      "Name": "nakksh",
      CustomerImage:avatar2,"Phone": 8898040343.0
  },
  {
      "Name": "KABIR",
      CustomerImage:avatar2,"Phone": 9930037855.0
  },
  {
      "Name": "hanshul",
      CustomerImage:avatar2,"Phone": 9819198925.0
  },
  {
      "Name": "rishab",
      CustomerImage:avatar2,"Phone": 9820122902.0
  },
  {
      "Name": "niel",
      CustomerImage:avatar2,"Phone": 9821571836.0
  },
  {
      "Name": "kumar",
      CustomerImage:avatar2,"Phone": 9321116715.0
  },
  {
      "Name": "VERONII",
      CustomerImage:avatar2,"Phone": 9619062658.0
  },
  {
      "Name": "dia",
      CustomerImage:avatar2,"Phone": 9356995725.0
  },
  {
      "Name": "nirali",
      CustomerImage:avatar2,"Phone": 9920807157.0
  },
  {
      "Name": "manish",
      CustomerImage:avatar2,"Phone": 8527812226.0
  },
  {
      "Name": "dipshika jain",
      CustomerImage:avatar2,"Phone": 9819851510.0
  },
  {
      "Name": "sahil",
      CustomerImage:avatar2,"Phone": 8779595307.0
  },
  {
      "Name": "Neil",
      CustomerImage:avatar2,"Phone": 8875773476.0
  },
  {
      "Name": "aryan",
      CustomerImage:avatar2,"Phone": 8758876454.0
  },
  {
      "Name": "dherandra/9967165285",
      CustomerImage:avatar2,"Phone": 9967165285.0
  },
  {
      "Name": "Anit kishna",
      CustomerImage:avatar2,"Phone": 9819318326.0
  },
  {
      "Name": "shanky",
      CustomerImage:avatar2,"Phone": 8447551134.0
  },
  {
      "Name": "harsh",
      CustomerImage:avatar2,"Phone": 9372505653.0
  },
  {
      "Name": "Dr.Punjabi",
      CustomerImage:avatar2,"Phone": 9821162851.0
  },
  {
      "Name": "gaurang",
      CustomerImage:avatar2,"Phone": 9820770054.0
  },
  {
      "Name": "shahbaz",
      CustomerImage:avatar2,"Phone": 7710976649.0
  },
  {
      "Name": "garima",
      CustomerImage:avatar2,"Phone": 9619866132.0
  },
  {
      "Name": "ritvikka",
      CustomerImage:avatar2,"Phone": 7777031905.0
  },
  {
      "Name": "anurag",
      CustomerImage:avatar2,"Phone": 8390123130.0
  },
  {
      "Name": "pun",
      CustomerImage:avatar2,"Phone": 6283132339.0
  },
  {
      "Name": "KHUSHI",
      CustomerImage:avatar2,"Phone": 9004874734.0
  },
  {
      "Name": "Shrushti",
      CustomerImage:avatar2,"Phone": 8779801572.0
  },
  {
      "Name": "jia",
      CustomerImage:avatar2,"Phone": 8928608861.0
  },
  {
      "Name": "MUKESH RESEPSHION\\9167440603",
      CustomerImage:avatar2,"Phone": 9167440603.0
  },
  {
      "Name": "dinal chef bakery",
      CustomerImage:avatar2,"Phone": 9909919390.0
  },
  {
      "Name": "khushi",
      CustomerImage:avatar2,"Phone": 9004874734.0
  },
  {
      "Name": "aaju bhai",
      CustomerImage:avatar2,"Phone": 2000000000.0
  },
  {
      "Name": "parin",
      CustomerImage:avatar2,"Phone": 8424804718.0
  },
  {
      "Name": "paras h",
      CustomerImage:avatar2,"Phone": 9823456917.0
  },
  {
      "Name": "sarvshrest singh",
      CustomerImage:avatar2,"Phone": 9981800982.0
  },
  {
      "Name": "anurag",
      CustomerImage:avatar2,"Phone": 9870115599.0
  },
  {
      "Name": "archita",
      CustomerImage:avatar2,"Phone": 8437600842.0
  },
  {
      "Name": "ritika",
      CustomerImage:avatar2,"Phone": 9167661698.0
  },
  {
      "Name": "anurag",
      CustomerImage:avatar2,"Phone": 9022519300.0
  },
  {
      "Name": "priti vyas",
      CustomerImage:avatar2,"Phone": 9820002264.0
  },
  {
      "Name": "Sabina chef",
      CustomerImage:avatar2,"Phone": 9867365002.0
  },
  {
      "Name": "divanshi",
      CustomerImage:avatar2,"Phone": 7275575915.0
  },
  {
      "Name": "nischal/guest complimentry",
      CustomerImage:avatar2,"Phone": 9167626266.0
  },
  {
      "Name": "kirsh",
      CustomerImage:avatar2,"Phone": 9819499968.0
  },
  {
      "Name": "mishal",
      CustomerImage:avatar2,"Phone": 8879776992.0
  },
  {
      "Name": "vashi",
      CustomerImage:avatar2,"Phone": 8462910091.0
  },
  {
      "Name": "Nihal",
      CustomerImage:avatar2,"Phone": 9702514943.0
  },
  {
      "Name": "Ekansh",
      CustomerImage:avatar2,"Phone": 9910639481.0
  },
  {
      "Name": "nischal",
      CustomerImage:avatar2,"Phone": 9167626266.0
  },
  {
      "Name": "sanjana thakur",
      CustomerImage:avatar2,"Phone": 7506196918.0
  },
  {
      "Name": "neha",
      CustomerImage:avatar2,"Phone": 9619900269.0
  },
  {
      "Name": "krishna",
      CustomerImage:avatar2,"Phone": 9167402302.0
  },
  {
      "Name": "soumya",
      CustomerImage:avatar2,"Phone": 7755005292.0
  },
  {
      "Name": "sayam",
      CustomerImage:avatar2,"Phone": 8920219476.0
  },
  {
      "Name": "ajju sir",
      CustomerImage:avatar2,"Phone": 1231231231.0
  },
  {
      "Name": "vishrut",
      CustomerImage:avatar2,"Phone": 9909004236.0
  },
  {
      "Name": "Rishab",
      CustomerImage:avatar2,"Phone": 9833161944.0
  },
  {
      "Name": "rishab Chef",
      CustomerImage:avatar2,"Phone": 9820896494.0
  },
  {
      "Name": "adnan",
      CustomerImage:avatar2,"Phone": 9152390107.0
  },
  {
      "Name": "hamza",
      CustomerImage:avatar2,"Phone": 9372563584.0
  },
  {
      "Name": "gautam",
      CustomerImage:avatar2,"Phone": 9479525993.0
  },
  {
      "Name": "dev",
      CustomerImage:avatar2,"Phone": 9403411212.0
  },
  {
      "Name": "PARTH",
      CustomerImage:avatar2,"Phone": 9372970819.0
  },
  {
      "Name": "mini",
      CustomerImage:avatar2,"Phone": 9810019295.0
  },
  {
      "Name": "tavisha",
      CustomerImage:avatar2,"Phone": 7002326638.0
  },
  {
      "Name": "khushiiiiiii",
      CustomerImage:avatar2,"Phone": 8261879284.0
  },
  {
      "Name": "Ashta",
      CustomerImage:avatar2,"Phone": 9356431254.0
  },
  {
      "Name": "sunny naiyak",
      CustomerImage:avatar2,"Phone": 9830709606.0
  },
  {
      "Name": "shruti",
      CustomerImage:avatar2,"Phone": 9617645569.0
  },
  {
      "Name": "kanak",
      CustomerImage:avatar2,"Phone": 8788182950.0
  },
  {
      "Name": "roniiitttt",
      CustomerImage:avatar2,"Phone": 9068665217.0
  },
  {
      "Name": "UDAY ANNA [MD GAST]",
      CustomerImage:avatar2,"Phone": 101010101.0
  },
  {
      "Name": "ANKIT",
      CustomerImage:avatar2,"Phone": 8779249137.0
  },
  {
      "Name": "Yuvraj Shewani",
      CustomerImage:avatar2,"Phone": 8045689310.0
  },
  {
      "Name": "devanshiiiii",
      CustomerImage:avatar2,"Phone": 9768244084.0
  },
  {
      "Name": "sharukh",
      CustomerImage:avatar2,"Phone": 7715046238.0
  },
  {
      "Name": "anish",
      CustomerImage:avatar2,"Phone": 9820547478.0
  },
  {
      "Name": "jALAnj",
      CustomerImage:avatar2,"Phone": 8847003654.0
  },
  {
      "Name": "SHAIBAM",
      CustomerImage:avatar2,"Phone": 9624559856.0
  },
  {
      "Name": "Sagar",
      CustomerImage:avatar2,"Phone": 9930553970.0
  },
  {
      "Name": "afreen",
      CustomerImage:avatar2,"Phone": 9769039715.0
  },
  {
      "Name": "BHAVESH SHETH",
      CustomerImage:avatar2,"Phone": 9820032013.0
  },
  {
      "Name": "pragati",
      CustomerImage:avatar2,"Phone": 7088887781.0
  },
  {
      "Name": "akhil",
      CustomerImage:avatar2,"Phone": 9819229205.0
  },
  {
      "Name": "Juhi K",
      CustomerImage:avatar2,"Phone": 7999750066.0
  },
  {
      "Name": "rapika",
      CustomerImage:avatar2,"Phone": 9711906882.0
  },
  {
      "Name": "rupal thakre",
      CustomerImage:avatar2,"Phone": 8879006176.0
  },
  {
      "Name": "RITESH MEHTA",
      CustomerImage:avatar2,"Phone": 9819886870.0
  },
  {
      "Name": "Zenith Corporation",
      CustomerImage:avatar2,"Phone": 8046803296.0
  },
  {
      "Name": "punneet",
      CustomerImage:avatar2,"Phone": 6283132339.0
  },
  {
      "Name": "ZUBRAZ",
      CustomerImage:avatar2,"Phone": 8780333465.0
  },
  {
      "Name": "shubham",
      CustomerImage:avatar2,"Phone": 8946988461.0
  },
  {
      "Name": "tina",
      CustomerImage:avatar2,"Phone": 9967349286.0
  },
  {
      "Name": "hitne",
      CustomerImage:avatar2,"Phone": 9860667744.0
  },
  {
      "Name": "abhilash",
      CustomerImage:avatar2,"Phone": 9847607644.0
  },
  {
      "Name": "RAJ SHAH",
      CustomerImage:avatar2,"Phone": 7558444101.0
  },
  {
      "Name": "Kasvi",
      CustomerImage:avatar2,"Phone": 9819986943.0
  },
  {
      "Name": "saurabh",
      CustomerImage:avatar2,"Phone": 9819783535.0
  },
  {
      "Name": "inaya",
      CustomerImage:avatar2,"Phone": 9550820547.0
  },
  {
      "Name": "faiza",
      CustomerImage:avatar2,"Phone": 9920932908.0
  },
  {
      "Name": "kanika",
      CustomerImage:avatar2,"Phone": 9870418873.0
  },
  {
      "Name": "mihika",
      CustomerImage:avatar2,"Phone": 7017481082.0
  },
  {
      "Name": "Ravish",
      CustomerImage:avatar2,"Phone": 9619178347.0
  },
  {
      "Name": "khushi",
      CustomerImage:avatar2,"Phone": 7999054010.0
  },
  {
      "Name": "dheer",
      CustomerImage:avatar2,"Phone": 9638633133.0
  },
  {
      "Name": "yash deora",
      CustomerImage:avatar2,"Phone": 7977131797.0
  },
  {
      "Name": "SAHEBA",
      CustomerImage:avatar2,"Phone": 8899496803.0
  },
  {
      "Name": "harshaaall",
      CustomerImage:avatar2,"Phone": 9702099930.0
  },
  {
      "Name": "M",
      CustomerImage:avatar2,"Phone": 9820787973.0
  },
  {
      "Name": "subarna",
      CustomerImage:avatar2,"Phone": 8082427220.0
  },
  {
      "Name": "shivangi",
      CustomerImage:avatar2,"Phone": 9559562063.0
  },
  {
      "Name": "rishi tapa",
      CustomerImage:avatar2,"Phone": 7709009197.0
  },
  {
      "Name": "aiaan",
      CustomerImage:avatar2,"Phone": 8275178569.0
  },
  {
      "Name": "devanshhh",
      CustomerImage:avatar2,"Phone": 8369273690.0
  },
  {
      "Name": "amil lakhani",
      CustomerImage:avatar2,"Phone": 9820515836.0
  },
  {
      "Name": "Trisha Mehra",
      CustomerImage:avatar2,"Phone": 9819800446.0
  },
  {
      "Name": "pratik",
      CustomerImage:avatar2,"Phone": 9819892504.0
  },
  {
      "Name": "kamran",
      CustomerImage:avatar2,"Phone": 9500967411.0
  },
  {
      "Name": "priti",
      CustomerImage:avatar2,"Phone": 9742480812.0
  },
  {
      "Name": "vivek latte /tap water",
      CustomerImage:avatar2,"Phone": 9867616029.0
  },
  {
      "Name": "Jeet Shah",
      CustomerImage:avatar2,"Phone": 9773458019.0
  },
  {
      "Name": "pratyush",
      CustomerImage:avatar2,"Phone": 9833898285.0
  },
  {
      "Name": "Rashi Dr",
      CustomerImage:avatar2,"Phone": 9821522669.0
  },
  {
      "Name": "rahulllllll",
      CustomerImage:avatar2,"Phone": 9920571998.0
  },
  {
      "Name": "Manas",
      CustomerImage:avatar2,"Phone": 9769901020.0
  },
  {
      "Name": "hanshuka",
      CustomerImage:avatar2,"Phone": 6289843465.0
  },
  {
      "Name": "harsh",
      CustomerImage:avatar2,"Phone": 7718855147.0
  },
  {
      "Name": "Surekha Mam",
      CustomerImage:avatar2,"Phone": 3332222444.0
  },
  {
      "Name": "SIDDHART",
      CustomerImage:avatar2,"Phone": 9811637433.0
  },
  {
      "Name": "ishan",
      CustomerImage:avatar2,"Phone": 9619445567.0
  },
  {
      "Name": "tanisha",
      CustomerImage:avatar2,"Phone": 9845001414.0
  },
  {
      "Name": "sandeep",
      CustomerImage:avatar2,"Phone": 9819392217.0
  },
  {
      "Name": "Roshani",
      CustomerImage:avatar2,"Phone": 9769228987.0
  },
  {
      "Name": "khush mehta",
      CustomerImage:avatar2,"Phone": 9819831806.0
  },
  {
      "Name": "Heer",
      CustomerImage:avatar2,"Phone": 7506988110.0
  },
  {
      "Name": "Mr. / almondhot cho",
      CustomerImage:avatar2,"Phone": 9619955886.0
  },
  {
      "Name": "pritesh",
      CustomerImage:avatar2,"Phone": 8335888877.0
  },
  {
      "Name": "navya",
      CustomerImage:avatar2,"Phone": 9130096696.0
  },
  {
      "Name": "kairav",
      CustomerImage:avatar2,"Phone": 8369241442.0
  },
  {
      "Name": "wilbert",
      CustomerImage:avatar2,"Phone": 9679123312.0
  },
  {
      "Name": "raj",
      CustomerImage:avatar2,"Phone": 9920170598.0
  },
  {
      "Name": "ROUNAK SHAH",
      CustomerImage:avatar2,"Phone": 7057414127.0
  },
  {
      "Name": "dhruv",
      CustomerImage:avatar2,"Phone": 9742021980.0
  },
  {
      "Name": "ananiya",
      CustomerImage:avatar2,"Phone": 9108907003.0
  },
  {
      "Name": "vishrut",
      CustomerImage:avatar2,"Phone": 9909050423.0
  },
  {
      "Name": "lavnesh",
      CustomerImage:avatar2,"Phone": 9619252237.0
  },
  {
      "Name": "nikita",
      CustomerImage:avatar2,"Phone": 9619767646.0
  },
  {
      "Name": "rahul",
      CustomerImage:avatar2,"Phone": 9820538528.0
  },
  {
      "Name": "sneh",
      CustomerImage:avatar2,"Phone": 8200297696.0
  },
  {
      "Name": "pratik",
      CustomerImage:avatar2,"Phone": 9833555500.0
  },
  {
      "Name": "natasha",
      CustomerImage:avatar2,"Phone": 9820739785.0
  },
  {
      "Name": "anezka",
      CustomerImage:avatar2,"Phone": 9820409072.0
  },
  {
      "Name": "sneha",
      CustomerImage:avatar2,"Phone": 9920967745.0
  },
  {
      "Name": "rohit",
      CustomerImage:avatar2,"Phone": 9820638909.0
  },
  {
      "Name": "dhruv",
      CustomerImage:avatar2,"Phone": 8779186496.0
  },
  {
      "Name": "isha",
      CustomerImage:avatar2,"Phone": 9029601601.0
  },
  {
      "Name": "vinit joshi",
      CustomerImage:avatar2,"Phone": 9820476738.0
  },
  {
      "Name": "rishu",
      CustomerImage:avatar2,"Phone": 9137426454.0
  },
  {
      "Name": "kashish",
      CustomerImage:avatar2,"Phone": 9867041134.0
  },
  {
      "Name": "irfan",
      CustomerImage:avatar2,"Phone": 9766423996.0
  },
  {
      "Name": "dhruhvvvvvv",
      CustomerImage:avatar2,"Phone": 9928424494.0
  },
  {
      "Name": "Rushabh Mataliya",
      CustomerImage:avatar2,"Phone": 9833745588.0
  },
  {
      "Name": "cristina",
      CustomerImage:avatar2,"Phone": 9920248104.0
  },
  {
      "Name": "Minal / eazy diner Hrish",
      CustomerImage:avatar2,"Phone": 9819225115.0
  },
  {
      "Name": "eshanya",
      CustomerImage:avatar2,"Phone": 9968854402.0
  },
  {
      "Name": "dara",
      CustomerImage:avatar2,"Phone": 9820060818.0
  },
  {
      "Name": "vansh",
      CustomerImage:avatar2,"Phone": 9836670761.0
  },
  {
      "Name": "sandra",
      CustomerImage:avatar2,"Phone": 9582219568.0
  },
  {
      "Name": "shriya",
      CustomerImage:avatar2,"Phone": 9920961570.0
  },
  {
      "Name": "arnald",
      CustomerImage:avatar2,"Phone": 9667574081.0
  },
  {
      "Name": "ankit",
      CustomerImage:avatar2,"Phone": 7718872677.0
  },
  {
      "Name": "shewta",
      CustomerImage:avatar2,"Phone": 9892327577.0
  },
  {
      "Name": "pupul",
      CustomerImage:avatar2,"Phone": 8788299907.0
  },
  {
      "Name": "ANUJ",
      CustomerImage:avatar2,"Phone": 9821270335.0
  },
  {
      "Name": "harshita",
      CustomerImage:avatar2,"Phone": 9660828116.0
  },
  {
      "Name": "Aksh",
      CustomerImage:avatar2,"Phone": 9930924421.0
  },
  {
      "Name": "shivansh",
      CustomerImage:avatar2,"Phone": 7522802345.0
  },
  {
      "Name": "urvi",
      CustomerImage:avatar2,"Phone": 9820957826.0
  },
  {
      "Name": "ayushi",
      CustomerImage:avatar2,"Phone": 7837605001.0
  },
  {
      "Name": "Siddhart",
      CustomerImage:avatar2,"Phone": 9819886029.0
  },
  {
      "Name": "minal",
      CustomerImage:avatar2,"Phone": 8980967092.0
  },
  {
      "Name": "manav",
      CustomerImage:avatar2,"Phone": 9922915678.0
  },
  {
      "Name": "tanaya",
      CustomerImage:avatar2,"Phone": 8369439296.0
  },
  {
      "Name": "udyani",
      CustomerImage:avatar2,"Phone": 9820175524.0
  },
  {
      "Name": "pooja",
      CustomerImage:avatar2,"Phone": 9930040801.0
  },
  {
      "Name": "dorothy",
      CustomerImage:avatar2,"Phone": 8753945517.0
  },
  {
      "Name": "appurva",
      CustomerImage:avatar2,"Phone": 9914362376.0
  },
  {
      "Name": "anshuu",
      CustomerImage:avatar2,"Phone": 9819970409.0
  },
  {
      "Name": "simran aswani",
      CustomerImage:avatar2,"Phone": 9769589128.0
  },
  {
      "Name": "PRIYAAAAMM",
      CustomerImage:avatar2,"Phone": 8076732620.0
  },
  {
      "Name": "rudrangshu",
      CustomerImage:avatar2,"Phone": 7008658559.0
  },
  {
      "Name": "muskan",
      CustomerImage:avatar2,"Phone": 7499233106.0
  },
  {
      "Name": "rohit",
      CustomerImage:avatar2,"Phone": 8082189518.0
  },
  {
      "Name": "shubha",
      CustomerImage:avatar2,"Phone": 9082182757.0
  },
  {
      "Name": "dhriti",
      CustomerImage:avatar2,"Phone": 8283009841.0
  },
  {
      "Name": "shivani",
      CustomerImage:avatar2,"Phone": 8983631156.0
  },
  {
      "Name": "monica",
      CustomerImage:avatar2,"Phone": 9920590147.0
  },
  {
      "Name": "gomes",
      CustomerImage:avatar2,"Phone": 9769145524.0
  },
  {
      "Name": "resham",
      CustomerImage:avatar2,"Phone": 9920299491.0
  },
  {
      "Name": "alden",
      CustomerImage:avatar2,"Phone": 7506626750.0
  },
  {
      "Name": "ananya",
      CustomerImage:avatar2,"Phone": 8595634464.0
  },
  {
      "Name": "bhavishya",
      CustomerImage:avatar2,"Phone": 7600966975.0
  },
  {
      "Name": "Koyel Chakraborty",
      CustomerImage:avatar2,"Phone": 565099773.0
  },
  {
      "Name": "mahesh",
      CustomerImage:avatar2,"Phone": 7977260074.0
  },
  {
      "Name": "guest",
      CustomerImage:avatar2,"Phone": 9769202120.0
  },
  {
      "Name": "Aksh dhanesha",
      CustomerImage:avatar2,"Phone": 7016018020.0
  },
  {
      "Name": "RIYAZ IT DEPT",
      CustomerImage:avatar2,"Phone": 9833127620.0
  },
  {
      "Name": "ana",
      CustomerImage:avatar2,"Phone": 9819302321.0
  },
  {
      "Name": "poulomi",
      CustomerImage:avatar2,"Phone": 9920631991.0
  },
  {
      "Name": "koyel",
      CustomerImage:avatar2,"Phone": 9874610929.0
  },
  {
      "Name": "diya",
      CustomerImage:avatar2,"Phone": 9619823407.0
  },
  {
      "Name": "aadit agerwala",
      CustomerImage:avatar2,"Phone": 8588008033.0
  },
  {
      "Name": "sharan",
      CustomerImage:avatar2,"Phone": 9619958896.0
  },
  {
      "Name": "snehq",
      CustomerImage:avatar2,"Phone": 9833925083.0
  },
  {
      "Name": "sunil",
      CustomerImage:avatar2,"Phone": 9920399205.0
  },
  {
      "Name": "Vininjay Sir / sujay / student",
      CustomerImage:avatar2,"Phone": 9869066351.0
  },
  {
      "Name": "aarav",
      CustomerImage:avatar2,"Phone": 7045391163.0
  },
  {
      "Name": "shyashi",
      CustomerImage:avatar2,"Phone": 9152557962.0
  },
  {
      "Name": "Raj sir",
      CustomerImage:avatar2,"Phone": 9821346034.0
  },
  {
      "Name": "gauri",
      CustomerImage:avatar2,"Phone": 8174079999.0
  },
  {
      "Name": "aaryan",
      CustomerImage:avatar2,"Phone": 9892363581.0
  },
  {
      "Name": "Roberto",
      CustomerImage:avatar2,"Phone": 7042877428.0
  },
  {
      "Name": "shreyash",
      CustomerImage:avatar2,"Phone": 9432136456.0
  },
  {
      "Name": "Dhruv",
      CustomerImage:avatar2,"Phone": 9979738071.0
  },
  {
      "Name": "janbi",
      CustomerImage:avatar2,"Phone": 9773455932.0
  },
  {
      "Name": "Jay Vekariya",
      CustomerImage:avatar2,"Phone": 9324164246.0
  },
  {
      "Name": "kahaan",
      CustomerImage:avatar2,"Phone": 9930202547.0
  },
  {
      "Name": "shiddhart",
      CustomerImage:avatar2,"Phone": 9920611097.0
  },
  {
      "Name": "aditya popat",
      CustomerImage:avatar2,"Phone": 8097949799.0
  },
  {
      "Name": "devem",
      CustomerImage:avatar2,"Phone": 7620113399.0
  },
  {
      "Name": "hasrh",
      CustomerImage:avatar2,"Phone": 7718855147.0
  },
  {
      "Name": "parthiv",
      CustomerImage:avatar2,"Phone": 9870101979.0
  },
  {
      "Name": "shubah",
      CustomerImage:avatar2,"Phone": 9730080167.0
  },
  {
      "Name": "devika",
      CustomerImage:avatar2,"Phone": 7700003159.0
  },
  {
      "Name": "akshat",
      CustomerImage:avatar2,"Phone": 9021626784.0
  },
  {
      "Name": "Bijay Sir / Account/ banker",
      CustomerImage:avatar2,"Phone": 7021157739.0
  },
  {
      "Name": "vidhee",
      CustomerImage:avatar2,"Phone": 9920037180.0
  },
  {
      "Name": "shivani",
      CustomerImage:avatar2,"Phone": 8412021368.0
  },
  {
      "Name": "zahid",
      CustomerImage:avatar2,"Phone": 9967019199.0
  },
  {
      "Name": "viashal",
      CustomerImage:avatar2,"Phone": 9820442427.0
  },
  {
      "Name": "rishab",
      CustomerImage:avatar2,"Phone": 9819869097.0
  },
  {
      "Name": "Simran",
      CustomerImage:avatar2,"Phone": 9819547798.0
  },
  {
      "Name": "payal",
      CustomerImage:avatar2,"Phone": 9619499437.0
  },
  {
      "Name": "RASIK",
      CustomerImage:avatar2,"Phone": 9820603677.0
  },
  {
      "Name": "nikita",
      CustomerImage:avatar2,"Phone": 7018379579.0
  },
  {
      "Name": "aviral",
      CustomerImage:avatar2,"Phone": 7610462345.0
  },
  {
      "Name": "prdeep",
      CustomerImage:avatar2,"Phone": 9819867521.0
  },
  {
      "Name": "Menal Mam",
      CustomerImage:avatar2,"Phone": 9619986376.0
  },
  {
      "Name": "MALAV",
      CustomerImage:avatar2,"Phone": 9819343887.0
  },
  {
      "Name": "RITIKA",
      CustomerImage:avatar2,"Phone": 7738976348.0
  },
  {
      "Name": "AFTAB",
      CustomerImage:avatar2,"Phone": 7400321789.0
  },
  {
      "Name": "hasnin",
      CustomerImage:avatar2,"Phone": 9920442334.0
  },
  {
      "Name": "LAVINA",
      CustomerImage:avatar2,"Phone": 9920773201.0
  },
  {
      "Name": "HIMANSHU",
      CustomerImage:avatar2,"Phone": 8169305342.0
  },
  {
      "Name": "MAHADEV",
      CustomerImage:avatar2,"Phone": 9892646780.0
  },
  {
      "Name": "neha",
      CustomerImage:avatar2,"Phone": 9619718945.0
  },
  {
      "Name": "anchan",
      CustomerImage:avatar2,"Phone": 9899893236.0
  },
  {
      "Name": "anamika",
      CustomerImage:avatar2,"Phone": 9820734180.0
  },
  {
      "Name": "manan",
      CustomerImage:avatar2,"Phone": 9766785333.0
  },
  {
      "Name": "Sachin Mehta",
      CustomerImage:avatar2,"Phone": 9892255555.0
  },
  {
      "Name": "abhai",
      CustomerImage:avatar2,"Phone": 9819400556.0
  },
  {
      "Name": "sanjay",
      CustomerImage:avatar2,"Phone": 9832285670.0
  },
  {
      "Name": "jesal mehta",
      CustomerImage:avatar2,"Phone": 9820415857.0
  },
  {
      "Name": "Babu Anna  Sir",
      CustomerImage:avatar2,"Phone": 9869441122.0
  },
  {
      "Name": "harshhhhhhhhh",
      CustomerImage:avatar2,"Phone": 9372505653.0
  },
  {
      "Name": "himanshi",
      CustomerImage:avatar2,"Phone": 8320666398.0
  },
  {
      "Name": "sanskriti",
      CustomerImage:avatar2,"Phone": 9810245197.0
  },
  {
      "Name": "kamram",
      CustomerImage:avatar2,"Phone": 7208350226.0
  },
  {
      "Name": "dhristi",
      CustomerImage:avatar2,"Phone": 9372704482.0
  },
  {
      "Name": "rishabh",
      CustomerImage:avatar2,"Phone": 9819907574.0
  },
  {
      "Name": "YASEEN HK",
      CustomerImage:avatar2,"Phone": 6297609592.0
  },
  {
      "Name": "adhya",
      CustomerImage:avatar2,"Phone": 8100120044.0
  },
  {
      "Name": "sitakshi",
      CustomerImage:avatar2,"Phone": 9953522050.0
  },
  {
      "Name": "vinayak",
      CustomerImage:avatar2,"Phone": 9468603137.0
  },
  {
      "Name": "Adhiraj",
      CustomerImage:avatar2,"Phone": 7290839824.0
  },
  {
      "Name": "ashish",
      CustomerImage:avatar2,"Phone": 9810500729.0
  },
  {
      "Name": "kunal",
      CustomerImage:avatar2,"Phone": 9820422791.0
  },
  {
      "Name": "jharna",
      CustomerImage:avatar2,"Phone": 9819336470.0
  },
  {
      "Name": "Misha",
      CustomerImage:avatar2,"Phone": 9998044834.0
  },
  {
      "Name": "kiran",
      CustomerImage:avatar2,"Phone": 9821120253.0
  },
  {
      "Name": "IMAAD",
      CustomerImage:avatar2,"Phone": 8097579072.0
  },
  {
      "Name": "tanish",
      CustomerImage:avatar2,"Phone": 9006392074.0
  },
  {
      "Name": "Vininjay Sir/ guest",
      CustomerImage:avatar2,"Phone": 9869066351.0
  },
  {
      "Name": "nidhi",
      CustomerImage:avatar2,"Phone": 9978626024.0
  },
  {
      "Name": "ishika",
      CustomerImage:avatar2,"Phone": 9654502929.0
  },
  {
      "Name": "akshat",
      CustomerImage:avatar2,"Phone": 7986207036.0
  }
]

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Kundan',
    Country: 'IND',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Allahbaksh Shaikh',
    Country: 'IND',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Aftab',
    Country: 'IND',
    EmployeeImage:
    avatar,
  },
  {
    EmployeeID: 4,
    Name: 'Naresh Rathod',
    Country: 'IND',
    EmployeeImage:
    avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Sabina Khan',
    Country: 'IND',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  
];

export const ordersData =[ {
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:25:22",
  "Invoice": "21573",
  "Item Name": "ORANGE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:17:11",
  "Invoice": "21572",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:17:11",
  "Invoice": "21572",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Coconut Nankhatai (with Egg)",
  "Price": 285.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Cafe Latte (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 02:11:30",
  "Invoice": "21571",
  "Item Name": "Add On Syrup (Add On Caramel Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 01:46:51",
  "Invoice": "21570",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 01:46:51",
  "Invoice": "21570",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 01:18:00",
  "Invoice": "21569",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 01:18:00",
  "Invoice": "21569",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:55:43",
  "Invoice": "21568",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:55:43",
  "Invoice": "21568",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:55:43",
  "Invoice": "21568",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:36:49",
  "Invoice": "21567",
  "Item Name": "Iced Americano (450 Ml)",
  "Price": 288.75
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:09:15",
  "Invoice": "C2389",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:06:28",
  "Invoice": "21566",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:06:28",
  "Invoice": "21566",
  "Item Name": "Mix Berliner 2 Pcs (Lotus Biscoff Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:06:28",
  "Invoice": "21566",
  "Item Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:02:23",
  "Invoice": "21565",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:01:57",
  "Invoice": "21564",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:00:23",
  "Invoice": "21563",
  "Item Name": "Almond Honey Latte (250 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-29 00:00:23",
  "Invoice": "21563",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:49:35",
  "Invoice": "21562",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:49:35",
  "Invoice": "21562",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:47:29",
  "Invoice": "21561",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:37:25",
  "Invoice": "21560",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:23:09",
  "Invoice": "21559",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:23:09",
  "Invoice": "21559",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:23:09",
  "Invoice": "21559",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:23:09",
  "Invoice": "21559",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:22:03",
  "Invoice": "21558",
  "Item Name": "Pappa Roti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:12:16",
  "Invoice": "21557",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 85.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:12:16",
  "Invoice": "21557",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 85.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:10:06",
  "Invoice": "21556",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:06:44",
  "Invoice": "C2388",
  "Item Name": "Tartlets (Salted Caramel Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:04:41",
  "Invoice": "21555",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:04:41",
  "Invoice": "21555",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:02:43",
  "Invoice": "21554",
  "Item Name": "Iced Latte (450 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:02:43",
  "Invoice": "21554",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:02:43",
  "Invoice": "21554",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 23:02:43",
  "Invoice": "21554",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:49:00",
  "Invoice": "21553",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:49:00",
  "Invoice": "21553",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:49:00",
  "Invoice": "21553",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:46:40",
  "Invoice": "21552",
  "Item Name": "French Press",
  "Price": 247.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:43:40",
  "Invoice": "21551",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:38:18",
  "Invoice": "21550",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:38:18",
  "Invoice": "21550",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:38:18",
  "Invoice": "21550",
  "Item Name": "Mix Berliner 2 Pcs (Blueberry Cheese Cake Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:38:18",
  "Invoice": "21550",
  "Item Name": "Mix Berliner 2 Pcs (Dark Choco Mousse Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:27:36",
  "Invoice": "21549",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:27:36",
  "Invoice": "21549",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:27:36",
  "Invoice": "21549",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:27:36",
  "Invoice": "21549",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:25:05",
  "Invoice": "C2387",
  "Item Name": "Strawbery Rosella Frangipani Tart",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:21:10",
  "Invoice": "C2386",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:21:10",
  "Invoice": "C2386",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:01:01",
  "Invoice": "21548",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:01:01",
  "Invoice": "21548",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:01:01",
  "Invoice": "21548",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:01:01",
  "Invoice": "21548",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 22:01:01",
  "Invoice": "21548",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:55:48",
  "Invoice": "21547",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:55:48",
  "Invoice": "21547",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:55:48",
  "Invoice": "21547",
  "Item Name": "Iced Latte (450 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:55:48",
  "Invoice": "21547",
  "Item Name": "Classic Frappe (450 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:55:48",
  "Invoice": "21547",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:51:52",
  "Invoice": "21546",
  "Item Name": "Cappucino (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:47:52",
  "Invoice": "C2385",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:43:25",
  "Invoice": "C2384",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:43:25",
  "Invoice": "C2384",
  "Item Name": "Caramel Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:25:50",
  "Invoice": "21545",
  "Item Name": "Baked Pav Bhaji",
  "Price": 80.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:25:50",
  "Invoice": "21545",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 84.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:13:33",
  "Invoice": "21544",
  "Item Name": "Madagascar Chocochip Frappe (350 Ml)",
  "Price": 456.75
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:08:52",
  "Invoice": "21543",
  "Item Name": "Almond Honey Latte (250 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 21:00:57",
  "Invoice": "21542",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 20:43:22",
  "Invoice": "21541",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 20:34:27",
  "Invoice": "21540",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 20:34:27",
  "Invoice": "21540",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 20:34:27",
  "Invoice": "21540",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 20:15:15",
  "Invoice": "21539",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:52:22",
  "Invoice": "21538",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:52:22",
  "Invoice": "21538",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:52:22",
  "Invoice": "21538",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:46:32",
  "Invoice": "21537",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:42:04",
  "Invoice": "21536",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:42:04",
  "Invoice": "21536",
  "Item Name": "Calzone Mix 3 Pc (Calzone Paneer)",
  "Price": 57.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:40:13",
  "Invoice": "21535",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:40:13",
  "Invoice": "21535",
  "Item Name": "Classic Frappe (450 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:32:08",
  "Invoice": "21534",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:28:32",
  "Invoice": "21533",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:28:32",
  "Invoice": "21533",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 19:05:07",
  "Invoice": "21532",
  "Item Name": "Pappa Roti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:57:58",
  "Invoice": "21531",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:57:58",
  "Invoice": "21531",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:57:58",
  "Invoice": "21531",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:45:57",
  "Invoice": "21530",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:39:38",
  "Invoice": "21529",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:39:38",
  "Invoice": "21529",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:34:59",
  "Invoice": "21528",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:34:59",
  "Invoice": "21528",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:26:43",
  "Invoice": "21527",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:26:43",
  "Invoice": "21527",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:26:43",
  "Invoice": "21527",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:25:33",
  "Invoice": "21526",
  "Item Name": "Origanal South Indian Frappe (450 ML)",
  "Price": 433.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:13:28",
  "Invoice": "21525",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:13:28",
  "Invoice": "21525",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 18:13:28",
  "Invoice": "21525",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:55:20",
  "Invoice": "21524",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:55:01",
  "Invoice": "21523",
  "Item Name": "Nariyal Irish Cream Frappe (350 Ml)",
  "Price": 414.75
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:54:41",
  "Invoice": "21522",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:54:41",
  "Invoice": "21522",
  "Item Name": "Sea Salt Dark Mocha Frappe (450 ML)",
  "Price": 371.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:52:37",
  "Invoice": "21521",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:52:37",
  "Invoice": "21521",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:52:37",
  "Invoice": "21521",
  "Item Name": "Berliner Mix 3 Pcs (Nutella Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:52:37",
  "Invoice": "21521",
  "Item Name": "Berliner Mix 3 Pcs (Dark Choco Mousse Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:52:37",
  "Invoice": "21521",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:51:04",
  "Invoice": "21520",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:32:48",
  "Invoice": "21519",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:32:48",
  "Invoice": "21519",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:32:48",
  "Invoice": "21519",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:29:01",
  "Invoice": "21518",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:29:01",
  "Invoice": "21518",
  "Item Name": "Mix Berliner 2 Pcs (Lotus Biscoff Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:29:01",
  "Invoice": "21518",
  "Item Name": "Mix Berliner 2 Pcs (Dark Choco Mousse Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:23:43",
  "Invoice": "C2383",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:23:43",
  "Invoice": "C2383",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:08:17",
  "Invoice": "21517",
  "Item Name": "Baked Pav Bhaji",
  "Price": 80.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 17:08:17",
  "Invoice": "21517",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 84.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:57:54",
  "Invoice": "21516",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:57:54",
  "Invoice": "21516",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:57:54",
  "Invoice": "21516",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:57:54",
  "Invoice": "21516",
  "Item Name": "Add On Syrup (Add On Irish Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:57:54",
  "Invoice": "21516",
  "Item Name": "Cafe Mocha (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:57:54",
  "Invoice": "21516",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:30:36",
  "Invoice": "21515",
  "Item Name": "Cold Brew",
  "Price": 315.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:25:03",
  "Invoice": "21514",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:25:03",
  "Invoice": "21514",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:25:03",
  "Invoice": "21514",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:25:03",
  "Invoice": "21514",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:12:27",
  "Invoice": "21513",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:12:27",
  "Invoice": "21513",
  "Item Name": "Sea Salt Dark Mocha Frappe (450 ML)",
  "Price": 371.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:12:27",
  "Invoice": "21513",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:12:27",
  "Invoice": "21513",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:10:18",
  "Invoice": "21512",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:10:18",
  "Invoice": "21512",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:10:18",
  "Invoice": "21512",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 16:10:18",
  "Invoice": "21512",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:51:25",
  "Invoice": "21511",
  "Item Name": "Vietnamese (450 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:51:25",
  "Invoice": "21511",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:51:25",
  "Invoice": "21511",
  "Item Name": "Cappucino (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:48:28",
  "Invoice": "21510",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:29:19",
  "Invoice": "21509",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:29:19",
  "Invoice": "21509",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:22:03",
  "Invoice": "21508",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:22:03",
  "Invoice": "21508",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:22:03",
  "Invoice": "21508",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:22:03",
  "Invoice": "21508",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:22:03",
  "Invoice": "21508",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:02:05",
  "Invoice": "21507",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 15:02:05",
  "Invoice": "21507",
  "Item Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 14:54:51",
  "Invoice": "21506",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 228.57
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 14:36:15",
  "Invoice": "21505",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 14:35:43",
  "Invoice": "21504",
  "Item Name": "Cappucino (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 14:35:43",
  "Invoice": "21504",
  "Item Name": "Aeropress",
  "Price": 247.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 14:35:43",
  "Invoice": "21504",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 14:11:45",
  "Invoice": "21503",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:55:28",
  "Invoice": "C2382",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (2 PCS)",
  "Price": 142.86
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:46:02",
  "Invoice": "21502",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:37:56",
  "Invoice": "21501",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 376.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:37:19",
  "Invoice": "21500",
  "Item Name": "Nariyal Irish Cream Frappe (450 ML)",
  "Price": 433.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:37:19",
  "Invoice": "21500",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 228.57
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:37:19",
  "Invoice": "21500",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 376.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:13:24",
  "Invoice": "21499",
  "Item Name": "Pour Over",
  "Price": 247.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 13:11:15",
  "Invoice": "21498",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 12:41:12",
  "Invoice": "21497",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 12:41:12",
  "Invoice": "21497",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 12:32:23",
  "Invoice": "21496",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:58:10",
  "Invoice": "21495",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:42:22",
  "Invoice": "21494",
  "Item Name": "Aeropress",
  "Price": 247.62
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:42:22",
  "Invoice": "21494",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:42:22",
  "Invoice": "21494",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:38:58",
  "Invoice": "21493",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:15:27",
  "Invoice": "21492",
  "Item Name": "Iced Americano (450 Ml)",
  "Price": 288.75
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:03:26",
  "Invoice": "21491",
  "Item Name": "Americano (350 ML)",
  "Price": 209.52
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 11:03:26",
  "Invoice": "21491",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 10:45:53",
  "Invoice": "21490",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 10:45:53",
  "Invoice": "21490",
  "Item Name": "Iced Americano (450 ML)",
  "Price": 209.52
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 10:34:54",
  "Invoice": "C2381",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 10:30:48",
  "Invoice": "21489",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 10:30:05",
  "Invoice": "21488",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 10:30:05",
  "Invoice": "21488",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 09:32:41",
  "Invoice": "21487",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 09:26:44",
  "Invoice": "21486",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 09:24:28",
  "Invoice": "21485",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 09:24:28",
  "Invoice": "21485",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 09:24:28",
  "Invoice": "21485",
  "Item Name": "Plain Nankhatai Veg",
  "Price": 285.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 09:08:54",
  "Invoice": "21484",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 08:06:55",
  "Invoice": "C2380",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 08:03:56",
  "Invoice": "C2379",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 07:52:47",
  "Invoice": "21483",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 07:52:47",
  "Invoice": "21483",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 07:52:47",
  "Invoice": "21483",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 07:52:47",
  "Invoice": "21483",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 07:52:47",
  "Invoice": "21483",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 05:30:44",
  "Invoice": "C2378",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 05:30:44",
  "Invoice": "C2378",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 05:28:08",
  "Invoice": "C2377",
  "Item Name": "White Loaf Bread",
  "Price": 104.76
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 05:25:19",
  "Invoice": "21482",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 04:27:12",
  "Invoice": "21481",
  "Item Name": "South Indian Filter Kaapi (250 Ml)",
  "Price": 252.0
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 04:16:33",
  "Invoice": "21480",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 04:16:33",
  "Invoice": "21480",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 03:26:35",
  "Invoice": "21479",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 03:26:35",
  "Invoice": "21479",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 03:08:13",
  "Invoice": "21478",
  "Item Name": "Hot Chocolate (250 Ml)",
  "Price": 367.5
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 02:48:14",
  "Invoice": "21477",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 02:48:14",
  "Invoice": "21477",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 02:48:14",
  "Invoice": "21477",
  "Item Name": "Hyderabadi Soya Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 02:48:14",
  "Invoice": "21477",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 02:48:14",
  "Invoice": "21477",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-28",
  "Timestamp": "2024-01-28 02:48:14",
  "Invoice": "21477",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:25:40",
  "Invoice": "21476",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:20:30",
  "Invoice": "21475",
  "Item Name": "Cappucino (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:20:30",
  "Invoice": "21475",
  "Item Name": "Berliner Mix 3 Pcs (Lotus Biscoff Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:15:41",
  "Invoice": "21474",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:03:36",
  "Invoice": "21473",
  "Item Name": "Mix Tartlet 6 Pcs (chocolate Tartlet)",
  "Price": 38.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:03:36",
  "Invoice": "21473",
  "Item Name": "Mix Tartlet 6 Pcs (salted Caramel tartlet)",
  "Price": 38.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:03:36",
  "Invoice": "21473",
  "Item Name": "Mix Tartlet 6 Pcs (kodai cheese tartlet)",
  "Price": 38.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:03:06",
  "Invoice": "21472",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:01:04",
  "Invoice": "21471",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:01:04",
  "Invoice": "21471",
  "Item Name": "Madagascar Chocochip Frappe (450 ML)",
  "Price": 357.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 02:01:04",
  "Invoice": "21471",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:58:39",
  "Invoice": "21470",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:58:39",
  "Invoice": "21470",
  "Item Name": "Kaapicino (350 ML)",
  "Price": 228.57
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:54:46",
  "Invoice": "21469",
  "Item Name": "Tartlets (Filter Kaapi Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:54:46",
  "Invoice": "21469",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:54:46",
  "Invoice": "21469",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:54:46",
  "Invoice": "21469",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:31:36",
  "Invoice": "21468",
  "Item Name": "Hazelnut Frappe (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:31:36",
  "Invoice": "21468",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:12:33",
  "Invoice": "21467",
  "Item Name": "South Indian Filter Kaapi (250 Ml)",
  "Price": 252.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:10:06",
  "Invoice": "21466",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:10:06",
  "Invoice": "21466",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:10:06",
  "Invoice": "21466",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:10:06",
  "Invoice": "21466",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:09:46",
  "Invoice": "21465",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:08:49",
  "Invoice": "21464",
  "Item Name": "Hazelnut Frappe (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:08:49",
  "Invoice": "21464",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:08:49",
  "Invoice": "21464",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:08:49",
  "Invoice": "21464",
  "Item Name": "Cafe Latte (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:08:49",
  "Invoice": "21464",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:02:41",
  "Invoice": "21463",
  "Item Name": "Tartlets (Filter Kaapi Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 01:02:41",
  "Invoice": "21463",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:26:04",
  "Invoice": "21462",
  "Item Name": "Sea Salt Dark Mocha (350 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:26:04",
  "Invoice": "21462",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:25:39",
  "Invoice": "21461",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:25:39",
  "Invoice": "21461",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:25:39",
  "Invoice": "21461",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:25:39",
  "Invoice": "21461",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:25:39",
  "Invoice": "21461",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:25:39",
  "Invoice": "21461",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:23:39",
  "Invoice": "21460",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:23:39",
  "Invoice": "21460",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:23:39",
  "Invoice": "21460",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:23:39",
  "Invoice": "21460",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:12:15",
  "Invoice": "21459",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:12:15",
  "Invoice": "21459",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:12:07",
  "Invoice": "21458",
  "Item Name": "Vanilla Praline (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:12:07",
  "Invoice": "21458",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:04:25",
  "Invoice": "21457",
  "Item Name": "Irish Americano (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-28 00:00:55",
  "Invoice": "21456",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:43:07",
  "Invoice": "21455",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:43:07",
  "Invoice": "21455",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:43:07",
  "Invoice": "21455",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:43:07",
  "Invoice": "21455",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:38:54",
  "Invoice": "21454",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:38:54",
  "Invoice": "21454",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:31:47",
  "Invoice": "21453",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:30:29",
  "Invoice": "21452",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:30:29",
  "Invoice": "21452",
  "Item Name": "Cafe Mocha (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:30:29",
  "Invoice": "21452",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:30:29",
  "Invoice": "21452",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:26:01",
  "Invoice": "21451",
  "Item Name": "Vanilla Praline (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:26:01",
  "Invoice": "21451",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:20:45",
  "Invoice": "21450",
  "Item Name": "Vanilla Praline (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:20:45",
  "Invoice": "21450",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:20:45",
  "Invoice": "21450",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:15:20",
  "Invoice": "21449",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:15:20",
  "Invoice": "21449",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:15:20",
  "Invoice": "21449",
  "Item Name": "Tartlets (Kacha Nimbu Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:13:38",
  "Invoice": "21448",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:07:31",
  "Invoice": "C2376",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:07:31",
  "Invoice": "C2376",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 23:06:13",
  "Invoice": "21447",
  "Item Name": "Vietnamese (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:52:21",
  "Invoice": "21446",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:52:21",
  "Invoice": "21446",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:52:21",
  "Invoice": "21446",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:33:08",
  "Invoice": "21445",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:33:08",
  "Invoice": "21445",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:31:05",
  "Invoice": "21444",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:16:34",
  "Invoice": "21436",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:21:24",
  "Invoice": "21443",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:20:28",
  "Invoice": "21442",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (3 PCS)",
  "Price": 200.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 22:18:05",
  "Invoice": "21441",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:45:45",
  "Invoice": "21440",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:45:45",
  "Invoice": "21440",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:45:45",
  "Invoice": "21440",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:43:09",
  "Invoice": "21439",
  "Item Name": "South Indian Filter Kaapi (250 Ml)",
  "Price": 252.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:29:55",
  "Invoice": "C2375",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:21:19",
  "Invoice": "21438",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:19:57",
  "Invoice": "21437",
  "Item Name": "Vietnamese (350 Ml)",
  "Price": 414.75
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:16:34",
  "Invoice": "21436",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:16:34",
  "Invoice": "21436",
  "Item Name": "Add On Syrup (Add On Irish Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:16:34",
  "Invoice": "21436",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:16:34",
  "Invoice": "21436",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (2 PCS)",
  "Price": 142.86
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:16:34",
  "Invoice": "21436",
  "Item Name": "Strawbery Rosella Frangipani Tart",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:02:52",
  "Invoice": "21435",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 21:02:52",
  "Invoice": "21435",
  "Item Name": "ORANGE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:50:21",
  "Invoice": "C2374",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:33:27",
  "Invoice": "C2373",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:25:41",
  "Invoice": "21434",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:25:41",
  "Invoice": "21434",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:25:41",
  "Invoice": "21434",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:23:22",
  "Invoice": "21433",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:23:22",
  "Invoice": "21433",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:20:07",
  "Invoice": "21432",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:17:51",
  "Invoice": "21431",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:17:51",
  "Invoice": "21431",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:15:20",
  "Invoice": "21430",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:15:20",
  "Invoice": "21430",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:12:38",
  "Invoice": "21429",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 20:12:38",
  "Invoice": "21429",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:58:07",
  "Invoice": "21428",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:58:07",
  "Invoice": "21428",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:58:07",
  "Invoice": "21428",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:58:07",
  "Invoice": "21428",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:58:07",
  "Invoice": "21428",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:08:50",
  "Invoice": "21427",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 19:08:50",
  "Invoice": "21427",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:56:06",
  "Invoice": "C2372",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:53:52",
  "Invoice": "C2371",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:53:52",
  "Invoice": "C2371",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:51:16",
  "Invoice": "21426",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:51:16",
  "Invoice": "21426",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:45:48",
  "Invoice": "21425",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:24:02",
  "Invoice": "21424",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:24:02",
  "Invoice": "21424",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:24:02",
  "Invoice": "21424",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:24:02",
  "Invoice": "21424",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 18:24:02",
  "Invoice": "21424",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:57:24",
  "Invoice": "21423",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:57:24",
  "Invoice": "21423",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:57:24",
  "Invoice": "21423",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:57:24",
  "Invoice": "21423",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:38",
  "Invoice": "21421",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:53:41",
  "Invoice": "C2370",
  "Item Name": "CHILLI GUVAVA JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:54",
  "Invoice": "21422",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:54",
  "Invoice": "21422",
  "Item Name": "ORANGE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:38",
  "Invoice": "21421",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:24",
  "Invoice": "21420",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:24",
  "Invoice": "21420",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:24",
  "Invoice": "21420",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:44:24",
  "Invoice": "21420",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:36:37",
  "Invoice": "21419",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:36:37",
  "Invoice": "21419",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:35:01",
  "Invoice": "21418",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:35:01",
  "Invoice": "21418",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:24:02",
  "Invoice": "21417",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:23:15",
  "Invoice": "21416",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:23:15",
  "Invoice": "21416",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:12:21",
  "Invoice": "21415",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:12:21",
  "Invoice": "21415",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 17:12:21",
  "Invoice": "21415",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:56:15",
  "Invoice": "21414",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:56:15",
  "Invoice": "21414",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:56:15",
  "Invoice": "21414",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:56:15",
  "Invoice": "21414",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:35:02",
  "Invoice": "21413",
  "Item Name": "Classic Frappe (350 Ml)",
  "Price": 378.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:35:02",
  "Invoice": "21413",
  "Item Name": "Cafe Mocha (250 Ml)",
  "Price": 320.25
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:32:10",
  "Invoice": "21412",
  "Item Name": "Cashew Nuts Nankhatai Veg",
  "Price": 371.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:32:10",
  "Invoice": "21412",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:32:10",
  "Invoice": "21412",
  "Item Name": "Origanal South Indian Frappe (450 ML)",
  "Price": 433.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:32:10",
  "Invoice": "21412",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 74.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:22:40",
  "Invoice": "21411",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 376.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:22:40",
  "Invoice": "21411",
  "Item Name": "Cafe Mocha (350 ML)",
  "Price": 323.81
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 16:07:59",
  "Invoice": "21410",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 228.57
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 15:55:56",
  "Invoice": "21409",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 15:48:18",
  "Invoice": "21408",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 15:31:55",
  "Invoice": "C2369",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 15:20:45",
  "Invoice": "21407",
  "Item Name": "Classic Frappe (350 Ml)",
  "Price": 378.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 14:34:34",
  "Invoice": "21406",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 14:34:34",
  "Invoice": "21406",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 14:14:22",
  "Invoice": "21405",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 14:14:22",
  "Invoice": "21405",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 14:08:07",
  "Invoice": "C2368",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 13:48:54",
  "Invoice": "21404",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 13:41:47",
  "Invoice": "21403",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 74.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 13:41:47",
  "Invoice": "21403",
  "Item Name": "Cappucino (350 ML)",
  "Price": 309.52
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 13:41:44",
  "Invoice": "C2367",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 13:40:19",
  "Invoice": "C2366",
  "Item Name": "Gluten Free Hazelnut Brownie",
  "Price": 161.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 13:22:27",
  "Invoice": "21402",
  "Item Name": "Classic Frappe (450 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:45:16",
  "Invoice": "21401",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:33:10",
  "Invoice": "21400",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:31:08",
  "Invoice": "21399",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 376.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:24:15",
  "Invoice": "21398",
  "Item Name": "Iced Americano (450 ML)",
  "Price": 209.52
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:18:43",
  "Invoice": "21397",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:18:43",
  "Invoice": "21397",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 12:18:43",
  "Invoice": "21397",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:50:16",
  "Invoice": "21396",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:46:57",
  "Invoice": "21395",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:42:21",
  "Invoice": "21394",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:42:21",
  "Invoice": "21394",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:40:05",
  "Invoice": "C2365",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:37:05",
  "Invoice": "21393",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:37:05",
  "Invoice": "21393",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:37:05",
  "Invoice": "21393",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:37:05",
  "Invoice": "21393",
  "Item Name": "Whole Wheat Ladi Pav 4 Pc",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:32:37",
  "Invoice": "21392",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:28:46",
  "Invoice": "21391",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:07:04",
  "Invoice": "21390",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:07:04",
  "Invoice": "21390",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:07:04",
  "Invoice": "21390",
  "Item Name": "Almond Honey Latte (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:07:04",
  "Invoice": "21390",
  "Item Name": "Berliner Mix 3 Pcs (Lotus Biscoff Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:07:04",
  "Invoice": "21390",
  "Item Name": "Berliner Mix 3 Pcs (Nutella Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:07:04",
  "Invoice": "21390",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 11:05:40",
  "Invoice": "21389",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 10:41:54",
  "Invoice": "C2364",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 10:41:54",
  "Invoice": "C2364",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 10:40:57",
  "Invoice": "C2363",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 10:40:57",
  "Invoice": "C2363",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 10:34:53",
  "Invoice": "21388",
  "Item Name": "CHILLI GUVAVA JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 10:22:41",
  "Invoice": "21387",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 09:55:58",
  "Invoice": "21386",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 09:47:44",
  "Invoice": "21385",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 09:47:44",
  "Invoice": "21385",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 08:31:44",
  "Invoice": "21384",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 08:16:17",
  "Invoice": "21383",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 08:16:17",
  "Invoice": "21383",
  "Item Name": "Pour Over",
  "Price": 247.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:52:50",
  "Invoice": "21382",
  "Item Name": "Madagascar Hot Chocolate (350 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:52:50",
  "Invoice": "21382",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:47:04",
  "Invoice": "21381",
  "Item Name": "Plain Nankhatai Veg",
  "Price": 285.71
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:47:04",
  "Invoice": "21381",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (3 PCS)",
  "Price": 200.0
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Strawbery Rosella Frangipani Tart",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 07:39:44",
  "Invoice": "21380",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 05:28:46",
  "Invoice": "C2362",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 05:28:46",
  "Invoice": "C2362",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:48:58",
  "Invoice": "21379",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:48:58",
  "Invoice": "21379",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:48:58",
  "Invoice": "21379",
  "Item Name": "Tartlets (Filter Kaapi Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:48:58",
  "Invoice": "21379",
  "Item Name": "Tartlets (Salted Caramel Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:48:58",
  "Invoice": "21379",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:04:44",
  "Invoice": "21378",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:04:44",
  "Invoice": "21378",
  "Item Name": "Vietnamese (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:03:13",
  "Invoice": "21377",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:03:13",
  "Invoice": "21377",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:03:13",
  "Invoice": "21377",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 03:03:13",
  "Invoice": "21377",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-27",
  "Timestamp": "2024-01-27 02:55:17",
  "Invoice": "21376",
  "Item Name": "Iced Americano (350 Ml)",
  "Price": 252.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:23:03",
  "Invoice": "21375",
  "Item Name": "Cappucino (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:18:54",
  "Invoice": "21374",
  "Item Name": "MANGO JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:17:30",
  "Invoice": "21373",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:16:50",
  "Invoice": "21372",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:15:42",
  "Invoice": "21371",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:05:39",
  "Invoice": "21370",
  "Item Name": "CHILLI GUVAVA JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:05:39",
  "Invoice": "21370",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:05:39",
  "Invoice": "21370",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:02:55",
  "Invoice": "21369",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 02:02:55",
  "Invoice": "21369",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:41:05",
  "Invoice": "21368",
  "Item Name": "Almond Frappe (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:41:05",
  "Invoice": "21368",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:37:45",
  "Invoice": "21367",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:37:45",
  "Invoice": "21367",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:37:45",
  "Invoice": "21367",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:32:43",
  "Invoice": "21366",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:28:50",
  "Invoice": "21365",
  "Item Name": "Almond Frappe (450 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:28:50",
  "Invoice": "21365",
  "Item Name": "Classic Frappe (450 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:28:50",
  "Invoice": "21365",
  "Item Name": "Cappucino (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:28:50",
  "Invoice": "21365",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:28:50",
  "Invoice": "21365",
  "Item Name": "Hyderabadi Soya Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:15:48",
  "Invoice": "21364",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:15:48",
  "Invoice": "21364",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 74.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:15:48",
  "Invoice": "21364",
  "Item Name": "Choco-crinkle-cookies (with Egg) (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:10:29",
  "Invoice": "21363",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 01:10:29",
  "Invoice": "21363",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:47:30",
  "Invoice": "21362",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:36:23",
  "Invoice": "21361",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:36:23",
  "Invoice": "21361",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:36:23",
  "Invoice": "21361",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:33:39",
  "Invoice": "21360",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:33:39",
  "Invoice": "21360",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:32:25",
  "Invoice": "21359",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:32:25",
  "Invoice": "21359",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:32:25",
  "Invoice": "21359",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:25:16",
  "Invoice": "21358",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:25:16",
  "Invoice": "21358",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:21:59",
  "Invoice": "21357",
  "Item Name": "Classic Frappe (450 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:21:59",
  "Invoice": "21357",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:21:59",
  "Invoice": "21357",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:14:13",
  "Invoice": "21356",
  "Item Name": "Caramel Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:14:13",
  "Invoice": "21356",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:07:08",
  "Invoice": "21355",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:07:08",
  "Invoice": "21355",
  "Item Name": "Almond Honey Latte (250 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:00:53",
  "Invoice": "21354",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-27 00:00:53",
  "Invoice": "21354",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:58:33",
  "Invoice": "21353",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:58:33",
  "Invoice": "21353",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:54:41",
  "Invoice": "21352",
  "Item Name": "Classic Frappe (350 Ml)",
  "Price": 378.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:54:14",
  "Invoice": "21351",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:26:49",
  "Invoice": "21350",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:20:30",
  "Invoice": "21349",
  "Item Name": "Classic Frappe (350 Ml)",
  "Price": 378.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:20:11",
  "Invoice": "21348",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:17:27",
  "Invoice": "21347",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:17:27",
  "Invoice": "21347",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:17:27",
  "Invoice": "21347",
  "Item Name": "Tartlets (Kacha Nimbu Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:05:37",
  "Invoice": "21346",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:05:37",
  "Invoice": "21346",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:02:58",
  "Invoice": "21345",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:02:58",
  "Invoice": "21345",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:02:17",
  "Invoice": "21344",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:02:17",
  "Invoice": "21344",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:02:17",
  "Invoice": "21344",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 23:02:17",
  "Invoice": "21344",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:59:41",
  "Invoice": "21343",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:59:41",
  "Invoice": "21343",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:54:06",
  "Invoice": "21342",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:54:06",
  "Invoice": "21342",
  "Item Name": "Origanal South Indian Frappe (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:54:06",
  "Invoice": "21342",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:53:52",
  "Invoice": "21341",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:53:52",
  "Invoice": "21341",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:47:43",
  "Invoice": "21340",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:39:35",
  "Invoice": "21339",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:32:07",
  "Invoice": "21338",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:15:51",
  "Invoice": "21337",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:15:51",
  "Invoice": "21337",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:13:35",
  "Invoice": "21336",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:13:35",
  "Invoice": "21336",
  "Item Name": "Mix Berliner 2 Pcs (Blueberry Cheese Cake Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:13:35",
  "Invoice": "21336",
  "Item Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:11:06",
  "Invoice": "21335",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:11:06",
  "Invoice": "21335",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:07:43",
  "Invoice": "21334",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:07:43",
  "Invoice": "21334",
  "Item Name": "MANGO JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:01:22",
  "Invoice": "C2361",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 22:01:22",
  "Invoice": "C2361",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:53:39",
  "Invoice": "21333",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:53:39",
  "Invoice": "21333",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:47:34",
  "Invoice": "21332",
  "Item Name": "Origanal South Indian Frappe (450 ML)",
  "Price": 433.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:45:57",
  "Invoice": "21331",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:45:57",
  "Invoice": "21331",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:45:57",
  "Invoice": "21331",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:45:57",
  "Invoice": "21331",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:04:52",
  "Invoice": "21330",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:04:52",
  "Invoice": "21330",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:02:04",
  "Invoice": "21329",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:02:04",
  "Invoice": "21329",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:01:19",
  "Invoice": "21328",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 21:01:19",
  "Invoice": "21328",
  "Item Name": "Add On Syrup (Add On Caramel Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:47:20",
  "Invoice": "21327",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:47:20",
  "Invoice": "21327",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:47:20",
  "Invoice": "21327",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:47:20",
  "Invoice": "21327",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:44:16",
  "Invoice": "21326",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:42:48",
  "Invoice": "C2360",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:40:16",
  "Invoice": "C2359",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:40:16",
  "Invoice": "C2359",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:27:35",
  "Invoice": "C2358",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:26:18",
  "Invoice": "21325",
  "Item Name": "Origanal South Indian Frappe (450 ML)",
  "Price": 433.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:26:18",
  "Invoice": "21325",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 74.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:26:18",
  "Invoice": "21325",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:26:18",
  "Invoice": "21325",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 85.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:26:18",
  "Invoice": "21325",
  "Item Name": "Tartlets (Salted Caramel Tartlet)",
  "Price": 61.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:19:09",
  "Invoice": "21324",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:19:09",
  "Invoice": "21324",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:19:09",
  "Invoice": "21324",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:17:02",
  "Invoice": "21323",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:17:02",
  "Invoice": "21323",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:12:26",
  "Invoice": "21322",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:12:26",
  "Invoice": "21322",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:12:26",
  "Invoice": "21322",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:12:26",
  "Invoice": "21322",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:12:26",
  "Invoice": "21322",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:09:53",
  "Invoice": "21321",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:09:53",
  "Invoice": "21321",
  "Item Name": "Cafe Mocha (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:09:12",
  "Invoice": "21320",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:08:27",
  "Invoice": "21319",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:08:27",
  "Invoice": "21319",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 20:08:27",
  "Invoice": "21319",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:50:14",
  "Invoice": "21318",
  "Item Name": "Cappucino (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:40:55",
  "Invoice": "21317",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:40:55",
  "Invoice": "21317",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:40:55",
  "Invoice": "21317",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:40:55",
  "Invoice": "21317",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:28:10",
  "Invoice": "21316",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:28:10",
  "Invoice": "21316",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:15:47",
  "Invoice": "21315",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:15:47",
  "Invoice": "21315",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:15:47",
  "Invoice": "21315",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:15:47",
  "Invoice": "21315",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:10:06",
  "Invoice": "C2357",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:05:57",
  "Invoice": "21314",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:05:23",
  "Invoice": "21313",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:05:23",
  "Invoice": "21313",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:05:23",
  "Invoice": "21313",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:05:23",
  "Invoice": "21313",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:04:10",
  "Invoice": "21312",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:04:10",
  "Invoice": "21312",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:03:33",
  "Invoice": "C2356",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 19:03:33",
  "Invoice": "C2356",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:46:02",
  "Invoice": "21311",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:46:02",
  "Invoice": "21311",
  "Item Name": "Tartlets (Kacha Nimbu Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:39:42",
  "Invoice": "21310",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:39:42",
  "Invoice": "21310",
  "Item Name": "Add On Syrup (Add On Irish Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:32:44",
  "Invoice": "21309",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:25:56",
  "Invoice": "21308",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:25:56",
  "Invoice": "21308",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:25:56",
  "Invoice": "21308",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:25:56",
  "Invoice": "21308",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:25:56",
  "Invoice": "21308",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:22:45",
  "Invoice": "21307",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:22:45",
  "Invoice": "21307",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 18:22:45",
  "Invoice": "21307",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:52:36",
  "Invoice": "21306",
  "Item Name": "Hot Chocolate (250 Ml)",
  "Price": 367.5
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:48:59",
  "Invoice": "21305",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:48:59",
  "Invoice": "21305",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:48:59",
  "Invoice": "21305",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:48:59",
  "Invoice": "21305",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:48:59",
  "Invoice": "21305",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:42:30",
  "Invoice": "21304",
  "Item Name": "Classic Frappe (450 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:20:06",
  "Invoice": "21303",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:20:06",
  "Invoice": "21303",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:20:06",
  "Invoice": "21303",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:20:06",
  "Invoice": "21303",
  "Item Name": "Pour Over",
  "Price": 247.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:20:06",
  "Invoice": "21303",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 17:04:07",
  "Invoice": "21302",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:46:51",
  "Invoice": "21301",
  "Item Name": "Baked Vada Pav",
  "Price": 80.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:46:51",
  "Invoice": "21301",
  "Item Name": "Baked Pav Bhaji",
  "Price": 80.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:46:51",
  "Invoice": "21301",
  "Item Name": "Hazelnut Frappe (450 Ml)",
  "Price": 477.75
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:45:54",
  "Invoice": "21300",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:43:29",
  "Invoice": "21299",
  "Item Name": "Cappucino (350 Ml)",
  "Price": 341.25
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:39:43",
  "Invoice": "21298",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:39:43",
  "Invoice": "21298",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:39:43",
  "Invoice": "21298",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:39:43",
  "Invoice": "21298",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:32:21",
  "Invoice": "21297",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:18:38",
  "Invoice": "21296",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 16:18:38",
  "Invoice": "21296",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:54:06",
  "Invoice": "21295",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:54:06",
  "Invoice": "21295",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:44:12",
  "Invoice": "21294",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:30:14",
  "Invoice": "21293",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:16:58",
  "Invoice": "21292",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:16:58",
  "Invoice": "21292",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 15:07:05",
  "Invoice": "21291",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 14:35:20",
  "Invoice": "21290",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 14:35:20",
  "Invoice": "21290",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 14:35:20",
  "Invoice": "21290",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 14:35:20",
  "Invoice": "21290",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 14:32:16",
  "Invoice": "21289",
  "Item Name": "MANGO JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 14:31:00",
  "Invoice": "21288",
  "Item Name": "Americano (350 ML)",
  "Price": 209.52
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:54:26",
  "Invoice": "21287",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:54:26",
  "Invoice": "21287",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:54:26",
  "Invoice": "21287",
  "Item Name": "Tartlets (Kacha Nimbu Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:54:26",
  "Invoice": "21287",
  "Item Name": "Tartlets (Salted Caramel Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:54:26",
  "Invoice": "21287",
  "Item Name": "PINAPPLE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:54:26",
  "Invoice": "21287",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:44:20",
  "Invoice": "21286",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:40:53",
  "Invoice": "21285",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:39:54",
  "Invoice": "C2355",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:37:17",
  "Invoice": "C2354",
  "Item Name": "ORANGE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:37:17",
  "Invoice": "C2354",
  "Item Name": "PINAPPLE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:37:17",
  "Invoice": "C2354",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:37:17",
  "Invoice": "C2354",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 13:09:59",
  "Invoice": "C2353",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 12:14:53",
  "Invoice": "C2352",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 12:12:26",
  "Invoice": "21284",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 12:12:26",
  "Invoice": "21284",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 12:10:11",
  "Invoice": "C2351",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 12:10:11",
  "Invoice": "C2351",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 12:04:42",
  "Invoice": "21283",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 10:37:00",
  "Invoice": "21282",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 10:15:54",
  "Invoice": "21281",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:43:20",
  "Invoice": "21280",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:43:20",
  "Invoice": "21280",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:43:20",
  "Invoice": "21280",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:43:20",
  "Invoice": "21280",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:43:20",
  "Invoice": "21280",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:40:40",
  "Invoice": "21279",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:40:40",
  "Invoice": "21279",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:40:40",
  "Invoice": "21279",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:40:40",
  "Invoice": "21279",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:16:16",
  "Invoice": "21278",
  "Item Name": "Pour Over",
  "Price": 247.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:16:16",
  "Invoice": "21278",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:12:44",
  "Invoice": "21277",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:12:44",
  "Invoice": "21277",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 09:12:44",
  "Invoice": "21277",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 08:44:17",
  "Invoice": "21276",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 08:44:17",
  "Invoice": "21276",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 08:29:47",
  "Invoice": "C2350",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 08:18:42",
  "Invoice": "C2349",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 07:16:53",
  "Invoice": "21275",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 07:16:53",
  "Invoice": "21275",
  "Item Name": "ESPRESSO (30 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 07:16:53",
  "Invoice": "21275",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 04:10:43",
  "Invoice": "21274",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 04:10:43",
  "Invoice": "21274",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 04:08:15",
  "Invoice": "21273",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 04:08:15",
  "Invoice": "21273",
  "Item Name": "Hyderabadi Soya Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:57:29",
  "Invoice": "21272",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:57:29",
  "Invoice": "21272",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:50:42",
  "Invoice": "21271",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:20:33",
  "Invoice": "21268",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:29:33",
  "Invoice": "21270",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:29:33",
  "Invoice": "21270",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:29:33",
  "Invoice": "21270",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:29:33",
  "Invoice": "21270",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:29:33",
  "Invoice": "21270",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:24:48",
  "Invoice": "21269",
  "Item Name": "Hot Chocolate (250 Ml)",
  "Price": 367.5
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:20:33",
  "Invoice": "21268",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 03:20:33",
  "Invoice": "21268",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 02:59:38",
  "Invoice": "21267",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-26",
  "Timestamp": "2024-01-26 02:59:38",
  "Invoice": "21267",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:24:46",
  "Invoice": "21266",
  "Item Name": "Hazelnut Frappe (450 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:24:46",
  "Invoice": "21266",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:22:20",
  "Invoice": "21265",
  "Item Name": "CHILLI GUVAVA JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:22:20",
  "Invoice": "21265",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:22:20",
  "Invoice": "21265",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Tartlets (Filter Kaapi Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Tartlets (kodai cheese tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Tartlets (Salted Caramel Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Strawbery Rosella Frangipani Tart",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:18:59",
  "Invoice": "21264",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:16:17",
  "Invoice": "21263",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:16:17",
  "Invoice": "21263",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 02:16:17",
  "Invoice": "21263",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:53:11",
  "Invoice": "21262",
  "Item Name": "Iced Latte (450 ML)",
  "Price": 309.52
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:42:28",
  "Invoice": "21261",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:37:25",
  "Invoice": "21260",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:37:25",
  "Invoice": "21260",
  "Item Name": "Sea Salt Dark Mocha (350 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:37:25",
  "Invoice": "21260",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:30:07",
  "Invoice": "21259",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:30:07",
  "Invoice": "21259",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:23:41",
  "Invoice": "21258",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:23:41",
  "Invoice": "21258",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:22:15",
  "Invoice": "21257",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:22:15",
  "Invoice": "21257",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:10:57",
  "Invoice": "21256",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:10:57",
  "Invoice": "21256",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (2 PCS)",
  "Price": 142.86
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 01:10:57",
  "Invoice": "21256",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:56:16",
  "Invoice": "21255",
  "Item Name": "Macchiato 30 Ml",
  "Price": 138.1
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:56:16",
  "Invoice": "21255",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:54:16",
  "Invoice": "21254",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:54:16",
  "Invoice": "21254",
  "Item Name": "Caramel Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:54:16",
  "Invoice": "21254",
  "Item Name": "Madagascar Hot Chocolate (350 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:54:16",
  "Invoice": "21254",
  "Item Name": "Berliner Mix 3 Pcs (Dark Choco Mousse Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:54:16",
  "Invoice": "21254",
  "Item Name": "Berliner Mix 3 Pcs (Nutella Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:54:16",
  "Invoice": "21254",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:46:46",
  "Invoice": "21253",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:46:01",
  "Invoice": "21252",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:46:01",
  "Invoice": "21252",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:46:01",
  "Invoice": "21252",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:46:01",
  "Invoice": "21252",
  "Item Name": "Add On Syrup (Add On Irish Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:38:57",
  "Invoice": "21251",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:15:05",
  "Invoice": "21250",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:15:05",
  "Invoice": "21250",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:15:05",
  "Invoice": "21250",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:15:05",
  "Invoice": "21250",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:03:37",
  "Invoice": "21249",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-26 00:01:46",
  "Invoice": "21248",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:53:47",
  "Invoice": "21247",
  "Item Name": "Hot Chocolate (250 Ml)",
  "Price": 367.5
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:48:46",
  "Invoice": "21246",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:48:46",
  "Invoice": "21246",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:48:46",
  "Invoice": "21246",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:48:46",
  "Invoice": "21246",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:47:11",
  "Invoice": "21245",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:45:53",
  "Invoice": "21244",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:45:10",
  "Invoice": "21243",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:45:10",
  "Invoice": "21243",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:42:13",
  "Invoice": "21242",
  "Item Name": "Origanal South Indian Frappe (350 Ml)",
  "Price": 414.75
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:31:01",
  "Invoice": "21241",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 138.1
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:23:38",
  "Invoice": "21240",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:23:38",
  "Invoice": "21240",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:23:38",
  "Invoice": "21240",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:23:38",
  "Invoice": "21240",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:21:33",
  "Invoice": "21239",
  "Item Name": "Cafe Mocha (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:19:40",
  "Invoice": "21238",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:19:40",
  "Invoice": "21238",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:10:35",
  "Invoice": "21237",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:10:35",
  "Invoice": "21237",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 23:10:35",
  "Invoice": "21237",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 22:59:06",
  "Invoice": "21236",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 22:35:59",
  "Invoice": "21235",
  "Item Name": "Sea Salt Dark Mocha Frappe (450 ML)",
  "Price": 371.43
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 22:18:55",
  "Invoice": "21234",
  "Item Name": "Choco-crinkle-cookies (with Egg) (COMBO 9 PCS)",
  "Price": 171.43
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 22:18:55",
  "Invoice": "21234",
  "Item Name": "Choco-crinkle-cookies (with Egg) (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 22:18:03",
  "Invoice": "C2348",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 21:38:38",
  "Invoice": "21233",
  "Item Name": "Choco-crinkle-cookies (with Egg) (COMBO 9 PCS)",
  "Price": 171.43
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 21:28:24",
  "Invoice": "21232",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 21:28:24",
  "Invoice": "21232",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:23:46",
  "Invoice": "C2347",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:23:46",
  "Invoice": "C2347",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:23:46",
  "Invoice": "C2347",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:22:02",
  "Invoice": "21231",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:22:02",
  "Invoice": "21231",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:22:02",
  "Invoice": "21231",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:20:03",
  "Invoice": "21230",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:18:22",
  "Invoice": "21229",
  "Item Name": "Americano (350 ML)",
  "Price": 200.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:18:22",
  "Invoice": "21229",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:18:22",
  "Invoice": "21229",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 20:18:22",
  "Invoice": "21229",
  "Item Name": "Baba Budan Peak 250 Gm",
  "Price": 500.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:58:48",
  "Invoice": "21228",
  "Item Name": "Caramel Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:58:48",
  "Invoice": "21228",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:53:38",
  "Invoice": "21227",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:53:38",
  "Invoice": "21227",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:53:38",
  "Invoice": "21227",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:53:38",
  "Invoice": "21227",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:49:40",
  "Invoice": "C2346",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:33:19",
  "Invoice": "21226",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:33:19",
  "Invoice": "21226",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:33:19",
  "Invoice": "21226",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:27:36",
  "Invoice": "21225",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:27:36",
  "Invoice": "21225",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:25:34",
  "Invoice": "21224",
  "Item Name": "Berliner Mix 3 Pcs (Lotus Biscoff Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:25:34",
  "Invoice": "21224",
  "Item Name": "Berliner Mix 3 Pcs (Blueberry Cheese Cake Berliner)",
  "Price": 57.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:25:34",
  "Invoice": "21224",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:25:34",
  "Invoice": "21224",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 19:23:47",
  "Invoice": "21223",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:59:19",
  "Invoice": "21222",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:55:39",
  "Invoice": "21221",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:51:50",
  "Invoice": "21220",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:51:50",
  "Invoice": "21220",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:51:50",
  "Invoice": "21220",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:45:18",
  "Invoice": "21219",
  "Item Name": "Iced Americano (350 Ml)",
  "Price": 252.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 18:01:57",
  "Invoice": "21218",
  "Item Name": "Kaapicino (350 ML)",
  "Price": 295.24
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:44:24",
  "Invoice": "21217",
  "Item Name": "Cafe Mocha (250 Ml)",
  "Price": 320.25
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:41:53",
  "Invoice": "C2345",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:41:53",
  "Invoice": "C2345",
  "Item Name": "Gluten Free Hazelnut Brownie",
  "Price": 161.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:40:15",
  "Invoice": "21216",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:21:58",
  "Invoice": "21215",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (2 PCS)",
  "Price": 142.86
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:21:58",
  "Invoice": "21215",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:15:52",
  "Invoice": "21214",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:15:52",
  "Invoice": "21214",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (3 PCS)",
  "Price": 200.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:15:52",
  "Invoice": "21214",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:15:21",
  "Invoice": "21213",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:15:21",
  "Invoice": "21213",
  "Item Name": "Nariyal Irish Cream Frappe (450 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:13:51",
  "Invoice": "21212",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 17:13:51",
  "Invoice": "21212",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 16:29:06",
  "Invoice": "21211",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 16:29:06",
  "Invoice": "21211",
  "Item Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 16:10:09",
  "Invoice": "C2344",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:49:56",
  "Invoice": "C2343",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:49:56",
  "Invoice": "C2343",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:48:27",
  "Invoice": "C2342",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:48:27",
  "Invoice": "C2342",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:47:29",
  "Invoice": "C2341",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:39:24",
  "Invoice": "21210",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 376.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:36:39",
  "Invoice": "21209",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:36:39",
  "Invoice": "21209",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:36:39",
  "Invoice": "21209",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:36:39",
  "Invoice": "21209",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 15:36:39",
  "Invoice": "21209",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:52:29",
  "Invoice": "21208",
  "Item Name": "Madagascar Hot Chocolate (250 Ml)",
  "Price": 395.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:47:31",
  "Invoice": "21207",
  "Item Name": "Cafe Mocha (250 Ml)",
  "Price": 320.25
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:47:31",
  "Invoice": "21207",
  "Item Name": "Cappucino (250 Ml)",
  "Price": 309.75
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:16:24",
  "Invoice": "21206",
  "Item Name": "Iced Americano (450 ML)",
  "Price": 209.52
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:12:09",
  "Invoice": "C2340",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:12:09",
  "Invoice": "C2340",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:12:09",
  "Invoice": "C2340",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:12:09",
  "Invoice": "C2340",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 14:05:20",
  "Invoice": "21205",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 13:26:15",
  "Invoice": "21204",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 13:21:45",
  "Invoice": "C2339",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 13:12:40",
  "Invoice": "21203",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 13:12:40",
  "Invoice": "21203",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 13:11:36",
  "Invoice": "C2338",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 13:11:36",
  "Invoice": "C2338",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 12:19:01",
  "Invoice": "21202",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 12:19:01",
  "Invoice": "21202",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 12:06:50",
  "Invoice": "21201",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 12:06:50",
  "Invoice": "21201",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 11:56:17",
  "Invoice": "21200",
  "Item Name": "Iced Americano (450 Ml)",
  "Price": 288.75
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 11:16:09",
  "Invoice": "21199",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 11:10:01",
  "Invoice": "21198",
  "Item Name": "Sea Salt Dark Mocha (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 11:06:57",
  "Invoice": "21197",
  "Item Name": "Cappucino (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 10:51:36",
  "Invoice": "21196",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 376.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 10:51:36",
  "Invoice": "21196",
  "Item Name": "Pappa Roti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 10:42:36",
  "Invoice": "21195",
  "Item Name": "Iced Americano (450 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 10:34:41",
  "Invoice": "21194",
  "Item Name": "ESPRESSO (60 ML)",
  "Price": 152.38
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 10:00:49",
  "Invoice": "21193",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 09:53:01",
  "Invoice": "21192",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 09:49:28",
  "Invoice": "21191",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 09:49:28",
  "Invoice": "21191",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 09:49:28",
  "Invoice": "21191",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 09:33:18",
  "Invoice": "21190",
  "Item Name": "Madagascar Hot Chocolate (350 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 09:08:11",
  "Invoice": "21189",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 08:48:31",
  "Invoice": "21188",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 08:44:05",
  "Invoice": "21187",
  "Item Name": "Iced Latte (450 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 08:44:05",
  "Invoice": "21187",
  "Item Name": "Add On Syrup (Add On Caramel Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 08:34:49",
  "Invoice": "21186",
  "Item Name": "Cappucino (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 07:43:59",
  "Invoice": "21185",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 06:54:41",
  "Invoice": "21184",
  "Item Name": "Combo-south Indian Filter Kaapi 150 ML + Papparoti",
  "Price": 425.25
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 03:56:37",
  "Invoice": "21183",
  "Item Name": "Cappucino (350 ML)",
  "Price": 247.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 03:56:37",
  "Invoice": "21183",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 03:53:43",
  "Invoice": "21182",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 03:53:43",
  "Invoice": "21182",
  "Item Name": "CHILLI GUVAVA JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 03:32:01",
  "Invoice": "21181",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Tartlets (kodai cheese tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Gluten Free Hazelnut Brownie",
  "Price": 161.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:59:54",
  "Invoice": "21180",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:32:39",
  "Invoice": "21179",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:32:39",
  "Invoice": "21179",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-25",
  "Timestamp": "2024-01-25 02:32:39",
  "Invoice": "21179",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:23:36",
  "Invoice": "21178",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:20:15",
  "Invoice": "21177",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:20:15",
  "Invoice": "21177",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:20:15",
  "Invoice": "21177",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:16:54",
  "Invoice": "21176",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:16:54",
  "Invoice": "21176",
  "Item Name": "Bon Bon (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:16:06",
  "Invoice": "21175",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:15:32",
  "Invoice": "21174",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:15:32",
  "Invoice": "21174",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:14:12",
  "Invoice": "21173",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:12:31",
  "Invoice": "21172",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:12:31",
  "Invoice": "21172",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:10:49",
  "Invoice": "21171",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:10:49",
  "Invoice": "21171",
  "Item Name": "ORANGE JUICE",
  "Price": 285.71
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:07:49",
  "Invoice": "21170",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:07:49",
  "Invoice": "21170",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:05:06",
  "Invoice": "21169",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:02:50",
  "Invoice": "21168",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:02:18",
  "Invoice": "21167",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:02:18",
  "Invoice": "21167",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:02:02",
  "Invoice": "21166",
  "Item Name": "Caramel Frappe (450 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:02:02",
  "Invoice": "21166",
  "Item Name": "Cappucino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 02:02:02",
  "Invoice": "21166",
  "Item Name": "Hot Chocolate (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:47:50",
  "Invoice": "21165",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:47:50",
  "Invoice": "21165",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:39:43",
  "Invoice": "21164",
  "Item Name": "Tartlets (Kacha Nimbu Tartlet)",
  "Price": 66.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:39:43",
  "Invoice": "21164",
  "Item Name": "South Indian Filter Kaapi (250 Ml)",
  "Price": 252.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:31:59",
  "Invoice": "21163",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:31:59",
  "Invoice": "21163",
  "Item Name": "Mix Tartlet 3 Pcs (chocolate Tartlet)",
  "Price": 42.86
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:31:59",
  "Invoice": "21163",
  "Item Name": "Mix Tartlet 3 Pcs (salted Caramel tartlet)",
  "Price": 42.86
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 01:31:59",
  "Invoice": "21163",
  "Item Name": "Mix Tartlet 3 Pcs (Filter Kaapi Tartlet)",
  "Price": 42.86
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:46:22",
  "Invoice": "21162",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:46:01",
  "Invoice": "21161",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:40:41",
  "Invoice": "21160",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:40:41",
  "Invoice": "21160",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:27:28",
  "Invoice": "21159",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:27:28",
  "Invoice": "21159",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:27:28",
  "Invoice": "21159",
  "Item Name": "Gluten Free Hazelnut Brownie",
  "Price": 161.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:26:19",
  "Invoice": "21158",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:26:19",
  "Invoice": "21158",
  "Item Name": "Iced Mocha (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:26:19",
  "Invoice": "21158",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:19:51",
  "Invoice": "21157",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:14:52",
  "Invoice": "21156",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:14:52",
  "Invoice": "21156",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:09:23",
  "Invoice": "21155",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:09:23",
  "Invoice": "21155",
  "Item Name": "Almond Honey Latte (250 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:04:28",
  "Invoice": "21154",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:04:28",
  "Invoice": "21154",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-25 00:04:28",
  "Invoice": "21154",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:59:08",
  "Invoice": "21153",
  "Item Name": "Flat White 250 Ml",
  "Price": 228.57
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:59:08",
  "Invoice": "21153",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:52:57",
  "Invoice": "21152",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:52:57",
  "Invoice": "21152",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:52:57",
  "Invoice": "21152",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:52:57",
  "Invoice": "21152",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:52:57",
  "Invoice": "21152",
  "Item Name": "Rosella Cheesecake Berliner",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:46:35",
  "Invoice": "21151",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:21:45",
  "Invoice": "21150",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:16:47",
  "Invoice": "21149",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:16:47",
  "Invoice": "21149",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:16:47",
  "Invoice": "21149",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:16:47",
  "Invoice": "21149",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:16:47",
  "Invoice": "21149",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 23:05:47",
  "Invoice": "21148",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:48:44",
  "Invoice": "21147",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:41:52",
  "Invoice": "21146",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:40:48",
  "Invoice": "21145",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:39:23",
  "Invoice": "21144",
  "Item Name": "Bon Bon (450 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:39:23",
  "Invoice": "21144",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:39:23",
  "Invoice": "21144",
  "Item Name": "Vanilla Praline (450 ML)",
  "Price": 347.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:17:28",
  "Invoice": "21143",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:17:28",
  "Invoice": "21143",
  "Item Name": "Strawbery Rosella Frangipani Tart",
  "Price": 47.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:17:28",
  "Invoice": "21143",
  "Item Name": "Tartlets (Filter Kaapi Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:09:33",
  "Invoice": "21142",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:09:33",
  "Invoice": "21142",
  "Item Name": "ESPRESSO (30 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "Mix Berliner 2 Pcs (Blueberry Cheese Cake Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "Mix Berliner 2 Pcs (Dark Choco Mousse Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:06:49",
  "Invoice": "21141",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:02:36",
  "Invoice": "21140",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:02:36",
  "Invoice": "21140",
  "Item Name": "Caramel Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 22:02:36",
  "Invoice": "21140",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:49:57",
  "Invoice": "21139",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:49:57",
  "Invoice": "21139",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:49:57",
  "Invoice": "21139",
  "Item Name": "Berliners (Dark Choco Mousse Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:49:30",
  "Invoice": "21138",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 300.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:26:49",
  "Invoice": "21137",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 92.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:26:49",
  "Invoice": "21137",
  "Item Name": "Madagascar Hot Chocolate (250 Ml)",
  "Price": 395.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:26:49",
  "Invoice": "21137",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 92.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:25:19",
  "Invoice": "21136",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:25:19",
  "Invoice": "21136",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:25:19",
  "Invoice": "21136",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:14:33",
  "Invoice": "21135",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 414.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 21:04:03",
  "Invoice": "21134",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:57:16",
  "Invoice": "C2337",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:51:04",
  "Invoice": "21133",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:44:48",
  "Invoice": "C2336",
  "Item Name": "Spicy Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:44:48",
  "Invoice": "C2336",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:44:48",
  "Invoice": "C2336",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:43:44",
  "Invoice": "C2335",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:32:31",
  "Invoice": "21132",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:32:31",
  "Invoice": "21132",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:10:53",
  "Invoice": "21131",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 20:02:58",
  "Invoice": "21130",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 266.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:57:34",
  "Invoice": "21129",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:30:01",
  "Invoice": "C2334",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:28:14",
  "Invoice": "21128",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:28:14",
  "Invoice": "21128",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:28:14",
  "Invoice": "21128",
  "Item Name": "Vanilla Praline (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:26:20",
  "Invoice": "21127",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:24:46",
  "Invoice": "C2333",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:24:46",
  "Invoice": "C2333",
  "Item Name": "Add On Syrup (Add On Irish Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:11:36",
  "Invoice": "21126",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:06:51",
  "Invoice": "21125",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:06:51",
  "Invoice": "21125",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 19:05:22",
  "Invoice": "21124",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 228.57
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:53:58",
  "Invoice": "21123",
  "Item Name": "Cafe Mocha (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:53:58",
  "Invoice": "21123",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:44:41",
  "Invoice": "21122",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:44:41",
  "Invoice": "21122",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:44:41",
  "Invoice": "21122",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:39:34",
  "Invoice": "21121",
  "Item Name": "Double Restritto 44 Ml",
  "Price": 157.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:33:48",
  "Invoice": "21120",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:33:48",
  "Invoice": "21120",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:33:48",
  "Invoice": "21120",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 18:33:48",
  "Invoice": "21120",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:47:07",
  "Invoice": "21119",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:47:07",
  "Invoice": "21119",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:47:07",
  "Invoice": "21119",
  "Item Name": "Mix Berliner 2 Pcs (Lotus Biscoff Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:47:07",
  "Invoice": "21119",
  "Item Name": "Mix Berliner 2 Pcs (Nutella Berliner)",
  "Price": 61.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:43:02",
  "Invoice": "21118",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:43:02",
  "Invoice": "21118",
  "Item Name": "Origanal South Indian Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:42:34",
  "Invoice": "C2332",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:33:18",
  "Invoice": "C2331",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:33:18",
  "Invoice": "C2331",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:24:47",
  "Invoice": "21117",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:24:47",
  "Invoice": "21117",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:24:47",
  "Invoice": "21117",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:24:47",
  "Invoice": "21117",
  "Item Name": "OAT MILK (200 ML)",
  "Price": 71.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:24:47",
  "Invoice": "21117",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:06:53",
  "Invoice": "21116",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (3 PCS)",
  "Price": 200.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 17:05:51",
  "Invoice": "21115",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 16:28:16",
  "Invoice": "21114",
  "Item Name": "Combo-original South Indian Frappe 350 ML + Mix Banana Chips",
  "Price": 523.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 16:24:22",
  "Invoice": "21113",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:52:59",
  "Invoice": "C2330",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:48:07",
  "Invoice": "C2329",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:27:59",
  "Invoice": "21112",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:27:59",
  "Invoice": "21112",
  "Item Name": "Berliners (Blueberry Cheese Cake Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:27:59",
  "Invoice": "21112",
  "Item Name": "Berliners (Lotus Biscoff Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:10:45",
  "Invoice": "21111",
  "Item Name": "Mix Tartlet 3 Pcs (Kacha Nimbu Tartlet)",
  "Price": 42.86
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:10:45",
  "Invoice": "21111",
  "Item Name": "Mix Tartlet 3 Pcs (chocolate Tartlet)",
  "Price": 42.86
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 15:10:45",
  "Invoice": "21111",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:43:38",
  "Invoice": "21110",
  "Item Name": "Flat White 250 Ml",
  "Price": 240.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Nariyal Irish Cream Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "ALMOND MILK (200 ML)",
  "Price": 85.71
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:40:58",
  "Invoice": "21109",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 14:00:00",
  "Invoice": "21108",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 13:50:03",
  "Invoice": "21107",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 13:44:19",
  "Invoice": "21106",
  "Item Name": "Hazelnut Frappe (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 13:43:44",
  "Invoice": "C2328",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 13:08:17",
  "Invoice": "21105",
  "Item Name": "Kaapicino (250 ML)",
  "Price": 204.76
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 13:08:17",
  "Invoice": "21105",
  "Item Name": "Tartlets (chocolate Tartlet)",
  "Price": 47.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:26:23",
  "Invoice": "21104",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:16:26",
  "Invoice": "C2327",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:16:26",
  "Invoice": "C2327",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:14:38",
  "Invoice": "C2326",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:09:30",
  "Invoice": "21103",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:06:17",
  "Invoice": "21102",
  "Item Name": "Americano (250 ML)",
  "Price": 180.95
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:04:02",
  "Invoice": "21101",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 12:04:02",
  "Invoice": "21101",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 11:37:38",
  "Invoice": "21100",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 11:37:38",
  "Invoice": "21100",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 11:37:38",
  "Invoice": "21100",
  "Item Name": "Add On Syrup (Add On Irish Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 11:15:13",
  "Invoice": "21099",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 10:51:49",
  "Invoice": "21098",
  "Item Name": "Iced Americano (450 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 07:44:23",
  "Invoice": "21097",
  "Item Name": "Choco-crinkle-cookies (COMBO 6 PCS)",
  "Price": 123.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 07:31:09",
  "Invoice": "C2325",
  "Item Name": "Hyderabadi Soya Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 07:28:52",
  "Invoice": "21096",
  "Item Name": "Cappucino (250 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 07:28:52",
  "Invoice": "21096",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 07:16:12",
  "Invoice": "21095",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 271.43
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 07:16:12",
  "Invoice": "21095",
  "Item Name": "Cafe Latte (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 05:49:48",
  "Invoice": "21094",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 80.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 05:49:48",
  "Invoice": "21094",
  "Item Name": "Hyderabadi Soya Keema Pav",
  "Price": 80.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 05:11:41",
  "Invoice": "21093",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 05:11:41",
  "Invoice": "21093",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 05:11:41",
  "Invoice": "21093",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 57.14
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 04:55:43",
  "Invoice": "21092",
  "Item Name": "Yellow Banana Chips 60 Gm",
  "Price": 84.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 04:55:43",
  "Invoice": "21092",
  "Item Name": "Baked Vada Pav",
  "Price": 80.0
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 04:06:58",
  "Invoice": "C2324",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:54:01",
  "Invoice": "21091",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:54:01",
  "Invoice": "21091",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:48:45",
  "Invoice": "21090",
  "Item Name": "Choco-crinkle-cookies (COMBO 3 PCS)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:48:45",
  "Invoice": "21090",
  "Item Name": "Hyderabadi Soya Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:48:45",
  "Invoice": "21090",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:48:45",
  "Invoice": "21090",
  "Item Name": "Calzones Veg (Calzone Paneer)",
  "Price": 66.67
},
{
  "Date": "2024-01-24",
  "Timestamp": "2024-01-24 02:45:01",
  "Invoice": "21089",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:26:06",
  "Invoice": "21088",
  "Item Name": "Madagascar Chocochip Frappe (350 ML)",
  "Price": 319.05
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:26:06",
  "Invoice": "21088",
  "Item Name": "Sea Salt Dark Mocha Frappe (350 ML)",
  "Price": 333.33
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:26:06",
  "Invoice": "21088",
  "Item Name": "Americano (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:24:19",
  "Invoice": "21087",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:17:48",
  "Invoice": "21086",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:17:48",
  "Invoice": "21086",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (1 PIC)",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:12:06",
  "Invoice": "21085",
  "Item Name": "Rosella Jam With Filter Coffee Ganache Macaroon (2 PCS)",
  "Price": 142.86
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:12:06",
  "Invoice": "21085",
  "Item Name": "Strawberry White Chocolate Ganache With Rosella Jam Macaroon",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:12:06",
  "Invoice": "21085",
  "Item Name": "Baked Pav Bhaji",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:12:06",
  "Invoice": "21085",
  "Item Name": "French Press",
  "Price": 247.62
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:12:06",
  "Invoice": "21085",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Add On Syrup (Add On Vanilla Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 02:07:35",
  "Invoice": "21084",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:55:57",
  "Invoice": "21083",
  "Item Name": "Cappucino (250 ML)",
  "Price": 223.81
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:51:40",
  "Invoice": "21082",
  "Item Name": "Kaapicino (350 ML)",
  "Price": 238.1
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:46:12",
  "Invoice": "21081",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:46:12",
  "Invoice": "21081",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:46:12",
  "Invoice": "21081",
  "Item Name": "Chicken Calzone",
  "Price": 66.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:46:12",
  "Invoice": "21081",
  "Item Name": "Calzones Veg (Calzone Veg)",
  "Price": 66.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:43:49",
  "Invoice": "21080",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:42:33",
  "Invoice": "21079",
  "Item Name": "Iced Americano (350 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:42:33",
  "Invoice": "21079",
  "Item Name": "Papparoti (Add On Nutella sauce)",
  "Price": 233.33
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:42:10",
  "Invoice": "21078",
  "Item Name": "Iced Latte (350 ML)",
  "Price": 214.29
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:42:10",
  "Invoice": "21078",
  "Item Name": "Classic Frappe (350 ML)",
  "Price": 261.9
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:42:10",
  "Invoice": "21078",
  "Item Name": "Almond Frappe (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:42:10",
  "Invoice": "21078",
  "Item Name": "Add On Syrup (Add On hazelnuts Syrup)",
  "Price": 47.62
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:38:15",
  "Invoice": "21077",
  "Item Name": "Cold Brew",
  "Price": 300.0
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:38:15",
  "Invoice": "21077",
  "Item Name": "Hot Chocolate (250 ML)",
  "Price": 257.14
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:38:15",
  "Invoice": "21077",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:38:15",
  "Invoice": "21077",
  "Item Name": "Hyderabadi Chicken Keema Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:38:15",
  "Invoice": "21077",
  "Item Name": "Baked Vada Pav",
  "Price": 76.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:38:15",
  "Invoice": "21077",
  "Item Name": "Papparoti (Plain)",
  "Price": 166.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 01:07:04",
  "Invoice": "21076",
  "Item Name": "Malnad Tonic (Choice Of Tonic)",
  "Price": 315.0
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:45:21",
  "Invoice": "21075",
  "Item Name": "Berliners (Nutella Berliner)",
  "Price": 66.67
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:45:21",
  "Invoice": "21075",
  "Item Name": "Madagascar Hot Chocolate (250 ML)",
  "Price": 285.71
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:20:55",
  "Invoice": "21074",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:20:55",
  "Invoice": "21074",
  "Item Name": "South Indian Filter Kaapi (250 ML)",
  "Price": 176.19
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:20:55",
  "Invoice": "21074",
  "Item Name": "Vietnamese (350 ML)",
  "Price": 290.48
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:20:55",
  "Invoice": "21074",
  "Item Name": "South Indian Filter Kaapi (150 ML)",
  "Price": 133.33
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:19:19",
  "Invoice": "21073",
  "Item Name": "Hot Chocolate (350 ML)",
  "Price": 304.76
},
{
  "Date": "2024-01-23",
  "Timestamp": "2024-01-24 00:19:19",
  "Invoice": "21073",
  "Item Name": "Sea Salt Dark Mocha (250 ML)",
  "Price": 261.9
},
]

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const lineChartData = [
  [
    { x: new Date(2024, 0, 1), y: 34677 },
    { x: new Date(2024, 0, 2), y: 27586 },
    { x: new Date(2024, 0, 3), y: 44235 },
    { x: new Date(2024, 0, 4), y: 39397 },
    { x: new Date(2024, 0, 5), y: 38261 },
    { x: new Date(2024, 0, 6), y: 52367 },
    { x: new Date(2024, 0, 7), y: 61375 },
  ],
  [
    { x: new Date(2024, 0, 1), y: 35665 },
    { x: new Date(2024, 0, 2), y: 40973 },
    { x: new Date(2024, 0, 3), y: 33834 },
    { x: new Date(2024, 0, 4), y: 36160 },
    { x: new Date(2024, 0, 5), y: 52649 },
    { x: new Date(2024, 0, 6), y: 55006 },
    { x: new Date(2024, 0, 7), y: 55865 },
  ],

  [
    { x: new Date(2024, 0, 1), y: 39824 },
    { x: new Date(2024, 0, 2), y: 45430 },
    { x: new Date(2024, 0, 3), y: 38317 },
    { x: new Date(2024, 0, 4), y: 78841 },
    { x: new Date(2024, 0, 5), y: 46584 },
    { x: new Date(2024, 0, 6), y: 61879 },
    { x: new Date(2024, 0, 7), y: 58183 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'week1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'week2',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'week3',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const pieChartData = [
  { x: 'BILLER KUNDAN', y: 17503, text: '30.85%' },
  { x: 'Allahbaksh', y: 12319, text: '21.72%' },
  { x: 'Biller Aftab', y: 9295, text: '16.39%' },
  { x: 'NARESH RATHOD', y: 7608, text: '13.41%' },
  { x: 'Autoaccept', y: 4412, text: '7.78%' },
  { x: 'BILLER ASIF', y: 2491, text: '4.39%' },
  { x: 'KHUSHI SANDEEP GUPTA', y: 1243, text: '2.19%' },
  { x: 'Allahbaksh Shaikh', y: 1164, text: '2.05%' },
  { x: 'Sabina Khan', y: 602, text: '1.06%' },
  { x: 'RAM RATHORE', y: 54, text: '0.1%' },
  { x: 'Lakhi salian', y: 30, text: '0.05%' },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: 'Dine in', y: 4191, text: '68.97%' },
  { x: 'Zomato', y: 238, text: '3.9%' },
  { x: 'Swiggy', y: 235, text: '3.8%' },
  { x: 'Other', y: 1339, text: '22.03%' },
];

export const ecomPieChartData2 = [
  { x: 'Card', y: 3858, text: '63.5%' },
  { x: 'Cash', y: 1646, text: '27%' },
  { x: 'Online', y: 473, text: '7.78%'},
  { x: 'Part Payment', y: 98, text: '1.61%' },
];

export const stackedChartData = [
  [
    { x: 'Hot Coffee', y: 91264},
    { x: 'Baked Vada Pav', y: 75808},
    { x: 'Cold Coffee', y: 53728},
    { x: 'Sweet', y: 34408},
    { x: 'Hot Chocolate', y:  29624},
 
  ],
  // [
  //   { x: 'Jan', y: 0 },
  //   { x: 'Feb', y: 0 },
  //   { x: 'Mar', y: 0 },
  //   { x: 'Apr', y: 0 },
  //   { x: 'May', y: 0 },
  //   { x: 'Jun', y: 0 },
  //   { x: 'July', y:0 },
  // ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    // name: 'Budget',
    type: 'StackingColumn',
    background: 'yellow',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    // name: 'Expense',
    type: 'StackingColumn',
    background: 'yellow',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 10000,
  maximum: 100000,
  interval: 10000,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];

export const financialChartData = [
  {
    x: new Date('2012-04-02'),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date('2012-04-09'),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date('2012-04-16'),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
  {
    x: new Date('2012-04-23'),
    open: 81.5157,
    high: 88.2857,
    low: 79.2857,
    close: 86.1428,
    volume: 965935749,
  },
  {
    x: new Date('2012-04-30'),
    open: 85.4,
    high: 85.4857,
    low: 80.7385,
    close: 80.75,
    volume: 615249365,
  },
  {
    x: new Date('2012-05-07'),
    open: 80.2143,
    high: 82.2685,
    low: 79.8185,
    close: 80.9585,
    volume: 541742692,
  },
  {
    x: new Date('2012-05-14'),
    open: 80.3671,
    high: 81.0728,
    low: 74.5971,
    close: 75.7685,
    volume: 708126233,
  },
  {
    x: new Date('2012-05-21'),
    open: 76.3571,
    high: 82.3571,
    low: 76.2928,
    close: 80.3271,
    volume: 682076215,
  },
  {
    x: new Date('2012-05-28'),
    open: 81.5571,
    high: 83.0714,
    low: 80.0743,
    close: 80.1414,
    volume: 480059584,
  },
  {
    x: new Date('2012-06-04'),
    open: 80.2143,
    high: 82.9405,
    low: 78.3571,
    close: 82.9028,
    volume: 517577005,
  },
  {
    x: new Date('2012-06-11'),
    open: 83.96,
    high: 84.0714,
    low: 80.9571,
    close: 82.0185,
    volume: 499693120,
  },
  {
    x: new Date('2012-06-18'),
    open: 81.5657,
    high: 84.2857,
    low: 81.4814,
    close: 83.1571,
    volume: 442172142,
  },
  {
    x: new Date('2012-06-25'),
    open: 82.4714,
    high: 83.4285,
    low: 80.8014,
    close: 83.4285,
    volume: 371529102,
  },
  {
    x: new Date('2012-07-02'),
    open: 83.5328,
    high: 87.7628,
    low: 83.3714,
    close: 86.5543,
    volume: 385906790,
  },
  {
    x: new Date('2012-07-09'),
    open: 86.4714,
    high: 88.5528,
    low: 84.6685,
    close: 86.4243,
    volume: 524235196,
  },
  {
    x: new Date('2012-07-16'),
    open: 86.4457,
    high: 87.9071,
    low: 86.1643,
    close: 86.3285,
    volume: 419537217,
  },
  {
    x: new Date('2012-07-23'),
    open: 84.9143,
    high: 87.0971,
    low: 81.4285,
    close: 83.5943,
    volume: 680773023,
  },
  {
    x: new Date('2012-07-30'),
    open: 84.4171,
    high: 88.2828,
    low: 83.9743,
    close: 87.9571,
    volume: 475109323,
  },
  {
    x: new Date('2012-08-06'),
    open: 88.1843,
    high: 89.2857,
    low: 87.8943,
    close: 88.8143,
    volume: 312826308,
  },
  {
    x: new Date('2012-08-13'),
    open: 89.0557,
    high: 92.5985,
    low: 89.0357,
    close: 92.5871,
    volume: 392867193,
  },
  {
    x: new Date('2012-08-20'),
    open: 92.8585,
    high: 96.4114,
    low: 92.5871,
    close: 94.746,
    volume: 708614692,
  },
  {
    x: new Date('2012-08-27'),
    open: 97.1414,
    high: 97.2671,
    low: 93.8928,
    close: 95.0343,
    volume: 383807217,
  },
  {
    x: new Date('2012-09-03'),
    open: 95.1085,
    high: 97.4971,
    low: 94.9285,
    close: 97.2057,
    volume: 355722047,
  },
  {
    x: new Date('2012-09-10'),
    open: 97.2071,
    high: 99.5685,
    low: 93.7143,
    close: 98.7543,
    volume: 724042207,
  },
  {
    x: new Date('2012-09-17'),
    open: 99.9071,
    high: 100.7243,
    low: 99.0885,
    close: 100.0135,
    volume: 500166040,
  },
  {
    x: new Date('2012-09-24'),
    open: 98.1228,
    high: 99.3028,
    low: 94.3357,
    close: 95.3007,
    volume: 714507994,
  },
  {
    x: new Date('2012-10-01'),
    open: 95.88,
    high: 96.6785,
    low: 92.95,
    close: 93.2271,
    volume: 638543622,
  },
  {
    x: new Date('2012-10-08'),
    open: 92.4114,
    high: 92.5085,
    low: 89.0785,
    close: 89.9591,
    volume: 747127724,
  },
  {
    x: new Date('2012-10-15'),
    open: 90.3357,
    high: 93.2557,
    low: 87.0885,
    close: 87.12,
    volume: 646996264,
  },
  {
    x: new Date('2012-10-22'),
    open: 87.4885,
    high: 90.7685,
    low: 84.4285,
    close: 86.2857,
    volume: 866040680,
  },
  {
    x: new Date('2012-10-29'),
    open: 84.9828,
    high: 86.1428,
    low: 82.1071,
    close: 82.4,
    volume: 367371310,
  },
  {
    x: new Date('2012-11-05'),
    open: 83.3593,
    high: 84.3914,
    low: 76.2457,
    close: 78.1514,
    volume: 919719846,
  },
  {
    x: new Date('2012-11-12'),
    open: 79.1643,
    high: 79.2143,
    low: 72.25,
    close: 75.3825,
    volume: 894382149,
  },
  {
    x: new Date('2012-11-19'),
    open: 77.2443,
    high: 81.7143,
    low: 77.1257,
    close: 81.6428,
    volume: 527416747,
  },
  {
    x: new Date('2012-11-26'),
    open: 82.2714,
    high: 84.8928,
    low: 81.7514,
    close: 83.6114,
    volume: 646467974,
  },
  {
    x: new Date('2012-12-03'),
    open: 84.8071,
    high: 84.9414,
    low: 74.09,
    close: 76.1785,
    volume: 980096264,
  },
  {
    x: new Date('2012-12-10'),
    open: 75,
    high: 78.5085,
    low: 72.2257,
    close: 72.8277,
    volume: 835016110,
  },
  {
    x: new Date('2012-12-17'),
    open: 72.7043,
    high: 76.4143,
    low: 71.6043,
    close: 74.19,
    volume: 726150329,
  },
  {
    x: new Date('2012-12-24'),
    open: 74.3357,
    high: 74.8928,
    low: 72.0943,
    close: 72.7984,
    volume: 321104733,
  },
  {
    x: new Date('2012-12-31'),
    open: 72.9328,
    high: 79.2857,
    low: 72.7143,
    close: 75.2857,
    volume: 540854882,
  },
  {
    x: new Date('2013-01-07'),
    open: 74.5714,
    high: 75.9843,
    low: 73.6,
    close: 74.3285,
    volume: 574594262,
  },
  {
    x: new Date('2013-01-14'),
    open: 71.8114,
    high: 72.9643,
    low: 69.0543,
    close: 71.4285,
    volume: 803105621,
  },
  {
    x: new Date('2013-01-21'),
    open: 72.08,
    high: 73.57,
    low: 62.1428,
    close: 62.84,
    volume: 971912560,
  },
  {
    x: new Date('2013-01-28'),
    open: 62.5464,
    high: 66.0857,
    low: 62.2657,
    close: 64.8028,
    volume: 656549587,
  },
  {
    x: new Date('2013-02-04'),
    open: 64.8443,
    high: 68.4014,
    low: 63.1428,
    close: 67.8543,
    volume: 743778993,
  },
  {
    x: new Date('2013-02-11'),
    open: 68.0714,
    high: 69.2771,
    low: 65.7028,
    close: 65.7371,
    volume: 585292366,
  },
  {
    x: new Date('2013-02-18'),
    open: 65.8714,
    high: 66.1043,
    low: 63.26,
    close: 64.4014,
    volume: 421766997,
  },
  {
    x: new Date('2013-02-25'),
    open: 64.8357,
    high: 65.0171,
    low: 61.4257,
    close: 61.4957,
    volume: 582741215,
  },
  {
    x: new Date('2013-03-04'),
    open: 61.1143,
    high: 62.2043,
    low: 59.8571,
    close: 61.6743,
    volume: 632856539,
  },
  {
    x: new Date('2013-03-11'),
    open: 61.3928,
    high: 63.4614,
    low: 60.7343,
    close: 63.38,
    volume: 572066981,
  },
  {
    x: new Date('2013-03-18'),
    open: 63.0643,
    high: 66.0143,
    low: 63.0286,
    close: 65.9871,
    volume: 552156035,
  },
  {
    x: new Date('2013-03-25'),
    open: 66.3843,
    high: 67.1357,
    low: 63.0886,
    close: 63.2371,
    volume: 390762517,
  },
  {
    x: new Date('2013-04-01'),
    open: 63.1286,
    high: 63.3854,
    low: 59.9543,
    close: 60.4571,
    volume: 505273732,
  },
  {
    x: new Date('2013-04-08'),
    open: 60.6928,
    high: 62.57,
    low: 60.3557,
    close: 61.4,
    volume: 387323550,
  },
  {
    x: new Date('2013-04-15'),
    open: 61,
    high: 61.1271,
    low: 55.0143,
    close: 55.79,
    volume: 709945604,
  },
  {
    x: new Date('2013-04-22'),
    open: 56.0914,
    high: 59.8241,
    low: 55.8964,
    close: 59.6007,
    volume: 787007506,
  },
  {
    x: new Date('2013-04-29'),
    open: 60.0643,
    high: 64.7471,
    low: 60,
    close: 64.2828,
    volume: 655020017,
  },
  {
    x: new Date('2013-05-06'),
    open: 65.1014,
    high: 66.5357,
    low: 64.3543,
    close: 64.71,
    volume: 545488533,
  },
  {
    x: new Date('2013-05-13'),
    open: 64.5014,
    high: 65.4143,
    low: 59.8428,
    close: 61.8943,
    volume: 633706550,
  },
  {
    x: new Date('2013-05-20'),
    open: 61.7014,
    high: 64.05,
    low: 61.4428,
    close: 63.5928,
    volume: 494379068,
  },
  {
    x: new Date('2013-05-27'),
    open: 64.2714,
    high: 65.3,
    low: 62.7714,
    close: 64.2478,
    volume: 362907830,
  },
  {
    x: new Date('2013-06-03'),
    open: 64.39,
    high: 64.9186,
    low: 61.8243,
    close: 63.1158,
    volume: 443249793,
  },
  {
    x: new Date('2013-06-10'),
    open: 63.5328,
    high: 64.1541,
    low: 61.2143,
    close: 61.4357,
    volume: 389680092,
  },
  {
    x: new Date('2013-06-17'),
    open: 61.6343,
    high: 62.2428,
    low: 58.3,
    close: 59.0714,
    volume: 400384818,
  },
  {
    x: new Date('2013-06-24'),
    open: 58.2,
    high: 58.38,
    low: 55.5528,
    close: 56.6471,
    volume: 519314826,
  },
  {
    x: new Date('2013-07-01'),
    open: 57.5271,
    high: 60.47,
    low: 57.3171,
    close: 59.6314,
    volume: 343878841,
  },
  {
    x: new Date('2013-07-08'),
    open: 60.0157,
    high: 61.3986,
    low: 58.6257,
    close: 60.93,
    volume: 384106977,
  },
  {
    x: new Date('2013-07-15'),
    open: 60.7157,
    high: 62.1243,
    low: 60.5957,
    close: 60.7071,
    volume: 286035513,
  },
  {
    x: new Date('2013-07-22'),
    open: 61.3514,
    high: 63.5128,
    low: 59.8157,
    close: 62.9986,
    volume: 395816827,
  },
  {
    x: new Date('2013-07-29'),
    open: 62.9714,
    high: 66.1214,
    low: 62.8857,
    close: 66.0771,
    volume: 339668858,
  },
  {
    x: new Date('2013-08-05'),
    open: 66.3843,
    high: 67.4128,
    low: 64.8071,
    close: 64.9214,
    volume: 368486781,
  },
  {
    x: new Date('2013-08-12'),
    open: 65.2657,
    high: 72.0357,
    low: 65.2328,
    close: 71.7614,
    volume: 711563584,
  },
  {
    x: new Date('2013-08-19'),
    open: 72.0485,
    high: 73.3914,
    low: 71.1714,
    close: 71.5743,
    volume: 417119660,
  },
  {
    x: new Date('2013-08-26'),
    open: 71.5357,
    high: 72.8857,
    low: 69.4286,
    close: 69.6023,
    volume: 392805888,
  },
  {
    x: new Date('2013-09-02'),
    open: 70.4428,
    high: 71.7485,
    low: 69.6214,
    close: 71.1743,
    volume: 317244380,
  },
  {
    x: new Date('2013-09-09'),
    open: 72.1428,
    high: 72.56,
    low: 66.3857,
    close: 66.4143,
    volume: 669376320,
  },
  {
    x: new Date('2013-09-16'),
    open: 65.8571,
    high: 68.3643,
    low: 63.8886,
    close: 66.7728,
    volume: 625142677,
  },
  {
    x: new Date('2013-09-23'),
    open: 70.8714,
    high: 70.9871,
    low: 68.6743,
    close: 68.9643,
    volume: 475274537,
  },
  {
    x: new Date('2013-09-30'),
    open: 68.1786,
    high: 70.3357,
    low: 67.773,
    close: 69.0043,
    volume: 368198906,
  },
  {
    x: new Date('2013-10-07'),
    open: 69.5086,
    high: 70.5486,
    low: 68.3257,
    close: 70.4017,
    volume: 361437661,
  },
  {
    x: new Date('2013-10-14'),
    open: 69.9757,
    high: 72.7514,
    low: 69.9071,
    close: 72.6985,
    volume: 342694379,
  },
  {
    x: new Date('2013-10-21'),
    open: 73.11,
    high: 76.1757,
    low: 72.5757,
    close: 75.1368,
    volume: 490458997,
  },
  {
    x: new Date('2013-10-28'),
    open: 75.5771,
    high: 77.0357,
    low: 73.5057,
    close: 74.29,
    volume: 508130174,
  },
  {
    x: new Date('2013-11-04'),
    open: 74.4428,
    high: 75.555,
    low: 73.1971,
    close: 74.3657,
    volume: 318132218,
  },
  {
    x: new Date('2013-11-11'),
    open: 74.2843,
    high: 75.6114,
    low: 73.4871,
    close: 74.9987,
    volume: 306711021,
  },
  {
    x: new Date('2013-11-18'),
    open: 74.9985,
    high: 75.3128,
    low: 73.3814,
    close: 74.2571,
    volume: 282778778,
  },
  {
    x: new Date('2013-11-25'),
    open: 74.4314,
    high: 79.7614,
    low: 74.4285,
    close: 79.4385,
    volume: 327405302,
  },
  {
    x: new Date('2013-12-02'),
    open: 79.7143,
    high: 82.1622,
    low: 78.6885,
    close: 80.0028,
    volume: 522055676,
  },
  {
    x: new Date('2013-12-09'),
    open: 80.1286,
    high: 81.5671,
    low: 79.0957,
    close: 79.2043,
    volume: 387271099,
  },
  {
    x: new Date('2013-12-16'),
    open: 79.2885,
    high: 80.377,
    low: 76.9714,
    close: 78.4314,
    volume: 457580848,
  },
  {
    x: new Date('2013-12-23'),
    open: 81.1428,
    high: 81.6971,
    low: 79.9285,
    close: 80.0128,
    volume: 274253503,
  },
  {
    x: new Date('2013-12-30'),
    open: 79.6371,
    high: 80.1828,
    low: 77.2043,
    close: 77.2828,
    volume: 275734934,
  },
  {
    x: new Date('2014-01-06'),
    open: 76.7785,
    high: 78.1228,
    low: 75.8728,
    close: 76.1343,
    volume: 393462075,
  },
  {
    x: new Date('2014-01-13'),
    open: 75.7014,
    high: 80.0285,
    low: 75.6971,
    close: 77.2385,
    volume: 439557459,
  },
  {
    x: new Date('2014-01-20'),
    open: 77.2843,
    high: 79.6128,
    low: 77.2028,
    close: 78.01,
    volume: 385585525,
  },
  {
    x: new Date('2014-01-27'),
    open: 78.5814,
    high: 79.2571,
    low: 70.5071,
    close: 71.5143,
    volume: 813702575,
  },
  {
    x: new Date('2014-02-03'),
    open: 71.8014,
    high: 74.7042,
    low: 71.3286,
    close: 74.24,
    volume: 434447570,
  },
  {
    x: new Date('2014-02-10'),
    open: 74.0943,
    high: 77.9971,
    low: 74,
    close: 77.7128,
    volume: 379011880,
  },
  {
    x: new Date('2014-02-17'),
    open: 78,
    high: 78.7414,
    low: 74.9428,
    close: 75.0357,
    volume: 289609443,
  },
  {
    x: new Date('2014-02-24'),
    open: 74.7357,
    high: 76.1071,
    low: 73.6571,
    close: 75.1771,
    volume: 367569649,
  },
  {
    x: new Date('2014-03-03'),
    open: 74.7743,
    high: 76.3928,
    low: 74.6871,
    close: 75.7771,
    volume: 275972640,
  },
  {
    x: new Date('2014-03-10'),
    open: 75.48,
    high: 77.0943,
    low: 74.7143,
    close: 74.9557,
    volume: 287729528,
  },
  {
    x: new Date('2014-03-17'),
    open: 75.3857,
    high: 76.6057,
    low: 75.0286,
    close: 76.1243,
    volume: 303531061,
  },
  {
    x: new Date('2014-03-24'),
    open: 76.9171,
    high: 78.4285,
    low: 76.3214,
    close: 76.6943,
    volume: 338387221,
  },
  {
    x: new Date('2014-03-31'),
    open: 77.0328,
    high: 77.64,
    low: 75.7971,
    close: 75.9743,
    volume: 245749459,
  },
  {
    x: new Date('2014-04-07'),
    open: 75.4314,
    high: 76.0343,
    low: 73.8771,
    close: 74.23,
    volume: 312008139,
  },
  {
    x: new Date('2014-04-14'),
    open: 74.5571,
    high: 75.3943,
    low: 73.0471,
    close: 74.9914,
    volume: 241209047,
  },
  {
    x: new Date('2014-04-21'),
    open: 75.0485,
    high: 81.7128,
    low: 74.8514,
    close: 81.7057,
    volume: 476651465,
  },
  {
    x: new Date('2014-04-28'),
    open: 81.8285,
    high: 85.6328,
    low: 81.7928,
    close: 84.6543,
    volume: 473712709,
  },
  {
    x: new Date('2014-05-05'),
    open: 84.3057,
    high: 86.3442,
    low: 82.9043,
    close: 83.6489,
    volume: 365535013,
  },
  {
    x: new Date('2014-05-12'),
    open: 83.9271,
    high: 85.3614,
    low: 83.6285,
    close: 85.3585,
    volume: 260931637,
  },
  {
    x: new Date('2014-05-19'),
    open: 85.4071,
    high: 87.8184,
    low: 85.3328,
    close: 87.7328,
    volume: 294298274,
  },
  {
    x: new Date('2014-05-26'),
    open: 87.9828,
    high: 92.0243,
    low: 87.9471,
    close: 90.4285,
    volume: 400232120,
  },
  {
    x: new Date('2014-06-02'),
    open: 90.5657,
    high: 93.0371,
    low: 88.9285,
    close: 92.2243,
    volume: 412158024,
  },
  {
    x: new Date('2014-06-09'),
    open: 92.7,
    high: 95.05,
    low: 90.88,
    close: 91.28,
    volume: 292422550,
  },
  {
    x: new Date('2014-06-16'),
    open: 91.51,
    high: 92.75,
    low: 90.9,
    close: 90.91,
    volume: 234325480,
  },
  {
    x: new Date('2014-06-23'),
    open: 91.32,
    high: 92,
    low: 89.65,
    close: 91.98,
    volume: 213712160,
  },
  {
    x: new Date('2014-06-30'),
    open: 92.1,
    high: 94.1,
    low: 92.09,
    close: 94.03,
    volume: 138936570,
  },
  {
    x: new Date('2014-07-07'),
    open: 94.14,
    high: 96.8,
    low: 93.52,
    close: 95.22,
    volume: 229782440,
  },
  {
    x: new Date('2014-07-14'),
    open: 95.86,
    high: 97.1,
    low: 92.57,
    close: 94.43,
    volume: 248104390,
  },
  {
    x: new Date('2014-07-21'),
    open: 94.99,
    high: 97.88,
    low: 93.72,
    close: 97.671,
    volume: 273021350,
  },
  {
    x: new Date('2014-07-28'),
    open: 97.82,
    high: 99.44,
    low: 94.81,
    close: 96.13,
    volume: 235868530,
  },
  {
    x: new Date('2014-08-04'),
    open: 96.37,
    high: 96.58,
    low: 93.28,
    close: 94.74,
    volume: 222522120,
  },
  {
    x: new Date('2014-08-11'),
    open: 95.27,
    high: 98.19,
    low: 94.8355,
    close: 97.98,
    volume: 178806580,
  },
  {
    x: new Date('2014-08-18'),
    open: 98.49,
    high: 101.47,
    low: 97.98,
    close: 101.32,
    volume: 246446280,
  },
  {
    x: new Date('2014-08-25'),
    open: 101.79,
    high: 102.9,
    low: 100.7,
    close: 102.5,
    volume: 232858250,
  },
  {
    x: new Date('2014-09-01'),
    open: 103.06,
    high: 103.74,
    low: 97.79,
    close: 98.97,
    volume: 322045910,
  },
  {
    x: new Date('2014-09-08'),
    open: 99.3,
    high: 103.08,
    low: 96.14,
    close: 101.66,
    volume: 460851840,
  },
  {
    x: new Date('2014-09-15'),
    open: 102.81,
    high: 103.05,
    low: 98.89,
    close: 100.96,
    volume: 296425730,
  },
  {
    x: new Date('2014-09-22'),
    open: 101.8,
    high: 102.94,
    low: 97.72,
    close: 100.75,
    volume: 337617850,
  },
  {
    x: new Date('2014-09-29'),
    open: 98.65,
    high: 101.54,
    low: 98.04,
    close: 99.62,
    volume: 246900230,
  },
  {
    x: new Date('2014-10-06'),
    open: 99.95,
    high: 102.38,
    low: 98.31,
    close: 100.73,
    volume: 279646740,
  },
  {
    x: new Date('2014-10-13'),
    open: 101.33,
    high: 101.78,
    low: 95.18,
    close: 97.67,
    volume: 356408760,
  },
  {
    x: new Date('2014-10-20'),
    open: 98.315,
    high: 105.49,
    low: 98.22,
    close: 105.22,
    volume: 355329760,
  },
  {
    x: new Date('2014-10-27'),
    open: 104.85,
    high: 108.04,
    low: 104.7,
    close: 108,
    volume: 219443560,
  },
  {
    x: new Date('2014-11-03'),
    open: 108.22,
    high: 110.3,
    low: 107.72,
    close: 109.01,
    volume: 199332700,
  },
  {
    x: new Date('2014-11-10'),
    open: 109.02,
    high: 114.19,
    low: 108.4,
    close: 114.18,
    volume: 203976340,
  },
  {
    x: new Date('2014-11-17'),
    open: 114.27,
    high: 117.57,
    low: 113.3,
    close: 116.47,
    volume: 232574480,
  },
  {
    x: new Date('2014-11-24'),
    open: 116.85,
    high: 119.75,
    low: 116.62,
    close: 118.93,
    volume: 181158620,
  },
  {
    x: new Date('2014-12-01'),
    open: 118.81,
    high: 119.25,
    low: 111.27,
    close: 115,
    volume: 266118290,
  },
  {
    x: new Date('2014-12-08'),
    open: 114.1,
    high: 114.85,
    low: 109.35,
    close: 109.73,
    volume: 259311140,
  },
  {
    x: new Date('2014-12-15'),
    open: 110.7,
    high: 113.24,
    low: 106.26,
    close: 111.78,
    volume: 326382400,
  },
  {
    x: new Date('2014-12-22'),
    open: 112.16,
    high: 114.52,
    low: 111.97,
    close: 113.99,
    volume: 119248900,
  },
  {
    x: new Date('2014-12-29'),
    open: 113.79,
    high: 114.77,
    low: 107.35,
    close: 109.33,
    volume: 151780640,
  },
  {
    x: new Date('2015-01-05'),
    open: 108.29,
    high: 113.25,
    low: 104.63,
    close: 112.01,
    volume: 282690970,
  },
  {
    x: new Date('2015-01-12'),
    open: 112.6,
    high: 112.8,
    low: 105.2,
    close: 105.99,
    volume: 303531140,
  },
  {
    x: new Date('2015-01-19'),
    open: 107.84,
    high: 113.75,
    low: 106.5,
    close: 112.98,
    volume: 198362640,
  },
  {
    x: new Date('2015-01-26'),
    open: 113.74,
    high: 120,
    low: 109.03,
    close: 117.16,
    volume: 461747290,
  },
  {
    x: new Date('2015-02-02'),
    open: 118.05,
    high: 120.51,
    low: 116.08,
    close: 118.93,
    volume: 270190470,
  },
  {
    x: new Date('2015-02-09'),
    open: 118.55,
    high: 127.48,
    low: 118.43,
    close: 127.08,
    volume: 301354470,
  },
  {
    x: new Date('2015-02-16'),
    open: 127.49,
    high: 129.5,
    low: 126.92,
    close: 129.495,
    volume: 193883960,
  },
  {
    x: new Date('2015-02-23'),
    open: 130.02,
    high: 133.6,
    low: 126.61,
    close: 128.46,
    volume: 369856960,
  },
  {
    x: new Date('2015-03-02'),
    open: 129.25,
    high: 130.28,
    low: 125.76,
    close: 126.6,
    volume: 246472020,
  },
  {
    x: new Date('2015-03-09'),
    open: 127.96,
    high: 129.57,
    low: 121.63,
    close: 123.59,
    volume: 325921230,
  },
  {
    x: new Date('2015-03-16'),
    open: 123.88,
    high: 129.2451,
    low: 122.87,
    close: 125.9,
    volume: 266016400,
  },
  {
    x: new Date('2015-03-23'),
    open: 127.12,
    high: 128.04,
    low: 122.6,
    close: 123.25,
    volume: 208731730,
  },
  {
    x: new Date('2015-03-30'),
    open: 124.05,
    high: 126.49,
    low: 123.1,
    close: 125.32,
    volume: 161628950,
  },
  {
    x: new Date('2015-04-06'),
    open: 124.47,
    high: 128.1218,
    low: 124.33,
    close: 127.1,
    volume: 181454510,
  },
  {
    x: new Date('2015-04-13'),
    open: 128.37,
    high: 128.57,
    low: 124.46,
    close: 124.75,
    volume: 170090870,
  },
  {
    x: new Date('2015-04-20'),
    open: 125.57,
    high: 130.63,
    low: 125.17,
    close: 130.28,
    volume: 206698310,
  },
  {
    x: new Date('2015-04-27'),
    open: 132.31,
    high: 134.54,
    low: 124.58,
    close: 128.95,
    volume: 417115180,
  },
  {
    x: new Date('2015-05-04'),
    open: 129.5,
    high: 130.57,
    low: 123.36,
    close: 127.62,
    volume: 270197900,
  },
  {
    x: new Date('2015-05-11'),
    open: 127.39,
    high: 129.49,
    low: 124.82,
    close: 128.77,
    volume: 207858180,
  },
  {
    x: new Date('2015-05-18'),
    open: 128.38,
    high: 132.97,
    low: 128.36,
    close: 132.54,
    volume: 216438970,
  },
  {
    x: new Date('2015-05-25'),
    open: 132.6,
    high: 132.91,
    low: 129.12,
    close: 130.28,
    volume: 197468800,
  },
  {
    x: new Date('2015-06-01'),
    open: 131.2,
    high: 131.39,
    low: 128.36,
    close: 128.65,
    volume: 170465550,
  },
  {
    x: new Date('2015-06-08'),
    open: 128.9,
    high: 130.18,
    low: 125.62,
    close: 127.17,
    volume: 219812710,
  },
  {
    x: new Date('2015-06-15'),
    open: 126.1,
    high: 128.31,
    low: 125.71,
    close: 126.6,
    volume: 197925030,
  },
  {
    x: new Date('2015-06-22'),
    open: 127.49,
    high: 129.8,
    low: 126.51,
    close: 126.75,
    volume: 195104520,
  },
  {
    x: new Date('2015-06-29'),
    open: 125.46,
    high: 126.94,
    low: 124.48,
    close: 126.44,
    volume: 150747530,
  },
  {
    x: new Date('2015-07-06'),
    open: 124.94,
    high: 126.23,
    low: 119.22,
    close: 123.28,
    volume: 274904180,
  },
  {
    x: new Date('2015-07-13'),
    open: 125.03,
    high: 129.62,
    low: 124.32,
    close: 129.62,
    volume: 188579340,
  },
  {
    x: new Date('2015-07-20'),
    open: 130.97,
    high: 132.97,
    low: 121.99,
    close: 124.5,
    volume: 336423370,
  },
  {
    x: new Date('2015-07-27'),
    open: 123.09,
    high: 123.91,
    low: 120.91,
    close: 121.3,
    volume: 191087840,
  },
  {
    x: new Date('2015-08-03'),
    open: 121.5,
    high: 122.57,
    low: 112.1,
    close: 115.52,
    volume: 383883210,
  },
  {
    x: new Date('2015-08-10'),
    open: 116.53,
    high: 119.99,
    low: 109.63,
    close: 115.96,
    volume: 344549090,
  },
  {
    x: new Date('2015-08-17'),
    open: 116.04,
    high: 117.65,
    low: 105.645,
    close: 105.76,
    volume: 318855760,
  },
  {
    x: new Date('2015-08-24'),
    open: 110.87,
    high: 113.31,
    low: 102.6,
    close: 113.29,
    volume: 498047270,
  },
  {
    x: new Date('2015-08-31'),
    open: 112.03,
    high: 114.53,
    low: 107.36,
    close: 109.27,
    volume: 297402060,
  },
  {
    x: new Date('2015-09-07'),
    open: 111.65,
    high: 114.21,
    low: 109.77,
    close: 114.21,
    volume: 251859600,
  },
  {
    x: new Date('2015-09-14'),
    open: 116.58,
    high: 116.89,
    low: 111.87,
    close: 113.45,
    volume: 276281980,
  },
  {
    x: new Date('2015-09-21'),
    open: 113.67,
    high: 116.69,
    low: 112.37,
    close: 114.71,
    volume: 238617740,
  },
  {
    x: new Date('2015-09-28'),
    open: 113.85,
    high: 114.57,
    low: 107.31,
    close: 110.38,
    volume: 313017610,
  },
  {
    x: new Date('2015-10-05'),
    open: 109.88,
    high: 112.28,
    low: 108.21,
    close: 112.12,
    volume: 261920950,
  },
  {
    x: new Date('2015-10-12'),
    open: 112.73,
    high: 112.75,
    low: 109.56,
    close: 111.04,
    volume: 184208970,
  },
  {
    x: new Date('2015-10-19'),
    open: 110.8,
    high: 119.228,
    low: 110.11,
    close: 119.08,
    volume: 221612230,
  },
  {
    x: new Date('2015-10-26'),
    open: 118.08,
    high: 121.22,
    low: 113.99,
    close: 119.5,
    volume: 319660750,
  },
  {
    x: new Date('2015-11-02'),
    open: 119.87,
    high: 123.82,
    low: 119.61,
    close: 121.06,
    volume: 194953700,
  },
  {
    x: new Date('2015-11-09'),
    open: 120.96,
    high: 121.81,
    low: 112.27,
    close: 112.34,
    volume: 216054740,
  },
  {
    x: new Date('2015-11-16'),
    open: 111.38,
    high: 119.92,
    low: 111,
    close: 119.3,
    volume: 189492500,
  },
  {
    x: new Date('2015-11-23'),
    open: 119.27,
    high: 119.73,
    low: 117.12,
    close: 117.81,
    volume: 109582040,
  },
  {
    x: new Date('2015-11-30'),
    open: 117.99,
    high: 119.41,
    low: 114.22,
    close: 119.03,
    volume: 205415620,
  },
  {
    x: new Date('2015-12-07'),
    open: 118.98,
    high: 119.86,
    low: 112.851,
    close: 113.18,
    volume: 188609110,
  },
  {
    x: new Date('2015-12-14'),
    open: 112.18,
    high: 112.8,
    low: 105.81,
    close: 106.03,
    volume: 314856190,
  },
  {
    x: new Date('2015-12-21'),
    open: 107.28,
    high: 109,
    low: 105.57,
    close: 108.03,
    volume: 126450510,
  },
  {
    x: new Date('2015-12-28'),
    open: 107.59,
    high: 109.43,
    low: 104.82,
    close: 105.26,
    volume: 123621760,
  },
  {
    x: new Date('2016-01-04'),
    open: 102.61,
    high: 105.85,
    low: 96.43,
    close: 96.96,
    volume: 343000960,
  },
  {
    x: new Date('2016-01-11'),
    open: 98.97,
    high: 101.19,
    low: 95.36,
    close: 97.13,
    volume: 303375940,
  },
  {
    x: new Date('2016-01-18'),
    open: 98.41,
    high: 101.46,
    low: 93.42,
    close: 101.42,
    volume: 242982970,
  },
  {
    x: new Date('2016-01-25'),
    open: 101.52,
    high: 101.53,
    low: 92.39,
    close: 97.34,
    volume: 376481100,
  },
  {
    x: new Date('2016-02-01'),
    open: 96.47,
    high: 97.33,
    low: 93.69,
    close: 94.02,
    volume: 216608840,
  },
  {
    x: new Date('2016-02-08'),
    open: 93.13,
    high: 96.35,
    low: 92.59,
    close: 93.99,
    volume: 230794620,
  },
  {
    x: new Date('2016-02-15'),
    open: 95.02,
    high: 98.89,
    low: 94.61,
    close: 96.04,
    volume: 167001070,
  },
  {
    x: new Date('2016-02-22'),
    open: 96.31,
    high: 98.0237,
    low: 93.32,
    close: 96.91,
    volume: 158759600,
  },
  {
    x: new Date('2016-02-29'),
    open: 96.86,
    high: 103.75,
    low: 96.65,
    close: 103.01,
    volume: 201482180,
  },
  {
    x: new Date('2016-03-07'),
    open: 102.39,
    high: 102.83,
    low: 100.15,
    close: 102.26,
    volume: 155437450,
  },
  {
    x: new Date('2016-03-14'),
    open: 101.91,
    high: 106.5,
    low: 101.78,
    close: 105.92,
    volume: 181323210,
  },
  {
    x: new Date('2016-03-21'),
    open: 105.93,
    high: 107.65,
    low: 104.89,
    close: 105.67,
    volume: 119054360,
  },
  {
    x: new Date('2016-03-28'),
    open: 106,
    high: 110.42,
    low: 104.88,
    close: 109.99,
    volume: 147641240,
  },
  {
    x: new Date('2016-04-04'),
    open: 110.42,
    high: 112.19,
    low: 108.121,
    close: 108.66,
    volume: 145351790,
  },
  {
    x: new Date('2016-04-11'),
    open: 108.97,
    high: 112.39,
    low: 108.66,
    close: 109.85,
    volume: 161518860,
  },
  {
    x: new Date('2016-04-18'),
    open: 108.89,
    high: 108.95,
    low: 104.62,
    close: 105.68,
    volume: 188775240,
  },
  {
    x: new Date('2016-04-25'),
    open: 105,
    high: 105.65,
    low: 92.51,
    close: 93.74,
    volume: 345910030,
  },
  {
    x: new Date('2016-05-02'),
    open: 93.965,
    high: 95.9,
    low: 91.85,
    close: 92.72,
    volume: 225114110,
  },
  {
    x: new Date('2016-05-09'),
    open: 93,
    high: 93.77,
    low: 89.47,
    close: 90.52,
    volume: 215596350,
  },
  {
    x: new Date('2016-05-16'),
    open: 92.39,
    high: 95.43,
    low: 91.65,
    close: 95.22,
    volume: 212312980,
  },
  {
    x: new Date('2016-05-23'),
    open: 95.87,
    high: 100.73,
    low: 95.67,
    close: 100.35,
    volume: 203902650,
  },
  {
    x: new Date('2016-05-30'),
    open: 99.6,
    high: 100.4,
    low: 96.63,
    close: 97.92,
    volume: 140064910,
  },
  {
    x: new Date('2016-06-06'),
    open: 97.99,
    high: 101.89,
    low: 97.55,
    close: 98.83,
    volume: 124731320,
  },
  {
    x: new Date('2016-06-13'),
    open: 98.69,
    high: 99.12,
    low: 95.3,
    close: 95.33,
    volume: 191017280,
  },
  {
    x: new Date('2016-06-20'),
    open: 96,
    high: 96.89,
    low: 92.65,
    close: 93.4,
    volume: 206149160,
  },
  {
    x: new Date('2016-06-27'),
    open: 93,
    high: 96.465,
    low: 91.5,
    close: 95.89,
    volume: 184254460,
  },
  {
    x: new Date('2016-07-04'),
    open: 95.39,
    high: 96.89,
    low: 94.37,
    close: 96.68,
    volume: 111769640,
  },
  {
    x: new Date('2016-07-11'),
    open: 96.75,
    high: 99.3,
    low: 96.73,
    close: 98.78,
    volume: 142244590,
  },
  {
    x: new Date('2016-07-18'),
    open: 98.7,
    high: 101,
    low: 98.31,
    close: 98.66,
    volume: 147358320,
  },
  {
    x: new Date('2016-07-25'),
    open: 98.25,
    high: 104.55,
    low: 96.42,
    close: 104.21,
    volume: 252358930,
  },
  {
    x: new Date('2016-08-01'),
    open: 104.41,
    high: 107.65,
    low: 104,
    close: 107.48,
    volume: 168265830,
  },
  {
    x: new Date('2016-08-08'),
    open: 107.52,
    high: 108.94,
    low: 107.16,
    close: 108.18,
    volume: 124255340,
  },
  {
    x: new Date('2016-08-15'),
    open: 108.14,
    high: 110.23,
    low: 108.08,
    close: 109.36,
    volume: 131814920,
  },
  {
    x: new Date('2016-08-22'),
    open: 108.86,
    high: 109.32,
    low: 106.31,
    close: 106.94,
    volume: 123373540,
  },
  {
    x: new Date('2016-08-29'),
    open: 106.62,
    high: 108,
    low: 105.5,
    close: 107.73,
    volume: 134426100,
  },
  {
    x: new Date('2016-09-05'),
    open: 107.9,
    high: 108.76,
    low: 103.13,
    close: 103.13,
    volume: 168312530,
  },
  {
    x: new Date('2016-09-12'),
    open: 102.65,
    high: 116.13,
    low: 102.53,
    close: 114.92,
    volume: 388543710,
  },
  {
    x: new Date('2016-09-19'),
    open: 115.19,
    high: 116.18,
    low: 111.55,
    close: 112.71,
    volume: 200842480,
  },
  {
    x: new Date('2016-09-26'),
    open: 111.64,
    high: 114.64,
    low: 111.55,
    close: 113.05,
    volume: 156186800,
  },
  {
    x: new Date('2016-10-03'),
    open: 112.71,
    high: 114.56,
    low: 112.28,
    close: 114.06,
    volume: 125587350,
  },
  {
    x: new Date('2016-10-10'),
    open: 115.02,
    high: 118.69,
    low: 114.72,
    close: 117.63,
    volume: 208231690,
  },
  {
    x: new Date('2016-10-17'),
    open: 117.33,
    high: 118.21,
    low: 113.8,
    close: 116.6,
    volume: 114497020,
  },
  {
    x: new Date('2016-10-24'),
    open: 117.1,
    high: 118.36,
    low: 113.31,
    close: 113.72,
    volume: 204530120,
  },
  {
    x: new Date('2016-10-31'),
    open: 113.65,
    high: 114.23,
    low: 108.11,
    close: 108.84,
    volume: 155287280,
  },
  {
    x: new Date('2016-11-07'),
    open: 110.08,
    high: 111.72,
    low: 105.83,
    close: 108.43,
    volume: 206825070,
  },
  {
    x: new Date('2016-11-14'),
    open: 107.71,
    high: 110.54,
    low: 104.08,
    close: 110.06,
    volume: 197790040,
  },
  {
    x: new Date('2016-11-21'),
    open: 110.12,
    high: 112.42,
    low: 110.01,
    close: 111.79,
    volume: 93992370,
  },
  {
    x: new Date('2016-11-28'),
    open: 111.43,
    high: 112.465,
    low: 108.85,
    close: 109.9,
    volume: 155229390,
  },
  {
    x: new Date('2016-12-05'),
    open: 110,
    high: 114.7,
    low: 108.25,
    close: 113.95,
    volume: 151624650,
  },
  {
    x: new Date('2016-12-12'),
    open: 113.29,
    high: 116.73,
    low: 112.49,
    close: 115.97,
    volume: 194003220,
  },
  {
    x: new Date('2016-12-19'),
    open: 115.8,
    high: 117.5,
    low: 115.59,
    close: 116.52,
    volume: 113106370,
  },
  {
    x: new Date('2016-12-26'),
    open: 116.52,
    high: 118.0166,
    low: 115.43,
    close: 115.82,
    volume: 84354060,
  },
  {
    x: new Date('2017-01-02'),
    open: 115.8,
    high: 118.16,
    low: 114.76,
    close: 117.91,
    volume: 103680760,
  },
  {
    x: new Date('2017-01-09'),
    open: 117.95,
    high: 119.93,
    low: 117.94,
    close: 119.04,
    volume: 138446660,
  },
  {
    x: new Date('2017-01-16'),
    open: 118.34,
    high: 120.5,
    low: 118.22,
    close: 120,
    volume: 113576380,
  },
  {
    x: new Date('2017-01-23'),
    open: 120,
    high: 122.44,
    low: 119.5,
    close: 121.95,
    volume: 124406640,
  },
  {
    x: new Date('2017-01-30'),
    open: 120.93,
    high: 130.49,
    low: 120.62,
    close: 129.08,
    volume: 248063580,
  },
  {
    x: new Date('2017-02-06'),
    open: 129.13,
    high: 132.94,
    low: 128.9,
    close: 132.12,
    volume: 136252280,
  },
  {
    x: new Date('2017-02-13'),
    open: 133.08,
    high: 136.27,
    low: 132.75,
    close: 135.72,
    volume: 136326260,
  },
  {
    x: new Date('2017-02-20'),
    open: 136.23,
    high: 137.48,
    low: 135.28,
    close: 136.66,
    volume: 87773190,
  },
  {
    x: new Date('2017-02-27'),
    open: 137.14,
    high: 140.2786,
    low: 136.28,
    close: 139.78,
    volume: 127757050,
  },
  {
    x: new Date('2017-03-06'),
    open: 139.365,
    high: 139.98,
    low: 137.05,
    close: 139.14,
    volume: 99061270,
  },
  {
    x: new Date('2017-03-13'),
    open: 138.85,
    high: 141.02,
    low: 138.82,
    close: 139.99,
    volume: 120881720,
  },
  {
    x: new Date('2017-03-20'),
    open: 140.4,
    high: 142.8,
    low: 139.73,
    close: 140.64,
    volume: 129178500,
  },
  {
    x: new Date('2017-03-27'),
    open: 139.39,
    high: 144.5,
    low: 138.62,
    close: 143.66,
    volume: 126819590,
  },
  {
    x: new Date('2017-04-03'),
    open: 143.71,
    high: 145.46,
    low: 143.05,
    close: 143.34,
    volume: 105274540,
  },
  {
    x: new Date('2017-04-10'),
    open: 143.6,
    high: 143.8792,
    low: 140.06,
    close: 141.05,
    volume: 87342130,
  },
  {
    x: new Date('2017-04-17'),
    open: 141.48,
    high: 142.92,
    low: 140.45,
    close: 142.27,
    volume: 89092650,
  },
  {
    x: new Date('2017-04-24'),
    open: 143.5,
    high: 144.9,
    low: 143.18,
    close: 143.65,
    volume: 90423600,
  },
  {
    x: new Date('2017-05-01'),
    open: 145.1,
    high: 148.98,
    low: 144.27,
    close: 148.96,
    volume: 173861760,
  },
  {
    x: new Date('2017-05-08'),
    open: 149.03,
    high: 156.42,
    low: 149.03,
    close: 156.1,
    volume: 173087500,
  },
  {
    x: new Date('2017-05-15'),
    open: 156.01,
    high: 156.65,
    low: 149.71,
    close: 153.06,
    volume: 156993820,
  },
  {
    x: new Date('2017-05-22'),
    open: 154,
    high: 154.9,
    low: 152.67,
    close: 153.61,
    volume: 103151450,
  },
  {
    x: new Date('2017-05-29'),
    open: 153.42,
    high: 155.45,
    low: 152.22,
    close: 155.45,
    volume: 88670120,
  },
  {
    x: new Date('2017-06-05'),
    open: 154.34,
    high: 155.98,
    low: 146.02,
    close: 148.98,
    volume: 158814040,
  },
  {
    x: new Date('2017-06-12'),
    open: 145.74,
    high: 147.5,
    low: 142.2,
    close: 142.27,
    volume: 219638930,
  },
  {
    x: new Date('2017-06-19'),
    open: 143.66,
    high: 147.16,
    low: 143.66,
    close: 146.28,
    volume: 132832660,
  },
  {
    x: new Date('2017-06-26'),
    open: 147.17,
    high: 148.28,
    low: 142.28,
    close: 144.02,
    volume: 126890110,
  },
  {
    x: new Date('2017-07-03'),
    open: 144.88,
    high: 145.3001,
    low: 142.41,
    close: 144.18,
    volume: 78465450,
  },
  {
    x: new Date('2017-07-10'),
    open: 144.11,
    high: 149.33,
    low: 143.37,
    close: 149.04,
    volume: 109759170,
  },
  {
    x: new Date('2017-07-17'),
    open: 148.82,
    high: 151.74,
    low: 148.57,
    close: 150.27,
    volume: 104744470,
  },
  {
    x: new Date('2017-07-24'),
    open: 150.58,
    high: 153.99,
    low: 147.3,
    close: 149.5,
    volume: 105536280,
  },
  {
    x: new Date('2017-07-31'),
    open: 149.9,
    high: 159.75,
    low: 148.13,
    close: 156.39,
    volume: 170204830,
  },
  {
    x: new Date('2017-08-07'),
    open: 157.06,
    high: 161.83,
    low: 154.63,
    close: 157.48,
    volume: 149860480,
  },
  {
    x: new Date('2017-08-14'),
    open: 159.32,
    high: 162.51,
    low: 156.72,
    close: 157.5,
    volume: 133829670,
  },
  {
    x: new Date('2017-08-21'),
    open: 157.5,
    high: 160.74,
    low: 155.1101,
    close: 159.86,
    volume: 112238670,
  },
  {
    x: new Date('2017-08-28'),
    open: 160.14,
    high: 164.94,
    low: 159.93,
    close: 164.05,
    volume: 125610990,
  },
  {
    x: new Date('2017-09-04'),
    open: 163.75,
    high: 164.25,
    low: 158.53,
    close: 158.63,
    volume: 101419110,
  },
  {
    x: new Date('2017-09-11'),
    open: 160.5,
    high: 163.96,
    low: 157.91,
    close: 159.88,
    volume: 220431100,
  },
  {
    x: new Date('2017-09-18'),
    open: 160.11,
    high: 160.5,
    low: 157.995,
    close: 158.67,
    volume: 27939544,
  },
];
export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];