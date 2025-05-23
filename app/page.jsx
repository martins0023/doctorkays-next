"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Preloader from '../components/Preloader';


const Home = () => {
  
  const router = useRouter();

  useEffect(() => {
    router.push('/blog');
  }, [router]);

  return (
    <Preloader />
  );
};

export default Home;
