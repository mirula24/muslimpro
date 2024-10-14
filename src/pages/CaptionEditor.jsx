import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button, Divider } from '@nextui-org/react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function CaptionEditor() {
    const { id } = useParams();
    const [caption, setCaption] = useState({});

    const handleReject = () => {
      
    }

    const handleAccept = () => {
      
    }
    
    

  return (
    <div className='flex w-full min-h-screen items-center justify-center'>


    <Card className="w-[400px]">
    <CardHeader className="flex gap-3">
      <div className="flex flex-col">
        <p className="text-md">Caption by {caption.email}</p>
        <p className="text-small text-default-500">Ready for review</p>
      </div>
    </CardHeader>
    <Divider/>
    <CardBody>
      <p>Id : {caption.id}</p>
      <p>Baris1 : {caption.baris1}</p>
      <p>Baris2 : {caption.baris2}</p>
      <p>Baris3 : {caption.baris3}</p>
      <p>Baris4 : {caption.baris4}</p>

    </CardBody>
    <CardFooter className='w-full flex justify-between'>
        <Button variant='ghost' onClick={handleReject}>
            Reject
        </Button>
        <Button variant='solid' onClick={handleAccept}>
            Accept
        </Button>
    </CardFooter>
    <Divider/>
  </Card>
  </div>
);
}

export default CaptionEditor
