type mailType = {
  id:string;
    name: string;
    heading: string;
    desc: string;
    dateTime: string;
    from: string;
    isPromotion: boolean;
    isSocial: boolean;
  };
  import { nanoid } from 'nanoid'
  // const dummyData: mailType[] = [
  //   {
  //     name: "John Doe",
  //     heading: "Important Announcement",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     dateTime: "2024-04-09T08:00:00",
  //     from: "company@example.com",
  //     isPromotion: false,
  //     isSocial: false,
  //   },
  //   {
  //     name: "Alice Smith",
  //     heading: "Exclusive Offer Inside!",
  //     desc: "Check out our latest deals and discounts!",
  //     dateTime: "2024-04-08T12:30:00",
  //     from: "newsletter@example.com",
  //     isPromotion: true,
  //     isSocial: false,
  //   },
  //   // Add more dummy data as needed...
  // ];

  // Generate 50 dummy data points
  const generateDummyData = (): mailType[] => {
    const data: mailType[] = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        id:nanoid(),
        name: `User ${i + 1}`,
        heading: ` Heading for the Email ${i + 1}`,
        desc: `This is the mail description for email ${i + 1}`,
        dateTime: "2024-04-09T08:00:00",
        from: `user${i + 1}@example.com`,
        isPromotion: i % 2 === 0 ? true : false,
        isSocial: i % 3 === 0 ? true : false,
      });
    }
    return data;
  };

  export const fiftyDummyData = generateDummyData();

  console.log(fiftyDummyData);
