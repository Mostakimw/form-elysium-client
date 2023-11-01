import { MdDelete } from "react-icons/md";

const FormTable = ({ formData }) => {
  console.log(formData);
  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 text-md font-semibold border">Form Name</td>
      <td className="px-4 py-3 text-md font-semibold border">
        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
          6
        </span>
      </td>
      <td className="px-4 py-3 text-xs border">6/4/2000</td>
      <td className="px-4 py-3 text-xl border">
        <button>
          <MdDelete></MdDelete>
        </button>
      </td>
    </tr>
  );
};

export default FormTable;
