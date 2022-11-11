import axios from 'axios';
import { useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';

export default function Counter() {
  
  const [count, setCount] = useState<number>(0);

  const hostName = process.env.NODE_ENV === 'production' ? 'https://micro-counter.onrender.com': 'http://localhost:8080';

  const add = async () => {
    try {
      const response = await axios.get(`${hostName}/add`)
      console.log(response);
      setCount(response.data);
    } catch (err) {
      console.error(err)
    }
  }

  const sub = async () => {
    try {
      const response = await axios.get(`${hostName}/sub`)
      console.log(response);
      setCount(response.data);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <VStack>
      <h3>{count}</h3>
      <Button onClick={() => {add()}}>Add</Button>
      <Button onClick={() => {sub()}}>Subtract</Button>
    </VStack>
  )
}