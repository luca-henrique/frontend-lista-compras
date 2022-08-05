import './style.css';
import FormList from './Form';
import CustomCard from '../../components/CustomCard';
import {Checkbox, Typography} from '@material-ui/core';

const CreateList = () => {
  return (
    <div className='page-container'>
      <FormList />

      <div className='list-items-container'>
        <CustomCard containerClass='list-item' link='#'>
          <div>
            <div className='list-item-header'>
              <Typography variant='subtitle1' component='h2'>
                Café
              </Typography>
              <Checkbox />
            </div>
            <div>
              <Typography>1 unidade</Typography>
              <Typography>R$ 10.00</Typography>
            </div>
          </div>
        </CustomCard>
      </div>
    </div>
  );
};

export default CreateList;
