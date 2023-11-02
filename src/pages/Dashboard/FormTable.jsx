import { MdDelete } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useFormData from "../../hooks/useFormData";

const FormTable = ({ formData }) => {
  const [, , refetch] = useFormData();
  const handleDeleteSingleForm = async (formId) => {
    try {
      const response = await axios.delete(
        `https://form-elysium-server-mostakimw.vercel.app/api/deleteFormData?formId=${formId}`
      );
      if (response.data.deletedCount > 0) {
        toast.success("Form deleted successfully.");
        refetch();
      } else {
        toast.error("Form deletion failed.");
      }
    } catch (error) {
      toast.error("Error deleting form:", error);
      console.error("Error deleting form:", error);
    }
  };

  return (
    <>
      {formData.map((form, index) => (
        <tr key={index} className="text-gray-700">
          <td className="px-4 py-3 text-md font-semibold border">
            {form.formName}
          </td>
          <td className="px-4 py-3 text-md font-semibold border">
            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
              {form.response}
            </span>
          </td>
          <td className="px-4 py-3 text-xs border">
            <Link to={`/preview-form/${form.formId}`}>
              <button className="my-btn">Link</button>
            </Link>
          </td>
          <td className="px-4 py-3 text-xs border">
            {moment(form.date).format("M/D/YYYY")}
          </td>
          <td className="px-4 py-3 text-xl border">
            <button onClick={() => handleDeleteSingleForm(form?.formId)}>
              <MdDelete></MdDelete>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default FormTable;
