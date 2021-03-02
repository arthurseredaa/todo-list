import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
});

export const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    if (data.name.length > 0) {
      console.log(data);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="mx-auto flex items-center justify-center">
        <div className="lg:w-1/3 md:w-1/2 flex flex-col">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Please login here :)
          </h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
                {errors.name?.message && (
                  <p>{errors.name?.message}</p>
                )}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                ref={register}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={register}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
