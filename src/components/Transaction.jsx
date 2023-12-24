const Transaction = ({ children, imgName, flex }) => {
  if (flex)
    return (
      <div className="h-full w-full bg-dark customMd:flex customMd:flex-row-reverse items-center gap-8 customMd:p-14 p-5 rounded-2xl">
        <div>
          <img className="w-[100rem]" src={imgName} alt="" />
        </div>
        <div>{children}</div>
      </div>
    );

  return (
    <div className="bg-dark flex flex-col gap-8 customMd:p-14 p-5 rounded-2xl h-full w-full">
      <div>
        <img src={imgName} alt="" />
      </div>
      <div className="mt-auto">{children}</div>
    </div>
  );
};

export default Transaction;
