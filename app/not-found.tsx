import { BackButton } from '@/components/BackButton';
import { AlertTriangle } from 'lucide-react';
const Notfound = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
       <AlertTriangle className='w-32 h-32 text-red-700' />
       <p className='font-semibold text-2xl dark:text-white'>Page Not Found</p>
       <BackButton text='Back To Dashboard' link='/' />
    </div>
  )
}

export default Notfound