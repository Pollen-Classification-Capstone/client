import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MapChart, { MapChartWrapper } from "../components/MapChart";
import { useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import GraphChart from "@/components/GraphChart";
import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import SectionOne from "@/components/SectionOne";

export default function Home(props: any, result: any) {
  return (
    <div className="bg-black ">
      <div className="bg-gradient-to-r from-white to-pollenblue">
        {" "}
        {/* <NavBar /> */}
      </div>
      <div>
        <Landing />
      </div>
      <div>{<SectionOne />}</div>
    </div>
  );
}
