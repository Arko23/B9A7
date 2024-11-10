

const Header = () => {
    return (
        <div>
     <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl">Recipie-Method</a>
    <div className="ml-[280px]">
    <ul className="flex gap-9 font-semibold">
        <li>Home</li>
        <li>Recipies</li>
        <li>About</li>
        <li>Search</li>
    </ul>
  </div>
  </div>
  
  <div className="flex-none gap-2">
  <div className="form-control md:rounded-3xl lg:rounded-3xl relative flex items-center">
  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto pl-10" />
  <img src="https://i.ibb.co/8zVVNfy/search-Icon.png" alt="Search" className="absolute left-0 pl-3 mt-4 h-full pointer-events-none" style={{ width: 'auto', height: '20px' }} />
    </div>




    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-green-600">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/Q607JyK/profile-Icon.png" />
        </div>
      </div>
      <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;