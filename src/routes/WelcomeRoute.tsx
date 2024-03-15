import { useNavigate } from 'react-router-dom';
import image from '../public/makeUrTasks.png';
import Footer from '../components/Footer';

function WelcomeRoute() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col bg-[#11111F]">

      <header className="w-full h-[10%]">
        <div className="flex flex-col m-6 font-semibold">
          <span className="text-2xl text-white">Be Organized.</span>
          <span className="text-[#68D2DF] text-xl">Start Now.</span>
        </div>
      </header>

      <main className="relative w-full h-[85%] flex flex-col justify-center items-center">
        <img src={ image } alt="logo" />
        <div
          className="h-[30%] justify-center text-white flex items-center flex-col gap-3"
        >
          <button
            className="bg-black font-light var w-40 rounded-2xl p-1"
            onClick={ () => navigate('/logIn') }
          >
            LOG IN
          </button>
          <span
            className="w-40 text-center font-extralight"
          >
            {'Don\'t have an account?'}
          </span>
          <button
            className="bg-black font-light var w-40 rounded-2xl p-1"
            onClick={ () => navigate('/signUp') }
          >
            SING UP
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WelcomeRoute;
