import Image from "next/image";

const StatusCard = ({
  img,
  name,
  color,
  time,
  points,
  value,
  username,
  status,
  grColor,
}: any) => {
  return (
    <div
      className={`flex flex-col gap-10 rounded-2xl w-64 p-4 bg-gradient-radial from-${grColor} to-[#1a1a1a]`}
    >
      <div className="flex gap-4">
        <Image src={img} alt="" width={60} height={60} />
        <p className="font-bold">
          {name} <br />
          <span className={`font-normal text-sm text-${color}`}>{status}</span>
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray">
          {username}
          <br />
          <span>{time}</span>
        </p>
        <p className="text-right">
          {value}{" "}
          <Image
            src="/images/diamond.png"
            alt=""
            width={10}
            height={10}
            className="inline"
          />{" "}
          <br />
          <span className="text-green-600">{points}</span>
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
