import weatherapp from '../public/weatherapp.png';
import todoapp from '../public/todoapp.png';
import restuartantapp from '../public/restuartantapp.png';
import tempconv from '../public/tempconv.png';
import ybtube from '../public/ybtube.png';
import simplcalc from '../public/simplecalc.png';
import qrcode from '../public/qrcode.png';
import payapp from '../public/payapp.png';

const project_list =[
  {
    id:1,
    link: "https://github.com/adnan179/nextjs_weather_app",
    name: "Weather App using Next.JS",
    desc:"A simple weather app using Next.JS and openweathermap API.",
    pic: weatherapp
  },
  {
    id:2,
    link: "https://github.com/adnan179/todo-list",
    name: "Todo App using React",
    desc:"A simple todo app using React with dark mode and light mode.",
    pic: todoapp
  },
  {
    id:3,
    link: "https://github.com/adnan179/restaurant_portfolio",
    name: "Restuartant portofolio App using React",
    desc:"A Restuartant portfolio app using React.",
    pic: restuartantapp
  },
  {
    id:4,
    link: "https://github.com/adnan179/restaurant_portfolio",
    name: "Temperature Convertor App using React",
    desc:"A simple temperature convertor app using React which shows temperature in four different scales.",
    pic: tempconv
  },
  {
    id:5,
    link: "https://github.com/adnan179/youtube_clone",
    name: "Youtube Home page clone",
    desc: "A youtube home page clone made using just HTML and CSS",
    pic: ybtube
  },
  {
    id:6,
    link: "https://github.com/adnan179/GRIP-task-3",
    name: "Payment intregation page using stripe",
    desc: "A payment integration page for anime made using just HTML, CSS and stripe",
    pic: payapp
  },
  {
    id:7,
    link: "https://github.com/adnan179/Calculator",
    name: "A very simple calculator",
    desc: "A very basic calculator using React which performs basic operations",
    pic: simplcalc
  },
  {
    id:8,
    link: "https://github.com/adnan179/QR-code_challenge",
    name: "QR code",
    desc: "A simple QR code page",
    pic: qrcode
  }
]

export default project_list;