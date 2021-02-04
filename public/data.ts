import { features } from "process";

export interface ImageProps {
  url: string;
}

export interface CardItemProps {
  title?: string;
  direction?: "row" | "column";
  id?: string;
  item?: boolean;
  price: string;
  desc: string;
  images: Array<ImageProps>;
  index?: string;
  features?: string[];
}

export interface CardProps {
  type: string;
  content: Array<CardItemProps>;
}

const list: Array<CardProps> = [
  {
    type: "VTuber",
    content: [
      {
        title: "Half Body",
        desc: "Half Body Art ready to rig for Streaming/Recording as Vtuber",
        price: "100",
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806899476841234482/fyhaen.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806901002401349632/alpakapng.png",
          },
        ],
      },
      {
        title: "Full Body",
        desc: "Full Body Art ready to rig for Streaming/Recording as Vtuber",
        price: "150",
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/806991535887351808/SnowModel.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/806991549283827733/yukipng.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/806991457264599070/kit.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/806991558335397928/yumi1.png",
          },
        ],
      },
    ],
  },
  {
    type: "Art",
    content: [
      {
        title: "Bust",
        desc:
          "Bust up character of your choice, with no background or a simple one/ flat color.",
        price: "40",
        features: [
          "Can have additional characters (Each one is +60% of the price).",
          "Can have background (up to +50% of the price)",
        ],
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/806544763699724289/806963458481455124/KOkkz9S0_1.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/806981513996533810/A9JK3yeC.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806964314376241192/amq1.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806964400711270441/amq2.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806964513597292564/artia2.png",
          },
        ],
      },
      {
        title: "Waist up",
        desc:
          "Waist up (or a little more) Art with no Background, or a flat color one, of the character of your choice",
        price: "60",
        features: [
          "Can have additional characters (Each one is +60% of the price).",
          "Can have background (up to +50% of the price)",
        ],
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806950273649737798/pamy.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806950277617025115/Hime_goto.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806950283468472390/kiara.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806960341795864646/haruko.png",
          },
        ],
      },
      {
        title: "Full Body",
        features: [
          "Can have additional characters (Each one is +60% of the price).",
          "Can have background (up to +50% of the price)",
        ],
        desc:
          "Full Body Art with no Background, or a flat color one of the character of your choice",
        price: "80",
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806975093317566474/takemi.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/806975455609225276/hayasaka.png",
          },
        ],
      },
    ],
  },
  {
    type: "Stream",
    content: [
      {
        title: "Emotes",
        desc:
          "Emotes with the character of your choice (for Youtube, Twitch, Discord and others).",
        price: "20",
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/804204717386367056/Group_1_1.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/684813872363995156/804206448056860682/Group_1_2.png",
          },
        ],
      },
      {
        title: "Overlay pack",
        desc:
          "Emotes with the character of your choice (for Youtube, Twitch, Discord and others).",
        price: "60",
        direction: "row",
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/807005702643384330/Fubuki.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/807005704300527656/Overlay_2.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/807005705218293800/Risu.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/807005708175802368/Desktop_-_12.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/807005700223795260/Frame_5.png",
          },
        ],
      },
    ],
  },
];

export default list;
