import  { useState } from 'react';

const AddUser = (props) => {
    const [users, setUsers] = useState([
      {
        userId:''
      }
    ]);

    const handleUserChange = (index,field, value) => {
        const updatedUsers = [...users];
        updatedUsers[index][field] = Number(value); 
        setUsers(updatedUsers);
    };

    const handleAddUser = () => {
        setUsers([...users, {
          userId:''
        }]); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(users);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {users.map((user, index) => (
                    <div className="mx-[0rem]  flex-col  mb-[1rem]  justify-center" key={index}>
                        <div>
                            <div className='text-md text-white mt-3 mx-3'>User ID</div>
                            <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="number" value={user.userId} onChange={(e) => handleUserChange(index,'userId', e.target.value)} placeholder='Enter UserID' />
                        </div>
                    </div>
                ))}
                <div className='flex'>
                    <div className="py-[1rem] pl-[22rem] ">
                        <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleAddUser}>
                            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Add More
                            </span>
                        </button>
                    </div>
                    <div className="py-[1rem] pl-[1rem]">
                        <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type="submit">
                            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Submit
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
