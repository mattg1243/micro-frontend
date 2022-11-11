import { VStack, Input, Button, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

export default function Tasks() {

  const hostName = process.env.NODE_ENV === 'production' ? 'https://micro-tasks.onrender.com': 'http://localhost:8081';

  const [taskName, setTaskName] = useState<string>('');
  const [tasks, setTasks] = useState([]);

  const addTask = async () => {
    const response = await axios.post(`${hostName}/new-task`, {name: taskName})
    console.log(response);
    setTasks(response.data)
  }

  return (
    <VStack maxH='100px'>
      {tasks.length > 0 ? tasks.map((task) => {
        return (
          <HStack>
            <h5>{task.name}</h5>
            <p>{task.complete ? "✅" : "❌"}</p>
          </HStack>
        )
      }): <></>}
      <Input placeholder='Name' onChange={(e) => {setTaskName(e.target.value)}}></Input>
      <Button onClick={() => {
        addTask();
      }}>Save Task</Button>
    </VStack>
  )
}