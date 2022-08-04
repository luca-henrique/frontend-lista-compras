import ContentTitle from '../../components/ContentTitle';
import ContentItemCard from '../../components/ContentItemCard';

import './style.css';

const Home = () => {
  return (
    <div className='page-container'>
      <ContentTitle />

      <ContentItemCard />
    </div>
  );
};

export default Home;
