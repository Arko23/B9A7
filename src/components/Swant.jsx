import PropTypes from 'prop-types';

const Swant = ({cook}) => {
    const{recipe_id,recipe_name,preparing_time,calories}=cook;
    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='px-4 py-2'>ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border px-4 py-2'>{recipe_id} </td>
                        <td className="border px-4 py-2">{recipe_name}</td>
                        <td className="border px-4 py-2">{preparing_time}</td>
                        <td className="border px-4 py-2">{calories}</td>
                        <td className="border px-4 py-2">
                        <button  className=" bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Prepare
                            </button>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Swant.propTypes={
    cook:PropTypes.object
}

export default Swant;

//github
//again have to do the preparing button one
//netlify 
//surge