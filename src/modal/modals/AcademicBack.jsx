import TextInput from "layout/TextInput";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";
import { CButton } from "utility";
import cn from "utility/cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "assets/svg/CloseIcon";

export default function AcademicBack() {
  const { closeModal, isOpen, openModal, modal } = useModal();

  const formik = useFormik({
    initialValues: {
      ssc: "",
      hsc: "",
      bachelor: "",
    },
    onSubmit: (values) => {
      const props = modal?.props || {};
      openModal("HigherStudyInfo", { ...props, ...values });
    },
    validationSchema: Yup.object({
      ssc: Yup.number("Number Only").required("Required").max(5, "Invalid Range").min(2, "Invalid Range"),
      hsc: Yup.number("Number Only").required("Required").max(5, "Invalid Range").min(2, "Invalid Range"),
      bachelor: Yup.number("Number Only").optional().max(4, "Invalid Range").min(2, "Invalid Range"),
    }),
  });

  return (
    <Modal isOpen={isOpen("AcademicBack")} onClose={closeModal}>
      <Modal.Content className="!rounded-xl !top-[4%] !max-w-2xl !py-8 !px-6">
        <CloseIcon
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
          fill="#af9b9b"
        />
        <div className="flex justify-center items-center">
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block">
            Academic Background
          </h2>
        </div>

        <div className="py-4 mb-5 grid gap-4">
          <p className="text-[#181818] text-sx sm:text-sm md:text-base xl:text-lg font-bold">
            Step 2 <span className="font-medium text-[#717171]">of 4</span>
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A650] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A650] rounded-full")}></div>
          </div>
        </div>

        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block mb-6">
          Academic Background
        </h2>

        <form onSubmit={formik.handleSubmit} className="grid gap-6">
          <TextInput
            label="SSC Result"
            placeholder="Enter your SSC result"
            error={formik.touched.ssc && formik.errors.ssc}
            type="number"
            {...formik.getFieldProps("ssc")}
          />
          <TextInput
            label="HSC Result"
            placeholder="Enter your HSC result"
            error={formik.touched.hsc && formik.errors.hsc}
            type="number"
            {...formik.getFieldProps("hsc")}
          />
          <TextInput
            label="Bachelor Result (Optional)"
            placeholder="Enter your Bachelor result"
            className="!w-full"
            error={formik.touched.bachelor && formik.errors.bachelor}
            type="number"
            {...formik.getFieldProps("bachelor")}
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
