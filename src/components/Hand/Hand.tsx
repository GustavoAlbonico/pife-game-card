import Card from '../Card/Card';

import "./Hand.css";

type Props = {}

const Hand = (props: Props) => {
  return (
    <ul className='hand'>
        
        <li><Card naipe={'hearts'} number={1}/></li>
        <li><Card naipe={'hearts'} number={2}/></li>
        <li><Card naipe={'hearts'} number={3}/></li>
        <li><Card naipe={'hearts'} number={4}/></li>
        <li><Card naipe={'hearts'} number={5}/></li>
        <li><Card naipe={'hearts'} number={6}/></li>
        <li><Card naipe={'hearts'} number={7}/></li>
        <li><Card naipe={'hearts'} number={8}/></li>
        <li><Card naipe={'hearts'} number={9}/></li>
        <li><Card naipe={'hearts'} number={10}/></li>
        <li><Card naipe={'hearts'} number={11}/></li>
        <li><Card naipe={'hearts'} number={12}/></li>
        <li><Card naipe={'hearts'} number={13}/></li>

        <li><Card naipe={'diamonds'} number={1}/></li>
        <li><Card naipe={'diamonds'} number={2}/></li>
        <li><Card naipe={'diamonds'} number={3}/></li>
        <li><Card naipe={'diamonds'} number={4}/></li>
        <li><Card naipe={'diamonds'} number={5}/></li>
        <li><Card naipe={'diamonds'} number={6}/></li>
        <li><Card naipe={'diamonds'} number={7}/></li>
        <li><Card naipe={'diamonds'} number={8}/></li>
        <li><Card naipe={'diamonds'} number={9}/></li>
        <li><Card naipe={'diamonds'} number={10}/></li>
        <li><Card naipe={'diamonds'} number={11}/></li>
        <li><Card naipe={'diamonds'} number={12}/></li>
        <li><Card naipe={'diamonds'} number={13}/></li>

        <li><Card naipe={'clubs'} number={1}/></li>
        <li><Card naipe={'clubs'} number={2}/></li>
        <li><Card naipe={'clubs'} number={3}/></li>
        <li><Card naipe={'clubs'} number={4}/></li>
        <li><Card naipe={'clubs'} number={5}/></li>
        <li><Card naipe={'clubs'} number={6}/></li>
        <li><Card naipe={'clubs'} number={7}/></li>
        <li><Card naipe={'clubs'} number={8}/></li>
        <li><Card naipe={'clubs'} number={9}/></li>
        <li><Card naipe={'clubs'} number={10}/></li>
        <li><Card naipe={'clubs'} number={11}/></li>
        <li><Card naipe={'clubs'} number={12}/></li>
        <li><Card naipe={'clubs'} number={13}/></li>

        <li><Card naipe={'spades'} number={1}/></li>
        <li><Card naipe={'spades'} number={2}/></li>
        <li><Card naipe={'spades'} number={3}/></li>
        <li><Card naipe={'spades'} number={4}/></li>
        <li><Card naipe={'spades'} number={5}/></li>
        <li><Card naipe={'spades'} number={6}/></li>
        <li><Card naipe={'spades'} number={7}/></li>
        <li><Card naipe={'spades'} number={8}/></li>
        <li><Card naipe={'spades'} number={9}/></li>
        <li><Card naipe={'spades'} number={10}/></li>
        <li><Card naipe={'spades'} number={11}/></li>
        <li><Card naipe={'spades'} number={12}/></li>
        <li><Card naipe={'spades'} number={13}/></li>

    </ul>
  )
}

export default Hand;