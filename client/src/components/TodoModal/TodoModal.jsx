export const TodoModal = ({showModal, children}) => {

  return (
    <div className="flex justify-center">
      {showModal && (
        <div className="absolute top-0 bg-gray-600 opacity-70 h-full w-screen left-0 z-10"></div>
      )}
      {showModal && (
        <div className="absolute top-60 p-4 z-10 rounded">
          {children}
        </div>
      )}
    </div>
  );
};
