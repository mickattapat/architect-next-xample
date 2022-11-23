import { useEffect } from 'react';
import { testService } from '../apis'
import styles from '../styles/Home.module.css'
import TestView from '../views/TestView';

export default function Home() {
  const getUsers = async () => {
    const data = await testService.testGetUsers()
    console.log(data);
  }

  useEffect(()=> {
    getUsers()
  },[])
  
  return (
    <div className={styles.container}>
      <TestView/>
    </div>
  )
}
