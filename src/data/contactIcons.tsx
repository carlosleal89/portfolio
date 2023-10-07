import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import IIcon from '../interfaces/IIcon';


const contactIcons: IIcon[] = [
  { name: 'Telefone', data: '48 996234045', icon: <AiFillPhone id='phone-icon' />},
  { name: 'E-mail', data: 'carlos.frleal@gmail.com', icon: <AiOutlineMail id='email-icon'/>},
  { name: 'Localização', data: 'Florianópolis/SC', icon: <AiFillEnvironment id='local-icon'/>}
];

export default contactIcons;


