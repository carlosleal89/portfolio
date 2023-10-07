import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiDocker
} from 'react-icons/di';
import ExpressIcon from '../components/ExpressIcon';
import IIcons from '../interfaces/IIcon';

const technologiesIcons: IIcons[] = [
  { name: 'HTML', icon: <DiHtml5 />},
  { name: 'CSS', icon: <DiCss3 />},
  { name: 'JavaScript', icon: <DiJsBadge />},
  { name: 'Node', icon: <DiNodejsSmall />},
  { name: 'MySql', icon: <DiMysql />},
  { name: 'React', icon: <DiReact />},
  { name: 'Docker', icon: <DiDocker />},
  { name: 'Express', icon: <ExpressIcon />},
];

export default technologiesIcons;