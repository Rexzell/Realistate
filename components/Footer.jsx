import { Box } from '@chakra-ui/layout';
import Image from 'next/image';
import logo from '../assets/images/logo.png';

const Footer = () => (
  <Box textAlign='center' p='5' borderTop='1px' borderColor='black.400'>
    <Image src={logo} width="280px" height="70px"/>
  </Box>
);

export default Footer;