import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="RightContent"
      className=" h-full rounded-4xl flex overflow-x-auto no-scrollbar flex-nowrap gap-7 w-5/8 p-6"
    >
      {props.users.map((elem, index) => (
        <RightCard
          color={elem.color}
          index={index}
          key={index}
          img={elem.img}
          tag={elem.tag}
          intro={elem.intro}
        />
      ))}
    </div>
  );
};

export default RightContent;
