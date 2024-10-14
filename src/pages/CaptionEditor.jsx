import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button, Divider } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CaptionApi from '../api/CaptionApi';

function CaptionEditor() {
    const { id } = useParams();
    const [caption, setCaption] = useState({});
    const navigate = useNavigate()

    const handleReject = async () => {
      try {
        await CaptionApi.deleteCaption(id);
        navigate("/");
      } catch (error) {
        console.error("Error rejecting caption:", error);
        // Handle error (e.g., show error message to user)
      }
    }

    const handleAccept = async () => {
      try {
        await CaptionApi.updateStatusCaption(id);
        navigate("/");
      } catch (error) {
        console.error("Error accepting caption:", error);
        // Handle error (e.g., show error message to user)
      }
    }

    const getOneCaption = async (id) => {
      try {
        const response = await CaptionApi.getCaptionbyId(id);
        setCaption(response);
      } catch (error) {
        console.error("Error fetching caption:", error);
        // Handle error (e.g., show error message to user)
      }
    }
    
    useEffect(() => {
        getOneCaption(id)
    }, [id]);

    return (
        <div className='flex w-full min-h-screen items-center justify-center'>
            <Card className="w-[400px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">Caption by {caption.Email}</p>
                        <p className="text-small text-default-500">Ready for review</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p>Id : {caption.Id}</p>
                    <p>Baris1 : {caption.Baris1}</p>
                    <p>Baris2 : {caption.Baris2}</p>
                    <p>Baris3 : {caption.Baris3}</p>
                    <p>Baris4 : {caption.Baris4}</p>
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

export default CaptionEditor;