"use client"
import React, { useState } from "react";
import { fiftyDummyData } from "@/lib/dummyMail";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArchiveRestore,
  BookImage,
  Clock7,
  GripVertical,
  MailOpen,
  Star,
  Tag,
  Trash2,
  Users,
} from "lucide-react";
import { MdLabelImportantOutline } from "react-icons/md";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface props {
  setMailId?: React.Dispatch<React.SetStateAction<string>>;
}

const ListingPage = ({ setMailId }: props) => {
  const [currentHoverdMail, setHoverdMail] = useState<string>("");
  const [mailCategory, setmailCategory] = useState<mailCatType>("primary");
  console.log(fiftyDummyData, "fiftyDummyData");
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center w-10/12  ">
        <div
          onClick={() => setmailCategory("primary")}
          className={`tab1 w-1/3 flex items-center gap-3 ${
            mailCategory === "primary" && "border-b-4 border-blue-700"
          }   hover:bg-gray-700 py-4 cursor-pointer px-2`}>
          <BookImage className="w-5 h-5" />
          <p className="text-sm font-normal text-gray-400 ">Primary</p>
        </div>

        <div
          onClick={() => setmailCategory("promotions")}
          className={`tab2 w-1/3 flex items-center gap-3  ${
            mailCategory === "promotions" && "border-b-4 border-blue-700"
          } cursor-pointer hover:bg-gray-700 p-2`}>
          <Tag className="w-5 h-5" />
          <div>
            <p className="text-sm font-normal text-gray-400 ">
              Promotions{" "}
              <span className="bg-green-600 text-xs rounded-xl mx-1 px-1 py-1 text-white">
                6 new
              </span>{" "}
            </p>
            <p className="text-sm font-normal text-muted ">
              Naukri,Air india ,express, grow
            </p>
          </div>
        </div>
        <div
          onClick={() => setmailCategory("social")}
          className={`tab3 w-1/3 flex items-center gap-3 ${
            mailCategory === "social" && "border-b-4 border-blue-700"
          } cursor-pointer hover:bg-gray-700 p-2`}>
          <Users className="w-5 h-5" />
          <div>
            <p className="text-sm font-normal text-gray-400 ">
              Socials{" "}
              <span className="bg-blue-600 text-xs rounded-xl mx-1 px-1 py-1 text-white">
                6 new
              </span>{" "}
            </p>
            <p className="text-sm font-normal text-muted my-1 ">
              Naukri,Air india ,express, grow
            </p>
          </div>
        </div>
      </div>

      {fiftyDummyData &&
        fiftyDummyData.map((item) => {
          return (
            <div
              onClick={() => {
                // setMailId(item.id);

                router.push(`/dashboard/mail-Details/${item.id}`,{ scroll: true });


              }}
              onMouseEnter={() => setHoverdMail(item.id)}
              onMouseLeave={() => setHoverdMail("")}
              key={item.id}
              className={`mail flex items-center hover:shadow-2xl ${
                currentHoverdMail === item.id && "border border-secondary"
              }   px-2 py-1 shadow-cyan-500/50 mb-4 cursor-pointer`}>
              <div
                className={`1 flex items-center ${
                  currentHoverdMail === item.id && "text-gray-100"
                } text-muted gap-4 w-4/12`}>
                <div className="flex items-center ">
                  <GripVertical className="w-4 h-4 text-muted" />
                  <Checkbox
                    className={`border-secondary  ${
                      currentHoverdMail === item.id && "border-primary"
                    }  `}
                  />
                </div>
                <Star className="w-4 h-4" />
                <MdLabelImportantOutline className="w-5 h-5 " />
                <p className="text-white font-light">{item.name}</p>
              </div>
              <div className="2 w-7/12 flex items-center">
                <p className="font-light">{item.heading.slice(0, 45)} </p>

                <span className="text-gray-500">
                  -{" "}
                  {item.desc.slice(0, currentHoverdMail === item.id ? 20 : 29)}
                  {item.desc.length > 29 && "..."}
                </span>

                {currentHoverdMail === item.id && (
                  <div className="flex items-center gap-3 ml-2 ">
                    <button className="px-1 border border-gray-600 py-0 text-xs">
                      unsuscribe
                    </button>
                    <ArchiveRestore className="w-4 h-4" />
                    <Trash2 className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="3  text-sm w-1/12">
                {currentHoverdMail === item.id ? (
                  <div className="flex items-center gap-3">
                    <MailOpen className="w-4 h-4" />
                    <Clock7 className="w-4 h-4" />
                  </div>
                ) : (
                  <p>11:45pm</p>
                )}
              </div>
            </div>
          );
        })}

      <Separator className="my-1 text-gray-600" />
    </div>
  );
};

export default ListingPage;
