import TextInput from "layout/TextInput";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";
import { CButton } from "utility";
import cn from "utility/cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import CountrySelector from "layout/CountrySelector";
import CloseIcon from "assets/svg/CloseIcon";

export default function HigherStudyInfo() {
  const { closeModal, isOpen, openModal, modal } = useModal();

  const formik = useFormik({
    initialValues: {
      country: "",
      preferedSubject: "",
    },
    onSubmit: (values) => {
      const props = modal?.props || {};
      openModal("LanguageProeffeciency", { ...props, ...values });
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Required"),
      preferedSubject: Yup.string().required("Required"),
    }),
  });

  return (
    <Modal isOpen={isOpen("HigherStudyInfo")} onClose={closeModal}>
      <Modal.Content className="!rounded-xl !top-[4%] !max-w-2xl !py-8 !px-6">
        <CloseIcon
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
          fill="#af9b9b"
        />
        <div className="flex justify-center items-center">
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block">
            Higher Study Information
          </h2>
        </div>

        <div className="py-4 mb-5 grid gap-4">
          <p className="text-[#181818] text-sx sm:text-sm md:text-base xl:text-lg font-bold">
            Step 3 <span className="font-medium text-[#717171]">of 4</span>
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A650] rounded-full")}></div>
          </div>
        </div>

        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block mb-6">
          Higher Study Information
        </h2>

        <form onSubmit={formik.handleSubmit} className="grid gap-6">
          <CountrySelector
            label="Interested Countries"
            placeholder="Select Interested Countries"
            error={formik.touched.country && formik.errors.country}
            {...formik.getFieldProps("country")}
            onChange={(code) => formik.setFieldValue("country", code)}
            value={formik.values.country}
          />
          <TextInput
            label="Prefered Subject"
            placeholder="Enter your Prefered Subject"
            error={
              formik.touched.preferedSubject && formik.errors.preferedSubject
            }
            {...formik.getFieldProps("preferedSubject")}
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
