import { useParams } from "react-router-dom";
import useSpecificFormData from "../../hooks/useSpecificFormData ";

const Preview = () => {
  const { formId } = useParams();
  const { specificFormData, isLoading, isError } = useSpecificFormData(formId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!specificFormData) {
    return <div>Data not found for formId: {formId}</div>;
  }
  return (
    <>
      <div>
        <h2>Form Name: {specificFormData.formName}</h2>
        {/* svg image here  */}
        <div></div>
        {/* contact information  */}
        <div></div>
        {/* categorize section */}
        <div></div>
        {/* cloze  section */}
        <div></div>
        {/* comprehension  section */}
        <div></div>
        {/* submit btn  */}
        <div></div>
      </div>
    </>
  );
};

export default Preview;
