import { DETAILS } from '../../../constants/constants';
import { getObjectKeys } from '../../../utils/utils';

const Location = () => {
  const keys = getObjectKeys(DETAILS) as Array<keyof typeof DETAILS>;
  return (
    <div className='flex flex-col space-y-1 pt-6'>
      {keys.map((key, index) => (
        <div key={index} className='flex items-center justify-between'>
          <span className='text-Snow text-xs font-bold'>{key}:</span>
          <span className='text-xs text-white'>{DETAILS[key]}</span>
        </div>
      ))}
    </div>
  );
};

export default Location;
