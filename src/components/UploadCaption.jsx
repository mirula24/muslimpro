import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  useDisclosure,
  Button,
  Input,
  Textarea
} from "@nextui-org/react";
import { Images } from "../assets";
import CaptionApi from "../api/CaptionApi";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UploadCaption() {
  const navigation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await CaptionApi.createCaption(data);
      const captionId = response.Id; // Assuming the API returns an object with an 'Id' field

      // Create a hidden input for captionId
      const hiddenInput = document.createElement('input');
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'captionId';
      hiddenInput.value = captionId;

      // Append the hidden input to the form
      formRef.current.appendChild(hiddenInput);

      await emailjs.sendForm(
        'service_z1iwj09', 
        'template_vr3x4xi', 
        formRef.current, // Use the form element directly
        'YvN2U92L3CUzrBRW6' // Your public key
      );

      // Remove the hidden input after sending
      formRef.current.removeChild(hiddenInput);

      console.log('Caption created and email sent successfully!');
      onOpen(); // Open the modal on successful submission
    } catch (error) {
      console.error("Failed to submit caption or send email:", error);
      toast("email already submit");
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateToHome = () => {
    onClose();
    navigation('/');
  };

  return (
    <div className="flex flex-wrap mt-20 md:mt-0 pb-10 min-h-screen items-center">
      <div className="md:w-1/2 w-full px-8 md:px-10 justify-center items-center pb-10">
        <h2 className="text-white text-2xl font-bold">Cara upload</h2>
        <p className="text-primary-foreground text-xl font-semibold">
          Terdapat 4 baris input yang bisa anda isi, dimana masing-masing baris
          akan menjadi satu caption yang berhubungan
        </p>
        <p className="text-primary-foreground text-xl font-semibold">Contoh :</p>
        <img src={Images.contoh} alt="Contoh caption" className="self-center mx-auto w-[300px]" />
        <p className="text-primary-foreground text-xl font-semibold">
          anda dapat membuat caption untuk satu email satu caption, jika caption anda telah melewati tahap review, maka anda dapat meupload caption baru
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col items-center w-full gap-10">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-xs" aria-label="Caption submission form">
          <Input
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
            })}
            type="email"
            label="Email"
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
          {['baris1', 'baris2', 'baris3', 'baris4'].map((field, index) => (
            <Textarea
              key={field}
              {...register(field, { required: `Baris ${index + 1} is required` })}
              label={`Baris ${index + 1}`}
              placeholder="Tuliskan di sini"
              isInvalid={!!errors[field]}
              errorMessage={errors[field]?.message}
            />
          ))}
          <Button type="submit" className="bg-customOrange text-white" isLoading={isSubmitting}>
            Submit Caption
          </Button>
        </form>
      </div>
      <ToastContainer />
      <Modal 
        size="md" 
        isOpen={isOpen} 
        onClose={onClose} 
        aria-labelledby="modal-title"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" id="modal-title">Terima Kasih</ModalHeader>
              <ModalBody>
                <p> 
                  Caption anda akan melalui tahap review, jika caption yang anda upload lolos tahap review maka
                  nanti akan muncul di beranda website ini.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={navigateToHome}>
                  Kembali
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}