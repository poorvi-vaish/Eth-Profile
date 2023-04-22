import Head from "next/head";
import {statusDetails} from "@/assets/statusDetails";
import { userDetails } from "@/assets/userDetails";
import { ProfileCard, StatusCard, UserCard } from "@/components";
import { images } from '@/assets/communities';

export default function Home({images, statusDetails, userDetails}: any) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex items-center gap-10 text-white h-screen justify-center">
        <ProfileCard images={images}/>
        <div className="flex flex-col gap-16">
        <div className="flex gap-x-4">
          {statusDetails.map((item: any, index: number) => {
            return <StatusCard key={index} {...item} />;
          })}
        </div>
        <div className="flex gap-x-4">
        {userDetails.map((item: any, index: number) => {
          return (
            <UserCard key={index} {...item}/>
          )
        })}
        </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      images,
      statusDetails,
      userDetails
    },
  };
}
