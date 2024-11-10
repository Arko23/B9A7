
import PropTypes from 'prop-types';

const Packet = ({info, handleCook}) => {
    let {recipe_name, recipe_image, short_description, ingredients, preparing_time ,calories} = info;
    return (
        <div className=' bg-white rounded-xl shadow-xl p-2  w-[400px] border border-dotted border-gray-400 '>
        <img className="w-[400px] h-[250px] p-4 rounded-md" src={recipe_image} alt="" />
        <p className='text-gray-700 mt-4 text-2xl font-extrabold text-start ml-4'>{recipe_name}</p>
        <p className='text-gray-500 mt-3 text-xl font-bold text-start ml-4'>{short_description}</p>
        <p className='text-gray-600 mt-4 text-2xl font-extrabold text-start ml-4'> Ingredients : {ingredients.length}</p>
        <ol className='text-gray-700 text-xl font-normal text-start ml-4'>
        {
            ingredients.map((ingredient, idx) => (<li key={idx}>-{ingredient}</li>))
        }
        </ol>
        
        <div className='flex justify-between mt-7'>
        <p className='flex text-gray-700 text-md font-normal text-start ml-4'><img src="https://i.ibb.co/kcKMD9X/clock.png" alt="" /> {preparing_time}</p>

        <p className='flex text-gray-700 text-md font-normal text-start ml-4'><img src="https://i.ibb.co/n3z9RxJ/flame.png" alt="" /> {calories}</p>
        </div>
        <button onClick={()=>handleCook(info)} className='bg-green-400 mt-5 flex justify-start ml-5 texy-xl font-semibold text-white hover:border-2 border-white hover:bg-green-700 px-4 py-3 mb-5 rounded-3xl'>Want to cook!</button>
      
        
    </div>

    );
};

Packet.propTypes={
    info : PropTypes.object,
    handleCook : PropTypes.func
}
export default Packet;