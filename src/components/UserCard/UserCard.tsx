import Image from "next/image";

const UserCard = (props: any) => {
  return (
    <div className="flex flex-col gap-6 bg-card rounded-md w-64 p-1">
      <div className="relative">
        <Image
          src={props.img}
          alt=""
          width={250}
          height={250}
          className=""
        />
        <div className="flex bg-[#1a1a1a] opacity-70 rounded-full px-2 py-1 absolute bottom-1 right-1">
          <p className="font-bold">3 Months</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <p className="font-bold ">{props.name}</p>
        <div className="flex justify-between">
          <p className="text-gray">
            Bought
            <br /> <span>Floor</span>
          </p>
          <p className="text-white text-right">
            {props.bought}
            <Image
              src="/images/diamond.png"
              alt=""
              width={10}
              height={10}
              className="inline mx-1"
            />
            <br />
            <span>
              {props.floor}
              <Image
                src="/images/diamond.png"
                alt=""
                width={10}
                height={10}
                className="inline mx-1"
              />
              <span className="text-green-600 p-1">{props.score}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
