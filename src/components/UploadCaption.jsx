import React, { useRef } from "react";
import { Images } from "../assets";
import emailjs from "@emailjs/browser";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

function UploadCaption() {
  const form = useRef();
  const navigation = useNavigate();
  const {isOpen, onOpen, onClose} = useDisclosure();

  const checkEmail = () => {
    
  }
  

  const sendEmail = (e) => {
    e.preventDefault();
    handleOpen();

    // emailjs
    //   .sendForm("service_z1iwj09", "template_vr3x4xi", form.current, {
    //     publicKey: "YvN2U92L3CUzrBRW6",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };

  const buttonBeranda = () => {
    onClose();
    navigation('/');
  }
  

  const handleOpen = () => {
    onOpen();
  }
  return (
    <div className="flex flex-wrap mt-20 pb-10">
      <div className="md:w-1/2 w-full px-8 md:10 justify-center items-center pb-10">
        <p className="text-white text-2xl font-bold">Cara upload</p>
        <p className="text-white text-xl font-semibold">
          Terdapat 4 baris input yang bisa anda isi, dimana masing-masing baris
          akan menjadi satu caption yang berhubungan
        </p>
        <p className="text-white text-xl font-semibold">Contoh :</p>
        <img src={Images.contoh} alt="" className="self-center mx-auto w-[300px]" />
        <p className="text-white text-xl font-semibold">
          anda dapat membuat caption untuk satu email satu caption, jika caption anda telah melewati tahap review, maka anda dapat meupload caption baru
        </p>
        <p></p>
      </div>
      <div className="md:w-1/2 w-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col px-10 gap-3"
        >
          <div className="flex justify-center gap-10 w-full items-center">
            <label className="text-white font-semibold text-xl">Email : </label>
            <input
            required
              type="email"
              name="email"
              className="w-1/2 text-xl px-2 text-white h-10 rounded-md bg-transparent border-white border-solid focus:border-white outline-white ring-2 ring-white"
            />
          </div>
          <label className="text-white font-semibold text-xl">Baris 1 </label>
          <input
            type="text"
            name="teksArab"
            className="w-full text-xl px-2 text-white h-10 rounded-md bg-transparent border-white focus:border-white outline-white ring-2 ring-white "
          />
          <label className="text-white font-semibold text-xl">Baris 2 </label>
          <input
            type="text"
            name="teksLatin"
            className="w-full text-xl px-2 text-white h-10 rounded-md bg-transparent border-white focus:border-white outline-white ring-2 ring-white "
          />
          <label className="text-white font-semibold text-xl">Baris 3 </label>
          <input
            type="text"
            name="ayat"
            className="w-full text-xl px-2 text-white h-10 rounded-md bg-transparent border-white focus:border-white outline-white ring-2 ring-white "
          />
          <label className="text-white font-semibold text-xl">Baris 4 </label>
          <input
            type="text"
            name="artinya"
            className="w-full text-xl px-2 text-white h-10 rounded-md bg-transparent border-white focus:border-white outline-white ring-2 ring-white "
          />

          <input
            type="submit"
            value="Send"
            className="mt-10 cursor-pointer bg-customGreen text-white font-semibold border-none px-8 py-2 rounded-md"
          />
        </form>
      </div>
      <Modal 
        size='md' 
        isOpen={isOpen} 
        onClose={onClose} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Terima Kasih</ModalHeader>
              <ModalBody>
                <p> 
                  Caption anda akan melalui tahap review, jika caption yang anda upload lolos tahap review maka
                  nanti akan muncul di beranda website ini.
                </p>
              
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={buttonBeranda}>
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

export default UploadCaption;
