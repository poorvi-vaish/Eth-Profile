import { images } from "@/assets/communities";
import {skills} from "@/assets/skills";

import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="bg-card rounded-2xl w-96 p-6 flex flex-col gap-y-12">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/Rectangle18.png"
            alt="profile"
            width={100}
            height={100}
            className="ring-4 ring-offset-4 ring-offset-black ring-[#ffc148] rounded-full"
          />
          <div className="bg-[#F8A9101A] rounded-full content-center p-2">
            <p className="text-center text-[#FFC148] font-bold">LVL 2</p>
          </div>
        </div>
        <p className="font-bold text-lg">
          dingaling.eth
          <br />
          <span className="text-gray">0xadgf....jkld</span>
        </p>
      </div>
      <div className="flex gap-2">
        <div className="flex bg-[#1a1a1a] rounded-full p-2 items-center">
          <Image
            src="/images/Vector.png"
            alt="twitter"
            width={30}
            height={30}
          />
          <p>@dingalingts</p>
        </div>
        <div className="bg-[#1a1a1a] rounded-full p-1">
          <Image
            src="/images/website.png"
            alt="website"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div>
        <p className="text-gray">
          An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and
          owner of 📦 @nftboxes
        </p>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-gray">Common Communities (3)</p>
        {""}
        <div className="flex gap-2">
          {images.map((item: string, index: number) => (
              <Image
                key={index}
                src={item}
                alt="image"
                width={50}
                height={50}
                className="rounded-lg"
              />
            ))}
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
        {skills.map((item: any, index: number) => (
            <div
              className={`flex rounded-full px-2 py-1 items-center gap-4 border border-[${item.color}] text-[${item.color}]`}
              key={index} >
              <p>{item.skill}</p>
              <p>{item.score}</p>
            </div>
          ))}
      </div>
      <button className="rounded-full border border-white p-4">
        Subscribe
      </button>
    </div>
  );
};

export default ProfileCard;
