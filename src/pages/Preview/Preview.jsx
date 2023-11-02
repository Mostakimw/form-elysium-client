import { useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import ContactInfo from "./ContactInfo";
import CategorizeInfo from "./CategorizeInfo";
import useSpecificFormData from "../../hooks/useSpecificFormData ";

const Preview = () => {
  const { formId } = useParams();
  const { isLoading } = useSpecificFormData(formId);
  const methods = useForm();

  // const onSubmit = (data) => {
  //   // You can handle form submission here

  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="my-12 max-w-6xl mx-auto border-2">
        {/* svg image here */}
        <div></div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* Include other form sections like ContactForm */}
            <ContactInfo />

            {/* Include the Categorize section */}
            <CategorizeInfo />

            {/* Include other form sections as needed (e.g., ClozeForm, ComprehensionForm) */}

            {/* Submit Button for the entire form */}
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Preview;
