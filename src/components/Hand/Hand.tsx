import Card from '../Card/Card';

import "./Hand.css";

type Props = {}

const Hand = (props: Props) => {
  return (
    <ul className='hand'>
        <li><Card naipe={'hearts'} number={1}/></li>
    </ul>
  )
}

export default Hand;