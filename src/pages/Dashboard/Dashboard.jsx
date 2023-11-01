import axios from "axios";
import { useContext } from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import FormTable from "./FormTable";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const getUserForm = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_apiLink}/api/getFormData?email=${user?.email}`
    );
    return response.data;
  };

  // react query
  const {
    data: formData = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getFormData"],
    queryFn: getUserForm,
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(formData[0]);

  return (
    <>
      <div className="container p-6">
        <h1 className="my-2 text-xl font-semibold">
          {user?.displayName} - {formData.length} Form Created
        </h1>
        <Link to="/build-form">
          <button className="bg-gray-900 text-white px-3 py-2 rounded-md duration-200 transition-all hover:bg-gray-800 flex gap-1 items-center">
            <BiPlus /> Create New Form
          </button>
        </Link>
      </div>
      {/* table start  */}
      {formData.length === 0 ? (
        <>
          <div className="p-6 shadow-lg w-fit mx-auto">
            <h1>Please Build A Form First To See Your Form</h1>
          </div>
        </>
      ) : (
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Form Name</th>
                    <th className="px-4 py-3">Response</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <FormTable formData={formData} />
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
