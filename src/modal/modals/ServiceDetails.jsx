import CloseIcon from "assets/svg/CloseIcon";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";

export default function ServiceDetails() {
  const { closeModal, isOpen, openModal, modal } = useModal();

  console.log(modal?.props?.description)

  return (
    <Modal isOpen={isOpen("ServiceDetails")} onClose={closeModal}>
      <Modal.Content className="!rounded-xl !top-[4%] !max-w-2xl !py-8 !px-6">
        <CloseIcon
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
          fill="#af9b9b"
        />
        <div className="flex justify-center items-center">
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block">
            {modal?.props?.title}
          </h2>
        </div>

        <div
          className="py-4 mb-5 grid gap-4 text-sm md:text-base  text-[#181818] !leading-8"
          dangerouslySetInnerHTML={{ __html: modal?.props?.description }}

        ></div>
      </Modal.Content>
    </Modal>
  );
}
