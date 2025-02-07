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
    </ul>
  )
}

export default Hand;