"use client";

import {
  SlidersHorizontal,
  Search,
  CircleHelp,
  Settings,
  CircleUser,
} from "lucide-react";
import Image from "next/image";
import { Menu } from "react-feather";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


import { useContext } from "react";
import { menuContext } from "@/context/MenuContext";

const Navbar = () => {
  const { toggleMenu } = useContext(menuContext);

  return (
    <main className="flex h-[6vh] justify-between items-center ">
      <div className="left flex gap-5 items-center w-3/12">
        <Menu
          onClick={toggleMenu}
          cursor={"pointer"}
          color="white"
          size={30}
        />



        <Image
          width={100}
          className="cursor-pointer"
          height={80}
          alt="logo"
          src={"/gmail-logo.png"}
        />
      </div>

      <div className="center w-6/12">
        <Popover>
          <PopoverTrigger asChild>
            <form className="ml-auto flex-1 w-full sm:flex-initial">
              <div className="relative">
                <Search className="absolute cursor-pointer left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search mail"
                  placeholder="Search mail..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-full"
                />
                <SlidersHorizontal className="absolute cursor-pointer rounded-full  right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </form>
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="right w-3/12 flex items-center gap-5 justify-end">
        <Button className="hover:bg-slate-500 p-2 bg-dark rounded-full">
          <CircleHelp color="white" />
        </Button>
        <Button className="hover:bg-slate-500 p-2 bg-dark rounded-full">
          <Settings color="white" />
        </Button>
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
    </main>
  );
};

export default Navbar;
