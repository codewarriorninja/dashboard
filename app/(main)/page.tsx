import { ChartGraph } from "@/components/dashboard/ChartGraph";
import { Component } from "@/components/dashboard/Component";
import { Radar } from "@/components/dashboard/Radar";
import PostsTable from "@/components/posts/PostsTable";
export default function Home() {
  return (
    <>
   <div className="flex flex-col gap-10 sm:flex-row">
    <Component />
    <Radar />
   </div>
   <ChartGraph />
   <PostsTable title="Latest Posts" limit={5} />
   </>
  );
}
