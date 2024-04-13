"use client";

import Link from "next/link";
import { MdLabelImportantOutline } from "react-icons/md";
import { LuMails } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";
import { RiSpam2Line } from "react-icons/ri";
import { PiTagSimple } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { SketchPicker, BlockPicker, CompactPicker } from "react-color";
import EmojiPicker from "emoji-picker-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import {
  AlignLeft,
  BookImage,
  Cloud,
  Copy,
  CreditCard,
  Github,
  HardDrive,
  Images,
  LifeBuoy,
  Link2,
  LockKeyhole,
  LogOut,
  Mail,
  Maximize2,
  Minus,
  Paperclip,
  PencilLine,
  PlusCircle,
  Redo2,
  Redo2Icon,
  Trash2,
  Undo2,
  User,
  UserPlus,
  X,
} from "lucide-react";
import { Label } from "@/components/ui/label";

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
  DropdownMenuShortcut,
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
import { useContext, useRef, useState } from "react";
import { menuContext } from "@/context/MenuContext";
import { Textarea } from "./textarea";
import {
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import ListingPage from "./ListingPage";
import DetailsPage from "./DetailsPage";

export function Dashboard() {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isCategoryOpen, setisCategoryOpen] = useState<boolean>(false);
  const [HoveredCat, setIsHovered] = useState<string>("");
  const [RecipientsOpne, setRecipients] = useState<boolean>(false);
  const [isModalExpand, setisModalExpand] = useState<boolean>(false);
  const [isModalminimize, setisModalminimize] = useState<boolean>(false);
  const [istextFormattingOpen, setistextFormattingOpen] =
    useState<boolean>(true);

  const [mailId, setMailId] = useState<string>("");

  // Get the current URL
  const currentUrl = new URL(window.location.href);

  // Retrieve the 'id' query parameter
  const id:string|null = currentUrl.searchParams.get("mail-id");

  const data = useContext(menuContext);
  console.log(data);

  return (
    <div className={` h-[90vh] mt-3  flex   `}>
      <div
        className={`  border-r bg-muted/40  md:${
          data?.menuOpen ? "block w-3/12" : "block w-[4rem]  "
        } block `}>
        <div
          className={`flex h-full  md:${!data?.menuOpen ? "hidden" : "block"}
          max-h-screen
        flex-col gap-2`}>
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="cursor-pointer rounded-2xl flex gap-2 items-center px-5 py-5">
                  <Edit size={18} />
                  <span className="">compose</span>
                </Button>
              </DialogTrigger>
              <DialogContent
                className={`md:${isModalExpand ? "max-w-5xl" : "max-w-md"}
${isModalExpand && "left-[50%] "}

              md:h-[30rem]`}>
                <DialogHeader>
                  <DialogTitle className=" ">
                    <div className="flex items-centerpx-3 py-2 justify-between">
                      <p>New Message</p>
                      <div className="flex items-center gap-2">
                        <DialogClose asChild>
                          <Minus
                            onClick={() => setisModalminimize((prev) => !prev)}
                            className="w-4 h-4 hover:bg-muted cursor-pointer"
                          />
                        </DialogClose>
                        <DialogClose asChild>
                          <X className="w-4 h-4 hover:bg-muted cursor-pointer" />
                        </DialogClose>

                        <Maximize2
                          onClick={() => setisModalExpand((prev) => !prev)}
                          className="w-3 h-3 hover:bg-muted cursor-pointer"
                        />
                      </div>
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    <p
                      onClick={() => setRecipients(true)}
                      className={`w-full ${RecipientsOpne && "hidden"}  my-2 `}>
                      Recipients
                    </p>

                    {RecipientsOpne && (
                      <>
                        <div className="from">
                          <p className=" ">
                            From
                            <span className="text-sm mx-2 font-serif">
                              Pushpendra patel
                            </span>
                            <span className="text-sm font-serif">
                              pushpendrapatel8055@gmail.com
                            </span>
                          </p>
                        </div>
                        <div className="to flex items-center gap-2 my-2 ">
                          <p>To</p>
                          <Input
                            className="h-5 border-none focus:border-none focus:outline-none focus-visible:outline-none rounded-none"
                            type="email"
                          />
                          <div className="flex gap-1">
                            <a className="cursor-pointer    ">Cc</a>
                            <a className="cursor-pointer">Bcc</a>
                          </div>
                        </div>
                      </>
                    )}

                    <Separator className="my-2" />
                    <div className="to flex items-center gap-2 my-2 ">
                      <Input
                        placeholder="Subject"
                        className="h-5 placeholder:px-0 border-none focus:border-none focus:outline-none focus-visible:outline-none rounded-none"
                        type="email"
                      />
                    </div>
                    <Separator className="my-2" />
                    <div className="content-part">
                      <Textarea />
                    </div>
                  </DialogDescription>
                </DialogHeader>
                {istextFormattingOpen && (
                  <div className="flex px-2 py-1 bg-gray bg-muted rounded-sm shadow-2xl items-center space-x-3">
                    <Undo2 className="h-5 w-5  cursor-pointer" />
                    <Redo2Icon className="h-5 w-5  cursor-pointer" />
                    <Separator orientation="vertical" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <p className="flex items-center gap-1 cursor-pointer text-sm">
                          Sans-sarif
                          <ChevronDown className="w-4 h-4" />
                        </p>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4" />
                            <span>Keyboard shortcuts</span>
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Team</span>
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <UserPlus className="mr-2 h-4 w-4" />
                              <span>Invite users</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  <span>More...</span>
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                          <DropdownMenuItem>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>New Team</span>
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Github className="mr-2 h-4 w-4" />
                          <span>GitHub</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <LifeBuoy className="mr-2 h-4 w-4" />
                          <span>Support</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                          <Cloud className="mr-2 h-4 w-4" />
                          <span>API</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {/* secons dropdown */}
                    <Separator orientation="vertical" />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <p className="flex text-xs items-center gap-0 cursor-pointer ">
                          T <span className="text-lg">T</span>
                          <ChevronDown className="w-4 h-4" />
                        </p>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Keyboard className="mr-2 h-4 w-4" />
                            <span>Keyboard shortcuts</span>
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Team</span>
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <UserPlus className="mr-2 h-4 w-4" />
                              <span>Invite users</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <MessageSquare className="mr-2 h-4 w-4" />
                                  <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  <span>More...</span>
                                </DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                          <DropdownMenuItem>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>New Team</span>
                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Github className="mr-2 h-4 w-4" />
                          <span>GitHub</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <LifeBuoy className="mr-2 h-4 w-4" />
                          <span>Support</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>
                          <Cloud className="mr-2 h-4 w-4" />
                          <span>API</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="flex gap-5 items-center">
                      <p className="font-bold">B</p>
                      <p
                        className="font-bold"
                        style={{ fontStyle: "italic" }}>
                        I
                      </p>
                      <p
                        className="font-bold"
                        style={{ textDecoration: "underline" }}>
                        U
                      </p>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <p
                            style={{ textDecoration: "underline" }}
                            className="flex items-center font-bold gap-0 cursor-pointer text-sm">
                            A
                            <ChevronDown className="w-4 h-4" />
                          </p>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-72">
                          <div className=" ">
                            <div>
                              <p>Background Color</p>
                              <CompactPicker />
                            </div>
                            <div>
                              <p> Text Color</p>
                              <CompactPicker />
                            </div>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <p className="flex items-center gap-0">
                        <AlignLeft
                          className="w-5 h-5"
                          absoluteStrokeWidth
                        />
                        <ChevronDown className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <Button className="px-3 py-1 bg-blue-700 text-white hover:bg-blue-500 rounded-2xl">
                      <p>Send</p>
                      <Separator
                        className="mx-2"
                        orientation="vertical"
                      />
                      <ChevronDown className="mr-2 h-4 w-4 " />
                    </Button>

                    <p
                      onClick={() => setistextFormattingOpen((prev) => !prev)}
                      className="underline font-bold px-2 py-0 cursor-pointer  bg-slate-800 rounded-sm">
                      A
                    </p>
                    <input
                      className="hidden"
                      type="file"
                    />
                    <Paperclip className="w-4 h-4 " />
                    <Link2 className="w-4 h-4 " />
                    <EmojiPicker open={false} />
                    <HardDrive className="w-4 h-4 " />
                    <Images className="w-4 h-4 " />
                    <LockKeyhole className="w-4 h-4 " />
                    <PencilLine className="w-4 h-4 " />

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
                  </div>
                  <Trash2 className="w-4 h-4 " />
                </div>
              </DialogContent>
              {isModalminimize && (
                <div className="minimize-box absolute right-4 top-[94vh] z-30 flex items-center w-[14rem] bg-slate-900 px-2 py-2 rounded-sm justify-between">
                  <p className="text-sm">New Message</p>
                  <div className="flex items-center gap-2">
                    <DialogTrigger asChild>
                      <Minus
                        onClick={() => setisModalminimize((prev) => !prev)}
                        className="w-4 h-4 hover:bg-muted cursor-pointer"
                      />
                    </DialogTrigger>

                    <X
                      onClick={() => setisModalminimize((prev) => !prev)}
                      className="w-4 h-4 hover:bg-muted cursor-pointer"
                    />

                    <DialogTrigger asChild>
                      <Maximize2
                        onClick={() => setisModalExpand((prev) => !prev)}
                        className="w-3 h-3 hover:bg-muted cursor-pointer"
                      />
                    </DialogTrigger>
                  </div>
                </div>
              )}
            </Dialog>
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

          <div className=" max-h-[63vh] overflow-x-scroll w-full scrollbar">
            {id ? <DetailsPage mailId={id} /> : <ListingPage setMailId={setMailId} />}
          </div>
        </main>
      </div>
    </div>
  );
}
