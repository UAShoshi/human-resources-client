// linear-gradient(90.31deg, #FF8620 -1.02%, #FF2D3D 132.59%)

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="mx-auto text-center font-bold md:w-4/12 my-8">
      <h3 className="text-3xl uppercase border-b-[#f5602f] border-b-4 py-4">{heading}</h3>
      <p className="mb-2 text-[#A6A6A6] italic">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;