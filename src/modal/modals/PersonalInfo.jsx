import TextInput from "layout/TextInput";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";
import { CButton } from "utility";
import cn from "utility/cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "assets/svg/CloseIcon";

export default function PersonalInfo() {
  const { closeModal, isOpen, openModal } = useModal();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: (values) => {
      openModal("AcademicBack", values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.number().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  return (
    <Modal isOpen={isOpen("PersonalInfo")} onClose={closeModal}>
      <Modal.Content className="!rounded-xl !top-[4%] !max-w-2xl !py-8 !px-6">
        <CloseIcon
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
          fill="#af9b9b"
        />
        <div className="flex justify-center items-center">
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block">
            Personal Information
          </h2>
        </div>

        <div className="py-4 mb-5 grid gap-4">
          <p className="text-[#181818] text-sx sm:text-sm md:text-base xl:text-lg font-bold">
            Step 1 <span className="font-medium text-[#717171]">of 4</span>
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A650] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A650] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A650] rounded-full")}></div>
          </div>
        </div>

        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block mb-6">
          Personal Information
        </h2>

        <form onSubmit={formik.handleSubmit} className="grid gap-6">
          <TextInput
            label="Name"
            placeholder="Enter your name"
            error={formik.touched.name && formik.errors.name}
            {...formik.getFieldProps("name")}
          />
          <TextInput
            label="Phone"
            placeholder="Enter your Phone"
            error={formik.touched.phone && formik.errors.phone}
            {...formik.getFieldProps("phone")}
          />
          <TextInput
            label="Email"
            placeholder="Enter your Email"
            type="email"
            className="!w-full"
            error={formik.touched.email && formik.errors.email}
            {...formik.getFieldProps("email")}
          />
          <div className="">
            <CButton type="submit" className="w-full !mt-4">
              Next
            </CButton>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}
