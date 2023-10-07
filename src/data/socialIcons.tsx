import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import IIcons from '../interfaces/IIcon';

const socialNetworkIcons: IIcons[] = [
    { name: 'linkedinIcon', data: 'https://www.linkedin.com/in/dev-carlosleal/', icon: <FaLinkedinIn />},
    { name: 'githubIcon', data: 'https://github.com/carlosleal89', icon: <FaGithub />}
];

export default socialNetworkIcons;
