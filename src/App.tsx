import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './conponets/Greet';
import { Person } from './conponets/Person';
import { PersonList } from './conponets/PersonList';
import { Heading } from './conponets/Heading';
import { Status } from './conponets/Status';
import { ReactNode } from './conponets/ReactNode';
import {Button} from './conponets/Button';
import {Input} from './conponets/Input'
import { Container } from './conponets/Container';
import { LogIn } from './conponets/State/LogIn';
import { User } from './conponets/State/User';
import { Counter } from './conponets/State/Counter';
import { ThemeContextP } from './conponets/Context/ThemeContextP';
import { Box } from './conponets/Context/Box';
import { UserContexP } from './conponets/Context/UserContexP';
import { UserCon } from './conponets/Context/UserCon';
import { DomRef } from './conponets/Ref/DomRef';
import { Profile } from './conponets/Auth/Profile';
import { Private } from './conponets/Auth/Private';
import { List } from './conponets/Generic/List';
import { Numberic } from './conponets/Restrict.tsx/Numberic';
import { Exclude } from './conponets/TemplatePosition/Exclude';
import {ButtonColor} from './conponets/HTML/Button'
import {ExtraComponet} from './conponets/HTML/ExtraComponet'

function App() {
  const person={
    first:'Khin',
    last:'Chan',
  }

  const personList=[
    {
      first:'Aye',
      last:'May'
    },
    {
      first:'Aung',
      last:'Khaing'
    },
    {
      first:'Su',
      last:'Htet'
    }

  ]


  return (
    <div className="App">
     <Greet name='vish' age={20} isLogIn={true}/>
     <Person name={person}/>
     <PersonList names={personList}/>
     <Status message='error'/>
     <Heading>This is Child from Heading</Heading>

     <ReactNode>
        <Heading>This is React Node from Heading</Heading>
     </ReactNode>

    <Button HandleClick={(event,id)=>{
      console.log("button Clicked",event,id)
    }}/>

    <Input value='' HandleChange={(event)=>{
      console.log(event)
    }}/>
   
     <Container style={{border:"1px solid", padding:"10px"}}/>

     <LogIn></LogIn>
     <User ></User>
     <Counter></Counter>
  
    <ThemeContextP>
      <Box></Box>
    </ThemeContextP>

    <UserContexP>
    <UserCon></UserCon>
    </UserContexP>

   <DomRef></DomRef>

   <Private isLogIn={false} Componet={Profile} ></Private>

   {/* <List Lists={['a','b','c']} onClick={(item)=>console.log(item)}></List>
   <List Lists={[1,2,3]} onClick={(item)=>console.log(item)}></List> */}
   <List Lists={[
     {
       id:1,
       name:'su',
       age:'20'
     },
     {
      id:2,
      name:'su',
      age:'20'
    },
   ]} onClick={(list)=>console.log(list)}></List>


   <Numberic value={10} isNagative></Numberic>

   <Exclude position={'center'}></Exclude>
   <ButtonColor variant='primary' onClick={()=>{console.log('clicked')}}> 77 </ButtonColor>
   <ExtraComponet name='chan' age={20} isLogIn={false}></ExtraComponet>
    </div>
  );
}

export default App;
