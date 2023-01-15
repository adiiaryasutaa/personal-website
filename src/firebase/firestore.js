import { getFirestore } from 'firebase/firestore';
import app from '@/firebase/app';

export default getFirestore(app);