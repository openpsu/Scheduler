import { Fragment } from 'react'
import { Link } from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'
const Home = () => {
    return (
      <>
     
     <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 style={{fontFamily: 'Poppins, sans-serif' }} className="text-center font-bold text-3xl text-white">
                OpenPSU Scheduler
            </h2>
          <div className='mt-4'>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ble-500"
              >
              
                Sign in with Microsoft
              </button>
            </div>

            <p className='text-white mt-4 text-center'>&copy; OpenPSU</p>
          </div>
        
        </div>
      </div>

      </>
    )
    };
    
  export default Home;