import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSidedNav = () => {
  return (
    <div>
      <div className='p-4'>
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
        <button className="btn btn-outline w-full mb-2">
          <FcGoogle className='text-xl'></FcGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full ">
          <FaGithub className='text-xl'></FaGithub>
          Login with Github
        </button>
      </div>
      <div className='p-4'>
        <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
        <a href='' className="w-full p-4 border rounded-t-lg flex gap-2 items-center">
          <FaFacebook className='text-xl text-blue-600'></FaFacebook>
          Facebook
        </a>
        <a href='' className="w-full p-4 border flex gap-2 items-center">
          <FaTwitter className='text-xl text-blue-400'></FaTwitter>
          Twitter
        </a>
        <a href='' className="w-full p-4 border rounded-b-lg flex gap-2 items-center">
          <FaInstagram className='text-xl text-[#D82D7E]'></FaInstagram>
          Instagram
        </a>
      </div>
      {/* Q zone */}
      <div className='p-4'>
        <h2 className="text-xl font-semibold mb-5">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSidedNav;
