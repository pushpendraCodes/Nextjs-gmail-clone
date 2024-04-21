"use client"

import { fiftyDummyData } from "../../lib/dummyMail";
import {
  ArchiveRestore,
  ArrowLeft,
  Info,
  Trash2,
  MessageSquareDot,
  Clock4,
  CalendarPlus2,
  EllipsisVertical,
  Star,
  ChevronDown,
  Reply,
  Printer,
  ExternalLink,
  X,
  Forward,
} from "lucide-react";
import { MdLabelImportantOutline } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./button";
import { useRouter  } from "next/navigation";
interface ChildComponentProps {
  mailId?: string | null; // Define the type of the 'id' prop
  setMailId?: React.Dispatch<React.SetStateAction<string>>;
}


const DetailsPage = ({ mailId ,setMailId}: ChildComponentProps) => {
  console.log(mailId)
  const router = useRouter()

  return (
    <div className="container">
      <div className="icons flex gap-8 items-center">
        <ArrowLeft
          onClick={() => {

            router.back()
          }}
          className="w-5 h-5 cursor-pointer"
        />
        <ArchiveRestore className="w-5 h-5 cursor-pointer" />
        <Info className="w-5 h-5 cursor-pointer" />
        <Trash2 className="w-5 h-5 cursor-pointer" />
        <MessageSquareDot className="w-5 h-5 cursor-pointer" />
        <Clock4 className="w-5 h-5 cursor-pointer" />
        <CalendarPlus2 className="w-5 h-5 cursor-pointer" />
        <MdLabelImportantOutline className="h-5 w-5 cursor-pointer" />
        <EllipsisVertical className="h-5 w-5 cursor-pointer" />
      </div>

      <div className="header my-5  flex justify-between ">
        <div className="flex px-5 items-center gap-3 ">
          <p className="text-2xl">Issue 223: Long context</p>
          <button className="p-2 hover:bg-muted rounded-full">
            <MdLabelImportantOutline className="h-5 w-5 cursor-pointer" />
          </button>
          <button className="flex bg-muted p-1 text-xs rounded-md items-center gap-1">
            inbox
            <X className="w-3 h-3" />
          </button>
        </div>
        <div className=" flex items-center gap-3">
          <Printer className="w-5 h-5 cursor-pointer" />
          <ExternalLink className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="userDetails my-4 flex  justify-between w-full">
        <div className="1 flex w-1/2 gap-3 ">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="usermail">
            <p className="flex items-center gap-3">
              Yono Sbi{" "}
              <span className="text-gray-400 text-sm">yonosbi@gmail.com</span>{" "}
              <button className="text-blue-600">unSubscribe</button>{" "}
            </p>
            <p className="flex  text-sm text-gray-400 items-center gap-1">
              to me <ChevronDown className="w-4 h-4" />{" "}
            </p>
          </div>
        </div>
        <div className="2 w-1/2 flex justify-end gap-3">
          <p className="text-gray-400 text-sm">
            Apr 11, 2024, 2:27 PM (2 days ago)
          </p>
          <Star className="w-4 h-4" />
          <Reply className="w-4 h-4" />
          <EllipsisVertical className="w-4 h-4" />
        </div>
      </div>

      <div className="mail-content my-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          velit architecto deserunt iure, placeat ea corrupti ex aut alias.
          Consequuntur earum rem doloribus modi voluptatem velit et asperiores,
          odit hic sequi, nulla, eius voluptates consectetur doloremque quod
          praesentium suscipit sunt veniam. Molestias, quae! Magnam voluptatum,
          excepturi ex culpa possimus molestiae nobis, explicabo ea cum, aut
          minima vero alias quis libero magni tempore? Ipsam molestiae sapiente
          iusto qui sequi aliquid omnis dolorem sed nemo deserunt possimus
          obcaecati at vel dicta odio aliquam ipsum inventore atque eveniet
          quibusdam placeat vitae repellendus, rerum in! Aperiam obcaecati
          inventore debitis est, veniam atque tenetur officiis, in quam ea
          eligendi deserunt harum doloremque eum dolorum quae dolores itaque
          iure commodi adipisci nihil error natus. Eaque et blanditiis non nihil
          fugit totam rem ducimus, ut iusto, laborum adipisci laudantium velit
          voluptas accusamus eos nemo nostrum vitae exercitationem ab, quo enim
          beatae expedita quia? Nam ut tempore esse quas aut, officia eius,
          tenetur earum ea quia velit illum distinctio, iure temporibus magnam
          porro magni odio. Quam cumque recusandae quidem reprehenderit
          suscipit, in ullam, at placeat dolorum, incidunt aliquid. Tempora
          beatae, iste commodi nihil neque harum mollitia voluptate a saepe
          error animi illo consequatur deleniti magnam maiores velit accusamus.
        </p>
      </div>

      <div className="reply flex gap-2 ">
        <Button
          className="rounded-2xl px-5 flex items-center gap-2"
          variant="outline">
          {" "}
          <Reply className="w-5 h-5 cursor-pointer" /> Reply
        </Button>
        <Button
          className="rounded-2xl px-5 flex items-center gap-2 "
          variant="outline">
          {" "}
          <Forward className="w-5 h-5" /> Forward
        </Button>
      </div>
    </div>
  );
};

export default DetailsPage;
