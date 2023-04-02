import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MapChart, { MapChartWrapper } from "../components/MapChart";
import { useState } from "react";
import { GetServerSideProps } from "next";
import GraphChart from "@/components/GraphChart";
import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import SectionOne from "@/components/SectionOne";
import DataSection from "@/components/DataSection";
import prisma from "@/lib/prisma";

export default function Home(props: any) {
  return (
    <div className="bg-black ">
      <div className="bg-gradient-to-r from-white to-pollenblue">
        {" "}
        {/* <NavBar /> */}
      </div>
      <div>
        <Landing />
      </div>
      <div className="flex">{<SectionOne />}</div>
      <div id="home"> {props && <DataSection props={props} />}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.pollen_data.findMany({ take: 10000 });
  const result = await prisma.$queryRaw`SELECT 
      index,
      CASE greatest (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12)
      WHEN p1  THEN '1'
      WHEN p2  THEN '2'
      WHEN p3  THEN '3'
      WHEN p4  THEN '4'
      WHEN p5  THEN '5'
      WHEN p6  THEN '6'
      WHEN p7  THEN '7'
      WHEN p8  THEN '8'
      WHEN p9  THEN '9'
      WHEN p10  THEN '10'
      WHEN p11  THEN '11'
      WHEN p12  THEN '12'
      END AS Selected_type
      FROM public.pollen_data;`;

  return {
    props: { feed, result },
  };
};
