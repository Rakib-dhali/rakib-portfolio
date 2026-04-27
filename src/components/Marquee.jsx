import { SlidingLogoMarquee } from '@/components/lightswind/sliding-logo-marquee';
import {logos} from '../constants/logos.jsx';
    
export default function Marquee() {

    
  return (
    <>
    <h2 className='my-20 text-center text-4xl'>Technologies & Tools</h2>
    <SlidingLogoMarquee items={logos} />
    </>
  )
}