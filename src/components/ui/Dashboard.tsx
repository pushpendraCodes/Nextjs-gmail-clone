"use client";

import Link from "next/link";
import { MdLabelImportantOutline } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";
import { RiSpam2Line } from "react-icons/ri";
import { PiTagSimple } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  ArrowBigRight,
  Bell,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  CircleUser,
  ClipboardMinus,
  Clock5,
  CopySlash,
  Edit,
  EllipsisVertical,
  Home,
  Inbox,
  Info,
  Keyboard,
  LineChart,
  Menu,
  MessageSquare,
  MessageSquareMore,
  Package,
  Package2,
  PencilIcon,
  Plus,
  RotateCcw,
  Search,
  SendHorizontal,
  Settings,
  ShoppingCart,
  Star,
  Tag,
  Users,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useContext, useState } from "react";
import { menuContext } from "@/context/MenuContext";

export function Dashboard() {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isCategoryOpen, setisCategoryOpen] = useState<boolean>(false);
  const [HoveredCat, setIsHovered] = useState<string>("");

  const data = useContext(menuContext);
  console.log(data);

  return (
    <div className={` min-h-screen mt-2  flex   `}>
      <div
        className={`  border-r bg-muted/40  md:${
          data?.menuOpen ? "block w-3/12" : "block w-[4rem]  "
        } block `}>
        <div
          className={`flex h-full  md:${!data?.menuOpen ? "hidden" : "block"}
          max-h-screen
        flex-col gap-2`}>
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Button
              variant="secondary"
              size="sm"
              className="cursor-pointer rounded-2xl flex gap-2 items-center px-5 py-5">
              <Edit size={18} />
              <span className="">compose</span>
            </Button>
          </div>
          <div className="flex-1 max-h-[80vh]  overflow-scroll scrollbar ">
            <nav className="grid gap-1 items-start px-3 pb-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 bg-muted hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Inbox className="h-4 w-4" />
                Inbox
                <p className="ml-auto flex font-thin   shrink-0 items-center justify-center ">
                  4152
                </p>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Star className="h-4 w-4" />
                starred
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted  px-3 py-2 transition-all hover:text-primary">
                <Clock5 className="h-4 w-4" />
                snoozed
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 hover:bg-muted py-2 text-muted-foreground transition-all hover:text-primary">
                <SendHorizontal className="h-4 w-4" />
                sent
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <ClipboardMinus className="h-4 w-4" />
                Drafts
                <p className="ml-auto flex font-thin  h-6 w-6 shrink-0 items-center justify-center ">
                  6
                </p>
              </Link>
              <p
                onClick={() => setIsMore((prev) => !prev)}
                className="flex cursor-pointer items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                {!isMore ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}

                {!isMore ? "More" : "Less"}
              </p>

              {isMore && (
                <div>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <MdLabelImportantOutline className="h-4 w-4" />
                    Important
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <MessageSquareMore className="h-4 w-4" />
                    Chats
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <CalendarCheck className="h-4 w-4" />
                    Scheduled
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <LuMails className="h-4 w-4" />
                    All Mail
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <RiSpam2Line className="h-4 w-4" />
                    Spam
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <CiTrash className="h-4 w-4" />
                    Trash
                  </Link>

                  <p
                    onClick={() => setisCategoryOpen((prev) => !prev)}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 ${
                      isCategoryOpen ? "text-muted-foreground" : "text-primary"
                    }    transition-all `}>
                    <span className="flex gap-0 items-center ">
                      {!isCategoryOpen ? (
                        <IoMdArrowDropright className="h-4 w-4" />
                      ) : (
                        <IoMdArrowDropdown className="h-4 w-4" />
                      )}

                      <PiTagSimple className="h-4 w-4" />
                    </span>
                    Categories
                  </p>
                  {isCategoryOpen && (
                    <div className="w-4/5 mx-auto">
                      <p
                        onMouseEnter={() => setIsHovered("social")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center cursor-pointer gap-3  hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <Users className="h-4 w-4" />
                        Social
                        {HoveredCat === "social" ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <EllipsisVertical className="h-4 w-4 ml-auto flex font-thin  shrink-0 items-center justify-center " />
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              style={{ width: "12rem", height: "22rem" }}>
                              <div className="grid w-full gap-2">
                                <div className=" w-full px-3 py-1 rounded-md cursor-pointer hover:bg-muted flex items-center justify-between">
                                  <p className="">a</p>
                                  <p className="font-thin">label color</p>
                                  <ChevronRight size={15} />
                                </div>
                                <Separator className="my-1" />
                                <div>
                                  <p className="font-normal">in label list</p>
                                  <p className="flex hover:bg-muted px-3 py-1 rounded-md cursor-pointer font-thin items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                                <Separator className="" />
                                <div>
                                  <p className="font-normal">in message list</p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <p className="ml-auto flex font-thin  shrink-0 items-center justify-center ">
                            4152
                          </p>
                        )}
                      </p>
                      <p
                        onMouseEnter={() => setIsHovered("updates")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center cursor-pointer gap-3 hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <Info className="h-4 w-4" />
                        Updates
                        {HoveredCat === "updates" ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <EllipsisVertical className="h-4 w-4 ml-auto flex font-thin  shrink-0 items-center justify-center " />
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              style={{ width: "12rem", height: "22rem" }}>
                              <div className="grid w-full gap-2">
                                <div className=" w-full px-3 py-1 rounded-md cursor-pointer hover:bg-muted flex items-center justify-between">
                                  <p className="">a</p>
                                  <p className="font-thin">label color</p>
                                  <ChevronRight size={15} />
                                </div>
                                <Separator className="my-1" />
                                <div>
                                  <p className="font-normal">in label list</p>
                                  <p className="flex hover:bg-muted px-3 py-1 rounded-md cursor-pointer font-thin items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                                <Separator className="" />
                                <div>
                                  <p className="font-normal">in message list</p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <p className="ml-auto flex font-thin  shrink-0 items-center justify-center ">
                            4152
                          </p>
                        )}
                      </p>
                      <p
                        onMouseEnter={() => setIsHovered("forums")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center gap-3 cursor-pointer hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <CopySlash className="h-4 w-4" />
                        Forums
                        {HoveredCat === "forums" ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <EllipsisVertical className="h-4 w-4 ml-auto flex font-thin  shrink-0 items-center justify-center " />
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              style={{ width: "12rem", height: "22rem" }}>
                              <div className="grid w-full gap-2">
                                <div className=" w-full px-3 py-1 rounded-md cursor-pointer hover:bg-muted flex items-center justify-between">
                                  <p className="">a</p>
                                  <p className="font-thin">label color</p>
                                  <ChevronRight size={15} />
                                </div>
                                <Separator className="my-1" />
                                <div>
                                  <p className="font-normal">in label list</p>
                                  <p className="flex hover:bg-muted px-3 py-1 rounded-md cursor-pointer font-thin items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                                <Separator className="" />
                                <div>
                                  <p className="font-normal">in message list</p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <p className="ml-auto flex font-thin  shrink-0 items-center justify-center ">
                            4152
                          </p>
                        )}
                      </p>
                      <p
                        onMouseEnter={() => setIsHovered("promotions")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center gap-3  cursor-pointer hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <Tag className="h-4 w-4" />
                        Promotions
                        {HoveredCat === "promotions" ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <EllipsisVertical className="h-4 w-4 ml-auto flex font-thin  shrink-0 items-center justify-center " />
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              style={{ width: "12rem", height: "22rem" }}>
                              <div className="grid w-full gap-2">
                                <div className=" w-full px-3 py-1 rounded-md cursor-pointer hover:bg-muted flex items-center justify-between">
                                  <p className="">a</p>
                                  <p className="font-thin">label color</p>
                                  <ChevronRight size={15} />
                                </div>
                                <Separator className="my-1" />
                                <div>
                                  <p className="font-normal">in label list</p>
                                  <p className="flex hover:bg-muted px-3 py-1 rounded-md cursor-pointer font-thin items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                                <Separator className="" />
                                <div>
                                  <p className="font-normal">in message list</p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> show{" "}
                                  </p>
                                  <p className="flex hover:bg-muted font-thin px-3 py-1 rounded-md cursor-pointer items-center gap-5 my-4">
                                    {" "}
                                    <Check size={18} /> Hide{" "}
                                  </p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <p className="ml-auto flex font-thin  shrink-0 items-center justify-center ">
                            4152
                          </p>
                        )}
                      </p>
                    </div>
                  )}

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <Settings className="h-4 w-4" />
                    Manage lables
                  </Link>

                  <Dialog>
                    <DialogTrigger asChild>
                      <p className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                        <Plus className="h-4 w-4" />
                        Create New Label
                      </p>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="username"
                            className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              <p className="flex items-center justify-between gap-3  px-3 text-xl py-2 text-muted-foreground transition-all ">
                Labels
                <Plus className="h-4 w-4" />
              </p>
            </nav>
          </div>
        </div>
        {/* hides menu only icon */}
        <div
          onMouseEnter={data.handleMouseEnter}
          onMouseLeave={data.handleMouseLeave}
          className={`flex h-full  md:${data?.menuOpen ? "hidden" : "block"}
         max-h-screen hover:$ flex-col gap-2`}>
          <div className="flex h-14 items-center border-b px-1 lg:h-[60px] ">
            <Link
              href="#"
              className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <PencilIcon className="h-7 w-7" />
            </Link>
          </div>
          <div className=" w-full max-h-[80vh] overflow-x-hidden overflow-y-scroll scrollbar ">
            <nav className="grid  gap-1 ">
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Inbox className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 hover:bg-muted rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Star className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted  px-3 py-2 transition-all hover:text-primary">
                <Clock5 className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 hover:bg-muted py-2 text-muted-foreground transition-all hover:text-primary">
                <SendHorizontal className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <ClipboardMinus className="h-5 w-5" />
              </Link>
              <p
                onClick={() => setIsMore((prev) => !prev)}
                className="flex cursor-pointer items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                {!isMore ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronUp className="h-5 w-5" />
                )}

                {/* more links start */}
              </p>

              {isMore && (
                <div>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <MdLabelImportantOutline className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <MessageSquareMore className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <CalendarCheck className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <LuMails className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <RiSpam2Line className="h-5 w-5" />
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <CiTrash className="h-5 w-5" />
                  </Link>

                  <p
                    onClick={() => setisCategoryOpen((prev) => !prev)}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 ${
                      isCategoryOpen ? "text-muted-foreground" : "text-primary"
                    }    transition-all `}>
                    <span className="flex gap-0 items-center ">
                      {!isCategoryOpen ? (
                        <IoMdArrowDropright className="h-5 w-5" />
                      ) : (
                        <IoMdArrowDropdown className="h-5 w-5" />
                      )}

                      <PiTagSimple className="h-5 w-5" />
                    </span>
                  </p>
                  {isCategoryOpen && (
                    <div className="w-4/5 mx-auto">
                      <p
                        onMouseEnter={() => setIsHovered("social")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center cursor-pointer gap-3  hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <Users className="h-4 w-4" />
                      </p>
                      <p
                        onMouseEnter={() => setIsHovered("updates")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center cursor-pointer gap-3 hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <Info className="h-5 w-5" />
                      </p>
                      <p
                        onMouseEnter={() => setIsHovered("forums")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center gap-3 cursor-pointer hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <CopySlash className="h-5 w-5" />
                      </p>
                      <p
                        onMouseEnter={() => setIsHovered("promotions")}
                        onMouseLeave={() => setIsHovered("")}
                        className="flex items-center gap-3  cursor-pointer hover:bg-muted rounded-lg px-3 py-2  transition-all text-primary">
                        <Tag className="h-5 w-5" />
                      </p>
                    </div>
                  )}

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <Settings className="h-5 w-5" />
                  </Link>

                  <Dialog>
                    <DialogTrigger asChild>
                      <p className="flex items-center gap-3 rounded-lg hover:bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                        <Plus className="h-5 w-5" />
                      </p>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="name"
                            className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value="Pedro Duarte"
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label
                            htmlFor="username"
                            className="text-right">
                            Username
                          </Label>
                          <Input
                            id="username"
                            value="@peduarte"
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              <p className="flex items-center justify-between gap-3  px-3 text-xl py-2 text-muted-foreground transition-all ">
                <Plus className="h-5 w-5" />
              </p>
              {/* more links end here */}
            </nav>
          </div>
        </div>

        {/* end only icons section */}
      </div>

      <div
        className={`flex flex-col md:${
          data?.menuOpen ? " w-9/12" : "w-full"
        } w-full  `}>
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Home className="h-5 w-5" />
                  Dashboard
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      size="sm"
                      className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          {/* //topbar */}
          <div className="w-full flex-1  items-center">
            <form>
              <div className="relative">
                <Search className="absolute lg md:hidden left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full lg md:hidden appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="cursor-pointer mt-0">
                    <div className="flex items-center space-x-1">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <ChevronDown size={18} />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </label>
                    </div>
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>select</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer ml-2">
                  <RotateCcw size={18} />
                </Button>
                <TooltipContent>
                  <p>refresh</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer">
                  <EllipsisVertical size={18} />
                </Button>
              </PopoverTrigger>
              <PopoverContent style={{ width: "15rem" }}>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className=" flex items-center gap-5">
            <div className="lg md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <HoverCard>
              <HoverCardTrigger>
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer ml-2">
                  <span className="text-xs text-gray-400"> 1 of 12536</span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col items-center gap-3">
                <span className="text-sm text-gray-500">Oldest</span>
                <span className="text-sm text-gray-300">Newest</span>
              </HoverCardContent>
            </HoverCard>

            <div className="pagination flex items-center gap-4 ">
              <ChevronLeft
                color="gray"
                size={18}
                cursor={"pointer"}
              />
              <ChevronRight
                size={18}
                cursor={"pointer"}
              />
            </div>

            <div className="keyboard flex items-center gap-0">
              <p className="cursor-pointer p-1 rounded-full hover:bg-gray-500">
                <Keyboard size={18} />
              </p>

              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <p className="cursor-pointer p-1 rounded-full hover:bg-gray-500">
                      <ChevronDown size={18} />
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </label>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            {/* <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1> */}
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            {/* <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
