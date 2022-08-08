import ContentTitle from '../../components/ContentTitle';
import ContentItemCard from '../../components/ContentItemCard';

import './style.css';
import {useSelector} from 'react-redux';

const Home = () => {
  const example = useSelector((state) => state);
  console.log(example);

  return (
    <div className='page-container'>
      <ContentTitle />

      <ContentItemCard />
    </div>
  );
};

export default Home;
