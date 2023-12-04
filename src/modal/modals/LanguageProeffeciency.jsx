import TextInput from "layout/TextInput";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";
import { CButton } from "utility";
import cn from "utility/cn";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "assets/svg/CloseIcon";
import MySwal from "utility/myswal";
import axios from "axios";

export default function LanguageProeffeciency() {
  const { closeModal, isOpen, openModal, modal } = useModal();

  const formik = useFormik({
    initialValues: {
      ieltsScore: "",
    },
    onSubmit: async (values) => {
      const props = modal?.props || {};
      const data = { ...props, ...values };

      try {
        MySwal.fire({
          title: "Please Wait...",
          allowOutsideClick: false,
          didOpen: () => {
            MySwal.showLoading();
          },
        });

        const res = await axios.post(
          process.env.REACT_APP_API_URL + "/bookings/create",
          data
        );

        MySwal.close();

        MySwal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        closeModal();
       
      } catch (error) {
        MySwal.close();
        MySwal.fire({
          title: "Error",
          text: error?.message || "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    },
    validationSchema: Yup.object({
      ieltsScore: Yup.string()
        .required("Required")
        .max(9, "Invalid Range")
        .min(0, "Invalid Range"),
    }),
  });

  return (
    <Modal isOpen={isOpen("LanguageProeffeciency")} onClose={closeModal}>
      <Modal.Content className="!rounded-xl !top-[4%] !max-w-2xl !py-8 !px-6">
        <CloseIcon
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer"
          fill="#af9b9b"
        />

        <div className="flex justify-center items-center">
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block">
            Language Proficiency
          </h2>
        </div>

        <div className="py-4 mb-5 grid gap-4">
          <p className="text-[#181818] text-sx sm:text-sm md:text-base xl:text-lg font-bold">
            Step 4 <span className="font-medium text-[#717171]">of 4</span>
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
            <div className={cn("p-1 bg-[#0090A6] rounded-full")}></div>
          </div>
        </div>

        <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold mx-auto inline-block mb-6">
          Language Proficiency
        </h2>

        <form onSubmit={formik.handleSubmit} className="grid gap-6">
          <TextInput
            label="IELTS Score"
            placeholder="Enter your IELTS Score"
            error={formik.touched.ieltsScore && formik.errors.ieltsScore}
            type="number"
            {...formik.getFieldProps("ieltsScore")}
          />

          <div className="">
            <CButton type="submit" className="w-full !mt-4">
              Submit
            </CButton>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}
