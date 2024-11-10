import PropTypes from 'prop-types';
import Swant from './Swant';

const Want = ({addCook}) => {
    return (
        <div className="w-1/3 border-[2px] border-dashed border-gray-300 rounded-lg">
            <h1 className="text-2xl text-center font-semibold">Want to Cook :{addCook.length}</h1>
            
              
                  {addCook.map(cook => (
                <Swant key={cook.recipe_id} cook={cook} />
            ))}
             
        </div>
    );
};

Want.propTypes={
    addCook:PropTypes.array
}

export default Want;