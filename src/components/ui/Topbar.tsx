
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Input } from "@/components/ui/input";
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
  import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
export default function Topbar (){
    return(
        <>
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
          </>
    )
}