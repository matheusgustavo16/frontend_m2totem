import { httpClient } from "..";

const url = "/photo";

export const removeBg = (
  imageSrc: string,
  bgSrc: string,
  orientation: "horizontal" | "vertical"
) => httpClient.post(`${url}/removeBg`, { imageSrc, bgSrc, orientation });

export const generateQrCode = (imageSrc: string) =>
  httpClient.post(`${url}/generateQr`, { imageSrc });

export const applyPhraseToPicture = (
  imageSrc: string,
  phraseSrc: string,
  orientation?: "horizontal" | "vertical"
) =>
  httpClient.post(`${url}/applyPhrase`, {
    imageSrc,
    phraseSrc,
    orientation: orientation ? orientation : "horizontal"
  });
