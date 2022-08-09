import ContentTitle from '../../components/ContentTitle';
import ContentItemCard from '../../components/ContentItemCard';

import './style.css';
import {useSelector} from 'react-redux';

const Home = () => {
  const data = useSelector((state) => state.list.items);
  return (
    <div className='page-container'>
      <ContentTitle />

      {data.length > 0 && <ContentItemCard />}
    </div>
  );
};

export default Home;
