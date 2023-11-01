import { MdDelete } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";

const FormTable = ({ formData }) => {
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
            <button>
              <MdDelete></MdDelete>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default FormTable;
